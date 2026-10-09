# M10 — Sélecteur des arrêts intermédiaires — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Un composant réutilisable pour choisir les arrêts intermédiaires d'un trajet (ajout multiple, retrait, doublons, propositions une fois origine+destination choisies), persisté via un endpoint « set en lot ».

**Architecture:** Backend : handler `PUT routes/<id>/stops/` qui remplace atomiquement les escales par une liste ordonnée (hard-delete + recreate, sequence = index). Frontend : composant standalone `app-stops-picker` + réécriture de la section escales de l'écran Trajets, persistée par le PUT en lot.

**Tech Stack:** Django + DRF, pytest (`../env/bin/python -m pytest <path> -q --reuse-db`) ; Angular standalone + Transloco, `npx ng build --configuration development`.

**Spec:** `docs/superpowers/specs/2026-10-09-m10-selecteur-arrets-design.md`

## Global Constraints

- UI/texte en français. Commits as shimi, sans trailer Claude. Merge/push `deploy` seulement sur demande.
- Aucun changement de schéma (`RouteStop` existe déjà) → `makemigrations --check` propre.
- Doublons de `service_point` autorisés (unicité seulement `(route, sequence)`).
- Valider TOUS les `service_point_id` avant toute suppression (pas de remplacement partiel).

## Review Focus

- **PUT avec service_point d'une autre société** → 404, aucun arrêt supprimé. → Task 1 `test_bulk_foreign_sp_404_no_change`.
- **Remplacement répété** (collision de séquence évitée par hard-delete) → OK. → Task 1 `test_bulk_replace_twice`.
- **Doublon du même lieu** accepté. → Task 1 `test_bulk_allows_duplicate`.
- **Liste vide** → 0 arrêt, pas d'erreur. → Task 1 `test_bulk_empty_clears`.
- **Front** : changer origine/destination après ajout ne plante pas ; options recalculées. → Task 2 (build + logique getter).

---

## Task 1 : Backend — endpoint PUT « set stops » en lot

**Files:**
- Modify: `backend/apps/voyages_config/config_api/serializers.py` (`RouteStopItemWrite`, `RouteStopsBulkWrite`)
- Modify: `backend/apps/voyages_config/config_api/views.py` (`RouteStopListView.put`)
- Create: `backend/apps/voyages_config/test_route_stops_bulk.py`

**Interfaces:**
- Produces: `PUT routes/<id>/stops/` body `{stops:[{service_point_id, distance_from_origin_km?},…]}` → remplace, sequence=index+1, 404 si un sp invalide (sans modif), renvoie `RouteStopRead many`.

- [ ] **Step 1 : Test qui échoue** — `backend/apps/voyages_config/test_route_stops_bulk.py`

```python
import pytest
from rest_framework.test import APIClient
from apps.authentication.tokens import CustomRefreshToken


def _ctx():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.voyages_config.models import Town, ServicePoint, Route
    company, _ = create_company(name="StopsCo", admin_email="st@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="st@x.com")
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="Origine")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="Destination")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="Arrêt A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="Arrêt B")
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    return company, admin, route, a, b


def _client(admin):
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {CustomRefreshToken.for_user(admin).access_token}")
    return c


def _put(c, route, items):
    return c.put(f"/api/v1/voyages/config/routes/{route.id}/stops/", {"stops": items}, format="json")


@pytest.mark.django_db
def test_bulk_replace_sets_order():
    from apps.voyages_config.models import RouteStop
    company, admin, route, a, b = _ctx()
    r = _put(_client(admin), route, [{"service_point_id": str(a.id)}, {"service_point_id": str(b.id)}])
    assert r.status_code in (200, 201), r.content
    stops = list(RouteStop.objects.filter(route=route, is_deleted=False).order_by("sequence"))
    assert [s.service_point_id for s in stops] == [a.id, b.id]
    assert [s.sequence for s in stops] == [1, 2]


@pytest.mark.django_db
def test_bulk_replace_twice():
    from apps.voyages_config.models import RouteStop
    company, admin, route, a, b = _ctx()
    c = _client(admin)
    _put(c, route, [{"service_point_id": str(a.id)}, {"service_point_id": str(b.id)}])
    r = _put(c, route, [{"service_point_id": str(b.id)}])   # remplace, pas de collision de séquence
    assert r.status_code in (200, 201), r.content
    stops = list(RouteStop.objects.filter(route=route, is_deleted=False).order_by("sequence"))
    assert [s.service_point_id for s in stops] == [b.id]


@pytest.mark.django_db
def test_bulk_allows_duplicate():
    from apps.voyages_config.models import RouteStop
    company, admin, route, a, b = _ctx()
    r = _put(_client(admin), route, [{"service_point_id": str(a.id)}, {"service_point_id": str(a.id)}])
    assert r.status_code in (200, 201), r.content
    assert RouteStop.objects.filter(route=route, is_deleted=False, service_point=a).count() == 2


@pytest.mark.django_db
def test_bulk_empty_clears():
    from apps.voyages_config.models import RouteStop
    company, admin, route, a, b = _ctx()
    c = _client(admin)
    _put(c, route, [{"service_point_id": str(a.id)}])
    r = _put(c, route, [])
    assert r.status_code in (200, 201), r.content
    assert RouteStop.objects.filter(route=route, is_deleted=False).count() == 0


@pytest.mark.django_db
def test_bulk_foreign_sp_404_no_change():
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Town, ServicePoint, RouteStop
    company, admin, route, a, b = _ctx()
    c = _client(admin)
    _put(c, route, [{"service_point_id": str(a.id)}])          # état initial : 1 arrêt
    other, _ = create_company(name="Other", admin_email="o3@x.com", admin_first_name="A", admin_last_name="B")
    ft = ServicePoint.objects.create(company=other, town=Town.objects.create(company=other, name="X"),
                                     code="F", name="Foreign")
    r = _put(c, route, [{"service_point_id": str(a.id)}, {"service_point_id": str(ft.id)}])
    assert r.status_code == 404
    # aucun changement : l'arrêt initial subsiste
    stops = list(RouteStop.objects.filter(route=route, is_deleted=False).order_by("sequence"))
    assert [s.service_point_id for s in stops] == [a.id]
```

- [ ] **Step 2 : Lancer → échec**

Run: `../env/bin/python -m pytest apps/voyages_config/test_route_stops_bulk.py -q --reuse-db`
Expected: FAIL (PUT non géré → 405/erreur ; `test_bulk_foreign_sp_404_no_change` échoue car remplacement inexistant).

- [ ] **Step 3 : Serializers** — `config_api/serializers.py`

```python
class RouteStopItemWrite(serializers.Serializer):
    service_point_id = serializers.UUIDField()
    distance_from_origin_km = serializers.DecimalField(max_digits=8, decimal_places=1,
                                                       required=False, allow_null=True, default=None)


class RouteStopsBulkWrite(serializers.Serializer):
    stops = RouteStopItemWrite(many=True)
```

- [ ] **Step 4 : Vue PUT** — `config_api/views.py`, dans `RouteStopListView`

```python
    def put(self, request, route_id):
        from django.db import transaction
        route = self._route(request, route_id)
        if not route:
            return error_response("Trajet introuvable.", status_code=404)
        payload = S.RouteStopsBulkWrite(data=request.data)
        payload.is_valid(raise_exception=True)
        items = payload.validated_data["stops"]
        # Résoudre tous les lieux AVANT toute écriture (pas de remplacement partiel).
        resolved = []
        for it in items:
            sp = cfg_lookup(ServicePoint, it["service_point_id"], route.company_id)
            if not sp:
                return error_response("Lieu introuvable.", status_code=404)
            resolved.append((sp, it.get("distance_from_origin_km")))
        with transaction.atomic():
            route.stops.all().delete()  # hard delete — évite la collision unique (route, sequence)
            for idx, (sp, dist) in enumerate(resolved, start=1):
                RouteStop.objects.create(company=route.company, created_by=request.user,
                                         route=route, service_point=sp, sequence=idx,
                                         distance_from_origin_km=dist)
        stops = route.stops.filter(is_deleted=False).select_related("service_point").order_by("sequence")
        return success_response(S.RouteStopRead(stops, many=True).data)
```
(`route.stops.all().delete()` = hard delete du manager par défaut ; `RouteStop` n'a pas de FK protégée entrante.)

- [ ] **Step 5 : Lancer → vert**

Run: `../env/bin/python -m pytest apps/voyages_config/test_route_stops_bulk.py -q --reuse-db`
Expected: PASS (5 tests).

- [ ] **Step 6 : Non-régression + makemigrations check**

Run: `../env/bin/python -m pytest apps/voyages_config -q --reuse-db` ; puis `../env/bin/python manage.py makemigrations --check --dry-run` → « No changes detected ».
Expected: PASS hors rouges de base connus.

- [ ] **Step 7 : Commit**

```bash
git add backend/apps/voyages_config
git commit -m "feat(trajets): bulk PUT to set route stops (ordered, duplicates allowed, validate-before-replace) (M10)"
```

---

## Task 2 : Frontend — composant réutilisable app-stops-picker + intégration Trajets

**Files:**
- Create: `angular/src/_api/pages/voyages-config/shared/stops-picker/stops-picker.component.{ts,html}`
- Modify: `angular/src/_api/services/voyages-config/route.service.ts` (`setStops`)
- Modify: `angular/src/_api/pages/voyages-config/routes/routes.component.{ts,html}`
- Modify: `angular/public/i18n/{fr,en,es,pt}.json`

**Interfaces:**
- Consumes: `PUT routes/<id>/stops/` via `setStops(routeId, stops)` (Task 1). `VOYAGES_CONFIG.routeStops(routeId)` existe déjà.

- [ ] **Step 1 : Service** — `route.service.ts`

```ts
setStops(routeId: string, stops: { service_point_id: string; distance_from_origin_km?: number | null }[]):
  Observable<RouteStop[]> {
  return this.http.put<RouteStop[]>(VOYAGES_CONFIG.routeStops(routeId), { stops });
}
```

- [ ] **Step 2 : Composant `app-stops-picker`** (standalone)

`stops-picker.component.ts` : Inputs `@Input() options: { id: string; name: string; code?: string }[] = []`,
`@Input() stops: { service_point_id: string; service_point_name: string; distance_from_origin_km?: number | null }[] = []`,
`@Input() disabled = false` ; Output `@Output() stopsChange = new EventEmitter<...>()`.
État interne : `picked: string[] = []` (sélection multiple en attente). Méthodes :
- `addPicked()` : pour chaque id de `picked`, append `{ service_point_id: id, service_point_name: options.find(...).name }` à `stops` ; vider `picked` ; émettre `stopsChange`.
- `removeAt(i)` : retire l'élément i ; émettre.
- (doublons permis : ne pas filtrer les options déjà choisies.)
Template : un `<select multiple>` sur `options` (lié à `picked`) + bouton « Ajouter » (désactivé si `disabled` ou `!picked.length`) ; liste ordonnée des `stops` avec nom + champ distance (number) + bouton retirer ; message si `disabled` (« choisir d'abord l'origine et la destination »). Transloco `vcfg.stops.*`.

- [ ] **Step 3 : Intégration `routes.component.ts`**

- Champ `pickerStops: { service_point_id: string; service_point_name: string; distance_from_origin_km?: number|null }[] = [];`.
- Getter `stopOptions`: `const o=this.form.value.origin_id, d=this.form.value.destination_id; return (o && d) ? this.servicePoints.filter(s => s.id!==o && s.id!==d).map(s=>({id:s.id,name:s.name,code:s.code})) : [];`.
- Getter `stopsDisabled`: `!(this.form.value.origin_id && this.form.value.destination_id)`.
- `openCreate`: `this.pickerStops = []`. `openEdit`: `this.pickerStops = (r.stops||[]).map(s => ({ service_point_id: s.service_point, service_point_name: s.service_point_name, distance_from_origin_km: s.distance_from_origin_km }));` (après loadStops, mapper `this.stops`).
- `submit()` : après upsert (create/edit), dans le `next`, persister : `this.svc.setStops(routeId, this.pickerStops.map(s => ({ service_point_id: s.service_point_id, distance_from_origin_km: s.distance_from_origin_km ?? null }))).subscribe(...)` puis `load()`/close. (routeId = `r.id` en création, `this.editId` en édition.)
- Supprimer l'ancien flux `addStop`/`deleteStop`/`newStopSp`/`newStopDistance`/`savingStop` et le `loadStops` live (ou garder `loadStops` pour seed en édition). Nettoyer les imports/refs inutiles.

- [ ] **Step 4 : Intégration `routes.component.html`**

Remplacer le bloc escales (select unique + bouton + tableau add/delete) par :
`<app-stops-picker [options]="stopOptions" [disabled]="stopsDisabled" [stops]="pickerStops" (stopsChange)="pickerStops = $event"></app-stops-picker>`.
Importer `StopsPickerComponent` dans le `imports` du composant Routes.

- [ ] **Step 5 : i18n (fr/en/es/pt)**

Bloc `vcfg.stops` : `add` (« Ajouter »), `remove` (« Retirer »), `pick_ph` (« Choisir des arrêts… »),
`need_od` (« Choisissez d'abord l'origine et la destination. »), `col_stop` (« Arrêt »),
`col_distance` (« Distance (km) »), `empty` (« Aucun arrêt. »). `python json.load/dump` + revérifier le parse.

- [ ] **Step 6 : Build (gate)**

Run: `cd angular && npx ng build --configuration development`
Expected: `Application bundle generation complete.` ; plus de référence morte à `addStop`/`newStopSp` dans routes.

- [ ] **Step 7 : Commit**

```bash
git add angular/src angular/public/i18n
git commit -m "feat(trajets): reusable stops-picker (multi-add/remove/duplicates) + bulk persist on routes screen (M10)"
```

---

## Notes d'implémentation

- Le PUT en lot est idempotent-ish : il reflète exactement la liste envoyée (ordre + doublons).
- `RouteStop` n'a pas de FK protégée entrante ; le hard-delete est sûr et n'affecte pas les
  `TripStop` déjà matérialisés sur les voyages existants (ils référencent `service_point`).
- Garder le POST/DELETE unitaires existants (compat) — ne pas les retirer côté backend.

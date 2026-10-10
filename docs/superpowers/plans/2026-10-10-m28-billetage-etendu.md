# M28 — Billetage étendu Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Le billetage enregistre des valeurs configurables (bons de caisse, monnaie électronique, autres) en plus des coupures ; le total les intègre, mais l'écart de clôture reste sur les espèces.

**Architecture:** Nouvelle entité config `CashValueType` (calquée sur `CurrencyDenomination`). `CashCountItem` devient polymorphe (coupure OU valeur). `CashCount` porte `cash_total` + `other_total` (+ `total_amount` = grand total). `compute_count_total` renvoie les deux totaux ; `close_session` utilise le `cash_total` seul pour l'écart/solde/transfert.

**Tech Stack:** Django + DRF, pytest (`../env/bin/python -m pytest … -q`), Angular standalone + Transloco, SQLite (tests) / Postgres (prod).

**Spec:** `docs/superpowers/specs/2026-10-10-m28-billetage-etendu-design.md`

## Global Constraints

- Backend tests : `cd backend && ../env/bin/python -m pytest <chemin> -q` (`--create-db` après changement de schéma, sinon `--reuse-db`).
- `../env/bin/python manage.py makemigrations --check --dry-run` doit dire « No changes detected » avant tout commit de tâche backend.
- Frontend i18n édité via `python json.load/dump` + revérification du parse ; 4 locales `angular/public/i18n/{fr,en,es,pt}.json`.
- Gate frontend : `cd angular && npx ng build --configuration development` → « Application bundle generation complete ».
- Permissions réutilisées : `treasury.config.view` / `treasury.config.manage` (aucune nouvelle permission RBAC).
- Commits en tant que shimi, sans co-auteur Claude.
- Base rouge connue sur master : 4 tests trésorerie (register/expense) déjà rouges — ne pas leur imputer de régression (cf. mémoire master-preexisting-test-failures).

## Review Focus

- **Écart faussé par une valeur non-espèces** : une clôture avec un bon de caisse ne doit PAS créer d'écart ni gonfler le solde/transfert → test Task 2.
- **Ligne de comptage ambiguë** : un `CashCountItem` sans coupure ni valeur (ou avec les deux) doit être rejeté → test Task 2.
- **Non-régression billetage espèces seules** : `total_amount` et l'écart inchangés quand il n'y a que des coupures → test Task 2.
- **Valeur à montant ≤ 0 ou type inactif** : refus à la saisie → test Task 2.
- **Seed idempotent** : re-seed d'une société n'ajoute pas de doublon de type de valeur → test Task 1.

---

## Task 1 : Backend — entité `CashValueType` (config + seed)

**Files:**
- Modify: `backend/apps/treasury/models/billetage.py` (nouvelle classe `CashValueType`)
- Modify: `backend/apps/treasury/models/__init__.py` (export si applicable)
- Modify: `backend/apps/treasury/serializers.py` (`CashValueTypeSerializer`)
- Modify: `backend/apps/treasury/views.py` (`CashValueTypeListView`, `CashValueTypeDetailView`)
- Modify: `backend/apps/treasury/urls.py` (2 routes)
- Modify: `backend/apps/treasury/services/seed.py` (`seed_cash_value_types` + appel dans le bootstrap là où `seed_denominations` est appelé)
- Create: `backend/apps/treasury/tests/test_m28_value_types.py`
- Migration auto (`makemigrations treasury`)

**Interfaces:**
- Produces: `CashValueType(company, code, label, is_active, display_order)` ; endpoints `GET/POST /api/v1/treasury/value-types/`, `GET/PATCH/DELETE /api/v1/treasury/value-types/<uuid:pk>/` ; `seed_cash_value_types(company, created_by=None) -> int`.

- [ ] **Step 1 : Test rouge — modèle + seed**

Créer `test_m28_value_types.py` :

```python
import pytest
from apps.authentication.models import User


def _company(email="m28vt@x.com"):
    from apps.system_config.services import create_company
    c, _ = create_company(name="M28VT", admin_email=email, admin_first_name="A", admin_last_name="B")
    return c, User.objects.get(email=email)


@pytest.mark.django_db
def test_value_type_model_and_seed_idempotent():
    from apps.treasury.models import CashValueType
    from apps.treasury.services.seed import seed_cash_value_types
    company, admin = _company()
    n1 = seed_cash_value_types(company, created_by=admin)
    n2 = seed_cash_value_types(company, created_by=admin)  # idempotent
    codes = set(CashValueType.objects.filter(company=company).values_list("code", flat=True))
    assert {"BON", "ELEC", "AUTRE"} <= codes
    assert n1 >= 3 and n2 == 0


@pytest.mark.django_db
def test_value_type_crud_api():
    from rest_framework.test import APIClient
    company, admin = _company("m28vt2@x.com")
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.post("/api/v1/treasury/value-types/",
               {"code": "CHQ", "label": "Chèque", "display_order": 5}, format="json")
    assert r.status_code in (200, 201), r.content
    vid = r.json()["id"]
    r = c.get("/api/v1/treasury/value-types/")
    assert any(v["code"] == "CHQ" for v in (r.json().get("data") or r.json()))
    r = c.patch(f"/api/v1/treasury/value-types/{vid}/", {"label": "Chèque bancaire"}, format="json")
    assert r.status_code == 200 and r.json()["label"] == "Chèque bancaire"
    r = c.delete(f"/api/v1/treasury/value-types/{vid}/")
    assert r.status_code in (200, 204)
```

- [ ] **Step 2 : Lancer le test → rouge** (`ImportError`/404). `../env/bin/python -m pytest apps/treasury/tests/test_m28_value_types.py -q --create-db`

- [ ] **Step 3 : Modèle `CashValueType`** dans `billetage.py` (calqué sur `CurrencyDenomination`) :

```python
class CashValueType(BaseModel):
    """Type de valeur non-espèces saisissable au billetage (bon de caisse, monnaie électronique…)."""
    company       = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                       on_delete=models.CASCADE, related_name="cash_value_types")
    code          = models.CharField(_("code"), max_length=20)
    label         = models.CharField(_("libellé"), max_length=100)
    is_active     = models.BooleanField(_("actif"), default=True)
    display_order = models.PositiveIntegerField(_("ordre d'affichage"), default=0)

    class Meta(BaseModel.Meta):
        verbose_name        = _("type de valeur")
        verbose_name_plural = _("types de valeur")
        unique_together     = [("company", "code")]
        ordering            = ["display_order", "label"]

    def __str__(self):
        return self.label
```

Exporter dans `models/__init__.py` si les autres modèles y sont ré-exportés (vérifier le fichier).

- [ ] **Step 4 : Migration** `../env/bin/python manage.py makemigrations treasury` (AddModel `CashValueType`, pas de RunPython).

- [ ] **Step 5 : Serializer** dans `serializers.py` (à côté de `DenominationSerializer`) :

```python
class CashValueTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CashValueType
        fields = ["id", "code", "label", "is_active", "display_order", "created_at", "updated_at"]
```

Ajouter `CashValueType` à l'import en tête de `serializers.py`.

- [ ] **Step 6 : Vues** dans `views.py` (calquées sur `DenominationListView`/`DenominationDetailView`, mêmes `permission_map`) :

```python
class CashValueTypeListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.config.view", "POST": "treasury.config.manage"}

    def get(self, request):
        from apps.treasury.models import CashValueType
        qs = CashValueType.objects.filter(company=_company(request), is_deleted=False).order_by("display_order", "label")
        return success_response(CashValueTypeSerializer(qs, many=True).data)

    def post(self, request):
        from apps.treasury.models import CashValueType
        ser = CashValueTypeSerializer(data=request.data); ser.is_valid(raise_exception=True)
        d = ser.validated_data
        obj, created = CashValueType.objects.get_or_create(
            company=_company(request), code=d["code"],
            defaults={"label": d["label"], "is_active": d.get("is_active", True),
                      "display_order": d.get("display_order", 0), "created_by": request.user})
        if not created:
            return error_response("Ce type de valeur existe déjà.")
        return created_response(CashValueTypeSerializer(obj).data)


class CashValueTypeDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"PATCH": "treasury.config.manage", "DELETE": "treasury.config.manage"}

    def _get(self, request, pk):
        from apps.treasury.models import CashValueType
        return CashValueType.objects.filter(id=pk, company=_company(request), is_deleted=False).first()

    def patch(self, request, pk):
        obj = self._get(request, pk)
        if not obj:
            return error_response("Type de valeur introuvable.", status_code=status.HTTP_404_NOT_FOUND)
        for f in ("code", "label", "is_active", "display_order"):
            if f in request.data:
                setattr(obj, f, request.data[f])
        obj.updated_by = request.user; obj.save()
        return success_response(CashValueTypeSerializer(obj).data)

    def delete(self, request, pk):
        obj = self._get(request, pk)
        if not obj:
            return error_response("Type de valeur introuvable.", status_code=status.HTTP_404_NOT_FOUND)
        obj.is_deleted = True; obj.updated_by = request.user
        obj.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return no_content_response()
```

Ajouter `CashValueTypeSerializer` à l'import des serializers en tête de `views.py`.

- [ ] **Step 7 : URLs** dans `urls.py` (après les `denominations/`) :

```python
    path("value-types/",           views.CashValueTypeListView.as_view(),   name="value-type-list"),
    path("value-types/<uuid:pk>/", views.CashValueTypeDetailView.as_view(), name="value-type-detail"),
```

- [ ] **Step 8 : Seed** dans `seed.py` (calqué sur `seed_denominations`) :

```python
def seed_cash_value_types(company, created_by=None) -> int:
    from apps.treasury.models import CashValueType
    rows = [("BON", "Bon de caisse", 1), ("ELEC", "Monnaie électronique", 2), ("AUTRE", "Autre", 3)]
    n = 0
    for code, label, order in rows:
        _, created = CashValueType.objects.get_or_create(
            company=company, code=code,
            defaults={"label": label, "display_order": order, "created_by": created_by})
        if created:
            n += 1
    return n
```

Repérer où `seed_denominations(company, …)` est appelé au bootstrap société et ajouter `seed_cash_value_types(company, created_by=…)` juste à côté (même signature).

- [ ] **Step 9 : Vert + non-régression + check migration**

Run: `../env/bin/python -m pytest apps/treasury/tests/test_m28_value_types.py -q --create-db` → PASS
Run: `../env/bin/python -m pytest apps/treasury -q --reuse-db` → seuls les 4 rouges de base
Run: `../env/bin/python manage.py makemigrations --check --dry-run` → « No changes detected »

- [ ] **Step 10 : Commit**

```bash
git add backend/apps/treasury
git commit -m "feat(treasury): CashValueType config entity + seed (M28)"
```

---

## Task 2 : Backend — billetage polymorphe + écart espèces

**Files:**
- Modify: `backend/apps/treasury/models/billetage.py` (`CashCountItem.denomination` nullable + `value_type` FK ; `CashCount.cash_total` + `other_total`)
- Modify: `backend/apps/treasury/services/billetage.py` (`compute_count_total`, `record_count`, `record_shift_billetage`)
- Modify: `backend/apps/treasury/services/services.py` (`close_session` → écart sur `cash_total`)
- Modify: `backend/apps/treasury/serializers.py` (`CashCountSerializer` + item : `value_type`, `cash_total`, `other_total`)
- Create: `backend/apps/treasury/tests/test_m28_billetage.py`
- Migration auto

**Interfaces:**
- Consumes: `CashValueType` (Task 1).
- Produces: `compute_count_total(company, items) -> {"cash_total", "other_total", "grand_total", "resolved"}` où `resolved = [{"kind": "cash"|"value", "denomination"|"value_type": obj, "quantity": int, "unit_value": Decimal, "subtotal": Decimal}]`. `items` accepte `{"denomination_id","quantity"}` et/ou `{"value_type_id","amount"}`.

- [ ] **Step 1 : Test rouge** — créer `test_m28_billetage.py` :

```python
import pytest
from decimal import Decimal
from apps.authentication.models import User


def _ctx(email):
    from apps.system_config.services import create_company
    from apps.treasury.models import CashRegister, CurrencyDenomination, CashValueType
    from apps.treasury.services.services import create_cash_register, open_session
    from apps.core.models import Currency
    company, _ = create_company(name="M28B", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    cur = Currency.objects.filter(code="XAF").first()
    d1000 = CurrencyDenomination.objects.create(company=company, currency=cur, value=Decimal("1000"), created_by=admin)
    bon = CashValueType.objects.create(company=company, code="BON", label="Bon", created_by=admin)
    reg = create_cash_register(company=company, name="P", kind=CashRegister.Kind.PRINCIPALE,
                               manager_ids=[admin.id], created_by=admin)
    return company, admin, reg, d1000, bon


@pytest.mark.django_db
def test_compute_splits_cash_and_other():
    from apps.treasury.services.billetage import compute_count_total
    company, admin, reg, d1000, bon = _ctx("m28b1@x.com")
    res = compute_count_total(company, [
        {"denomination_id": str(d1000.id), "quantity": 5},   # 5000 espèces
        {"value_type_id": str(bon.id), "amount": "2000"},     # 2000 valeur
    ])
    assert res["cash_total"] == Decimal("5000")
    assert res["other_total"] == Decimal("2000")
    assert res["grand_total"] == Decimal("7000")


@pytest.mark.django_db
def test_ecart_is_cash_only():
    from apps.treasury.services.services import open_session, close_session
    company, admin, reg, d1000, bon = _ctx("m28b2@x.com")
    sess = open_session(company=company, cash_register=reg, opening_balance=Decimal("5000"), created_by=admin)
    # Espèces comptées = 5000 (= attendu) MAIS + un bon de 2000.
    close_session(sess, closing_count=[
        {"denomination_id": str(d1000.id), "quantity": 5},
        {"value_type_id": str(bon.id), "amount": "2000"},
    ], updated_by=admin)
    sess.refresh_from_db(); reg.refresh_from_db()
    assert sess.difference == Decimal("0")        # le bon n'inflate PAS l'écart
    assert reg.current_balance == Decimal("5000") # solde = espèces, pas 7000


@pytest.mark.django_db
def test_cash_only_unchanged_regression():
    from apps.treasury.services.billetage import compute_count_total
    company, admin, reg, d1000, bon = _ctx("m28b3@x.com")
    res = compute_count_total(company, [{"denomination_id": str(d1000.id), "quantity": 3}])
    assert res["cash_total"] == Decimal("3000") and res["other_total"] == Decimal("0")
    assert res["grand_total"] == Decimal("3000")


@pytest.mark.django_db
def test_value_line_requires_positive_amount():
    from apps.treasury.services.billetage import compute_count_total
    from apps.core.exceptions import ApplicationError
    company, admin, reg, d1000, bon = _ctx("m28b4@x.com")
    with pytest.raises(ApplicationError):
        compute_count_total(company, [{"value_type_id": str(bon.id), "amount": "0"}])
```

- [ ] **Step 2 : Lancer → rouge** (`compute_count_total` renvoie un tuple aujourd'hui ; clés absentes). `../env/bin/python -m pytest apps/treasury/tests/test_m28_billetage.py -q --create-db`

- [ ] **Step 3 : Modèle** — `billetage.py` :
  - `CashCountItem.denomination` : ajouter `null=True, blank=True`.
  - Ajouter `value_type = models.ForeignKey("treasury.CashValueType", null=True, blank=True, on_delete=models.PROTECT, related_name="+", verbose_name=_("type de valeur"))`.
  - `CashCount` : ajouter `cash_total` et `other_total` (`DecimalField(max_digits=14, decimal_places=2, default=0)`).

- [ ] **Step 4 : Migration** `../env/bin/python manage.py makemigrations treasury` (AlterField denomination nullable, AddField value_type, AddField cash_total/other_total ; pas de RunPython — les lignes existantes gardent `other_total=0`, `cash_total` sera recalculé seulement aux nouveaux comptages).

- [ ] **Step 5 : `compute_count_total`** — réécrire pour le nouveau contrat :

```python
def compute_count_total(company, items):
    from apps.treasury.models import CurrencyDenomination, CashValueType
    cash_total = Decimal("0"); other_total = Decimal("0"); resolved = []
    for row in items or []:
        if row.get("denomination_id"):
            qty = int(row.get("quantity") or 0)
            if qty < 0:
                raise ApplicationError(_("La quantité d'une coupure ne peut pas être négative."))
            if qty == 0:
                continue
            den = CurrencyDenomination.objects.filter(id=row["denomination_id"], company=company, is_deleted=False).first()
            if not den:
                raise ApplicationError(_("Coupure introuvable pour cette institution."))
            sub = (den.value * qty).quantize(Decimal("1."))
            cash_total += sub
            resolved.append({"kind": "cash", "denomination": den, "value_type": None,
                             "quantity": qty, "unit_value": den.value, "subtotal": sub})
        elif row.get("value_type_id"):
            amount = Decimal(str(row.get("amount") or "0"))
            if amount <= 0:
                raise ApplicationError(_("Le montant d'une valeur doit être supérieur à zéro."))
            vt = CashValueType.objects.filter(id=row["value_type_id"], company=company, is_active=True, is_deleted=False).first()
            if not vt:
                raise ApplicationError(_("Type de valeur introuvable ou inactif."))
            other_total += amount
            resolved.append({"kind": "value", "denomination": None, "value_type": vt,
                             "quantity": 1, "unit_value": amount, "subtotal": amount})
        else:
            raise ApplicationError(_("Ligne de comptage invalide (ni coupure ni valeur)."))
    return {"cash_total": cash_total, "other_total": other_total,
            "grand_total": cash_total + other_total, "resolved": resolved}
```

- [ ] **Step 6 : `record_count`** — adapter au dict :

```python
def record_count(session, *, kind, items, user):
    from apps.treasury.models import CashCount, CashCountItem
    r = compute_count_total(session.company, items)
    count = CashCount.objects.create(
        cash_session=session, kind=kind,
        cash_total=r["cash_total"], other_total=r["other_total"], total_amount=r["grand_total"],
        counted_by=user, created_by=user)
    CashCountItem.objects.bulk_create([
        CashCountItem(cash_count=count, denomination=x["denomination"], value_type=x["value_type"],
                      quantity=x["quantity"], unit_value=x["unit_value"], subtotal=x["subtotal"], created_by=user)
        for x in r["resolved"]])
    return count, r["grand_total"]
```

`record_shift_billetage` : inchangé (il appelle `record_count`).

- [ ] **Step 7 : `close_session`** (services.py ~158) — l'écart sur les espèces :

Remplacer
```python
if closing_count:
    closing_balance, _resolved = compute_count_total(session.company, closing_count)
```
par
```python
if closing_count:
    _r = compute_count_total(session.company, closing_count)
    record_count(session, kind=CashCount.Kind.CLOSING, items=closing_count, user=updated_by)
    closing_balance = _r["cash_total"]   # écart/solde/transfert sur les espèces uniquement
```
Vérifier qu'on ne crée pas deux fois le comptage : si `close_session` crée déjà un `CashCount` plus bas via `record_count`, ne pas le dupliquer — sinon déplacer la création ici et retirer l'ancienne. (Lire la suite de `close_session` avant d'éditer ; `_resolved` n'était pas utilisé.)

- [ ] **Step 8 : Serializer** — `CashCountSerializer` expose `cash_total`, `other_total`, `total_amount` ; l'item expose `value_type` (id) + un libellé. Ajouter un `value_type_label = serializers.CharField(source="value_type.label", read_only=True, default=None)`.

- [ ] **Step 9 : Vert + non-régression + check**

Run: `../env/bin/python -m pytest apps/treasury/tests/test_m28_billetage.py -q --create-db` → PASS
Run: `../env/bin/python -m pytest apps/treasury -q --reuse-db` → seuls les 4 rouges de base (billetage espèces inchangé)
Run: `../env/bin/python manage.py makemigrations --check --dry-run` → « No changes detected »

- [ ] **Step 10 : Commit**

```bash
git add backend/apps/treasury
git commit -m "feat(treasury): billetage value types + cash-only écart (M28)"
```

---

## Task 3 : Frontend — page config « Types de valeurs »

**Files:**
- Create: `angular/src/_api/services/treasury/value-type.service.ts`
- Create: `angular/src/_api/pages/treasury/config/value-types/value-types.component.{ts,html}`
- Modify: `angular/src/_api/config/api.config.ts` (endpoints `valueTypes`)
- Modify: route + entrée menu Configuration (mirroir de `denominations`)
- Modify: `angular/public/i18n/{fr,en,es,pt}.json` (clés `treasury.valuetype.*`)

**Interfaces:**
- Consumes: `GET/POST /treasury/value-types/`, `PATCH/DELETE /treasury/value-types/<id>/`.

- [ ] **Step 1 : Endpoints** dans `api.config.ts` (bloc trésorerie, à côté des denominations) :

```ts
  valueTypes: `${TRZ}/value-types/`,
  valueType: (id: string) => `${TRZ}/value-types/${id}/`,
```
(vérifier le préfixe réel `TRZ`/base trésorerie dans le fichier.)

- [ ] **Step 2 : Service** `value-type.service.ts` calqué sur `denomination.service.ts` (list/create/update/delete, `map(r => r.data ?? r)`).

- [ ] **Step 3 : Composant** `value-types.component.{ts,html}` calqué sur `denominations` : tableau (code, libellé, ordre, actif) + modale create/edit (code, libellé, ordre, actif) + suppression. Réutiliser `*hasPermission="'treasury.config.manage'"`.

- [ ] **Step 4 : Route + menu** — ajouter la route de la page et une entrée dans le menu Configuration (trésorerie), à côté de « Coupures ».

- [ ] **Step 5 : i18n** — clés `treasury.valuetype.title/new/col_label/col_order` + libellés, 4 locales, via `python json.load/dump` + revérif parse.

- [ ] **Step 6 : Build** `cd angular && npx ng build --configuration development` → complete.

- [ ] **Step 7 : Commit**

```bash
git add angular/src angular/public/i18n
git commit -m "feat(treasury): cash value types config page (M28)"
```

---

## Task 4 : Frontend — saisie billetage « Autres valeurs » + rapport

**Files:**
- Modify: `angular/src/_api/pages/treasury/sessions/sessions.component.{ts,html}` (section Autres valeurs dans la modale de clôture + fin de poste)
- Modify: contexte billetage : le service/vue renvoie `value_types` (déjà prévu Task 2 côté backend — ajouter `value_types` à la réponse de la vue contexte views.py:441 si pas fait)
- Modify: session report/reçu (affichage des autres valeurs) si applicable
- Modify: `angular/public/i18n/{fr,en,es,pt}.json`

**Interfaces:**
- Consumes: `value_types` (liste active) depuis le contexte billetage ; POST clôture avec `closing_count` incluant lignes `{value_type_id, amount}`.

- [ ] **Step 1 : Contexte** — s'assurer que la vue qui fournit les denominations (views.py:441) renvoie aussi `value_types` (actifs) :

```python
from apps.treasury.models import CashValueType
vts = CashValueType.objects.filter(company=_company(request), is_active=True, is_deleted=False).order_by("display_order")
# ... "value_types": CashValueTypeSerializer(vts, many=True).data
```
(Backend — à faire dans ce commit frontend car petit ; ou déplacer en Task 2. L'exécuteur choisit, en le notant.)

- [ ] **Step 2 : Composant** `sessions.component.ts` — ajouter `valueTypes: any[] = []`, `closeAmounts: Record<string, number> = {}` ; charger `value_types` du contexte ; étendre `toItems` :

```ts
private toItems(qty: Record<string, number>): any[] {
  const cash = this.denoms.filter(d => (qty[d.id] || 0) > 0).map(d => ({ denomination_id: d.id, quantity: qty[d.id] }));
  const vals = this.valueTypes.filter(v => (this.closeAmounts[v.id] || 0) > 0).map(v => ({ value_type_id: v.id, amount: this.closeAmounts[v.id] }));
  return [...cash, ...vals];
}
get otherTotal(): number { return this.valueTypes.reduce((s, v) => s + (+this.closeAmounts[v.id] || 0), 0); }
get grandTotal(): number { return this.closeTotal + this.otherTotal; }
```
`closeTotal` (espèces) reste la base de l'écart affiché ; `grandTotal` = total affiché.

- [ ] **Step 3 : Template** `sessions.component.html` — sous le tableau des coupures dans la modale de clôture, une section « Autres valeurs » : un champ montant par `valueTypes` ; afficher « Total espèces », « Autres valeurs », « Total général ». L'écart affiché reste calculé sur les espèces.

- [ ] **Step 4 : Rapport/reçu** — si le reçu de session liste le billetage, ajouter les lignes de valeur (libellé + montant) et le sous-total « autres valeurs ».

- [ ] **Step 5 : i18n** — `treasury.session.other_values`, `cash_total`, `grand_total` (4 locales).

- [ ] **Step 6 : Build** `cd angular && npx ng build --configuration development` → complete.

- [ ] **Step 7 : Commit**

```bash
git add angular/src angular/public/i18n backend/apps/treasury
git commit -m "feat(treasury): billetage saisie des autres valeurs + totaux (M28)"
```

---

## Notes d'implémentation

- **Point critique (écart)** : la seule règle non négociable est que l'écart, le solde de caisse et le transfert de clôture ne doivent dépendre que du `cash_total`. Tout le reste est additif.
- Avant d'éditer `close_session`, lire la fonction en entier (services.py:143+) pour ne pas dupliquer la création du `CashCount` (elle appelle peut-être déjà `record_count`).
- `CashCountItem.denomination` nullable : vérifier tous les accès `item.denomination.*` (ex. `session_report.py` gère déjà le cas nul).

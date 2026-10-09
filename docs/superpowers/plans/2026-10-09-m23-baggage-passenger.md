# M23 — Formulaire bagage : passager obligatoire, propriétaire en lecture seule — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rendre le passager (billet) obligatoire à l'enregistrement d'un bagage et afficher le propriétaire (nom/téléphone/pièce) en lecture seule depuis le billet, en retirant le parcours « sans billet ».

**Architecture:** Backend : `add_baggage` exige un billet et snapshote le propriétaire depuis `ticket.passenger` ; `BaggageWrite.ticket_id` requis ; le serializer billet (`TicketRead`) expose téléphone + pièce du passager. Frontend : `ticket_id` requis, suppression de la section expéditeur sans billet, bloc propriétaire en lecture seule alimenté par le billet choisi. Aucun changement de modèle / migration.

**Tech Stack:** Django + DRF (pytest `../env/bin/python -m pytest <path> -q --reuse-db`). Angular standalone (gate `npx ng build --configuration development`).

**Spec:** `docs/superpowers/specs/2026-10-09-m23-baggage-passenger-design.md`

## Global Constraints

- **Passager (billet) obligatoire** à la création ; le parcours « sans billet » (saisie manuelle expéditeur via `app-client-fields`) est **supprimé**.
- **Propriétaire en lecture seule** : nom + téléphone + pièce, tirés du billet (passager). Plus de saisie du propriétaire.
- Pas de changement de modèle ni de migration (les champs `sender_*`/`ticket` existent déjà ; on change le contrat de création).
- Bagages legacy sans billet : en édition, le propriétaire stocké s'affiche en lecture seule (pas de ressaisie, pas de billet rétroactif).
- Commits : auteur shimi, pas de co-author. Push (quand demandé) : **`git push deploy master`** uniquement.

## Review Focus

- **Création sans billet** → refusée (`add_baggage` lève `ApplicationError`) — testé en Task 1.
- **Propriétaire dérivé du passager** : le bagage porte `sender_name/phone/id_number` = ceux du passager du billet, `sender_client = passager` — testé en Task 1.
- **`BaggageWrite.ticket_id` requis** (payload sans billet invalide) — testé en Task 1.
- **`TicketRead` expose `passenger_phone`/`passenger_id_number`** (sinon le form ne peut pas afficher la pièce/téléphone) — testé en Task 1.
- **Form** : `ticket_id` requis + plus aucune référence à `app-client-fields`/`senderClient` + bloc propriétaire lecture seule — gate `ng build` (Task 2).

---

## Task 1 : Backend — billet obligatoire, propriétaire depuis le passager, TicketRead enrichi

**Files:**
- Modify: `backend/apps/voyages_consignment/services/baggage_services.py` (`add_baggage`)
- Modify: `backend/apps/voyages_consignment/config_api/serializers.py` (`BaggageWrite.ticket_id` requis)
- Modify: `backend/apps/voyages_booking/config_api/serializers.py` (`TicketRead`: passenger_phone/id_number)
- Modify: `backend/apps/voyages_consignment/test_baggage_sender_client.py` (repurpose le test no-ticket)
- Test: `backend/apps/voyages_consignment/test_baggage_passenger_required.py`

**Interfaces:**
- Produces: `add_baggage(..., ticket=<required, not None>, ...)` — lève si ticket absent ; propriétaire snapshoté depuis `ticket.passenger`.
- Produces: `TicketRead` expose `passenger_phone`, `passenger_id_number`.

- [ ] **Step 1 : Test RED**

Créer `backend/apps/voyages_consignment/test_baggage_passenger_required.py` :

```python
import pytest
from apps.core.exceptions import ApplicationError
from apps.voyages_consignment.services.baggage_services import add_baggage
from apps.voyages_consignment.config_api.serializers import BaggageWrite


@pytest.fixture
def ctx(db):
    """Réutilise le montage billet existant des tests billetterie."""
    from apps.voyages_booking.tests_integration_treasury import _setup, _book
    from apps.treasury.services import create_cash_register, open_session
    company, admin, trip = _setup()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    booking = _book(company, admin, trip)   # vend un billet sur le voyage
    from apps.voyages_booking.models import Ticket
    ticket = Ticket.objects.filter(booking__company=company).first()
    return company, admin, trip, ticket


def test_write_serializer_requires_ticket():
    assert BaggageWrite().fields["ticket_id"].required


@pytest.mark.django_db
def test_add_baggage_requires_ticket(ctx):
    company, admin, trip, ticket = ctx
    with pytest.raises(ApplicationError):
        add_baggage(company, trip=trip, ticket=None, amount_due=0, user=admin)


@pytest.mark.django_db
def test_add_baggage_owner_from_passenger(ctx):
    company, admin, trip, ticket = ctx
    b = add_baggage(company, trip=trip, ticket=ticket, amount_due=0, user=admin)
    pax = ticket.passenger
    assert b.ticket_id == ticket.id
    assert b.sender_name == pax.full_name
    assert b.sender_phone == pax.phone
    assert b.sender_client_id == pax.id
```

- [ ] **Step 2 : Lancer, vérifier l'échec**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_consignment/test_baggage_passenger_required.py -q --reuse-db`
Expected: FAIL — `ticket_id` non requis ; `add_baggage(ticket=None)` ne lève pas ; propriétaire pas dérivé du passager.

- [ ] **Step 3 : `add_baggage` — billet requis + propriétaire depuis le passager**

Dans `baggage_services.py`, remplacer le bloc de validation ticket et la dérivation expéditeur :

```python
    if trip is None:
        raise ApplicationError(_("Sélectionnez le voyage du bagage."))
    if ticket is None:
        raise ApplicationError(_("Le passager (billet) est obligatoire."))
    if ticket.status == "cancelled":
        raise ApplicationError(_("Impossible d'ajouter un bagage à un billet annulé."))
    if ticket.trip_id != trip.id:
        raise ApplicationError(_("Le billet choisi n'appartient pas à ce voyage."))
```
(supprimer l'ancien `if ticket is not None: ... elif not sender_name: ...`).

Dérivation du propriétaire (remplacer le bloc `sender_client = None ... get_or_create_passenger`):

```python
    pax = ticket.passenger
    sender_client = pax
    sender_name = pax.full_name
    sender_phone = pax.phone or ""
    id_type = pax.id_type or ""
    id_number = pax.id_number or ""
    civility = getattr(pax, "civility", "") or ""
```
(ces variables alimentent le `Baggage.objects.create(...)` existant, inchangé par ailleurs.)

- [ ] **Step 4 : `BaggageWrite.ticket_id` requis**

Dans `config_api/serializers.py`, `BaggageWrite` : retirer `"ticket_id"` de `blank_null_fields` et passer le champ à requis :
```python
    ticket_id = serializers.UUIDField()
```
(les champs `sender_*` restent facultatifs — ignorés : le propriétaire vient du passager.)

- [ ] **Step 5 : `TicketRead` — téléphone + pièce du passager**

Dans `voyages_booking/config_api/serializers.py`, `TicketRead` : ajouter
```python
    passenger_phone = serializers.CharField(source="passenger.phone", read_only=True, default="")
    passenger_id_number = serializers.CharField(source="passenger.id_number", read_only=True, default="")
```
et ajouter `"passenger_phone", "passenger_id_number"` à `Meta.fields`.

- [ ] **Step 6 : Repurpose le test no-ticket obsolète**

Dans `test_baggage_sender_client.py`, `test_add_baggage_links_sender_client` teste l'ancien parcours sans billet. Le réécrire pour le **cas billeté** : créer un billet (même montage que la fixture ci-dessus), `b = add_baggage(company, trip=trip, ticket=ticket, amount_due=0, user=admin)`, puis `assert b.sender_client_id == ticket.passenger_id`. (Si le fichier n'a plus de raison d'être, le fusionner dans le nouveau fichier de test et supprimer l'ancien — mais garder au moins l'assertion sender_client↔passager.)

- [ ] **Step 7 : Lancer, vérifier le succès + non-régression bagage**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_consignment/test_baggage_passenger_required.py apps/voyages_consignment/test_baggage_sender_client.py -q --reuse-db`
Expected: PASS.
Run: `../env/bin/python -m pytest apps/voyages_consignment -q --reuse-db` (suite consignment)
Expected: pas de **nouvelle** régression ; tout test créant un bagage **sans billet** via l'API/service doit être mis à jour pour fournir un billet. Ajuster puis relancer.
Run: `../env/bin/python manage.py makemigrations --check --dry-run`
Expected: `No changes detected` (aucun changement de modèle).

- [ ] **Step 8 : Commit**

```bash
git add backend/apps/voyages_consignment/services/baggage_services.py backend/apps/voyages_consignment/config_api/serializers.py backend/apps/voyages_booking/config_api/serializers.py backend/apps/voyages_consignment/test_baggage_passenger_required.py backend/apps/voyages_consignment/test_baggage_sender_client.py
git commit -m "feat(bagage): ticket (passager) required; owner snapshot from passenger; TicketRead exposes phone/pièce (M23)"
```

---

## Task 2 : Frontend — passager requis, propriétaire lecture seule, suppression du parcours sans billet

**Files:**
- Modify: `angular/src/_api/models/voyages-booking.models.ts` (`Ticket`: passenger_phone/id_number)
- Modify: `angular/src/_api/pages/voyages-consignment/baggage/baggage.component.ts`
- Modify: `angular/src/_api/pages/voyages-consignment/baggage/baggage.component.html`
- Modify: `angular/public/i18n/{fr,en,es,pt}.json` (`cons.baggage.f_owner` si manquant)

**Interfaces:**
- Consumes: `Ticket.passenger_phone`/`passenger_id_number` (Task 1) via `booking.list`.

- [ ] **Step 1 : Type Ticket (frontend)**

Dans `voyages-booking.models.ts`, interface `Ticket` : ajouter `passenger_phone: string; passenger_id_number: string;`.

- [ ] **Step 2 : Composant — ticket requis, options enrichies, propriétaire, suppression no-ticket**

Dans `baggage.component.ts` :
- `ticket_id` → `[null, Validators.required]` dans le `fb.group`.
- `ticketOptions` typé `{ id: string; label: string; name: string; phone: string; id_number: string }[]` ; dans `onTripChange`, pousser `{ id: t.id, label: \`${t.passenger_name} · ${t.number}\`, name: t.passenger_name, phone: t.passenger_phone, id_number: t.passenger_id_number }`.
- Getter `selectedOwner`:
```ts
get selectedOwner(): { name: string; phone: string; id_number: string } | null {
  const id = this.form.value.ticket_id;
  if (!id) return null;
  const o = this.ticketOptions.find(t => t.id === id);
  if (o) return { name: o.name, phone: o.phone, id_number: o.id_number };
  // édition : propriétaire stocké sur le bagage
  return this.editOwner;
}
```
avec `editOwner: {name;phone;id_number} | null = null;` renseigné dans `openEdit` depuis le bagage (`{ name: b.owner_name, phone: b.sender_phone, id_number: b.id_number }`).
- **Supprimer** `senderClient` et toute la logique no-ticket dans `submit` (le bloc `if (!this.isEdit && !v.ticket_id) {...}`) ; `submit` envoie simplement `this.form.getRawValue()` (création) — le propriétaire n'est plus envoyé.

- [ ] **Step 3 : HTML — retirer la section sans billet, ajouter le bloc propriétaire lecture seule**

Dans `baggage.component.html` :
- Marquer le passager requis : ajouter `<span class="text-danger">*</span>` au label `f_passenger`.
- **Supprimer** tout le bloc `@if (!hasTicket) { ... }` (création `app-client-fields` **et** branche édition manuelle).
- Ajouter, après le select passager, un bloc **Propriétaire** affiché `@if (selectedOwner)` :
```html
@if (selectedOwner) {
  <div class="row g-2 mb-2">
    <div class="col-md-5"><label class="form-label">{{ 'cons.baggage.f_owner' | transloco }}</label>
      <input class="form-control" [value]="selectedOwner.name" disabled /></div>
    <div class="col-md-4"><label class="form-label">{{ 'admin.common.phone' | transloco }}</label>
      <input class="form-control" [value]="selectedOwner.phone" disabled /></div>
    <div class="col-md-3"><label class="form-label">{{ 'cons.baggage.f_id_number' | transloco }}</label>
      <input class="form-control" [value]="selectedOwner.id_number" disabled /></div>
  </div>
}
```

- [ ] **Step 4 : i18n**

Ajouter `cons.baggage.f_owner` (fr « Propriétaire », en « Owner », es « Propietario », pt « Proprietário ») dans les 4 locales (python `json.load`/`dump`, revérifier le parse). Réutiliser `cons.baggage.f_id_number` (existant) et `admin.common.phone` (existant).

- [ ] **Step 5 : Build (gate)**

Run: `cd angular && npx ng build --configuration development`
Expected: `Application bundle generation complete.` — plus aucune référence à `app-client-fields`/`senderClient` dans le form bagage ; `selectedOwner`/`editOwner` liés.

- [ ] **Step 6 : Commit**

```bash
git add angular/src/_api/models/voyages-booking.models.ts angular/src/_api/pages/voyages-consignment/baggage/baggage.component.ts angular/src/_api/pages/voyages-consignment/baggage/baggage.component.html angular/public/i18n/fr.json angular/public/i18n/en.json angular/public/i18n/es.json angular/public/i18n/pt.json
git commit -m "feat(bagage): passenger required; read-only owner from ticket; drop no-ticket sender form (M23)"
```

---

## Notes d'implémentation

- **Non-régression (Task 1 Step 7)** : tout test qui créait un bagage sans billet doit fournir un billet ; `test_baggage_sender_client.py` est explicitement repurposé (Step 6). Lancer la suite consignment pour en débusquer d'autres.
- **`app-client-fields`** n'est plus utilisé par le form bagage ; retirer son import du composant si plus référencé (sinon warning TS inoffensif — le build reste vert).
- **Pas de migration** : on change le contrat de création, pas le schéma.

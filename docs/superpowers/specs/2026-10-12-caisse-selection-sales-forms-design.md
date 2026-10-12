# Sélection de la caisse sur les formulaires de vente — Design

**Date:** 2026-10-12 · **Auteur:** shimi (assisté)

## Contexte

Aujourd'hui, l'encaissement comptant d'une vente (billet, colis, bagage,
régularisation) est posté dans la session de caisse **résolue automatiquement**
côté serveur à partir de l'utilisateur (`get_open_session_for_user`). Il n'y a
aucune sélection de caisse sur les formulaires.

Besoin : pouvoir **choisir la caisse** avant de faire une transaction. Un
sélecteur « Caisse » apparaît sur chaque formulaire de vente (Billets, Colis,
Bagage, Régularisation). Il est **affiché mais verrouillé** pour les guichetiers
et les autres utilisateurs ; seuls les **admins** et les **chefs d'agence**
peuvent le modifier.

## Décisions (arbitrées)

1. **Contenu** : le sélecteur liste **toutes les caisses** (registres), pas
   seulement celles ayant une session ouverte. Si la caisse choisie n'a pas de
   session ouverte, l'encaissement comptant échoue avec un message clair.
2. **Portée du choix** : chef d'agence → caisses de **son agence** ; admin
   d'institution → caisses de **toutes les agences** ; guichetier / autres →
   verrouillé sur **leur** caisse.
3. **Autorisation** : on **assouplit** le garde-fou de `create_transaction` —
   tout détenteur de `treasury.session.manage` (chef d'agence) peut encaisser
   dans **toute caisse de son agence** (les admins partout). Le guichetier reste
   limité aux caisses dont il est gestionnaire (sa caisse).

## Qui peut sélectionner

`can_select = is_admin(user) OR has_permission(user, "treasury.session.manage")`.
- `is_admin` = superuser ou `is_institution_admin`.
- Sinon `locked = true` : le select est affiché, prérempli sur la caisse de
  l'utilisateur, mais désactivé.

## Backend

### Sélecteur + endpoint

- `selectable_cash_registers(user, company) -> dict` dans
  `apps/treasury/selectors/selectors.py` :
  ```
  {
    "registers": [{ "id", "name", "agency_id", "agency_name", "has_open_session" }],
    "can_select": bool,
    "default_id": <uuid|null>,   # caisse de la session ouverte de l'utilisateur, sinon None
  }
  ```
  - admin → toutes les caisses de la société ;
  - chef (session.manage, scoped) → caisses de `user.default_agency_id` ;
  - autres → caisses dont l'utilisateur est gestionnaire + celle de sa session
    ouverte (pour l'affichage verrouillé).
  - `has_open_session` via `get_active_session(register_id, company.id)`.
- **Endpoint** `GET /treasury/selectable-registers/` → `CashRegisterSelectView`.
  Permission : `IsAuthenticated` (les formulaires sont déjà protégés par leurs
  propres droits de vente).

### Résolution de la caisse à l'encaissement

Dans les deux helpers partagés d'encaissement — `booking_sales._record_income`
et `consignment_sales._record_consignment_payment` — ajouter le paramètre
`cash_register_id=None` ; pour le cas **espèces** :
```python
if cash_register_id:
    from apps.treasury.selectors import get_active_session
    session = get_active_session(cash_register_id, company.id)
    if not session:
        raise ApplicationError(_("La caisse choisie n'a pas de session ouverte."))
else:
    session = get_open_session_for_user(company.id, user)
    if not session:
        raise ApplicationError(_("Ouvrez d'abord votre session de caisse pour encaisser au comptant."))
```
Le non-espèces (banque) ignore `cash_register_id`.

### Assouplissement d'autorisation (`create_transaction`)

Garde-fou actuel :
```python
if scoped and not is_cash_manager(created_by, cash_session.cash_register):
    raise ApplicationError(_("Vous n'êtes pas gestionnaire de cette caisse."))
```
Nouveau :
```python
if scoped and not is_cash_manager(created_by, cash_session.cash_register):
    from apps.admin_rbac.selectors.user_role_selectors import has_permission
    chef = has_permission(created_by, "treasury.session.manage", company.id)
    if not (chef and cash_session.cash_register.agency_id == agency_id):
        raise ApplicationError(_("Vous n'êtes pas autorisé à opérer sur cette caisse."))
```
(Les admins ne sont pas `scoped` → déjà exemptés. Le guichetier gestionnaire de
sa caisse passe par `is_cash_manager`.)

### Propagation de `cash_register_id`

Ajouter `cash_register_id=None` et le transmettre au helper d'encaissement :
- `booking_services.create_booking`, `reservation_services.pay_reservation`,
  `adjustment_services.regularize_ticket` → `record_booking_payment` /
  `record_adjustment_income`.
- `parcel_services.register_parcel` (+ livraison) → `record_parcel_payment` /
  `record_parcel_delivery`.
- `baggage_services.add_baggage` → `record_baggage_payment`.

Les **vues** correspondantes lisent `cash_register_id` depuis `request.data` et
le passent au service. Champ optionnel : absent → comportement actuel
(auto-résolution).

## Frontend

### Service + composant partagé

- `SessionService.selectableRegisters()` → `GET /treasury/selectable-registers/`.
- Composant **`CaisseSelectComponent`** (standalone, `app-caisse-select`) :
  - charge `selectableRegisters()` à l'init ;
  - `[(ngModel)]`/`value` = `cashRegisterId` (sortie vers le parent) ;
  - `disabled = !can_select` ;
  - préremplit `default_id` ;
  - option affichée : nom de la caisse (+ « (fermée) » si `!has_open_session`) ;
  - libellé « Caisse ».

### Formulaires (ajout du select + envoi de `cash_register_id`)

- **Billets** : `new-booking.component` (formulaire de vente).
- **Colis** : `parcels.component` (modale d'enregistrement).
- **Bagage** : `baggage.component` (modale d'enregistrement).
- **Régularisation** : modale de régularisation (`booking-detail.component`, M21).

Chaque formulaire place le select « Caisse » près du mode de paiement et
ajoute `cash_register_id` au corps de la requête d'encaissement.

### i18n

Clés `treasury.caisse_select.*` (label, closed, locked_hint) dans fr/en/es/pt.

## Isolation / tests (backend)

- `selectable_cash_registers` : admin voit toutes les caisses ; chef voit son
  agence ; guichetier verrouillé (`can_select=false`) sur sa caisse.
- Encaissement avec `cash_register_id` d'une caisse **sans session ouverte** →
  erreur ; avec session ouverte → posté dans cette session.
- Chef d'agence encaisse dans une caisse de son agence qu'il ne gère pas →
  autorisé (assouplissement) ; dans une autre agence → refusé.
- Sans `cash_register_id` → comportement inchangé (non-régression ventes).

## Hors périmètre

- Changement du modèle de session/caisse.
- Facturation par caisse / multi-devise.
- Sélecteur de caisse sur les écrans hors vente (dépenses, transferts : déjà
  gérés par leur propre logique de session).

# M26 — Types d'opération, dépenses & frais de route, validation — Design

**Date :** 2026-10-10 · **Module :** `apps/treasury` (+ `apps/voyages_trips`, `apps/voyages_config`) · **Référence cahier :** M26 (dictées 10, 12, 41)

## Intention

1. **Types d'opération** configurables, classés en **dépense** ou **recette**.
2. **Toute dépense indique la caisse** d'où elle est décaissée (déjà imposé — à confirmer/tester).
3. Menu **Trésorerie > Frais de route** : dépenses liées à un voyage (choix caisse → décaissement).
4. **Section de validation des opérations** (dépenses et recettes manuelles) : valider,
   invalider ou modifier. Frais de route : validation **réservée à l'administrateur**.
5. **Statut par opération** (en attente / validée / invalidée) + traçabilité.

## Décisions actées (brainstorm)

- **La validation ouvre la porte à l'argent** : une opération **manuelle** est enregistrée
  **en attente** et **n'impacte NI le solde de caisse NI la comptabilité** tant qu'elle n'est
  pas **validée**. `invalider` annule (si déjà validée → extourne solde+compta) ; `modifier`
  change le montant tant que l'opération est en attente.
- **Opérations manuelles uniquement** : dépenses générales, recettes diverses (autre), frais
  de route (dépenses voyage). Les **ventes** (ticket/colis/bagage) et remboursements restent
  **validés d'office et immédiats** (comportement actuel inchangé).
- **Nouvelle entité `OperationType`** (code, libellé, sens = dépense|recette), config-entity.

## Architecture

### 1. `Transaction.status` (nouveau — cœur de la validation)

```python
class Status(models.TextChoices):
    VALIDATED   = "validated",   _("Validée")
    PENDING     = "pending",     _("En attente")
    INVALIDATED = "invalidated", _("Invalidée")
status = models.CharField(max_length=12, choices=Status.choices, default=Status.VALIDATED)
validated_by = FK(User, null=True, blank=True, SET_NULL)   # qui a validé
validated_at = DateTimeField(null=True, blank=True)
```

**Défaut `VALIDATED`** : toutes les lignes existantes et toutes les ventes restent validées
(migration sans RunPython : le défaut couvre l'existant ; comportement inchangé).

### 2. `create_transaction` — portillon solde/compta

Ajout d'un paramètre `status=Transaction.Status.VALIDATED`. Comportement :

- `status == VALIDATED` (défaut) : **inchangé** — applique le solde (`_apply_transaction_balance`)
  et poste en compta (`post_movement`) immédiatement. (ventes, remboursements, auto.)
- `status == PENDING` : crée la ligne **sans** appeler `_apply_transaction_balance` **ni**
  `post_movement`. Aucun impact solde/compta.

Les points d'entrée **manuels** passent `status=PENDING` :
`record_general_expense`, `record_other_income` (recette « autre »), `record_trip_expense`.
Les ventes (`booking_sales`, `consignment_sales`) et remboursements : inchangés (validés).

### 3. Services de validation (`apps/treasury/services/operation_validation.py`, nouveau)

```
validate_operation(txn, *, user)      # PENDING → VALIDATED : applique solde + poste compta ;
                                       #   contrôle solde suffisant AU MOMENT de la validation
                                       #   (pour une dépense espèces) ; frais de route : admin only
invalidate_operation(txn, *, user)    # → INVALIDATED : si VALIDATED, extourne solde + annule
                                       #   l'écriture comptable ; si PENDING, simple bascule
modify_operation(txn, *, amount, user)# modifie le montant d'une opération PENDING (pas d'impact
                                       #   solde tant qu'en attente) ; interdit si non-PENDING
```

**Autorisation** : valider/invalider une opération est gardé par RBAC `treasury.operation.validate`.
Pour une opération **frais de route** (liée à `voyage_expense`), la validation exige en plus
`is_admin` (superuser/institution admin) — contrôle au niveau du service.

### 4. Agrégations de solde — ne compter que `VALIDATED`

- `principale_available_cash` (expense_shared.py) : filtrer `status=VALIDATED` sur les sommes
  income/expense de la session (les PENDING ne comptent pas tant que non validées).
- Tableau de bord (`selectors.py` today_income/today_expense, séries) : filtrer `VALIDATED`
  (exclure PENDING et INVALIDATED).
- `current_balance` (champ dénormalisé) : **naturellement correct** — `_apply_transaction_balance`
  ne tourne pas pour les PENDING, donc le solde ne bouge qu'à la validation.

### 5. `OperationType` (config entity, `apps/voyages_config` ou `apps/treasury`)

```python
class OperationType(_CompanyScoped):   # ou BaseModel company-scoped
    class Sens(models.TextChoices):
        DEPENSE = "depense", _("Dépense")
        RECETTE = "recette", _("Recette")
    code  = CharField(max_length=20)
    label = CharField(max_length=100)
    sens  = CharField(max_length=10, choices=Sens.choices)
    is_active = BooleanField(default=True)
```

CRUD config (sérialiseur + vues List/Detail + 2 URLs + page Angular), permission
`treasury.config.view/manage` (ou l'équivalent voyages_config selon l'emplacement choisi au plan).
Seed par défaut (quelques types dépense + recette). **N'remplace pas** `ExpenseType` (qui reste
branché sur TripExpense/GeneralExpense) ; `OperationType` catégorise les recettes diverses et
sert de référentiel unifié dépense/recette pour les opérations manuelles. Lien optionnel
`operation_type` (FK nullable) sur la transaction manuelle pour la catégoriser.

### 6. Frais de route — menu Trésorerie

`TripExpense` existe déjà (voyages_trips : PLANNED/PAID/CANCELLED, `expense_type`, `cash_session`).
M26 ajoute une **page Trésorerie > Frais de route** listant les dépenses voyage, avec
enregistrement (choix du voyage, type, montant, **caisse**) → crée une opération **PENDING**
(via `record_trip_expense` avec `status=PENDING`), puis validation **admin**. La traçabilité
(auteur/date/statut) vient du `Transaction.status` + `validated_by/at` et de l'audit existant.

### 7. Mandatory caisse (dépenses)

Déjà imposé par `resolve_disbursement_session` (une session/caisse ouverte est requise, et une
caisse principale pour les dépenses). M26 : **confirmer par test** (une dépense sans caisse →
erreur) ; pas de code nouveau attendu.

### 8. Frontend (Angular)

- **Page config « Types d'opération »** (CRUD, sens dépense/recette) — pattern M27/M28.
- **Section « Validation des opérations »** : liste des opérations manuelles avec statut
  (badge en attente/validée/invalidée), actions **Valider / Invalider / Modifier** (modifier =
  éditer le montant tant qu'en attente). Frais de route : bouton Valider visible seulement si admin
  (`*hasPermission`/rôle).
- **Page Frais de route** : liste + formulaire (voyage, type, montant, caisse) → opération en attente.
- Badges de statut sur les listes dépenses/recettes.
- i18n fr/en/es/pt.

## Modèle de données (résumé)

```
OperationType (nouveau, config : code, label, sens)
Transaction + status(validated|pending|invalidated) + validated_by/at
  - ventes/remboursements : VALIDATED immédiat (inchangé)
  - manuelles (dépense gén., recette autre, frais de route) : PENDING → validate → VALIDATED
Solde & compta : appliqués UNIQUEMENT à la validation ; agrégations filtrent VALIDATED
```

## Tests (backend) — priorité aux invariants monétaires

1. **PENDING n'impacte rien** : enregistrer une dépense générale → `current_balance` inchangé,
   aucune écriture comptable, `principale_available_cash` inchangé.
2. **validate applique** : valider → solde réduit, écriture comptable postée, statut VALIDATED.
3. **invalidate extourne** : invalider une opération validée → solde restauré, écriture annulée ;
   invalider une opération PENDING → INVALIDATED sans impact.
4. **modify** : modifier le montant d'une PENDING → nouveau montant, toujours aucun impact solde ;
   modifier une VALIDATED → erreur.
5. **frais de route admin-only** : valider un frais de route en non-admin → erreur ; en admin → OK.
6. **contrôle solde à la validation** : valider une dépense espèces > solde dispo → erreur.
7. **ventes inchangées** : une vente ticket reste VALIDATED et impacte le solde immédiatement
   (non-régression) ; l'écart de session ne compte que le validé.
8. **OperationType** : CRUD + seed idempotent + sens dépense/recette.
9. **mandatory caisse** : dépense sans caisse → erreur.

## Hors périmètre

- Pas de validation des ventes individuelles (auto-validées).
- Pas de refonte d'`ExpenseType` (conservé pour TripExpense/GeneralExpense).
- Workflow d'approbation multi-niveaux : un seul niveau (en attente → validée/invalidée).

## Points tranchés (rulings)

- `Transaction.status` défaut `VALIDATED` → zéro impact sur l'existant et les ventes ; seuls les
  points d'entrée manuels passent `PENDING`.
- Les tests existants des flux dépenses (décaissement immédiat) seront **mis à jour** au modèle
  en attente→validée (ils testaient l'ancien comportement immédiat) — attendu, documenté en
  Review Focus du plan.
- `current_balance` reste dénormalisé et juste (pas de recalcul) car l'application du solde est
  déplacée à la validation.

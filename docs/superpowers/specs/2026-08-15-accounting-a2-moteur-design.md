# G-Accounting A2 — Moteur d'écritures — Design Spec

**Date :** 2026-08-15
**Sous-projet :** Comptabilité (G-Accounting) — A2 (moteur d'écritures)
**Branche :** `feature/accounting-a2` (depuis `master`)
**Dépend de :** A1 (référentiel : `Account`, `Journal`, `FiscalYear`, `AccountingPeriod`, RBAC `accounting.*`).
**Spec source :** « G-Accounting v1.0 » §3.4/3.5/6/11/12/13.

## Contexte & objectif

Cœur du module comptable : la **partie double**. A2 fournit les pièces comptables (`JournalEntry` +
`JournalEntryLine`), le **service `AccountingService`** (le contrat que Trésorerie/Voyages/Paie
appelleront pour générer leurs écritures) et les règles d'intégrité (équilibre, immuabilité, période
ouverte, séquence continue, extourne). Backend-first : pas d'écran Angular.

Ordre validé : A1 → A1-FE → **A2** → Trésorerie → A3/A4.

## Décisions validées (brainstorm)

- **`Partner` léger dédié** (`accounting.Partner`) : projection comptable des tiers (voir `apps/accounting/README.md`).
- **Backend-first** : modèles + service + API + RBAC. Saisie OD via API ; pas d'écran Angular (tranche FE ultérieure).
- Numérotation des pièces **au post** (gapless), pas à la création (les brouillons supprimés ne laissent pas de trou).

## Contraintes globales

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche `feature/accounting-a2` depuis `master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- Python : `.../ERP-master/env/bin/python` depuis `.../ERP-master/backend`.
- Multi-tenant : tous les modèles étendent `apps.core.models.BaseModel` + `company` FK `system_config.Company`.
- Devise XAF ; montants `DecimalField(max_digits=14, decimal_places=2)`.
- Erreurs métier : `apps.core.exceptions.ApplicationError`. Réponses DRF : `apps.core.responses`.
- Vérif : `manage.py check`, `makemigrations --check`, pytest.

**Acquis réutilisés (vérifiés A1) :** `Account` (a `deprecated`, `account_type`, `company`, `code`),
`Journal` (`company`, `code`, `sequence_prefix`, `default_account`), `AccountingPeriod` (`state` open/closed/locked,
`date_start`/`date_end`, `fiscal_year`), `HasModulePermission` + `permission_map`, migrations seed `admin_rbac/000x`
(dernière : `0008_accounting_permissions_seed`).

## Composant 1 — Modèle `Partner`

`apps/accounting/models/partner.py`. Champs : `company` (FK), `partner_type` (TextChoices :
`customer`, `supplier`, `employee`, `tax`, `social`, `other`), `name` (255), `source_model` (Char blank,
ex `"ticketing.Customer"`), `source_id` (UUID null), `active` (bool défaut True), `note` (blank).
`Meta.ordering = ["name"]`. Pas d'unicité stricte sur le nom (homonymes tolérés). `__str__` = name.

## Composant 2 — Modèles d'écriture

### `JournalEntry` (`models/journal_entry.py`)
Champs : `company` (FK), `journal` (FK `accounting.Journal`), `period` (FK `accounting.AccountingPeriod`),
`date` (DateField), `entry_type` (TextChoices : `manual`, `auto_sale`, `auto_payment`, `auto_payroll`,
`auto_transfer` ; défaut `manual`), `partner` (FK `accounting.Partner` null), `label` (500), `reference`
(100 blank), `state` (TextChoices : `draft`, `posted`, `cancelled` ; défaut `draft`), `name` (30 blank —
n° de pièce, assigné au post), `total_debit`/`total_credit` (Decimal défaut 0), `posted_at` (DateTime null),
`posted_by` (FK User null), `reversed_entry` (FK self null, related_name `reversal`), `source_model`
(Char blank), `source_id` (UUID null). `Meta.ordering = ["-date", "-created_at"]`.

### `JournalEntryLine` (`models/journal_entry_line.py`)
Champs : `entry` (FK, related_name `lines`, on_delete CASCADE), `sequence` (Int défaut 0), `account`
(FK `accounting.Account`), `label` (500 blank), `debit`/`credit` (Decimal défaut 0), `partner` (FK Partner
null), `reconciled` (bool défaut False), `reconcile_group` (Char 30 blank), `date_maturity` (Date null).
`Meta.ordering = ["sequence", "id"]`. (Les champs de lettrage existent mais leur logique est en A4.)

### `JournalSequence` (`models/journal_sequence.py`)
Champs : `company` (FK), `journal` (FK), `year` (Int), `last_number` (Int défaut 0).
`unique_together = [("company", "journal", "year")]`. Sert au numéro gapless (verrou `select_for_update`).

## Composant 3 — `AccountingService` (contrat inter-modules)

`apps/accounting/services/accounting_service.py`. Dataclasses :
```python
@dataclass
class LineRequest:
    account_code: str
    label: str = ""
    debit: Decimal = Decimal("0")
    credit: Decimal = Decimal("0")
    partner_id: UUID | None = None

@dataclass
class EntryRequest:
    company_id: UUID
    journal_code: str
    date: date
    label: str
    lines: list[LineRequest]
    reference: str = ""
    entry_type: str = "manual"
    partner_id: UUID | None = None
    source_model: str = ""
    source_id: UUID | None = None
```

### `create_entry(req: EntryRequest, *, created_by=None) -> JournalEntry`
1. Résout `journal` par `(company_id, journal_code)` → sinon `ApplicationError`.
2. Résout `period` : `AccountingPeriod` de la société dont `date_start <= req.date <= date_end`.
   Aucune période → `ApplicationError` ; période non `open` → `ApplicationError`.
3. Valide chaque `LineRequest` :
   - `debit >= 0` et `credit >= 0`, et **exactement un** des deux > 0 → sinon `ApplicationError`.
   - `account` résolu par `(company, account_code)`, non `deprecated` → sinon `ApplicationError`.
   - Si `account.reconcile` est vrai (compte de tiers lettrable : 401/411/421/425/431/447, marqué en A1)
     → `partner_id` (ligne, à défaut celui de la pièce) **obligatoire** → sinon `ApplicationError`.
4. Crée `JournalEntry` (state `draft`, `name=""`, totaux calculés) + ses `JournalEntryLine` (sequence 1..n).
   Transaction atomique. Retourne l'entry.

### `post_entry(entry_id, *, posted_by=None) -> JournalEntry`
1. Charge l'entry (society scope via appelant) ; exige `state == draft` → sinon `ApplicationError`.
2. Recalcule `total_debit`/`total_credit` depuis les lignes ; exige **égaux et > 0** → sinon `ApplicationError`.
3. Exige `entry.period.state == open` → sinon `ApplicationError`.
4. **Numéro gapless** : sous `transaction.atomic`, `JournalSequence.objects.select_for_update()`
   `get_or_create(company, journal, year=entry.date.year)`, `last_number += 1`, `save`.
   `name = _format_sequence(journal.sequence_prefix, year, last_number)` — remplace `{YYYY}` par l'année,
   ajoute le numéro sur 5 chiffres (ex `VTE/2026/00042`) ; si pas de `{YYYY}` dans le préfixe, `name =
   f"{prefix}{year}/{num:05d}"` ; préfixe vide → `name = f"{journal.code}/{year}/{num:05d}"`.
5. `state = posted`, `posted_at = now`, `posted_by`, `save`. Retourne l'entry.

### `cancel_entry(entry_id, reason="", *, cancelled_by=None) -> JournalEntry`
1. Charge l'entry ; exige `state == posted` → sinon `ApplicationError`.
2. Crée une **contre-écriture** : même journal/date/période/partner, `entry_type` inchangé,
   `label = f"Extourne — {original.label}"` (+ reason en reference), lignes = copies avec `debit`/`credit`
   **inversés**. La poste (`post_entry`) → nouveau numéro. `reversal.reversed_entry = original`.
3. `original.state = cancelled`, `save`. Retourne la contre-écriture.

### Immuabilité
`JournalEntry.save()` (ou un garde dans le service/API) : interdit toute modification des champs d'une
pièce déjà `posted` sauf transition `posted → cancelled`. Les vues API n'exposent la modification que sur
les brouillons.

## Composant 4 — API (DRF) + RBAC

Endpoints sous `/api/v1/accounting/` :

| Méthode | URL | Permission | Description |
|---|---|---|---|
| GET | `partners/` | `accounting.partner.view` | Liste (filtre type, search). |
| POST | `partners/` | `accounting.partner.manage` | Créer un partenaire. |
| GET/PATCH/DELETE | `partners/<id>/` | view / manage | Détail / modifier / désactiver. |
| GET | `entries/` | `accounting.entry.view` | Liste (filtres journal, period, state, date_from/to). |
| POST | `entries/` | `accounting.entry.create` | Créer une pièce (saisie OD) — via `AccountingService.create_entry`. |
| GET | `entries/<id>/` | `accounting.entry.view` | Détail + lignes. |
| PATCH | `entries/<id>/` | `accounting.entry.create` | Modifier une pièce **draft** uniquement. |
| DELETE | `entries/<id>/` | `accounting.entry.create` | Supprimer une pièce **draft** (soft-delete). |
| POST | `entries/<id>/post/` | `accounting.entry.post` | Valider (`post_entry`). |
| POST | `entries/<id>/cancel/` | `accounting.entry.cancel` | Annuler (`cancel_entry`). |

Vues scopées `request.user.company`. Sérialiseurs : `PartnerSerializer`, `JournalEntrySerializer`
(avec `lines` imbriquées en lecture), `JournalEntryLineSerializer`. Le POST `entries/` accepte
`{journal, date, label, reference, partner, lines:[{account, label, debit, credit, partner}]}` et construit
un `EntryRequest`.

**Codes RBAC** seedés via `admin_rbac/0009_accounting_entry_permissions_seed.py` :
`accounting.entry.view/create/post/cancel`, `accounting.partner.view/manage`.

## Gestion des erreurs / cas limites

- Toutes les violations de règles → `ApplicationError` (message FR) → réponse 400 via le handler DRF existant.
- Post idempotent-safe : une pièce déjà `posted` renvoie une erreur claire (pas de double numéro).
- Suppression : seule une pièce `draft` est supprimable (soft-delete `is_deleted`) ; `posted`/`cancelled` refusé.
- Concurrence numérotation : `select_for_update` sur `JournalSequence` (pas de trous ni doublons).
- Résolution de période : si la `date` tombe hors de toute période → erreur explicite (« aucune période comptable pour cette date »).

## Vérification

Tests `@pytest.mark.django_db` (avec une société seedée via `create_company`) :
- `create_entry` équilibrée → draft, lignes créées, totaux corrects ; déséquilibrée reste **draft** (l'équilibre est exigé au **post**, pas à la création) ; ligne avec débit **et** crédit → erreur ; compte déprécié → erreur ; ligne sur compte lettrable (ex 411) sans partenaire → erreur.
- `post_entry` : assigne un `name` ; deux pièces sur le même journal/année → numéros **consécutifs** ; post en période `closed` → erreur ; post d'une pièce non-draft → erreur ; totaux figés.
- `cancel_entry` : crée une extourne aux montants inversés, la poste (nouveau numéro), lie `reversed_entry`, passe l'originale en `cancelled`.
- Immuabilité : PATCH API d'une pièce `posted` → refusé.
- RBAC : staff `accounting.entry.create` → POST entries ≠ 403, POST post/ → 403 ; `accounting.entry.post` → post/ ≠ 403 ; codes seedés présents.
- `manage.py check` + `makemigrations --check` OK.

## Hors périmètre (A2)

- Taxes automatiques (lignes de TVA/IRPP/CNPS générées) — tranche taxes / Paie.
- Logique de **lettrage** (les champs existent ; la mécanique = A4).
- **Reporting** (grand livre, balance, résultat, bilan) = A3.
- **Clôture** de période/exercice, à-nouveaux = A4.
- **Frontend** Angular (saisie OD, consultation des pièces) — tranche FE ultérieure.
- **Intégrations** : Trésorerie/Voyages/Paie appelleront `AccountingService` dans leurs propres tranches.
- Resynchronisation des rôles par défaut existants avec les nouveaux codes `accounting.entry.*`/`partner.*`.

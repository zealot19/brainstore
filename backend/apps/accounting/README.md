# Module Comptabilité — G-Accounting

Module de **comptabilité générale** de l'ERP (Groupe Magnong Transport), conforme au
**Système Comptable OHADA (SYSCOHADA Révisé)**. Il est le **socle financier** : la Trésorerie, les
Voyages et la Paie y déversent leurs écritures. Devise de référence : XAF.

**Multi-tenant :** chaque société a son propre plan comptable, ses journaux, ses exercices et ses écritures
(tout est scopé `company`, `unique_together(company, code)`).

---

## Concept clé — « Tiers » / Partenaire (Partner)

> **Dans un système comptable, un client est un *type* de partenaire — pas une catégorie séparée.**

En comptabilité (OHADA, et le modèle Odoo/Sage), le terme **« tiers » (partner)** désigne **toute entité
avec qui la société a une relation financière**. La **classe 4** du plan OHADA s'appelle d'ailleurs
« Comptes de **tiers** » et regroupe tous les partenaires, distingués par leur type :

| Compte | Tiers | Type de partenaire |
|--------|-------|--------------------|
| 411 | Clients | `client` |
| 401 | Fournisseurs | `fournisseur` |
| 421 | Personnel | `employé` |
| 431 | CNPS | organisme social |
| 447 | État | administration fiscale |

Dès qu'une écriture en partie double touche un compte de tiers (41x / 40x / 42x…), la ligne doit indiquer
**quel** tiers est concerné — sinon on sait qu'on doit 500 000 XAF à « des fournisseurs » sans savoir à qui,
et le **lettrage** (rapprochement facture ↔ paiement, cf. A4) est impossible.

### `accounting.Partner` = projection comptable, pas duplication

Les modèles métier riches restent la source de vérité :
- `ticketing.Customer` (client billetterie : téléphone, historique de réservations…),
- `voyages_booking.Passenger`,
- les employés / chauffeurs, les fournisseurs, etc.

Le futur modèle **`accounting.Partner`** en est une **projection légère** (nom + `type` + lien optionnel
vers l'objet métier d'origine). On **référence** la donnée métier, on ne la duplique pas. Ainsi une
écriture 411 sait *à qui* elle se rapporte, quel que soit l'origine du tiers.

---

## Décision de conception — Types de journaux **fixes**

Le **type de journal** (`cash`, `bank`, `sale`, `purchase`, `general`) est une **taxonomie technique fixe**,
volontairement non modifiable par l'utilisateur. Ce n'est pas un libellé décoratif : il pilote le
comportement du moteur d'écritures —

- `cash` / `bank` → rattachés à un compte de trésorerie 5x, éligibles au rapprochement, alimentés par la Trésorerie ;
- `sale` / `purchase` → rattachés à la facturation (billets/colis, fournisseurs) ;
- `general` → opérations diverses (OD), écritures manuelles libres.

En revanche, **les journaux eux-mêmes sont illimités et entièrement configurables** (CAISSE-Douala,
CAISSE-Yaoundé, BICEC, UBA, OD-Régul…). La souplesse est sur *les journaux*, pas sur *les 5 natures
techniques* qui rendent l'automatisation comptable possible.

---

## État d'avancement

| Sous-projet | Contenu | Statut |
|-------------|---------|--------|
| **A1 — Référentiel** | `Account`, `Journal`, `FiscalYear`, `AccountingPeriod` + plan SYSCOHADA (198 comptes) seedé par société + API + RBAC `accounting.*` | ✅ livré |
| **A1-FE — Écrans** | Plan comptable, Journaux, Exercices & Périodes (Angular) | ✅ livré |
| **A2 — Moteur d'écritures** | `JournalEntry` / `JournalEntryLine`, `Partner`, `AccountingService.create_entry/post/cancel`, équilibre débit=crédit, séquences, saisie OD | ✅ livré |
| **Trésorerie — T1** | Pont comptable : mouvements/transferts/écart de caisse → écritures via `AccountingService` (mapping catégorie→compte seedé, non-bloquant) + RBAC `treasury.*` | ✅ livré |
| **Trésorerie — T2/T3** | Relevé & rapprochement bancaire + partenaire sur mouvement (T2) ; frontend (T3) | ⏳ |
| **A3 — Reporting** | Grand livre, balance, compte de résultat, bilan | ⏳ |
| **A4 — Lettrage & clôtures** | Lettrage des tiers, clôture période/exercice, à-nouveaux | ⏳ |

**Ordre validé :** A1 → A1-FE → **A2** → Trésorerie → A3/A4.

### Principes directeurs (rappel)
- **Partie double** : aucune écriture validée si ∑ Débit ≠ ∑ Crédit.
- **Immuabilité** : une pièce `posted` n'est plus modifiable ; correction = contre-écriture (extourne).
- **Traçabilité** : chaque écriture auto porte `source_model` / `source_id` vers l'événement métier.
- **Période ouverte** obligatoire ; compte non déprécié ; séquence de pièces continue (sans trou).

---

## Références

- Specs & plans : `docs/superpowers/specs/` et `docs/superpowers/plans/` (préfixe `accounting-`).
- Plan de comptes de référence : `apps/accounting/data/ohada_syscohada.json` (dérivation type/lettrage : `apps/accounting/chart.py`).
- Seeding par société : `apps/accounting/services/seed.py` (+ commande `manage.py seed_accounting`).

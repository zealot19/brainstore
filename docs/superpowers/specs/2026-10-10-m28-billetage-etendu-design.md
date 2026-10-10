# M28 — Billetage étendu (valeurs configurables) — Design

**Date :** 2026-10-10 · **Module :** `apps/treasury` · **Référence cahier :** M28 (dictée 38)

## Intention

Le billetage (comptage de caisse) enregistre aujourd'hui uniquement des
**coupures** (billets/pièces via `CurrencyDenomination`). M28 ajoute la saisie de
**bons de caisse, monnaie électronique et autres types de valeurs
(configurables)**. Le **total du billetage intègre toutes ces valeurs**.

## Décision actée (brainstorm)

**L'écart reste calculé sur les espèces uniquement.** Les bons/monnaie
électronique sont des valeurs *déclarées* détenues en caisse, pas des espèces
physiques : elles sont enregistrées et affichées dans le total du billetage,
mais **n'entrent pas** dans l'écart (compté vs attendu), ni dans le solde de la
caisse, ni dans le transfert de clôture d'un guichet. C'est le point
sensible (justesse comptable) — testé en priorité.

## Architecture

### 1. Nouvelle entité de configuration `CashValueType` (`apps/treasury/models/billetage.py`)

Calquée sur `CurrencyDenomination` (company-scoped, `BaseModel`).

| Champ | Type |
|-------|------|
| `company` | FK `system_config.Company`, `CASCADE`, `related_name="cash_value_types"` |
| `code` | `CharField(max_length=20)` |
| `label` | `CharField(max_length=100)` |
| `is_active` | `BooleanField(default=True)` |
| `display_order` | `PositiveIntegerField(default=0)` |

`Meta`: `unique_together = [("company", "code")]`, `ordering = ["display_order", "label"]`.

**Seed** (`seed_cash_value_types`, calqué sur `seed_denominations`, seed.py) :
`BON` « Bon de caisse », `ELEC` « Monnaie électronique », `AUTRE` « Autre ».
Idempotent (`get_or_create` par `(company, code)`). Branché dans le bootstrap
société (là où `seed_denominations` est appelé).

### 2. `CashCountItem` — ligne polymorphe (coupure OU valeur)

`denomination` devient **nullable** ; ajout d'un FK **nullable** `value_type`.
Une ligne est soit une coupure (`denomination` renseigné, `value × quantity`),
soit une valeur (`value_type` renseigné, montant libre). Pour une ligne valeur :
`quantity = 1`, `unit_value = subtotal = montant saisi`, `denomination = NULL`.

```python
denomination = models.ForeignKey(CurrencyDenomination, null=True, blank=True,
                                 on_delete=models.PROTECT, related_name="+")
value_type   = models.ForeignKey("treasury.CashValueType", null=True, blank=True,
                                 on_delete=models.PROTECT, related_name="+")
```

Contrainte applicative (service) : exactement l'un des deux est renseigné.

### 3. `CashCount` — deux totaux

Ajout de `other_total` (valeurs non-espèces). `total_amount` reste le **grand
total** (espèces + autres valeurs) affiché à l'utilisateur (« le total intègre
toutes ces valeurs »). Un nouveau champ `cash_total` stocke les espèces seules
(base de l'écart), pour éviter tout recalcul ambigu au moment de la clôture.

```python
cash_total   = models.DecimalField(max_digits=14, decimal_places=2, default=0)  # espèces
other_total  = models.DecimalField(max_digits=14, decimal_places=2, default=0)  # bons/élec/autres
total_amount = ... # inchangé = cash_total + other_total (grand total)
```

### 4. `compute_count_total` (billetage.py) — nouveau contrat

```
items : [
  {"denomination_id": UUID, "quantity": int}   # coupure
  | {"value_type_id": UUID, "amount": Decimal} # valeur
]
retour : {
  "cash_total":  Decimal,   # Σ coupures
  "other_total": Decimal,   # Σ valeurs
  "grand_total": Decimal,   # cash + other
  "resolved": [(kind, obj, qty, unit_value, subtotal)]  # pour créer les CashCountItem
}
```

Validations : quantité ≥ 0 (coupures) ; montant > 0 (valeurs) ; entité du bon
`company` ; `value_type` actif. Lignes à 0 ignorées.

### 5. Consommateurs (2) — mise à jour obligatoire

- **`record_count`** (billetage.py:38) : crée le `CashCount` avec
  `cash_total`, `other_total`, `total_amount = grand_total` ; crée un
  `CashCountItem` par ligne résolue (coupure ou valeur).
- **`close_session`** (services.py:143) : aujourd'hui
  `closing_balance, _ = compute_count_total(...)`. **Le `closing_balance` qui
  nourrit l'écart, le solde de la caisse et le transfert de clôture devient le
  `cash_total` uniquement.** Le `other_total` est enregistré sur le `CashCount`
  (via `record_count` déjà appelé) mais n'influence ni l'écart, ni le solde, ni
  le transfert. `record_shift_billetage` (fin de poste) : idem, enregistre les
  deux totaux ; aucune logique d'écart ici.

### 6. Endpoints de configuration (calqués sur `Denomination*`)

- `CashValueTypeSerializer` (ModelSerializer).
- `CashValueTypeListView` (GET liste + POST create) / `CashValueTypeDetailView`
  (GET/PATCH/DELETE), calquées sur `DenominationListView`/`DenominationDetailView`
  (views.py:1064+), même permission RBAC que les coupures (config trésorerie).
- URLs `value-types/` + `value-types/<uuid:pk>/` dans le routeur trésorerie, à
  côté des `denominations/`.
- La vue de contexte billetage (views.py:441, qui renvoie `denominations`)
  renvoie aussi `value_types` (actifs) pour alimenter le formulaire.

### 7. Sérialisation du comptage

`CashCountSerializer` + l'item exposent `value_type` (id + label) et
`cash_total`/`other_total`/`total_amount`. `session_report.py` (billetage) gère
déjà `denomination_id` nul ; ajouter l'affichage des lignes valeur (libellé +
montant) et le sous-total « autres valeurs ».

### 8. Frontend (Angular)

- **Page config** « Types de valeurs » calquée sur `denominations` (service +
  composant + 2 routes + entrée menu Configuration), CRUD simple.
- **Saisie billetage** (modale de clôture + billetage fin de poste) : sous le
  tableau des coupures, une section « Autres valeurs » listant les
  `value_types` actifs avec un champ montant par type ; le total affiché =
  espèces + autres valeurs ; l'écart affiché reste sur les espèces.
- **Reçu / rapport de session** : afficher les autres valeurs et leur sous-total.
- i18n fr/en/es/pt.

## Modèle de données (résumé)

```
CashValueType (nouveau, config)
CashCount  ──* CashCountItem {denomination? | value_type?, quantity, unit_value, subtotal}
   cash_total (espèces) · other_total (valeurs) · total_amount (grand total)
close_session → écart = cash_total vs attendu (espèces)  [other_total hors écart]
```

## Tests (backend, pytest) — priorité à l'écart

1. `compute_count_total` : coupures seules → cash_total correct, other_total 0 ;
   valeurs seules → other_total correct, cash_total 0 ; mixte → grand_total =
   somme, cash/other séparés.
2. `record_count` : crée items coupure + valeur ; totaux persistés corrects.
3. **écart cash-only** : clôture avec espèces attendues = comptées MAIS avec un
   bon de caisse en plus → **écart = 0** (le bon n'inflate pas l'écart) ; solde
   caisse = espèces comptées (pas le grand total).
4. **transfert guichet** : clôture d'un guichet avec autres valeurs → le
   transfert porte sur les espèces uniquement.
5. validation ligne : une ligne sans coupure ni valeur, ou avec les deux → erreur.
6. CRUD `CashValueType` : create/list/patch/delete via API ; seed idempotent.
7. non-régression : billetage existant (coupures seules) inchangé — l'écart et
   `total_amount` restent identiques à aujourd'hui.

## Hors périmètre

- Pas de valorisation comptable distincte des bons/monnaie électronique (pas de
  compte dédié) — ils sont déclarés au comptage, pas postés en compta ici.
- Pas de changement au calcul « attendu » (`principale_available_cash`), qui
  reste espèces.

## Points tranchés (rulings)

- `total_amount` = grand total (compat affichage) ; `cash_total` nouveau champ
  explicite pour l'écart (pas de recalcul implicite à la clôture).
- `CashCountItem` polymorphe (un FK nul sur deux) plutôt qu'un 2ᵉ modèle de
  ligne, pour réutiliser l'affichage et le reçu existants.
- Liste des types de valeurs **configurable** (CRUD), seedée avec Bon de caisse
  / Monnaie électronique / Autre.

# Module Reporting — Design (spec)

**Date:** 2026-08-17
**Statut:** approuvé pour rédaction du plan
**Sous-projet 2 / 2** (le 1er, Dépenses voyage, est livré).

## But
Un moteur de reporting produisant des états **PDF (à en-tête société)**, **Excel (.xlsx)** et
**CSV**, à partir des données existantes (recettes, réservations, bagages, colis, sessions de
caisse) + les **dépenses voyage** (livrées). Première tranche : le **moteur** + **5 états
financiers**. Les 4 listes transactionnelles suivent en 2ᵉ tranche.

## Décisions verrouillées
1. **PDF côté serveur via WeasyPrint** (HTML → PDF). Ajoute des dépendances système au
   Dockerfile Railway (Pango/Cairo/GDK-Pixbuf).
2. **1ʳᵉ tranche** = moteur + **Dépense, Recette, CA, Récapitulatif, Journaux de vente**.
3. **Export PDF + XLSX + CSV** dès le départ (paramètre `?format=`).

## Architecture — nouvelle app `apps/reporting`

```
apps/reporting/
  core.py            # dataclasses ReportColumn, ReportGroup, ReportResult
  registry.py        # code -> {name, build_fn, filters applicables}
  reports/
    depense.py        recette.py   ca.py   recapitulatif.py   journaux_vente.py
    # chacun : build(company, filters) -> ReportResult
  render/
    pdf.py           # WeasyPrint : gabarit A4 + en-tête/pied société
    xlsx.py          # openpyxl
    csv_.py          # module csv
  letterhead.py      # en-tête/pied société (logo, RCCM, NIU, capital, adresse…)
  filters.py         # parsing/validation des query params (période, agence, caisse, agent, bus)
  views.py           # ReportCatalogView, ReportGenerateView
  urls.py
  tests/
```

### `core.py`
```python
@dataclass
class ReportColumn: key: str; label: str; align: str = "left"; money: bool = False
@dataclass
class ReportGroup:  label: str; rows: list[dict]; subtotal: dict | None = None
@dataclass
class ReportResult:
    code: str; title: str; columns: list[ReportColumn]
    groups: list[ReportGroup]          # 1 groupe unique si pas de regroupement
    totals: dict | None = None
    period_label: str = ""; meta: dict = field(default_factory=dict)   # agent, agence, caisse…
```
Un état = **producteur de données** (`ReportResult`). Les **renderers** transforment ce résultat
en PDF / XLSX / CSV. Découplage total format ↔ données.

### Renderers
- **pdf.py** : gabarit A4 (portrait ou paysage selon l'état) ; `letterhead.company_header(company)`
  + tableau (groupes, sous-totaux, total) + pied société. `weasyprint.HTML(string=html).write_pdf()`.
- **xlsx.py** : openpyxl — 1 feuille, en-tête société, colonnes, groupes/sous-totaux, total, styles money.
- **csv_.py** : colonnes + lignes à plat (+ lignes total), séparateur `;` (Excel FR), UTF-8 BOM.

### Vues + RBAC
- `GET /api/v1/reporting/catalog/` → liste des états + filtres applicables (pour le front).
- `GET /api/v1/reporting/<code>/?format=pdf|xlsx|csv&date_from=&date_to=&agency=&register=&agent=&vehicle=&year=`
  → `FileResponse`/`HttpResponse` avec le bon `Content-Type` + `Content-Disposition`.
- Permission `reporting.view` (module `reporting`, data-migration admin_rbac). Société =
  `request.user.company` (fallback tenant, cf. TenantMiddleware).

## Les 5 états (colonnes + source + filtres)

### 1. Dépense — « LIST OF EXPENSES » (paysage)
Colonnes : S/N, TRIP (trip.number), VEHICULE (plaque), CATEGORY (expense_type.name),
DATE OPERATION (date), DESCRIPTION, TRESORERIE (cash_session→register.name), MONTANT. Total.
Source : `TripExpense` **PAID**, join trip→vehicle, expense_type, cash_session→register.
Filtres : période (date), agence (register.agency), caisse (register), bus (vehicle).

### 2. Recette — « BOOKING PAYMENT STATEMENT » (portrait, groupé par caisse)
Groupes = **caisse (register + caissier = session.opened_by)** ; lignes : DEPARTURE DATE
(trip.scheduled_departure), TRIP (route/label), VEHICULE, CATEGORY (fare_class), TOTAL (montant).
Sous-total par caisse + total général. Source : treasury `Transaction` `category=TICKET_SALES`,
`voyage_booking→booking→trip`, `cash_session→register`. Filtre : période.

### 3. CA — « PRODUCTION PAR AGENCE ET PAR MOIS » (paysage, matrice)
Colonnes : S/N, CENTRE D'ACTIVITE (agence), Jan…Déc, + total ligne. Une ligne par agence,
valeurs = somme des recettes (ticket sales) du mois. Agence = `Transaction.cash_session→register.agency`.
Total colonne + total général. Filtre : `year`.

### 4. Récapitulatif — « ETAT RECAPITULATIF DE TRESORERIE » (paysage)
Colonnes : S/N, PERIODE (jour), VEHICULE, PARTENAIRE (= société pour v1), RECETTE {VOYAGE
(ticket_sales), BAGAGE (baggage), TRANSIT (parcel_shipping)}, DEPENSE (Σ TripExpense PAID),
MARGE (recette totale − dépense). Groupé par (véhicule, jour). Total général. Source : treasury
`Transaction` par catégorie + `TripExpense`, rattachés au véhicule via
`voyage_booking/voyages_baggage/voyages_parcel→trip.vehicle` et `TripExpense.trip.vehicle`.
Filtre : période.

### 5. Journaux de vente — « JOURNAUX DE VENTE » (portrait)
Colonnes : No, PERIODE (opened_at), CAISSE (register.name), SOLDE INITIAL (opening_balance),
SOLDE FINAL (expected_closing), SOLDE REEL (closing_balance), EXCEDENT (difference si >0),
MANQUANT (−difference si <0). Totaux : Excédents, Manquants. Source : `CashSession`
(status CLOSED). Filtres : période (opened_at), caisse.

## Déploiement (WeasyPrint)
- `requirements/base.txt` : `weasyprint==63.0`, `openpyxl==3.1.5`.
- `backend/Dockerfile` : avant `pip install`, ajouter les libs système WeasyPrint :
  `apt-get update && apt-get install -y --no-install-recommends libpango-1.0-0 libpangocairo-1.0-0
  libgdk-pixbuf-2.0-0 libcairo2 libffi8 shared-mime-info fonts-dejavu && rm -rf /var/lib/apt/lists/*`.
- Vérifier `python -c "import weasyprint"` au build.

## Frontend (Angular)
- Section **Reporting** (sidebar, perm `reporting.view`) : page listant les états (via
  `/reporting/catalog/`), un formulaire de filtres (période, agence, caisse, agent, bus, année —
  affichés selon l'état), un sélecteur de **format** (PDF/Excel/CSV), bouton **Générer** qui
  ouvre/télécharge le fichier (`window.open` de l'URL avec params, ou `HttpClient` blob →
  download). Réutilise les services agences/caisses existants pour peupler les sélecteurs.

## Tests (pytest)
- `ReportResult` de chaque état sur un jeu de données seedé : bonnes colonnes, lignes, sous-totaux,
  total (ex. Récapitulatif : marge = recette − dépense ; Journaux : excédent/manquant).
- Renderers : `render_xlsx`/`render_csv` produisent un fichier non vide avec les en-têtes attendus ;
  `render_pdf` renvoie des octets `%PDF`. (WeasyPrint importable en CI ; sinon skip PDF si absent.)
- Vue : `?format=` renvoie le bon Content-Type ; `reporting.view` exigé (403 sinon).

## Hors périmètre (→ tranche 2)
Les 4 listes (Voyages, Réservation, Bagages, Colis) et le rapprochement carburant alloué (voyages)
vs réel (flotte `FuelLog`).

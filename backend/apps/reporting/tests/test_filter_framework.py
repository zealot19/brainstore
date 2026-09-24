import datetime
import uuid
from decimal import Decimal

import pytest


class _Req:
    def __init__(self, params):
        self.query_params = params  # dict → .get() OK


def test_parse_filters_typed():
    from apps.reporting.filters import parse_filters
    f = parse_filters(_Req({
        "date_from": "2026-01-01", "poids_min": "5", "client": "jean",
        "vehicle": "abc-uuid", "year": "2026", "unknown_key": "z",
    }))
    assert f["date_from"] == datetime.date(2026, 1, 1)
    assert f["poids_min"] == Decimal("5")
    assert f["client"] == "jean"
    assert f["vehicle"] == "abc-uuid"
    assert f["year"] == 2026
    assert "unknown_key" not in f          # clé inconnue ignorée
    assert f["date_to"] is None            # toutes les clés connues présentes


def test_periode_sets_date_range():
    from apps.reporting.filters import parse_filters
    f = parse_filters(_Req({"periode": "month"}))
    today = datetime.date.today()
    assert f["date_from"] == today.replace(day=1)
    assert f["date_to"] == today
    # dates explicites priment sur le preset
    f2 = parse_filters(_Req({"periode": "month", "date_from": "2026-03-10"}))
    assert f2["date_from"] == datetime.date(2026, 3, 10)


def _company(email="rep@x.com"):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="RepCo", admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


@pytest.mark.django_db
def test_catalog_returns_enriched_filter_specs():
    from rest_framework.test import APIClient
    company, admin = _company()
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.get("/api/v1/reporting/catalog/")
    assert r.status_code == 200, r.content
    data = r.json().get("data", r.json())
    voyages = next(x for x in data if x["code"] == "voyages")
    specs = {s["key"]: s for s in voyages["filters"]}
    assert specs["categorie_tarifaire"]["type"] == "select"
    assert specs["categorie_tarifaire"]["options"] == "fare_classes"
    assert specs["date_from"]["type"] == "date"


@pytest.mark.django_db
def test_filter_options_scoped_and_statut_by_report():
    from rest_framework.test import APIClient
    company, admin = _company("rep2@x.com")
    c = APIClient(); c.force_authenticate(user=admin)
    # fare_classes : la création de société seede des catégories tarifaires.
    r = c.get("/api/v1/reporting/filter-options/?source=fare_classes")
    assert r.status_code == 200, r.content
    assert len(r.json().get("data", [])) >= 1
    # statut résolu par rapport (colis → statuts de Parcel).
    r = c.get("/api/v1/reporting/filter-options/?source=statut&report=colis")
    vals = [o["value"] for o in r.json().get("data", [])]
    assert "picked_up" in vals


@pytest.mark.django_db
def test_report_filter_mappings_are_valid_orm_paths():
    """Exécute chaque rapport avec tous ses filtres renseignés → détecte un chemin
    ORM invalide (FieldError) dans les mappings."""
    from apps.reporting.registry import REPORTS
    from apps.reporting.filter_defs import FILTER_DEFS
    company, admin = _company("rep3@x.com")
    U = str(uuid.uuid4())
    for code in ("voyages", "reservation", "bagages", "colis", "recette", "depense",
                 "journaux-vente", "cashflow", "tresorerie", "fiscalite"):
        entry = REPORTS[code]
        f = {k: None for k in FILTER_DEFS}
        for k in entry["filters"]:
            t = FILTER_DEFS.get(k, {}).get("type")
            f[k] = 1 if t == "number" else (None if t == "date" else U if t == "select" else "x")
        # ne doit pas lever (les querysets s'exécutent → valide les lookups)
        entry["build"](company, f)


@pytest.mark.django_db
def test_filter_summary_lists_and_resolves_active_filters():
    """Les critères imprimés sur le document : select résolu en libellé, texte tel quel,
    filtres non renseignés / dates exclus."""
    from apps.reporting.filter_defs import filter_summary, FILTER_DEFS
    company, admin = _company("rep6@x.com")
    f = {k: None for k in FILTER_DEFS}
    f["statut"] = "picked_up"        # select -> résolu en libellé lisible
    f["destinataire"] = "Jean"       # text -> tel quel
    f["date_from"] = "2026-01-01"    # date -> exclue (gérée par period_label)
    crit = filter_summary(company, "colis", f)
    d = {c["label"]: c["value"] for c in crit}
    assert d.get("Destinataire") == "Jean"
    assert "Statut" in d and d["Statut"] != "picked_up"   # résolu, pas l'id brut
    assert "Date début" not in d                           # dates exclues


@pytest.mark.django_db
def test_new_financial_reports_are_registered_and_build():
    """cashflow / tresorerie / fiscalite : enregistrés au catalogue et build renvoie
    un ReportResult cohérent (colonnes + groupes) sur une société vierge."""
    from apps.reporting.registry import REPORTS
    from apps.reporting.core import ReportResult
    company, admin = _company("rep5@x.com")
    f = {k: None for k in __import__("apps.reporting.filter_defs", fromlist=["FILTER_DEFS"]).FILTER_DEFS}
    for code in ("cashflow", "tresorerie", "fiscalite"):
        assert code in REPORTS
        res = REPORTS[code]["build"](company, f)
        assert isinstance(res, ReportResult)
        assert res.columns and res.groups is not None


@pytest.mark.django_db
def test_journaux_ecart_branches_execute():
    """Chaque valeur d'écart exécute son lookup sur difference sans FieldError."""
    from apps.reporting.registry import REPORTS
    from apps.reporting.filter_defs import FILTER_DEFS
    company, admin = _company("rep4@x.com")
    for ecart in ("excedent", "manquant", "equilibre"):
        f = {k: None for k in FILTER_DEFS}
        f["ecart"] = ecart
        REPORTS["journaux-vente"]["build"](company, f)

import pytest
from decimal import Decimal

from apps.reporting.reports.partenaires import partner_share, build


class _Veh:
    """Faux véhicule pour tester partner_share sans DB."""
    def __init__(self, owner, pt=0, pp=0, pb=0):
        self.owner_partner_id = owner
        self.partner_pct_ticket = Decimal(pt)
        self.partner_pct_parcel = Decimal(pp)
        self.partner_pct_baggage = Decimal(pb)


def test_partner_share_no_expenses_equals_gross_blend():
    # Sans dépenses (net == brut), la part partenaire vaut la part brute historique :
    # 10000×40% + 2000×10% + 4000×25% = 5200 ; brut = 16000 ; net = 16000.
    v = _Veh(owner="X", pt=40, pp=10, pb=25)
    assert partner_share(v, Decimal("10000"), Decimal("2000"), Decimal("4000"),
                         net=Decimal("16000")) == Decimal("5200")


def test_partner_share_splits_expenses_on_profit():
    # Taux effectif = part_brute / brut appliqué au net : le partenaire porte sa
    # quote-part des dépenses. 20000 ticket @50% ; dépenses 8000 ; net 12000.
    v = _Veh(owner="X", pt=50)
    # part_brute = 10000 ; taux = 10000/20000 = 0.5 ; 0.5 × 12000 = 6000.
    assert partner_share(v, Decimal("20000"), Decimal("0"), Decimal("0"),
                         net=Decimal("12000")) == Decimal("6000")


def test_partner_share_negative_on_loss():
    # Net négatif : le partenaire partage la perte (part négative autorisée).
    # 13000 ticket @50% ; dépenses 85000 ; net -72000 ; taux 0.5 ; 0.5×-72000 = -36000.
    v = _Veh(owner="X", pt=50)
    assert partner_share(v, Decimal("13000"), Decimal("0"), Decimal("0"),
                         net=Decimal("-72000")) == Decimal("-36000")


def test_partner_share_zero_revenue_bears_nothing():
    # Aucun revenu (que des dépenses) : pas de base de répartition, l'agence porte tout.
    v = _Veh(owner="X", pt=50, pp=50, pb=50)
    assert partner_share(v, Decimal("0"), Decimal("0"), Decimal("0"),
                         net=Decimal("-40000")) == Decimal("0")


def test_partner_share_zero_without_partner():
    v = _Veh(owner=None, pt=40, pp=10, pb=25)
    assert partner_share(v, Decimal("10000"), Decimal("2000"), Decimal("4000"),
                         net=Decimal("16000")) == Decimal("0")
    assert partner_share(None, Decimal("10000"), Decimal("0"), Decimal("0"),
                         net=Decimal("10000")) == Decimal("0")


@pytest.mark.django_db
def test_report_ticket_revenue_no_bus_goes_to_agency():
    from apps.treasury.services import create_cash_register, open_session
    from apps.voyages_booking.tests_integration_treasury import _setup, _book
    company, admin, trip = _setup()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    _book(company, admin, trip)  # vend un billet 15000 sur un voyage sans véhicule

    res = build(company, {"date_from": None, "date_to": None})
    # Sans bus → tout va à l'agence, aucune part partenaire, pas de dépenses.
    assert res.totals["brut"] == Decimal("15000")
    assert res.totals["net"] == Decimal("15000")
    assert res.totals["ag"] == Decimal("15000")
    assert res.totals["part"] == Decimal("0")
    assert res.totals["dep"] == Decimal("0")

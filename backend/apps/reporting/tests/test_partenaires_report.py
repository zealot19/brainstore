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


def test_partner_share_per_type_percent():
    v = _Veh(owner="X", pt=40, pp=10, pb=25)
    # 10000×40% + 2000×10% + 4000×25% = 4000 + 200 + 1000 = 5200
    assert partner_share(v, Decimal("10000"), Decimal("2000"), Decimal("4000")) == Decimal("5200")


def test_partner_share_zero_without_partner():
    v = _Veh(owner=None, pt=40, pp=10, pb=25)
    assert partner_share(v, Decimal("10000"), Decimal("2000"), Decimal("4000")) == Decimal("0")
    assert partner_share(None, Decimal("10000"), Decimal("0"), Decimal("0")) == Decimal("0")


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

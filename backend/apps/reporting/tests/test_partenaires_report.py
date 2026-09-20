import pytest
from decimal import Decimal

from apps.reporting.reports.partenaires import split_revenue, build


def test_split_revenue_with_partner():
    ag, part = split_revenue(Decimal("10000"), Decimal("40"))
    assert part == Decimal("4000")
    assert ag == Decimal("6000")


def test_split_revenue_no_partner():
    ag, part = split_revenue(Decimal("10000"), Decimal("0"))
    assert part == Decimal("0")
    assert ag == Decimal("10000")


@pytest.mark.django_db
def test_report_aggregates_ticket_revenue_to_agency_without_partner():
    from apps.treasury.services import create_cash_register, open_session
    from apps.voyages_booking.tests_integration_treasury import _setup, _book
    company, admin, trip = _setup()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    _book(company, admin, trip)  # sells one 15000 ticket on a vehicle-less trip

    res = build(company, {"date_from": None, "date_to": None})
    assert res.totals["rev"] == Decimal("15000")
    assert res.totals["ag"] == Decimal("15000")   # no partner → all to the agency
    assert res.totals["part"] == Decimal("0")

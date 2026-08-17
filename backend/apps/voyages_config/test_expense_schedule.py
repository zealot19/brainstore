import pytest
from decimal import Decimal
from apps.voyages_config.models import (
    Town, ServicePoint, Route, FareClass,
    ExpenseType, ExpenseSchedule, ExpenseScheduleLine,
)


def _route_fc(company):
    town = Town.objects.create(company=company, name="Bamenda")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="Origin", is_station=True)
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="Dest", is_station=True)
    route = Route.objects.create(company=company, code="R1", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="CL", name="Classic")
    return route, fc


@pytest.mark.django_db
def test_schedule_holds_lines():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Bar Co", admin_email="bar@x.com",
                                admin_first_name="A", admin_last_name="B")
    route, fc = _route_fc(company)
    et = ExpenseType.objects.get(company=company, code="CARBURANT")
    sch = ExpenseSchedule.objects.create(company=company, route=route, fare_class=fc)
    ExpenseScheduleLine.objects.create(schedule=sch, expense_type=et, amount=Decimal("15000"))
    assert sch.lines.count() == 1
    assert sch.lines.first().amount == Decimal("15000")

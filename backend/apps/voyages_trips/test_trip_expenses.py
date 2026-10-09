import pytest
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from apps.voyages_trips.models import TripExpense


def _route_fc(company):
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    town = Town.objects.create(company=company, name="Bamenda")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="Origin")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="Dest")
    route = Route.objects.create(company=company, code="R1", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="CL", name="Classic")
    return route, fc


@pytest.mark.django_db
def test_trip_creation_copies_matching_schedule():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.voyages_config.models import ExpenseType, ExpenseSchedule, ExpenseScheduleLine
    from apps.voyages_trips.services.trip_services import create_trip
    company, _ = create_company(name="TE Co", admin_email="te@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="te@x.com")
    route, fc = _route_fc(company)
    et = ExpenseType.objects.get(company=company, code="CARBURANT")
    sch = ExpenseSchedule.objects.create(company=company, route=route, fare_class=fc)
    ExpenseScheduleLine.objects.create(schedule=sch, expense_type=et, amount=Decimal("15000"))
    dep = timezone.now(); arr = dep + timedelta(hours=6)
    trip = create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=dep, scheduled_arrival=arr, user=admin)
    exps = TripExpense.objects.filter(trip=trip)
    assert exps.count() == 1
    assert exps.first().amount == Decimal("15000")
    assert exps.first().status == TripExpense.Status.PLANNED

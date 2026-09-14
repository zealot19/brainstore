import pytest
from datetime import timedelta
from decimal import Decimal
from django.utils import timezone


def _setup():
    from apps.system_config.services import create_company
    from apps.voyages_config.models import (Town, ServicePoint, FareClass, Route,
                                            ExpenseType, ExpenseSchedule, ExpenseScheduleLine)
    from apps.authentication.models import User
    company, _ = create_company(name="Ax Co", admin_email="ax@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="ax@x.com")
    town = Town.objects.create(company=company, name="Douala")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="B")
    route = Route.objects.create(company=company, code="A-B", origin=a, destination=b)
    fc = FareClass.objects.create(company=company, code="ECO", name="Éco")
    et = ExpenseType.objects.create(company=company, code="CARB", name="Carburant")
    sched = ExpenseSchedule.objects.create(company=company, route=route, fare_class=fc)
    ExpenseScheduleLine.objects.create(schedule=sched, expense_type=et, amount=Decimal("20000"))
    return company, admin, route, fc


def _mk(company, admin, route, fc, auto):
    from apps.voyages_trips.services.trip_services import create_trip
    now = timezone.now() + timedelta(days=1)
    return create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                       auto_expenses=auto, user=admin)


@pytest.mark.django_db
def test_auto_expenses_applies_bareme():
    from apps.voyages_trips.models import TripExpense
    company, admin, route, fc = _setup()
    trip = _mk(company, admin, route, fc, auto=True)
    assert trip.auto_expenses is True
    assert TripExpense.objects.filter(trip=trip).count() == 1


@pytest.mark.django_db
def test_manual_expenses_skips_bareme():
    from apps.voyages_trips.models import TripExpense
    company, admin, route, fc = _setup()
    trip = _mk(company, admin, route, fc, auto=False)
    assert trip.auto_expenses is False
    assert TripExpense.objects.filter(trip=trip).count() == 0

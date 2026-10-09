# backend/apps/voyages_trips/dashboard/tests/test_trip_cards_scope.py
import datetime as dt
import pytest
from apps.voyages_trips.dashboard.selectors import trip_cards

pytestmark = pytest.mark.django_db


def test_other_agency_user_sees_no_cards_admin_sees_all():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.system_config.models import Agency
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    from apps.voyages_trips.models import Trip
    from apps.users.services.user_services import create_user

    company, _ = create_company(name="ScopeCo", admin_email="sc@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="sc@x.com")
    a = Agency.objects.create(company=company, name="Douala", code="DLA")
    b = Agency.objects.create(company=company, name="Yaoundé", code="YDE")
    town = Town.objects.create(company=company, name="T")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O", agency=a)
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D", agency=a)
    route = Route.objects.create(company=company, code="R1", origin=o, destination=d)
    fare_class = FareClass.objects.create(company=company, code="STD", name="Standard")
    today = dt.date.today()
    Trip.objects.create(company=company, code="TR1", route=route, origin=o, destination=d,
                        fare_class=fare_class,
                        scheduled_departure=dt.datetime.combine(today, dt.time(8, 0)),
                        scheduled_arrival=dt.datetime.combine(today, dt.time(12, 0)),
                        status=Trip.Status.DRAFT)
    other, _ = create_user(created_by=admin, company=company, email="u@x.com",
                           first_name="S", last_name="T", is_institution_admin=False,
                           default_agency_id=b.id, agency_ids=[b.id])

    assert trip_cards(company, other, today, today) == []       # agency B: none
    assert len(trip_cards(company, admin, today, today)) == 1    # admin: all

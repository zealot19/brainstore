import pytest
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from apps.authentication.models import User

_NOF = {"date_from": None, "date_to": None}


def _base(company, admin):
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    from apps.voyages_trips.models import TripSeat
    from apps.voyages_trips.services.trip_services import create_trip
    town = Town.objects.create(company=company, name="Bamenda")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="Origin")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="Dest")
    route = Route.objects.create(company=company, code="R1", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="CL", name="Classic")
    dep = timezone.now()
    trip = create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=6), user=admin)
    seat = TripSeat.objects.create(trip=trip, seat_number="1", row=1, column=1, seat_type="std", created_by=admin)
    return {"o": o, "d": d, "route": route, "fc": fc, "trip": trip, "seat": seat}


def _company(name, email):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


@pytest.mark.django_db
def test_bagages_total():
    from apps.voyages_consignment.models import Baggage
    from apps.reporting.registry import REPORTS
    company, admin = _company("Bag Co", "bag@x.com")
    Baggage.objects.create(company=company, sender_name="Jean", amount_due=Decimal("2000"), created_by=admin)
    result = REPORTS["bagages"]["build"](company, _NOF)
    assert result.totals["tarif"] == Decimal("2000")
    assert result.groups[0].rows[0]["passager"] == "Jean"


@pytest.mark.django_db
def test_reservation_total():
    from apps.voyages_booking.models import Passenger, Booking, Ticket
    from apps.reporting.registry import REPORTS
    company, admin = _company("Res Co", "res@x.com")
    ctx = _base(company, admin)
    p = Passenger.objects.create(company=company, name="A B", phone="600")
    booking = Booking.objects.create(company=company, outbound_trip=ctx["trip"], buyer=p)
    Ticket.objects.create(booking=booking, passenger=p, trip=ctx["trip"], fare_class=ctx["fc"],
                          origin_point=ctx["o"], destination_point=ctx["d"], trip_seat=ctx["seat"],
                          amount=Decimal("5000"), number="TK1", created_by=admin)
    result = REPORTS["reservation"]["build"](company, _NOF)
    assert result.totals["price"] == Decimal("5000")
    assert result.groups[0].rows[0]["ticket"] == "TK1"


@pytest.mark.django_db
def test_colis_total():
    from apps.voyages_config.models import ConsignmentNature, ConsignmentType
    from apps.voyages_consignment.models import Parcel
    from apps.reporting.registry import REPORTS
    company, admin = _company("Col Co", "col@x.com")
    ctx = _base(company, admin)
    nature = ConsignmentNature.objects.create(company=company, code="N", name="Général")
    ct = ConsignmentType.objects.create(company=company, code="CT", label="Colis", nature=nature)
    Parcel.objects.create(company=company, origin_point=ctx["o"], destination_point=ctx["d"], consignment_type=ct,
                          sender_name="S", sender_phone="1", recipient_name="R", recipient_phone="2",
                          amount_due=Decimal("8000"), created_by=admin)
    result = REPORTS["colis"]["build"](company, _NOF)
    assert result.totals["price"] == Decimal("8000")
    assert result.groups[0].rows[0]["sender"] == "S"


@pytest.mark.django_db
def test_voyages_reservation_and_parcel_sums():
    from apps.voyages_config.models import ConsignmentNature, ConsignmentType
    from apps.voyages_booking.models import Passenger, Booking, Ticket
    from apps.voyages_consignment.models import Parcel
    from apps.reporting.registry import REPORTS
    company, admin = _company("Voy Co", "voy@x.com")
    ctx = _base(company, admin)
    p = Passenger.objects.create(company=company, name="A B", phone="600")
    booking = Booking.objects.create(company=company, outbound_trip=ctx["trip"], buyer=p)
    Ticket.objects.create(booking=booking, passenger=p, trip=ctx["trip"], fare_class=ctx["fc"],
                          origin_point=ctx["o"], destination_point=ctx["d"], trip_seat=ctx["seat"],
                          amount=Decimal("5000"), number="TK1", created_by=admin)
    nature = ConsignmentNature.objects.create(company=company, code="N", name="Général")
    ct = ConsignmentType.objects.create(company=company, code="CT", label="Colis", nature=nature)
    Parcel.objects.create(company=company, origin_point=ctx["o"], destination_point=ctx["d"], consignment_type=ct,
                          trip=ctx["trip"], sender_name="S", sender_phone="1", recipient_name="R",
                          recipient_phone="2", amount_due=Decimal("8000"), created_by=admin)
    result = REPORTS["voyages"]["build"](company, _NOF)
    row = result.groups[0].rows[0]
    assert row["resa"] == Decimal("5000")
    assert row["colis"] == Decimal("8000")
    assert result.totals["resa"] == Decimal("5000")

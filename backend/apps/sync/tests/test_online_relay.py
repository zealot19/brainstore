import pytest
from apps.core.exceptions import ApplicationError
from apps.system_config.models import Agency
from apps.online_booking import services
from apps.online_booking.models import OnlineBookingRequest as OBR
from apps.sync.presence import touch
from apps.sync.reserve import author_booking
from apps.voyages_booking.tests_integration_treasury import _setup

pytestmark = pytest.mark.django_db


@pytest.fixture(autouse=True)
def _sync_on(settings):
    settings.SYNC_ENABLED = True
    settings.FAKE_PAYMENTS = True


def _agency_owned_trip():
    company, admin, trip = _setup()
    ag = Agency.objects.create(company=company, name="Douala", code="DLA")
    trip.origin.agency = ag
    trip.origin.save(update_fields=["agency"])
    return company, admin, trip, ag


def _seat(trip):
    return trip.seats.order_by("column").first()


def test_initiate_refused_when_agency_offline():
    company, admin, trip, ag = _agency_owned_trip()
    with pytest.raises(ApplicationError):
        services.initiate_booking(
            company=company, trip=trip, passenger_name="X", passenger_phone="6",
            seat_id=_seat(trip).id, payment_method="mtn_momo", payment_phone="6", source="pwa")


def test_relay_confirm_authors_at_agency_and_marks_paid(monkeypatch):
    company, admin, trip, ag = _agency_owned_trip()
    touch(ag.id)  # agency online

    br = services.initiate_booking(
        company=company, trip=trip, passenger_name="Jean", passenger_phone="670",
        seat_id=_seat(trip).id, payment_method="mtn_momo", payment_phone="670", source="pwa")
    assert br.status == OBR.Status.PENDING

    # Simulate the agency reserve_worker fulfilling the job during the wait.
    def fake_wait(job_id, timeout):
        from apps.sync.models import OnlineBookingJob
        j = OnlineBookingJob.objects.get(id=job_id)
        res = author_booking({
            "trip_id": str(j.trip_id), "passenger_name": j.passenger_name,
            "passenger_phone": j.passenger_phone, "passenger_email": j.passenger_email,
            "payment_method": j.payment_method})
        j.status = "done"; j.result = res; j.save()
        return {"_status": "done", **res}

    import apps.online_booking.services.services as S
    monkeypatch.setattr(S, "_wait_for_job", fake_wait)
    S.confirm_payment(br)
    br.refresh_from_db()
    assert br.status == OBR.Status.PAID
    assert br.ticket_number  # surfaced from the agency-authored booking
    assert br.booking_id is None  # real Booking arrives later via up-sync

import pytest
from rest_framework.test import APIClient
from apps.authentication.tokens import CustomRefreshToken
from apps.voyages_booking.tests_integration_treasury import _setup, _book


def _d(resp):
    b = resp.json()
    return b.get("data", b) if isinstance(b, dict) else b


def _client(user):
    tok = str(CustomRefreshToken.for_user(user).access_token)
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
    return c


def _open_caisse(company, admin):
    from apps.treasury.services import create_cash_register, open_session
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)


@pytest.mark.django_db
def test_cancel_voucher_and_list():
    company, admin, trip = _setup()
    _open_caisse(company, admin)
    b = _book(company, admin, trip)
    c = _client(admin)

    # Annuler avec motif via l'API.
    r = c.post(f"/api/v1/voyages/booking/bookings/{b.id}/cancel/",
               {"cancellation_reason": "client absent"}, format="json")
    assert r.status_code == 200, r.content

    # Bon d'annulation.
    r = c.get(f"/api/v1/voyages/booking/bookings/{b.id}/cancellation-voucher/")
    assert r.status_code == 200
    html = _d(r)["html"]
    assert b.reference in html and "client absent" in html

    # Liste des annulations : contient le booking ; filtre voyage le garde.
    r = c.get(f"/api/v1/voyages/booking/bookings/cancelled/?trip={trip.id}")
    assert r.status_code == 200
    rows = _d(r)
    assert any(x["id"] == str(b.id) for x in rows)

    # Filtre caissier inexistant → exclu.
    import uuid
    r = c.get(f"/api/v1/voyages/booking/bookings/cancelled/?cashier={uuid.uuid4()}")
    assert all(x["id"] != str(b.id) for x in _d(r))


@pytest.mark.django_db
def test_cancelled_list_excludes_active_bookings():
    company, admin, trip = _setup()
    _open_caisse(company, admin)
    b = _book(company, admin, trip)   # non annulé
    c = _client(admin)
    r = c.get("/api/v1/voyages/booking/bookings/cancelled/")
    assert r.status_code == 200
    assert all(x["id"] != str(b.id) for x in _d(r))

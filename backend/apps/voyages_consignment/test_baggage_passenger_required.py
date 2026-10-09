import pytest
from apps.core.exceptions import ApplicationError
from apps.voyages_consignment.services.baggage_services import add_baggage
from apps.voyages_consignment.config_api.serializers import BaggageWrite


@pytest.fixture
def ctx(db):
    from apps.voyages_booking.tests_integration_treasury import _setup, _book
    from apps.treasury.services import create_cash_register, open_session
    from apps.voyages_booking.models import Ticket
    company, admin, trip = _setup()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    _book(company, admin, trip)
    ticket = Ticket.objects.filter(booking__company=company).first()
    return company, admin, trip, ticket


def test_write_serializer_requires_ticket():
    assert BaggageWrite().fields["ticket_id"].required


@pytest.mark.django_db
def test_add_baggage_requires_ticket(ctx):
    company, admin, trip, ticket = ctx
    with pytest.raises(ApplicationError):
        add_baggage(company, trip=trip, ticket=None, amount_due=0, user=admin)


@pytest.mark.django_db
def test_add_baggage_owner_from_passenger(ctx):
    company, admin, trip, ticket = ctx
    b = add_baggage(company, trip=trip, ticket=ticket, amount_due=0, user=admin)
    pax = ticket.passenger
    assert b.ticket_id == ticket.id
    assert b.sender_name == pax.full_name
    assert b.sender_phone == pax.phone
    assert b.sender_client_id == pax.id

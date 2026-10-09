import pytest


@pytest.mark.django_db
def test_add_baggage_links_sender_client_to_ticket_passenger():
    """M23 : le bagage est rattaché au passager du billet ; son propriétaire
    (sender_client) est ce passager."""
    from apps.voyages_booking.tests_integration_treasury import _setup, _book
    from apps.treasury.services import create_cash_register, open_session
    from apps.voyages_booking.models import Ticket
    from apps.voyages_consignment.services.baggage_services import add_baggage

    company, admin, trip = _setup()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    _book(company, admin, trip)
    ticket = Ticket.objects.filter(booking__company=company).first()

    b = add_baggage(company, trip=trip, ticket=ticket, amount_due=0, user=admin)
    assert b.sender_client_id == ticket.passenger_id
    assert b.sender_name == ticket.passenger.full_name

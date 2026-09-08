"""Agency-side: author an online booking locally (the agency is the seat authority)."""


def _system_user(company):
    from apps.authentication.models import User
    return (User.objects.filter(company=company, is_institution_admin=True, is_active=True)
            .order_by("date_joined").first())


def author_booking(job) -> dict:
    """Create the booking for a relay job on this (origin agency) node.

    `job` is a dict with trip_id + passenger/payment fields. Returns the result
    (booking_reference, ticket_number, seat_number). Raises ApplicationError on
    failure (trip full, no fare, etc.).
    """
    from apps.voyages_trips.models import Trip
    from apps.online_booking import selectors as ob_sel
    from apps.voyages_booking.services import create_booking
    from apps.voyages_booking.models import Booking

    trip = Trip.objects.select_related("company", "origin").get(id=job["trip_id"])
    company = trip.company
    seat = ob_sel.first_available_seat(trip)
    passenger = {
        "name": job["passenger_name"],
        "phone": job["passenger_phone"],
        "email": job.get("passenger_email", ""),
    }
    booking = create_booking(
        company, trip_type="one_way", outbound_trip=trip, return_trip=None,
        buyer_spec=passenger,
        items=[{"passenger": passenger, "destination_point_id": None,
                "outbound_seat_id": str(seat.id)}],
        payment_method=job.get("payment_method", ""),
        channel=Booking.Channel.ONLINE, user=_system_user(company),
    )
    ticket = booking.tickets.first()
    return {
        "booking_reference": booking.reference,
        "ticket_number": ticket.number if ticket else "",
        "seat_number": seat.seat_number,
    }

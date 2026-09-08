"""Push a confirmed ticket (with QR image) to the user on WhatsApp."""
import io
import logging

import segno

from apps.whatsapp_bot.services import wa_client

logger = logging.getLogger(__name__)


def _qr_png(text: str) -> bytes:
    buf = io.BytesIO()
    segno.make(text, error="m").save(buf, kind="png", scale=6, border=2)
    return buf.getvalue()


def notify_ticket(booking_request):
    """Send the ticket summary + QR image to the passenger's WhatsApp number.

    Target of the guarded notify hook in online_booking.confirm_payment.
    """
    booking = booking_request.booking
    ticket = booking.tickets.first() if booking else None
    number = (getattr(booking_request, "ticket_number", "")
              or (ticket.number if ticket else str(booking_request.id)))
    to = booking_request.passenger_phone
    trip = booking_request.trip
    seat = booking_request.trip_seat.seat_number if booking_request.trip_seat_id else "-"
    caption = (
        "🎫 Réservation confirmée\n"
        f"Billet : {number}\n"
        f"{trip.origin.town.name} → {trip.destination.town.name}\n"
        f"{trip.scheduled_departure:%d/%m/%Y %H:%M}\n"
        f"Siège : {seat}\n"
        f"Montant : {booking_request.amount} XAF\n"
        "Présentez ce QR à l'embarquement."
    )
    media_id = wa_client.upload_media(_qr_png(number))
    if media_id:
        wa_client.send_image(to, media_id, caption=caption)
    else:
        wa_client.send_text(to, caption)

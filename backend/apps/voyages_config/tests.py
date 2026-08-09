from decimal import Decimal
from apps.voyages_config.models.ticket import (
    TicketTemplate, DEFAULT_PARCEL_RECEIPT_TERMS, DEFAULT_BAGGAGE_TICKET_NOTE,
)


def test_ticket_template_has_doc_fields_with_defaults():
    t = TicketTemplate()
    assert t.ticket_width_mm == Decimal("203")
    assert t.ticket_height_mm == Decimal("82.55")
    assert t.parcel_receipt_terms == DEFAULT_PARCEL_RECEIPT_TERMS
    assert t.baggage_ticket_note == DEFAULT_BAGGAGE_TICKET_NOTE

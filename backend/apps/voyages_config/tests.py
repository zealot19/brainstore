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


from apps.voyages_config import ticket_render


def test_build_verso_has_blank_cut_column_52mm():
    t = TicketTemplate(slogan="NOUS PARTONS ENSEMBLE", color_ink="#1a1a1a", color_accent="#e6a817")
    t.agencies_list = [{"name": "YAOUNDE", "location": "OLEMBE", "phone": "690000000"}]
    html = ticket_render.build_verso(t)
    assert 'class="cut"' in html          # colonne vierge gauche
    assert "52mm" in html                 # largeur alignee sur le talon du recto
    assert "Nos Agences" in html and "YAOUNDE" in html


def test_render_document_uses_template_size():
    t = TicketTemplate()  # defauts 203 x 82.55
    doc = ticket_render.render_document(["<div>x</div>"], tpl=t)
    assert "203" in doc and "82.55" in doc and "landscape" in doc

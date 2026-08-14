from apps.voyages_config.models.ticket import TicketTemplate
from apps.voyages_config.models import ServicePoint
from apps.voyages_consignment.models import Parcel, Baggage
from apps.voyages_consignment import doc_render


def _tpl():
    return TicketTemplate(brand_name="BLUEBIRD EXPRESS", niu="M09151", rccm="RCCM/DLA/2015",
                          phone="699 62 74 80", color_ink="#111", color_accent="#e6a817")


def test_render_80mm_page_size():
    doc = doc_render.render_80mm(["<div>x</div>"])
    assert "80mm auto" in doc and "<!DOCTYPE html>" in doc


def test_parcel_receipt_contains_key_fields():
    p = Parcel(reference="COL-00012", sender_name="LONGTIO", sender_phone="678015230",
               recipient_name="MASSOU", recipient_phone="693009981",
               description="test123456", quantity=1, amount_due=1000, declared_value=1)
    p.destination_point = ServicePoint(name="AYOS")
    p.origin_point = ServicePoint(name="BERTOUA")
    html = doc_render.build_parcel_receipt(p, _tpl(), agent="NOUROUDDINE")
    for token in ["COL-00012", "LONGTIO", "MASSOU", "AYOS", "1 000", "NOUROUDDINE",
                  "Signature Client", "80mm auto"]:
        assert token in html, token


def test_baggage_ticket_has_two_copies():
    b = Baggage(tag_number="BAG-00003", sender_name="LONGTIO", sender_phone="678015230",
                description="valise", quantity=1, amount_due=2000)
    html = doc_render.build_baggage_ticket(b, _tpl(), agent="Admin")
    assert html.count("Ticket de bagage") == 2  # 2 exemplaires
    assert "LONGTIO" in html and "2 000" in html


def test_baggage_label_payant_flag():
    b = Baggage(tag_number="BAG-9", sender_name="X", amount_due=2000, quantity=1)
    assert "PAYANT" in doc_render.build_baggage_label(b, _tpl(), agent="Admin")
    b0 = Baggage(tag_number="BAG-0", sender_name="X", amount_due=0, quantity=1)
    assert "GRATUIT" in doc_render.build_baggage_label(b0, _tpl(), agent="Admin")


from apps.voyages_consignment.selectors import list_parcels, list_baggage

_UU = "00000000-0000-0000-0000-000000000002"


def test_list_parcels_filters_type_points_and_departure():
    qs = list_parcels(None, consignment_type=_UU, origin_point=_UU, destination_point=_UU,
                      date_field="departure", date_from="2026-01-01", date_to="2026-12-31")
    sql = str(qs.query)
    assert "consignment_type_id" in sql
    assert "origin_point_id" in sql
    assert "destination_point_id" in sql
    assert "scheduled_departure" in sql


def test_list_baggage_filters_type_and_created_default():
    qs = list_baggage(None, consignment_type=_UU, date_from="2026-01-01")
    sql = str(qs.query)
    assert "consignment_type_id" in sql
    assert "created_at" in sql


def test_baggage_write_accepts_empty_optional_fields():
    from apps.voyages_consignment.config_api.serializers import BaggageWrite
    data = {"trip_id": "00000000-0000-0000-0000-000000000001",
            "sender_name": "X", "birth_date": "", "ticket_id": "", "consignment_type_id": ""}
    s = BaggageWrite(data=data)
    assert s.is_valid(), s.errors
    assert s.validated_data["birth_date"] is None
    assert s.validated_data["ticket_id"] is None
    assert s.validated_data["consignment_type_id"] is None


def test_baggage_write_accepts_null_optional_text_fields():
    """form.reset() envoie null pour les champs non listés -> le serializer doit coercer null->''."""
    from apps.voyages_consignment.config_api.serializers import BaggageWrite
    data = {"trip_id": "00000000-0000-0000-0000-000000000001", "id_type": "cni",
            "sender_name": None, "sender_phone": None, "civility": None,
            "id_number": None, "email": None, "description": None}
    s = BaggageWrite(data=data)
    assert s.is_valid(), s.errors
    assert s.validated_data["sender_name"] == "" and s.validated_data["civility"] == ""

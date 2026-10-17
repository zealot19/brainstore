import pytest
from decimal import Decimal


def _company():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="DocFmt Co", admin_email="df@x.com",
                                admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email="df@x.com")


def test_page_size_css_auto_and_fixed():
    from apps.voyages_config.doc_format import page_size_css
    assert page_size_css(80, 0) == "80mm auto"
    assert page_size_css(210, 148) == "210mm 148mm"


def test_resolve_defaults_then_override(db):
    from apps.voyages_config.doc_format import resolve_doc_format
    from apps.voyages_config.models import DocumentFormat
    company, _ = _company()
    assert resolve_doc_format(company, "recu_colis") == (80.0, 0.0)          # défaut
    DocumentFormat.objects.create(company=company, code="recu_colis",
                                  width_mm=Decimal("58"), height_mm=Decimal("0"))
    assert resolve_doc_format(company, "recu_colis") == (58.0, 0.0)          # configuré


@pytest.mark.django_db
def test_parcel_label_renderer_uses_configured_size():
    from apps.voyages_config import ticket_render
    from apps.voyages_consignment import doc_render
    from apps.voyages_consignment.models import Parcel
    from apps.voyages_config.models import Town, ServicePoint, ConsignmentNature, ConsignmentType
    company, admin = _company()
    tpl = ticket_render.get_or_create_template(company)
    town = Town.objects.create(company=company, name="Dla")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="Gare A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="Gare B")
    nat = ConsignmentNature.objects.create(company=company, code="STD", name="Std")
    ct = ConsignmentType.objects.create(company=company, code="CT", label="T", nature=nat)
    p = Parcel.objects.create(company=company, origin_point=a, destination_point=b,
                              consignment_type=ct, sender_name="E", sender_phone="6",
                              recipient_name="R", recipient_phone="7", quantity=2,
                              status=Parcel.Status.REGISTERED)
    p.reference = "A/0007/10/2026"
    html = doc_render.build_parcel_label(p, tpl, agent="NUM", width_mm=58, height_mm=40)
    assert "58mm 40mm" in html                      # taille configurée
    assert "Journey" in html and p.reference in html
    assert "<svg" in html                           # code-barres présent
    # Étiquette × quantité : 3 pièces -> 3 étiquettes.
    html3 = doc_render.build_parcel_label(p, tpl, agent="NUM", copies=3)
    assert html3.count("Journey") == 3
    assert "1/3" in html3 and "3/3" in html3


@pytest.mark.django_db
def test_print_falls_back_when_no_mapping(monkeypatch):
    """Sans mappage/agent, print_or_fallback renvoie le HTML (repli navigateur)."""
    from apps.voyages_config import printing
    from apps.voyages_consignment.models import Parcel
    from apps.voyages_config.models import Town, ServicePoint, ConsignmentNature, ConsignmentType
    company, admin = _company()
    town = Town.objects.create(company=company, name="D")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="B")
    nat = ConsignmentNature.objects.create(company=company, code="S", name="S")
    ct = ConsignmentType.objects.create(company=company, code="C", label="T", nature=nat)
    p = Parcel.objects.create(company=company, origin_point=a, destination_point=b,
                              consignment_type=ct, sender_name="E", sender_phone="6",
                              recipient_name="R", recipient_phone="7", quantity=1,
                              status=Parcel.Status.REGISTERED)
    res = printing.print_or_fallback(company, "recu_colis", str(p.id))
    assert res["printed"] is False and res["html"] and "Client Signature" in res["html"]


@pytest.mark.django_db
def test_print_sends_to_helper_when_mapped(monkeypatch):
    """Avec un mappage + agent, print_or_fallback envoie à l'imprimante (printed=True)."""
    from apps.voyages_config import printing
    from apps.voyages_consignment.models import Parcel
    from apps.voyages_config.models import (Town, ServicePoint, ConsignmentNature,
                                            ConsignmentType, PrinterConfig)
    company, admin = _company()
    town = Town.objects.create(company=company, name="D")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="B")
    nat = ConsignmentNature.objects.create(company=company, code="S", name="S")
    ct = ConsignmentType.objects.create(company=company, code="C", label="T", nature=nat)
    p = Parcel.objects.create(company=company, origin_point=a, destination_point=b,
                              consignment_type=ct, sender_name="E", sender_phone="6",
                              recipient_name="R", recipient_phone="7", quantity=1,
                              status=Parcel.Status.REGISTERED)
    PrinterConfig.objects.create(company=company, doc_code="recu_colis", printer_name="XP-80")
    monkeypatch.setattr(printing, "helper_url", lambda: "http://host.docker.internal:9113")
    monkeypatch.setattr(printing, "_html_to_pdf", lambda html: b"%PDF-1.4 fake")
    sent = {}
    def _fake_send(printer, pdf, timeout=20):
        sent["printer"] = printer; sent["pdf"] = pdf; return True
    monkeypatch.setattr(printing, "send_to_helper", _fake_send)
    res = printing.print_or_fallback(company, "recu_colis", str(p.id))
    assert res["printed"] is True and sent["printer"] == "XP-80"


@pytest.mark.django_db
def test_document_formats_api_get_and_put():
    from rest_framework.test import APIClient
    company, admin = _company()
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.get("/api/v1/voyages/config/document-formats/")
    assert r.status_code == 200, r.content
    items = r.json().get("data", r.json())
    codes = {it["code"] for it in items}
    assert "etiquette_colis" in codes and "bordereau_voyages" in codes
    # Modifier une taille.
    r = c.put("/api/v1/voyages/config/document-formats/",
              [{"code": "etiquette_colis", "width_mm": 58, "height_mm": 40}], format="json")
    assert r.status_code == 200, r.content
    got = {it["code"]: it for it in (r.json().get("data", r.json()))}
    assert got["etiquette_colis"]["width_mm"] == 58.0 and got["etiquette_colis"]["height_mm"] == 40.0

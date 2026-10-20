"""Impression côté serveur via l'agent d'impression Windows (host.docker.internal).

L'instance locale (Docker Linux) rend le PDF puis le POST à l'agent Windows co-localisé,
qui imprime en silence sur l'imprimante mappée. Si aucun agent / aucun mappage, on renvoie
le HTML pour repli sur la boîte d'impression du navigateur.
"""
import base64
import logging

from django.conf import settings

logger = logging.getLogger(__name__)


def helper_url():
    return (getattr(settings, "PRINT_HELPER_URL", "") or "").rstrip("/")


def helper_printers(timeout=4):
    """Liste des imprimantes Windows vues par l'agent (pour l'écran de mappage)."""
    url = helper_url()
    if not url:
        return []
    try:
        import requests
        r = requests.get(f"{url}/printers", timeout=timeout)
        r.raise_for_status()
        data = r.json()
        return data.get("printers", data) if isinstance(data, dict) else data
    except Exception:
        logger.warning("Agent d'impression /printers injoignable (%s)", url)
        return []


def send_to_helper(printer_name, pdf_bytes, timeout=20):
    url = helper_url()
    if not url or not printer_name:
        return False
    try:
        import requests
        r = requests.post(f"{url}/print", timeout=timeout, json={
            "printer": printer_name,
            "pdf_base64": base64.b64encode(pdf_bytes).decode("ascii"),
        })
        r.raise_for_status()
        return True
    except Exception:
        logger.warning("Agent d'impression /print a échoué (imprimante=%s)", printer_name)
        return False


def mapped_printer(company, doc_code):
    from apps.voyages_config.models import PrinterConfig
    pc = PrinterConfig.objects.filter(company=company, doc_code=doc_code).first()
    return (pc.printer_name or "") if pc else ""


def _html_to_pdf(html):
    from weasyprint import HTML
    return HTML(string=html).write_pdf()


def _agent_name(request):
    u = getattr(request, "user", None)
    return (getattr(u, "get_full_name", lambda: "")() or getattr(u, "username", "")) if u else ""


def build_doc_html(company, doc_code, obj_id, request=None):
    """Construit le HTML d'un document imprimable (colis/bagage). None si introuvable."""
    from apps.voyages_config import ticket_render
    from apps.voyages_consignment import doc_render
    from apps.voyages_config.doc_format import resolve_doc_format
    tpl = ticket_render.get_or_create_template(company)
    logo_url = ticket_render._abs(request, tpl.logo) if request else ""
    agent = _agent_name(request)

    if doc_code in ("recu_colis", "etiquette_colis"):
        from apps.voyages_consignment.models import Parcel
        p = (Parcel.objects.filter(company=company, id=obj_id, is_deleted=False)
             .select_related("origin_point", "destination_point").first())
        if not p:
            return None
        w, h = resolve_doc_format(company, doc_code)
        if doc_code == "recu_colis":
            return doc_render.build_parcel_receipt(p, tpl, agent=agent, logo_url=logo_url,
                                                   width_mm=w, height_mm=h)
        return doc_render.build_parcel_label(p, tpl, agent=agent, logo_url=logo_url, width_mm=w, height_mm=h,
                                             copies=p.quantity or 1)

    if doc_code in ("ticket_bagage", "etiquette_bagage"):
        from apps.voyages_consignment.models import Baggage
        b = (Baggage.objects.filter(company=company, id=obj_id, is_deleted=False)
             .select_related("trip", "trip__route", "trip__destination", "trip__vehicle",
                             "ticket", "ticket__passenger").first())
        if not b:
            return None
        w, h = resolve_doc_format(company, doc_code)
        if doc_code == "ticket_bagage":
            return doc_render.build_baggage_ticket(b, tpl, agent=agent, logo_url=logo_url,
                                                   width_mm=w, height_mm=h)
        return doc_render.build_baggage_label(b, tpl, agent=agent, width_mm=w, height_mm=h,
                                              copies=b.quantity or 1)

    if doc_code == "bordereau_colis":
        # Bordereau colis d'un voyage, en HTML (impression navigateur) — évite la
        # dépendance WeasyPrint côté serveur (#2 : le PDF échouait sans WeasyPrint).
        from apps.voyages_trips.models import Trip
        from apps.voyages_booking.config_api.views import build_roadmap_data
        from apps.voyages_booking.roadmap_pdf import render_roadmap_html
        trip = Trip.objects.filter(company=company, id=obj_id, is_deleted=False).first()
        if not trip:
            return None
        return render_roadmap_html(build_roadmap_data(trip, request), "colis")
    return None


def print_or_fallback(company, doc_code, obj_id, request=None):
    """Essaie l'agent d'impression ; renvoie {printed, html}.

    printed=True  → envoyé à l'imprimante mappée (rien à faire côté client).
    printed=False → html fourni pour repli navigateur (ou None si document introuvable).
    """
    html = build_doc_html(company, doc_code, obj_id, request)
    if html is None:
        return {"printed": False, "html": None, "error": "not_found"}
    printer = mapped_printer(company, doc_code)
    if printer and helper_url():
        try:
            if send_to_helper(printer, _html_to_pdf(html)):
                return {"printed": True, "html": None}
        except Exception:
            logger.warning("Rendu/impression serveur impossible, repli navigateur.", exc_info=True)
    return {"printed": False, "html": html}

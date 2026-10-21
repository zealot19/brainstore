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


def send_to_helper(printer_name, html, timeout=40):
    """Envoie le HTML du document à l'agent d'impression local qui le rend en PDF
    (Edge/Chrome sans tête) puis l'imprime en silence sur `printer_name`.
    On n'envoie plus un PDF rendu côté serveur -> plus aucune dépendance WeasyPrint."""
    url = helper_url()
    if not url or not printer_name:
        return False
    try:
        import requests
        r = requests.post(f"{url}/print", timeout=timeout, json={
            "printer": printer_name,
            "html": html,
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
        # Bordereau / Manifeste colis d'un voyage, en HTML (impression navigateur) —
        # évite la dépendance WeasyPrint côté serveur. Les infos société (en-tête /
        # pied) viennent de la CONFIG BILLET (TicketTemplate) : logo, nom, slogan,
        # NIU, RCCM, téléphone, adresse, agences.
        from apps.voyages_trips.models import Trip
        from apps.voyages_booking.config_api.views import build_roadmap_data
        from apps.voyages_booking.parcel_manifest import render_parcel_manifest_html
        trip = Trip.objects.filter(company=company, id=obj_id, is_deleted=False).first()
        if not trip:
            return None
        return render_parcel_manifest_html(
            build_roadmap_data(trip, request), _manifest_header_from_ticket(company))
    return None


def _manifest_header_from_ticket(company):
    """Dict d'en-tête du manifeste colis construit à partir de la config BILLET
    (TicketTemplate), à la demande : nom/slogan/logo + siège (adresse+NIU+RCCM) +
    téléphones + agences + pied légal (Contribuable / Registre de Commerce)."""
    from apps.voyages_config import ticket_render
    from apps.core.media_uri import file_to_data_uri
    from django.utils import timezone
    t = ticket_render.get_or_create_template(company)
    logo = ""
    if getattr(t, "logo", None):
        logo = file_to_data_uri(t.logo)
    if not logo and getattr(company, "logo", None):
        logo = file_to_data_uri(company.logo)
    head = [p for p in [t.address, (f"NIU: {t.niu}" if t.niu else ""),
                        (f"RCCM: {t.rccm}" if t.rccm else "")] if p]
    agencies = " / ".join(a.get("name", "") for a in (t.agencies_list or []) if a.get("name"))
    foot = [p for p in [(f"N° de Contribuable : {t.niu}" if t.niu else ""),
                        (f"N° Registre de Commerce : {t.rccm}" if t.rccm else "")] if p]
    return {
        "logo_url":      logo,
        "brand_name":    t.brand_name or company.name,
        "slogan":        t.slogan or (company.slogan or ""),
        "head_office":   "   ".join(head),
        "phones":        t.phone or "",
        "agencies_line": agencies,
        "footer_text":   "   ".join(foot),
        "printed_at":    timezone.localtime(timezone.now()).strftime("%d/%m/%Y %H:%M"),
    }


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
            if send_to_helper(printer, html):
                return {"printed": True, "html": None}
        except Exception:
            logger.warning("Impression via l'agent impossible, repli navigateur.", exc_info=True)
    return {"printed": False, "html": html}

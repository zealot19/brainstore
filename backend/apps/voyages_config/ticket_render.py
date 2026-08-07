"""Rendu du modele de billet : substitution des placeholders {{ token }}."""
import re
from apps.voyages_config.models import TicketTemplate

_TOKEN_RE = re.compile(r"{{\s*([a-zA-Z0-9_]+)\s*}}")

# Tokens documentes (affiches dans l'ecran Config billets)
TOKENS = [
    "company_name", "company_slogan", "company_logo_url", "company_phone",
    "company_email", "company_address", "company_niu", "company_rccm",
    "ticket_number", "booking_reference", "passenger_name", "seat",
    "departure", "destination", "travel_date", "travel_time", "travel_class",
    "trip_type", "trip_number", "vehicle", "agent", "ticket_price",
    "registered_date", "printed_date", "expiration_date",
]


def render(template_html, tokens):
    """Remplace chaque {{ token }} par sa valeur ; les tokens inconnus -> ''."""
    def repl(m):
        return str(tokens.get(m.group(1), ""))
    return _TOKEN_RE.sub(repl, template_html or "")


def get_or_create_template(company):
    tpl, _ = TicketTemplate.objects.get_or_create(company=company)
    return tpl


def company_tokens(company, request=None):
    logo = ""
    if getattr(company, "logo", None):
        try:
            logo = request.build_absolute_uri(company.logo.url) if request else company.logo.url
        except Exception:
            logo = ""
    address = str(company.address) if getattr(company, "address_id", None) else ""
    return {
        "company_name": company.name or "",
        "company_slogan": company.slogan or "",
        "company_logo_url": logo,
        "company_phone": company.phone or "",
        "company_email": company.email or "",
        "company_address": address,
        "company_niu": getattr(company, "tax_id", "") or "",
        "company_rccm": getattr(company, "rccm", "") or "",
    }


def sample_tokens(company=None, request=None):
    """Donnees d'exemple pour l'apercu."""
    base = company_tokens(company, request) if company else {
        "company_name": "Voyageur Express SA", "company_slogan": "Nous partons ensemble, nous arrivons ensemble",
        "company_logo_url": "", "company_phone": "699 00 00 00", "company_email": "contact@ve.cm",
        "company_address": "Yaounde", "company_niu": "M0426...", "company_rccm": "CM-NSS...",
    }
    base.update({
        "ticket_number": "BTA27641/26", "booking_reference": "BOOK/2026/00042",
        "passenger_name": "KAMDEM THEODORE", "seat": "B2",
        "departure": "YAOUNDE", "destination": "BANGANTE", "travel_date": "07/10/2026",
        "travel_time": "23H30", "travel_class": "BUSINESS CLASS", "trip_type": "Aller",
        "trip_number": "VOY/2026/00018", "vehicle": "LT-045-AB", "agent": "NUM",
        "ticket_price": "10 000 XAF", "registered_date": "07/10/2026", "printed_date": "07/10/2026",
        "expiration_date": "14/10/2026",
    })
    return base


def render_document(inner_html_list):
    """Enveloppe une liste de blocs HTML (billets) dans un document imprimable."""
    body = "".join(f'<div class="tk-page">{h}</div>' for h in inner_html_list)
    return (
        '<!DOCTYPE html><html><head><meta charset="utf-8">'
        '<title>Billets</title>'
        '<style>@page{size:A4 landscape;margin:8mm} '
        'body{margin:0;font-family:Arial,Helvetica,sans-serif} '
        '.tk-page{page-break-after:always}</style>'
        f'</head><body>{body}</body></html>'
    )

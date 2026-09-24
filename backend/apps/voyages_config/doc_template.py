"""Résolution de la configuration des documents (en-tête / pied).

Source unique de vérité : `ManifestTemplate` (une par société), avec repli sur les
champs de la société. Consommée par les bordereaux (voyages), les reçus/bons de
trésorerie et les rapports — pour un en-tête et un pied de page cohérents partout.
"""
from django.utils import timezone


def resolve_doc_template(company, request=None) -> dict:
    from apps.voyages_config.models import ManifestTemplate
    from apps.core.media_uri import file_to_data_uri

    tpl = ManifestTemplate.objects.filter(company=company).first()

    # Logo embarqué en data URI (le rendu serveur ne peut pas récupérer une URL média).
    logo_url = ""
    if tpl and tpl.logo:
        logo_url = file_to_data_uri(tpl.logo)
    if not logo_url and getattr(company, "logo", None):
        logo_url = file_to_data_uri(company.logo)

    user = getattr(request, "user", None) if request else None
    return {
        "brand_name": (tpl.brand_name if tpl and tpl.brand_name else company.name),
        "slogan": (tpl.slogan if tpl and tpl.slogan else (company.slogan or "")),
        "head_office": (tpl.head_office if tpl else "") or "",
        "phones": (tpl.phones if tpl and tpl.phones else (company.phone or "")) or "",
        "agencies_line": (tpl.agencies_line if tpl else "") or "",
        "logo_url": logo_url,
        # Pied de page configurable.
        "footer_text": (tpl.footer_text if tpl else "") or "",
        "footer_show_generated": (tpl.footer_show_generated if tpl else True),
        "footer_show_page_numbers": (tpl.footer_show_page_numbers if tpl else False),
        # Contexte d'impression (agence + horodatage + agent) — vide sans request.
        "printed_agency": (user.default_agency.name if user and getattr(user, "default_agency_id", None) else ""),
        "printed_by": ((user.get_full_name() or user.username) if user else ""),
        "printed_at": timezone.localtime(timezone.now()).strftime("%d/%m/%Y %H:%M"),
    }

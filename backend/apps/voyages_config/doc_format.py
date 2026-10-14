"""Formats (tailles) de documents réglables par institution.

DOC_DEFS = source de vérité des documents configurables + leur taille PAR DÉFAUT
(mm ; hauteur 0 = auto pour les rouleaux thermiques). resolve_doc_format() renvoie la
taille configurée pour l'institution, à défaut la valeur par défaut.
"""

# code -> (libellé, largeur_mm, hauteur_mm)  — 0 = hauteur auto (thermique)
DOC_DEFS = [
    ("bordereau_voyages", "Bordereau Voyages", 210.0, 297.0),   # A4 portrait
    ("bordereau_colis",   "Bordereau Colis",   210.0, 297.0),   # A4 portrait
    ("recu_recette",      "Reçu de recette",   210.0, 148.0),   # A5 paysage
    ("bon_depense",       "Bon de dépense",    210.0, 148.0),   # A5 paysage
    ("recu_colis",        "Reçu de colis",      80.0,   0.0),   # thermique 80 mm
    ("ticket_bagage",     "Ticket de bagage",   80.0,   0.0),
    ("etiquette_bagage",  "Étiquette de bagage", 80.0,  0.0),
    ("etiquette_colis",   "Étiquette de colis",  80.0,  0.0),
]

DEFAULT_FORMATS = {code: (w, h) for code, _label, w, h in DOC_DEFS}
DOC_LABELS = {code: label for code, label, _w, _h in DOC_DEFS}


def resolve_doc_format(company, code):
    """(width_mm, height_mm) pour ce document : valeur configurée sinon défaut."""
    from apps.voyages_config.models import DocumentFormat
    default = DEFAULT_FORMATS.get(code, (210.0, 297.0))
    if company is None:
        return default
    df = DocumentFormat.objects.filter(company=company, code=code).first()
    if not df:
        return default
    return (float(df.width_mm), float(df.height_mm))


def page_size_css(width_mm, height_mm):
    """Chaîne CSS @page `size`. Hauteur <= 0 -> `auto` (thermique continu)."""
    w = f"{width_mm:g}mm"
    return f"{w} auto" if (not height_mm or height_mm <= 0) else f"{w} {height_mm:g}mm"

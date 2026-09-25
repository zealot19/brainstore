import html as _h


def company_header_html(company) -> str:
    """En-tête minimal depuis la société seule (repli / rétro-compatibilité)."""
    e = _h.escape
    ids = []
    for label, val in [("RCCM", company.rccm), ("NIU", company.tax_id),
                       ("Capital", company.capital), ("Tel", company.phone)]:
        if val:
            ids.append(f"{label}: {e(str(val))}")
    logo = ""
    if getattr(company, "logo", None):
        try:
            logo = f'<img src="file://{company.logo.path}" style="height:60px">'
        except Exception:
            logo = ""
    return f"""
    <div class="head">
      <div>{logo}</div>
      <div class="co">
        <div class="co-name">{e(company.name)}</div>
        <div>{e(company.slogan or "")}</div>
        <div>{e(" · ".join(ids))}</div>
      </div>
    </div>"""


def doc_header_html(tpl: dict) -> str:
    """En-tête depuis la configuration des documents (dict résolu).

    `tpl` provient de `apps.voyages_config.doc_template.resolve_doc_template`."""
    e = _h.escape
    logo = f'<img src="{e(str(tpl.get("logo_url")))}" style="height:60px">' if tpl.get("logo_url") else ""
    ids = " · ".join(x for x in (tpl.get("head_office"), tpl.get("phones"), tpl.get("agencies_line")) if x)
    # Logo à gauche + cale équivalente à droite -> texte réellement centré, espacement égal.
    return f"""
    <div class="head">
      <div class="logo-wrap">{logo}</div>
      <div class="co">
        <div class="co-name">{e(tpl.get("brand_name") or "")}</div>
        <div>{e(tpl.get("slogan") or "")}</div>
        <div>{e(ids)}</div>
      </div>
      <div class="logo-wrap"></div>
    </div>"""


def footer_inner_html(tpl: dict, run: str | None = None) -> str:
    """Contenu du pied de page : texte libre + éventuelle ligne « Généré le … »."""
    e = _h.escape
    parts = []
    ft = (tpl or {}).get("footer_text")
    if ft:
        parts.append(e(str(ft)).replace("\n", "<br>"))
    if (tpl or {}).get("footer_show_generated") and run:
        parts.append(f"Généré le {e(run)}")
    return "<br>".join(parts)


def doc_inline_footer_html(tpl: dict, run: str | None = None) -> str:
    """Pied de page en ligne (documents une page : reçus, bons)."""
    inner = footer_inner_html(tpl, run)
    return f'<div class="foot">{inner}</div>' if inner else ""


def page_footer_bits(tpl: dict, run: str | None = None):
    """Pied de page répété au BAS de chaque page (rapports, bordereaux multi-pages).

    Renvoie (page_css, root_css, body_html) :
    - `page_css`  : boîtes de marge, à placer À L'INTÉRIEUR de la règle `@page {…}` ;
    - `root_css`  : la règle de l'élément running, à placer HORS de `@page` (sinon
      `position: running()` est ignoré et le pied retombe en haut du document) ;
    - `body_html` : le `<div>` running à placer dans <body>.
    Vides si aucun pied ni numéro de page."""
    inner = footer_inner_html(tpl, run)
    page_boxes, root_css, body_html = [], "", ""
    if inner:
        page_boxes.append("@bottom-center { content: element(pagefooter); }")
        root_css = "#pagefooter { position: running(pagefooter); font-size:8px; color:#777; text-align:center; }"
        body_html = f'<div id="pagefooter">{inner}</div>'
    if (tpl or {}).get("footer_show_page_numbers"):
        page_boxes.append('@bottom-right { content: "Page " counter(page) " / " counter(pages); '
                          'font-size:8px; color:#777; }')
    return "\n".join(page_boxes), root_css, body_html

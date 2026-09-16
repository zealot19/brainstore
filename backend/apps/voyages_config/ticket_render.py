"""Rendu du billet : gabarit genere depuis le formulaire (+ QR), ou HTML avance."""
import re
import html as _html
import segno
from apps.voyages_config.models import TicketTemplate

_TOKEN_RE = re.compile(r"{{\s*([a-zA-Z0-9_]+)\s*}}")

# Tokens dynamiques disponibles en mode HTML avance
TOKENS = [
    "company_name", "company_slogan", "company_logo_url", "company_phone",
    "company_email", "company_address", "company_niu", "company_rccm",
    "ticket_number", "booking_reference", "passenger_name", "seat",
    "departure", "destination", "travel_date", "travel_time", "travel_class",
    "trip_type", "trip_number", "vehicle", "agent", "ticket_price",
    "registered_date", "printed_date", "expiration_date", "qr_code",
]


def render(template_html, tokens):
    """Remplace chaque {{ token }} par sa valeur ; tokens inconnus -> ''."""
    def repl(m):
        return str(tokens.get(m.group(1), ""))
    return _TOKEN_RE.sub(repl, template_html or "")


def get_or_create_template(company):
    tpl, created = TicketTemplate.objects.get_or_create(company=company)
    if created:
        tpl.brand_name = company.name or ""
        tpl.slogan = company.slogan or ""
        tpl.niu = getattr(company, "tax_id", "") or ""
        tpl.rccm = getattr(company, "rccm", "") or ""
        tpl.phone = company.phone or ""
        tpl.email = company.email or ""
        tpl.address = str(company.address) if getattr(company, "address_id", None) else ""
        tpl.save()
    return tpl


def company_tokens(company, request=None):
    from apps.core.media_uri import file_to_data_uri
    logo = file_to_data_uri(company.logo) if getattr(company, "logo", None) else ""
    address = str(company.address) if getattr(company, "address_id", None) else ""
    return {
        "company_name": company.name or "", "company_slogan": company.slogan or "",
        "company_logo_url": logo, "company_phone": company.phone or "",
        "company_email": company.email or "", "company_address": address,
        "company_niu": getattr(company, "tax_id", "") or "", "company_rccm": getattr(company, "rccm", "") or "",
    }


def qr_svg(tokens):
    payload = (
        f"BILLET {tokens.get('ticket_number','')}\n"
        f"{tokens.get('passenger_name','')}\n"
        f"{tokens.get('departure','')} -> {tokens.get('destination','')}\n"
        f"{tokens.get('travel_date','')} {tokens.get('travel_time','')}\n"
        f"Siege {tokens.get('seat','')} | {tokens.get('travel_class','')} | {tokens.get('trip_type','')}\n"
        f"{tokens.get('ticket_price','')}\n"
        f"Ref {tokens.get('booking_reference','')}"
    )
    return segno.make(payload, error="m").svg_inline(scale=3, border=1, dark="#111")


def _abs(request, filefield):
    # Image embarquée en data URI : le rendu serveur ne peut pas récupérer une URL média.
    from apps.core.media_uri import file_to_data_uri
    return file_to_data_uri(filefield)


def build_recto(tpl, tokens, *, logo_url="", bg_url=""):
    """Gabarit fixe (facon BOARDING) genere depuis les champs du formulaire + tokens."""
    e = _html.escape
    band = (f'<div class="band"><span>BOARDING</span></div>' if tpl.show_stub or True else "")
    wm = (f'<div class="wm" style="background-image:url({bg_url})"></div>'
          if (tpl.show_watermark and bg_url) else "")
    logo_html = f'<img class="logo" src="{logo_url}" alt="">' if logo_url else ""
    qr = tokens.get("qr_code", "") if tpl.show_qr else ""
    stub = ""
    if tpl.show_stub:
        stub = f"""<div class="stub">
      <div class="qr">{qr}</div>
      <div class="num">{e(tokens.get('ticket_number',''))}</div>
      <div class="sf">{e(tokens.get('passenger_name',''))}</div>
      <div class="sf">{e(tokens.get('travel_date',''))} · {e(tokens.get('travel_time',''))}</div>
      <div class="sf">{e(tokens.get('departure',''))} -> {e(tokens.get('destination',''))}</div>
      <div class="sf">Bus {e(tokens.get('vehicle',''))} · Siege {e(tokens.get('seat',''))}</div>
      <div class="sf price">{e(tokens.get('ticket_price',''))}</div>
    </div>"""

    def f(label, val):
        return f'<div class="f"><small>{label}</small><b>{e(val)}</b></div>'

    grid = "".join([
        f("DEPART", tokens.get("departure", "")),
        f("DESTINATION", tokens.get("destination", "")),
        f("DATE VOYAGE", tokens.get("travel_date", "")),
        f("CLASSE", tokens.get("travel_class", "")),
        f("TYPE", tokens.get("trip_type", "")),
        f("AGENT", tokens.get("agent", "")),
        f("BUS", tokens.get("vehicle", "")),
        f("HEURE", tokens.get("travel_time", "")),
        f("PRIX", tokens.get("ticket_price", "")),
        f("ENREGISTRE LE", tokens.get("registered_date", "")),
        f("IMPRIME LE", tokens.get("printed_date", "")),
        f("EXPIRE LE", tokens.get("expiration_date", "")),
    ])
    w = tpl.ticket_width_mm or 203
    h = tpl.ticket_height_mm or 82.55
    return f"""<style>
  .tk{{--ink:{tpl.color_ink};--accent:{tpl.color_accent};--band:{tpl.color_band};--muted:#6b6b6b;
      position:relative;width:{w}mm;height:{h}mm;box-sizing:border-box;display:flex;
      border:1.5px solid var(--ink);font-family:Arial,Helvetica,sans-serif;color:var(--ink);overflow:hidden}}
  .tk .band{{width:14mm;background:var(--band);color:#fff;display:flex;align-items:center;justify-content:center}}
  .tk .band span{{writing-mode:vertical-rl;transform:rotate(180deg);font-weight:800;letter-spacing:4px;font-size:20pt}}
  .tk .body{{flex:1;padding:6mm;position:relative}}
  .tk .wm{{position:absolute;inset:0;background-repeat:no-repeat;background-position:center;background-size:60% auto;opacity:.08;pointer-events:none}}
  .tk .head{{display:flex;align-items:center;gap:8px;border-bottom:2px solid var(--accent);padding-bottom:4px}}
  .tk .head .logo{{height:14mm}}
  .tk .head .slogan{{flex:1;text-align:center;font-style:italic;font-weight:700;color:var(--accent);font-size:11pt}}
  .tk .head .ids{{font-size:6.5pt;color:var(--muted);text-align:right;line-height:1.3}}
  .tk .pax{{margin:5px 0 8px;font-size:20pt;font-weight:800;position:relative}}
  .tk .pax small{{display:block;font-size:7pt;font-weight:600;color:var(--muted);letter-spacing:1px}}
  .tk .grid{{display:grid;grid-template-columns:repeat(3,1fr);gap:6px 10px;position:relative}}
  .tk .f small{{display:block;font-size:6.5pt;color:var(--muted);font-weight:700}}
  .tk .f b{{font-size:11pt}}
  .tk .note{{margin-top:8px;border-top:1px solid #ddd;padding-top:4px;font-size:7pt;color:var(--muted)}}
  .tk .stub{{width:52mm;border-left:2px dashed var(--ink);padding:5mm 4mm;text-align:center;font-weight:700}}
  .tk .stub .qr svg{{width:18mm;height:18mm}}
  .tk .stub .num{{font-weight:800;font-size:9.5pt;margin:4px 0 5px}}
  .tk .stub .sf{{text-align:left;font-size:8pt;line-height:1.25;margin-bottom:3px;font-weight:700}}
  .tk .stub .price{{font-size:12pt;font-weight:800;margin-top:3px}}
</style>
<div class="tk">
  {band}
  <div class="body">
    {wm}
    <div class="head">{logo_html}<div class="slogan">{e(tpl.slogan)}</div>
      <div class="ids">NIU: {e(tpl.niu)}<br>R.C.C.M: {e(tpl.rccm)}</div></div>
    <div class="pax"><small>NOM PASSAGER</small>{e(tokens.get('passenger_name',''))} <span style="font-size:11pt">[{e(tokens.get('seat',''))}]</span></div>
    <div class="grid">{grid}</div>
    <div class="note">{e(tpl.recto_notice)}</div>
  </div>
  {stub}
</div>"""


def build_verso(tpl):
    e = _html.escape
    conds = "".join(f"<p>{e(l.strip())}</p>" for l in (tpl.verso_conditions or "").splitlines() if l.strip())

    # Agences (liste structuree) : nom en gros, quartier, telephone -> en colonnes
    cards = []
    for a in (tpl.agencies_list or []):
        if not isinstance(a, dict):
            continue
        name = (a.get("name") or "").strip()
        loc = (a.get("location") or "").strip()
        phone = (a.get("phone") or "").strip()
        if not (name or loc or phone):
            continue
        cards.append(
            f"<div class='ag'><div class='ag-name'>{e(name)}</div>"
            f"<div class='ag-loc'>{e(loc)}</div><div class='ag-tel'>{e(phone)}</div></div>")
    ags = "".join(cards) or f"<div class='ag'><div class='ag-loc'>{e(tpl.address)}</div></div>"
    w = tpl.ticket_width_mm or 203
    h = tpl.ticket_height_mm or 82.55
    return f"""<style>
  .tkv{{display:flex;width:{w}mm;height:{h}mm;box-sizing:border-box;
       font-family:Arial,Helvetica,sans-serif;color:{tpl.color_ink};font-size:7pt;line-height:1.3}}
  .tkv .cut{{width:52mm;flex:none;border-right:1px dashed #999}}
  .tkv .content{{flex:1;padding:4mm;display:flex;flex-direction:column;overflow:hidden}}
  .tkv h3{{color:{tpl.color_accent};text-align:center;font-style:italic;font-weight:800;margin:0 0 3px;font-size:9pt}}
  .tkv .cond{{flex:1}}
  .tkv .cond p{{margin:2px 0}}
  .tkv .agencies{{margin-top:2mm;border-top:2px solid {tpl.color_accent};padding-top:2mm}}
  .tkv .agencies h4{{color:{tpl.color_accent};text-align:center;margin:0 0 3px;font-size:9pt;font-style:italic;font-weight:800}}
  .tkv .agencies .row{{display:flex;justify-content:space-around;gap:4mm;text-align:center}}
  .tkv .agencies .ag{{flex:1}}
  .tkv .agencies .ag-name{{font-weight:800;font-size:10pt;letter-spacing:1px}}
  .tkv .agencies .ag-loc{{color:#555}}
  .tkv .agencies .ag-tel{{font-weight:700}}
</style>
<div class="tkv">
  <div class="cut"></div>
  <div class="content">
    <h3>&laquo; {e(tpl.slogan)} &raquo;</h3>
    <div class="cond">{conds}</div>
    <div class="agencies"><h4>Nos Agences</h4><div class="row">{ags}</div></div>
  </div>
</div>"""


def build_ticket_pages(tpl, tokens, *, request=None):
    """Renvoie la liste des faces HTML pour un billet (gabarit ou HTML avance)."""
    if tpl.custom_html:
        pages = [render(tpl.html_recto, tokens)]
        if (tpl.html_verso or "").strip():
            pages.append(render(tpl.html_verso, tokens))
        return pages
    if tpl.show_qr:
        tokens = dict(tokens, qr_code=qr_svg(tokens))
    logo_url = _abs(request, tpl.logo)
    bg_url = _abs(request, tpl.background_logo)
    pages = [build_recto(tpl, tokens, logo_url=logo_url, bg_url=bg_url)]
    if tpl.show_verso:
        pages.append(build_verso(tpl))
    return pages


def sample_tokens():
    return {
        "ticket_number": "BTA27641/26", "booking_reference": "BOOK/2026/00042",
        "passenger_name": "KAMDEM THEODORE", "seat": "B2",
        "departure": "YAOUNDE", "destination": "BANGANTE", "travel_date": "07/10/2026",
        "travel_time": "23H30", "travel_class": "BUSINESS CLASS", "trip_type": "Aller",
        "trip_number": "VOY/2026/00018", "vehicle": "LT-045-AB", "agent": "NUM",
        "ticket_price": "10 000 XAF", "registered_date": "07/10/2026", "printed_date": "07/10/2026",
        "expiration_date": "14/10/2026",
    }


def render_document(inner_html_list, *, tpl=None, duplicata=False):
    w = (tpl.ticket_width_mm if tpl else None) or 203
    h = (tpl.ticket_height_mm if tpl else None) or 82.55
    wm = '<div class="dup-wm">DUPLICATA</div>' if duplicata else ''
    body = "".join(f'<div class="tk-page">{wm}{h_}</div>' for h_ in inner_html_list)
    dup_css = (
        '.tk-page{position:relative}'
        '.dup-wm{position:absolute;top:50%;left:50%;'
        'transform:translate(-50%,-50%) rotate(-28deg);font-size:46px;font-weight:bold;'
        'color:rgba(200,0,0,.22);letter-spacing:6px;pointer-events:none;z-index:99}'
    ) if duplicata else ''
    return (
        '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Billets</title>'
        f'<style>@page{{size:{w}mm {h}mm landscape;margin:0}}'
        'body{margin:0;font-family:Arial,Helvetica,sans-serif}'
        '.tk-page{page-break-after:always}'
        f'{dup_css}</style>'
        f'</head><body>{body}</body></html>'
    )

"""Rendu HTML des documents colis/bagages (thermique 80 mm)."""
import html as _html
from django.utils import timezone


def _money(v):
    try:
        return f"{float(v or 0):,.0f}".replace(",", " ")
    except (TypeError, ValueError):
        return "0"


def _dt(v=None):
    v = v or timezone.now()
    try:
        return timezone.localtime(v).strftime("%d/%m/%Y %H:%M")
    except (ValueError, TypeError):
        return v.strftime("%d/%m/%Y %H:%M")


def _safe(obj, path, default=""):
    """Accès défensif 'a.b.c' sans requête DB pour les relations non chargées."""
    cur = obj
    for part in path.split("."):
        cur = getattr(cur, part, None)
        if cur is None:
            return default
    return cur


def company_header(tpl, *, logo_url="", agency_line=""):
    e = _html.escape
    logo = f'<img src="{logo_url}" alt="" style="height:12mm">' if logo_url else ""
    ids = []
    if tpl.rccm:
        ids.append(f"RCCM: {e(tpl.rccm)}")
    if tpl.niu:
        ids.append(f"NIU: {e(tpl.niu)}")
    if tpl.phone:
        ids.append(f"Tel: {e(tpl.phone)}")
    ag = f'<div class="agency">{e(agency_line)}</div>' if agency_line else ""
    return (f'<div class="hdr">{logo}<div class="co"><b>{e(tpl.brand_name)}</b>'
            f'<div class="ids">{"<br>".join(ids)}</div>{ag}</div></div>')


def _trajet(baggage):
    route = _safe(baggage, "trip.route", None)
    code = getattr(route, "code", "") if route else ""
    dest = _safe(baggage, "trip.destination.name", "")
    return _html.escape(code or ""), _html.escape(dest or "")


def _style_80(width_mm=80.0, height_mm=0.0):
    from apps.voyages_config.doc_format import page_size_css
    inner_w = max(20.0, float(width_mm) - 6.0)   # largeur utile = format − marges 3 mm
    return f"""<style>
  @page{{size:{page_size_css(width_mm, height_mm)};margin:3mm}}
  *{{box-sizing:border-box}}
  body{{margin:0;font-family:Arial,Helvetica,sans-serif;color:#111;font-size:9pt;width:{inner_w:g}mm}}
  .doc{{width:{inner_w:g}mm}}
  .hdr{{display:flex;gap:2mm;align-items:center;text-align:center;flex-direction:column;margin-bottom:2mm}}
  .hdr .co b{{font-size:11pt}}
  .hdr .ids{{font-size:7pt;line-height:1.2}}
  .hdr .agency{{font-weight:700;margin-top:1mm}}
  h2{{text-align:center;font-size:10pt;margin:2mm 0;border-top:1px solid #111;border-bottom:1px solid #111;padding:1mm 0}}
  .box{{border:1px solid #111;padding:1.5mm;margin-bottom:1.5mm}}
  .box b{{font-weight:700}}
  .terms{{font-size:8pt;margin:1.5mm 0}}
  .sign{{display:flex;justify-content:space-between;border:1px solid #111;padding:1mm;font-weight:700;font-size:8pt}}
  .sign div{{width:48%;min-height:12mm}}
  .foot{{font-size:7pt;font-style:italic;margin-top:1mm}}
  .cutline{{border-top:1px dashed #111;margin:3mm 0;text-align:center;font-size:7pt;color:#777}}
  /* Reçu colis */
  .rhead{{display:flex;gap:2mm;align-items:center;border-bottom:1px solid #111;padding-bottom:1.5mm;margin-bottom:1.5mm}}
  .rhead .rlogo img{{max-height:16mm;max-width:34mm;object-fit:contain}}
  .rhead .rco{{flex:1;text-align:left}}
  .rhead .rname{{font-weight:800;font-size:11pt;line-height:1.1}}
  .rhead .rslo{{font-style:italic;font-size:8pt;color:#333}}
  .rhead .rids{{font-size:7.5pt;line-height:1.3}}
  .rf{{display:flex;justify-content:space-between;gap:3mm;font-size:8.5pt;padding:0.4mm 0;border-bottom:1px dotted #ccc}}
  .rf span{{color:#444}}
  .rf b{{text-align:right}}
  .rby{{font-size:8pt;font-style:italic;margin:1.5mm 0}}
  .rnote{{font-size:7.5pt;margin:1.5mm 0;border-top:1px solid #111;padding-top:1mm}}
  .rnote div{{margin:0.4mm 0}}
  /* Étiquette colis */
  .lbl{{text-align:center}}
  .lbl-logo{{margin-bottom:1.5mm}}
  .lbl-logo img{{max-height:14mm;max-width:40mm;object-fit:contain}}
  .lbl-ref{{font-weight:800;font-size:12pt;margin-bottom:1mm}}
  .lbl-f{{font-size:9pt;text-align:left;margin:0.5mm 0}}
  .lbl-bc{{margin-top:1.5mm}}
  .lbl-bc svg{{max-width:70mm;height:auto}}
</style>"""


def _barcode_svg(value):
    """Code-barres Code128 (SVG inline) de `value`. Chaîne vide si échec/valeur vide."""
    value = str(value or "").strip()
    if not value:
        return ""
    try:
        import re
        from io import BytesIO
        import barcode
        from barcode.writer import SVGWriter
        buf = BytesIO()
        barcode.get("code128", value, writer=SVGWriter()).write(
            buf, options={"module_width": 0.35, "module_height": 11.0,
                          "quiet_zone": 2.0, "write_text": False})
        svg = buf.getvalue().decode("utf-8")
        svg = re.sub(r"<\?xml[^>]*\?>", "", svg)
        svg = re.sub(r"<!DOCTYPE[^>]*>", "", svg)
        return svg.strip()
    except Exception:
        return ""


def render_80mm(inner_html_list, *, width_mm=80.0, height_mm=0.0):
    body = "".join(inner_html_list)
    return (f'<!DOCTYPE html><html><head><meta charset="utf-8">{_style_80(width_mm, height_mm)}'
            f'</head><body>{body}</body></html>')


def build_parcel_receipt(parcel, tpl, *, agent="", logo_url="", width_mm=80.0, height_mm=0.0):
    e = _html.escape
    dest = _safe(parcel, "destination_point.name", "")
    agency_obj = _safe(parcel, "origin_point.agency", None)
    agency_name = (getattr(agency_obj, "name", "") if agency_obj else "") or _safe(parcel, "origin_point.name", "")
    when = _dt(getattr(parcel, "created_at", None))
    logo = f'<img src="{logo_url}" alt="">' if logo_url else ""
    head = f"""<div class="rhead">
      <div class="rlogo">{logo}</div>
      <div class="rco">
        <div class="rname">{e(tpl.brand_name)}</div>
        <div class="rslo">{e(tpl.slogan)}</div>
        <div class="rids"><b>Head Office</b>: {e(tpl.address)}</div>
        <div class="rids">{e(agency_name)}</div>
      </div>
    </div>"""

    def rf(k, v):
        return f'<div class="rf"><span>{k}</span><b>{v}</b></div>'

    fields = "".join([
        rf("Sending Ticket N&deg;", e(parcel.reference)),
        rf("Sender Name", e(parcel.sender_name)),
        rf("Sender Number", e(parcel.sender_phone)),
        rf("Receiver Name", e(parcel.recipient_name)),
        rf("Receiver Number", e(parcel.recipient_phone)),
        rf("Destination", e(dest)),
        rf("Parcel Description", e(parcel.description) or "&mdash;"),
        rf("Value", f"{_money(parcel.declared_value)} frs"),
        rf("Qty", str(parcel.quantity)),
        rf("Content", e(parcel.content) or "&mdash;"),
        rf("Amount", f"{_money(parcel.amount_due)} frs"),
    ])
    note = (
        '<div class="rnote"><b>Note:</b>'
        '<div>- All parcels to be collected within 48hrs after delivery</div>'
        '<div>- Always declare the true content of your package before its registered</div>'
        '<div>- Compensation is 50%</div></div>'
    )
    inner = f"""<div class="doc">
      {head}
      {fields}
      <div class="rby">By: {e(agent)} &nbsp;&nbsp; on the {when}</div>
      {note}
      <div class="sign"><div>Client Signature</div><div>Agent Signature</div></div>
    </div>"""
    return render_80mm([inner], width_mm=width_mm, height_mm=height_mm)


def _baggage_copy(baggage, tpl, *, agent, logo_url):
    e = _html.escape
    trajet, dest = _trajet(baggage)
    bus = _safe(baggage, "trip.vehicle.license_plate", "")
    name = baggage.owner_name if getattr(baggage, "ticket_id", None) else baggage.sender_name
    hdr = company_header(tpl, logo_url=logo_url)
    return f"""<div class="doc">
      {hdr}
      <h2>Ticket de bagage N&deg; {e(baggage.tag_number)}</h2>
      <div class="box">
        <b>Passager</b>: {e(name or "")}<br>
        <b>Tel</b>: {e(baggage.sender_phone)} &nbsp; <b>N&deg; CNI</b>: {e(baggage.id_number)}<br>
        <b>Trajet</b>: {trajet} &nbsp; <b>Destination</b>: {dest}<br>
        <b>Bus</b>: {e(bus)} &nbsp; <b>Qte</b>: {baggage.quantity} &nbsp; <b>Montant</b>: {_money(baggage.amount_due)}<br>
        <b>Description</b>: {e(baggage.description)}
      </div>
      <div class="terms"><b>Note</b>: {e(tpl.baggage_ticket_note)}</div>
      <div class="foot">Imprime le : {_dt()} par {e(agent)}</div>
    </div>"""


def build_baggage_ticket(baggage, tpl, *, agent="", logo_url="", width_mm=80.0, height_mm=0.0):
    copy = _baggage_copy(baggage, tpl, agent=agent, logo_url=logo_url)
    cut = '<div class="cutline">- - - - - - decouper - - - - - -</div>'
    return render_80mm([copy, cut, copy], width_mm=width_mm, height_mm=height_mm)


def build_baggage_label(baggage, tpl, *, agent="", width_mm=80.0, height_mm=0.0, copies=1):
    e = _html.escape
    trajet, dest = _trajet(baggage)
    name = baggage.owner_name if getattr(baggage, "ticket_id", None) else baggage.sender_name
    payant = "PAYANT" if (baggage.amount_due or 0) > 0 else "GRATUIT"
    n = max(1, int(copies or 1))
    one = lambda i: f"""<div class="doc">
      <div class="hdr"><div class="co"><b>{e(tpl.brand_name)}</b>
        <div class="ids">Tel: {e(tpl.phone)}</div></div></div>
      <div class="box" style="text-align:center;font-size:10pt">
        <b>Ticket N&deg;</b>: {e(baggage.tag_number)} &nbsp; <b>({i}/{n})</b><br>
        <b>Nom</b>: {e(name or "")}<br>
        <b>Tel</b>: {e(baggage.sender_phone)} &nbsp; <b>CNI</b>: {e(baggage.id_number)}<br>
        <b>{payant}</b><br>
        <b>Trajet</b>: {trajet} &nbsp; <b>Destination</b>: {dest}
      </div>
      <div class="foot">Imprime le : {_dt()} par {e(agent)}</div>
    </div>"""
    cut = '<div class="cutline">- - - - - - decouper - - - - - -</div>'
    blocks = []
    for i in range(1, n + 1):
        blocks.append(one(i))
        if i < n:
            blocks.append(cut)
    return render_80mm(blocks, width_mm=width_mm, height_mm=height_mm)


def build_parcel_label(parcel, tpl, *, agent="", logo_url="", width_mm=80.0, height_mm=0.0, copies=1):
    """Étiquette(s) de colis (thermique) : logo centré, référence, exp./dest., trajet,
    code-barres. `copies` = nombre d'étiquettes (1 par pièce)."""
    e = _html.escape
    dest = _safe(parcel, "destination_point.name", "")
    origin = _safe(parcel, "origin_point.name", "")
    logo = f'<img src="{logo_url}" alt="">' if logo_url else f"<b>{e(tpl.brand_name)}</b>"
    barcode = _barcode_svg(parcel.reference)
    n = max(1, int(copies or 1))
    one = lambda i: f"""<div class="doc lbl">
      <div class="lbl-logo">{logo}</div>
      <div class="lbl-ref">{e(parcel.reference)}{'' if n == 1 else f' &middot; {i}/{n}'}</div>
      <div class="lbl-f"><b>Sender</b>: {e(parcel.sender_name)}</div>
      <div class="lbl-f"><b>Receiver</b>: {e(parcel.recipient_name)}</div>
      <div class="lbl-f"><b>Journey</b>: {e(origin)} &rarr; {e(dest)}</div>
      <div class="lbl-bc">{barcode}</div>
    </div>"""
    cut = '<div class="cutline">- - - - - - decouper - - - - - -</div>'
    blocks = []
    for i in range(1, n + 1):
        blocks.append(one(i))
        if i < n:
            blocks.append(cut)
    return render_80mm(blocks, width_mm=width_mm, height_mm=height_mm)

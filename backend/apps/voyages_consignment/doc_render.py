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
</style>"""


def render_80mm(inner_html_list, *, width_mm=80.0, height_mm=0.0):
    body = "".join(inner_html_list)
    return (f'<!DOCTYPE html><html><head><meta charset="utf-8">{_style_80(width_mm, height_mm)}'
            f'</head><body>{body}</body></html>')


def build_parcel_receipt(parcel, tpl, *, agent="", logo_url="", width_mm=80.0, height_mm=0.0):
    e = _html.escape
    agency = _safe(parcel, "origin_point.name", "")
    dest = _safe(parcel, "destination_point.name", "")
    hdr = company_header(tpl, logo_url=logo_url,
                         agency_line=(f"Agence de {agency}" if agency else ""))
    when = _dt(getattr(parcel, "created_at", None))
    inner = f"""<div class="doc">
      {hdr}
      <h2>Recu d'Expedition N&deg; {e(parcel.reference)}</h2>
      <div class="box"><b>Exp</b>: {e(parcel.sender_name)}<br><b>Tel</b>: {e(parcel.sender_phone)}</div>
      <div class="box"><b>Dest</b>: {e(parcel.recipient_name)}<br><b>Tel</b>: {e(parcel.recipient_phone)}</div>
      <div class="box">
        <b>Destination</b>: {e(dest)}<br>
        <b>Colis</b>: {e(parcel.description)}<br>
        <b>Valeur</b>: {_money(parcel.declared_value)} frs<br>
        <b>Qte</b>: {parcel.quantity} &nbsp; <b>Montant</b>: {_money(parcel.amount_due)} frs<br>
        <b>Par</b>: {e(agent)} <b>le</b>: {when}
      </div>
      <div class="terms">{e(tpl.parcel_receipt_terms)}</div>
      <div class="sign"><div>Signature Client</div><div>Signature de l'agent</div></div>
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


def build_baggage_label(baggage, tpl, *, agent="", width_mm=80.0, height_mm=0.0):
    e = _html.escape
    trajet, dest = _trajet(baggage)
    name = baggage.owner_name if getattr(baggage, "ticket_id", None) else baggage.sender_name
    payant = "PAYANT" if (baggage.amount_due or 0) > 0 else "GRATUIT"
    inner = f"""<div class="doc">
      <div class="hdr"><div class="co"><b>{e(tpl.brand_name)}</b>
        <div class="ids">Tel: {e(tpl.phone)}</div></div></div>
      <div class="box" style="text-align:center;font-size:10pt">
        <b>Ticket N&deg;</b>: {e(baggage.tag_number)}<br>
        <b>Nom</b>: {e(name or "")}<br>
        <b>Tel</b>: {e(baggage.sender_phone)} &nbsp; <b>CNI</b>: {e(baggage.id_number)}<br>
        <b>{payant}</b><br>
        <b>Trajet</b>: {trajet} &nbsp; <b>Destination</b>: {dest}
      </div>
      <div class="foot">Imprime le : {_dt()} par {e(agent)}</div>
    </div>"""
    return render_80mm([inner], width_mm=width_mm, height_mm=height_mm)


def build_parcel_label(parcel, tpl, *, agent="", width_mm=80.0, height_mm=0.0):
    """Étiquette de colis (thermique) : réf, expéditeur/destinataire, destination, qté."""
    e = _html.escape
    dest = _safe(parcel, "destination_point.name", "")
    origin = _safe(parcel, "origin_point.name", "")
    inner = f"""<div class="doc">
      <div class="hdr"><div class="co"><b>{e(tpl.brand_name)}</b>
        <div class="ids">Tel: {e(tpl.phone)}</div></div></div>
      <div class="box" style="text-align:center;font-size:10pt">
        <b>Colis N&deg;</b>: {e(parcel.reference)}<br>
        <b>Exp</b>: {e(parcel.sender_name)}<br>
        <b>Dest</b>: {e(parcel.recipient_name)} &nbsp; <b>Tel</b>: {e(parcel.recipient_phone)}<br>
        <b>Trajet</b>: {e(origin)} &rarr; {e(dest)}<br>
        <b>Qte</b>: {parcel.quantity}
      </div>
      <div class="foot">Imprime le : {_dt()} par {e(agent)}</div>
    </div>"""
    return render_80mm([inner], width_mm=width_mm, height_mm=height_mm)

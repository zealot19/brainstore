"""Rendu HTML du Bordereau / Manifeste colis.

Reprend la mise en page du modèle client : en-tête société (logo + nom + slogan +
siège/NUI/RCCM + agences), titre « PARCEL MANIFEST N° … », bloc info (Run Date,
Departure, Destination, Vehicle, Sending Date, Personnel), tableau groupé par point
de destination (S/N, Ticket N°, Parcel Description, Sender, Receiver, Type, Gone,
Signature) et pied de page légal.

Alimenté par `build_roadmap_data(trip)` (corps) + `resolve_doc_template(company)`
(en-tête / pied, configurables dans Configuration → Modèles de documents).
"""
import html as _h
from django.utils import timezone


def _e(v):
    return "" if v is None else _h.escape(str(v))


def _dt(v):
    return timezone.localtime(v).strftime("%d/%m/%Y %H:%M") if v else ""


def _groups(parcels):
    """Groupe les colis par point de destination en conservant l'ordre d'apparition."""
    order, buckets = [], {}
    for p in parcels:
        key = p.get("destination_point_name") or "—"
        if key not in buckets:
            buckets[key] = []
            order.append(key)
        buckets[key].append(p)
    return [(k, buckets[k]) for k in order]


def _parcel_rows(parcels):
    out = []
    for i, c in enumerate(parcels, 1):
        gone = f'{_e(c.get("sent", c["quantity"]))}/{_e(c["quantity"])}'
        out.append(
            "<tr>"
            f'<td class="c">{i}</td>'
            f'<td>{_e(c["reference"])}</td>'
            f'<td>{_e(c["description"]) or "—"}</td>'
            f'<td>{_e(c["sender_name"])}<br><small>{_e(c["sender_phone"])}</small></td>'
            f'<td>{_e(c["recipient_name"])}<br><small>{_e(c["recipient_phone"])}</small></td>'
            f'<td class="c">{_e(c.get("type_code")) or "—"}</td>'
            f'<td class="c">{gone}</td>'
            '<td class="sig"></td>'
            "</tr>")
    return "".join(out)


def render_parcel_manifest_html(data: dict, tpl: dict) -> str:
    t = data["trip"]
    parcels = data["parcels"]

    # ── En-tête société (logo à gauche, bloc centré ; cale droite = largeur logo) ──
    logo = f'<img src="{_e(tpl.get("logo_url"))}" class="logo">' if tpl.get("logo_url") else ""
    head_lines = []
    if tpl.get("head_office"):
        head_lines.append(f'<div class="co-line">{_e(tpl["head_office"])}</div>')
    if tpl.get("phones"):
        head_lines.append(f'<div class="co-line">Tel : {_e(tpl["phones"])}</div>')
    agencies = (f'<div class="co-ag"><b>Agencies</b>&nbsp;&nbsp;{_e(tpl["agencies_line"])}</div>'
                if tpl.get("agencies_line") else "")
    head = (
        '<div class="hdr">'
        f'<div class="hdr-side">{logo}</div>'
        '<div class="hdr-co">'
        f'<div class="co-name">{_e(tpl.get("brand_name"))}</div>'
        f'<div class="co-slogan">{_e(tpl.get("slogan"))}</div>'
        + "".join(head_lines) + agencies +
        '</div>'
        '<div class="hdr-side"></div>'
        '</div>'
    )

    # ── Titre + référence (N° de bordereau = numéro du voyage) ──
    ref = t.get("number") or ""
    title = f'<div class="title">PARCEL MANIFEST N&deg; <span class="num">{_e(ref)}</span></div>'

    # ── Bloc info ──
    personnel = " · ".join(
        (c["driver_name"] + (f' ({c["role_display"]})' if c.get("role_display") else ''))
        for c in t.get("crew", []) if c.get("driver_name"))
    meta = (
        '<div class="meta"><div class="meta-l">'
        f'<div><b>Run Date</b> : {_e(tpl.get("printed_at"))}</div>'
        f'<div><b>Departure</b> : {_e(t.get("origin_name"))}</div>'
        f'<div><b>Destination</b> : {_e(t.get("destination_name"))}</div>'
        f'<div><b>Vehicle</b> : {_e(t.get("vehicle_plate")) or "—"}</div>'
        f'<div><b>Sending Date</b> : {_dt(t.get("scheduled_departure"))}</div>'
        '</div>'
        f'<div class="meta-m"><b>Personnel</b> : {_e(personnel) or "—"}</div>'
        '</div>'
    )

    # ── Tableau groupé par destination ──
    thead = ('<thead><tr><th>S/N</th><th>Ticket N&deg;</th><th>Parcel Description</th>'
             '<th>Sender</th><th>Receiver</th><th>Type</th><th>Gone</th><th>Signature</th></tr></thead>')
    if parcels:
        blocks = []
        for dest, items in _groups(parcels):
            blocks.append(
                f'<tr class="grp"><td colspan="8">{_e(dest)} — {len(items)} Parcel(s)</td></tr>'
                + _parcel_rows(items))
        body_rows = "".join(blocks)
    else:
        body_rows = '<tr><td colspan="8" class="empty">Aucun colis chargé.</td></tr>'
    table = f'<table>{thead}<tbody>{body_rows}</tbody></table>'

    foot = f'<div class="foot">{_e(tpl.get("footer_text"))}</div>' if tpl.get("footer_text") else ""

    return f"""<html><head><meta charset="utf-8"><style>
      @page {{ size: A4 portrait; margin: 10mm; }}
      * {{ box-sizing: border-box; }}
      body {{ font-family: DejaVu Sans, Arial, sans-serif; font-size: 10px; color:#111; }}
      .hdr {{ display:flex; gap:10px; align-items:flex-start; }}
      .hdr-side {{ width:120px; }}
      .logo {{ max-height:66px; max-width:120px; object-fit:contain; }}
      .hdr-co {{ flex:1; text-align:center; }}
      .co-name {{ font-weight:bold; font-size:16px; letter-spacing:.3px; }}
      .co-slogan {{ font-size:11px; letter-spacing:1.5px; }}
      .co-line {{ font-size:9.5px; margin-top:1px; }}
      .co-ag {{ font-size:9px; margin-top:2px; }}
      hr.sep {{ border:0; border-top:2px solid #000; margin:5px 0; }}
      .title {{ font-weight:bold; font-size:17px; text-transform:uppercase; margin:2px 0; }}
      .title .num {{ background:#dfe9fb; padding:0 5px; }}
      .meta {{ display:flex; justify-content:space-between; gap:20px; margin:6px 0 8px; }}
      .meta-l div, .meta-m {{ line-height:1.55; }}
      table {{ width:100%; border-collapse:collapse; font-size:10px; }}
      th, td {{ border:1px solid #333; padding:3px 5px; vertical-align:top; font-size:10px; }}
      th {{ background:#eee; text-align:left; font-size:9.5px; }}
      tr.grp td {{ font-size:10px; }}
      td.c {{ text-align:center; }}
      td.sig {{ min-width:90px; }}
      tr.grp td {{ background:#f3f3f3; font-weight:bold; border-top:2px solid #000; }}
      td.empty {{ text-align:center; color:#777; }}
      small {{ color:#555; }}
      .foot {{ margin-top:10px; padding-top:5px; border-top:2px solid #000; font-size:9px; }}
    </style></head><body>
      {head}
      <hr class="sep">
      {title}
      <hr class="sep">
      {meta}
      {table}
      {foot}
    </body></html>"""

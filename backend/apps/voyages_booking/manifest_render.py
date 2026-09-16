"""Rendu des bordereaux (manifestes) — en-tête/pied configurables via ManifestTemplate.

Quatre documents (Tranche 1) : bordereau de route (passagers), comptabilisation,
transmission de colis, bordereau des bagages. Rendu HTML → PDF via WeasyPrint.
"""
import html as _h
from decimal import Decimal
from django.utils import timezone


def _e(v):
    return "" if v is None else _h.escape(str(v))


def _money(v):
    try:
        return f"{Decimal(str(v or 0)):,.0f}".replace(",", " ")
    except Exception:
        return _e(v)


def _rows(items, cells, ncols, empty):
    if not items:
        return f'<tr><td colspan="{ncols}" class="empty">{empty}</td></tr>'
    return "".join("<tr>" + "".join(f"<td>{c}</td>" for c in cells(it)) + "</tr>" for it in items)


def manifest_header_html(tpl: dict) -> str:
    logo = f'<img src="{_e(tpl.get("logo_url"))}" class="logo">' if tpl.get("logo_url") else ""
    lines = "".join(
        f'<div class="{cls}">{_e(tpl.get(key))}</div>'
        for key, cls in (("slogan", "co-slogan"), ("head_office", "co-ids"),
                         ("phones", "co-ids"), ("agencies_line", "co-ids"))
        if tpl.get(key))
    return (f'<div class="head"><div class="logo-wrap">{logo}</div>'
            f'<div class="co"><div class="co-name">{_e(tpl.get("brand_name"))}</div>{lines}</div></div>')


def _trip_line(t: dict) -> str:
    dep = timezone.localtime(t["scheduled_departure"]).strftime("%d/%m/%Y %H:%M") if t.get("scheduled_departure") else ""
    return (f'<div class="trip"><strong>{_e(t.get("number"))}</strong> — '
            f'{_e(t.get("origin_name"))} → {_e(t.get("destination_name"))} · {dep} · '
            f'Véhicule {_e(t.get("vehicle_plate")) or "—"}</div>')


def _printed_line(tpl: dict) -> str:
    """Ligne « Agence : … — Imprimé le … par … » (traçabilité de l'impression)."""
    ag = tpl.get("printed_agency")
    at = tpl.get("printed_at")
    by = tpl.get("printed_by")
    if not (ag or at):
        return ""
    parts = []
    if ag:
        parts.append(f'Agence : {_e(ag)}')
    if at:
        parts.append(f'Imprimé le {_e(at)}' + (f' par {_e(by)}' if by else ''))
    return f'<div class="printed">{" — ".join(parts)}</div>'


def manifest_footer_html(labels) -> str:
    labels = labels or []
    if not labels:
        return ""
    w = max(1, round(100 / len(labels)))
    cells = "".join(f'<td style="width:{w}%">{_e(lb)}</td>' for lb in labels)
    return f'<table class="sign"><tbody><tr>{cells}</tr><tr>{"".join("<td>&nbsp;</td>" for _ in labels)}</tr></tbody></table>'


def build_passenger_manifest(data: dict, tpl: dict) -> str:
    ps = data.get("passengers", [])
    body = (
        f'<h1>Bordereau de route</h1>{_trip_line(data["trip"])}'
        '<table><thead><tr><th>S/N</th><th>Nom du passager</th><th>Téléphone</th>'
        '<th>N° CNI</th><th>Destination</th><th>Siège</th><th>Bagages</th></tr></thead><tbody>'
        + _rows(list(enumerate(ps, 1)),
                lambda ip: [str(ip[0]), _e(ip[1].get("passenger_name")), _e(ip[1].get("phone")),
                            _e(ip[1].get("id_number")), _e(ip[1].get("destination_point_name")),
                            _e(ip[1].get("seat_number")), _e(ip[1].get("baggage_count") or 0)],
                7, "Aucun passager.")
        + '</tbody></table>'
    )
    return body + manifest_footer_html(tpl.get("sign_labels_voyage"))


def build_comptabilisation(data: dict, tpl: dict) -> str:
    acc = data.get("accounting", {})
    ps = acc.get("passengers", [])
    passenger_tbl = (
        f'<h1>Bordereau de comptabilisation</h1>{_trip_line(data["trip"])}'
        '<table><thead><tr><th>S/N</th><th>Nom du passager</th><th>Téléphone</th>'
        '<th>Destination</th><th>Montant</th><th>Agent</th></tr></thead><tbody>'
        + _rows(list(enumerate(ps, 1)),
                lambda ip: [str(ip[0]), _e(ip[1].get("name")), _e(ip[1].get("phone")),
                            _e(ip[1].get("destination")), _money(ip[1].get("amount")), _e(ip[1].get("agent"))],
                6, "Aucun passager.")
        + '</tbody></table>'
    )
    exp = acc.get("expenses", [])
    exp_head = "".join(f"<th>{_e(e['type_label'])}</th>" for e in exp) + "<th>Total</th>"
    exp_cells = "".join(f"<td>{_money(e['amount'])}</td>" for e in exp) + f"<td>{_money(acc.get('expenses_total'))}</td>"
    dep_tbl = (f'<h2>Détails des dépenses</h2><table><thead><tr>{exp_head or "<th>—</th>"}</tr></thead>'
               f'<tbody><tr>{exp_cells or "<td>0</td>"}</tr></tbody></table>')
    calc_tbl = ('<h2>Détails des calculs</h2><table><thead><tr><th>Recettes</th><th>Dépenses</th>'
                '<th>Net</th></tr></thead><tbody><tr>'
                f'<td>{_money(acc.get("recettes"))}</td><td>{_money(acc.get("expenses_total"))}</td>'
                f'<td>{_money(acc.get("net"))}</td></tr></tbody></table>')
    return passenger_tbl + dep_tbl + calc_tbl + manifest_footer_html(tpl.get("sign_labels_voyage"))


def build_colis_manifest(data: dict, tpl: dict) -> str:
    parcels = data.get("parcels", [])
    body = (
        f'<h1>Bordereau de transmission de colis</h1>{_trip_line(data["trip"])}'
        '<table><thead><tr><th>S/N</th><th>N° Reçu</th><th>Nature</th><th>Expéditeur</th>'
        '<th>Destinataire</th><th>Nbr</th><th>Décharge</th></tr></thead><tbody>'
        + _rows(list(enumerate(parcels, 1)),
                lambda ip: [str(ip[0]), _e(ip[1].get("reference")), _e(ip[1].get("description")),
                            f'{_e(ip[1].get("sender_name"))}<br><small>{_e(ip[1].get("sender_phone"))}</small>',
                            f'{_e(ip[1].get("recipient_name"))}<br><small>{_e(ip[1].get("recipient_phone"))}</small>',
                            _e(ip[1].get("quantity")), "&nbsp;"],
                7, "Aucun colis.")
        + '</tbody></table>'
    )
    return body + manifest_footer_html(tpl.get("sign_labels_colis"))


def build_baggage_manifest(data: dict, tpl: dict) -> str:
    bags = data.get("baggage", [])
    body = (
        f'<h1>Bordereau des bagages</h1>{_trip_line(data["trip"])}'
        '<table><thead><tr><th>S/N</th><th>N° Reçu</th><th>Nature</th><th>Nom du client</th>'
        '<th>Nbr de bagages</th></tr></thead><tbody>'
        + _rows(list(enumerate(bags, 1)),
                lambda ip: [str(ip[0]), _e(ip[1].get("tag_number")), _e(ip[1].get("description")),
                            _e(ip[1].get("owner_name") or ip[1].get("passenger_name")),
                            _e(ip[1].get("quantity") or 1)],
                5, "Aucun bagage.")
        + '</tbody></table>'
    )
    return body + manifest_footer_html(tpl.get("sign_labels_colis"))


_BUILDERS = {
    "voyages": build_passenger_manifest,
    "comptabilisation": build_comptabilisation,
    "colis": build_colis_manifest,
    "bagages": build_baggage_manifest,
}


def render_manifest_pdf(data: dict, doc: str, tpl: dict) -> bytes:
    from weasyprint import HTML
    builder = _BUILDERS.get(doc, build_passenger_manifest)
    body = manifest_header_html(tpl) + _printed_line(tpl) + builder(data, tpl)
    run = timezone.localtime(timezone.now()).strftime("%d/%m/%Y %H:%M")
    html = f"""<html><head><meta charset="utf-8"><style>
      @page {{ size: A4 portrait; margin: 12mm 10mm; }}
      body {{ font-family: DejaVu Sans, sans-serif; font-size: 10px; color:#111; }}
      .head {{ display:flex; gap:12px; border-bottom:2px solid #111; padding-bottom:6px; align-items:center; }}
      .logo {{ height:60px; width:auto; object-fit:contain; }}
      .co {{ text-align:center; flex:1; }}
      .co-name {{ font-weight:bold; font-size:15px; }}
      .co-slogan {{ font-style:italic; color:#555; font-size:9px; }}
      .co-ids {{ color:#333; font-size:9px; }}
      h1 {{ font-size:14px; margin:12px 0 2px; text-transform:uppercase; text-decoration:underline; }}
      h2 {{ font-size:11px; margin:12px 0 4px; }}
      .trip {{ margin-bottom:4px; font-size:9px; }}
      .printed {{ margin-bottom:8px; font-size:9px; color:#333; font-style:italic; }}
      table {{ width:100%; border-collapse:collapse; margin-bottom:6px; }}
      th, td {{ border:1px solid #999; padding:3px 5px; font-size:9px; }}
      th {{ background:#eee; text-align:left; }}
      td.empty {{ text-align:center; color:#777; }}
      table.sign {{ margin-top:24px; }}
      table.sign td {{ border:1px solid #ccc; text-align:center; height:40px; vertical-align:top; padding-top:4px; }}
      .foot {{ margin-top:10px; color:#777; font-size:8px; }}
    </style></head><body>
      {body}
      <div class="foot">Généré le {run}</div>
    </body></html>"""
    return HTML(string=html).write_pdf()

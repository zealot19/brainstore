"""Rendu PDF (WeasyPrint) de la feuille de route (bordereaux Voyages / Colis).

Réutilise l'en-tête société du module reporting pour une identité visuelle commune.
"""
import html as _h
from django.utils import timezone


def _e(v):
    return "" if v is None else _h.escape(str(v))


def _rows(items, cells, ncols, empty):
    if not items:
        return f'<tr><td colspan="{ncols}" class="empty">{empty}</td></tr>'
    return "".join("<tr>" + "".join(f"<td>{c}</td>" for c in cells(it)) + "</tr>" for it in items)


def _doc_header(data, title):
    co = company_header_html_from_dict(data["company"])
    t = data["trip"]
    dep = timezone.localtime(t["scheduled_departure"]).strftime("%d/%m/%Y %H:%M") if t["scheduled_departure"] else ""
    line = (f'<strong>{_e(t["number"])}</strong> — {_e(t["origin_name"])} → {_e(t["destination_name"])} '
            f'· {dep} · Véhicule {_e(t["vehicle_plate"]) or "—"}')
    return f'{co}<h1>{_h.escape(title)}</h1><div class="trip">{line}</div>'


def company_header_html_from_dict(company: dict) -> str:
    """En-tête à partir du dict `_company_header` (nom/slogan/logo_url/phone/address)."""
    logo = f'<img src="{_e(company.get("logo_url"))}" class="logo">' if company.get("logo_url") else ""
    ids = " · ".join(x for x in [company.get("phone"), company.get("address")] if x)
    return (f'<div class="head"><div>{logo}</div><div class="co">'
            f'<div class="co-name">{_e(company.get("name"))}</div>'
            f'<div class="co-slogan">{_e(company.get("slogan"))}</div>'
            f'<div class="co-ids">{_e(ids)}</div></div></div>')


def _voyages_body(data):
    p_tbl = (
        '<h2>Passagers (' + str(len(data["passengers"])) + ')</h2>'
        '<table><thead><tr><th>#</th><th>Billet</th><th>Passager</th><th>Siège</th>'
        '<th>Descente</th><th>Sens</th><th>Émargement</th></tr></thead><tbody>'
        + _rows(
            list(enumerate(data["passengers"], 1)),
            lambda ip: [str(ip[0]), _e(ip[1]["number"]), _e(ip[1]["passenger_name"]),
                        _e(ip[1]["seat_number"]), _e(ip[1]["destination_point_name"]),
                        _e(ip[1]["direction_display"]), ""],
            7, "Aucun passager.")
        + '</tbody></table>'
    )
    b_tbl = (
        '<h2>Bagages (' + str(len(data["baggage"])) + ')</h2>'
        '<table><thead><tr><th>Étiquette</th><th>Propriétaire</th><th>Description</th>'
        '<th>Poids</th><th>Nb</th></tr></thead><tbody>'
        + _rows(data["baggage"],
                lambda b: [_e(b["tag_number"]), _e(b["owner_name"]), _e(b["description"]) or "—",
                           _e(b["weight_kg"]) or "—", _e(b["quantity"])],
                5, "Aucun bagage.")
        + '</tbody></table>'
    )
    return _doc_header(data, "Bordereau Voyages") + p_tbl + b_tbl


def _colis_body(data):
    tbl = (
        '<h2>Colis (' + str(len(data["parcels"])) + ')</h2>'
        '<table><thead><tr><th>Référence</th><th>Expéditeur</th><th>Destinataire</th>'
        '<th>Description</th><th>Envoyé / Total</th></tr></thead><tbody>'
        + _rows(data["parcels"],
                lambda c: [_e(c["reference"]),
                           f'{_e(c["sender_name"])}<br><small>{_e(c["sender_phone"])}</small>',
                           f'{_e(c["recipient_name"])}<br><small>{_e(c["recipient_phone"])}</small>',
                           _e(c["description"]) or "—",
                           f'{_e(c.get("sent", c["quantity"]))} / {_e(c["quantity"])}'],
                5, "Aucun colis chargé.")
        + '</tbody></table>'
    )
    return _doc_header(data, "Bordereau Colis") + tbl


def render_roadmap_html(data: dict, doc: str) -> str:
    """Document HTML du bordereau (sert au PDF WeasyPrint ET à l'impression
    navigateur quand WeasyPrint n'est pas disponible côté serveur)."""
    body = _colis_body(data) if doc == "colis" else _voyages_body(data)
    run = timezone.localtime(timezone.now()).strftime("%d/%m/%Y %H:%M")
    return f"""<html><head><meta charset="utf-8"><style>
      @page {{ size: A4 landscape; margin: 12mm 10mm; }}
      body {{ font-family: DejaVu Sans, sans-serif; font-size: 10px; color:#111; }}
      .head {{ display:flex; gap:12px; border-bottom:1px solid #222; padding-bottom:6px; }}
      .logo {{ height:56px; width:auto; object-fit:contain; }}
      .co-name {{ font-weight:bold; font-size:14px; }}
      .co-slogan {{ font-style:italic; color:#555; font-size:9px; }}
      .co-ids {{ color:#555; font-size:9px; }}
      h1 {{ font-size:15px; margin:10px 0 2px; text-transform:uppercase; }}
      h2 {{ font-size:12px; margin:12px 0 4px; }}
      .trip {{ margin-bottom:8px; }}
      table {{ width:100%; border-collapse:collapse; }}
      th, td {{ border:1px solid #bbb; padding:3px 5px; }}
      th {{ background:#f0f0f0; text-align:left; }}
      td.empty {{ text-align:center; color:#777; }}
      .foot {{ margin-top:10px; color:#777; font-size:8px; }}
    </style></head><body>
      {body}
      <div class="foot">Généré le {run}</div>
    </body></html>"""


def render_roadmap_pdf(data: dict, doc: str) -> bytes:
    from weasyprint import HTML
    return HTML(string=render_roadmap_html(data, doc)).write_pdf()

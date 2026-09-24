"""Bon de dépense (PDF WeasyPrint) — commun aux dépenses générales et voyage."""
import html as _h
from django.utils import timezone
from apps.reporting.letterhead import doc_header_html, doc_inline_footer_html


def _e(v):
    return "" if v is None else _h.escape(str(v))


def _money(v):
    try:
        return f"{float(v):,.0f}".replace(",", " ")
    except (TypeError, ValueError):
        return _e(v)


def render_expense_voucher(*, company, ref, date, type_name, label, amount,
                           agency_name=None, caisse_label=None, status_label=None,
                           created_by=None, disbursed_by=None, kind_label="Dépense") -> bytes:
    from weasyprint import HTML
    from apps.voyages_config.doc_template import resolve_doc_template
    run = timezone.localtime(timezone.now()).strftime("%d/%m/%Y %H:%M")
    tpl = resolve_doc_template(company)
    rows = [
        ("Type", _e(type_name)),
        ("Libellé", _e(label)),
        ("Agence", _e(agency_name) or "—"),
        ("Caisse de décaissement", _e(caisse_label) or "—"),
        ("Date", _e(date)),
        ("Statut", _e(status_label)),
        ("Créé par", _e(created_by) or "—"),
        ("Décaissé par", _e(disbursed_by) or "—"),
    ]
    body = "".join(f'<tr><td class="k">{k}</td><td class="v">{v}</td></tr>' for k, v in rows)
    html = f"""<html><head><meta charset="utf-8"><style>
      @page {{ size: A5 landscape; margin: 12mm; }}
      body {{ font-family: DejaVu Sans, sans-serif; font-size: 11px; color:#111; }}
      .head {{ display:flex; gap:12px; border-bottom:2px solid #0068B8; padding-bottom:6px; }}
      .co-name {{ font-weight:bold; font-size:14px; }}
      h1 {{ font-size:16px; margin:12px 0 2px; text-transform:uppercase; color:#0068B8; }}
      .ref {{ color:#555; margin-bottom:10px; }}
      table.det {{ width:100%; border-collapse:collapse; }}
      table.det td {{ border:1px solid #ccc; padding:5px 8px; }}
      td.k {{ background:#f2f6fa; font-weight:bold; width:38%; }}
      .amount {{ margin-top:12px; font-size:15px; font-weight:bold; }}
      .sign {{ margin-top:28px; display:flex; justify-content:space-between; }}
      .sign div {{ width:45%; border-top:1px solid #999; padding-top:4px; text-align:center; font-size:10px; color:#555; }}
      .foot {{ margin-top:10px; color:#777; font-size:8px; }}
    </style></head><body>
      {doc_header_html(tpl)}
      <h1>Bon de {_h.escape(kind_label.lower())}</h1>
      <div class="ref">Réf. {_e(ref)}</div>
      <table class="det"><tbody>{body}</tbody></table>
      <div class="amount">Montant : {_money(amount)} FCFA</div>
      <div class="sign"><div>Le caissier</div><div>Le responsable</div></div>
      {doc_inline_footer_html(tpl, run)}
    </body></html>"""
    return HTML(string=html).write_pdf()

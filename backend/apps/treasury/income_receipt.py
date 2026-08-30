"""Reçu de recette (PDF WeasyPrint) — voyage / colis / bagage / autre."""
import html as _h
from django.utils import timezone
from apps.reporting.letterhead import company_header_html


def _e(v):
    return "" if v is None else _h.escape(str(v))


def _money(v):
    try:
        return f"{float(v):,.0f}".replace(",", " ")
    except (TypeError, ValueError):
        return _e(v)


def render_income_receipt(*, company, ref, date, source_label, party, amount,
                          payment_label, caisse_label=None, agency_name=None,
                          created_by=None, kind_label="Recette") -> bytes:
    from weasyprint import HTML
    run = timezone.localtime(timezone.now()).strftime("%d/%m/%Y %H:%M")
    rows = [
        ("Source", _e(source_label) or "—"),
        ("Client / Tiers", _e(party) or "—"),
        ("Mode de paiement", _e(payment_label)),
        ("Caisse", _e(caisse_label) or "—"),
        ("Agence", _e(agency_name) or "—"),
        ("Date", _e(date)),
        ("Encaissé par", _e(created_by) or "—"),
    ]
    body = "".join(f'<tr><td class="k">{k}</td><td class="v">{v}</td></tr>' for k, v in rows)
    html = f"""<html><head><meta charset="utf-8"><style>
      @page {{ size: A5 landscape; margin: 12mm; }}
      body {{ font-family: DejaVu Sans, sans-serif; font-size: 11px; color:#111; }}
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
      {company_header_html(company)}
      <h1>Reçu de {_h.escape(kind_label.lower())}</h1>
      <div class="ref">Réf. {_e(ref)}</div>
      <table class="det"><tbody>{body}</tbody></table>
      <div class="amount">Montant : {_money(amount)} FCFA</div>
      <div class="sign"><div>Le caissier</div><div>Le client</div></div>
      <div class="foot">Généré le {run}</div>
    </body></html>"""
    return HTML(string=html).write_pdf()

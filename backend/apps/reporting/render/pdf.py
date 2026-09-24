import html as _h
from django.utils import timezone
from apps.reporting.letterhead import company_header_html, doc_header_html, page_footer_bits


def _money(v):
    try:
        return f"{float(v):,.0f}".replace(",", " ")
    except (TypeError, ValueError):
        return "" if v is None else str(v)


def _cell(col, v):
    return _money(v) if col.money else ("" if v is None else _h.escape(str(v)))


def render_pdf(result, company, tpl=None) -> bytes:
    from weasyprint import HTML
    cols = result.columns
    thead = "".join(f'<th style="text-align:{c.align}">{_h.escape(c.label)}</th>' for c in cols)
    body = []
    for g in result.groups:
        if g.label:
            body.append(f'<tr class="grp"><td colspan="{len(cols)}">{_h.escape(g.label)}</td></tr>')
        for row in g.rows:
            tds = "".join(f'<td style="text-align:{c.align}">{_cell(c, row.get(c.key))}</td>' for c in cols)
            body.append(f"<tr>{tds}</tr>")
        if g.subtotal:
            tds = "".join(f'<td style="text-align:{c.align}"><b>{_cell(c, g.subtotal.get(c.key))}</b></td>' for c in cols)
            body.append(f'<tr class="sub">{tds}</tr>')
    if result.totals:
        tds = "".join(f'<td style="text-align:{c.align}"><b>{_cell(c, result.totals.get(c.key))}</b></td>' for c in cols)
        body.append(f'<tr class="tot">{tds}</tr>')
    orientation = "landscape" if len(cols) > 6 else "portrait"
    run = timezone.localtime(timezone.now()).strftime("%d/%m/%Y %H:%M")
    period = _h.escape(result.period_label) if result.period_label else ""
    header = doc_header_html(tpl) if tpl else company_header_html(company)
    footer_css, footer_html = page_footer_bits(tpl or {}, run)
    html = f"""<html><head><meta charset="utf-8"><style>
      @page {{ size: A4 {orientation}; margin: 14mm 10mm 18mm; {footer_css} }}
      body {{ font-family: DejaVu Sans, sans-serif; font-size: 10px; color:#111; }}
      .head {{ display:flex; gap:12px; border-bottom:1px solid #999; padding-bottom:6px; }}
      .co-name {{ font-weight:bold; font-size:14px; }}
      h1 {{ font-size:15px; margin:10px 0 2px; }}
      .meta {{ color:#555; margin-bottom:8px; }}
      table {{ width:100%; border-collapse:collapse; }}
      th, td {{ border:1px solid #bbb; padding:3px 5px; }}
      th {{ background:#f0f0f0; }}
      tr.grp td {{ background:#eef; font-weight:bold; }}
      tr.tot td {{ background:#f7f7f7; }}
    </style></head><body>
      {footer_html}
      {header}
      <h1>{_h.escape(result.title)}</h1>
      {f'<div class="meta">{period}</div>' if period else ''}
      <table><thead><tr>{thead}</tr></thead><tbody>{''.join(body)}</tbody></table>
    </body></html>"""
    return HTML(string=html).write_pdf()

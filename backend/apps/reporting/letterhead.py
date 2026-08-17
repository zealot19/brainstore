import html as _h


def company_header_html(company) -> str:
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

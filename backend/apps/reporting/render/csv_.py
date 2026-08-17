import csv
import io


def _fmt(col, v):
    if col.money and v is not None:
        return f"{float(v):,.0f}".replace(",", " ")
    return "" if v is None else str(v)


def render_csv(result) -> bytes:
    buf = io.StringIO()
    w = csv.writer(buf, delimiter=";")
    w.writerow([c.label for c in result.columns])
    for g in result.groups:
        if g.label:
            w.writerow([g.label])
        for row in g.rows:
            w.writerow([_fmt(c, row.get(c.key)) for c in result.columns])
        if g.subtotal:
            w.writerow([_fmt(c, g.subtotal.get(c.key)) for c in result.columns])
    if result.totals:
        w.writerow([_fmt(c, result.totals.get(c.key)) for c in result.columns])
    return ("﻿" + buf.getvalue()).encode("utf-8")

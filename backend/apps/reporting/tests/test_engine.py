from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.render.csv_ import render_csv
from apps.reporting.render.xlsx import render_xlsx


def _sample():
    cols = [ReportColumn("a", "A"), ReportColumn("m", "Montant", align="right", money=True)]
    grp = ReportGroup(rows=[{"a": "x", "m": 1500}, {"a": "y", "m": 2500}])
    return ReportResult(code="t", title="TEST", columns=cols, groups=[grp], totals={"m": 4000})


def test_csv_and_xlsx_render():
    r = _sample()
    csv_bytes = render_csv(r)
    assert b"Montant" in csv_bytes and "4 000".encode() in csv_bytes
    xlsx_bytes = render_xlsx(r)
    assert xlsx_bytes[:2] == b"PK"

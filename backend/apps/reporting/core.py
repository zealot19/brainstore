from dataclasses import dataclass, field


@dataclass
class ReportColumn:
    key: str
    label: str
    align: str = "left"
    money: bool = False


@dataclass
class ReportGroup:
    label: str = ""
    rows: list = field(default_factory=list)
    subtotal: dict | None = None


@dataclass
class ReportResult:
    code: str
    title: str
    columns: list
    groups: list
    totals: dict | None = None
    period_label: str = ""
    meta: dict = field(default_factory=dict)

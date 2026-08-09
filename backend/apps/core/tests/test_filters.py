from datetime import date
from apps.core.filters import resolve_date_field, date_range_kwargs


def test_resolve_date_field_uses_default_when_missing_or_unknown():
    m = {"created": "created_at", "departure": "scheduled_departure"}
    assert resolve_date_field(m, None, "created") == "created_at"
    assert resolve_date_field(m, "departure", "created") == "scheduled_departure"
    assert resolve_date_field(m, "bogus", "created") == "created_at"


def test_date_range_kwargs_parses_and_ignores_invalid():
    assert date_range_kwargs("created_at", "2026-01-01", "2026-12-31") == {
        "created_at__date__gte": date(2026, 1, 1),
        "created_at__date__lte": date(2026, 12, 31),
    }
    assert date_range_kwargs("created_at", None, "pas-une-date") == {}

import types
import pytest
from datetime import timedelta
from django.utils import timezone
from django.core.cache import cache
from apps.system_config.models import Company, Parameter
from apps.system_config.selectors.archiving import (
    archive_window_days, apply_archive_window, wants_archived, ARCHIVE_WINDOW_KEY,
)


def _company(name):
    return Company.objects.create(name=name, slug=name.lower())


def _set_window(company, days):
    Parameter.objects.update_or_create(
        key=ARCHIVE_WINDOW_KEY, company_id=company.id,
        defaults={"value": str(days), "data_type": Parameter.DataType.INTEGER,
                  "scope": Parameter.Scope.COMPANY})
    cache.delete(f"param:{company.id}:{ARCHIVE_WINDOW_KEY}")


@pytest.mark.django_db
def test_disabled_is_noop():
    c = _company("Dis")  # no window row => disabled
    qs = Parameter.objects.all()
    out = apply_archive_window(qs, date_field="created_at", company_id=c.id, include_archived=False)
    assert list(out) == list(qs)
    assert archive_window_days(c.id) == 0


@pytest.mark.django_db
def test_window_hides_old_and_keeps_recent():
    c = _company("Win")
    _set_window(c, 30)
    # distinct keys: Parameter has unique_together (key, company)
    recent = Parameter.objects.create(key="probe_recent", value="r", company_id=c.id)
    old = Parameter.objects.create(key="probe_old", value="o", company_id=c.id)
    # just inside / just outside the 30-day window (avoid exact-cutoff timing races)
    Parameter.objects.filter(id=recent.id).update(created_at=timezone.now() - timedelta(days=29))
    Parameter.objects.filter(id=old.id).update(created_at=timezone.now() - timedelta(days=31))
    qs = Parameter.objects.filter(key__in=["probe_recent", "probe_old"])
    default = apply_archive_window(qs, date_field="created_at", company_id=c.id, include_archived=False)
    assert set(default.values_list("id", flat=True)) == {recent.id}
    revealed = apply_archive_window(qs, date_field="created_at", company_id=c.id, include_archived=True)
    assert set(revealed.values_list("id", flat=True)) == {recent.id, old.id}


@pytest.mark.django_db
def test_invalid_stored_value_is_treated_as_zero():
    c = _company("Bad")
    Parameter.objects.create(key=ARCHIVE_WINDOW_KEY, company_id=c.id, value="abc",
                             data_type=Parameter.DataType.STRING, scope=Parameter.Scope.COMPANY)
    cache.delete(f"param:{c.id}:{ARCHIVE_WINDOW_KEY}")
    assert archive_window_days(c.id) == 0


@pytest.mark.parametrize("raw,expected", [
    ("1", True), ("true", True), ("TRUE", True), ("yes", True),
    ("0", False), ("", False), ("no", False), (None, False),
])
def test_wants_archived_parsing(raw, expected):
    qp = {} if raw is None else {"include_archived": raw}
    req = types.SimpleNamespace(query_params=qp)
    assert wants_archived(req) is expected

import datetime

from django.db.models import DateField, DateTimeField

from apps.sync.apply import _to_python


def test_datefield_accepts_full_datetime_string():
    """Régression : un DateField recevant un datetime ISO complet garde la date
    (sinon ValidationError -> tout le cycle de synchro est bloqué)."""
    f = DateField()
    assert _to_python(f, "2026-10-12T08:44:45.124265+00:00") == datetime.date(2026, 10, 12)


def test_datefield_plain_date_still_works():
    f = DateField()
    assert _to_python(f, "2026-10-12") == datetime.date(2026, 10, 12)


def test_datetimefield_unchanged():
    """Un DateTimeField doit continuer d'accepter le datetime complet (heure conservée)."""
    g = DateTimeField()
    out = _to_python(g, "2026-10-12T08:44:45.124265+00:00")
    assert out is not None and out.hour == 8 and out.minute == 44


def test_none_passthrough():
    assert _to_python(DateField(), None) is None

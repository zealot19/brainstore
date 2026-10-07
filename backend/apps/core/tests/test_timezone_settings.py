import pathlib
from datetime import datetime
from zoneinfo import ZoneInfo

from django.conf import settings
from config.settings import base as base_settings


def test_default_timezone_is_cameroon_douala():
    """Le défaut committé (utilisé quand aucune variable TIME_ZONE n'est définie,
    ex. Railway) est l'heure du Cameroun. Indépendant du .env local éventuel."""
    src = pathlib.Path(base_settings.__file__).read_text()
    assert 'env("TIME_ZONE", default="Africa/Douala")' in src
    assert settings.USE_TZ is True


def test_douala_is_utc_plus_one_no_dst():
    """Africa/Douala = WAT, UTC+1, sans heure d'été (offset constant été comme hiver)."""
    tz = ZoneInfo("Africa/Douala")
    jan = datetime(2026, 1, 1, 12, tzinfo=tz)
    jul = datetime(2026, 7, 1, 12, tzinfo=tz)
    assert jan.utcoffset().total_seconds() == 3600
    assert jul.utcoffset().total_seconds() == 3600

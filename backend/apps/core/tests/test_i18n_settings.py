from django.conf import settings


def test_cemac_ltr_languages_registered():
    codes = {code for code, _label in settings.LANGUAGES}
    assert {"fr", "en", "es", "pt"} <= codes


def test_arabic_not_active_in_tranche_1():
    codes = {code for code, _label in settings.LANGUAGES}
    assert "ar" not in codes

import pytest
from django.utils.translation import override
from apps.treasury.models import PaymentMethod
from apps.system_config.models import Company

pytestmark = pytest.mark.django_db


def _company():
    return Company.objects.create(name="ACME", slug="acme")


def test_payment_method_translatable_fr_en_with_fallback():
    c = _company()
    with override("fr"):
        pm = PaymentMethod.objects.create(company=c, code="cash", name="Espèces", name_en="Cash")
    pm.refresh_from_db()
    assert pm.name_fr == "Espèces"
    assert pm.name_en == "Cash"
    with override("fr"):
        assert pm.name == "Espèces"
    with override("en"):
        assert pm.name == "Cash"
    # es/pt non gérés -> repli FR
    with override("es"):
        assert pm.name == "Espèces"


def test_backfill_sets_fr_from_base_value():
    """Un enregistrement créé sans name_en voit son name_fr rempli (name)."""
    c = _company()
    with override("fr"):
        pm = PaymentMethod.objects.create(company=c, code="om", name="Orange Money")
    pm.refresh_from_db()
    assert pm.name_fr == "Orange Money"
    with override("en"):
        assert pm.name == "Orange Money"  # fallback FR

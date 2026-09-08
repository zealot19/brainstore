import pytest
from apps.core.services.sequence_service import next_number
from apps.core.models import Sequence

pytestmark = pytest.mark.django_db


class _Ag:
    def __init__(self, code):
        self.code = code


def test_numbers_are_agency_namespaced():
    Sequence.objects.create(code="BOOK", name="Resa", prefix="BOOK", padding=5, reset_yearly=True)
    a = next_number("BOOK", agency=_Ag("DLA"))
    b = next_number("BOOK", agency=_Ag("YDE"))
    assert a.startswith("DLA/") and b.startswith("YDE/")


def test_no_agency_keeps_plain_number():
    Sequence.objects.create(code="TKT", name="Billets", prefix="TKT", padding=5, reset_yearly=True)
    n = next_number("TKT")
    assert n.startswith("TKT/")

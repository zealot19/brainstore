import pytest
from apps.authentication.models import UserAgency

pytestmark = pytest.mark.django_db


def test_useragency_uuid_pk():
    assert UserAgency._meta.pk.get_internal_type() == "UUIDField"

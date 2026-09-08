import pytest
from django.core.exceptions import PermissionDenied
from apps.sync.capture import suspend_capture
from apps.voyages_config.models import Town
from apps.system_config.services import create_company

pytestmark = pytest.mark.django_db


@pytest.fixture
def company():
    c, _ = create_company(name="G", admin_email="g@x.com", admin_first_name="A", admin_last_name="B")
    return c


def test_agency_cannot_edit_config(settings, company):
    settings.SYNC_ENABLED = True
    settings.NODE_ROLE = "agency"
    with pytest.raises(PermissionDenied):
        Town.objects.create(company=company, name="Douala")


def test_master_can_edit_config(settings, company):
    settings.SYNC_ENABLED = True
    settings.NODE_ROLE = "master"
    assert Town.objects.create(company=company, name="Douala").pk


def test_agency_apply_allowed_under_suspend(settings, company):
    settings.SYNC_ENABLED = True
    settings.NODE_ROLE = "agency"
    with suspend_capture():
        assert Town.objects.create(company=company, name="Synced").pk


def test_agency_user_local_writes_allowed(settings, company):
    settings.SYNC_ENABLED = True
    settings.NODE_ROLE = "agency"
    from apps.authentication.models import User
    u = User.objects.get(email="g@x.com")
    u.last_login_ip = "1.2.3.4"
    u.save()  # authentication.user is excluded → allowed
    assert User.objects.get(pk=u.pk).last_login_ip == "1.2.3.4"


def test_guard_off_when_sync_disabled(settings, company):
    settings.SYNC_ENABLED = False
    settings.NODE_ROLE = "agency"
    assert Town.objects.create(company=company, name="NoSync").pk

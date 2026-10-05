import pytest
from datetime import date, timedelta
from apps.system_config.models import Company, License
from apps.system_config.services.licensing import (
    set_license_expiry, reissue_all, company_is_licensed, license_row_is_valid,
)


@pytest.mark.django_db
def test_set_expiry_then_extend_and_reduce():
    c = Company.objects.create(name="M2", slug="m2")
    set_license_expiry(c, expires_at=date.today() - timedelta(days=1))
    assert company_is_licensed(c.id) is False          # expired
    set_license_expiry(c, expires_at=date.today() + timedelta(days=5))
    assert company_is_licensed(c.id) is True            # extended
    set_license_expiry(c, expires_at=date.today() - timedelta(days=3))
    assert company_is_licensed(c.id) is False           # reduced into the past


@pytest.mark.django_db
def test_suspended_status_locks_even_if_date_future():
    c = Company.objects.create(name="M3", slug="m3")
    set_license_expiry(c, expires_at=date.today() + timedelta(days=30))
    set_license_expiry(c, expires_at=c.license.expires_at, status=License.Status.SUSPENDED)
    assert company_is_licensed(c.id) is False


@pytest.mark.django_db
def test_company_with_no_row_is_allowed():
    c = Company.objects.create(name="M4", slug="m4")
    assert company_is_licensed(c.id) is True            # not provisioned yet → allowed


@pytest.mark.django_db
def test_expiry_boundary_inclusive():
    c = Company.objects.create(name="M5", slug="m5")
    set_license_expiry(c, expires_at=date.today())
    assert company_is_licensed(c.id, today=date.today()) is True             # valid through expiry day
    assert company_is_licensed(c.id, today=date.today() + timedelta(days=1)) is False


@pytest.mark.django_db
def test_null_expiry_is_not_enforced():
    c = Company.objects.create(name="M6", slug="m6")
    License.objects.create(company=c, expires_at=None)
    assert company_is_licensed(c.id) is True


@pytest.mark.django_db
def test_reissue_backfills_all_idempotent():
    Company.objects.create(name="R1", slug="r1")
    Company.objects.create(name="R2", slug="r2")
    n = reissue_all()
    assert n >= 2
    for c in Company.objects.all():
        assert company_is_licensed(c.id) is True
    assert reissue_all() == n                            # idempotent: same count, no duplicates
    assert License.objects.count() == Company.objects.count()

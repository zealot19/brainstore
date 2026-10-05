from datetime import date, timedelta
from django.conf import settings
from apps.system_config.models import License


def license_row_is_valid(lic, *, today=None) -> bool:
    """True iff the License row permits access: active and not past its expiry.
    A null expiry means no date is set yet → not enforced (valid). The DB is the
    authority (access is controlled); there is no signature."""
    if lic.status != License.Status.ACTIVE:
        return False
    if lic.expires_at is None:
        return True
    today = today or date.today()
    return today <= lic.expires_at


def company_is_licensed(company_id, *, today=None) -> bool:
    """Enforcement rule: a company with NO license row is allowed (not provisioned
    yet); a company WITH a row is allowed only while that row is valid."""
    lic = License.objects.filter(company_id=company_id).first()
    if lic is None:
        return True
    return license_row_is_valid(lic, today=today)


def set_license_expiry(company, *, expires_at, status=None, actor=None) -> License:
    lic, _ = License.objects.get_or_create(company=company)
    lic.expires_at = expires_at
    if status is not None:
        lic.status = status
    lic.updated_by = actor
    lic.save(update_fields=["expires_at", "status", "updated_by", "updated_at"])
    return lic


def reissue_all() -> int:
    """Ensure every company has a License row, backfilling a missing expiry with
    the configured default. Idempotent. Returns the number processed."""
    from apps.system_config.models import Company
    default_exp = date.today() + timedelta(days=settings.LICENSE_BACKFILL_DAYS)
    count = 0
    for company in Company.objects.all():
        lic, _ = License.objects.get_or_create(company=company, defaults={"expires_at": default_exp})
        if lic.expires_at is None:
            lic.expires_at = default_exp
            lic.save(update_fields=["expires_at", "updated_at"])
        count += 1
    return count

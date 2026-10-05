from datetime import date, timedelta
from django.conf import settings
from django.utils import timezone
from apps.core.licensing import sign_license
from apps.system_config.models import License


def _bust_license_cache(company) -> None:
    """Remove the reverse-accessor cache on company so the next access re-fetches from DB."""
    from apps.system_config.models import Company as _Company
    try:
        _Company.license.related.delete_cached_value(company)
    except KeyError:
        pass


def mint_license(company) -> License:
    """(Re)sign the company's license token from its current expires_at/status."""
    lic = company.license
    payload = {
        "v": 1,
        "company_id": str(company.id),
        "status": lic.status,
        "expires_at": lic.expires_at.isoformat() if lic.expires_at else "",
        "issued_at": timezone.now().isoformat(),
        "key_version": settings.LICENSE_KEY_VERSION,
    }
    lic.token = sign_license(payload)
    lic.issued_at = timezone.now()
    lic.key_version = settings.LICENSE_KEY_VERSION
    lic.save(update_fields=["token", "issued_at", "key_version", "updated_at"])
    # Bust the reverse-accessor cache so the next company.license access returns the
    # freshly-saved row.
    _bust_license_cache(company)
    return lic


def set_license_expiry(company, *, expires_at, status=None, actor=None) -> License:
    lic, _ = License.objects.get_or_create(company=company)
    lic.expires_at = expires_at
    if status is not None:
        lic.status = status
    lic.updated_by = actor
    lic.save(update_fields=["expires_at", "status", "updated_by", "updated_at"])
    # Bust the cache before minting so that mint_license reads the row we just saved,
    # not a previously cached (stale) License instance.
    _bust_license_cache(company)
    return mint_license(company)


def reissue_all() -> int:
    """Ensure every company has a minted License; backfill missing expiry with the
    configured default. Idempotent. Returns the number processed."""
    from apps.system_config.models import Company
    default_exp = date.today() + timedelta(days=settings.LICENSE_BACKFILL_DAYS)
    count = 0
    for company in Company.objects.all():
        lic, _ = License.objects.get_or_create(company=company, defaults={"expires_at": default_exp})
        if lic.expires_at is None:
            lic.expires_at = default_exp
            lic.save(update_fields=["expires_at", "updated_at"])
        mint_license(company)
        count += 1
    return count

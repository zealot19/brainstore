from django.core.cache import cache
from apps.system_config.models import Parameter, FeatureFlag


def get_param(key: str, company_id=None, default=None):
    """
    Lit un paramètre système avec cache Redis (TTL 5 min).
    Cherche d'abord au niveau institution, puis global.
    """
    cache_key = f"param:{company_id or 'global'}:{key}"
    cached = cache.get(cache_key)
    if cached is not None:
        return cached

    qs = Parameter.objects.filter(key=key)
    param = (
        qs.filter(company_id=company_id).first()
        or qs.filter(company__isnull=True).first()
    )

    value = param.get_typed_value() if param else default
    cache.set(cache_key, value, timeout=300)
    return value


def is_enabled(flag_key: str, company_id=None) -> bool:
    """Vérifie si un feature flag est actif pour une institution."""
    cache_key = f"flag:{company_id or 'global'}:{flag_key}"
    cached = cache.get(cache_key)
    if cached is not None:
        return cached

    flag = (
        FeatureFlag.objects.filter(key=flag_key, company_id=company_id).first()
        or FeatureFlag.objects.filter(key=flag_key, company__isnull=True).first()
    )
    result = flag.is_enabled if flag else False
    cache.set(cache_key, result, timeout=300)
    return result

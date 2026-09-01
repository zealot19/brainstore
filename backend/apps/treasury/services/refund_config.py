from decimal import Decimal
from django.core.cache import cache
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError


def get_refund_rate(company) -> Decimal:
    from apps.system_config.selectors.parameter_selectors import get_param
    val = get_param("treasury.refund_rate", company.id, default=Decimal("0"))
    return Decimal(str(val or 0))


def set_refund_rate(company, rate, user=None) -> Decimal:
    from apps.system_config.models import Parameter
    rate = Decimal(str(rate))
    if rate < 0 or rate > 100:
        raise ApplicationError(_("Le taux de remboursement doit être compris entre 0 et 100."))
    Parameter.objects.update_or_create(
        key="treasury.refund_rate", company=company,
        defaults={"value": str(rate), "data_type": "decimal", "scope": "company"})
    cache.delete(f"param:{company.id}:treasury.refund_rate")
    return rate

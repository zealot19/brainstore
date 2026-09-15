from decimal import Decimal
from django.core.cache import cache
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError

# Taux de remboursement distincts par type d'objet remboursé.
KINDS = ("ticket", "colis", "bagage")
_LEGACY_KEY = "treasury.refund_rate"


def _key(kind: str) -> str:
    return f"treasury.refund_rate_{kind}"


def get_refund_rate(company, kind: str = "ticket") -> Decimal:
    """Taux (%) pour un type donné (ticket/colis/bagage).
    Rétro-compatibilité : si le taux spécifique n'est pas défini, on retombe
    sur l'ancien paramètre unique `treasury.refund_rate`."""
    from apps.system_config.selectors.parameter_selectors import get_param
    if kind not in KINDS:
        kind = "ticket"
    val = get_param(_key(kind), company.id, default=None)
    if val is None or val == "":
        val = get_param(_LEGACY_KEY, company.id, default=Decimal("0"))
    return Decimal(str(val or 0))


def get_refund_rates(company) -> dict:
    return {k: get_refund_rate(company, k) for k in KINDS}


def _set_one(company, kind: str, rate) -> Decimal:
    from apps.system_config.models import Parameter
    rate = Decimal(str(rate))
    if rate < 0 or rate > 100:
        raise ApplicationError(_("Le taux de remboursement doit être compris entre 0 et 100."))
    Parameter.objects.update_or_create(
        key=_key(kind), company=company,
        defaults={"value": str(rate), "data_type": "decimal", "scope": "company"})
    cache.delete(f"param:{company.id}:{_key(kind)}")
    return rate


def set_refund_rates(company, rates: dict, user=None) -> dict:
    """Définit les taux fournis (clés ticket/colis/bagage) ; conserve les autres."""
    out = {}
    for kind in KINDS:
        if kind in rates and rates[kind] is not None:
            out[kind] = _set_one(company, kind, rates[kind])
        else:
            out[kind] = get_refund_rate(company, kind)
    return out


def set_refund_rate(company, rate, user=None) -> Decimal:
    """Rétro-compat : applique le même taux aux trois types."""
    set_refund_rates(company, {k: rate for k in KINDS}, user=user)
    return Decimal(str(rate))

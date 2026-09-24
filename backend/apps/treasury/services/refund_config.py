from decimal import Decimal
from django.core.cache import cache
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError

# Taux de remboursement distincts par type d'objet remboursé.
KINDS = ("ticket", "colis", "bagage")
_LEGACY_KEY = "treasury.refund_rate"

# Méthode de remboursement par type : pourcentage (historique) ou montant fixe.
METHOD_PERCENTAGE = "percentage"
METHOD_FIXED = "fixed"
METHODS = (METHOD_PERCENTAGE, METHOD_FIXED)


def _key(kind: str) -> str:
    return f"treasury.refund_rate_{kind}"


def _method_key(kind: str) -> str:
    return f"treasury.refund_method_{kind}"


def _amount_key(kind: str) -> str:
    return f"treasury.refund_amount_{kind}"


# ── Lecture ──────────────────────────────────────────────────────────────────

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


def get_refund_method(company, kind: str = "ticket") -> str:
    """Méthode configurée pour un type (percentage par défaut → comportement historique)."""
    from apps.system_config.selectors.parameter_selectors import get_param
    if kind not in KINDS:
        kind = "ticket"
    val = get_param(_method_key(kind), company.id, default=None)
    return val if val in METHODS else METHOD_PERCENTAGE


def get_refund_fixed(company, kind: str = "ticket") -> Decimal:
    """Montant fixe configuré pour un type (0 par défaut)."""
    from apps.system_config.selectors.parameter_selectors import get_param
    if kind not in KINDS:
        kind = "ticket"
    val = get_param(_amount_key(kind), company.id, default=None)
    return Decimal(str(val or 0))


def get_refund_config(company) -> dict:
    """Config complète : {kind: {method, rate, amount}}."""
    return {
        k: {
            "method": get_refund_method(company, k),
            "rate": get_refund_rate(company, k),
            "amount": get_refund_fixed(company, k),
        }
        for k in KINDS
    }


# ── Calcul du remboursement ──────────────────────────────────────────────────

def resolve_refund_amount(company, kind, amount_paid) -> Decimal:
    """Montant à rembourser selon la méthode configurée pour ce type.

    - percentage : `amount_paid × taux/100` (comportement historique).
    - fixed      : le montant fixe configuré.
    Dans tous les cas, plafonné au montant réellement encaissé (on ne rembourse
    jamais plus que payé) et jamais négatif.
    """
    paid = Decimal(str(amount_paid or 0))
    if paid <= 0:
        return Decimal("0")
    if get_refund_method(company, kind) == METHOD_FIXED:
        amount = get_refund_fixed(company, kind)
    else:
        amount = paid * get_refund_rate(company, kind) / Decimal("100")
    amount = amount.quantize(Decimal("1."))
    if amount < 0:
        amount = Decimal("0")
    return min(amount, paid)


# ── Écriture ─────────────────────────────────────────────────────────────────

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


def _set_method(company, kind: str, method: str) -> str:
    from apps.system_config.models import Parameter
    if method not in METHODS:
        raise ApplicationError(_("Méthode de remboursement invalide."))
    Parameter.objects.update_or_create(
        key=_method_key(kind), company=company,
        defaults={"value": method, "data_type": "string", "scope": "company"})
    cache.delete(f"param:{company.id}:{_method_key(kind)}")
    return method


def _set_amount(company, kind: str, amount) -> Decimal:
    from apps.system_config.models import Parameter
    amount = Decimal(str(amount))
    if amount < 0:
        raise ApplicationError(_("Le montant de remboursement ne peut pas être négatif."))
    Parameter.objects.update_or_create(
        key=_amount_key(kind), company=company,
        defaults={"value": str(amount), "data_type": "decimal", "scope": "company"})
    cache.delete(f"param:{company.id}:{_amount_key(kind)}")
    return amount


def set_refund_rates(company, rates: dict, user=None) -> dict:
    """Définit les taux (%) fournis (clés ticket/colis/bagage) ; conserve les autres."""
    out = {}
    for kind in KINDS:
        if kind in rates and rates[kind] is not None:
            out[kind] = _set_one(company, kind, rates[kind])
        else:
            out[kind] = get_refund_rate(company, kind)
    return out


def set_refund_rate(company, rate, user=None) -> Decimal:
    """Rétro-compat : applique le même taux (%) aux trois types."""
    set_refund_rates(company, {k: rate for k in KINDS}, user=user)
    return Decimal(str(rate))


def set_refund_config(company, cfg: dict, user=None) -> dict:
    """Définit méthode/taux/montant par type. `cfg` = {kind: {method?, rate?, amount?}} ;
    seuls les champs fournis sont écrits, les autres sont conservés."""
    for kind, v in cfg.items():
        if kind not in KINDS or not isinstance(v, dict):
            continue
        if v.get("method") is not None:
            _set_method(company, kind, v["method"])
        if v.get("rate") is not None:
            _set_one(company, kind, v["rate"])
        if v.get("amount") is not None:
            _set_amount(company, kind, v["amount"])
    return get_refund_config(company)

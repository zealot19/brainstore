"""Résolution des modules activés pour une société (entitlements par plan)."""

_MODULE_FLAGS = {  # code de module -> attribut booléen sur Plan
    "administration": "has_administration",
    "fleet": "has_fleet",
    "voyage": "has_voyages",
    "colis": "has_colis",
    "bagages": "has_bagages",
    "treasury": "has_treasury",
    "accounting": "has_accounting",
    "reporting": "has_reporting",
}
ALL_MODULES = set(_MODULE_FLAGS)


def enabled_modules(company) -> set:
    """Modules activés pour `company`. Pas de plan -> tout activé (rétro-compat)."""
    plan = getattr(company, "plan", None)
    if plan is None:
        return set(ALL_MODULES)
    return {code for code, attr in _MODULE_FLAGS.items() if getattr(plan, attr, True)}


def enabled_modules_for_company_id(company_id) -> set:
    """Idem depuis un id (utilisé par le middleware, qui n'a que le company_id du JWT)."""
    from apps.system_config.models import Company
    company = (Company.objects
               .select_related("plan")
               .filter(id=company_id, is_deleted=False)
               .first())
    return enabled_modules(company) if company else set(ALL_MODULES)

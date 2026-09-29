"""Résolution des modules activés pour une société via les packages accordés."""
from apps.core.packages import modules_for_packages, all_package_codes, grant_field_for

ALL_MODULES = modules_for_packages(all_package_codes())


def granted_packages(company) -> set:
    """Codes de packages accordés à la société. Administration toujours inclus.
    Société absente -> tous les packages (rétro-compat)."""
    if company is None:
        return set(all_package_codes())
    granted = set()
    for code in all_package_codes():
        field = grant_field_for(code)
        if field is None:            # always-on (administration)
            granted.add(code)
        elif getattr(company, field, True):
            granted.add(code)
    return granted


def enabled_modules(company) -> set:
    return modules_for_packages(granted_packages(company))


def enabled_modules_for_company_id(company_id) -> set:
    from apps.system_config.models import Company
    company = (Company.objects.filter(id=company_id, is_deleted=False).first())
    return enabled_modules(company)

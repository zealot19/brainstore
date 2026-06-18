from django.core.cache import cache
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from ..models import Parameter, FeatureFlag


def _bust_param_cache(key, company_id):
    cache.delete(f"param:{company_id or 'global'}:{key}")


def _bust_flag_cache(key, company_id):
    cache.delete(f"flag:{company_id or 'global'}:{key}")


def create_parameter(*, key, value, data_type=Parameter.DataType.STRING,
                     scope=Parameter.Scope.GLOBAL, company_id=None,
                     module="", description="", is_readonly=False):
    if Parameter.objects.filter(key=key, company_id=company_id).exists():
        raise ApplicationError(_("Ce paramètre existe déjà pour cette portée."))
    param = Parameter.objects.create(
        key=key, value=str(value), data_type=data_type,
        scope=scope, company_id=company_id,
        module=module, description=description, is_readonly=is_readonly,
    )
    _bust_param_cache(key, company_id)
    return param


def update_parameter(parameter, *, value=None, description=None, is_readonly=None,
                     updated_by=None):
    if parameter.is_readonly:
        raise ApplicationError(_("Ce paramètre est en lecture seule."))
    if value is not None:
        parameter.value = str(value)
    if description is not None:
        parameter.description = description
    if is_readonly is not None:
        parameter.is_readonly = is_readonly
    parameter.updated_by = updated_by
    parameter.save()
    _bust_param_cache(parameter.key, parameter.company_id)
    return parameter


def delete_parameter(parameter):
    if parameter.is_readonly:
        raise ApplicationError(_("Impossible de supprimer un paramètre en lecture seule."))
    _bust_param_cache(parameter.key, parameter.company_id)
    parameter.soft_delete()


def upsert_parameters(items: list[dict], company_id=None):
    """
    Mise à jour en masse de paramètres.
    items = [{"key": "...", "value": "..."}, ...]
    """
    for item in items:
        qs = Parameter.objects.filter(key=item["key"], company_id=company_id)
        if qs.exists():
            p = qs.first()
            if not p.is_readonly:
                p.value = str(item["value"])
                p.save(update_fields=["value", "updated_at"])
                _bust_param_cache(item["key"], company_id)
        else:
            Parameter.objects.create(
                key=item["key"], value=str(item["value"]),
                company_id=company_id,
            )


# ── Feature flags ─────────────────────────────────────────────────────────────

def create_feature_flag(*, key, company_id=None, is_enabled=False, description=""):
    if FeatureFlag.objects.filter(key=key, company_id=company_id).exists():
        raise ApplicationError(_("Ce flag existe déjà pour cette portée."))
    return FeatureFlag.objects.create(
        key=key, company_id=company_id,
        is_enabled=is_enabled, description=description,
    )


def toggle_feature_flag(flag, updated_by=None):
    flag.is_enabled = not flag.is_enabled
    flag.updated_by = updated_by
    flag.save(update_fields=["is_enabled", "updated_by", "updated_at"])
    _bust_flag_cache(flag.key, flag.company_id)
    return flag


def set_feature_flag(flag, enabled: bool, updated_by=None):
    flag.is_enabled = enabled
    flag.updated_by = updated_by
    flag.save(update_fields=["is_enabled", "updated_by", "updated_at"])
    _bust_flag_cache(flag.key, flag.company_id)
    return flag

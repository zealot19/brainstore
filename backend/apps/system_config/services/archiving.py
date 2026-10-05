from django.core.cache import cache
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.system_config.models import Parameter
from apps.system_config.selectors.archiving import ARCHIVE_WINDOW_KEY


def set_archive_window_days(company_id, days, updated_by=None) -> int:
    if not isinstance(days, int) or isinstance(days, bool) or days < 0:
        raise ApplicationError(_("Le nombre de jours doit être un entier positif ou nul."))
    param, created = Parameter.objects.get_or_create(
        key=ARCHIVE_WINDOW_KEY, company_id=company_id,
        defaults={"value": str(days), "data_type": Parameter.DataType.INTEGER,
                  "scope": Parameter.Scope.COMPANY})
    if not created:
        param.value = str(days)
        param.data_type = Parameter.DataType.INTEGER
        param.scope = Parameter.Scope.COMPANY
        param.updated_by = updated_by
        param.save()
    cache.delete(f"param:{company_id or 'global'}:{ARCHIVE_WINDOW_KEY}")
    return days

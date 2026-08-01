from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class _CompanyScoped(BaseModel):
    """Reference row scoped to a company; company NULL = global default."""
    company = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                on_delete=models.CASCADE, null=True, blank=True)

    class Meta(BaseModel.Meta):
        abstract = True

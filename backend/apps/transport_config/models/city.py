from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class City(BaseModel):
    """City or town where the transport company operates — global reference."""

    name   = models.CharField(_("name"), max_length=150)
    code   = models.CharField(_("code"), max_length=10, unique=True,
                               help_text=_("Short code, e.g. DLA for Douala."))
    region = models.CharField(_("region / state"), max_length=150, blank=True)
    country = models.CharField(_("country"), max_length=100, default="Cameroon")
    is_active = models.BooleanField(_("active"), default=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("city")
        verbose_name_plural = _("cities")
        ordering = ["name"]

    def __str__(self):
        return f"{self.name} ({self.code})"

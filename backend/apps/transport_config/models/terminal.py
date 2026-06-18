from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Terminal(BaseModel):
    """Bus terminal / agency in a city — belongs to a company."""

    company  = models.ForeignKey("system_config.Company", verbose_name=_("company"),
                                  on_delete=models.CASCADE, related_name="terminals")
    city     = models.ForeignKey("transport_config.City", verbose_name=_("city"),
                                  on_delete=models.PROTECT, related_name="terminals")
    name     = models.CharField(_("name"), max_length=200)
    address  = models.CharField(_("address"), max_length=300, blank=True)
    phone    = models.CharField(_("phone"), max_length=30, blank=True)
    gps_lat  = models.DecimalField(_("latitude"), max_digits=9, decimal_places=6,
                                    null=True, blank=True)
    gps_lng  = models.DecimalField(_("longitude"), max_digits=9, decimal_places=6,
                                    null=True, blank=True)
    is_active = models.BooleanField(_("active"), default=True)
    notes    = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("terminal")
        verbose_name_plural = _("terminals")
        ordering = ["city__name", "name"]
        unique_together = [("company", "city", "name")]

    def __str__(self):
        return f"{self.name} — {self.city.name}"

from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class CrewMemberType(_CompanyScoped):
    code      = models.CharField(_("code"), max_length=20)
    name      = models.CharField(_("nom"), max_length=100)
    is_driver = models.BooleanField(_("est conducteur"), default=False)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("type de membre d'équipage")
        verbose_name_plural = _("types de membre d'équipage")
        ordering = ["code"]

    def __str__(self):
        return f"{self.code} — {self.name}"

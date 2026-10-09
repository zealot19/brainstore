from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class VoyageType(_CompanyScoped):
    code = models.CharField(_("code"), max_length=20)
    name = models.CharField(_("nom"), max_length=100)
    is_default = models.BooleanField(_("par défaut"), default=False)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("type de voyage")
        ordering = ["code"]

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        # Un seul type « par défaut » par société.
        if self.is_default:
            VoyageType.objects.filter(company=self.company, is_default=True)\
                .exclude(pk=self.pk).update(is_default=False)

    def __str__(self):
        return f"{self.code} — {self.name}"

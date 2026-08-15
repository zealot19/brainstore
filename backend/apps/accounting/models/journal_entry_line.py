from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class JournalEntryLine(BaseModel):
    entry           = models.ForeignKey("accounting.JournalEntry", on_delete=models.CASCADE, related_name="lines")
    sequence        = models.IntegerField(_("ordre"), default=0)
    account         = models.ForeignKey("accounting.Account", on_delete=models.PROTECT, related_name="+")
    label           = models.CharField(_("libellé"), max_length=500, blank=True)
    debit           = models.DecimalField(_("débit"), max_digits=14, decimal_places=2, default=0)
    credit          = models.DecimalField(_("crédit"), max_digits=14, decimal_places=2, default=0)
    partner         = models.ForeignKey("accounting.Partner", null=True, blank=True, on_delete=models.SET_NULL, related_name="+")
    reconciled      = models.BooleanField(_("lettrée"), default=False)
    reconcile_group = models.CharField(_("groupe de lettrage"), max_length=30, blank=True)
    date_maturity   = models.DateField(_("échéance"), null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("ligne d'écriture")
        verbose_name_plural = _("lignes d'écriture")
        ordering = ["sequence", "id"]

    def __str__(self):
        return f"{self.account.code} D{self.debit} C{self.credit}"

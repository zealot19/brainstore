from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class JournalEntry(BaseModel):
    class Type(models.TextChoices):
        MANUAL        = "manual", _("Manuelle")
        AUTO_SALE     = "auto_sale", _("Vente")
        AUTO_PAYMENT  = "auto_payment", _("Encaissement")
        AUTO_PAYROLL  = "auto_payroll", _("Paie")
        AUTO_TRANSFER = "auto_transfer", _("Transfert")

    class State(models.TextChoices):
        DRAFT     = "draft", _("Brouillon")
        POSTED    = "posted", _("Validée")
        CANCELLED = "cancelled", _("Annulée")

    company      = models.ForeignKey("system_config.Company", on_delete=models.CASCADE, related_name="journal_entries")
    journal      = models.ForeignKey("accounting.Journal", on_delete=models.PROTECT, related_name="entries")
    period       = models.ForeignKey("accounting.AccountingPeriod", on_delete=models.PROTECT, related_name="entries")
    date         = models.DateField(_("date"))
    entry_type   = models.CharField(_("type"), max_length=16, choices=Type.choices, default=Type.MANUAL)
    partner      = models.ForeignKey("accounting.Partner", null=True, blank=True, on_delete=models.SET_NULL, related_name="+")
    label        = models.CharField(_("libellé"), max_length=500)
    reference    = models.CharField(_("référence"), max_length=100, blank=True)
    state        = models.CharField(_("état"), max_length=10, choices=State.choices, default=State.DRAFT)
    name         = models.CharField(_("n° pièce"), max_length=30, blank=True)
    total_debit  = models.DecimalField(_("total débit"), max_digits=14, decimal_places=2, default=0)
    total_credit = models.DecimalField(_("total crédit"), max_digits=14, decimal_places=2, default=0)
    posted_at    = models.DateTimeField(_("validée le"), null=True, blank=True)
    posted_by    = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.SET_NULL, related_name="+")
    reversed_entry = models.ForeignKey("self", null=True, blank=True, on_delete=models.SET_NULL, related_name="reversal")
    source_model = models.CharField(_("modèle source"), max_length=60, blank=True)
    source_id    = models.UUIDField(_("id source"), null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("pièce comptable")
        verbose_name_plural = _("pièces comptables")
        ordering = ["-date", "-created_at"]

    def __str__(self):
        return self.name or f"[brouillon] {self.label}"

from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Baggage(BaseModel):
    class Status(models.TextChoices):
        CHECKED_IN = "checked_in", _("Enregistré")
        LOADED     = "loaded",     _("Chargé")
        DELIVERED  = "delivered",  _("Livré")
        CANCELLED  = "cancelled",  _("Annulé")

    company           = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                           on_delete=models.CASCADE, related_name="voyages_baggage")
    tag_number        = models.CharField(_("étiquette"), max_length=40, blank=True)
    ticket            = models.ForeignKey("voyages_booking.Ticket", verbose_name=_("billet"),
                                           on_delete=models.PROTECT, related_name="baggage")
    consignment_type  = models.ForeignKey("voyages_config.ConsignmentType", verbose_name=_("type"),
                                           on_delete=models.PROTECT, null=True, blank=True, related_name="baggage")
    description       = models.CharField(_("description"), max_length=255, blank=True)
    weight_kg         = models.DecimalField(_("poids (kg)"), max_digits=6, decimal_places=2, null=True, blank=True)
    free_allowance_kg = models.DecimalField(_("franchise (kg)"), max_digits=6, decimal_places=2, default=0)
    excess_kg         = models.DecimalField(_("excédent (kg)"), max_digits=6, decimal_places=2, default=0)
    amount_due        = models.DecimalField(_("supplément dû"), max_digits=12, decimal_places=2, default=0)
    amount_received   = models.DecimalField(_("montant encaissé"), max_digits=12, decimal_places=2, default=0)
    change_due        = models.DecimalField(_("monnaie rendue"), max_digits=12, decimal_places=2, default=0)
    payment_method    = models.CharField(_("mode de paiement"), max_length=40, blank=True)
    paid_at           = models.DateTimeField(_("payé le"), null=True, blank=True)
    status            = models.CharField(_("statut"), max_length=12, choices=Status.choices, default=Status.CHECKED_IN)
    loaded_at         = models.DateTimeField(_("chargé le"), null=True, blank=True)
    delivered_at      = models.DateTimeField(_("livré le"), null=True, blank=True)
    notes             = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("bagage")
        verbose_name_plural = _("bagages")
        ordering = ["-created_at"]

    def __str__(self):
        return self.tag_number or str(self.id)

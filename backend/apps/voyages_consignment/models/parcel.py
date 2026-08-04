from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Parcel(BaseModel):
    class Status(models.TextChoices):
        REGISTERED = "registered", _("Enregistré")
        LOADED     = "loaded",     _("Chargé")
        ARRIVED    = "arrived",    _("Réceptionné")
        PICKED_UP  = "picked_up",  _("Livré")
        CANCELLED  = "cancelled",  _("Annulé")

    company           = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                           on_delete=models.CASCADE, related_name="voyages_parcels")
    reference         = models.CharField(_("référence"), max_length=40, blank=True)
    status            = models.CharField(_("statut"), max_length=12, choices=Status.choices, default=Status.REGISTERED)
    origin_point      = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("point de départ"),
                                           on_delete=models.PROTECT, related_name="parcels_from")
    destination_point = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("point d'arrivée"),
                                           on_delete=models.PROTECT, related_name="parcels_to")
    trip              = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                                           on_delete=models.SET_NULL, null=True, blank=True, related_name="parcels")
    sender_name       = models.CharField(_("expéditeur"), max_length=150)
    sender_phone      = models.CharField(_("tél. expéditeur"), max_length=30)
    recipient_name      = models.CharField(_("destinataire"), max_length=150)
    recipient_phone     = models.CharField(_("tél. destinataire"), max_length=30)
    recipient_address   = models.CharField(_("adresse destinataire"), max_length=255, blank=True)
    recipient_id_number = models.CharField(_("pièce du destinataire"), max_length=100, blank=True)
    consignment_type  = models.ForeignKey("voyages_config.ConsignmentType", verbose_name=_("type de colis"),
                                           on_delete=models.PROTECT, related_name="parcels")
    description       = models.CharField(_("description"), max_length=255, blank=True)
    weight_kg         = models.DecimalField(_("poids (kg)"), max_digits=8, decimal_places=3, null=True, blank=True)
    quantity          = models.PositiveSmallIntegerField(_("nombre de pièces"), default=1)
    received_pieces   = models.PositiveSmallIntegerField(_("pièces reçues"), default=0)
    missing_pieces    = models.PositiveSmallIntegerField(_("pièces manquantes"), default=0)
    damaged_pieces    = models.PositiveSmallIntegerField(_("pièces avariées"), default=0)
    declared_value    = models.DecimalField(_("valeur déclarée"), max_digits=12, decimal_places=2, null=True, blank=True)
    amount_due        = models.DecimalField(_("montant dû"), max_digits=12, decimal_places=2, default=0)
    amount_received   = models.DecimalField(_("montant encaissé"), max_digits=12, decimal_places=2, default=0)
    change_due        = models.DecimalField(_("monnaie rendue"), max_digits=12, decimal_places=2, default=0)
    payment_method    = models.CharField(_("mode de paiement"), max_length=40, blank=True)
    paid_at           = models.DateTimeField(_("payé le"), null=True, blank=True)
    loaded_at         = models.DateTimeField(_("chargé le"), null=True, blank=True)
    arrived_at        = models.DateTimeField(_("réceptionné le"), null=True, blank=True)
    picked_up_at       = models.DateTimeField(_("livré le"), null=True, blank=True)
    picked_up_by       = models.CharField(_("livré à"), max_length=150, blank=True)
    picked_up_id_number = models.CharField(_("pièce présentée"), max_length=100, blank=True)
    notes              = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("colis")
        verbose_name_plural = _("colis")
        ordering = ["-created_at"]

    def __str__(self):
        return self.reference or str(self.id)


class ParcelEvent(BaseModel):
    class Kind(models.TextChoices):
        REGISTERED = "registered", _("Enregistré")
        LOADED     = "loaded",     _("Chargé")
        ARRIVED    = "arrived",    _("Réceptionné")
        PICKED_UP  = "picked_up",  _("Livré")
        CANCELLED  = "cancelled",  _("Annulé")

    parcel = models.ForeignKey("voyages_consignment.Parcel", verbose_name=_("colis"),
                               on_delete=models.CASCADE, related_name="events")
    kind   = models.CharField(_("type"), max_length=12, choices=Kind.choices)
    trip   = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                               on_delete=models.SET_NULL, null=True, blank=True, related_name="parcel_events")
    note   = models.CharField(_("note"), max_length=255, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("événement colis")
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.parcel_id} · {self.get_kind_display()}"

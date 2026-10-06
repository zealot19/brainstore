from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Baggage(BaseModel):
    class Status(models.TextChoices):
        CHECKED_IN = "checked_in", _("Enregistré")
        LOADED     = "loaded",     _("Chargé")
        DELIVERED  = "delivered",  _("Retiré")
        CANCELLED  = "cancelled",  _("Annulé")

    class IdType(models.TextChoices):
        CNI            = "cni",            _("CNI")
        PASSPORT       = "passport",       _("Passeport")
        DRIVER_LICENSE = "driver_license", _("Permis de conduire")
        OTHER          = "other",          _("Autre")

    class Civility(models.TextChoices):
        MR   = "mr",   _("Monsieur")
        MRS  = "mrs",  _("Madame")
        MISS = "miss", _("Mademoiselle")

    company           = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                           on_delete=models.CASCADE, related_name="voyages_baggage")
    tag_number        = models.CharField(_("étiquette"), max_length=40, blank=True)
    # Voyage connu dès l'enregistrement (différence avec le colis).
    trip              = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                                           on_delete=models.PROTECT, null=True, blank=True, related_name="baggage")
    # Rattachement passager FACULTATIF ; sinon identité expéditeur saisie ci-dessous.
    ticket            = models.ForeignKey("voyages_booking.Ticket", verbose_name=_("billet"),
                                           on_delete=models.PROTECT, null=True, blank=True, related_name="baggage")
    sender_name       = models.CharField(_("nom client / expéditeur"), max_length=150, blank=True)
    sender_phone      = models.CharField(_("téléphone"), max_length=30, blank=True)
    civility          = models.CharField(_("civilité"), max_length=6, choices=Civility.choices, blank=True)
    id_type           = models.CharField(_("type de pièce"), max_length=20, choices=IdType.choices, blank=True)
    id_number         = models.CharField(_("no pièce"), max_length=100, blank=True)
    sender_client     = models.ForeignKey("voyages_booking.Passenger", verbose_name=_("client"),
                                          on_delete=models.SET_NULL, null=True, blank=True,
                                          related_name="baggage_sent")
    birth_date        = models.DateField(_("date de naissance"), null=True, blank=True)
    email             = models.EmailField(_("email"), blank=True)
    consignment_type  = models.ForeignKey("voyages_config.ConsignmentType", verbose_name=_("type"),
                                           on_delete=models.PROTECT, null=True, blank=True, related_name="baggage")
    description       = models.CharField(_("description"), max_length=255, blank=True)
    weight_kg         = models.DecimalField(_("poids (kg)"), max_digits=6, decimal_places=2, null=True, blank=True)
    quantity          = models.PositiveSmallIntegerField(_("nombre de bagages"), default=1)
    declared_value    = models.DecimalField(_("valeur du bagage"), max_digits=12, decimal_places=2, default=1)
    free_allowance_kg = models.DecimalField(_("franchise (kg)"), max_digits=6, decimal_places=2, default=0)
    excess_kg         = models.DecimalField(_("excédent (kg)"), max_digits=6, decimal_places=2, default=0)
    amount_due        = models.DecimalField(_("tarif"), max_digits=12, decimal_places=2, default=0)
    amount_received   = models.DecimalField(_("montant encaissé"), max_digits=12, decimal_places=2, default=0)
    change_due        = models.DecimalField(_("monnaie rendue"), max_digits=12, decimal_places=2, default=0)
    payment_method    = models.CharField(_("mode de paiement"), max_length=40, blank=True)
    paid_at           = models.DateTimeField(_("payé le"), null=True, blank=True)
    status            = models.CharField(_("statut"), max_length=12, choices=Status.choices, default=Status.CHECKED_IN)
    loaded_at         = models.DateTimeField(_("chargé le"), null=True, blank=True)
    delivered_at      = models.DateTimeField(_("retiré le"), null=True, blank=True)
    delivered_comment = models.CharField(_("commentaire de retrait"), max_length=255, blank=True)
    notes             = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("bagage")
        verbose_name_plural = _("bagages")
        ordering = ["-created_at"]

    def __str__(self):
        return self.tag_number or str(self.id)

    @property
    def owner_name(self) -> str:
        """Le propriétaire du bagage : le passager si un billet est lié, sinon l'expéditeur saisi."""
        if self.ticket_id and self.ticket.passenger_id:
            return self.ticket.passenger.full_name
        return self.sender_name

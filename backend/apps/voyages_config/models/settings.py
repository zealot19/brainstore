from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class VoyagesSettings(_CompanyScoped):
    departure_lead_hours = models.PositiveSmallIntegerField(_("délai de démarrage (h)"), default=24)
    arrival_grace_hours = models.PositiveSmallIntegerField(_("délai d'arrêt (h)"), default=48)
    ticket_expiry_days = models.PositiveSmallIntegerField(_("expiration billet (jours)"), default=7)
    shift_duration_hours = models.PositiveSmallIntegerField(_("durée de quart (h)"), default=8)
    document_alert_days = models.PositiveSmallIntegerField(_("alerte documents (jours)"), default=30)
    auto_print_default = models.BooleanField(_("impression auto par défaut"), default=False)
    sms_notification_default = models.BooleanField(_("SMS par défaut"), default=False)
    auto_manage_trips = models.BooleanField(_("démarrage/arrêt auto des voyages"), default=False)
    baggage_free_allowance_kg = models.PositiveSmallIntegerField(_("franchise bagage (kg)"), default=23)
    parcel_trip_max_weight_kg = models.DecimalField(_("capacité colis max/voyage (kg)"),
                                                    max_digits=8, decimal_places=2, null=True, blank=True)
    parcel_trip_max_count = models.PositiveIntegerField(_("nombre max de colis/voyage"), null=True, blank=True)
    # Retrait partiel : si activé, un colis multi-pièces est retirable dès qu'une
    # partie est arrivée (retrait pièce par pièce). Sinon, il n'est retirable que
    # lorsque toutes les pièces sont arrivées (ou déclarées manquantes).
    allow_partial_pickup = models.BooleanField(_("retrait partiel autorisé"), default=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("paramètres voyages")

    def __str__(self):
        return f"Paramètres voyages ({self.company_id or 'global'})"

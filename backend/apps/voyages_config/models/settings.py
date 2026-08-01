from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class VoyagesSettings(_CompanyScoped):
    departure_lead_hours = models.PositiveSmallIntegerField(_("délai de démarrage (h)"), default=24)
    arrival_grace_hours = models.PositiveSmallIntegerField(_("délai d'arrêt (h)"), default=48)
    ticket_expiry_days = models.PositiveSmallIntegerField(_("expiration billet (jours)"), default=7)
    shift_duration_hours = models.PositiveSmallIntegerField(_("durée de quart (h)"), default=8)
    document_alert_days = models.PositiveSmallIntegerField(_("alerte documents (jours)"), default=30)
    archive_delay_days = models.PositiveSmallIntegerField(_("délai d'archivage (jours)"), default=365)
    auto_print_default = models.BooleanField(_("impression auto par défaut"), default=False)
    sms_notification_default = models.BooleanField(_("SMS par défaut"), default=False)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("paramètres voyages")

    def __str__(self):
        return f"Paramètres voyages ({self.company_id or 'global'})"

from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class LoyaltyRule(_CompanyScoped):
    name = models.CharField(_("nom"), max_length=100, default="Programme fidélité")
    points_per_one_way = models.PositiveSmallIntegerField(_("points aller simple"), default=1)
    points_per_round_trip = models.PositiveSmallIntegerField(_("points aller-retour"), default=2)
    reward_threshold = models.PositiveSmallIntegerField(_("seuil de récompense"), default=10)
    reward_label = models.CharField(_("récompense"), max_length=150, default="1 billet gratuit")
    valid_from = models.DateField(_("valide à partir du"), null=True, blank=True)
    valid_to = models.DateField(_("valide jusqu'au"), null=True, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("règle de fidélité")
        ordering = ["name"]

    def __str__(self):
        return self.name

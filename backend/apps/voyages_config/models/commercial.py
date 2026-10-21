from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class FareClass(_CompanyScoped):
    code = models.CharField(_("code"), max_length=20)
    name = models.CharField(_("nom"), max_length=100)
    rank = models.PositiveSmallIntegerField(_("rang"), default=0)
    color = models.CharField(_("couleur"), max_length=7, blank=True)
    is_rental = models.BooleanField(_("location (bus entier)"), default=False)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("catégorie tarifaire")
        ordering = ["rank", "code"]

    def __str__(self):
        return self.name


class TimeSlot(_CompanyScoped):
    code = models.CharField(_("code"), max_length=20)
    label = models.CharField(_("libellé"), max_length=100)
    start_time = models.TimeField(_("début"))
    end_time = models.TimeField(_("fin"))
    ordering = models.PositiveSmallIntegerField(_("ordre"), default=0)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("plage horaire")
        ordering = ["ordering", "start_time"]

    def __str__(self):
        return self.label


class ConsignmentNature(_CompanyScoped):
    code = models.CharField(_("code"), max_length=20)
    name = models.CharField(_("nom"), max_length=100)
    is_fragile = models.BooleanField(_("fragile"), default=False)
    requires_declaration = models.BooleanField(_("déclaration requise"), default=False)
    is_prohibited = models.BooleanField(_("interdit"), default=False)
    # Tarification par nature. Si `fixed_price` est défini, le prix du colis est
    # imposé (non modifiable). Sinon, `min_price`/`max_price` (optionnels) bornent
    # le prix saisi. Tous nuls = saisie libre.
    fixed_price = models.DecimalField(_("prix fixe"), max_digits=12, decimal_places=2, null=True, blank=True)
    min_price   = models.DecimalField(_("prix minimum"), max_digits=12, decimal_places=2, null=True, blank=True)
    max_price   = models.DecimalField(_("prix maximum"), max_digits=12, decimal_places=2, null=True, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("nature de colis")
        ordering = ["name"]

    def __str__(self):
        return self.name


class ConsignmentType(_CompanyScoped):
    class AppliesTo(models.TextChoices):
        BAGGAGE = "BAGGAGE", _("Bagage")
        PARCEL  = "PARCEL",  _("Colis")
        BOTH    = "BOTH",    _("Les deux")

    code = models.CharField(_("code"), max_length=20)
    label = models.CharField(_("libellé"), max_length=150)
    # Nature de colis retirée de la configuration et du formulaire : le champ
    # devient facultatif (modèle conservé pour l'historique/compat).
    nature = models.ForeignKey("voyages_config.ConsignmentNature", verbose_name=_("nature"),
                               on_delete=models.SET_NULL, null=True, blank=True, related_name="types")
    max_weight_kg = models.DecimalField(_("poids max (kg)"), max_digits=8, decimal_places=2, null=True, blank=True)
    max_volume_m3 = models.DecimalField(_("volume max (m³)"), max_digits=8, decimal_places=3, null=True, blank=True)
    applies_to = models.CharField(_("s'applique à"), max_length=8,
                                  choices=AppliesTo.choices, default=AppliesTo.BOTH)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("type de colis")
        ordering = ["code"]

    def __str__(self):
        return self.label

from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Passenger(BaseModel):
    class Gender(models.TextChoices):
        MALE   = "M", _("Masculin")
        FEMALE = "F", _("Féminin")
        OTHER  = "O", _("Autre")

    class IdType(models.TextChoices):
        CNI            = "cni",            _("CNI")
        PASSPORT       = "passport",       _("Passeport")
        DRIVER_LICENSE = "driver_license", _("Permis de conduire")
        OTHER          = "other",          _("Autre")

    company    = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                   on_delete=models.CASCADE, related_name="voyages_passengers")
    first_name = models.CharField(_("prénom"), max_length=150)
    last_name  = models.CharField(_("nom"), max_length=150)
    gender     = models.CharField(_("genre"), max_length=1, choices=Gender.choices, blank=True)
    birth_date = models.DateField(_("date de naissance"), null=True, blank=True)
    phone      = models.CharField(_("téléphone"), max_length=30, db_index=True)
    email      = models.EmailField(_("email"), blank=True)
    id_type    = models.CharField(_("type de pièce"), max_length=20, choices=IdType.choices, default=IdType.CNI)
    id_number  = models.CharField(_("numéro de pièce"), max_length=100, blank=True)
    notes      = models.CharField(_("notes"), max_length=255, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("passager")
        ordering = ["last_name", "first_name"]

    def __str__(self):
        return f"{self.full_name} ({self.phone})"

    @property
    def full_name(self) -> str:
        return f"{self.first_name} {self.last_name}".strip()

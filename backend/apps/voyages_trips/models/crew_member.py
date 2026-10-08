from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class CrewMember(BaseModel):
    company        = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                       on_delete=models.CASCADE, related_name="crew_members")
    name           = models.CharField(_("nom"), max_length=200, blank=True)
    agency         = models.ForeignKey("system_config.Agency", verbose_name=_("agence"),
                                       on_delete=models.SET_NULL, null=True, blank=True,
                                       related_name="crew_members")
    # Champs hérités (conservés pour les enregistrements existants ; l'UI utilise `name`)
    first_name     = models.CharField(_("prénom"), max_length=150, blank=True)
    last_name      = models.CharField(_("nom (hérité)"), max_length=150, blank=True)
    member_type    = models.ForeignKey("voyages_config.CrewMemberType", verbose_name=_("type"),
                                       on_delete=models.PROTECT, related_name="members")
    phone          = models.CharField(_("téléphone"), max_length=30, blank=True)
    id_card_number = models.CharField(_("n° carte d'identité"), max_length=50, blank=True)
    license_number = models.CharField(_("n° de permis"), max_length=50, blank=True)
    is_active      = models.BooleanField(_("actif"), default=True)
    notes          = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("personnel naviguant")
        verbose_name_plural = _("personnel naviguant")
        ordering = ["name", "last_name", "first_name"]

    @property
    def full_name(self):
        return self.name or f"{self.first_name} {self.last_name}".strip()

    def __str__(self):
        return self.full_name

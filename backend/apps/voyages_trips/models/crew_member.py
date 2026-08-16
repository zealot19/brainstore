from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class CrewMember(BaseModel):
    company        = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                       on_delete=models.CASCADE, related_name="crew_members")
    first_name     = models.CharField(_("prénom"), max_length=150)
    last_name      = models.CharField(_("nom"), max_length=150)
    member_type    = models.ForeignKey("voyages_config.CrewMemberType", verbose_name=_("type"),
                                       on_delete=models.PROTECT, related_name="members")
    phone          = models.CharField(_("téléphone"), max_length=30, blank=True)
    license_number = models.CharField(_("n° de permis"), max_length=50, blank=True)
    is_active      = models.BooleanField(_("actif"), default=True)
    notes          = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("membre d'équipage")
        verbose_name_plural = _("membres d'équipage")
        ordering = ["last_name", "first_name"]

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}".strip()

    def __str__(self):
        return self.full_name

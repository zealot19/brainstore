from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Agency(BaseModel):
    """Agence ou filiale d'une institution — hiérarchie illimitée."""

    class AgencyType(models.TextChoices):
        HEADQUARTERS = "hq",      _("Siège")
        BRANCH       = "branch",  _("Agence")
        SUBSIDIARY   = "sub",     _("Filiale")
        DEPOT        = "depot",   _("Dépôt")
        WAREHOUSE    = "wh",      _("Entrepôt")
        OFFICE       = "office",  _("Bureau")

    company     = models.ForeignKey(
        "system_config.Company", verbose_name=_("institution"),
        on_delete=models.CASCADE, related_name="agencies",
    )
    parent      = models.ForeignKey(
        "self", verbose_name=_("agence mère"),
        on_delete=models.SET_NULL, null=True, blank=True, related_name="children",
    )
    name        = models.CharField(_("nom"), max_length=200)
    code        = models.CharField(_("code agence"), max_length=30)
    agency_type = models.CharField(_("type"), max_length=20,
                                   choices=AgencyType.choices, default=AgencyType.BRANCH)
    email       = models.EmailField(_("email"), blank=True)
    phone       = models.CharField(_("téléphone"), max_length=30, blank=True)
    address     = models.ForeignKey(
        "core.Address", verbose_name=_("adresse"),
        on_delete=models.SET_NULL, null=True, blank=True, related_name="+",
    )
    manager     = models.ForeignKey(
        settings.AUTH_USER_MODEL, verbose_name=_("responsable"),
        on_delete=models.SET_NULL, null=True, blank=True, related_name="managed_agencies",
    )
    currency    = models.ForeignKey(
        "core.Currency", verbose_name=_("devise locale"),
        on_delete=models.SET_NULL, null=True, blank=True, related_name="+",
    )

    class Meta(BaseModel.Meta):
        verbose_name        = _("agence")
        verbose_name_plural = _("agences")
        unique_together     = [("company", "code")]

    def __str__(self):
        return f"{self.company.name} — {self.name}"

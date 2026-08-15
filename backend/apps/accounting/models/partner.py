from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Partner(BaseModel):
    class Type(models.TextChoices):
        CUSTOMER = "customer", _("Client")
        SUPPLIER = "supplier", _("Fournisseur")
        EMPLOYEE = "employee", _("Employé")
        TAX      = "tax", _("Administration fiscale")
        SOCIAL   = "social", _("Organisme social")
        OTHER    = "other", _("Autre")

    company      = models.ForeignKey("system_config.Company", on_delete=models.CASCADE, related_name="partners")
    partner_type = models.CharField(_("type"), max_length=12, choices=Type.choices, default=Type.OTHER)
    name         = models.CharField(_("nom"), max_length=255)
    source_model = models.CharField(_("modèle source"), max_length=60, blank=True)
    source_id    = models.UUIDField(_("id source"), null=True, blank=True)
    active       = models.BooleanField(_("actif"), default=True)
    note         = models.TextField(_("note"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("partenaire")
        verbose_name_plural = _("partenaires")
        ordering = ["name"]

    def __str__(self):
        return self.name

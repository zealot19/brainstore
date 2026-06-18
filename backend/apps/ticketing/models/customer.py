from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Customer(BaseModel):
    """A passenger — not necessarily a system user."""

    class IdType(models.TextChoices):
        CNI            = "cni",            _("National ID Card")
        PASSPORT       = "passport",       _("Passport")
        DRIVER_LICENSE = "driver_license", _("Driver's License")
        OTHER          = "other",          _("Other")

    company    = models.ForeignKey("system_config.Company", verbose_name=_("company"),
                                    on_delete=models.CASCADE, related_name="customers")
    first_name = models.CharField(_("first name"), max_length=100)
    last_name  = models.CharField(_("last name"),  max_length=100)
    phone      = models.CharField(_("phone"), max_length=30)
    email      = models.EmailField(_("email"), blank=True)
    id_type    = models.CharField(_("ID type"), max_length=20, choices=IdType.choices,
                                   default=IdType.CNI)
    id_number  = models.CharField(_("ID number"), max_length=50, blank=True)
    date_of_birth = models.DateField(_("date of birth"), null=True, blank=True)
    notes      = models.CharField(_("notes"), max_length=255, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("customer")
        verbose_name_plural = _("customers")
        ordering = ["last_name", "first_name"]

    def __str__(self):
        return f"{self.full_name} ({self.phone})"

    @property
    def full_name(self) -> str:
        return f"{self.first_name} {self.last_name}".strip()

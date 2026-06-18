from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class FareClass(BaseModel):
    """Service class (Standard, VIP, Business…).
    company=None → shared system-wide.
    """

    company     = models.ForeignKey("system_config.Company", verbose_name=_("company"),
                                     on_delete=models.CASCADE, null=True, blank=True,
                                     related_name="fare_classes")
    name        = models.CharField(_("name"), max_length=100)
    description = models.TextField(_("description"), blank=True)
    is_active   = models.BooleanField(_("active"), default=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("fare class")
        verbose_name_plural = _("fare classes")
        ordering = ["name"]

    def __str__(self):
        return self.name


class Fare(BaseModel):
    """Price for a route + vehicle category + fare class + passenger type."""

    class PassengerType(models.TextChoices):
        ADULT   = "adult",   _("Adult")
        CHILD   = "child",   _("Child")
        STUDENT = "student", _("Student")
        SENIOR  = "senior",  _("Senior")

    company          = models.ForeignKey("system_config.Company", verbose_name=_("company"),
                                          on_delete=models.CASCADE, related_name="fares")
    route            = models.ForeignKey("transport_config.Route", verbose_name=_("route"),
                                          on_delete=models.CASCADE, related_name="fares")
    vehicle_category = models.ForeignKey("transport_config.VehicleCategory",
                                          verbose_name=_("vehicle category"),
                                          on_delete=models.CASCADE, related_name="fares")
    fare_class       = models.ForeignKey("transport_config.FareClass", verbose_name=_("fare class"),
                                          on_delete=models.CASCADE, related_name="fares")
    passenger_type   = models.CharField(_("passenger type"), max_length=20,
                                         choices=PassengerType.choices,
                                         default=PassengerType.ADULT)
    amount           = models.DecimalField(_("amount"), max_digits=12, decimal_places=2)
    currency         = models.CharField(_("currency"), max_length=5, default="XAF")
    is_active        = models.BooleanField(_("active"), default=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("fare")
        verbose_name_plural = _("fares")
        ordering = ["route", "vehicle_category", "fare_class", "passenger_type"]
        unique_together = [("route", "vehicle_category", "fare_class", "passenger_type")]

    def __str__(self):
        return (
            f"{self.route} | {self.vehicle_category.name} | "
            f"{self.fare_class.name} | {self.passenger_type} — {self.amount} {self.currency}"
        )

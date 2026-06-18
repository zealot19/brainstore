from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class VehicleCategory(BaseModel):
    """Transport vehicle category with seating plan and onboard amenities.
    company=None → shared system-wide default.
    """

    company      = models.ForeignKey("system_config.Company", verbose_name=_("company"),
                                      on_delete=models.CASCADE, null=True, blank=True,
                                      related_name="vehicle_categories")
    name         = models.CharField(_("name"), max_length=150,
                                     help_text=_("e.g. Standard 30-seat, VIP Coach 20-seat"))
    total_seats  = models.PositiveSmallIntegerField(_("total seats"))

    # ── Seat layout ───────────────────────────────────────────────────────────
    seat_rows        = models.PositiveSmallIntegerField(_("rows"), default=8)
    seat_cols        = models.PositiveSmallIntegerField(_("columns"), default=4,
                                                         help_text=_("Total columns including aisle."))
    aisle_after_col  = models.PositiveSmallIntegerField(_("aisle after column"), default=2,
                                                          help_text=_("e.g. 2 means aisle between col 2 and 3."))
    has_back_row     = models.BooleanField(_("full back row"), default=True)
    free_seating     = models.BooleanField(_("free seating"), default=False,
                                            help_text=_("If True, passengers do not pick a specific seat."))

    # ── Onboard amenities ─────────────────────────────────────────────────────
    has_wifi  = models.BooleanField(_("Wi-Fi"), default=False)
    has_ac    = models.BooleanField(_("air conditioning"), default=False)
    has_tv    = models.BooleanField(_("TV / screen"), default=False)
    has_usb   = models.BooleanField(_("USB charging"), default=False)
    has_snack = models.BooleanField(_("snack / meal"), default=False)

    description = models.TextField(_("description"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("vehicle category")
        verbose_name_plural = _("vehicle categories")
        ordering = ["name"]

    def __str__(self):
        return f"{self.name} ({self.total_seats} seats)"

    @property
    def amenities_list(self):
        amenities = []
        if self.has_wifi:  amenities.append("Wi-Fi")
        if self.has_ac:    amenities.append("AC")
        if self.has_tv:    amenities.append("TV")
        if self.has_usb:   amenities.append("USB")
        if self.has_snack: amenities.append("Snack")
        return amenities

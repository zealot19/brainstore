from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Parcel(BaseModel):
    """A package shipped between two terminals, optionally on a Trip."""

    class Status(models.TextChoices):
        REGISTERED = "registered", _("Registered")
        SHIPPED    = "shipped",    _("Shipped")
        RECEIVED   = "received",   _("Received")   # at destination terminal
        DELIVERED  = "delivered",  _("Delivered")  # handed to recipient
        RETURNED   = "returned",   _("Returned")
        LOST       = "lost",       _("Lost")

    class PaymentStatus(models.TextChoices):
        UNPAID = "unpaid", _("Unpaid")
        PAID   = "paid",   _("Paid")
        COD    = "cod",    _("Cash on Delivery")   # paid upon delivery

    class PaymentMode(models.TextChoices):
        CASH         = "cash",          _("Cash")
        MOBILE_MONEY = "mobile_money",  _("Mobile Money")
        TRANSFER     = "transfer",      _("Bank Transfer")

    # ── Ownership ──────────────────────────────────────────────────────────────
    company   = models.ForeignKey("system_config.Company", verbose_name=_("company"),
                                   on_delete=models.CASCADE, related_name="parcels")
    reference = models.CharField(_("reference"), max_length=30, blank=True)

    # ── Route ──────────────────────────────────────────────────────────────────
    from_terminal = models.ForeignKey("transport_config.Terminal",
                                       verbose_name=_("origin terminal"),
                                       on_delete=models.PROTECT,
                                       related_name="parcels_sent")
    to_terminal   = models.ForeignKey("transport_config.Terminal",
                                       verbose_name=_("destination terminal"),
                                       on_delete=models.PROTECT,
                                       related_name="parcels_received")
    trip          = models.ForeignKey("voyage.Trip", verbose_name=_("trip"),
                                       on_delete=models.SET_NULL,
                                       null=True, blank=True,
                                       related_name="parcels")

    # ── Sender ─────────────────────────────────────────────────────────────────
    sender_name  = models.CharField(_("sender name"),  max_length=150)
    sender_phone = models.CharField(_("sender phone"), max_length=30)

    # ── Recipient ──────────────────────────────────────────────────────────────
    recipient_name    = models.CharField(_("recipient name"),    max_length=150)
    recipient_phone   = models.CharField(_("recipient phone"),   max_length=30)
    recipient_address = models.CharField(_("recipient address"), max_length=255, blank=True)

    # ── Content ────────────────────────────────────────────────────────────────
    description    = models.CharField(_("description"), max_length=255, blank=True)
    weight_kg      = models.DecimalField(_("weight (kg)"), max_digits=6, decimal_places=3,
                                          null=True, blank=True)
    quantity       = models.PositiveSmallIntegerField(_("quantity"), default=1)
    declared_value = models.DecimalField(_("declared value"), max_digits=10, decimal_places=2,
                                          null=True, blank=True)

    # ── Pricing & payment ──────────────────────────────────────────────────────
    shipping_amount = models.DecimalField(_("shipping amount"), max_digits=10, decimal_places=2,
                                           default=0)
    payment_status  = models.CharField(_("payment status"), max_length=10,
                                        choices=PaymentStatus.choices,
                                        default=PaymentStatus.UNPAID)
    payment_mode    = models.CharField(_("payment mode"), max_length=20,
                                        choices=PaymentMode.choices,
                                        blank=True)
    paid_at         = models.DateTimeField(_("paid at"), null=True, blank=True)
    paid_by         = models.ForeignKey(settings.AUTH_USER_MODEL,
                                         verbose_name=_("collected by"),
                                         on_delete=models.SET_NULL,
                                         null=True, blank=True,
                                         related_name="parcel_payments")

    # ── Status ─────────────────────────────────────────────────────────────────
    status = models.CharField(_("status"), max_length=20, choices=Status.choices,
                               default=Status.REGISTERED)
    notes  = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("parcel")
        verbose_name_plural = _("parcels")
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.reference} — {self.sender_name} → {self.recipient_name}"

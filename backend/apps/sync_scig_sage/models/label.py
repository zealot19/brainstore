from django.db import models
from apps.core.models import BaseModel


class LabelCampaign(BaseModel):
    """
    Promotional campaign for label printing (prix soldé).
    """
    company = models.ForeignKey(
        "system_config.Company",
        on_delete=models.CASCADE,
        related_name="label_campaigns",
    )
    name = models.CharField(max_length=150)
    description = models.TextField(blank=True, default="")
    discount_percent = models.DecimalField(
        max_digits=5, decimal_places=2, null=True, blank=True,
        help_text="Remise en % appliquée au prix normal",
    )
    starts_at = models.DateTimeField(null=True, blank=True)
    ends_at = models.DateTimeField(null=True, blank=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.name


class LabelPrintJob(BaseModel):
    """
    A print job — one or multiple label prints triggered from mobile.
    """
    class PrintType(models.TextChoices):
        NORMAL    = "NORMAL",    "Prix normal"
        SALE      = "SALE",      "Prix soldé"
        CAMPAIGN  = "CAMPAIGN",  "Campagne"

    company = models.ForeignKey(
        "system_config.Company",
        on_delete=models.CASCADE,
        related_name="label_print_jobs",
    )
    campaign = models.ForeignKey(
        LabelCampaign,
        null=True, blank=True,
        on_delete=models.SET_NULL,
        related_name="print_jobs",
    )
    print_type = models.CharField(
        max_length=10, choices=PrintType.choices, default=PrintType.NORMAL
    )
    # JSON list of variant IDs + qty to print per variant
    # [{"variant_id": "...", "qty": 3}, ...]
    print_data = models.JSONField(default=list)
    device_id = models.CharField(max_length=150, blank=True, default="")
    printed_at = models.DateTimeField(null=True, blank=True)
    total_labels = models.PositiveIntegerField(default=0)
    notes = models.TextField(blank=True, default="")

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return (
            f"Print job #{str(self.id)[:8]} "
            f"[{self.print_type}] — {self.total_labels} étiquette(s)"
        )

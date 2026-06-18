from django.db import models
from apps.core.models import BaseModel


class StockTransfer(BaseModel):
    """
    Inter-depot stock transfer.
    Workflow: DRAFT → VALIDATED → SHIPPED → RECEIVED
    """
    class Status(models.TextChoices):
        DRAFT     = "DRAFT",     "Brouillon"
        VALIDATED = "VALIDATED", "Validé"
        SHIPPED   = "SHIPPED",   "Expédié"
        RECEIVED  = "RECEIVED",  "Réceptionné"
        CANCELLED = "CANCELLED", "Annulé"

    company = models.ForeignKey(
        "system_config.Company",
        on_delete=models.CASCADE,
        related_name="stock_transfers",
    )
    reference = models.CharField(max_length=30, unique=True, db_index=True)
    source_depot = models.ForeignKey(
        "sync_scig_sage.Depot",
        on_delete=models.PROTECT,
        related_name="transfers_out",
    )
    destination_depot = models.ForeignKey(
        "sync_scig_sage.Depot",
        on_delete=models.PROTECT,
        related_name="transfers_in",
    )
    status = models.CharField(
        max_length=15, choices=Status.choices, default=Status.DRAFT
    )
    notes = models.TextField(blank=True, default="")
    validated_at = models.DateTimeField(null=True, blank=True)
    validated_by = models.ForeignKey(
        "authentication.User",
        null=True, blank=True,
        on_delete=models.SET_NULL,
        related_name="validated_transfers",
    )
    shipped_at = models.DateTimeField(null=True, blank=True)
    shipped_by = models.ForeignKey(
        "authentication.User",
        null=True, blank=True,
        on_delete=models.SET_NULL,
        related_name="shipped_transfers",
    )
    received_at = models.DateTimeField(null=True, blank=True)
    received_by = models.ForeignKey(
        "authentication.User",
        null=True, blank=True,
        on_delete=models.SET_NULL,
        related_name="received_transfers",
    )

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return (
            f"{self.reference} | {self.source_depot.name} "
            f"→ {self.destination_depot.name} [{self.status}]"
        )


class StockTransferLine(BaseModel):
    """
    One article variant line within a transfer.
    qty_planned: set when adding to transfer.
    qty_shipped: confirmed at shipping.
    qty_received: confirmed at reception (may differ — generates variance).
    """
    transfer = models.ForeignKey(
        StockTransfer,
        on_delete=models.CASCADE,
        related_name="lines",
    )
    variant = models.ForeignKey(
        "sync_scig_sage.ArticleVariant",
        on_delete=models.PROTECT,
        related_name="transfer_lines",
    )
    qty_planned = models.DecimalField(max_digits=12, decimal_places=3, default=0)
    qty_shipped = models.DecimalField(max_digits=12, decimal_places=3, default=0)
    qty_received = models.DecimalField(max_digits=12, decimal_places=3, default=0)

    class Meta:
        unique_together = ("transfer", "variant")
        ordering = ["variant__article__designation"]

    @property
    def variance(self):
        return self.qty_received - self.qty_shipped

    def __str__(self):
        return (
            f"{self.transfer.reference} / {self.variant} "
            f"planifié={self.qty_planned} reçu={self.qty_received}"
        )

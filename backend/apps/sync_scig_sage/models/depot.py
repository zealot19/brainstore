import uuid
from django.db import models
from apps.core.models import BaseModel


class Depot(BaseModel):
    """
    Warehouse / store cached from Sage 100 (F_DEPOT).
    """
    company = models.ForeignKey(
        "system_config.Company",
        on_delete=models.CASCADE,
        related_name="scig_depots",
    )
    sage_depot_no = models.IntegerField(db_index=True)
    name = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)
    last_synced_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        unique_together = ("company", "sage_depot_no")
        ordering = ["name"]

    def __str__(self):
        return f"{self.name} (dépôt #{self.sage_depot_no})"


class StockLevel(models.Model):
    """
    Stock snapshot per (variant, depot) — fully replaced on each sync.
    Does not inherit BaseModel: no audit trail needed, replaced wholesale.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    depot = models.ForeignKey(
        Depot,
        on_delete=models.CASCADE,
        related_name="stock_levels",
    )
    variant = models.ForeignKey(
        "sync_scig_sage.ArticleVariant",
        on_delete=models.CASCADE,
        related_name="stock_levels",
    )
    stock_real = models.DecimalField(max_digits=12, decimal_places=3, default=0)
    stock_available = models.DecimalField(max_digits=12, decimal_places=3, default=0)
    stock_transit = models.DecimalField(max_digits=12, decimal_places=3, default=0)
    synced_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ("depot", "variant")

    def __str__(self):
        return (
            f"{self.variant} @ {self.depot.name} "
            f"— réel: {self.stock_real} / dispo: {self.stock_available}"
        )

import uuid
from django.db import models
from django.utils import timezone
from apps.core.models import BaseModel


class ZoneStatus(models.TextChoices):
    NOT_STARTED = "NOT_STARTED", "Non commencée"
    IN_PROGRESS = "IN_PROGRESS", "En cours"
    SUBMITTED   = "SUBMITTED",   "En attente de vérification"
    RECHECK     = "RECHECK",     "À revérifier"
    VALIDATED   = "VALIDATED",   "Validée"


class InventorySession(BaseModel):
    """
    One inventory event for a given depot.
    Created by the manager on the Dashboard.
    """
    class Status(models.TextChoices):
        OPEN   = "OPEN",   "Ouvert"
        CLOSED = "CLOSED", "Clôturé"

    company = models.ForeignKey(
        "system_config.Company",
        on_delete=models.CASCADE,
        related_name="inventory_sessions",
    )
    name = models.CharField(max_length=100)  # ex: INV-2025-11-NOV
    depot = models.ForeignKey(
        "sync_scig_sage.Depot",
        on_delete=models.PROTECT,
        related_name="inventory_sessions",
    )
    opened_at = models.DateTimeField(default=timezone.now)
    closed_at = models.DateTimeField(null=True, blank=True)
    status = models.CharField(
        max_length=10, choices=Status.choices, default=Status.OPEN
    )
    submitted_to_sage_at = models.DateTimeField(null=True, blank=True)
    submitted_by = models.ForeignKey(
        "authentication.User",
        null=True, blank=True,
        on_delete=models.SET_NULL,
        related_name="submitted_inventory_sessions",
    )
    notes = models.TextField(blank=True, default="")

    class Meta:
        ordering = ["-opened_at"]

    def __str__(self):
        return f"{self.name} — {self.depot.name}"

    @property
    def all_zones_validated(self):
        return self.zones.filter(is_deleted=False).exclude(
            status=ZoneStatus.VALIDATED
        ).count() == 0


class InventoryZone(BaseModel):
    """
    Physical zone inside an inventory session.
    Locked to one Zebra device at a time while IN_PROGRESS.
    """
    session = models.ForeignKey(
        InventorySession,
        on_delete=models.CASCADE,
        related_name="zones",
    )
    name = models.CharField(max_length=100)  # ex: Zone 1 — Femme
    status = models.CharField(
        max_length=15,
        choices=ZoneStatus.choices,
        default=ZoneStatus.NOT_STARTED,
    )
    # Device identifier sent by the Zebra terminal (serial or UUID)
    locked_by_device = models.CharField(max_length=150, blank=True, default="")
    locked_by = models.ForeignKey(
        "authentication.User",
        null=True, blank=True,
        on_delete=models.SET_NULL,
        related_name="locked_inventory_zones",
    )
    submitted_at = models.DateTimeField(null=True, blank=True)
    validated_at = models.DateTimeField(null=True, blank=True)
    validated_by = models.ForeignKey(
        "authentication.User",
        null=True, blank=True,
        on_delete=models.SET_NULL,
        related_name="validated_inventory_zones",
    )
    recheck_note = models.TextField(blank=True, default="")

    class Meta:
        unique_together = ("session", "name")
        ordering = ["name"]

    def __str__(self):
        return f"{self.session.name} / {self.name} [{self.status}]"

    @property
    def is_locked(self):
        return self.status == ZoneStatus.IN_PROGRESS and bool(self.locked_by_device)


class InventoryLine(BaseModel):
    """
    Counted quantity per (zone, variant).
    qty_counted is incremented on each scan of the same variant.
    qty_theoretical is copied from Sage stock at zone open time.
    """
    zone = models.ForeignKey(
        InventoryZone,
        on_delete=models.CASCADE,
        related_name="lines",
    )
    variant = models.ForeignKey(
        "sync_scig_sage.ArticleVariant",
        on_delete=models.PROTECT,
        related_name="inventory_lines",
    )
    qty_theoretical = models.DecimalField(
        max_digits=12, decimal_places=3, default=0,
        help_text="Stock Sage au moment de l'ouverture de la zone",
    )
    qty_counted = models.DecimalField(max_digits=12, decimal_places=3, default=0)
    is_manual = models.BooleanField(
        default=False, help_text="True si saisie manuelle (non scanné)"
    )
    last_scanned_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        unique_together = ("zone", "variant")
        ordering = ["variant__article__designation", "variant__size", "variant__color"]

    @property
    def variance(self):
        return self.qty_counted - self.qty_theoretical

    def __str__(self):
        return (
            f"{self.zone.name} / {self.variant} "
            f"théorique={self.qty_theoretical} compté={self.qty_counted}"
        )

import uuid
from django.db import models
from apps.core.models import BaseModel


class SyncLog(models.Model):
    """
    History of Sage 100 SQL synchronisation runs.
    Immutable log — inherits models.Model (not BaseModel).
    """
    class SyncType(models.TextChoices):
        DEPOTS   = "DEPOTS",   "Dépôts"
        ARTICLES = "ARTICLES", "Articles & variantes"
        STOCK    = "STOCK",    "Niveaux de stock"
        FULL     = "FULL",     "Sync complète"

    class Status(models.TextChoices):
        SUCCESS = "SUCCESS", "Succès"
        PARTIAL = "PARTIAL", "Partiel"
        FAILED  = "FAILED",  "Échec"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    company = models.ForeignKey(
        "system_config.Company",
        on_delete=models.CASCADE,
        related_name="sync_logs",
    )
    sync_type = models.CharField(max_length=15, choices=SyncType.choices)
    status = models.CharField(max_length=10, choices=Status.choices)
    started_at = models.DateTimeField()
    finished_at = models.DateTimeField(null=True, blank=True)
    records_read = models.PositiveIntegerField(default=0)
    records_created = models.PositiveIntegerField(default=0)
    records_updated = models.PositiveIntegerField(default=0)
    records_failed = models.PositiveIntegerField(default=0)
    error_message = models.TextField(blank=True, default="")
    triggered_by = models.ForeignKey(
        "authentication.User",
        null=True, blank=True,
        on_delete=models.SET_NULL,
        related_name="sage_sync_logs",
    )

    class Meta:
        ordering = ["-started_at"]

    def __str__(self):
        return f"[{self.sync_type}] {self.started_at:%Y-%m-%d %H:%M} — {self.status}"


class SyncQueue(BaseModel):
    """
    Offline operations queued on the Zebra device and pushed to the server
    when connectivity is restored.
    The server processes them in chronological order (device_timestamp).
    """
    class OperationType(models.TextChoices):
        INVENTORY_SCAN   = "INVENTORY_SCAN",   "Scan inventaire"
        INVENTORY_SUBMIT = "INVENTORY_SUBMIT", "Transmission zone"
        TRANSFER_SCAN    = "TRANSFER_SCAN",    "Scan transfert"
        TRANSFER_RECEIVE = "TRANSFER_RECEIVE", "Réception transfert"

    class QueueStatus(models.TextChoices):
        PENDING   = "PENDING",   "En attente"
        PROCESSED = "PROCESSED", "Traité"
        FAILED    = "FAILED",    "Échoué"
        SKIPPED   = "SKIPPED",   "Ignoré (conflit)"

    company = models.ForeignKey(
        "system_config.Company",
        on_delete=models.CASCADE,
        related_name="sync_queue_items",
    )
    operation_type = models.CharField(max_length=20, choices=OperationType.choices)
    # Unique ID generated on the device to allow idempotent processing
    device_operation_id = models.CharField(max_length=50, unique=True, db_index=True)
    device_id = models.CharField(max_length=150, blank=True, default="")
    # ISO timestamp from device at time of operation
    device_timestamp = models.DateTimeField()
    # Full operation payload (varies by operation_type)
    payload = models.JSONField()
    status = models.CharField(
        max_length=10, choices=QueueStatus.choices, default=QueueStatus.PENDING
    )
    processed_at = models.DateTimeField(null=True, blank=True)
    error_detail = models.TextField(blank=True, default="")

    class Meta:
        ordering = ["device_timestamp"]

    def __str__(self):
        return (
            f"{self.operation_type} [{self.status}] "
            f"— device {self.device_id} @ {self.device_timestamp:%Y-%m-%d %H:%M}"
        )

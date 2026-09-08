import uuid
from datetime import timedelta

from django.conf import settings
from django.db import models
from django.utils import timezone


class ChangeLog(models.Model):
    """Append-only outbox of local row changes (CDC) for multi-instance sync.

    Instance-local infrastructure — never synced itself (hence a plain integer PK).
    `version` (the row's updated_at) drives last-write/master-wins conflict
    resolution; `created_at`/`id` is the local push cursor.
    """
    OP_UPSERT = "upsert"
    OP_DELETE = "delete"
    OP_CHOICES = [(OP_UPSERT, "upsert"), (OP_DELETE, "delete")]

    entity = models.CharField(max_length=100, db_index=True)   # "app_label.modelname"
    object_id = models.UUIDField(db_index=True)
    op = models.CharField(max_length=10, choices=OP_CHOICES)
    payload = models.JSONField(default=dict, blank=True)       # full-row snapshot (upsert)
    version = models.DateTimeField()                            # row updated_at (conflict)
    origin_node = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    synced_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        ordering = ["created_at", "id"]
        indexes = [models.Index(fields=["synced_at", "id"])]

    def __str__(self):
        return f"{self.op} {self.entity}:{self.object_id}"


class AgencyPresence(models.Model):
    """Master-side liveness of each agency node (for online seat-authority relay)."""
    agency = models.OneToOneField("system_config.Agency", on_delete=models.CASCADE,
                                  related_name="sync_presence")
    last_seen = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.agency_id} @ {self.last_seen}"


class OnlineBookingJob(models.Model):
    """Master-side relay: an online booking to be authored by the origin agency."""
    PENDING, DONE, FAILED, EXPIRED = "pending", "done", "failed", "expired"
    STATUS = [(PENDING, "pending"), (DONE, "done"), (FAILED, "failed"), (EXPIRED, "expired")]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    trip_id = models.UUIDField()
    agency = models.ForeignKey("system_config.Agency", on_delete=models.CASCADE,
                               related_name="online_booking_jobs")
    passenger_name = models.CharField(max_length=150)
    passenger_phone = models.CharField(max_length=30)
    passenger_email = models.EmailField(blank=True)
    payment_method = models.CharField(max_length=20, blank=True)
    payment_phone = models.CharField(max_length=30, blank=True)
    status = models.CharField(max_length=10, choices=STATUS, default=PENDING, db_index=True)
    result = models.JSONField(default=dict, blank=True)
    error = models.CharField(max_length=300, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField()

    class Meta:
        ordering = ["created_at"]

    def save(self, *args, **kwargs):
        if not self.expires_at:
            ttl = getattr(settings, "SYNC_JOB_TIMEOUT", 15) * 2
            self.expires_at = timezone.now() + timedelta(seconds=ttl)
        super().save(*args, **kwargs)


class SyncCursor(models.Model):
    """Agency-side watermark: last ChangeLog id pulled from the master."""
    pull_cursor = models.BigIntegerField(default=0)
    updated_at = models.DateTimeField(auto_now=True)

    @classmethod
    def get(cls):
        obj, _ = cls.objects.get_or_create(pk=1)
        return obj


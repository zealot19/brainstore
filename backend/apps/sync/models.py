from django.db import models


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

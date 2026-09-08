from django.conf import settings
from django.core.management.base import BaseCommand
from django.utils import timezone

from apps.sync import registry
from apps.sync.apply import apply_change
from apps.sync.client import request_json as _req
from apps.sync.models import ChangeLog, SyncCursor
from apps.sync.serializers import entry_to_dict

_BATCH = 500


class Command(BaseCommand):
    help = "Agency worker: push local UP changes to the master, pull DOWN changes."

    def handle(self, *args, **opts):
        master = (getattr(settings, "SYNC_MASTER_URL", "") or "").rstrip("/")
        token = getattr(settings, "SYNC_TOKEN", "")
        if not master or not token:
            self.stderr.write("SYNC_MASTER_URL / SYNC_TOKEN non configurés.")
            return

        # 1) Push agency-owned (UP) changes not yet synced.
        up = registry.labels_for_direction(registry.UP)
        pending = list(ChangeLog.objects.filter(synced_at__isnull=True, entity__in=up)
                       .order_by("id")[:_BATCH])
        if pending:
            _req(f"{master}/sync/push/", token, "POST",
                 {"changes": [entry_to_dict(c) for c in pending]})
            ChangeLog.objects.filter(id__in=[c.id for c in pending]).update(synced_at=timezone.now())
            self.stdout.write(f"Poussé {len(pending)} changement(s).")

        # 2) Pull master config (DOWN) changes since the watermark and apply them.
        cursor = SyncCursor.get()
        resp = _req(f"{master}/sync/pull/?since={cursor.pull_cursor}", token)
        changes = resp.get("changes", [])
        for entry in changes:
            apply_change(entry)
        new_cursor = resp.get("cursor", cursor.pull_cursor)
        if new_cursor != cursor.pull_cursor:
            cursor.pull_cursor = new_cursor
            cursor.save(update_fields=["pull_cursor", "updated_at"])
        self.stdout.write(f"Tiré {len(changes)} changement(s).")

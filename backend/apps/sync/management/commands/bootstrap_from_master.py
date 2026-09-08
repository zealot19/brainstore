from django.conf import settings
from django.core.management.base import BaseCommand
from django.db import connection, transaction

from apps.sync.apply import apply_change
from apps.sync.client import request_json
from apps.sync.models import SyncCursor


class Command(BaseCommand):
    help = "Seed a fresh agency from the master's full config snapshot, then set the pull watermark."

    def handle(self, *args, **opts):
        master = (getattr(settings, "SYNC_MASTER_URL", "") or "").rstrip("/")
        token = getattr(settings, "SYNC_TOKEN", "")
        if not master or not token:
            self.stderr.write("SYNC_MASTER_URL / SYNC_TOKEN non configurés.")
            return

        resp = request_json(f"{master}/sync/snapshot/", token)
        changes = resp.get("changes", [])
        # FK-dependency ordering is best-effort (registration order); defer constraint
        # checks so self-referential / cross-model rows apply regardless of order.
        with transaction.atomic():
            with connection.constraint_checks_disabled():
                for entry in changes:
                    apply_change(entry)

        cursor = SyncCursor.get()
        cursor.pull_cursor = resp.get("cursor", 0)
        cursor.save(update_fields=["pull_cursor", "updated_at"])
        self.stdout.write(f"Bootstrap terminé : {len(changes)} enregistrement(s) appliqués.")

from django.conf import settings
from django.core.management.base import BaseCommand
from django.utils import timezone

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

        # 1) Push ALL locally-originated changes not yet synced (toutes les tables
        #    synchronisables, pas seulement l'ancien sous-ensemble UP). Le ChangeLog
        #    de l'agence ne contient que des écritures locales (l'application des
        #    changements distants se fait sous suspend_capture -> aucun écho), donc
        #    on filtre par origin_node = ce nœud pour ne pousser que le local.
        me = getattr(settings, "NODE_ID", "") or getattr(settings, "NODE_ROLE", "")
        pending = list(ChangeLog.objects.filter(synced_at__isnull=True, origin_node=me)
                       .order_by("id")[:_BATCH])
        if pending:
            _req(f"{master}/sync/push/", token, "POST",
                 {"changes": [entry_to_dict(c) for c in pending]})
            ChangeLog.objects.filter(id__in=[c.id for c in pending]).update(synced_at=timezone.now())
            self.stdout.write(f"Poussé {len(pending)} changement(s).")

        # 2) Pull tous les changements depuis le watermark (config master + données
        #    des autres agences), sauf les nôtres (filtrés par node), et applique.
        cursor = SyncCursor.get()
        resp = _req(f"{master}/sync/pull/?since={cursor.pull_cursor}&node={me}", token)
        changes = resp.get("changes", [])
        for entry in changes:
            apply_change(entry)
        new_cursor = resp.get("cursor", cursor.pull_cursor)
        if new_cursor != cursor.pull_cursor:
            cursor.pull_cursor = new_cursor
            cursor.save(update_fields=["pull_cursor", "updated_at"])
        self.stdout.write(f"Tiré {len(changes)} changement(s).")

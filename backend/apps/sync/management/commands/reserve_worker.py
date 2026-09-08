from django.conf import settings
from django.core.management.base import BaseCommand

from apps.core.exceptions import ApplicationError
from apps.sync.client import request_json
from apps.sync.reserve import author_booking


class Command(BaseCommand):
    help = "Agency worker: heartbeat, then fulfil online-booking relay jobs from the master."

    def handle(self, *args, **opts):
        master = (getattr(settings, "SYNC_MASTER_URL", "") or "").rstrip("/")
        token = getattr(settings, "SYNC_TOKEN", "")
        agency_id = getattr(settings, "NODE_AGENCY_ID", "")
        if not (master and token and agency_id):
            self.stderr.write("SYNC_MASTER_URL / SYNC_TOKEN / NODE_AGENCY_ID non configurés.")
            return

        request_json(f"{master}/sync/heartbeat/", token, "POST", {"agency_id": agency_id})

        resp = request_json(f"{master}/sync/jobs/poll/?agency_id={agency_id}", token)
        for job in resp.get("jobs", []):
            try:
                result = author_booking(job)
                request_json(f"{master}/sync/jobs/result/", token, "POST",
                             {"job_id": job["id"], "status": "done", "result": result})
            except ApplicationError as e:
                request_json(f"{master}/sync/jobs/result/", token, "POST",
                             {"job_id": job["id"], "status": "failed", "error": str(e)})
        self.stdout.write(f"Traité {len(resp.get('jobs', []))} tâche(s).")

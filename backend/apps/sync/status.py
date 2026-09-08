"""Master-side sync health snapshot (for the admin monitoring view)."""
from django.conf import settings
from django.db.models import Count

from apps.sync.models import AgencyPresence, OnlineBookingJob
from apps.sync.presence import is_agency_online


def sync_status() -> dict:
    agencies = []
    for p in AgencyPresence.objects.select_related("agency").all():
        agencies.append({
            "agency_id": str(p.agency_id),
            "name": p.agency.name,
            "last_seen": p.last_seen.isoformat(),
            "online": is_agency_online(p.agency_id),
        })

    counts = {c["status"]: c["n"]
              for c in OnlineBookingJob.objects.values("status").annotate(n=Count("id"))}
    jobs = {s: counts.get(s, 0) for s in (
        OnlineBookingJob.PENDING, OnlineBookingJob.DONE,
        OnlineBookingJob.FAILED, OnlineBookingJob.EXPIRED)}

    failures = [{
        "job_id": str(j.id), "agency_id": str(j.agency_id),
        "error": j.error, "created_at": j.created_at.isoformat(),
    } for j in OnlineBookingJob.objects.filter(status=OnlineBookingJob.FAILED)
        .order_by("-created_at")[:20]]

    return {
        "node": {
            "role": getattr(settings, "NODE_ROLE", "master"),
            "sync_enabled": getattr(settings, "SYNC_ENABLED", False),
        },
        "agencies": agencies,
        "jobs": jobs,
        "recent_failures": failures,
    }

from datetime import timedelta

from django.conf import settings
from django.utils import timezone

from apps.sync.models import AgencyPresence


def touch(agency_id):
    """Record a heartbeat from an agency (upsert last_seen=now)."""
    obj, _ = AgencyPresence.objects.update_or_create(agency_id=agency_id)
    return obj


def is_agency_online(agency_id, ttl=None) -> bool:
    ttl = ttl if ttl is not None else getattr(settings, "SYNC_HEARTBEAT_TTL", 90)
    p = AgencyPresence.objects.filter(agency_id=agency_id).first()
    if not p:
        return False
    return timezone.now() - p.last_seen <= timedelta(seconds=ttl)

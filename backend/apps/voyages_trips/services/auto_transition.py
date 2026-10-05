"""Transitions automatiques des voyages (démarrage/arrêt) pour les sociétés qui
ont activé `VoyagesSettings.auto_manage_trips`. Idempotent : seules les transitions
PENDING->DEPARTED et DEPARTED->COMPLETED sont faites, gardées par le statut."""
import datetime as dt
import logging

from django.utils import timezone

from apps.voyages_config.models import VoyagesSettings
from apps.voyages_trips.models import Trip
from apps.voyages_trips.services.trip_services import depart_trip, complete_trip

log = logging.getLogger(__name__)


def run_auto_transitions(now=None) -> dict:
    now = now or timezone.now()
    departed = completed = skipped = 0
    for s in VoyagesSettings.objects.filter(auto_manage_trips=True).select_related("company"):
        lead = dt.timedelta(hours=s.departure_lead_hours or 0)
        grace = dt.timedelta(hours=s.arrival_grace_hours or 0)

        # Démarrage : voyages soumis (PENDING) dont le départ est dans la fenêtre d'avance.
        due = Trip.objects.filter(is_deleted=False, company_id=s.company_id,
                                  status=Trip.Status.PENDING,
                                  scheduled_departure__lte=now + lead)
        for trip in due:
            try:
                depart_trip(trip, user=None, lead_hours=s.departure_lead_hours or 0)
                departed += 1
            except Exception as e:  # une erreur sur un voyage ne stoppe pas le lot
                skipped += 1
                log.warning("auto-depart skipped trip %s: %s", trip.id, e)

        # Arrêt : voyages partis (DEPARTED) dont l'arrivée dépasse le délai d'arrêt.
        overdue = Trip.objects.filter(is_deleted=False, company_id=s.company_id,
                                      status=Trip.Status.DEPARTED,
                                      scheduled_arrival__lte=now - grace)
        for trip in overdue:
            try:
                complete_trip(trip, user=None)
                completed += 1
            except Exception as e:
                skipped += 1
                log.warning("auto-complete skipped trip %s: %s", trip.id, e)

    return {"departed": departed, "completed": completed, "skipped": skipped}

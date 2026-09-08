from django.conf import settings
from rest_framework.permissions import BasePermission, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.core.permissions import IsInstitutionAdmin
from apps.core.responses import success_response

from apps.sync import registry
from apps.sync.apply import apply_change
from apps.sync.models import ChangeLog
from apps.sync.schema import schema_fingerprint
from apps.sync.serializers import entry_to_dict

_PULL_BATCH = 500


class IsSyncPeer(BasePermission):
    """Authorise trusted instances via the shared SYNC_TOKEN bearer header."""
    message = "Jeton de synchronisation invalide."

    def has_permission(self, request, view):
        token = getattr(settings, "SYNC_TOKEN", "")
        if not token:
            return False
        return request.headers.get("Authorization", "") == f"Bearer {token}"


def _schema_mismatch(request):
    """None if the peer's schema matches ours; else a 409 Response to return."""
    incoming = request.headers.get("X-Schema-Version", "")
    if incoming != schema_fingerprint():
        return Response(
            {"detail": "Schéma incompatible entre instances : mettez à jour puis migrez "
                       "avant de synchroniser."},
            status=409,
        )
    return None


class SyncStatusView(APIView):
    """Admin monitoring: agency presence, relay-job counts, recent failures."""
    permission_classes = [IsAuthenticated, IsInstitutionAdmin]

    def get(self, request):
        from apps.sync.status import sync_status
        return success_response(sync_status())


class SyncHeartbeatView(APIView):
    """Agency → master: liveness ping (for online seat-authority relay)."""
    authentication_classes = []
    permission_classes = [IsSyncPeer]

    def post(self, request):
        mismatch = _schema_mismatch(request)
        if mismatch:
            return mismatch
        from apps.sync.presence import touch
        agency_id = request.data.get("agency_id")
        if not agency_id:
            return Response({"detail": "agency_id requis."}, status=400)
        touch(agency_id)
        return Response({"ok": True})


class SyncJobsPollView(APIView):
    """Agency long-poll: pending online-booking jobs for this agency."""
    authentication_classes = []
    permission_classes = [IsSyncPeer]

    def get(self, request):
        mismatch = _schema_mismatch(request)
        if mismatch:
            return mismatch
        from django.utils import timezone
        from apps.sync.models import OnlineBookingJob
        agency_id = request.query_params.get("agency_id")
        if not agency_id:
            return Response({"detail": "agency_id requis."}, status=400)
        jobs = OnlineBookingJob.objects.filter(
            agency_id=agency_id, status=OnlineBookingJob.PENDING,
            expires_at__gt=timezone.now())
        data = [{
            "id": str(j.id), "trip_id": str(j.trip_id),
            "passenger_name": j.passenger_name, "passenger_phone": j.passenger_phone,
            "passenger_email": j.passenger_email,
            "payment_method": j.payment_method, "payment_phone": j.payment_phone,
        } for j in jobs]
        return Response({"jobs": data})


class SyncJobsResultView(APIView):
    """Agency → master: report the outcome of an online-booking job."""
    authentication_classes = []
    permission_classes = [IsSyncPeer]

    def post(self, request):
        mismatch = _schema_mismatch(request)
        if mismatch:
            return mismatch
        from apps.sync.models import OnlineBookingJob
        job = OnlineBookingJob.objects.filter(id=request.data.get("job_id")).first()
        if not job:
            return Response({"detail": "Tâche introuvable."}, status=404)
        status_in = request.data.get("status")
        if status_in not in (OnlineBookingJob.DONE, OnlineBookingJob.FAILED):
            return Response({"detail": "statut invalide."}, status=400)
        job.status = status_in
        job.result = request.data.get("result") or {}
        job.error = request.data.get("error") or ""
        job.save(update_fields=["status", "result", "error"])
        return Response({"ok": True})


class SyncPushView(APIView):
    """Agency → master: apply a batch of agency-owned (UP) changes."""
    authentication_classes = []  # inter-instance token, not JWT
    permission_classes = [IsSyncPeer]

    def post(self, request):
        mismatch = _schema_mismatch(request)
        if mismatch:
            return mismatch
        changes = request.data.get("changes", []) or []
        applied = 0
        for entry in changes:
            try:
                if apply_change(entry) == "applied":
                    applied += 1
            except Exception:  # one bad entry must not abort the batch
                import logging
                logging.getLogger(__name__).exception("sync push apply failed: %s", entry.get("entity"))
        return Response({"received": len(changes), "applied": applied})


class SyncSnapshotView(APIView):
    """Master → new agency: full current DOWN config to seed a fresh instance."""
    authentication_classes = []
    permission_classes = [IsSyncPeer]

    def get(self, request):
        mismatch = _schema_mismatch(request)
        if mismatch:
            return mismatch
        from apps.sync.snapshot import full_down_snapshot
        entries = full_down_snapshot()
        cursor = ChangeLog.objects.order_by("-id").values_list("id", flat=True).first() or 0
        return Response({"changes": entries, "cursor": cursor})


class SyncPullView(APIView):
    """Master → agency: DOWN (config) changes since the given cursor."""
    authentication_classes = []  # inter-instance token, not JWT
    permission_classes = [IsSyncPeer]

    def get(self, request):
        mismatch = _schema_mismatch(request)
        if mismatch:
            return mismatch
        try:
            since = int(request.query_params.get("since", 0))
        except (TypeError, ValueError):
            since = 0
        down = registry.labels_for_direction(registry.DOWN)
        qs = (ChangeLog.objects.filter(id__gt=since, entity__in=down)
              .order_by("id")[:_PULL_BATCH])
        entries = [entry_to_dict(c) for c in qs]
        cursor = entries[-1]["id"] if entries else since
        return Response({"changes": entries, "cursor": cursor})

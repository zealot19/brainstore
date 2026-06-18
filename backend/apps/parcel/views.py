from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.core.permissions import IsAuthenticated
from apps.core.pagination import StandardResultsSetPagination
from apps.core.exceptions import ApplicationError

from apps.parcel import selectors, services
from apps.parcel.serializers import (
    ParcelReadSerializer, ParcelWriteSerializer, ParcelUpdateSerializer,
    ParcelTransitionSerializer, ParcelAssignTripSerializer, ParcelPaymentSerializer,
    ParcelEventSerializer, ParcelStatsSerializer,
)


def _company(request):
    return request.user.company


def _resolve_terminals(company, from_id, to_id):
    from apps.transport_config.models import Terminal
    terminals = Terminal.objects.filter(
        company=company, is_deleted=False, id__in=[from_id, to_id]
    )
    mapping = {str(t.id): t for t in terminals}
    from_t = mapping.get(str(from_id))
    to_t   = mapping.get(str(to_id))
    return from_t, to_t


# ── Parcels ────────────────────────────────────────────────────────────────────

class ParcelListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        params = request.query_params
        qs = selectors.list_parcels(
            _company(request).id,
            trip_id           = params.get("trip_id"),
            status            = params.get("status"),
            from_terminal_id  = params.get("from_terminal_id"),
            to_terminal_id    = params.get("to_terminal_id"),
            payment_status    = params.get("payment_status"),
            date_from         = params.get("date_from"),
            date_to           = params.get("date_to"),
            search            = params.get("search"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(ParcelReadSerializer(page, many=True).data)

    def post(self, request):
        company = _company(request)
        ser = ParcelWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data

        from_t, to_t = _resolve_terminals(company, d["from_terminal_id"], d["to_terminal_id"])
        if not from_t:
            return Response({"detail": "Origin terminal not found."}, status=status.HTTP_404_NOT_FOUND)
        if not to_t:
            return Response({"detail": "Destination terminal not found."}, status=status.HTTP_404_NOT_FOUND)

        trip = None
        if d.get("trip_id"):
            from apps.voyage.models import Trip
            try:
                trip = Trip.objects.get(id=d["trip_id"], company=company, is_deleted=False)
            except Trip.DoesNotExist:
                return Response({"detail": "Trip not found."}, status=status.HTTP_404_NOT_FOUND)

        try:
            parcel = services.create_parcel(
                company=company,
                from_terminal=from_t, to_terminal=to_t, trip=trip,
                sender_name=d["sender_name"], sender_phone=d["sender_phone"],
                recipient_name=d["recipient_name"], recipient_phone=d["recipient_phone"],
                recipient_address=d.get("recipient_address", ""),
                description=d.get("description", ""),
                weight_kg=d.get("weight_kg"), quantity=d.get("quantity", 1),
                declared_value=d.get("declared_value"),
                shipping_amount=d.get("shipping_amount", 0),
                payment_status=d.get("payment_status", "unpaid"),
                payment_mode=d.get("payment_mode", ""),
                notes=d.get("notes", ""),
                created_by=request.user,
            )
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        return Response(
            ParcelReadSerializer(selectors.get_parcel(parcel.id, company.id)).data,
            status=status.HTTP_201_CREATED,
        )


class ParcelDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def _get(self, request, parcel_id):
        return selectors.get_parcel(parcel_id, _company(request).id)

    def get(self, request, parcel_id):
        obj = self._get(request, parcel_id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(ParcelReadSerializer(obj).data)

    def patch(self, request, parcel_id):
        obj = self._get(request, parcel_id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        ser = ParcelUpdateSerializer(data=request.data, partial=True)
        ser.is_valid(raise_exception=True)
        try:
            obj = services.update_parcel(obj, updated_by=request.user, **ser.validated_data)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(ParcelReadSerializer(selectors.get_parcel(obj.id, _company(request).id)).data)

    def delete(self, request, parcel_id):
        obj = self._get(request, parcel_id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            services.delete_parcel(obj, deleted_by=request.user)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_204_NO_CONTENT)


# ── Trip assignment ────────────────────────────────────────────────────────────

class ParcelAssignTripView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, parcel_id):
        company = _company(request)
        obj = selectors.get_parcel(parcel_id, company.id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        ser = ParcelAssignTripSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        from apps.voyage.models import Trip
        try:
            trip = Trip.objects.get(id=ser.validated_data["trip_id"],
                                    company=company, is_deleted=False)
        except Trip.DoesNotExist:
            return Response({"detail": "Trip not found."}, status=status.HTTP_404_NOT_FOUND)
        try:
            obj = services.assign_trip(obj, trip=trip, updated_by=request.user)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(ParcelReadSerializer(selectors.get_parcel(obj.id, company.id)).data)


# ── Status transitions ─────────────────────────────────────────────────────────

class _TransitionView(APIView):
    permission_classes = [IsAuthenticated]
    service_fn = None   # override in subclass

    def post(self, request, parcel_id):
        company = _company(request)
        obj = selectors.get_parcel(parcel_id, company.id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        ser = ParcelTransitionSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            obj = self.service_fn(obj, updated_by=request.user, **ser.validated_data)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(ParcelReadSerializer(selectors.get_parcel(obj.id, company.id)).data)


class ParcelShipView(_TransitionView):
    service_fn = staticmethod(services.ship_parcel)


class ParcelReceiveView(_TransitionView):
    service_fn = staticmethod(services.receive_parcel)


class ParcelDeliverView(_TransitionView):
    service_fn = staticmethod(services.deliver_parcel)


class ParcelReturnView(_TransitionView):
    service_fn = staticmethod(services.return_parcel)


class ParcelLostView(_TransitionView):
    service_fn = staticmethod(services.mark_lost)


# ── Payment ────────────────────────────────────────────────────────────────────

class ParcelPaymentView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, parcel_id):
        company = _company(request)
        obj = selectors.get_parcel(parcel_id, company.id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        ser = ParcelPaymentSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            obj = services.record_payment(
                obj,
                payment_mode=ser.validated_data["payment_mode"],
                updated_by=request.user,
            )
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(ParcelReadSerializer(selectors.get_parcel(obj.id, company.id)).data)


# ── Events (tracking) ─────────────────────────────────────────────────────────

class ParcelEventListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, parcel_id):
        company = _company(request)
        events = selectors.list_parcel_events(parcel_id, company.id)
        if events is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(ParcelEventSerializer(events, many=True).data)


# ── By trip ────────────────────────────────────────────────────────────────────

class TripParcelListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, trip_id):
        company = _company(request)
        qs = selectors.list_trip_parcels(trip_id, company.id)
        return Response(ParcelReadSerializer(qs, many=True).data)


# ── Stats ──────────────────────────────────────────────────────────────────────

class ParcelStatsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        company = _company(request)
        stats = selectors.get_parcel_stats(
            company.id,
            trip_id=request.query_params.get("trip_id"),
        )
        return Response(ParcelStatsSerializer(stats).data)

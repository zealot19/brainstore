from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.core.permissions import IsInstitutionAdmin, IsAuthenticated
from apps.core.pagination import StandardResultsSetPagination
from apps.core.exceptions import ApplicationError

from apps.voyage import selectors, services
from apps.voyage.serializers import (
    TripReadSerializer, TripWriteSerializer, TripUpdateSerializer,
    TripDepartSerializer, TripArriveSerializer, TripStatsSerializer,
    TripCrewReadSerializer, TripCrewWriteSerializer,
    TripSearchSerializer,
)

from apps.transport_config.models import Route, VehicleCategory, FareClass


def _get_company(request):
    return request.user.company


# ── Trips ──────────────────────────────────────────────────────────────────────

class TripListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        company = _get_company(request)
        params   = request.query_params
        qs = selectors.list_trips(
            company.id,
            route_id     = params.get("route_id"),
            status       = params.get("status"),
            vehicle_id   = params.get("vehicle_id"),
            from_city_id = params.get("from_city_id"),
            to_city_id   = params.get("to_city_id"),
            date_from    = params.get("date_from"),
            date_to      = params.get("date_to"),
            upcoming_only = params.get("upcoming_only") == "true",
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(TripReadSerializer(page, many=True).data)

    def post(self, request):
        company = _get_company(request)
        ser = TripWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data

        # Resolve FKs
        try:
            route = Route.objects.get(id=d["route_id"], company=company, is_deleted=False)
        except Route.DoesNotExist:
            return Response({"detail": "Route not found."}, status=status.HTTP_404_NOT_FOUND)
        try:
            cat = VehicleCategory.objects.get(id=d["vehicle_category_id"], is_deleted=False)
        except VehicleCategory.DoesNotExist:
            return Response({"detail": "Vehicle category not found."}, status=status.HTTP_404_NOT_FOUND)

        vehicle = fare_class = None
        if d.get("vehicle_id"):
            from apps.fleet.models import Vehicle
            try:
                vehicle = Vehicle.objects.get(id=d["vehicle_id"], company=company, is_deleted=False)
            except Vehicle.DoesNotExist:
                return Response({"detail": "Vehicle not found."}, status=status.HTTP_404_NOT_FOUND)
        if d.get("fare_class_id"):
            try:
                fare_class = FareClass.objects.get(id=d["fare_class_id"], is_deleted=False)
            except FareClass.DoesNotExist:
                return Response({"detail": "Fare class not found."}, status=status.HTTP_404_NOT_FOUND)

        try:
            trip = services.create_trip(
                company=company, route=route, vehicle_category=cat,
                departure_datetime=d["departure_datetime"],
                vehicle=vehicle, fare_class=fare_class,
                free_seating=d.get("free_seating", False),
                notes=d.get("notes", ""),
                created_by=request.user,
            )
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        trip = selectors.get_trip(trip.id, company.id)
        return Response(TripReadSerializer(trip).data, status=status.HTTP_201_CREATED)


class TripDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def _get_trip(self, trip_id, company):
        trip = selectors.get_trip(trip_id, company.id)
        if not trip:
            return None
        return trip

    def get(self, request, trip_id):
        company = _get_company(request)
        trip = self._get_trip(trip_id, company)
        if not trip:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(TripReadSerializer(trip).data)

    def patch(self, request, trip_id):
        company = _get_company(request)
        trip = self._get_trip(trip_id, company)
        if not trip:
            return Response(status=status.HTTP_404_NOT_FOUND)
        ser = TripUpdateSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            trip = services.update_trip(trip, updated_by=request.user, **ser.validated_data)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(TripReadSerializer(selectors.get_trip(trip.id, company.id)).data)

    def delete(self, request, trip_id):
        company = _get_company(request)
        trip = self._get_trip(trip_id, company)
        if not trip:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            services.delete_trip(trip, deleted_by=request.user)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_204_NO_CONTENT)


class TripBoardView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, trip_id):
        company = _get_company(request)
        trip = selectors.get_trip(trip_id, company.id)
        if not trip:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            trip = services.board_trip(trip, updated_by=request.user)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(TripReadSerializer(selectors.get_trip(trip.id, company.id)).data)


class TripDepartView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, trip_id):
        company = _get_company(request)
        trip = selectors.get_trip(trip_id, company.id)
        if not trip:
            return Response(status=status.HTTP_404_NOT_FOUND)
        ser = TripDepartSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            trip = services.depart_trip(
                trip,
                actual_departure=ser.validated_data.get("actual_departure_datetime"),
                updated_by=request.user,
            )
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(TripReadSerializer(selectors.get_trip(trip.id, company.id)).data)


class TripArriveView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, trip_id):
        company = _get_company(request)
        trip = selectors.get_trip(trip_id, company.id)
        if not trip:
            return Response(status=status.HTTP_404_NOT_FOUND)
        ser = TripArriveSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            trip = services.arrive_trip(
                trip,
                actual_arrival=ser.validated_data.get("actual_arrival_datetime"),
                updated_by=request.user,
            )
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(TripReadSerializer(selectors.get_trip(trip.id, company.id)).data)


class TripCancelView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, trip_id):
        company = _get_company(request)
        trip = selectors.get_trip(trip_id, company.id)
        if not trip:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            trip = services.cancel_trip(trip, updated_by=request.user)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(TripReadSerializer(selectors.get_trip(trip.id, company.id)).data)


class TripStatsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        company = _get_company(request)
        stats = selectors.get_trip_stats(company.id)
        return Response(TripStatsSerializer(stats).data)


# ── Search (for online booking / public) ──────────────────────────────────────

class TripSearchView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        company = _get_company(request)
        ser = TripSearchSerializer(data=request.query_params)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data
        qs = selectors.search_trips(
            company.id,
            from_city_id=d["from_city_id"],
            to_city_id=d["to_city_id"],
            travel_date=d["travel_date"],
        )
        return Response(TripReadSerializer(qs, many=True).data)


# ── Crew ───────────────────────────────────────────────────────────────────────

class TripCrewListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, trip_id):
        company = _get_company(request)
        crew = selectors.list_trip_crew(trip_id, company.id)
        if crew is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(TripCrewReadSerializer(crew, many=True).data)

    def post(self, request, trip_id):
        company = _get_company(request)
        trip = selectors.get_trip(trip_id, company.id)
        if not trip:
            return Response(status=status.HTTP_404_NOT_FOUND)
        ser = TripCrewWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data

        from django.contrib.auth import get_user_model
        User = get_user_model()
        try:
            user = User.objects.get(id=d["user_id"])
        except User.DoesNotExist:
            return Response({"detail": "User not found."}, status=status.HTTP_404_NOT_FOUND)

        try:
            member = services.add_crew_member(
                trip=trip, user=user,
                role=d.get("role", TripCrewWriteSerializer().fields["role"].default),
                notes=d.get("notes", ""),
                created_by=request.user,
            )
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(TripCrewReadSerializer(member).data, status=status.HTTP_201_CREATED)


class TripCrewDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, trip_id, crew_id):
        company = _get_company(request)
        member = selectors.get_trip_crew_member(crew_id, trip_id, company.id)
        if not member:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(TripCrewReadSerializer(member).data)

    def delete(self, request, trip_id, crew_id):
        company = _get_company(request)
        member = selectors.get_trip_crew_member(crew_id, trip_id, company.id)
        if not member:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            services.remove_crew_member(member, deleted_by=request.user)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_204_NO_CONTENT)

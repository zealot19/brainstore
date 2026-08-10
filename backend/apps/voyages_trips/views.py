from django.db.models import Q
from rest_framework.views import APIView
from apps.core.permissions import IsInstitutionAdmin
from apps.core.responses import success_response, created_response, error_response, no_content_response
from apps.core.exceptions import ApplicationError
from apps.core.pagination import StandardResultsSetPagination
from apps.system_config.models import Company

from . import selectors, services, serializers as S
from .models import TripCrew, TripSeat


def _scope(request):
    """Return the company for this request (non-null operational scope), or (None, error)."""
    if request.user.is_superuser:
        cid = request.query_params.get("company_id") or request.data.get("company_id")
        if not cid:
            return None, error_response("company_id requis.")
        c = Company.objects.filter(id=cid).first()
        return (c, None) if c else (None, error_response("Institution introuvable.", status_code=404))
    if not request.user.company_id:
        return None, error_response("Votre compte n'est lié à aucune institution.")
    return request.user.company, None


def _cfg(model_cls, cid, company):
    if not cid:
        return None
    return model_cls.objects.filter(
        Q(company=company) | Q(company__isnull=True), id=cid, is_deleted=False).first()


class TripListCreateView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company, err = _scope(request)
        if err:
            return err
        qs = selectors.list_trips(
            company,
            status=request.query_params.get("status"),
            route=request.query_params.get("route"),
            vehicle=request.query_params.get("vehicle"),
            date_field=request.query_params.get("date_field"),
            date_from=request.query_params.get("date_from"),
            date_to=request.query_params.get("date_to"))
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(S.TripListSerializer(page, many=True).data)

    def post(self, request):
        company, err = _scope(request)
        if err:
            return err
        payload = S.TripCreateSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        from apps.voyages_config.models import Route, FareClass, ServicePattern, ServicePoint
        route = _cfg(Route, d["route_id"], company)
        if not route:
            return error_response("Trajet introuvable.", status_code=404)
        fare_class = _cfg(FareClass, d["fare_class_id"], company)
        if not fare_class:
            return error_response("Catégorie tarifaire introuvable.", status_code=404)
        service_pattern = _cfg(ServicePattern, d.get("service_pattern_id"), company)
        origin = _cfg(ServicePoint, d.get("origin_id"), company)
        destination = _cfg(ServicePoint, d.get("destination_id"), company)
        try:
            trip = services.create_trip(
                company=company, route=route, fare_class=fare_class,
                scheduled_departure=d["scheduled_departure"], scheduled_arrival=d["scheduled_arrival"],
                service_pattern=service_pattern, origin=origin, destination=destination,
                code=d["code"], notes=d["notes"], user=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(S.TripDetailSerializer(trip).data)


class TripDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return None, err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return None, error_response("Voyage introuvable.", status_code=404)
        return trip, None

    def get(self, request, trip_id):
        trip, err = self._get(request, trip_id)
        if err:
            return err
        return success_response(S.TripDetailSerializer(trip).data)

    def patch(self, request, trip_id):
        trip, err = self._get(request, trip_id)
        if err:
            return err
        if trip.status != trip.Status.DRAFT:
            return error_response("Seul un brouillon peut être modifié.")
        payload = S.TripUpdateSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        for k, v in payload.validated_data.items():
            setattr(trip, k, v)
        trip.updated_by = request.user
        trip.save()
        return success_response(S.TripDetailSerializer(trip).data)

    def delete(self, request, trip_id):
        trip, err = self._get(request, trip_id)
        if err:
            return err
        trip.is_deleted = True
        trip.updated_by = request.user
        trip.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return no_content_response()


class TripEligibleVehiclesView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        vs = selectors.eligible_vehicles(company, window_start=trip.scheduled_departure,
                                         window_end=trip.scheduled_arrival, exclude_trip=trip)
        return success_response(S.EligibleVehicleSerializer(vs, many=True).data)


class TripAssignVehicleView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        from apps.fleet.models import Vehicle
        vehicle = Vehicle.objects.filter(id=request.data.get("vehicle_id"),
                                         company=company, is_deleted=False).first()
        if not vehicle:
            return error_response("Véhicule introuvable.", status_code=404)
        try:
            warnings = services.assign_vehicle(trip, vehicle, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response({"trip": S.TripDetailSerializer(trip).data, "warnings": warnings})


class TripCrewView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        return success_response(S.TripCrewSerializer(trip.crew.filter(is_deleted=False), many=True).data)

    def post(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        payload = S.TripCrewWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        from apps.fleet.models import ExternalDriver
        driver = ExternalDriver.objects.filter(id=payload.validated_data["driver_id"],
                                               company=company, is_deleted=False).first()
        if not driver:
            return error_response("Conducteur introuvable.", status_code=404)
        crew = TripCrew.objects.create(trip=trip, driver=driver,
                                       role=payload.validated_data["role"], created_by=request.user)
        return created_response(S.TripCrewSerializer(crew).data)


class TripCrewDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def delete(self, request, trip_id, crew_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        crew = trip.crew.filter(id=crew_id, is_deleted=False).first()
        if not crew:
            return error_response("Équipage introuvable.", status_code=404)
        crew.is_deleted = True
        crew.updated_by = request.user
        crew.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return no_content_response()


class TripSeatsView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        seats = trip.seats.filter(is_deleted=False).order_by("row", "column")
        return success_response(S.TripSeatSerializer(seats, many=True).data)


class _TripSeatStatusView(APIView):
    permission_classes = [IsInstitutionAdmin]
    target = None       # TripSeat.Status value to set
    from_status = None  # required current status

    def post(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        payload = S.SeatIdsSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        seats = trip.seats.filter(id__in=payload.validated_data["seat_ids"],
                                  is_deleted=False, status=self.from_status)
        count = seats.update(status=self.target, updated_by=request.user)
        return success_response({"updated": count})


class TripSeatBlockView(_TripSeatStatusView):
    target = TripSeat.Status.BLOCKED
    from_status = TripSeat.Status.AVAILABLE


class TripSeatUnblockView(_TripSeatStatusView):
    target = TripSeat.Status.AVAILABLE
    from_status = TripSeat.Status.BLOCKED


class TripStopsView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        stops = trip.stops.filter(is_deleted=False).select_related("service_point").order_by("sequence")
        return success_response(S.TripStopSerializer(stops, many=True).data)


class _LifecycleView(APIView):
    permission_classes = [IsInstitutionAdmin]
    action = None  # name of services function

    def post(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        fn = getattr(services, self.action)
        try:
            fn(trip, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.TripDetailSerializer(trip).data)


class TripSubmitView(_LifecycleView):   action = "submit_trip"
class TripDepartView(_LifecycleView):   action = "depart_trip"
class TripCompleteView(_LifecycleView): action = "complete_trip"
class TripCancelView(_LifecycleView):   action = "cancel_trip"
class TripSuspendView(_LifecycleView):  action = "suspend_trip"
class TripResumeView(_LifecycleView):   action = "resume_trip"


class TripMarkDelayedView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        payload = S.MarkDelayedSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        services.mark_delayed(trip, delayed_until=payload.validated_data["delayed_until"],
                              delay_reason=payload.validated_data["delay_reason"], user=request.user)
        return success_response(S.TripDetailSerializer(trip).data)


class TripClearDelayView(_LifecycleView):
    action = "clear_delay"


from apps.voyages_trips.services.transbordement import transbord_trip


class TripTransbordEligibleView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        return success_response(selectors.transbord_options(company, trip))


class TripTransbordView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        from apps.fleet.models import Vehicle
        vehicle = Vehicle.objects.filter(id=request.data.get("vehicle_id"),
                                         company=company, is_deleted=False).first()
        if not vehicle:
            return error_response("Véhicule introuvable.", status_code=404)
        overflow_trip = None
        oid = request.data.get("overflow_trip_id")
        if oid:
            overflow_trip = selectors.get_trip(company, oid)
            if not overflow_trip:
                return error_response("Voyage de bascule introuvable.", status_code=404)
        try:
            res = transbord_trip(trip, vehicle, overflow_trip=overflow_trip,
                                 user=request.user, note=request.data.get("note", ""))
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(res)


class TripTransbordHistoryView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        rows = [{
            "id": str(tb.id),
            "from_vehicle": tb.from_vehicle.license_plate if tb.from_vehicle_id else "",
            "to_vehicle": tb.to_vehicle.license_plate if tb.to_vehicle_id else "",
            "overflow_trip": (tb.overflow_trip.number or tb.overflow_trip.code) if tb.overflow_trip_id else "",
            "passengers_moved": tb.passengers_moved,
            "passengers_overflow": tb.passengers_overflow,
            "baggage_moved": tb.baggage_moved,
            "note": tb.note,
            "created_at": tb.created_at,
        } for tb in selectors.trip_transbordements(trip)]
        return success_response(rows)


from apps.voyages_trips.services.transbordement import transbord_selection


class TripTransbordSelectionOptionsView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        return success_response(selectors.selection_options(company, trip))


class TripTransbordSelectionView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        dest_trip = None
        dest_vehicle = None
        did = request.data.get("dest_trip_id")
        vid = request.data.get("dest_vehicle_id")
        if did:
            dest_trip = selectors.get_trip(company, did)
            if not dest_trip:
                return error_response("Voyage de destination introuvable.", status_code=404)
        elif vid:
            from apps.fleet.models import Vehicle
            dest_vehicle = Vehicle.objects.filter(id=vid, company=company, is_deleted=False).first()
            if not dest_vehicle:
                return error_response("Véhicule introuvable.", status_code=404)
        try:
            res = transbord_selection(
                trip,
                ticket_ids=request.data.get("ticket_ids", []),
                parcel_ids=request.data.get("parcel_ids", []),
                baggage_ids=request.data.get("baggage_ids", []),
                dest_trip=dest_trip, dest_vehicle=dest_vehicle,
                user=request.user, note=request.data.get("note", ""))
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(res)

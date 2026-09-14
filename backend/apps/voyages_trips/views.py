from django.db.models import Q
from rest_framework.views import APIView
from apps.core.permissions import IsInstitutionAdmin, IsAuthenticated, HasModulePermission
from apps.core.responses import success_response, created_response, error_response, no_content_response
from apps.core.exceptions import ApplicationError
from apps.core.pagination import StandardResultsSetPagination
from apps.system_config.models import Company

from . import selectors, services, serializers as S
from .models import TripCrew, TripSeat, CrewMember, TripExpense
from apps.voyages_config.models import CrewMemberType


# Un voyage terminé ou annulé est figé : on n'ajoute/retire plus d'équipage.
_CREW_LOCKED_STATUSES = ("completed", "cancelled")


def _scope(request):
    """Return the company for this request (non-null operational scope), or (None, error)."""
    if request.user.is_superuser:
        cid = request.query_params.get("company_id") or request.data.get("company_id")
        if not cid:
            return None, error_response("Veuillez préciser l'institution concernée (paramètre company_id).")
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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'voyage.trip.view', 'POST': 'voyage.trip.create'}

    def get(self, request):
        company, err = _scope(request)
        if err:
            return err
        _ax = request.query_params.get("auto_expenses")
        qs = selectors.list_trips(
            company,
            status=request.query_params.get("status"),
            route=request.query_params.get("route"),
            vehicle=request.query_params.get("vehicle"),
            date_field=request.query_params.get("date_field"),
            date_from=request.query_params.get("date_from"),
            date_to=request.query_params.get("date_to"),
            auto_expenses=(None if _ax is None else _ax.lower() == "true"))
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
        # Mode « planification » : tout est dérivé du modèle + de la date.
        if d.get("service_pattern_id") and d.get("service_date"):
            pattern = _cfg(ServicePattern, d["service_pattern_id"], company)
            if not pattern:
                return error_response("Planification introuvable.", status_code=404)
            try:
                trip = services.create_trip_from_pattern(
                    company=company, pattern=pattern, service_date=d["service_date"],
                    code=d["code"], notes=d["notes"],
                    seat_assignment_mode=d["seat_assignment_mode"],
                    auto_expenses=d["auto_expenses"], max_reservations=d["max_reservations"],
                    blocked_seats_count=d["blocked_seats_count"], crew_member_ids=d["crew_member_ids"],
                    user=request.user)
            except ApplicationError as e:
                return error_response(str(e))
            return created_response(S.TripDetailSerializer(trip).data)
        # Mode manuel.
        route = _cfg(Route, d["route_id"], company)
        if not route:
            return error_response("Trajet introuvable.", status_code=404)
        fare_class = _cfg(FareClass, d["fare_class_id"], company)
        if not fare_class:
            return error_response("Catégorie tarifaire introuvable.", status_code=404)
        service_pattern = _cfg(ServicePattern, d.get("service_pattern_id"), company)
        origin = _cfg(ServicePoint, d.get("origin_id"), company)
        destination = _cfg(ServicePoint, d.get("destination_id"), company)
        from apps.voyages_config.models import SeatingPlan
        from apps.fleet.models import Vehicle
        seating_plan = _cfg(SeatingPlan, d.get("seating_plan_id"), company) if d.get("seating_plan_id") else None
        vehicle = (Vehicle.objects.filter(id=d["vehicle_id"], company=company, is_deleted=False).first()
                   if d.get("vehicle_id") else None)
        try:
            trip = services.create_trip(
                company=company, route=route, fare_class=fare_class,
                scheduled_departure=d["scheduled_departure"], scheduled_arrival=d["scheduled_arrival"],
                service_pattern=service_pattern, origin=origin, destination=destination,
                code=d["code"], notes=d["notes"],
                seat_assignment_mode=d["seat_assignment_mode"],
                auto_expenses=d["auto_expenses"], seating_plan=seating_plan, vehicle=vehicle,
                max_reservations=d["max_reservations"], blocked_seats_count=d["blocked_seats_count"],
                crew_member_ids=d["crew_member_ids"], user=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(S.TripDetailSerializer(trip).data)


class TripDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'voyage.trip.view', 'PATCH': 'voyage.trip.update', 'PUT': 'voyage.trip.update', 'DELETE': 'voyage.trip.delete'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'voyage.trip.view'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'voyage.trip.update'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'voyage.crew.view', 'POST': 'voyage.crew.manage'}

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
        if trip.status in _CREW_LOCKED_STATUSES:
            return error_response("Impossible de modifier l'équipage d'un voyage terminé ou annulé.")
        member = CrewMember.objects.filter(id=payload.validated_data["member_id"],
                                           company=company, is_deleted=False).first()
        if not member:
            return error_response("Membre d'équipage introuvable.", status_code=404)
        if trip.crew.filter(is_deleted=False, member=member).exists():
            return error_response("Ce membre est déjà affecté à ce voyage.")
        conflict = selectors.crew_member_conflict(
            company, member, window_start=trip.scheduled_departure,
            window_end=trip.scheduled_arrival, exclude_trip=trip)
        if conflict is not None:
            label = conflict.number or conflict.code or str(conflict.id)[:8]
            return error_response(
                f"Ce membre est déjà affecté à un voyage sur ce créneau ({label}).")
        crew = TripCrew.objects.create(trip=trip, member=member, created_by=request.user)
        return created_response(S.TripCrewSerializer(crew).data)


class TripCrewDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'DELETE': 'voyage.crew.manage'}

    def delete(self, request, trip_id, crew_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        if trip.status in _CREW_LOCKED_STATUSES:
            return error_response("Impossible de modifier l'équipage d'un voyage terminé ou annulé.")
        crew = trip.crew.filter(id=crew_id, is_deleted=False).first()
        if not crew:
            return error_response("Équipage introuvable.", status_code=404)
        crew.is_deleted = True
        crew.updated_by = request.user
        crew.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return no_content_response()


class TripSeatsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'voyage.trip.view'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'voyage.trip.update'}
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
        from apps.voyages_trips.services.assignment import set_seats_status
        count = set_seats_status(trip, payload.validated_data["seat_ids"], self.target,
                                 from_status=self.from_status, user=request.user)
        return success_response({"updated": count})


class TripSeatBlockView(_TripSeatStatusView):
    target = TripSeat.Status.BLOCKED
    from_status = TripSeat.Status.AVAILABLE


class TripSeatUnblockView(_TripSeatStatusView):
    target = TripSeat.Status.AVAILABLE
    from_status = TripSeat.Status.BLOCKED


class TripStopsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'voyage.trip.view'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'voyage.trip.update'}
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
class TripDepartView(_LifecycleView):
    action = "depart_trip"
    permission_map = {"POST": "voyage.trip.depart"}
class TripCompleteView(_LifecycleView):
    action = "complete_trip"
    permission_map = {"POST": "voyage.trip.arrive"}
class TripCancelView(_LifecycleView):
    action = "cancel_trip"
    permission_map = {"POST": "voyage.trip.cancel"}
class TripSuspendView(_LifecycleView):  action = "suspend_trip"
class TripResumeView(_LifecycleView):   action = "resume_trip"


class TripMarkDelayedView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'voyage.trip.update'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'voyage.trip.view'}

    def get(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        return success_response(selectors.transbord_options(company, trip))


class TripTransbordView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'voyage.trip.update'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'voyage.trip.view'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "voyage.trip.view"}

    def get(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        return success_response(selectors.selection_options(company, trip))


class TripTransbordSelectionView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "voyage.trip.update"}

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


def _resolve_crew_agency(agency_id, company_id):
    if not agency_id:
        return None
    from apps.system_config.models import Agency
    return Agency.objects.filter(id=agency_id, company_id=company_id, is_deleted=False).first()


class CrewMemberListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "voyage.crew.view", "POST": "voyage.crew.manage"}

    def get(self, request):
        cid = request.user.company_id
        qs = CrewMember.objects.filter(is_deleted=False, company_id=cid).select_related("member_type", "agency").order_by("name", "last_name")
        return success_response(S.CrewMemberSerializer(qs, many=True).data)

    def post(self, request):
        cid = request.user.company_id
        p = S.CrewMemberWriteSerializer(data=request.data); p.is_valid(raise_exception=True); d = p.validated_data
        mt = CrewMemberType.objects.filter(id=d["member_type_id"], company_id=cid, is_deleted=False).first()
        if not mt:
            return error_response("Type introuvable.", status_code=404)
        agency = _resolve_crew_agency(d.get("agency_id"), cid)
        obj = CrewMember.objects.create(company_id=cid, name=d["name"], member_type=mt,
                                        agency=agency, phone=d["phone"],
                                        is_active=d["is_active"], created_by=request.user)
        return created_response(S.CrewMemberSerializer(obj).data)


class CrewMemberDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "voyage.crew.view", "PATCH": "voyage.crew.manage", "DELETE": "voyage.crew.manage"}

    def _get(self, request, pk):
        return CrewMember.objects.filter(is_deleted=False, company_id=request.user.company_id, id=pk).first()

    def get(self, request, pk):
        o = self._get(request, pk)
        return success_response(S.CrewMemberSerializer(o).data) if o else error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)

    def patch(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        d = request.data
        for f in ("name", "phone", "is_active"):
            if f in d:
                setattr(o, f, d[f])
        if "member_type_id" in d:
            mt = CrewMemberType.objects.filter(id=d["member_type_id"], company_id=o.company_id, is_deleted=False).first()
            if not mt:
                return error_response("Type introuvable.", status_code=404)
            o.member_type = mt
        if "agency_id" in d:
            o.agency = _resolve_crew_agency(d["agency_id"], o.company_id)
        o.updated_by = request.user
        o.save()
        return success_response(S.CrewMemberSerializer(o).data)

    def delete(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        o.is_deleted = True; o.updated_by = request.user
        o.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return success_response(message="Membre supprimé.")


# ── Documents du personnel naviguant (pièces jointes génériques) ────────────────

class CrewDocumentListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "voyage.crew.view", "POST": "voyage.crew.manage"}

    def _member(self, request, pk):
        return CrewMember.objects.filter(is_deleted=False, company_id=request.user.company_id, id=pk).first()

    def _ct(self):
        from django.contrib.contenttypes.models import ContentType
        return ContentType.objects.get_for_model(CrewMember)

    def get(self, request, pk):
        m = self._member(request, pk)
        if not m:
            return error_response("Personnel introuvable.", status_code=404)
        from apps.core.models import Attachment
        items = Attachment.objects.filter(content_type=self._ct(), object_id=m.id, is_deleted=False).order_by("created_at")
        return success_response(S.CrewDocumentSerializer(items, many=True).data)

    def post(self, request, pk):
        m = self._member(request, pk)
        if not m:
            return error_response("Personnel introuvable.", status_code=404)
        file = request.FILES.get("file")
        if not file:
            return error_response("Aucun fichier fourni.")
        from apps.core.models import Attachment
        att = Attachment.objects.create(
            content_type=self._ct(), object_id=m.id,
            name=request.data.get("name") or getattr(file, "name", "fichier"),
            file=file, size=getattr(file, "size", 0) or 0,
            mime_type=getattr(file, "content_type", "") or "",
            description=request.data.get("description", ""), created_by=request.user,
        )
        return created_response(S.CrewDocumentSerializer(att).data)


class CrewDocumentDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"DELETE": "voyage.crew.manage"}

    def delete(self, request, pk, att_id):
        from django.contrib.contenttypes.models import ContentType
        from apps.core.models import Attachment
        ct = ContentType.objects.get_for_model(CrewMember)
        att = Attachment.objects.filter(id=att_id, content_type=ct, object_id=pk,
                                        is_deleted=False).first()
        if not att:
            return error_response("Pièce jointe introuvable.", status_code=404)
        att.soft_delete(user=request.user)
        return no_content_response()


# ── Dépenses de voyage ────────────────────────────────────────────────────────

class TripExpenseListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "voyage.expense.view", "POST": "voyage.expense.manage"}

    def get(self, request, trip_id):
        qs = TripExpense.objects.filter(trip_id=trip_id, is_deleted=False).select_related("expense_type")
        return success_response(S.TripExpenseSerializer(qs, many=True).data)

    def post(self, request, trip_id):
        payload = S.TripExpenseWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        exp = TripExpense.objects.create(trip_id=trip_id, created_by=request.user, **payload.validated_data)
        return created_response(S.TripExpenseSerializer(exp).data)


class TripExpenseDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "voyage.expense.view", "PATCH": "voyage.expense.manage",
                      "DELETE": "voyage.expense.manage"}

    def _get(self, trip_id, pk):
        return TripExpense.objects.filter(trip_id=trip_id, pk=pk, is_deleted=False).first()

    def patch(self, request, trip_id, pk):
        exp = self._get(trip_id, pk)
        if not exp:
            return error_response("Dépense introuvable.", status_code=404)
        if exp.status == TripExpense.Status.PAID:
            return error_response("Dépense déjà décaissée.")
        payload = S.TripExpenseWriteSerializer(exp, data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        for k, v in payload.validated_data.items():
            setattr(exp, k, v)
        exp.updated_by = request.user
        exp.save()
        return success_response(S.TripExpenseSerializer(exp).data)

    def delete(self, request, trip_id, pk):
        exp = self._get(trip_id, pk)
        if not exp:
            return error_response("Dépense introuvable.", status_code=404)
        exp.is_deleted = True; exp.updated_by = request.user
        exp.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return success_response(message="Dépense supprimée.")


class TripExpenseDisburseView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "voyage.expense.manage"}

    def post(self, request, trip_id, pk):
        from apps.voyages_trips.services.expense_services import disburse_trip_expense
        from apps.treasury.models import CashSession
        exp = TripExpense.objects.filter(trip_id=trip_id, pk=pk, is_deleted=False).select_related("trip").first()
        if not exp:
            return error_response("Dépense introuvable.", status_code=404)
        session = None
        sid = request.data.get("cash_session_id")
        if sid:
            session = CashSession.objects.filter(id=sid, company_id=exp.trip.company_id,
                                                 status=CashSession.Status.OPEN, is_deleted=False).first()
            if not session:
                return error_response("Caisse introuvable ou déjà fermée.")
        try:
            exp = disburse_trip_expense(exp, user=request.user, cash_session=session)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.TripExpenseSerializer(exp).data)


class TripStatsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "voyage.trip.view"}

    def get(self, request):
        from apps.voyages_trips.stats import get_trip_stats
        if not request.user.company_id:
            return error_response("Votre compte n'est lié à aucune institution.", status_code=400)
        return success_response(get_trip_stats(request.user.company_id))

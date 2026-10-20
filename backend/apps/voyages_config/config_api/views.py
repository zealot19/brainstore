from django.db.models import Q
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from apps.core.permissions import IsInstitutionAdmin, IsAuthenticated, HasModulePermission
from apps.core.responses import success_response, created_response, error_response, no_content_response
from apps.core.exceptions import ApplicationError
from apps.core.pagination import StandardResultsSetPagination
from django.db import transaction
from apps.voyages_config.models import (
    Town, ServicePoint, FareClass, TimeSlot, CrewMemberType, VoyageType, ExpenseType, ExpenseSchedule,
    ConsignmentNature, ConsignmentType, LoyaltyRule,
    Route, RouteStop,
    SeatingPlan,
    ServicePattern, VoyagesSettings,
    TicketTemplate, DEFAULT_TICKET_RECTO, DEFAULT_TICKET_VERSO,
)
from apps.voyages_config import ticket_render
from . import serializers as S
from .common import scope_company_id, resolve_company_or_global, scoped_qs, ensure_unique, cfg_lookup


# ── Generic scoped-config views (mirrors apps.fleet.config_api) ────────────────

class _ConfigListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.config.view", "POST": "transport.config.manage"}
    model = None
    read = None
    write = None
    unique_field = "name"
    search_fields = ["name"]

    def get(self, request):
        qs = scoped_qs(self.model, scope_company_id(request))
        term = request.query_params.get("search")
        if term:
            q = Q()
            for f in self.search_fields:
                q |= Q(**{f"{f}__icontains": term})
            qs = qs.filter(q)
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(self.read(page, many=True).data)

    def post(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        payload = self.write(data=request.data)
        payload.is_valid(raise_exception=True)
        data = dict(payload.validated_data)
        try:
            ensure_unique(self.model, company, self.unique_field, data[self.unique_field])
            obj = self._create(company, data, request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(self.read(obj).data)

    def _create(self, company, data, user):
        return self.model.objects.create(company=company, created_by=user, **data)


class _ConfigDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.config.view", "PATCH": "transport.config.manage",
                      "PUT": "transport.config.manage", "DELETE": "transport.config.manage"}
    model = None
    read = None
    write = None
    unique_field = "name"

    def _get(self, request, pk):
        return scoped_qs(self.model, scope_company_id(request)).filter(id=pk).first()

    def get(self, request, pk):
        obj = self._get(request, pk)
        return success_response(self.read(obj).data) if obj else error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)

    def patch(self, request, pk):
        obj = self._get(request, pk)
        if not obj:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        payload = self.write(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        data = dict(payload.validated_data)
        try:
            if self.unique_field in data:
                ensure_unique(self.model, obj.company, self.unique_field, data[self.unique_field], exclude_id=obj.id)
            self._apply(obj, data)
            obj.updated_by = request.user
            obj.save()
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(self.read(obj).data)

    def _apply(self, obj, data):
        for k, v in data.items():
            setattr(obj, k, v)

    def delete(self, request, pk):
        obj = self._get(request, pk)
        if not obj:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        obj.is_deleted = True
        obj.updated_by = request.user
        obj.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return no_content_response()


class _ConfigBulkDeleteView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "transport.config.manage"}
    model = None

    def post(self, request):
        ids = request.data.get("ids") or []
        if not isinstance(ids, list) or not ids:
            return error_response("Aucun élément sélectionné.")
        company_id = scope_company_id(request)
        qs = self.model.objects.filter(is_deleted=False, id__in=ids)
        if company_id:
            qs = qs.filter(company_id=company_id)
        else:
            qs = qs.filter(company__isnull=False)
        count = 0
        for obj in qs:
            obj.is_deleted = True
            obj.updated_by = request.user
            obj.save(update_fields=["is_deleted", "updated_by", "updated_at"])
            count += 1
        return success_response({"deleted": count})


def _perm_maps(perm):
    return (
        {"GET": f"{perm}.view", "POST": f"{perm}.manage"},
        {"GET": f"{perm}.view", "PATCH": f"{perm}.manage", "PUT": f"{perm}.manage", "DELETE": f"{perm}.manage"},
    )


def _pair(model_cls, read_cls, write_cls, unique="name", search=("name",), perm=None):
    lst_attrs = {"model": model_cls, "read": read_cls, "write": write_cls,
                 "unique_field": unique, "search_fields": list(search)}
    det_attrs = {"model": model_cls, "read": read_cls, "write": write_cls, "unique_field": unique}
    if perm:
        lmap, dmap = _perm_maps(perm)
        lst_attrs["permission_map"] = lmap
        det_attrs["permission_map"] = dmap
    lst = type(f"{model_cls.__name__}ListView", (_ConfigListView,), lst_attrs)
    det = type(f"{model_cls.__name__}DetailView", (_ConfigDetailView,), det_attrs)
    return lst, det


def _bulk(model_cls, perm=None):
    attrs = {"model": model_cls}
    if perm:
        attrs["permission_map"] = {"POST": f"{perm}.manage"}
    return type(f"{model_cls.__name__}BulkDeleteView", (_ConfigBulkDeleteView,), attrs)


# ── Simple reference tables ───────────────────────────────────────────────────
TownListView, TownDetailView = _pair(Town, S.TownRead, S.TownWrite, unique="name", search=("name", "code"), perm="transport.city")
FareClassListView, FareClassDetailView = _pair(FareClass, S.FareClassRead, S.FareClassWrite, unique="code", search=("code", "name"), perm="transport.fareclass")
TimeSlotListView, TimeSlotDetailView = _pair(TimeSlot, S.TimeSlotRead, S.TimeSlotWrite, unique="code", search=("code", "label"))
ConsignmentNatureListView, ConsignmentNatureDetailView = _pair(ConsignmentNature, S.ConsignmentNatureRead, S.ConsignmentNatureWrite, unique="code", search=("code", "name"))
LoyaltyRuleListView, LoyaltyRuleDetailView = _pair(LoyaltyRule, S.LoyaltyRuleRead, S.LoyaltyRuleWrite, unique="name", search=("name",))
CrewMemberTypeListView, CrewMemberTypeDetailView = _pair(CrewMemberType, S.CrewMemberTypeRead, S.CrewMemberTypeWrite, unique="code", search=("code", "name"))
VoyageTypeListView, VoyageTypeDetailView = _pair(VoyageType, S.VoyageTypeRead, S.VoyageTypeWrite, unique="code", search=("code", "name"))
ExpenseTypeListView, ExpenseTypeDetailView = _pair(ExpenseType, S.ExpenseTypeRead, S.ExpenseTypeWrite, unique="code", search=("code", "name"))


class ExpenseScheduleListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.config.view", "POST": "transport.config.manage"}

    def get(self, request):
        company_id = getattr(request.user, "company_id", None)
        qs = ExpenseSchedule.objects.filter(is_deleted=False)
        if company_id:
            qs = qs.filter(company_id=company_id)
        qs = qs.select_related("route", "fare_class").prefetch_related("lines")
        return success_response(S.ExpenseScheduleSerializer(qs, many=True).data)

    def post(self, request):
        payload = S.ExpenseScheduleWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        schedule = payload.save(company_id=getattr(request.user, "company_id", None),
                                created_by=request.user)
        return created_response(S.ExpenseScheduleSerializer(schedule).data)


class ExpenseScheduleDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.config.view", "PATCH": "transport.config.manage",
                      "DELETE": "transport.config.manage"}

    def _get(self, request, pk):
        company_id = getattr(request.user, "company_id", None)
        qs = ExpenseSchedule.objects.filter(is_deleted=False)
        if company_id:
            qs = qs.filter(company_id=company_id)
        return qs.filter(pk=pk).first()

    def get(self, request, pk):
        obj = self._get(request, pk)
        if not obj:
            return error_response("Barème introuvable.", status_code=404)
        return success_response(S.ExpenseScheduleSerializer(obj).data)

    def patch(self, request, pk):
        obj = self._get(request, pk)
        if not obj:
            return error_response("Barème introuvable.", status_code=404)
        payload = S.ExpenseScheduleWriteSerializer(obj, data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        obj = payload.save(updated_by=request.user)
        return success_response(S.ExpenseScheduleSerializer(obj).data)

    def delete(self, request, pk):
        obj = self._get(request, pk)
        if not obj:
            return error_response("Barème introuvable.", status_code=404)
        obj.soft_delete(user=request.user)
        return success_response(message="Barème supprimé.")

TownBulkDeleteView = _bulk(Town, perm="transport.city")
FareClassBulkDeleteView = _bulk(FareClass, perm="transport.fareclass")
TimeSlotBulkDeleteView = _bulk(TimeSlot)
ConsignmentNatureBulkDeleteView = _bulk(ConsignmentNature)
LoyaltyRuleBulkDeleteView = _bulk(LoyaltyRule)


# ── ServicePoint (FK: town) ───────────────────────────────────────────────────
class ServicePointListView(_ConfigListView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.terminal.view", "POST": "transport.terminal.create", "PATCH": "transport.terminal.update", "PUT": "transport.terminal.update", "DELETE": "transport.terminal.delete"}
    model = ServicePoint
    read = S.ServicePointRead
    write = S.ServicePointWrite
    unique_field = "code"
    search_fields = ["code", "name"]

    def _create(self, company, data, user):
        cid = company.id if company else None
        tid = data.pop("town_id", None)
        town = cfg_lookup(Town, tid, cid) if tid else None
        return ServicePoint.objects.create(company=company, created_by=user, town=town, **data)


class ServicePointDetailView(_ConfigDetailView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.terminal.view", "POST": "transport.terminal.create", "PATCH": "transport.terminal.update", "PUT": "transport.terminal.update", "DELETE": "transport.terminal.delete"}
    model = ServicePoint
    read = S.ServicePointRead
    write = S.ServicePointWrite
    unique_field = "code"

    def _apply(self, obj, data):
        if "town_id" in data:
            tid = data.pop("town_id")
            obj.town = cfg_lookup(Town, tid, obj.company_id) if tid else None
        for k, v in data.items():
            setattr(obj, k, v)


ServicePointBulkDeleteView = _bulk(ServicePoint, perm="transport.terminal")


# ── ConsignmentType (FK: nature) ──────────────────────────────────────────────
class ConsignmentTypeListView(_ConfigListView):
    model = ConsignmentType
    read = S.ConsignmentTypeRead
    write = S.ConsignmentTypeWrite
    unique_field = "code"
    search_fields = ["code", "label"]

    def _create(self, company, data, user):
        cid = company.id if company else None
        nid = data.pop("nature_id", None)
        nature = cfg_lookup(ConsignmentNature, nid, cid) if nid else None
        return ConsignmentType.objects.create(company=company, created_by=user, nature=nature, **data)


class ConsignmentTypeDetailView(_ConfigDetailView):
    model = ConsignmentType
    read = S.ConsignmentTypeRead
    write = S.ConsignmentTypeWrite
    unique_field = "code"

    def _apply(self, obj, data):
        if "nature_id" in data:
            nid = data.pop("nature_id")
            obj.nature = cfg_lookup(ConsignmentNature, nid, obj.company_id) if nid else None
        for k, v in data.items():
            setattr(obj, k, v)


ConsignmentTypeBulkDeleteView = _bulk(ConsignmentType)


# ── Route (trajet) + escales ──────────────────────────────────────────────────

class RouteListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.route.view", "POST": "transport.route.create", "PATCH": "transport.route.update", "PUT": "transport.route.update", "DELETE": "transport.route.delete"}

    def get(self, request):
        qs = (scoped_qs(Route, scope_company_id(request))
              .select_related("origin", "destination")
              .prefetch_related("stops__service_point").order_by("code"))
        term = request.query_params.get("search")
        if term:
            qs = qs.filter(Q(code__icontains=term) | Q(label__icontains=term))
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(S.RouteRead(page, many=True).data)

    def post(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        payload = S.RouteWrite(data=request.data)
        payload.is_valid(raise_exception=True)
        d = dict(payload.validated_data)
        cid = company.id if company else None
        origin = cfg_lookup(ServicePoint, d.pop("origin_id"), cid)
        dest = cfg_lookup(ServicePoint, d.pop("destination_id"), cid)
        if not origin or not dest:
            return error_response("Lieu introuvable.", status_code=404)
        if origin.id == dest.id:
            return error_response("Origine et destination doivent différer.")
        try:
            ensure_unique(Route, company, "code", d["code"])
        except ApplicationError as e:
            return error_response(str(e))
        route = Route.objects.create(company=company, created_by=request.user,
                                     origin=origin, destination=dest, **d)
        return created_response(S.RouteRead(route).data)


class RouteDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.route.view", "POST": "transport.route.create", "PATCH": "transport.route.update", "PUT": "transport.route.update", "DELETE": "transport.route.delete"}

    def _get(self, request, pk):
        return (scoped_qs(Route, scope_company_id(request))
                .select_related("origin", "destination")
                .prefetch_related("stops__service_point").filter(id=pk).first())

    def get(self, request, pk):
        route = self._get(request, pk)
        return success_response(S.RouteRead(route).data) if route else error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)

    def patch(self, request, pk):
        route = self._get(request, pk)
        if not route:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        payload = S.RouteWrite(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        d = dict(payload.validated_data)
        if "origin_id" in d:
            origin = cfg_lookup(ServicePoint, d.pop("origin_id"), route.company_id)
            if not origin:
                return error_response("Lieu introuvable.", status_code=404)
            route.origin = origin
        if "destination_id" in d:
            dest = cfg_lookup(ServicePoint, d.pop("destination_id"), route.company_id)
            if not dest:
                return error_response("Lieu introuvable.", status_code=404)
            route.destination = dest
        if route.origin_id == route.destination_id:
            return error_response("Origine et destination doivent différer.")
        try:
            if "code" in d:
                ensure_unique(Route, route.company, "code", d["code"], exclude_id=route.id)
        except ApplicationError as e:
            return error_response(str(e))
        for k, v in d.items():
            setattr(route, k, v)
        route.updated_by = request.user
        route.save()
        return success_response(S.RouteRead(route).data)

    def delete(self, request, pk):
        route = self._get(request, pk)
        if not route:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        route.is_deleted = True
        route.updated_by = request.user
        route.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return no_content_response()


class RouteStopListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.route.view", "POST": "transport.route.create", "PATCH": "transport.route.update", "PUT": "transport.route.update", "DELETE": "transport.route.delete"}

    def _route(self, request, route_id):
        return scoped_qs(Route, scope_company_id(request)).filter(id=route_id).first()

    def get(self, request, route_id):
        route = self._route(request, route_id)
        if not route:
            return error_response("Trajet introuvable.", status_code=404)
        stops = route.stops.filter(is_deleted=False).select_related("service_point").order_by("sequence")
        return success_response(S.RouteStopRead(stops, many=True).data)

    def post(self, request, route_id):
        route = self._route(request, route_id)
        if not route:
            return error_response("Trajet introuvable.", status_code=404)
        payload = S.RouteStopWrite(data=request.data)
        payload.is_valid(raise_exception=True)
        d = dict(payload.validated_data)
        sp = cfg_lookup(ServicePoint, d.pop("service_point_id"), route.company_id)
        if not sp:
            return error_response("Point de service introuvable.", status_code=404)
        seq = d.pop("sequence", None)
        if not seq:
            last = route.stops.filter(is_deleted=False).order_by("-sequence").first()
            seq = (last.sequence + 1) if last else 1
        if route.stops.filter(is_deleted=False, sequence=seq).exists():
            return error_response(f"L'ordre {seq} existe déjà sur ce trajet.")
        stop = RouteStop.objects.create(company=route.company, created_by=request.user,
                                        route=route, service_point=sp, sequence=seq, **d)
        return created_response(S.RouteStopRead(stop).data)

    def put(self, request, route_id):
        """M10 : remplace en bloc la liste ordonnée des escales (sequence = index+1).
        Valide tous les lieux AVANT toute écriture (pas de remplacement partiel)."""
        from django.db import transaction
        route = self._route(request, route_id)
        if not route:
            return error_response("Trajet introuvable.", status_code=404)
        payload = S.RouteStopsBulkWrite(data=request.data)
        payload.is_valid(raise_exception=True)
        resolved = []
        for it in payload.validated_data["stops"]:
            sp = cfg_lookup(ServicePoint, it["service_point_id"], route.company_id)
            if not sp:
                return error_response("Lieu introuvable.", status_code=404)
            resolved.append((sp, it.get("distance_from_origin_km")))
        with transaction.atomic():
            route.stops.all().delete()  # hard delete — évite la collision unique (route, sequence)
            for idx, (sp, dist) in enumerate(resolved, start=1):
                RouteStop.objects.create(company=route.company, created_by=request.user,
                                         route=route, service_point=sp, sequence=idx,
                                         distance_from_origin_km=dist)
        stops = route.stops.filter(is_deleted=False).select_related("service_point").order_by("sequence")
        return success_response(S.RouteStopRead(stops, many=True).data)


class RouteStopDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.route.view", "POST": "transport.route.create", "PATCH": "transport.route.update", "PUT": "transport.route.update", "DELETE": "transport.route.delete"}

    def _get(self, request, route_id, stop_id):
        route = scoped_qs(Route, scope_company_id(request)).filter(id=route_id).first()
        if not route:
            return None
        return route.stops.filter(id=stop_id, is_deleted=False).select_related("service_point").first()

    def patch(self, request, route_id, stop_id):
        stop = self._get(request, route_id, stop_id)
        if not stop:
            return error_response("Escale introuvable.", status_code=404)
        payload = S.RouteStopWrite(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        d = dict(payload.validated_data)
        if "service_point_id" in d:
            sp = cfg_lookup(ServicePoint, d.pop("service_point_id"), stop.company_id)
            if not sp:
                return error_response("Point de service introuvable.", status_code=404)
            stop.service_point = sp
        if d.get("sequence") and d["sequence"] != stop.sequence:
            if stop.route.stops.filter(is_deleted=False, sequence=d["sequence"]).exclude(id=stop.id).exists():
                return error_response(f"L'ordre {d['sequence']} existe déjà sur ce trajet.")
        for k, v in d.items():
            setattr(stop, k, v)
        stop.updated_by = request.user
        stop.save()
        return success_response(S.RouteStopRead(stop).data)

    def delete(self, request, route_id, stop_id):
        stop = self._get(request, route_id, stop_id)
        if not stop:
            return error_response("Escale introuvable.", status_code=404)
        stop.is_deleted = True
        stop.updated_by = request.user
        stop.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return no_content_response()


# ── SeatingPlan (plan de bus) + seats ─────────────────────────────────────────

class SeatingPlanListView(_ConfigListView):
    model = SeatingPlan
    read = S.SeatingPlanRead
    write = S.SeatingPlanWrite
    unique_field = "code"
    search_fields = ["code", "name"]


class SeatingPlanDetailView(_ConfigDetailView):
    model = SeatingPlan
    read = S.SeatingPlanRead
    write = S.SeatingPlanWrite
    unique_field = "code"


SeatingPlanBulkDeleteView = _bulk(SeatingPlan)


# ── ServicePattern (planification) ────────────────────────────────────────────

_PATTERN_FK_FIELDS = {
    "route_id": Route, "time_slot_id": TimeSlot,
    "fare_class_id": FareClass, "default_seating_plan_id": SeatingPlan,
}


def _resolve_pattern_fks(d, company_id):
    """Pop *_id keys → set model instances on a kwargs dict. Returns (kwargs, error)."""
    out = {}
    mapping = {"route_id": "route", "time_slot_id": "time_slot",
               "fare_class_id": "fare_class", "default_seating_plan_id": "default_seating_plan"}
    for key, model_cls in _PATTERN_FK_FIELDS.items():
        if key in d:
            cid = d.pop(key)
            if cid is None:
                out[mapping[key]] = None
                continue
            obj = cfg_lookup(model_cls, cid, company_id)
            if not obj:
                return None, f"Référence introuvable ({mapping[key]})."
            out[mapping[key]] = obj
    return out, None


class ServicePatternListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.config.view", "POST": "transport.config.manage", "PATCH": "transport.config.manage", "PUT": "transport.config.manage", "DELETE": "transport.config.manage"}

    def get(self, request):
        qs = (scoped_qs(ServicePattern, scope_company_id(request))
              .select_related("route", "time_slot", "fare_class", "default_seating_plan")
              .order_by("route__code"))
        rid = request.query_params.get("route_id")
        if rid:
            qs = qs.filter(route_id=rid)
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(S.ServicePatternRead(page, many=True).data)

    def post(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        payload = S.ServicePatternWrite(data=request.data)
        payload.is_valid(raise_exception=True)
        d = dict(payload.validated_data)
        cid = company.id if company else None
        fks, ferr = _resolve_pattern_fks(d, cid)
        if ferr:
            return error_response(ferr, status_code=404)
        obj = ServicePattern.objects.create(company=company, created_by=request.user, **fks, **d)
        return created_response(S.ServicePatternRead(obj).data)


class ServicePatternDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.config.view", "POST": "transport.config.manage", "PATCH": "transport.config.manage", "PUT": "transport.config.manage", "DELETE": "transport.config.manage"}

    def _get(self, request, pk):
        return scoped_qs(ServicePattern, scope_company_id(request)).filter(id=pk).first()

    def get(self, request, pk):
        obj = self._get(request, pk)
        return success_response(S.ServicePatternRead(obj).data) if obj else error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)

    def patch(self, request, pk):
        obj = self._get(request, pk)
        if not obj:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        payload = S.ServicePatternWrite(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        d = dict(payload.validated_data)
        fks, ferr = _resolve_pattern_fks(d, obj.company_id)
        if ferr:
            return error_response(ferr, status_code=404)
        for k, v in {**fks, **d}.items():
            setattr(obj, k, v)
        obj.updated_by = request.user
        obj.save()
        return success_response(S.ServicePatternRead(obj).data)

    def delete(self, request, pk):
        obj = self._get(request, pk)
        if not obj:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        obj.is_deleted = True
        obj.updated_by = request.user
        obj.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return no_content_response()


ServicePatternBulkDeleteView = _bulk(ServicePattern)


# ── VoyagesSettings (singleton per company) ───────────────────────────────────

class VoyagesSettingsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.config.view", "POST": "transport.config.manage", "PATCH": "transport.config.manage", "PUT": "transport.config.manage", "DELETE": "transport.config.manage"}

    def get(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        obj, _created = VoyagesSettings.objects.get_or_create(
            company=company, defaults={"created_by": request.user})
        return success_response(S.VoyagesSettingsRead(obj).data)

    def patch(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        obj, _created = VoyagesSettings.objects.get_or_create(
            company=company, defaults={"created_by": request.user})
        payload = S.VoyagesSettingsWrite(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        for k, v in payload.validated_data.items():
            setattr(obj, k, v)
        obj.updated_by = request.user
        obj.save()
        return success_response(S.VoyagesSettingsRead(obj).data)


# ── TicketTemplate (Config billets, singleton per company) ────────────────────

class TicketTemplateView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.config.view", "POST": "transport.config.manage", "PATCH": "transport.config.manage", "PUT": "transport.config.manage", "DELETE": "transport.config.manage"}
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def get(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        obj = ticket_render.get_or_create_template(company)
        return success_response(S.TicketTemplateSerializer(obj, context={"request": request}).data)

    def put(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        obj = ticket_render.get_or_create_template(company)
        payload = S.TicketTemplateSerializer(obj, data=request.data, partial=True, context={"request": request})
        payload.is_valid(raise_exception=True)
        payload.save(updated_by=request.user)
        return success_response(payload.data)


def _get_or_create_manifest_template(company):
    from apps.voyages_config.models import ManifestTemplate, DEFAULT_SIGN_VOYAGE, DEFAULT_SIGN_COLIS
    obj, created = ManifestTemplate.objects.get_or_create(
        company=company,
        defaults={"sign_labels_voyage": list(DEFAULT_SIGN_VOYAGE),
                  "sign_labels_colis": list(DEFAULT_SIGN_COLIS)})
    return obj


class ManifestTemplateView(APIView):
    """Config manifestes (en-tête / pied des bordereaux), singleton par institution."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.config.view", "POST": "transport.config.manage", "PATCH": "transport.config.manage", "PUT": "transport.config.manage", "DELETE": "transport.config.manage"}
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def get(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        obj = _get_or_create_manifest_template(company)
        return success_response(S.ManifestTemplateSerializer(obj, context={"request": request}).data)

    def put(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        obj = _get_or_create_manifest_template(company)
        payload = S.ManifestTemplateSerializer(obj, data=request.data, partial=True, context={"request": request})
        payload.is_valid(raise_exception=True)
        payload.save(updated_by=request.user)
        return success_response(payload.data)


class DocumentFormatsView(APIView):
    """Tailles (formats papier) des documents, réglables par institution.
    GET -> liste de {code, label, width_mm, height_mm} ; PUT -> upsert en lot."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.config.view", "PUT": "transport.config.manage"}

    def get(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        from apps.voyages_config.doc_format import DOC_DEFS, resolve_doc_format
        items = []
        for code, label, _w, _h in DOC_DEFS:
            w, h = resolve_doc_format(company, code)
            items.append({"code": code, "label": label, "width_mm": w, "height_mm": h})
        return success_response(items)

    def put(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        from apps.voyages_config.models import DocumentFormat
        from apps.voyages_config.doc_format import DEFAULT_FORMATS
        rows = request.data if isinstance(request.data, list) else request.data.get("items", [])
        valid = set(DEFAULT_FORMATS)
        for r in rows:
            code = r.get("code")
            if code not in valid:
                continue
            try:
                w = float(r.get("width_mm")); h = float(r.get("height_mm"))
            except (TypeError, ValueError):
                return error_response("Dimensions invalides.")
            if w <= 0 or h < 0:
                return error_response("La largeur doit être positive et la hauteur ≥ 0 (0 = auto).")
            DocumentFormat.objects.update_or_create(
                company=company, code=code, defaults={"width_mm": w, "height_mm": h})
        return self.get(request)


class PrinterMappingView(APIView):
    """Mappage document → imprimante (central par agence) + liste des imprimantes vues par
    l'agent Windows local. GET -> {documents, printers, helper}; PUT -> upsert."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.config.view", "PUT": "transport.config.manage"}

    def get(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        from apps.voyages_config.doc_format import DOC_DEFS
        from apps.voyages_config.models import PrinterConfig
        from apps.voyages_config import printing
        mapped = {pc.doc_code: pc.printer_name for pc in PrinterConfig.objects.filter(company=company)}
        documents = [{"code": code, "label": label, "printer_name": mapped.get(code, "")}
                     for code, label, _w, _h in DOC_DEFS]
        printers = printing.helper_printers()
        return success_response({"documents": documents, "printers": printers,
                                 "helper": bool(printing.helper_url())})

    def put(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        from apps.voyages_config.doc_format import DEFAULT_FORMATS
        from apps.voyages_config.models import PrinterConfig
        rows = request.data if isinstance(request.data, list) else request.data.get("items", [])
        valid = set(DEFAULT_FORMATS)
        for r in rows:
            code = r.get("code")
            if code not in valid:
                continue
            PrinterConfig.objects.update_or_create(
                company=company, doc_code=code,
                defaults={"printer_name": (r.get("printer_name") or "").strip()})
        return self.get(request)


class DocumentPrintView(APIView):
    """Impression serveur d'un document (via l'agent) avec repli navigateur.
    POST {doc, id} -> {printed: bool, html: str|null}."""
    permission_classes = [IsAuthenticated]

    def post(self, request):
        company = getattr(request.user, "company", None)
        if company is None:
            return error_response("Aucune institution.", status_code=400)
        from apps.voyages_config import printing
        doc = request.data.get("doc")
        obj_id = request.data.get("id")
        if not doc or not obj_id:
            return error_response("Paramètres 'doc' et 'id' requis.")
        res = printing.print_or_fallback(company, doc, obj_id, request=request)
        if res.get("error") == "not_found":
            return error_response("Document introuvable.", status_code=404)
        return success_response(res)


class DocumentHtmlView(APIView):
    """HTML brut d'un document (sans impression serveur). Utilisé par l'impression
    par poste : le navigateur récupère le HTML puis l'envoie à l'agent local du poste
    (http://127.0.0.1:9113) qui imprime sur l'imprimante de CE poste. POST {doc,id} -> {html}."""
    permission_classes = [IsAuthenticated]

    def post(self, request):
        company = getattr(request.user, "company", None)
        if company is None:
            return error_response("Aucune institution.", status_code=400)
        from apps.voyages_config import printing
        doc = request.data.get("doc")
        obj_id = request.data.get("id")
        if not doc or not obj_id:
            return error_response("Paramètres 'doc' et 'id' requis.")
        html = printing.build_doc_html(company, doc, obj_id, request)
        if html is None:
            return error_response("Document introuvable.", status_code=404)
        return success_response({"html": html})


class TicketTemplateResetView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.config.view", "POST": "transport.config.manage", "PATCH": "transport.config.manage", "PUT": "transport.config.manage", "DELETE": "transport.config.manage"}

    def post(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        obj = ticket_render.get_or_create_template(company)
        obj.delete()  # supprime le modele actuel...
        fresh = ticket_render.get_or_create_template(company)  # ...et recree le defaut (pre-rempli societe)
        return success_response(S.TicketTemplateSerializer(fresh, context={"request": request}).data)


class TicketTemplatePreviewView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.config.view", "POST": "transport.config.manage", "PATCH": "transport.config.manage", "PUT": "transport.config.manage", "DELETE": "transport.config.manage"}
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def post(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        # Applique les valeurs postees sur une copie non persistee du modele.
        obj = ticket_render.get_or_create_template(company)
        payload = S.TicketTemplateSerializer(obj, data=request.data, partial=True, context={"request": request})
        payload.is_valid(raise_exception=True)
        for k, v in payload.validated_data.items():
            setattr(obj, k, v)
        tokens = ticket_render.sample_tokens()
        pages = ticket_render.build_ticket_pages(obj, tokens, request=request)
        return success_response({"html": ticket_render.render_document(pages, tpl=obj),
                                 "tokens": ticket_render.TOKENS})

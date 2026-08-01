from django.db.models import Q
from rest_framework.views import APIView
from apps.core.permissions import IsInstitutionAdmin
from apps.core.responses import success_response, created_response, error_response, no_content_response
from apps.core.exceptions import ApplicationError
from apps.core.pagination import StandardResultsSetPagination
from apps.voyages_config.models import (
    Town, ServicePoint, FareClass, TimeSlot,
    ConsignmentNature, ConsignmentType, LoyaltyRule,
    Route, RouteStop,
)
from . import serializers as S
from .common import scope_company_id, resolve_company_or_global, scoped_qs, ensure_unique, cfg_lookup


# ── Generic scoped-config views (mirrors apps.fleet.config_api) ────────────────

class _ConfigListView(APIView):
    permission_classes = [IsInstitutionAdmin]
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
    permission_classes = [IsInstitutionAdmin]
    model = None
    read = None
    write = None
    unique_field = "name"

    def _get(self, request, pk):
        return scoped_qs(self.model, scope_company_id(request)).filter(id=pk).first()

    def get(self, request, pk):
        obj = self._get(request, pk)
        return success_response(self.read(obj).data) if obj else error_response("Introuvable.", status_code=404)

    def patch(self, request, pk):
        obj = self._get(request, pk)
        if not obj:
            return error_response("Introuvable.", status_code=404)
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
            return error_response("Introuvable.", status_code=404)
        obj.is_deleted = True
        obj.updated_by = request.user
        obj.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return no_content_response()


class _ConfigBulkDeleteView(APIView):
    permission_classes = [IsInstitutionAdmin]
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


def _pair(model_cls, read_cls, write_cls, unique="name", search=("name",)):
    lst = type(f"{model_cls.__name__}ListView", (_ConfigListView,),
               {"model": model_cls, "read": read_cls, "write": write_cls,
                "unique_field": unique, "search_fields": list(search)})
    det = type(f"{model_cls.__name__}DetailView", (_ConfigDetailView,),
               {"model": model_cls, "read": read_cls, "write": write_cls, "unique_field": unique})
    return lst, det


def _bulk(model_cls):
    return type(f"{model_cls.__name__}BulkDeleteView", (_ConfigBulkDeleteView,), {"model": model_cls})


# ── Simple reference tables ───────────────────────────────────────────────────
TownListView, TownDetailView = _pair(Town, S.TownRead, S.TownWrite, unique="name", search=("name", "code"))
FareClassListView, FareClassDetailView = _pair(FareClass, S.FareClassRead, S.FareClassWrite, unique="code", search=("code", "name"))
TimeSlotListView, TimeSlotDetailView = _pair(TimeSlot, S.TimeSlotRead, S.TimeSlotWrite, unique="code", search=("code", "label"))
ConsignmentNatureListView, ConsignmentNatureDetailView = _pair(ConsignmentNature, S.ConsignmentNatureRead, S.ConsignmentNatureWrite, unique="code", search=("code", "name"))
LoyaltyRuleListView, LoyaltyRuleDetailView = _pair(LoyaltyRule, S.LoyaltyRuleRead, S.LoyaltyRuleWrite, unique="name", search=("name",))

TownBulkDeleteView = _bulk(Town)
FareClassBulkDeleteView = _bulk(FareClass)
TimeSlotBulkDeleteView = _bulk(TimeSlot)
ConsignmentNatureBulkDeleteView = _bulk(ConsignmentNature)
LoyaltyRuleBulkDeleteView = _bulk(LoyaltyRule)


# ── ServicePoint (FK: town) ───────────────────────────────────────────────────
class ServicePointListView(_ConfigListView):
    model = ServicePoint
    read = S.ServicePointRead
    write = S.ServicePointWrite
    unique_field = "code"
    search_fields = ["code", "name"]

    def _create(self, company, data, user):
        cid = company.id if company else None
        town = cfg_lookup(Town, data.pop("town_id", None), cid)
        return ServicePoint.objects.create(company=company, created_by=user, town=town, **data)


class ServicePointDetailView(_ConfigDetailView):
    model = ServicePoint
    read = S.ServicePointRead
    write = S.ServicePointWrite
    unique_field = "code"

    def _apply(self, obj, data):
        if "town_id" in data:
            obj.town = cfg_lookup(Town, data.pop("town_id"), obj.company_id)
        for k, v in data.items():
            setattr(obj, k, v)


ServicePointBulkDeleteView = _bulk(ServicePoint)


# ── ConsignmentType (FK: nature) ──────────────────────────────────────────────
class ConsignmentTypeListView(_ConfigListView):
    model = ConsignmentType
    read = S.ConsignmentTypeRead
    write = S.ConsignmentTypeWrite
    unique_field = "code"
    search_fields = ["code", "label"]

    def _create(self, company, data, user):
        cid = company.id if company else None
        nature = cfg_lookup(ConsignmentNature, data.pop("nature_id", None), cid)
        return ConsignmentType.objects.create(company=company, created_by=user, nature=nature, **data)


class ConsignmentTypeDetailView(_ConfigDetailView):
    model = ConsignmentType
    read = S.ConsignmentTypeRead
    write = S.ConsignmentTypeWrite
    unique_field = "code"

    def _apply(self, obj, data):
        if "nature_id" in data:
            obj.nature = cfg_lookup(ConsignmentNature, data.pop("nature_id"), obj.company_id)
        for k, v in data.items():
            setattr(obj, k, v)


ConsignmentTypeBulkDeleteView = _bulk(ConsignmentType)


# ── Route (trajet) + escales ──────────────────────────────────────────────────

class RouteListView(APIView):
    permission_classes = [IsInstitutionAdmin]

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
            return error_response("Point de service introuvable.", status_code=404)
        if not origin.is_station or not dest.is_station:
            return error_response("Origine et destination doivent être des gares/agences.")
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
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, pk):
        return (scoped_qs(Route, scope_company_id(request))
                .select_related("origin", "destination")
                .prefetch_related("stops__service_point").filter(id=pk).first())

    def get(self, request, pk):
        route = self._get(request, pk)
        return success_response(S.RouteRead(route).data) if route else error_response("Introuvable.", status_code=404)

    def patch(self, request, pk):
        route = self._get(request, pk)
        if not route:
            return error_response("Introuvable.", status_code=404)
        payload = S.RouteWrite(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        d = dict(payload.validated_data)
        if "origin_id" in d:
            origin = cfg_lookup(ServicePoint, d.pop("origin_id"), route.company_id)
            if not origin or not origin.is_station:
                return error_response("L'origine doit être une gare/agence.")
            route.origin = origin
        if "destination_id" in d:
            dest = cfg_lookup(ServicePoint, d.pop("destination_id"), route.company_id)
            if not dest or not dest.is_station:
                return error_response("La destination doit être une gare/agence.")
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
            return error_response("Introuvable.", status_code=404)
        route.is_deleted = True
        route.updated_by = request.user
        route.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return no_content_response()


class RouteStopListView(APIView):
    permission_classes = [IsInstitutionAdmin]

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


class RouteStopDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

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

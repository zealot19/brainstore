from django.db.models import Q
from rest_framework.views import APIView
from apps.core.permissions import IsInstitutionAdmin
from apps.core.responses import success_response, created_response, error_response, no_content_response
from apps.core.exceptions import ApplicationError
from apps.core.pagination import StandardResultsSetPagination
from apps.voyages_config.models import (
    Town, ServicePoint, FareClass, TimeSlot,
    ConsignmentNature, ConsignmentType, LoyaltyRule,
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

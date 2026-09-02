from django.db.models import Q
from rest_framework.views import APIView
from apps.core.permissions import IsInstitutionAdmin, IsAuthenticated, HasModulePermission
from apps.core.responses import success_response, created_response, error_response, no_content_response
from apps.core.exceptions import ApplicationError
from apps.core.pagination import StandardResultsSetPagination
from apps.fleet.models import (
    VehicleCategoryCfg, FuelType, Transmission, TractionType,
    UnitCategory, Unit, Period, DocumentType, Tag, InterventionType, ActivitySector,
)
from . import serializers as S
from .common import scope_company_id, resolve_company_or_global, scoped_qs, ensure_unique


class _ConfigListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "fleet.config.view", "POST": "fleet.config.manage"}
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
    permission_map = {"GET": "fleet.config.view", "PATCH": "fleet.config.manage", "PUT": "fleet.config.manage", "DELETE": "fleet.config.manage"}
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
    permission_map = {"POST": "fleet.config.manage"}
    model = None

    def post(self, request):
        ids = request.data.get("ids") or []
        if not isinstance(ids, list) or not ids:
            return error_response("Aucun élément sélectionné.")
        company_id = scope_company_id(request)
        # Only company-owned rows may be bulk-deleted; globals are read-only.
        qs = self.model.objects.filter(is_deleted=False, id__in=ids)
        if company_id:
            qs = qs.filter(company_id=company_id)
        else:
            qs = qs.filter(company__isnull=False)  # superuser: still never nuke globals in bulk
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


VehicleCategoryBulkDeleteView = _bulk(VehicleCategoryCfg)
FuelTypeBulkDeleteView        = _bulk(FuelType)
TransmissionBulkDeleteView    = _bulk(Transmission)
TractionTypeBulkDeleteView    = _bulk(TractionType)
UnitCategoryBulkDeleteView    = _bulk(UnitCategory)
UnitBulkDeleteView            = _bulk(Unit)
PeriodBulkDeleteView          = _bulk(Period)
DocumentTypeBulkDeleteView    = _bulk(DocumentType)
TagBulkDeleteView             = _bulk(Tag)
InterventionTypeBulkDeleteView = _bulk(InterventionType)
ActivitySectorBulkDeleteView  = _bulk(ActivitySector)


VehicleCategoryListView, VehicleCategoryDetailView = _pair(VehicleCategoryCfg, S.VehicleCategoryReadSerializer, S.NameWriteSerializer)
FuelTypeListView, FuelTypeDetailView               = _pair(FuelType, S.FuelTypeReadSerializer, S.NameWriteSerializer)
TransmissionListView, TransmissionDetailView       = _pair(Transmission, S.TransmissionReadSerializer, S.NameWriteSerializer)
TractionTypeListView, TractionTypeDetailView       = _pair(TractionType, S.TractionTypeReadSerializer, S.NameWriteSerializer)
UnitCategoryListView, UnitCategoryDetailView       = _pair(UnitCategory, S.UnitCategoryReadSerializer, S.NameWriteSerializer)
PeriodListView, PeriodDetailView                   = _pair(Period, S.PeriodReadSerializer, S.NameWriteSerializer)
TagListView, TagDetailView                         = _pair(Tag, S.TagReadSerializer, S.TagWriteSerializer)
InterventionTypeListView, InterventionTypeDetailView = _pair(InterventionType, S.InterventionTypeReadSerializer, S.InterventionTypeWriteSerializer)
DocumentTypeListView, DocumentTypeDetailView       = _pair(DocumentType, S.DocumentTypeReadSerializer, S.DocumentTypeWriteSerializer, unique="code", search=("code", "label"))
ActivitySectorListView, ActivitySectorDetailView   = _pair(ActivitySector, S.ActivitySectorReadSerializer, S.ActivitySectorWriteSerializer, unique="code", search=("code", "name"))


class UnitListView(_ConfigListView):
    model = Unit
    read = S.UnitReadSerializer
    write = S.UnitWriteSerializer
    unique_field = "code"
    search_fields = ["code", "name"]

    def _create(self, company, data, user):
        cat_id = data.pop("unit_category_id")
        return Unit.objects.create(company=company, created_by=user, unit_category_id=cat_id, **data)


class UnitDetailView(_ConfigDetailView):
    model = Unit
    read = S.UnitReadSerializer
    write = S.UnitWriteSerializer
    unique_field = "code"

    def _apply(self, obj, data):
        if "unit_category_id" in data:
            obj.unit_category_id = data.pop("unit_category_id")
        for k, v in data.items():
            setattr(obj, k, v)

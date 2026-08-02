from rest_framework.views import APIView
from apps.core.permissions import IsInstitutionAdmin
from apps.core.responses import success_response, created_response, error_response, no_content_response
from apps.core.exceptions import ApplicationError
from apps.core.pagination import StandardResultsSetPagination
from apps.voyages_config.models import Route, ServicePoint, FareClass
from apps.voyages_pricing.models import Fare
from apps.voyages_pricing import selectors, services
from . import serializers as S
from .common import scope_company_id, resolve_company_or_global, scoped_qs, cfg_lookup


class FareListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        qs = (scoped_qs(Fare, scope_company_id(request))
              .select_related("route", "origin_point", "destination_point", "fare_class")
              .order_by("route__code", "amount"))
        rid = request.query_params.get("route_id")
        if rid:
            qs = qs.filter(route_id=rid)
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(S.FareRead(page, many=True).data)

    def post(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        payload = S.FareWrite(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        cid = company.id if company else None
        route = cfg_lookup(Route, d["route_id"], cid)
        if not route:
            return error_response("Trajet introuvable.", status_code=404)
        origin = cfg_lookup(ServicePoint, d["origin_point_id"], cid)
        dest = cfg_lookup(ServicePoint, d["destination_point_id"], cid)
        fare_class = cfg_lookup(FareClass, d["fare_class_id"], cid)
        if not origin or not dest or not fare_class:
            return error_response("Référence introuvable (point ou catégorie).", status_code=404)
        try:
            fare = services.create_fare(
                company=company, route=route, origin_point=origin, destination_point=dest,
                fare_class=fare_class, amount=d["amount"], currency=d["currency"],
                valid_from=d["valid_from"], valid_to=d["valid_to"], user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(S.FareRead(fare).data)


class FareDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, pk):
        return scoped_qs(Fare, scope_company_id(request)).filter(id=pk).first()

    def get(self, request, pk):
        fare = self._get(request, pk)
        return success_response(S.FareRead(fare).data) if fare else error_response("Introuvable.", status_code=404)

    def patch(self, request, pk):
        fare = self._get(request, pk)
        if not fare:
            return error_response("Introuvable.", status_code=404)
        payload = S.FareWrite(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        d = dict(payload.validated_data)
        cid = fare.company_id
        fields = {}
        if "route_id" in d:
            return error_response("Le trajet d'un tarif ne peut pas être changé.")
        if "origin_point_id" in d:
            sp = cfg_lookup(ServicePoint, d.pop("origin_point_id"), cid)
            if not sp:
                return error_response("Point introuvable.", status_code=404)
            fields["origin_point"] = sp
        if "destination_point_id" in d:
            sp = cfg_lookup(ServicePoint, d.pop("destination_point_id"), cid)
            if not sp:
                return error_response("Point introuvable.", status_code=404)
            fields["destination_point"] = sp
        if "fare_class_id" in d:
            fc = cfg_lookup(FareClass, d.pop("fare_class_id"), cid)
            if not fc:
                return error_response("Catégorie introuvable.", status_code=404)
            fields["fare_class"] = fc
        for k in ("amount", "currency", "valid_from", "valid_to", "is_active"):
            if k in d:
                fields[k] = d[k]
        try:
            fare = services.update_fare(fare, user=request.user, **fields)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.FareRead(fare).data)

    def delete(self, request, pk):
        fare = self._get(request, pk)
        if not fare:
            return error_response("Introuvable.", status_code=404)
        services.delete_fare(fare, user=request.user)
        return no_content_response()


class FareBulkDeleteView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request):
        ids = request.data.get("ids") or []
        if not isinstance(ids, list) or not ids:
            return error_response("Aucun élément sélectionné.")
        company_id = scope_company_id(request)
        qs = Fare.objects.filter(is_deleted=False, id__in=ids)
        qs = qs.filter(company_id=company_id) if company_id else qs.filter(company__isnull=False)
        count = 0
        for fare in qs:
            services.delete_fare(fare, user=request.user)
            count += 1
        return success_response({"deleted": count})


class RoutePointsView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, route_id):
        route = cfg_lookup(Route, route_id, scope_company_id(request))
        if not route:
            return error_response("Trajet introuvable.", status_code=404)
        pts = selectors.route_points(route)
        data = [{"id": p.id, "name": p.name, "code": p.code,
                 "is_station": p.is_station, "station_kind": p.station_kind} for p in pts]
        return success_response(S.RoutePointSerializer(data, many=True).data)

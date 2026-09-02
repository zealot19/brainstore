from django.utils.translation import gettext_lazy as _
from rest_framework.views import APIView

from apps.core.permissions import IsInstitutionAdmin, IsSuperAdmin
from apps.core.responses import success_response, created_response, error_response, no_content_response
from apps.core.exceptions import ApplicationError
from apps.core.pagination import StandardResultsSetPagination
from apps.system_config.models import Company

from . import selectors, services
from .serializers import (
    CitySerializer, CityWriteSerializer,
    TerminalSerializer, TerminalWriteSerializer,
    RouteSerializer, RouteDetailSerializer, RouteWriteSerializer, RouteUpdateSerializer,
    RouteStopSerializer, RouteStopWriteSerializer,
    VehicleCategorySerializer, VehicleCategoryWriteSerializer,
    FareClassSerializer, FareClassWriteSerializer,
    FareSerializer, FareWriteSerializer, FareUpdateSerializer,
)


# ── Helpers ────────────────────────────────────────────────────────────────────

def _scope_company_id(request):
    if request.user.is_superuser:
        return request.query_params.get("company_id")
    return str(request.user.company_id) if request.user.company_id else None


def _resolve_company(request, body_company_id=None):
    if request.user.is_superuser:
        cid = body_company_id or request.query_params.get("company_id")
        if not cid:
            return None, error_response(_("company_id required for super administrators."))
        try:
            return Company.objects.get(id=cid), None
        except Company.DoesNotExist:
            return None, error_response(_("Institution introuvable."), status_code=404)
    company = request.user.company
    if not company:
        return None, error_response(_("Your account is not linked to a company."))
    return company, None


def _parse_bool(v):
    if v is None:
        return None
    return str(v).lower() in ("true", "1", "yes")


# ══════════════════════════════════════════════════════════════════════════════
# CITIES
# ══════════════════════════════════════════════════════════════════════════════

class CityListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        cities = selectors.list_cities(
            search=request.query_params.get("search"),
            is_active=_parse_bool(request.query_params.get("is_active")),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(cities, request)
        return paginator.get_paginated_response(CitySerializer(page, many=True).data)

    def post(self, request):
        payload = CityWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        try:
            city = services.create_city(created_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(CitySerializer(city).data)


class CityDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, city_id):
        city = selectors.get_city(city_id)
        if not city:
            return error_response(_("City not found."), status_code=404)
        return success_response(CitySerializer(city).data)

    def patch(self, request, city_id):
        city = selectors.get_city(city_id)
        if not city:
            return error_response(_("City not found."), status_code=404)
        payload = CityWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            city = services.update_city(city, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(CitySerializer(city).data)

    def delete(self, request, city_id):
        city = selectors.get_city(city_id)
        if not city:
            return error_response(_("City not found."), status_code=404)
        try:
            services.delete_city(city, deleted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return no_content_response()


# ══════════════════════════════════════════════════════════════════════════════
# TERMINALS
# ══════════════════════════════════════════════════════════════════════════════

class TerminalListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("company_id required."))
        terminals = selectors.list_terminals(
            company_id,
            city_id=request.query_params.get("city_id"),
            is_active=_parse_bool(request.query_params.get("is_active")),
            search=request.query_params.get("search"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(terminals, request)
        return paginator.get_paginated_response(TerminalSerializer(page, many=True).data)

    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = TerminalWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        city = selectors.get_city(d["city_id"])
        if not city:
            return error_response(_("City not found."), status_code=404)
        try:
            terminal = services.create_terminal(
                company=company, city=city,
                name=d["name"], address=d["address"], phone=d["phone"],
                gps_lat=d["gps_lat"], gps_lng=d["gps_lng"],
                is_active=d["is_active"], notes=d["notes"],
                created_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(TerminalSerializer(terminal).data)


class TerminalDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, terminal_id):
        return selectors.get_terminal(terminal_id, _scope_company_id(request))

    def get(self, request, terminal_id):
        t = self._get(request, terminal_id)
        if not t:
            return error_response(_("Point de service introuvable."), status_code=404)
        return success_response(TerminalSerializer(t).data)

    def patch(self, request, terminal_id):
        t = self._get(request, terminal_id)
        if not t:
            return error_response(_("Point de service introuvable."), status_code=404)
        payload = TerminalWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        if "city_id" in d:
            city = selectors.get_city(d.pop("city_id"))
            if not city:
                return error_response(_("City not found."), status_code=404)
            d["city_id"] = city.id
        try:
            t = services.update_terminal(t, updated_by=request.user, **d)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(TerminalSerializer(t).data)

    def delete(self, request, terminal_id):
        t = self._get(request, terminal_id)
        if not t:
            return error_response(_("Point de service introuvable."), status_code=404)
        try:
            services.delete_terminal(t, deleted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return no_content_response()


# ══════════════════════════════════════════════════════════════════════════════
# ROUTES
# ══════════════════════════════════════════════════════════════════════════════

class RouteListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("company_id required."))
        routes = selectors.list_routes(
            company_id,
            from_city_id=request.query_params.get("from_city_id"),
            to_city_id=request.query_params.get("to_city_id"),
            is_active=_parse_bool(request.query_params.get("is_active")),
            search=request.query_params.get("search"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(routes, request)
        return paginator.get_paginated_response(RouteSerializer(page, many=True).data)

    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = RouteWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        company_id = str(company.id)
        from_terminal = selectors.get_terminal(d["from_terminal_id"], company_id)
        to_terminal   = selectors.get_terminal(d["to_terminal_id"], company_id)
        if not from_terminal:
            return error_response(_("Departure terminal not found."), status_code=404)
        if not to_terminal:
            return error_response(_("Arrival terminal not found."), status_code=404)
        try:
            route = services.create_route(
                company=company,
                from_terminal=from_terminal, to_terminal=to_terminal,
                name=d["name"], distance_km=d["distance_km"],
                duration_minutes=d["duration_minutes"],
                is_active=d["is_active"], notes=d["notes"],
                created_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(RouteDetailSerializer(route).data)


class RouteDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, route_id):
        return selectors.get_route(route_id, _scope_company_id(request))

    def get(self, request, route_id):
        route, stops = selectors.get_route_with_stops(route_id, _scope_company_id(request))
        if not route:
            return error_response(_("Route not found."), status_code=404)
        data = RouteDetailSerializer(route).data
        data["stops"] = RouteStopSerializer(stops, many=True).data
        return success_response(data)

    def patch(self, request, route_id):
        route = self._get(request, route_id)
        if not route:
            return error_response(_("Route not found."), status_code=404)
        payload = RouteUpdateSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            route = services.update_route(route, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(RouteSerializer(route).data)

    def delete(self, request, route_id):
        route = self._get(request, route_id)
        if not route:
            return error_response(_("Route not found."), status_code=404)
        services.delete_route(route, deleted_by=request.user)
        return no_content_response()


class RouteStopListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, route_id):
        stops = selectors.list_route_stops(route_id, _scope_company_id(request))
        if stops is None:
            return error_response(_("Route not found."), status_code=404)
        return success_response(RouteStopSerializer(stops, many=True).data)

    def post(self, request, route_id):
        company_id = _scope_company_id(request)
        route = selectors.get_route(route_id, company_id)
        if not route:
            return error_response(_("Route not found."), status_code=404)
        payload = RouteStopWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        terminal = selectors.get_terminal(d["terminal_id"], company_id)
        if not terminal:
            return error_response(_("Point de service introuvable."), status_code=404)
        try:
            stop = services.add_route_stop(
                route=route, terminal=terminal,
                stop_order=d["stop_order"],
                arrival_offset_minutes=d["arrival_offset_minutes"],
                distance_from_start_km=d["distance_from_start_km"],
                created_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(RouteStopSerializer(stop).data)


class RouteStopDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, route_id, stop_id):
        return selectors.get_route_stop(stop_id, route_id, _scope_company_id(request))

    def patch(self, request, route_id, stop_id):
        stop = self._get(request, route_id, stop_id)
        if not stop:
            return error_response(_("Route stop not found."), status_code=404)
        payload = RouteStopWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        d = {k: v for k, v in payload.validated_data.items() if k != "terminal_id"}
        stop = services.update_route_stop(stop, updated_by=request.user, **d)
        return success_response(RouteStopSerializer(stop).data)

    def delete(self, request, route_id, stop_id):
        stop = self._get(request, route_id, stop_id)
        if not stop:
            return error_response(_("Route stop not found."), status_code=404)
        services.remove_route_stop(stop, deleted_by=request.user)
        return no_content_response()


class RouteFaresView(APIView):
    """All fares for a specific route."""
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, route_id):
        company_id = _scope_company_id(request)
        route = selectors.get_route(route_id, company_id)
        if not route:
            return error_response(_("Route not found."), status_code=404)
        fares = selectors.get_fares_for_route(
            route_id, company_id,
            vehicle_category_id=request.query_params.get("vehicle_category_id"),
            fare_class_id=request.query_params.get("fare_class_id"),
            passenger_type=request.query_params.get("passenger_type"),
        )
        return success_response(FareSerializer(fares, many=True).data)


# ══════════════════════════════════════════════════════════════════════════════
# VEHICLE CATEGORIES
# ══════════════════════════════════════════════════════════════════════════════

class VehicleCategoryListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("company_id required."))
        categories = selectors.list_vehicle_categories(company_id, search=request.query_params.get("search"))
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(categories, request)
        return paginator.get_paginated_response(VehicleCategorySerializer(page, many=True).data)

    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = VehicleCategoryWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        category = services.create_vehicle_category(
            company=company, created_by=request.user, **payload.validated_data
        )
        return created_response(VehicleCategorySerializer(category).data)


class VehicleCategoryDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, category_id):
        return selectors.get_vehicle_category(category_id, _scope_company_id(request))

    def get(self, request, category_id):
        cat = self._get(request, category_id)
        if not cat:
            return error_response(_("Vehicle category not found."), status_code=404)
        return success_response(VehicleCategorySerializer(cat).data)

    def patch(self, request, category_id):
        cat = self._get(request, category_id)
        if not cat:
            return error_response(_("Vehicle category not found."), status_code=404)
        payload = VehicleCategoryWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        cat = services.update_vehicle_category(cat, updated_by=request.user, **payload.validated_data)
        return success_response(VehicleCategorySerializer(cat).data)

    def delete(self, request, category_id):
        cat = self._get(request, category_id)
        if not cat:
            return error_response(_("Vehicle category not found."), status_code=404)
        services.delete_vehicle_category(cat, deleted_by=request.user)
        return no_content_response()


# ══════════════════════════════════════════════════════════════════════════════
# FARE CLASSES
# ══════════════════════════════════════════════════════════════════════════════

class FareClassListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("company_id required."))
        classes = selectors.list_fare_classes(
            company_id, is_active=_parse_bool(request.query_params.get("is_active"))
        )
        return success_response(FareClassSerializer(classes, many=True).data)

    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = FareClassWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        fc = services.create_fare_class(company=company, created_by=request.user, **payload.validated_data)
        return created_response(FareClassSerializer(fc).data)


class FareClassDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, class_id):
        return selectors.get_fare_class(class_id, _scope_company_id(request))

    def get(self, request, class_id):
        fc = self._get(request, class_id)
        if not fc:
            return error_response(_("Fare class not found."), status_code=404)
        return success_response(FareClassSerializer(fc).data)

    def patch(self, request, class_id):
        fc = self._get(request, class_id)
        if not fc:
            return error_response(_("Fare class not found."), status_code=404)
        payload = FareClassWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        fc = services.update_fare_class(fc, updated_by=request.user, **payload.validated_data)
        return success_response(FareClassSerializer(fc).data)

    def delete(self, request, class_id):
        fc = self._get(request, class_id)
        if not fc:
            return error_response(_("Fare class not found."), status_code=404)
        try:
            services.delete_fare_class(fc, deleted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return no_content_response()


# ══════════════════════════════════════════════════════════════════════════════
# FARES
# ══════════════════════════════════════════════════════════════════════════════

class FareListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("company_id required."))
        fares = selectors.list_fares(
            company_id,
            route_id=request.query_params.get("route_id"),
            vehicle_category_id=request.query_params.get("vehicle_category_id"),
            fare_class_id=request.query_params.get("fare_class_id"),
            passenger_type=request.query_params.get("passenger_type"),
            is_active=_parse_bool(request.query_params.get("is_active")),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(fares, request)
        return paginator.get_paginated_response(FareSerializer(page, many=True).data)

    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = FareWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        company_id = str(company.id)
        route = selectors.get_route(d["route_id"], company_id)
        if not route:
            return error_response(_("Route not found."), status_code=404)
        vehicle_category = selectors.get_vehicle_category(d["vehicle_category_id"], company_id)
        if not vehicle_category:
            return error_response(_("Vehicle category not found."), status_code=404)
        fare_class = selectors.get_fare_class(d["fare_class_id"], company_id)
        if not fare_class:
            return error_response(_("Fare class not found."), status_code=404)
        try:
            fare = services.create_fare(
                company=company, route=route,
                vehicle_category=vehicle_category, fare_class=fare_class,
                passenger_type=d["passenger_type"], amount=d["amount"],
                currency=d["currency"], is_active=d["is_active"],
                created_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(FareSerializer(fare).data)


class FareDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, fare_id):
        return selectors.get_fare(fare_id, _scope_company_id(request))

    def get(self, request, fare_id):
        fare = self._get(request, fare_id)
        if not fare:
            return error_response(_("Fare not found."), status_code=404)
        return success_response(FareSerializer(fare).data)

    def patch(self, request, fare_id):
        fare = self._get(request, fare_id)
        if not fare:
            return error_response(_("Fare not found."), status_code=404)
        payload = FareUpdateSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        fare = services.update_fare(fare, updated_by=request.user, **payload.validated_data)
        return success_response(FareSerializer(fare).data)

    def delete(self, request, fare_id):
        fare = self._get(request, fare_id)
        if not fare:
            return error_response(_("Fare not found."), status_code=404)
        services.delete_fare(fare, deleted_by=request.user)
        return no_content_response()

from django.utils.translation import gettext_lazy as _
from rest_framework.views import APIView

from apps.core.permissions import IsInstitutionAdmin, IsSuperAdmin
from apps.core.responses import success_response, created_response, error_response, no_content_response
from apps.core.exceptions import ApplicationError
from apps.core.pagination import StandardResultsSetPagination
from apps.system_config.models import Company

from . import selectors, services
from .serializers import (
    VehicleBrandSerializer, VehicleBrandWriteSerializer,
    VehicleModelSerializer, VehicleModelWriteSerializer,
    ExternalDriverSerializer, ExternalDriverWriteSerializer,
    VehicleListSerializer, VehicleDetailSerializer,
    VehicleCreateSerializer, VehicleUpdateSerializer, OdometerUpdateSerializer,
    OdometerLogSerializer,
    FuelLogSerializer, FuelLogWriteSerializer,
    MaintenanceTypeSerializer, MaintenanceTypeWriteSerializer,
    MaintenanceOrderSerializer, MaintenanceOrderCreateSerializer,
    MaintenanceOrderUpdateSerializer, MaintenanceCompleteSerializer,
    InsuranceSerializer, InsuranceWriteSerializer,
    VehicleDocumentSerializer, VehicleDocumentWriteSerializer,
    AssignmentListSerializer, AssignmentDetailSerializer,
    AssignmentCreateSerializer, AssignmentUpdateSerializer,
    AssignmentStartSerializer, AssignmentCompleteSerializer,
    AccidentListSerializer, AccidentDetailSerializer,
    AccidentCreateSerializer, AccidentUpdateSerializer,
    AccidentCloseSerializer, AccidentStatusSerializer,
)
from .models import VehicleModel, Vehicle, MaintenanceType, MaintenanceOrder, Assignment, Accident


# ── Utilitaires ────────────────────────────────────────────────────────────────

def _scope_company_id(request):
    if request.user.is_superuser:
        return request.query_params.get("company_id")
    return str(request.user.company_id) if request.user.company_id else None


def _resolve_company(request, body_company_id=None):
    if request.user.is_superuser:
        cid = body_company_id or request.query_params.get("company_id")
        if not cid:
            return None, error_response(_("company_id requis pour les super administrateurs."))
        try:
            return Company.objects.get(id=cid), None
        except Company.DoesNotExist:
            return None, error_response(_("Institution introuvable."), status_code=404)
    company = request.user.company
    if not company:
        return None, error_response(_("Votre compte n'est pas associé à une institution."))
    return company, None


def _parse_bool(v):
    if v is None:
        return None
    return str(v).lower() in ("true", "1", "yes")


# ══════════════════════════════════════════════════════════════════════════════
# VEHICLE BRANDS
# ══════════════════════════════════════════════════════════════════════════════

class VehicleBrandListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        brands = selectors.list_vehicle_brands(search=request.query_params.get("search"))
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(brands, request)
        return paginator.get_paginated_response(VehicleBrandSerializer(page, many=True).data)

    def post(self, request):
        payload = VehicleBrandWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            brand = services.create_vehicle_brand(
                name=d["name"],
                country_of_origin=d["country_of_origin"],
                created_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(VehicleBrandSerializer(brand).data)


class VehicleBrandDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, brand_id):
        brand = selectors.get_vehicle_brand(brand_id)
        if not brand:
            return error_response(_("Marque introuvable."), status_code=404)
        return success_response(VehicleBrandSerializer(brand).data)

    def patch(self, request, brand_id):
        brand = selectors.get_vehicle_brand(brand_id)
        if not brand:
            return error_response(_("Marque introuvable."), status_code=404)
        payload = VehicleBrandWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            brand = services.update_vehicle_brand(brand, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(VehicleBrandSerializer(brand).data)

    def delete(self, request, brand_id):
        brand = selectors.get_vehicle_brand(brand_id)
        if not brand:
            return error_response(_("Marque introuvable."), status_code=404)
        try:
            services.delete_vehicle_brand(brand, deleted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return no_content_response()


# ══════════════════════════════════════════════════════════════════════════════
# VEHICLE MODELS
# ══════════════════════════════════════════════════════════════════════════════

class VehicleModelListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        models = selectors.list_vehicle_models(
            brand_id=request.query_params.get("brand_id"),
            vehicle_type=request.query_params.get("vehicle_type"),
            search=request.query_params.get("search"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(models, request)
        return paginator.get_paginated_response(VehicleModelSerializer(page, many=True).data)

    def post(self, request):
        payload = VehicleModelWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        brand = selectors.get_vehicle_brand(d["brand_id"])
        if not brand:
            return error_response(_("Marque introuvable."), status_code=404)
        try:
            model = services.create_vehicle_model(
                brand=brand, name=d["name"],
                vehicle_type=d["vehicle_type"], fuel_type=d["fuel_type"],
                seats=d["seats"], doors=d["doors"],
                horsepower=d["horsepower"], payload_kg=d["payload_kg"],
                created_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(VehicleModelSerializer(model).data)


class VehicleModelDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, model_id):
        model = selectors.get_vehicle_model(model_id)
        if not model:
            return error_response(_("Modèle introuvable."), status_code=404)
        return success_response(VehicleModelSerializer(model).data)

    def patch(self, request, model_id):
        model = selectors.get_vehicle_model(model_id)
        if not model:
            return error_response(_("Modèle introuvable."), status_code=404)
        payload = VehicleModelWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        if "brand_id" in d:
            brand = selectors.get_vehicle_brand(d.pop("brand_id"))
            if not brand:
                return error_response(_("Marque introuvable."), status_code=404)
            d["brand_id"] = brand.id
        try:
            model = services.update_vehicle_model(model, updated_by=request.user, **d)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(VehicleModelSerializer(model).data)

    def delete(self, request, model_id):
        model = selectors.get_vehicle_model(model_id)
        if not model:
            return error_response(_("Modèle introuvable."), status_code=404)
        try:
            services.delete_vehicle_model(model, deleted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return no_content_response()


# ══════════════════════════════════════════════════════════════════════════════
# EXTERNAL DRIVERS
# ══════════════════════════════════════════════════════════════════════════════

class ExternalDriverListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("company_id requis."))
        drivers = selectors.list_external_drivers(company_id, search=request.query_params.get("search"))
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(drivers, request)
        return paginator.get_paginated_response(ExternalDriverSerializer(page, many=True).data)

    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = ExternalDriverWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        driver = services.create_external_driver(company=company, created_by=request.user, **d)
        return created_response(ExternalDriverSerializer(driver).data)


class ExternalDriverDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, driver_id):
        company_id = _scope_company_id(request)
        return selectors.get_external_driver(driver_id, company_id)

    def get(self, request, driver_id):
        driver = self._get(request, driver_id)
        if not driver:
            return error_response(_("Conducteur externe introuvable."), status_code=404)
        return success_response(ExternalDriverSerializer(driver).data)

    def patch(self, request, driver_id):
        driver = self._get(request, driver_id)
        if not driver:
            return error_response(_("Conducteur externe introuvable."), status_code=404)
        payload = ExternalDriverWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        driver = services.update_external_driver(driver, updated_by=request.user, **payload.validated_data)
        return success_response(ExternalDriverSerializer(driver).data)

    def delete(self, request, driver_id):
        driver = self._get(request, driver_id)
        if not driver:
            return error_response(_("Conducteur externe introuvable."), status_code=404)
        services.delete_external_driver(driver, deleted_by=request.user)
        return no_content_response()


# ══════════════════════════════════════════════════════════════════════════════
# VEHICLES
# ══════════════════════════════════════════════════════════════════════════════

class VehicleListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("company_id requis."))
        vehicles = selectors.list_vehicles(
            company_id,
            agency_id=request.query_params.get("agency_id"),
            status=request.query_params.get("status"),
            vehicle_type=request.query_params.get("vehicle_type"),
            is_active=_parse_bool(request.query_params.get("is_active")),
            search=request.query_params.get("search"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(vehicles, request)
        return paginator.get_paginated_response(VehicleListSerializer(page, many=True).data)

    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = VehicleCreateSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        model = selectors.get_vehicle_model(d["model_id"])
        if not model:
            return error_response(_("Modèle de véhicule introuvable."), status_code=404)
        try:
            vehicle = services.create_vehicle(
                company=company, model=model,
                license_plate=d["license_plate"],
                vin=d["vin"], color=d["color"], year=d["year"],
                acquisition_date=d["acquisition_date"],
                acquisition_cost=d["acquisition_cost"],
                agency_id=d["agency_id"],
                internal_driver_id=d["internal_driver_id"],
                external_driver_id=d["external_driver_id"],
                tank_capacity_liters=d["tank_capacity_liters"],
                initial_odometer=d["initial_odometer"],
                notes=d["notes"],
                created_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(VehicleDetailSerializer(vehicle).data)


class VehicleDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get_vehicle(self, request, vehicle_id):
        company_id = _scope_company_id(request)
        return selectors.get_vehicle(vehicle_id, company_id)

    def get(self, request, vehicle_id):
        vehicle = self._get_vehicle(request, vehicle_id)
        if not vehicle:
            return error_response(_("Véhicule introuvable."), status_code=404)
        return success_response(VehicleDetailSerializer(vehicle).data)

    def patch(self, request, vehicle_id):
        vehicle = self._get_vehicle(request, vehicle_id)
        if not vehicle:
            return error_response(_("Véhicule introuvable."), status_code=404)
        payload = VehicleUpdateSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            vehicle = services.update_vehicle(vehicle, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(VehicleDetailSerializer(vehicle).data)

    def delete(self, request, vehicle_id):
        vehicle = self._get_vehicle(request, vehicle_id)
        if not vehicle:
            return error_response(_("Véhicule introuvable."), status_code=404)
        try:
            services.delete_vehicle(vehicle, deleted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return no_content_response()


class VehicleOdometerView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, vehicle_id):
        company_id = _scope_company_id(request)
        logs = selectors.list_vehicle_odometer_logs(vehicle_id, company_id)
        if logs is None:
            return error_response(_("Véhicule introuvable."), status_code=404)
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(logs, request)
        return paginator.get_paginated_response(OdometerLogSerializer(page, many=True).data)

    def post(self, request, vehicle_id):
        company_id = _scope_company_id(request)
        vehicle = selectors.get_vehicle(vehicle_id, company_id)
        if not vehicle:
            return error_response(_("Véhicule introuvable."), status_code=404)
        payload = OdometerUpdateSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            vehicle = services.update_vehicle_odometer(
                vehicle, value_km=d["value_km"], date=d["date"],
                note=d["note"], updated_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return success_response({"current_odometer": vehicle.current_odometer})


class VehicleStatsView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, vehicle_id):
        company_id = _scope_company_id(request)
        stats = selectors.get_vehicle_stats(vehicle_id, company_id)
        if stats is None:
            return error_response(_("Véhicule introuvable."), status_code=404)
        return success_response(stats)


class FleetAlertsView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("company_id requis."))
        try:
            days = int(request.query_params.get("days", 30))
        except (ValueError, TypeError):
            days = 30
        alerts = selectors.get_fleet_alerts(company_id, days_ahead=days)
        return success_response({
            "expiring_insurance": InsuranceSerializer(alerts["expiring_insurance"], many=True).data,
            "expiring_documents": VehicleDocumentSerializer(alerts["expiring_documents"], many=True).data,
            "overdue_maintenance": MaintenanceOrderSerializer(alerts["overdue_maintenance"], many=True).data,
        })


class FleetStatsView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("company_id requis."))
        return success_response(selectors.get_fleet_stats(company_id))


# ══════════════════════════════════════════════════════════════════════════════
# FUEL LOGS
# ══════════════════════════════════════════════════════════════════════════════

class VehicleFuelLogListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, vehicle_id):
        company_id = _scope_company_id(request)
        logs = selectors.list_vehicle_fuel_logs(vehicle_id, company_id)
        if logs is None:
            return error_response(_("Véhicule introuvable."), status_code=404)
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(logs, request)
        return paginator.get_paginated_response(FuelLogSerializer(page, many=True).data)

    def post(self, request, vehicle_id):
        company_id = _scope_company_id(request)
        vehicle = selectors.get_vehicle(vehicle_id, company_id)
        if not vehicle:
            return error_response(_("Véhicule introuvable."), status_code=404)
        payload = FuelLogWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            log = services.create_fuel_log(vehicle=vehicle, created_by=request.user, **d)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(FuelLogSerializer(log).data)


class FuelLogDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get_log(self, request, log_id):
        company_id = _scope_company_id(request)
        return selectors.get_fuel_log(log_id, company_id)

    def get(self, request, log_id):
        log = self._get_log(request, log_id)
        if not log:
            return error_response(_("Enregistrement introuvable."), status_code=404)
        return success_response(FuelLogSerializer(log).data)

    def patch(self, request, log_id):
        log = self._get_log(request, log_id)
        if not log:
            return error_response(_("Enregistrement introuvable."), status_code=404)
        payload = FuelLogWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        log = services.update_fuel_log(log, updated_by=request.user, **payload.validated_data)
        return success_response(FuelLogSerializer(log).data)

    def delete(self, request, log_id):
        log = self._get_log(request, log_id)
        if not log:
            return error_response(_("Enregistrement introuvable."), status_code=404)
        services.delete_fuel_log(log, deleted_by=request.user)
        return no_content_response()


# ══════════════════════════════════════════════════════════════════════════════
# MAINTENANCE TYPES
# ══════════════════════════════════════════════════════════════════════════════

class MaintenanceTypeListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("company_id requis."))
        types = selectors.list_maintenance_types(company_id, search=request.query_params.get("search"))
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(types, request)
        return paginator.get_paginated_response(MaintenanceTypeSerializer(page, many=True).data)

    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = MaintenanceTypeWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        mtype = services.create_maintenance_type(company=company, created_by=request.user, **d)
        return created_response(MaintenanceTypeSerializer(mtype).data)


class MaintenanceTypeDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, type_id):
        company_id = _scope_company_id(request)
        return selectors.get_maintenance_type(type_id, company_id)

    def get(self, request, type_id):
        mtype = self._get(request, type_id)
        if not mtype:
            return error_response(_("Type introuvable."), status_code=404)
        return success_response(MaintenanceTypeSerializer(mtype).data)

    def patch(self, request, type_id):
        mtype = self._get(request, type_id)
        if not mtype:
            return error_response(_("Type introuvable."), status_code=404)
        payload = MaintenanceTypeWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        mtype = services.update_maintenance_type(mtype, updated_by=request.user, **payload.validated_data)
        return success_response(MaintenanceTypeSerializer(mtype).data)

    def delete(self, request, type_id):
        mtype = self._get(request, type_id)
        if not mtype:
            return error_response(_("Type introuvable."), status_code=404)
        try:
            services.delete_maintenance_type(mtype, deleted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return no_content_response()


# ══════════════════════════════════════════════════════════════════════════════
# MAINTENANCE ORDERS
# ══════════════════════════════════════════════════════════════════════════════

class MaintenanceOrderListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("company_id requis."))
        orders = selectors.list_maintenance_orders(
            company_id,
            vehicle_id=request.query_params.get("vehicle_id"),
            status=request.query_params.get("status"),
            date_from=request.query_params.get("date_from"),
            date_to=request.query_params.get("date_to"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(orders, request)
        return paginator.get_paginated_response(MaintenanceOrderSerializer(page, many=True).data)


class VehicleMaintenanceListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, vehicle_id):
        company_id = _scope_company_id(request)
        orders = selectors.list_vehicle_maintenance_orders(
            vehicle_id, company_id, status=request.query_params.get("status")
        )
        if orders is None:
            return error_response(_("Véhicule introuvable."), status_code=404)
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(orders, request)
        return paginator.get_paginated_response(MaintenanceOrderSerializer(page, many=True).data)

    def post(self, request, vehicle_id):
        company_id = _scope_company_id(request)
        vehicle = selectors.get_vehicle(vehicle_id, company_id)
        if not vehicle:
            return error_response(_("Véhicule introuvable."), status_code=404)
        payload = MaintenanceOrderCreateSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        company_id_for_type = _scope_company_id(request)
        mtype = selectors.get_maintenance_type(d["maintenance_type_id"], company_id_for_type)
        if not mtype:
            return error_response(_("Type de maintenance introuvable."), status_code=404)
        try:
            order = services.create_maintenance_order(
                vehicle=vehicle, maintenance_type=mtype,
                planned_date=d["planned_date"],
                provider=d["provider"], notes=d["notes"],
                created_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(MaintenanceOrderSerializer(order).data)


class MaintenanceOrderDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, order_id):
        company_id = _scope_company_id(request)
        return selectors.get_maintenance_order(order_id, company_id)

    def get(self, request, order_id):
        order = self._get(request, order_id)
        if not order:
            return error_response(_("Ordre introuvable."), status_code=404)
        return success_response(MaintenanceOrderSerializer(order).data)

    def patch(self, request, order_id):
        order = self._get(request, order_id)
        if not order:
            return error_response(_("Ordre introuvable."), status_code=404)
        payload = MaintenanceOrderUpdateSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            order = services.update_maintenance_order(order, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(MaintenanceOrderSerializer(order).data)

    def delete(self, request, order_id):
        order = self._get(request, order_id)
        if not order:
            return error_response(_("Ordre introuvable."), status_code=404)
        try:
            services.delete_maintenance_order(order, deleted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return no_content_response()


class MaintenanceOrderStartView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, order_id):
        company_id = _scope_company_id(request)
        order = selectors.get_maintenance_order(order_id, company_id)
        if not order:
            return error_response(_("Ordre introuvable."), status_code=404)
        try:
            order = services.start_maintenance(order, updated_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(MaintenanceOrderSerializer(order).data)


class MaintenanceOrderCompleteView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, order_id):
        company_id = _scope_company_id(request)
        order = selectors.get_maintenance_order(order_id, company_id)
        if not order:
            return error_response(_("Ordre introuvable."), status_code=404)
        payload = MaintenanceCompleteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            order = services.complete_maintenance(order, updated_by=request.user, **d)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(MaintenanceOrderSerializer(order).data)


class MaintenanceOrderCancelView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, order_id):
        company_id = _scope_company_id(request)
        order = selectors.get_maintenance_order(order_id, company_id)
        if not order:
            return error_response(_("Ordre introuvable."), status_code=404)
        try:
            order = services.cancel_maintenance(order, updated_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(MaintenanceOrderSerializer(order).data)


# ══════════════════════════════════════════════════════════════════════════════
# INSURANCE
# ══════════════════════════════════════════════════════════════════════════════

class VehicleInsuranceListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, vehicle_id):
        company_id = _scope_company_id(request)
        vehicle = selectors.get_vehicle(vehicle_id, company_id)
        if not vehicle:
            return error_response(_("Véhicule introuvable."), status_code=404)
        insurances = vehicle.insurances.filter(is_deleted=False).order_by("-end_date")
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(insurances, request)
        return paginator.get_paginated_response(InsuranceSerializer(page, many=True).data)

    def post(self, request, vehicle_id):
        company_id = _scope_company_id(request)
        vehicle = selectors.get_vehicle(vehicle_id, company_id)
        if not vehicle:
            return error_response(_("Véhicule introuvable."), status_code=404)
        payload = InsuranceWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        insurance = services.create_insurance(vehicle=vehicle, created_by=request.user, **payload.validated_data)
        return created_response(InsuranceSerializer(insurance).data)


class InsuranceDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, insurance_id):
        company_id = _scope_company_id(request)
        from apps.fleet.models import Insurance
        try:
            return Insurance.objects.get(
                id=insurance_id, vehicle__company_id=company_id, is_deleted=False
            )
        except Insurance.DoesNotExist:
            return None

    def get(self, request, insurance_id):
        ins = self._get(request, insurance_id)
        if not ins:
            return error_response(_("Assurance introuvable."), status_code=404)
        return success_response(InsuranceSerializer(ins).data)

    def patch(self, request, insurance_id):
        ins = self._get(request, insurance_id)
        if not ins:
            return error_response(_("Assurance introuvable."), status_code=404)
        payload = InsuranceWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        ins = services.update_insurance(ins, updated_by=request.user, **payload.validated_data)
        return success_response(InsuranceSerializer(ins).data)

    def delete(self, request, insurance_id):
        ins = self._get(request, insurance_id)
        if not ins:
            return error_response(_("Assurance introuvable."), status_code=404)
        services.delete_insurance(ins, deleted_by=request.user)
        return no_content_response()


# ══════════════════════════════════════════════════════════════════════════════
# VEHICLE DOCUMENTS
# ══════════════════════════════════════════════════════════════════════════════

class VehicleDocumentListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, vehicle_id):
        company_id = _scope_company_id(request)
        vehicle = selectors.get_vehicle(vehicle_id, company_id)
        if not vehicle:
            return error_response(_("Véhicule introuvable."), status_code=404)
        docs = vehicle.documents.filter(is_deleted=False).order_by("expiry_date")
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(docs, request)
        return paginator.get_paginated_response(VehicleDocumentSerializer(page, many=True).data)

    def post(self, request, vehicle_id):
        company_id = _scope_company_id(request)
        vehicle = selectors.get_vehicle(vehicle_id, company_id)
        if not vehicle:
            return error_response(_("Véhicule introuvable."), status_code=404)
        payload = VehicleDocumentWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        doc = services.create_vehicle_document(vehicle=vehicle, created_by=request.user, **payload.validated_data)
        return created_response(VehicleDocumentSerializer(doc).data)


class VehicleDocumentDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, doc_id):
        company_id = _scope_company_id(request)
        from apps.fleet.models import VehicleDocument
        try:
            return VehicleDocument.objects.get(
                id=doc_id, vehicle__company_id=company_id, is_deleted=False
            )
        except VehicleDocument.DoesNotExist:
            return None

    def get(self, request, doc_id):
        doc = self._get(request, doc_id)
        if not doc:
            return error_response(_("Document introuvable."), status_code=404)
        return success_response(VehicleDocumentSerializer(doc).data)

    def patch(self, request, doc_id):
        doc = self._get(request, doc_id)
        if not doc:
            return error_response(_("Document introuvable."), status_code=404)
        payload = VehicleDocumentWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        doc = services.update_vehicle_document(doc, updated_by=request.user, **payload.validated_data)
        return success_response(VehicleDocumentSerializer(doc).data)

    def delete(self, request, doc_id):
        doc = self._get(request, doc_id)
        if not doc:
            return error_response(_("Document introuvable."), status_code=404)
        services.delete_vehicle_document(doc, deleted_by=request.user)
        return no_content_response()


# ══════════════════════════════════════════════════════════════════════════════
# ASSIGNMENTS
# ══════════════════════════════════════════════════════════════════════════════

class AssignmentListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("company_id requis."))
        assignments = selectors.list_assignments(
            company_id,
            vehicle_id=request.query_params.get("vehicle_id"),
            status=request.query_params.get("status"),
            internal_driver_id=request.query_params.get("internal_driver_id"),
            external_driver_id=request.query_params.get("external_driver_id"),
            date_from=request.query_params.get("date_from"),
            date_to=request.query_params.get("date_to"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(assignments, request)
        return paginator.get_paginated_response(AssignmentListSerializer(page, many=True).data)

    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = AssignmentCreateSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        company_id = str(company.id)
        vehicle = selectors.get_vehicle(d["vehicle_id"], company_id)
        if not vehicle:
            return error_response(_("Véhicule introuvable."), status_code=404)
        try:
            assignment = services.create_assignment(
                vehicle=vehicle, company=company,
                purpose=d["purpose"], destination=d["destination"],
                planned_departure=d["planned_departure"],
                planned_return=d["planned_return"],
                departure_location=d["departure_location"],
                internal_driver_id=d["internal_driver_id"],
                external_driver_id=d["external_driver_id"],
                notes=d["notes"],
                created_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(AssignmentDetailSerializer(assignment).data)


class AssignmentDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, assignment_id):
        company_id = _scope_company_id(request)
        return selectors.get_assignment(assignment_id, company_id)

    def get(self, request, assignment_id):
        assignment = self._get(request, assignment_id)
        if not assignment:
            return error_response(_("Mission introuvable."), status_code=404)
        return success_response(AssignmentDetailSerializer(assignment).data)

    def patch(self, request, assignment_id):
        assignment = self._get(request, assignment_id)
        if not assignment:
            return error_response(_("Mission introuvable."), status_code=404)
        payload = AssignmentUpdateSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            assignment = services.update_assignment(assignment, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(AssignmentDetailSerializer(assignment).data)

    def delete(self, request, assignment_id):
        assignment = self._get(request, assignment_id)
        if not assignment:
            return error_response(_("Mission introuvable."), status_code=404)
        try:
            services.delete_assignment(assignment, deleted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return no_content_response()


class AssignmentStartView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, assignment_id):
        company_id = _scope_company_id(request)
        assignment = selectors.get_assignment(assignment_id, company_id)
        if not assignment:
            return error_response(_("Mission introuvable."), status_code=404)
        payload = AssignmentStartSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            assignment = services.start_assignment(
                assignment, actual_departure=d["actual_departure"],
                start_odometer=d["start_odometer"], updated_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(AssignmentDetailSerializer(assignment).data)


class AssignmentCompleteView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, assignment_id):
        company_id = _scope_company_id(request)
        assignment = selectors.get_assignment(assignment_id, company_id)
        if not assignment:
            return error_response(_("Mission introuvable."), status_code=404)
        payload = AssignmentCompleteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            assignment = services.complete_assignment(
                assignment, actual_return=d["actual_return"],
                end_odometer=d["end_odometer"], notes=d["notes"],
                updated_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(AssignmentDetailSerializer(assignment).data)


class AssignmentCancelView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, assignment_id):
        company_id = _scope_company_id(request)
        assignment = selectors.get_assignment(assignment_id, company_id)
        if not assignment:
            return error_response(_("Mission introuvable."), status_code=404)
        try:
            assignment = services.cancel_assignment(assignment, updated_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(AssignmentDetailSerializer(assignment).data)


class VehicleAssignmentListView(APIView):
    """Liste des missions d'un véhicule spécifique."""
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, vehicle_id):
        company_id = _scope_company_id(request)
        assignments = selectors.list_vehicle_assignments(
            vehicle_id, company_id, status=request.query_params.get("status")
        )
        if assignments is None:
            return error_response(_("Véhicule introuvable."), status_code=404)
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(assignments, request)
        return paginator.get_paginated_response(AssignmentListSerializer(page, many=True).data)


# ══════════════════════════════════════════════════════════════════════════════
# ACCIDENTS
# ══════════════════════════════════════════════════════════════════════════════

class AccidentListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("company_id requis."))
        accidents = selectors.list_accidents(
            company_id,
            vehicle_id=request.query_params.get("vehicle_id"),
            status=request.query_params.get("status"),
            severity=request.query_params.get("severity"),
            date_from=request.query_params.get("date_from"),
            date_to=request.query_params.get("date_to"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(accidents, request)
        return paginator.get_paginated_response(AccidentListSerializer(page, many=True).data)

    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = AccidentCreateSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        vehicle = selectors.get_vehicle(d["vehicle_id"], str(company.id))
        if not vehicle:
            return error_response(_("Véhicule introuvable."), status_code=404)
        try:
            accident = services.create_accident(vehicle=vehicle, created_by=request.user, **{
                k: v for k, v in d.items() if k != "vehicle_id"
            })
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(AccidentDetailSerializer(accident).data)


class AccidentDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, accident_id):
        company_id = _scope_company_id(request)
        return selectors.get_accident(accident_id, company_id)

    def get(self, request, accident_id):
        accident = self._get(request, accident_id)
        if not accident:
            return error_response(_("Accident introuvable."), status_code=404)
        return success_response(AccidentDetailSerializer(accident).data)

    def patch(self, request, accident_id):
        accident = self._get(request, accident_id)
        if not accident:
            return error_response(_("Accident introuvable."), status_code=404)
        payload = AccidentUpdateSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            accident = services.update_accident(accident, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(AccidentDetailSerializer(accident).data)

    def delete(self, request, accident_id):
        accident = self._get(request, accident_id)
        if not accident:
            return error_response(_("Accident introuvable."), status_code=404)
        services.delete_accident(accident, deleted_by=request.user)
        return no_content_response()


class AccidentCloseView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, accident_id):
        company_id = _scope_company_id(request)
        accident = selectors.get_accident(accident_id, company_id)
        if not accident:
            return error_response(_("Accident introuvable."), status_code=404)
        payload = AccidentCloseSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            accident = services.close_accident(
                accident,
                actual_repair_cost=d["actual_repair_cost"],
                notes=d["notes"],
                updated_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(AccidentDetailSerializer(accident).data)


class AccidentStatusView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, accident_id):
        company_id = _scope_company_id(request)
        accident = selectors.get_accident(accident_id, company_id)
        if not accident:
            return error_response(_("Accident introuvable."), status_code=404)
        payload = AccidentStatusSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        try:
            accident = services.update_accident_status(
                accident, status=payload.validated_data["status"], updated_by=request.user
            )
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(AccidentDetailSerializer(accident).data)


class VehicleAccidentListView(APIView):
    """Liste des accidents d'un véhicule spécifique."""
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, vehicle_id):
        company_id = _scope_company_id(request)
        accidents = selectors.list_vehicle_accidents(
            vehicle_id, company_id, status=request.query_params.get("status")
        )
        if accidents is None:
            return error_response(_("Véhicule introuvable."), status_code=404)
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(accidents, request)
        return paginator.get_paginated_response(AccidentListSerializer(page, many=True).data)

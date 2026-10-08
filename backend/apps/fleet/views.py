from django.utils.translation import gettext_lazy as _
from rest_framework.views import APIView

from apps.core.permissions import IsInstitutionAdmin, IsSuperAdmin, IsAuthenticated, HasModulePermission
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
    ServiceSerializer, ServiceCreateSerializer,
    ServiceUpdateSerializer, ServiceCompleteSerializer,
    ServiceAttachmentSerializer,
    ContractSerializer, ContractWriteSerializer, ContractUpdateSerializer,
    RecurringCostSerializer, RecurringCostWriteSerializer,
    VehicleDocumentSerializer, VehicleDocumentWriteSerializer,
    AssignmentListSerializer, AssignmentDetailSerializer,
    AssignmentCreateSerializer, AssignmentUpdateSerializer,
    AssignmentStartSerializer, AssignmentCompleteSerializer,
    AccidentListSerializer, AccidentDetailSerializer,
    AccidentCreateSerializer, AccidentUpdateSerializer,
    ParkingSerializer, ParkingWriteSerializer,
    SupplierSerializer, SupplierWriteSerializer,
)
from .models import (VehicleModel, Vehicle, Service,
                     Assignment, Accident, VehicleCategoryCfg)
from apps.voyages_trips.models import Trip
from apps.core.models import Attachment


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


def _cfg(model_cls, cid, company_id):
    """Return a Config Flotte row by id if global or owned by the company, else None."""
    if not cid:
        return None
    from django.db.models import Q
    return model_cls.objects.filter(
        Q(company_id=company_id) | Q(company__isnull=True), id=cid, is_deleted=False
    ).first()


# ══════════════════════════════════════════════════════════════════════════════
# VEHICLE BRANDS
# ══════════════════════════════════════════════════════════════════════════════

class VehicleBrandListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.brand.view', 'POST': 'fleet.brand.manage'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.brand.view', 'PATCH': 'fleet.brand.manage', 'PUT': 'fleet.brand.manage', 'DELETE': 'fleet.brand.manage'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.model.view', 'POST': 'fleet.model.manage'}

    def get(self, request):
        models = selectors.list_vehicle_models(
            brand_id=request.query_params.get("brand_id"),
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
        from .models import FuelType, Transmission, TractionType
        company_id = _scope_company_id(request)
        ft = _cfg(FuelType, d.get("fuel_type_id"), company_id)
        tr = _cfg(Transmission, d.get("transmission_id"), company_id)
        tc = _cfg(TractionType, d.get("traction_type_id"), company_id)
        try:
            model = services.create_vehicle_model(
                brand=brand, name=d["name"],
                fuel_type=ft, transmission=tr, traction_type=tc,
                seats=d.get("seats"), doors=d.get("doors"),
                horsepower=d.get("horsepower"), payload_kg=d.get("payload_kg"),
                created_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(VehicleModelSerializer(model).data)


class VehicleModelDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.model.view', 'PATCH': 'fleet.model.manage', 'PUT': 'fleet.model.manage', 'DELETE': 'fleet.model.manage'}

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
        from .models import FuelType, Transmission, TractionType
        company_id = _scope_company_id(request)
        for key, cls in (("fuel_type_id", FuelType),
                         ("transmission_id", Transmission), ("traction_type_id", TractionType)):
            if d.get(key) and not _cfg(cls, d[key], company_id):
                return error_response(_("Référence de configuration introuvable."), status_code=404)
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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.driver.view', 'POST': 'fleet.driver.manage'}

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."))
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
        d = dict(payload.validated_data)
        employee = _get_employee(d.pop("employee_id"), company.id)
        if not employee:
            return error_response(_("Employé RH introuvable dans votre institution."), status_code=404)
        driver = services.create_external_driver(company=company, employee=employee,
                                                 created_by=request.user, **d)
        return created_response(ExternalDriverSerializer(driver).data)


class ExternalDriverDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.driver.view', 'PATCH': 'fleet.driver.manage', 'PUT': 'fleet.driver.manage', 'DELETE': 'fleet.driver.manage'}

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
        d = dict(payload.validated_data)
        if "employee_id" in d:
            employee = _get_employee(d.pop("employee_id"), driver.company_id)
            if not employee:
                return error_response(_("Employé RH introuvable dans votre institution."), status_code=404)
            d["employee"] = employee
        driver = services.update_external_driver(driver, updated_by=request.user, **d)
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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.vehicle.view', 'POST': 'fleet.vehicle.create'}

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."))
        vehicles = selectors.list_vehicles(
            company_id,
            agency_id=request.query_params.get("agency_id"),
            status=request.query_params.get("status"),
            category=request.query_params.get("category"),
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
        company_id = str(company.id)
        category = _cfg(VehicleCategoryCfg, d.get("category_id"), company_id)
        owner_partner_id = d.get("owner_partner_id")
        if owner_partner_id:
            from apps.partners.models import Partner
            if not Partner.objects.filter(company=company, id=owner_partner_id, is_deleted=False).exists():
                return error_response(_("Partenaire introuvable."), status_code=404)
        try:
            vehicle = services.create_vehicle(
                company=company, model=model,
                code=d["code"],
                license_plate=d["license_plate"],
                color=d["color"], year=d["year"],
                agency_id=d["agency_id"],
                internal_driver_id=d["internal_driver_id"],
                external_driver_id=d["external_driver_id"],
                tank_capacity_liters=d["tank_capacity_liters"],
                category=category, tag_ids=d.get("tag_ids"),
                registration_date=d.get("registration_date"),
                fiscal_horsepower=d.get("fiscal_horsepower"),
                catalog_value=d.get("catalog_value"),
                purchase_value=d.get("purchase_value"),
                residual_value=d.get("residual_value"),
                owner_partner_id=owner_partner_id,
                partner_pct_ticket=d.get("partner_pct_ticket") or 0,
                partner_pct_parcel=d.get("partner_pct_parcel") or 0,
                partner_pct_baggage=d.get("partner_pct_baggage") or 0,
                initial_odometer=d["initial_odometer"],
                notes=d["notes"],
                created_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(VehicleDetailSerializer(vehicle).data)


class VehicleDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.vehicle.view', 'PATCH': 'fleet.vehicle.update', 'PUT': 'fleet.vehicle.update', 'DELETE': 'fleet.vehicle.delete'}

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
        d = payload.validated_data
        company_id = _scope_company_id(request)
        if d.get("category_id") and not _cfg(VehicleCategoryCfg, d["category_id"], company_id):
            return error_response(_("Catégorie introuvable."), status_code=404)
        if d.get("parking_id") and not selectors.get_parking(d["parking_id"], company_id):
            return error_response(_("Parking introuvable."), status_code=404)
        if d.get("owner_partner_id"):
            from apps.partners.models import Partner
            if not Partner.objects.filter(company_id=company_id, id=d["owner_partner_id"], is_deleted=False).exists():
                return error_response(_("Partenaire introuvable."), status_code=404)
        try:
            vehicle = services.update_vehicle(vehicle, updated_by=request.user, **d)
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


class ParkingListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.parking.view', 'POST': 'fleet.parking.manage'}

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."))
        rows = selectors.list_parkings(company_id, search=request.query_params.get("search"))
        return success_response(ParkingSerializer(rows, many=True).data)

    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = ParkingWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        p = services.create_parking(company=company, created_by=request.user, **payload.validated_data)
        return created_response(ParkingSerializer(p).data)


class ParkingDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.parking.view', 'PATCH': 'fleet.parking.manage', 'PUT': 'fleet.parking.manage', 'DELETE': 'fleet.parking.manage'}

    def _get(self, request, parking_id):
        return selectors.get_parking(parking_id, _scope_company_id(request))

    def get(self, request, parking_id):
        p = self._get(request, parking_id)
        return success_response(ParkingSerializer(p).data) if p else error_response(_("Parking introuvable."), status_code=404)

    def patch(self, request, parking_id):
        p = self._get(request, parking_id)
        if not p:
            return error_response(_("Parking introuvable."), status_code=404)
        payload = ParkingWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        p = services.update_parking(p, updated_by=request.user, **payload.validated_data)
        return success_response(ParkingSerializer(p).data)

    def delete(self, request, parking_id):
        p = self._get(request, parking_id)
        if not p:
            return error_response(_("Parking introuvable."), status_code=404)
        services.delete_parking(p, deleted_by=request.user)
        return no_content_response()


class SupplierListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.supplier.view', 'POST': 'fleet.supplier.manage'}

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."))
        rows = selectors.list_suppliers(company_id, search=request.query_params.get("search"))
        return success_response(SupplierSerializer(rows, many=True).data)

    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = SupplierWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        try:
            sup = services.create_supplier(company=company, created_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(SupplierSerializer(sup).data)


class SupplierDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.supplier.view', 'PATCH': 'fleet.supplier.manage', 'PUT': 'fleet.supplier.manage', 'DELETE': 'fleet.supplier.manage'}

    def _get(self, request, supplier_id):
        return selectors.get_supplier(supplier_id, _scope_company_id(request))

    def get(self, request, supplier_id):
        s = self._get(request, supplier_id)
        return success_response(SupplierSerializer(s).data) if s else error_response(_("Fournisseur introuvable."), status_code=404)

    def patch(self, request, supplier_id):
        s = self._get(request, supplier_id)
        if not s:
            return error_response(_("Fournisseur introuvable."), status_code=404)
        payload = SupplierWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            s = services.update_supplier(s, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(SupplierSerializer(s).data)

    def delete(self, request, supplier_id):
        s = self._get(request, supplier_id)
        if not s:
            return error_response(_("Fournisseur introuvable."), status_code=404)
        services.delete_supplier(s, deleted_by=request.user)
        return no_content_response()


class VehicleOdometerView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.vehicle.view', 'POST': 'fleet.vehicle.update'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.vehicle.view'}

    def get(self, request, vehicle_id):
        company_id = _scope_company_id(request)
        stats = selectors.get_vehicle_stats(vehicle_id, company_id)
        if stats is None:
            return error_response(_("Véhicule introuvable."), status_code=404)
        return success_response(stats)


class FleetAlertsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.dashboard.view'}

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."))
        try:
            days = int(request.query_params.get("days", 30))
        except (ValueError, TypeError):
            days = 30
        alerts = selectors.get_fleet_alerts(company_id, days_ahead=days)
        return success_response({
            "expiring_contracts": ContractSerializer(alerts["expiring_contracts"], many=True).data,
            "expiring_documents": VehicleDocumentSerializer(alerts["expiring_documents"], many=True).data,
            "overdue_maintenance": ServiceSerializer(alerts["overdue_maintenance"], many=True).data,
        })


class FleetStatsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.dashboard.view'}

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."))
        return success_response(selectors.get_fleet_stats(company_id))


# ══════════════════════════════════════════════════════════════════════════════
# FUEL LOGS
# ══════════════════════════════════════════════════════════════════════════════

class VehicleFuelLogListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.fuel.view', 'POST': 'fleet.fuel.manage'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.fuel.view', 'PATCH': 'fleet.fuel.manage', 'PUT': 'fleet.fuel.manage', 'DELETE': 'fleet.fuel.manage'}

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
# SERVICES / INTERVENTIONS
# ══════════════════════════════════════════════════════════════════════════════

class ServiceListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.maintenance.view', 'POST': 'fleet.maintenance.manage'}

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."))
        services_qs = selectors.list_services(
            company_id,
            vehicle_id=request.query_params.get("vehicle_id"),
            status=request.query_params.get("status"),
            date_from=request.query_params.get("date_from"),
            date_to=request.query_params.get("date_to"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(services_qs, request)
        return paginator.get_paginated_response(ServiceSerializer(page, many=True).data)

    def post(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."))
        payload = ServiceCreateSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        vehicle = selectors.get_vehicle(d["vehicle_id"], company_id)
        if not vehicle:
            return error_response(_("Véhicule introuvable."), status_code=404)
        intervention_type = _get_intervention_type(d["intervention_type_id"], company_id)
        if not intervention_type:
            return error_response(_("Type d'intervention introuvable."), status_code=404)
        supplier = None
        if d.get("supplier_id"):
            supplier = selectors.get_supplier(d["supplier_id"], company_id)
            if not supplier:
                return error_response(_("Fournisseur introuvable."), status_code=404)
        driver = None
        if d.get("driver_id"):
            driver = selectors.get_external_driver(d["driver_id"], company_id)
            if not driver:
                return error_response(_("Conducteur introuvable."), status_code=404)
        try:
            service = services.create_service(
                vehicle=vehicle, intervention_type=intervention_type,
                planned_date=d["planned_date"], description=d["description"],
                supplier=supplier, driver=driver, currency=d["currency"],
                notes=d["notes"], created_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(ServiceSerializer(service).data)


class VehicleServiceListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.maintenance.view'}

    def get(self, request, vehicle_id):
        company_id = _scope_company_id(request)
        qs = selectors.list_vehicle_services(
            vehicle_id, company_id, status=request.query_params.get("status")
        )
        if qs is None:
            return error_response(_("Véhicule introuvable."), status_code=404)
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(ServiceSerializer(page, many=True).data)


class ServiceDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.maintenance.view', 'PATCH': 'fleet.maintenance.manage', 'PUT': 'fleet.maintenance.manage', 'DELETE': 'fleet.maintenance.manage'}

    def _get(self, request, service_id):
        company_id = _scope_company_id(request)
        return selectors.get_service(service_id, company_id)

    def get(self, request, service_id):
        service = self._get(request, service_id)
        if not service:
            return error_response(_("Intervention introuvable."), status_code=404)
        return success_response(ServiceSerializer(service).data)

    def patch(self, request, service_id):
        service = self._get(request, service_id)
        if not service:
            return error_response(_("Intervention introuvable."), status_code=404)
        company_id = _scope_company_id(request)
        payload = ServiceUpdateSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        d = dict(payload.validated_data)
        if "intervention_type_id" in d:
            itype = _get_intervention_type(d.pop("intervention_type_id"), company_id)
            if not itype:
                return error_response(_("Type d'intervention introuvable."), status_code=404)
            d["intervention_type"] = itype
        if "supplier_id" in d:
            sid = d.pop("supplier_id")
            d["supplier"] = selectors.get_supplier(sid, company_id) if sid else None
        if "driver_id" in d:
            drid = d.pop("driver_id")
            d["driver"] = selectors.get_external_driver(drid, company_id) if drid else None
        try:
            service = services.update_service(service, updated_by=request.user, **d)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(ServiceSerializer(service).data)

    def delete(self, request, service_id):
        service = self._get(request, service_id)
        if not service:
            return error_response(_("Intervention introuvable."), status_code=404)
        try:
            services.delete_service(service, deleted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return no_content_response()


class ServiceStartView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'fleet.maintenance.manage'}

    def post(self, request, service_id):
        company_id = _scope_company_id(request)
        service = selectors.get_service(service_id, company_id)
        if not service:
            return error_response(_("Intervention introuvable."), status_code=404)
        try:
            service = services.start_service(service, updated_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(ServiceSerializer(service).data)


class ServiceCompleteView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'fleet.maintenance.manage'}

    def post(self, request, service_id):
        company_id = _scope_company_id(request)
        service = selectors.get_service(service_id, company_id)
        if not service:
            return error_response(_("Intervention introuvable."), status_code=404)
        payload = ServiceCompleteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        try:
            service = services.complete_service(service, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(ServiceSerializer(service).data)


class ServiceCancelView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'fleet.maintenance.manage'}

    def post(self, request, service_id):
        company_id = _scope_company_id(request)
        service = selectors.get_service(service_id, company_id)
        if not service:
            return error_response(_("Intervention introuvable."), status_code=404)
        try:
            service = services.cancel_service(service, updated_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(ServiceSerializer(service).data)


class ServiceAttachmentListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.maintenance.view', 'POST': 'fleet.maintenance.manage'}

    def get(self, request, service_id):
        company_id = _scope_company_id(request)
        service = selectors.get_service(service_id, company_id)
        if not service:
            return error_response(_("Intervention introuvable."), status_code=404)
        items = selectors.list_service_attachments(service)
        return success_response(ServiceAttachmentSerializer(items, many=True).data)

    def post(self, request, service_id):
        company_id = _scope_company_id(request)
        service = selectors.get_service(service_id, company_id)
        if not service:
            return error_response(_("Intervention introuvable."), status_code=404)
        file = request.FILES.get("file")
        if not file:
            return error_response(_("Aucun fichier fourni."))
        att = services.add_service_attachment(
            service, file=file,
            name=request.data.get("name", ""),
            description=request.data.get("description", ""),
            created_by=request.user,
        )
        return created_response(ServiceAttachmentSerializer(att).data)


class ServiceAttachmentDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.maintenance.view', 'DELETE': 'fleet.maintenance.manage'}

    def delete(self, request, service_id, att_id):
        company_id = _scope_company_id(request)
        service = selectors.get_service(service_id, company_id)
        if not service:
            return error_response(_("Intervention introuvable."), status_code=404)
        from django.contrib.contenttypes.models import ContentType
        ct = ContentType.objects.get_for_model(Service)
        try:
            att = Attachment.objects.get(id=att_id, content_type=ct,
                                         object_id=service.id, is_deleted=False)
        except Attachment.DoesNotExist:
            return error_response(_("Pièce jointe introuvable."), status_code=404)
        services.delete_service_attachment(att, deleted_by=request.user)
        return no_content_response()


def _get_intervention_type(type_id, company_id):
    from django.db.models import Q
    from apps.fleet.models import InterventionType
    try:
        return InterventionType.objects.get(
            Q(company_id=company_id) | Q(company__isnull=True),
            id=type_id, is_deleted=False,
        )
    except InterventionType.DoesNotExist:
        return None


# ══════════════════════════════════════════════════════════════════════════════
# INSURANCE
# ══════════════════════════════════════════════════════════════════════════════

class VehicleContractListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.contract.view'}

    def get(self, request, vehicle_id):
        company_id = _scope_company_id(request)
        qs = selectors.list_vehicle_contracts(vehicle_id, company_id)
        if qs is None:
            return error_response(_("Véhicule introuvable."), status_code=404)
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(ContractSerializer(page, many=True).data)


def _resolve_contract_fks(d, company_id):
    """Resolve *_id keys in validated data to model instances. Returns (kwargs, error)."""
    kwargs = {}
    if "intervention_type_id" in d:
        it = _get_intervention_type(d["intervention_type_id"], company_id)
        if not it:
            return None, _("Type d'intervention introuvable.")
        kwargs["intervention_type"] = it
    if "supplier_id" in d:
        sid = d["supplier_id"]
        kwargs["supplier"] = selectors.get_supplier(sid, company_id) if sid else None
    if "driver_id" in d:
        drid = d["driver_id"]
        kwargs["driver"] = selectors.get_external_driver(drid, company_id) if drid else None
    if "billing_period_id" in d:
        pid = d["billing_period_id"]
        kwargs["billing_period"] = _get_period(pid, company_id) if pid else None
    if "responsible_id" in d:
        rid = d["responsible_id"]
        kwargs["responsible"] = _get_employee(rid, company_id) if rid else None
    return kwargs, None


class ContractListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.contract.view', 'POST': 'fleet.contract.manage'}

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."))
        qs = selectors.list_contracts(
            company_id,
            vehicle_id=request.query_params.get("vehicle_id"),
            status=request.query_params.get("status"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(ContractSerializer(page, many=True).data)

    def post(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."))
        payload = ContractWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = dict(payload.validated_data)
        vehicle = selectors.get_vehicle(d.pop("vehicle_id"), company_id)
        if not vehicle:
            return error_response(_("Véhicule introuvable."), status_code=404)
        fk_kwargs, err = _resolve_contract_fks(d, company_id)
        if err:
            return error_response(err, status_code=404)
        for k in ("supplier_id", "driver_id", "billing_period_id", "responsible_id",
                  "intervention_type_id"):
            d.pop(k, None)
        included = d.pop("included_service_ids", [])
        contract = services.create_contract(
            vehicle=vehicle, created_by=request.user,
            included_service_ids=included, **fk_kwargs, **d,
        )
        return created_response(ContractSerializer(selectors.get_contract(contract.id, company_id)).data)


class ContractDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.contract.view', 'PATCH': 'fleet.contract.manage', 'PUT': 'fleet.contract.manage', 'DELETE': 'fleet.contract.manage'}

    def _get(self, request, contract_id):
        company_id = _scope_company_id(request)
        return selectors.get_contract(contract_id, company_id)

    def get(self, request, contract_id):
        contract = self._get(request, contract_id)
        if not contract:
            return error_response(_("Contrat introuvable."), status_code=404)
        return success_response(ContractSerializer(contract).data)

    def patch(self, request, contract_id):
        contract = self._get(request, contract_id)
        if not contract:
            return error_response(_("Contrat introuvable."), status_code=404)
        company_id = _scope_company_id(request)
        payload = ContractUpdateSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        d = dict(payload.validated_data)
        d.pop("vehicle_id", None)
        fk_kwargs, err = _resolve_contract_fks(d, company_id)
        if err:
            return error_response(err, status_code=404)
        for k in ("supplier_id", "driver_id", "billing_period_id", "responsible_id",
                  "intervention_type_id"):
            d.pop(k, None)
        included = d.pop("included_service_ids", None)
        contract = services.update_contract(
            contract, updated_by=request.user,
            included_service_ids=included, **fk_kwargs, **d,
        )
        return success_response(ContractSerializer(selectors.get_contract(contract.id, company_id)).data)

    def delete(self, request, contract_id):
        contract = self._get(request, contract_id)
        if not contract:
            return error_response(_("Contrat introuvable."), status_code=404)
        services.delete_contract(contract, deleted_by=request.user)
        return no_content_response()


class RecurringCostListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.recurring_cost.view', 'POST': 'fleet.recurring_cost.manage'}

    def get(self, request, contract_id):
        company_id = _scope_company_id(request)
        contract = selectors.get_contract(contract_id, company_id)
        if not contract:
            return error_response(_("Contrat introuvable."), status_code=404)
        items = selectors.list_recurring_costs(contract)
        return success_response(RecurringCostSerializer(items, many=True).data)

    def post(self, request, contract_id):
        company_id = _scope_company_id(request)
        contract = selectors.get_contract(contract_id, company_id)
        if not contract:
            return error_response(_("Contrat introuvable."), status_code=404)
        payload = RecurringCostWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        period = _get_period(d["period_id"], company_id)
        if not period:
            return error_response(_("Périodicité introuvable."), status_code=404)
        cost = services.add_recurring_cost(
            contract, description=d["description"], amount=d["amount"],
            currency=d["currency"], period=period, created_by=request.user,
        )
        return created_response(RecurringCostSerializer(cost).data)


class RecurringCostDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.recurring_cost.view', 'PATCH': 'fleet.recurring_cost.manage', 'PUT': 'fleet.recurring_cost.manage', 'DELETE': 'fleet.recurring_cost.manage'}

    def _get(self, contract_id, rc_id, company_id):
        contract = selectors.get_contract(contract_id, company_id)
        if not contract:
            return None
        return contract.recurring_costs.filter(id=rc_id, is_deleted=False).first()

    def patch(self, request, contract_id, rc_id):
        company_id = _scope_company_id(request)
        cost = self._get(contract_id, rc_id, company_id)
        if not cost:
            return error_response(_("Coût récurrent introuvable."), status_code=404)
        payload = RecurringCostWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        d = dict(payload.validated_data)
        if "period_id" in d:
            period = _get_period(d.pop("period_id"), company_id)
            if not period:
                return error_response(_("Périodicité introuvable."), status_code=404)
            d["period"] = period
        cost = services.update_recurring_cost(cost, updated_by=request.user, **d)
        return success_response(RecurringCostSerializer(cost).data)

    def delete(self, request, contract_id, rc_id):
        company_id = _scope_company_id(request)
        cost = self._get(contract_id, rc_id, company_id)
        if not cost:
            return error_response(_("Coût récurrent introuvable."), status_code=404)
        services.delete_recurring_cost(cost, deleted_by=request.user)
        return no_content_response()


def _get_period(period_id, company_id):
    from django.db.models import Q
    from apps.fleet.models import Period
    try:
        return Period.objects.get(
            Q(company_id=company_id) | Q(company__isnull=True),
            id=period_id, is_deleted=False,
        )
    except Period.DoesNotExist:
        return None


def _get_company_user(user_id, company_id):
    from apps.authentication.models import User
    return User.objects.filter(id=user_id, company_id=company_id).first()


def _get_employee(employee_id, company_id):
    from apps.hr.models import Employee
    return Employee.objects.filter(id=employee_id, company_id=company_id, is_deleted=False).first()


# ══════════════════════════════════════════════════════════════════════════════
# VEHICLE DOCUMENTS
# ══════════════════════════════════════════════════════════════════════════════

class VehicleDocumentListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.document.view', 'POST': 'fleet.document.manage'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.document.view', 'PATCH': 'fleet.document.manage', 'PUT': 'fleet.document.manage', 'DELETE': 'fleet.document.manage'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.assignment.view', 'POST': 'fleet.assignment.manage'}

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."))
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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.assignment.view', 'PATCH': 'fleet.assignment.manage', 'PUT': 'fleet.assignment.manage', 'DELETE': 'fleet.assignment.manage'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'fleet.assignment.manage'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'fleet.assignment.manage'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'fleet.assignment.manage'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.assignment.view'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.accident.view', 'POST': 'fleet.accident.manage'}

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."))
        accidents = selectors.list_accidents(
            company_id,
            vehicle_id=request.query_params.get("vehicle_id"),
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
        trip = Trip.objects.filter(company_id=company.id, is_deleted=False).filter(id=d["trip_id"]).first()
        if not trip:
            return error_response(_("Voyage introuvable."), status_code=404)
        try:
            accident = services.create_accident(trip=trip, created_by=request.user, **{
                k: v for k, v in d.items() if k != "trip_id"
            })
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(AccidentDetailSerializer(accident).data)


class AccidentDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.accident.view', 'PATCH': 'fleet.accident.manage', 'PUT': 'fleet.accident.manage', 'DELETE': 'fleet.accident.manage'}

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
        d = payload.validated_data
        if d.get("trip_id"):
            company_id = _scope_company_id(request)
            trip = Trip.objects.filter(company_id=company_id, is_deleted=False).filter(id=d["trip_id"]).first()
            if not trip:
                return error_response(_("Voyage introuvable."), status_code=404)
        try:
            accident = services.update_accident(accident, updated_by=request.user, **d)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(AccidentDetailSerializer(accident).data)

    def delete(self, request, accident_id):
        accident = self._get(request, accident_id)
        if not accident:
            return error_response(_("Accident introuvable."), status_code=404)
        services.delete_accident(accident, deleted_by=request.user)
        return no_content_response()


class VehicleAccidentListView(APIView):
    """Liste des accidents d'un véhicule spécifique."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'fleet.accident.view'}

    def get(self, request, vehicle_id):
        company_id = _scope_company_id(request)
        accidents = selectors.list_vehicle_accidents(vehicle_id, company_id)
        if accidents is None:
            return error_response(_("Véhicule introuvable."), status_code=404)
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(accidents, request)
        return paginator.get_paginated_response(AccidentListSerializer(page, many=True).data)

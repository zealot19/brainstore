from django.utils.translation import gettext_lazy as _
from rest_framework.views import APIView
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny

from apps.core.permissions import IsSuperAdmin, IsInstitutionAdmin, IsAuthenticated, HasModulePermission
from apps.core.responses import success_response, created_response, error_response
from apps.core.exceptions import ApplicationError

from . import services, selectors
from .models import Package, Company, Subscription, Agency, Parameter, FeatureFlag
from .serializers import (
    PackageSerializer, PackageWriteSerializer,
    CompanyListSerializer, CompanyDetailSerializer,
    CompanyCreateSerializer, CompanyUpdateSerializer,
    CompanySuspendSerializer, ChangePackageSerializer,
    SubscriptionSerializer, SubscriptionWriteSerializer,
    AgencySerializer, AgencyWriteSerializer, AgencyTreeSerializer,
    ParameterSerializer, ParameterWriteSerializer, ParameterBulkSerializer,
    FeatureFlagSerializer, FeatureFlagWriteSerializer, FeatureFlagSetSerializer,
)


# ═══════════════════════════════════════════════════════════════════════════════
# PACKAGE
# ═══════════════════════════════════════════════════════════════════════════════

class PackageListView(APIView):
    """GET /system/packages/ — liste publique des packages."""
    permission_classes = [AllowAny]

    def get(self, request):
        packages = Package.active.all().order_by("sort_order")
        return success_response(PackageSerializer(packages, many=True).data)


class PackageDetailView(APIView):
    """GET /system/packages/<id>/"""
    permission_classes = [AllowAny]

    def get(self, request, pk):
        try:
            pkg = Package.objects.get(id=pk)
        except Package.DoesNotExist:
            return error_response(_("Package introuvable."), status_code=404)
        return success_response(PackageSerializer(pkg).data)


class PackageAdminView(APIView):
    """GET (tous) / POST — SuperAdmin uniquement."""
    permission_classes = [IsSuperAdmin]

    def get(self, request):
        packages = Package.objects.all().order_by("-created_at")
        return success_response(PackageSerializer(packages, many=True).data)

    def post(self, request):
        payload = PackageWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        pkg = services.create_package(**d)
        return created_response(PackageSerializer(pkg).data)


class PackageAdminDetailView(APIView):
    """PATCH/DELETE /system/packages/<id>/ — SuperAdmin."""
    permission_classes = [IsSuperAdmin]

    def _get(self, pk):
        try:
            return Package.objects.get(id=pk)
        except Package.DoesNotExist:
            return None

    def patch(self, request, pk):
        pkg = self._get(pk)
        if not pkg:
            return error_response(_("Package introuvable."), status_code=404)
        payload = PackageWriteSerializer(pkg, data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        pkg = services.update_package(pkg, **payload.validated_data)
        return success_response(PackageSerializer(pkg).data)

    def delete(self, request, pk):
        pkg = self._get(pk)
        if not pkg:
            return error_response(_("Package introuvable."), status_code=404)
        pkg.is_active = False
        pkg.save(update_fields=["is_active"])
        return success_response(message=_("Package désactivé."))


# ═══════════════════════════════════════════════════════════════════════════════
# COMPANY
# ═══════════════════════════════════════════════════════════════════════════════

class CompanyListView(APIView):
    """GET /system/companies/ — SuperAdmin : toutes les institutions."""
    permission_classes = [IsSuperAdmin]

    def get(self, request):
        companies = selectors.list_companies(
            status=request.query_params.get("status"),
            package_id=request.query_params.get("package"),
            search=request.query_params.get("search"),
        )
        return success_response(CompanyListSerializer(companies, many=True).data)

    def post(self, request):
        payload = CompanyCreateSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        try:
            company, setup = services.create_company(
                created_by=request.user, **payload.validated_data
            )
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        data = CompanyDetailSerializer(company).data
        if setup:
            data["setup"] = setup
        return created_response(data)


class CompanyDetailView(APIView):
    """GET/PATCH/DELETE /system/companies/<id>/"""
    permission_classes = [IsSuperAdmin]

    def _get(self, pk):
        try:
            return selectors.get_company(pk)
        except Company.DoesNotExist:
            return None

    def get(self, request, pk):
        company = self._get(pk)
        if not company:
            return error_response(_("Institution introuvable."), status_code=404)
        return success_response(CompanyDetailSerializer(company).data)

    def patch(self, request, pk):
        company = self._get(pk)
        if not company:
            return error_response(_("Institution introuvable."), status_code=404)
        payload = CompanyUpdateSerializer(company, data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        company = services.update_company(company, updated_by=request.user, **payload.validated_data)
        return success_response(CompanyDetailSerializer(company).data)

    def delete(self, request, pk):
        company = self._get(pk)
        if not company:
            return error_response(_("Institution introuvable."), status_code=404)
        company.soft_delete(user=request.user)
        return success_response(message=_("Institution supprimée."))


class CompanySuspendView(APIView):
    """POST /system/companies/<pk>/suspend/"""
    permission_classes = [IsSuperAdmin]

    def post(self, request, pk):
        try:
            company = selectors.get_company(pk)
        except Company.DoesNotExist:
            return error_response(_("Institution introuvable."), status_code=404)
        payload = CompanySuspendSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        services.suspend_company(company, reason=payload.validated_data.get("reason", ""), updated_by=request.user)
        return success_response(message=_("Institution suspendue."))


class CompanyActivateView(APIView):
    """POST /system/companies/<pk>/activate/"""
    permission_classes = [IsSuperAdmin]

    def post(self, request, pk):
        try:
            company = selectors.get_company(pk)
        except Company.DoesNotExist:
            return error_response(_("Institution introuvable."), status_code=404)
        try:
            services.activate_company(company, updated_by=request.user)
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return success_response(message=_("Institution activée."))


class CompanyCancelView(APIView):
    """POST /system/companies/<pk>/cancel/"""
    permission_classes = [IsSuperAdmin]

    def post(self, request, pk):
        try:
            company = selectors.get_company(pk)
        except Company.DoesNotExist:
            return error_response(_("Institution introuvable."), status_code=404)
        services.cancel_company(company, updated_by=request.user)
        return success_response(message=_("Institution résiliée."))


class CompanyStatsView(APIView):
    """GET /system/companies/<pk>/stats/"""
    permission_classes = [IsSuperAdmin]

    def get(self, request, pk):
        try:
            company = selectors.get_company(pk)
        except Company.DoesNotExist:
            return error_response(_("Institution introuvable."), status_code=404)
        return success_response(selectors.get_company_stats(company))


class CompanyChangePackageView(APIView):
    """POST /system/companies/<pk>/change-package/"""
    permission_classes = [IsSuperAdmin]

    def post(self, request, pk):
        try:
            company = selectors.get_company(pk)
        except Company.DoesNotExist:
            return error_response(_("Institution introuvable."), status_code=404)
        payload = ChangePackageSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        try:
            sub = services.change_package(
                company,
                package_id=payload.validated_data["package_id"],
                billing_cycle=payload.validated_data["billing_cycle"],
                updated_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return success_response(SubscriptionSerializer(sub).data, message=_("Package modifié."))


# ── Subscriptions d'une company ───────────────────────────────────────────────

class CompanySubscriptionListView(APIView):
    """GET /system/companies/<pk>/subscriptions/"""
    permission_classes = [IsSuperAdmin]

    def get(self, request, pk):
        try:
            company = selectors.get_company(pk)
        except Company.DoesNotExist:
            return error_response(_("Institution introuvable."), status_code=404)
        subs = selectors.list_company_subscriptions(company)
        return success_response(SubscriptionSerializer(subs, many=True).data)


# ═══════════════════════════════════════════════════════════════════════════════
# AGENCY
# ═══════════════════════════════════════════════════════════════════════════════

def _get_company_id(request, pk=None):
    """Retourne company_id selon le rôle : SuperAdmin peut spécifier, sinon tenant courant.

    Le tenant middleware étant encore un stub (retourne None), on retombe sur la
    société de l'utilisateur : un admin/agent d'institution est scopé à sa propre
    société. Cohérent avec la résolution utilisée par le POST de création.
    """
    from apps.core.middleware import get_current_tenant
    if pk:
        return pk
    tenant = get_current_tenant()
    if tenant:
        return tenant["company_id"]
    return getattr(request.user, "company_id", None)


class AgencyListView(APIView):
    """GET /system/agencies/?company=<id> ou via middleware tenant."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "system.agency.view", "POST": "system.agency.manage"}

    def get(self, request):
        company_id = request.query_params.get("company") or _get_company_id(request)
        if not company_id and not request.user.is_superuser:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."), status_code=400)
        agencies = selectors.list_agencies(
            company_id or None,
            parent_id=request.query_params.get("parent") or None,
            agency_type=request.query_params.get("type"),
            search=request.query_params.get("search"),
        )
        return success_response(AgencySerializer(agencies, many=True).data)

    def post(self, request):
        # Résout la société AVANT validation : un admin d'institution est scopé à sa propre
        # société (il n'a pas à envoyer 'company'), un super-admin peut la préciser. On injecte
        # 'company' dans les données pour que le UniqueTogetherValidator (company, code) fonctionne.
        if request.user.is_superuser:
            company_id = request.data.get("company") or _get_company_id(request)
        else:
            company_id = getattr(request.user, "company_id", None) or _get_company_id(request)
        if not company_id:
            return error_response(_("company requis."), status_code=400)
        data = request.data.copy() if hasattr(request.data, "copy") else dict(request.data)
        data["company"] = str(company_id)
        payload = AgencyWriteSerializer(data=data)
        payload.is_valid(raise_exception=True)
        try:
            agency = services.create_agency(
                company_id=company_id,
                name=payload.validated_data["name"],
                code=payload.validated_data["code"],
                agency_type=payload.validated_data.get("agency_type", Agency.AgencyType.BRANCH),
                parent_id=payload.validated_data.get("parent_id") or
                          (payload.validated_data["parent"].id if payload.validated_data.get("parent") else None),
                email=payload.validated_data.get("email", ""),
                phone=payload.validated_data.get("phone", ""),
                manager_id=payload.validated_data.get("manager_id") or
                           (payload.validated_data["manager"].id if payload.validated_data.get("manager") else None),
                currency_id=payload.validated_data.get("currency_id") or
                            (payload.validated_data["currency"].id if payload.validated_data.get("currency") else None),
                is_active=payload.validated_data.get("is_active", True),
                created_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return created_response(AgencySerializer(agency).data)


class AgencyDetailView(APIView):
    """GET/PATCH/DELETE /system/agencies/<id>/"""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "system.agency.view", "PATCH": "system.agency.manage",
                      "PUT": "system.agency.manage", "DELETE": "system.agency.manage"}

    def _get(self, pk, request):
        company_id = request.query_params.get("company") or _get_company_id(request)
        try:
            return selectors.get_agency(pk, company_id=company_id)
        except Agency.DoesNotExist:
            return None

    def get(self, request, pk):
        agency = self._get(pk, request)
        if not agency:
            return error_response(_("Agence introuvable."), status_code=404)
        return success_response(AgencySerializer(agency).data)

    def patch(self, request, pk):
        agency = self._get(pk, request)
        if not agency:
            return error_response(_("Agence introuvable."), status_code=404)
        payload = AgencyWriteSerializer(agency, data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            agency = services.update_agency(agency, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return success_response(AgencySerializer(agency).data)

    def delete(self, request, pk):
        agency = self._get(pk, request)
        if not agency:
            return error_response(_("Agence introuvable."), status_code=404)
        try:
            services.delete_agency(agency, deleted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return success_response(message=_("Agence supprimée."))


class AgencyTreeView(APIView):
    """GET /system/agencies/tree/?company=<id> — Arborescence complète."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "system.agency.view"}

    def get(self, request):
        company_id = request.query_params.get("company") or _get_company_id(request)
        if not company_id:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."), status_code=400)
        roots = selectors.get_agency_tree(company_id)
        return success_response(AgencyTreeSerializer(roots, many=True).data)


# ═══════════════════════════════════════════════════════════════════════════════
# PARAMETER
# ═══════════════════════════════════════════════════════════════════════════════

class ParameterListView(APIView):
    """GET/POST /system/parameters/"""
    permission_classes = [IsSuperAdmin]

    def get(self, request):
        qs = Parameter.objects.filter(is_deleted=False)
        company = request.query_params.get("company")
        scope   = request.query_params.get("scope")
        module  = request.query_params.get("module")
        if company:
            qs = qs.filter(company_id=company)
        if scope:
            qs = qs.filter(scope=scope)
        if module:
            qs = qs.filter(module=module)
        return success_response(ParameterSerializer(qs, many=True).data)

    def post(self, request):
        payload = ParameterWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            param = services.create_parameter(
                key=d["key"], value=d["value"],
                data_type=d.get("data_type", Parameter.DataType.STRING),
                scope=d.get("scope", Parameter.Scope.GLOBAL),
                company_id=d["company"].id if d.get("company") else None,
                module=d.get("module", ""),
                description=d.get("description", ""),
                is_readonly=d.get("is_readonly", False),
            )
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return created_response(ParameterSerializer(param).data)


class ParameterDetailView(APIView):
    """GET/PATCH/DELETE /system/parameters/<id>/"""
    permission_classes = [IsSuperAdmin]

    def _get(self, pk):
        try:
            return Parameter.objects.get(id=pk, is_deleted=False)
        except Parameter.DoesNotExist:
            return None

    def get(self, request, pk):
        param = self._get(pk)
        if not param:
            return error_response(_("Paramètre introuvable."), status_code=404)
        return success_response(ParameterSerializer(param).data)

    def patch(self, request, pk):
        param = self._get(pk)
        if not param:
            return error_response(_("Paramètre introuvable."), status_code=404)
        try:
            param = services.update_parameter(
                param,
                value=request.data.get("value"),
                description=request.data.get("description"),
                is_readonly=request.data.get("is_readonly"),
                updated_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return success_response(ParameterSerializer(param).data)

    def delete(self, request, pk):
        param = self._get(pk)
        if not param:
            return error_response(_("Paramètre introuvable."), status_code=404)
        try:
            services.delete_parameter(param)
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return success_response(message=_("Paramètre supprimé."))


class ParameterBulkView(APIView):
    """POST /system/parameters/bulk/ — Mise à jour en masse."""
    permission_classes = [IsSuperAdmin]

    def post(self, request):
        payload = ParameterBulkSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        services.upsert_parameters(
            items=payload.validated_data["items"],
            company_id=payload.validated_data.get("company_id"),
        )
        return success_response(message=_("Paramètres mis à jour."))


# ═══════════════════════════════════════════════════════════════════════════════
# FEATURE FLAG
# ═══════════════════════════════════════════════════════════════════════════════

class FeatureFlagListView(APIView):
    """GET/POST /system/feature-flags/"""
    permission_classes = [IsSuperAdmin]

    def get(self, request):
        qs = FeatureFlag.objects.filter(is_deleted=False)
        company = request.query_params.get("company")
        if company:
            qs = qs.filter(company_id=company)
        return success_response(FeatureFlagSerializer(qs, many=True).data)

    def post(self, request):
        payload = FeatureFlagWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            flag = services.create_feature_flag(
                key=d["key"],
                company_id=d["company"].id if d.get("company") else None,
                is_enabled=d.get("is_enabled", False),
                description=d.get("description", ""),
            )
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return created_response(FeatureFlagSerializer(flag).data)


class FeatureFlagDetailView(APIView):
    """GET/PATCH/DELETE /system/feature-flags/<id>/"""
    permission_classes = [IsSuperAdmin]

    def _get(self, pk):
        try:
            return FeatureFlag.objects.get(id=pk, is_deleted=False)
        except FeatureFlag.DoesNotExist:
            return None

    def get(self, request, pk):
        flag = self._get(pk)
        if not flag:
            return error_response(_("Flag introuvable."), status_code=404)
        return success_response(FeatureFlagSerializer(flag).data)

    def delete(self, request, pk):
        flag = self._get(pk)
        if not flag:
            return error_response(_("Flag introuvable."), status_code=404)
        flag.soft_delete(user=request.user)
        return success_response(message=_("Flag supprimé."))


class FeatureFlagToggleView(APIView):
    """POST /system/feature-flags/<id>/toggle/"""
    permission_classes = [IsSuperAdmin]

    def post(self, request, pk):
        try:
            flag = FeatureFlag.objects.get(id=pk, is_deleted=False)
        except FeatureFlag.DoesNotExist:
            return error_response(_("Flag introuvable."), status_code=404)
        flag = services.toggle_feature_flag(flag, updated_by=request.user)
        return success_response(FeatureFlagSerializer(flag).data)


class FeatureFlagSetView(APIView):
    """PATCH /system/feature-flags/<id>/set/ — Définir explicitement enabled/disabled."""
    permission_classes = [IsSuperAdmin]

    def patch(self, request, pk):
        try:
            flag = FeatureFlag.objects.get(id=pk, is_deleted=False)
        except FeatureFlag.DoesNotExist:
            return error_response(_("Flag introuvable."), status_code=404)
        payload = FeatureFlagSetSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        flag = services.set_feature_flag(flag, enabled=payload.validated_data["enabled"], updated_by=request.user)
        return success_response(FeatureFlagSerializer(flag).data)

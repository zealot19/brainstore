from django.utils.translation import gettext_lazy as _
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny

from apps.core.permissions import IsSuperAdmin, IsInstitutionAdmin, IsAuthenticated, HasModulePermission
from apps.core.responses import success_response, created_response, error_response
from apps.core.exceptions import ApplicationError

from . import services, selectors
from .models import Plan, Company, Subscription, Agency, Parameter, FeatureFlag, License
from .services.licensing import set_license_expiry
from .selectors.packages import accessible_packages
from .serializers import (
    PlanSerializer, PlanWriteSerializer,
    CompanyListSerializer, CompanyDetailSerializer,
    CompanyCreateSerializer, CompanyUpdateSerializer,
    CompanySuspendSerializer, ChangePlanSerializer,
    SubscriptionSerializer, SubscriptionWriteSerializer,
    AgencySerializer, AgencyWriteSerializer, AgencyTreeSerializer,
    ParameterSerializer, ParameterWriteSerializer, ParameterBulkSerializer,
    FeatureFlagSerializer, FeatureFlagWriteSerializer, FeatureFlagSetSerializer,
)


# ═══════════════════════════════════════════════════════════════════════════════
# PLAN
# ═══════════════════════════════════════════════════════════════════════════════

class PlanListView(APIView):
    """GET /system/packages/ — liste publique des plans."""
    permission_classes = [AllowAny]

    def get(self, request):
        plans = Plan.active.all().order_by("sort_order")
        return success_response(PlanSerializer(plans, many=True).data)


class PlanDetailView(APIView):
    """GET /system/packages/<id>/"""
    permission_classes = [AllowAny]

    def get(self, request, pk):
        try:
            plan = Plan.objects.get(id=pk)
        except Plan.DoesNotExist:
            return error_response(_("Plan introuvable."), status_code=404)
        return success_response(PlanSerializer(plan).data)


class PlanAdminView(APIView):
    """GET (tous) / POST — SuperAdmin uniquement."""
    permission_classes = [IsSuperAdmin]

    def get(self, request):
        plans = Plan.objects.all().order_by("-created_at")
        return success_response(PlanSerializer(plans, many=True).data)

    def post(self, request):
        payload = PlanWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        plan = services.create_plan(**d)
        return created_response(PlanSerializer(plan).data)


class PlanAdminDetailView(APIView):
    """PATCH/DELETE /system/packages/<id>/ — SuperAdmin."""
    permission_classes = [IsSuperAdmin]

    def _get(self, pk):
        try:
            return Plan.objects.get(id=pk)
        except Plan.DoesNotExist:
            return None

    def patch(self, request, pk):
        plan = self._get(pk)
        if not plan:
            return error_response(_("Plan introuvable."), status_code=404)
        payload = PlanWriteSerializer(plan, data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        plan = services.update_plan(plan, **payload.validated_data)
        return success_response(PlanSerializer(plan).data)

    def delete(self, request, pk):
        plan = self._get(pk)
        if not plan:
            return error_response(_("Plan introuvable."), status_code=404)
        plan.is_active = False
        plan.save(update_fields=["is_active"])
        return success_response(message=_("Plan désactivé."))


# ═══════════════════════════════════════════════════════════════════════════════
# COMPANY
# ═══════════════════════════════════════════════════════════════════════════════

class CompanyListView(APIView):
    """GET /system/companies/ — SuperAdmin : toutes les institutions."""
    permission_classes = [IsSuperAdmin]

    def get(self, request):
        companies = selectors.list_companies(
            status=request.query_params.get("status"),
            plan_id=request.query_params.get("plan"),
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
        lic, _ = License.objects.get_or_create(company=company)
        set_license_expiry(company, expires_at=lic.expires_at, status=License.Status.SUSPENDED, actor=request.user)
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
        lic, _ = License.objects.get_or_create(company=company)
        set_license_expiry(company, expires_at=lic.expires_at, status=License.Status.ACTIVE, actor=request.user)
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
        lic, _ = License.objects.get_or_create(company=company)
        set_license_expiry(company, expires_at=lic.expires_at, status=License.Status.CANCELLED, actor=request.user)
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


class CompanyChangePlanView(APIView):
    """POST /system/companies/<pk>/change-package/"""
    permission_classes = [IsSuperAdmin]

    def post(self, request, pk):
        try:
            company = selectors.get_company(pk)
        except Company.DoesNotExist:
            return error_response(_("Institution introuvable."), status_code=404)
        payload = ChangePlanSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        try:
            sub = services.change_plan(
                company,
                plan_id=payload.validated_data["plan_id"],
                billing_cycle=payload.validated_data["billing_cycle"],
                updated_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return success_response(SubscriptionSerializer(sub).data, message=_("Plan modifié."))


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


# ═══════════════════════════════════════════════════════════════════════════════
# APP LAUNCHER — packages accessibles à l'utilisateur connecté
# ═══════════════════════════════════════════════════════════════════════════════

class MyPackagesView(APIView):
    """GET /system/my-packages/ — Packages accessibles à l'utilisateur (launcher post-login)."""
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return success_response(accessible_packages(request.user))


class LicenseStatusView(APIView):
    """GET current tenant's license status (exempt from the lock)."""
    permission_classes = [IsAuthenticated]

    def get(self, request):
        from apps.system_config.services.licensing import company_is_licensed
        company_id = getattr(request.user, "company_id", None)
        if not company_id:
            # No tenant (e.g. platform super admin) is never gated — not expired.
            return Response({"valid": True, "status": "platform", "expires_at": None, "message": ""})
        lic = License.objects.filter(company_id=company_id).first()
        valid = company_is_licensed(company_id)
        return Response({
            "valid": valid,
            "status": lic.status if lic else None,
            "expires_at": lic.expires_at.isoformat() if lic and lic.expires_at else None,
            "message": "" if valid else "Licence expirée, veuillez contacter l'administrateur.",
        })


class CompanyLicenseView(APIView):
    """Super-admin: read / set a company's license expiry date."""
    permission_classes = [IsAuthenticated, IsSuperAdmin]

    def get(self, request, pk):
        lic = License.objects.filter(company_id=pk).first()
        if not lic:
            # Not provisioned yet — return an empty shape (200) so the UI opens cleanly.
            return Response({"status": None, "expires_at": None})
        return Response({"status": lic.status,
                         "expires_at": lic.expires_at.isoformat() if lic.expires_at else None})

    def put(self, request, pk):
        from datetime import date as _date
        company = Company.objects.filter(id=pk).first()
        if not company:
            return Response({"detail": "Institution introuvable."}, status=status.HTTP_404_NOT_FOUND)
        raw = request.data.get("expires_at")
        try:
            exp = _date.fromisoformat(raw)
        except (TypeError, ValueError):
            return Response({"detail": "expires_at doit être une date (YYYY-MM-DD)."},
                            status=status.HTTP_400_BAD_REQUEST)
        new_status = request.data.get("status") or License.Status.ACTIVE
        lic = set_license_expiry(company, expires_at=exp, status=new_status, actor=request.user)
        return Response({"status": lic.status,
                         "expires_at": lic.expires_at.isoformat() if lic.expires_at else None})


class ArchivingSettingsView(APIView):
    """GET/PUT the per-company data-archiving window (institution admin only)."""
    permission_classes = [IsAuthenticated, IsInstitutionAdmin]

    def get(self, request):
        from apps.system_config.selectors.archiving import archive_window_days
        return Response({"archive_window_days": archive_window_days(request.user.company_id)})

    def put(self, request):
        from apps.system_config.services.archiving import set_archive_window_days
        raw = request.data.get("archive_window_days")
        # Reject bool and floats (JSON true / 5.5); accept int or an integer-valued string.
        if isinstance(raw, bool) or not isinstance(raw, (int, str)):
            return Response({"detail": "archive_window_days doit être un entier."},
                            status=status.HTTP_400_BAD_REQUEST)
        try:
            days = int(raw)
        except (TypeError, ValueError):
            return Response({"detail": "archive_window_days doit être un entier."},
                            status=status.HTTP_400_BAD_REQUEST)
        try:
            set_archive_window_days(request.user.company_id, days, updated_by=request.user)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"archive_window_days": days})

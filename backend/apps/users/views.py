from django.utils.translation import gettext_lazy as _
from rest_framework.views import APIView

from apps.core.permissions import IsSuperAdmin, IsInstitutionAdmin
from apps.core.responses import (
    success_response, created_response, error_response, no_content_response,
)
from apps.core.exceptions import ApplicationError
from apps.core.pagination import StandardResultsSetPagination
from apps.system_config.models import Company

from . import selectors, services
from .serializers import (
    UserListSerializer,
    UserDetailSerializer,
    UserCreateSerializer,
    UserUpdateSerializer,
    AdminResetPasswordSerializer,
    UserAgencyAssignSerializer,
    UserAgencyReadSerializer,
)


# ── Utilitaires internes ───────────────────────────────────────────────────────

def _parse_bool(value):
    """Convertit un query param string ('true'/'false') en bool Python, ou None si absent."""
    if value is None:
        return None
    return value.lower() in ("true", "1", "yes")


def _get_scope_company_id(request):
    """
    company_id pour filtrer les listes :
    - SuperAdmin → paramètre ?company_id= (optionnel)
    - InstitutionAdmin → toujours sa propre company
    """
    if request.user.is_superuser:
        return request.query_params.get("company_id")
    return str(request.user.company_id) if request.user.company_id else None


def _resolve_target_company(request, company_id_from_body=None):
    """
    Retourne l'objet Company cible pour les créations :
    - SuperAdmin → company_id requis en body
    - InstitutionAdmin → sa propre company
    Retourne (company, error_response_or_None).
    """
    if request.user.is_superuser:
        if not company_id_from_body:
            return None, error_response(_("company_id requis pour les super administrateurs."))
        try:
            company = Company.objects.get(id=company_id_from_body)
        except Company.DoesNotExist:
            return None, error_response(_("Institution introuvable."), status_code=404)
        return company, None
    else:
        company = request.user.company
        if not company:
            return None, error_response(
                _("Votre compte n'est pas associé à une institution.")
            )
        return company, None


def _get_scoped_user(user_id, request):
    """Récupère un utilisateur en appliquant le scope institution si nécessaire."""
    company_id = None if request.user.is_superuser else str(request.user.company_id or "")
    return selectors.get_user_by_id(user_id, company_id=company_id)


# ═══════════════════════════════════════════════════════════════════════════════
# LISTE & CRÉATION
# ═══════════════════════════════════════════════════════════════════════════════

class UserListView(APIView):
    """
    GET  /users/  — liste paginée des utilisateurs
    POST /users/  — créer (inviter) un utilisateur
    """
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _get_scope_company_id(request)

        users = selectors.list_users(
            company_id=company_id,
            agency_id=request.query_params.get("agency_id"),
            is_active=_parse_bool(request.query_params.get("is_active")),
            is_institution_admin=_parse_bool(request.query_params.get("is_institution_admin")),
            is_agency_admin=_parse_bool(request.query_params.get("is_agency_admin")),
            search=request.query_params.get("search"),
        )

        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(users, request)
        return paginator.get_paginated_response(UserListSerializer(page, many=True).data)

    def post(self, request):
        payload = UserCreateSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data

        company, err = _resolve_target_company(request, d.get("company_id"))
        if err:
            return err

        try:
            user, temp_password = services.create_user(
                created_by=request.user,
                company=company,
                email=d["email"],
                first_name=d["first_name"],
                last_name=d["last_name"],
                phone=d.get("phone", ""),
                job_title=d.get("job_title", ""),
                is_institution_admin=d.get("is_institution_admin", False),
                is_agency_admin=d.get("is_agency_admin", False),
                default_agency_id=d.get("default_agency_id"),
                agency_ids=d.get("agency_ids") or [],
                language_code=d.get("language_code", "fr"),
                user_timezone=d.get("timezone", "Africa/Abidjan"),
                temp_password=d.get("temp_password"),
            )
        except ApplicationError as e:
            return error_response(str(e))

        data = UserDetailSerializer(user).data
        data["temp_password"] = temp_password
        return created_response(data, message=_("Utilisateur créé avec succès."))


# ═══════════════════════════════════════════════════════════════════════════════
# DÉTAIL
# ═══════════════════════════════════════════════════════════════════════════════

class UserDetailView(APIView):
    """
    GET    /users/<id>/ — profil complet
    PATCH  /users/<id>/ — modifier le profil
    DELETE /users/<id>/ — désactiver (soft)
    """
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, user_id):
        user = _get_scoped_user(user_id, request)
        if not user:
            return error_response(_("Utilisateur introuvable."), status_code=404)
        return success_response(UserDetailSerializer(user).data)

    def patch(self, request, user_id):
        user = _get_scoped_user(user_id, request)
        if not user:
            return error_response(_("Utilisateur introuvable."), status_code=404)

        payload = UserUpdateSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data

        try:
            user = services.update_user(
                user,
                updated_by=request.user,
                first_name=d.get("first_name"),
                last_name=d.get("last_name"),
                phone=d.get("phone"),
                job_title=d.get("job_title"),
                is_institution_admin=d.get("is_institution_admin"),
                is_agency_admin=d.get("is_agency_admin"),
                language_code=d.get("language_code"),
                user_timezone=d.get("timezone"),
                default_agency_id=d.get("default_agency_id"),
            )
        except ApplicationError as e:
            return error_response(str(e))

        return success_response(UserDetailSerializer(user).data)

    def delete(self, request, user_id):
        if str(user_id) == str(request.user.id):
            return error_response(_("Vous ne pouvez pas désactiver votre propre compte."))

        user = _get_scoped_user(user_id, request)
        if not user:
            return error_response(_("Utilisateur introuvable."), status_code=404)

        try:
            services.deactivate_user(user, updated_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))

        return no_content_response()


# ═══════════════════════════════════════════════════════════════════════════════
# ACTIONS SUR LE CYCLE DE VIE DU COMPTE
# ═══════════════════════════════════════════════════════════════════════════════

class UserActivateView(APIView):
    """POST /users/<id>/activate/"""
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, user_id):
        user = _get_scoped_user(user_id, request)
        if not user:
            return error_response(_("Utilisateur introuvable."), status_code=404)
        try:
            services.activate_user(user, updated_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(message=_("Utilisateur activé avec succès."))


class UserDeactivateView(APIView):
    """POST /users/<id>/deactivate/"""
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, user_id):
        if str(user_id) == str(request.user.id):
            return error_response(_("Vous ne pouvez pas désactiver votre propre compte."))
        user = _get_scoped_user(user_id, request)
        if not user:
            return error_response(_("Utilisateur introuvable."), status_code=404)
        try:
            services.deactivate_user(user, updated_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(message=_("Utilisateur désactivé avec succès."))


class UserUnlockView(APIView):
    """POST /users/<id>/unlock/ — déverrouille un compte bloqué."""
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, user_id):
        user = _get_scoped_user(user_id, request)
        if not user:
            return error_response(_("Utilisateur introuvable."), status_code=404)
        services.unlock_user(user, updated_by=request.user)
        return success_response(message=_("Compte déverrouillé avec succès."))


class UserAdminResetPasswordView(APIView):
    """POST /users/<id>/reset-password/ — réinitialisation par un administrateur."""
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, user_id):
        user = _get_scoped_user(user_id, request)
        if not user:
            return error_response(_("Utilisateur introuvable."), status_code=404)

        payload = AdminResetPasswordSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data

        services.admin_reset_password(
            user,
            new_password=d["new_password"],
            must_change=d.get("must_change", True),
            updated_by=request.user,
        )
        return success_response(message=_("Mot de passe réinitialisé avec succès."))


# ═══════════════════════════════════════════════════════════════════════════════
# GESTION DES AGENCES
# ═══════════════════════════════════════════════════════════════════════════════

class UserAgencyView(APIView):
    """
    GET   /users/<id>/agencies/ — liste les agences de l'utilisateur
    PATCH /users/<id>/agencies/ — remplace la liste des agences
    """
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, user_id):
        user = _get_scoped_user(user_id, request)
        if not user:
            return error_response(_("Utilisateur introuvable."), status_code=404)
        agencies = user.user_agencies.select_related("agency").all()
        return success_response(UserAgencyReadSerializer(agencies, many=True).data)

    def patch(self, request, user_id):
        user = _get_scoped_user(user_id, request)
        if not user:
            return error_response(_("Utilisateur introuvable."), status_code=404)

        payload = UserAgencyAssignSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data

        try:
            services.assign_user_agencies(
                user,
                agency_ids=d["agency_ids"],
                default_agency_id=d.get("default_agency_id"),
                updated_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))

        return success_response(message=_("Agences de l'utilisateur mises à jour."))


# ═══════════════════════════════════════════════════════════════════════════════
# STATISTIQUES
# ═══════════════════════════════════════════════════════════════════════════════

class UserStatsView(APIView):
    """GET /users/stats/ — statistiques des utilisateurs de l'institution."""
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _get_scope_company_id(request)
        if not company_id:
            return error_response(_("company_id requis (paramètre ?company_id= pour les super administrateurs)."))
        stats = selectors.get_user_stats(company_id)
        return success_response(stats)

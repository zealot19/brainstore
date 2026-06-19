from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from rest_framework.views import APIView

from apps.core.permissions import IsSuperAdmin, IsInstitutionAdmin
from apps.core.responses import success_response, created_response, error_response
from apps.core.exceptions import ApplicationError

from . import services, selectors
from .models import AppModule, Menu, Permission, Role, Profile, UserRole, UserProfile
from .serializers import (
    AppModuleSerializer, AppModuleWriteSerializer, AppModuleTreeSerializer,
    MenuSerializer, MenuWriteSerializer, MenuTreeSerializer,
    PermissionSerializer, PermissionWriteSerializer, PermissionBulkSerializer,
    RoleSerializer, RoleWriteSerializer, RoleSetPermissionsSerializer,
    ProfileSerializer, ProfileWriteSerializer, ProfileSetRolesSerializer,
    UserRoleSerializer, UserRoleAssignSerializer, UserRoleRevokeSerializer,
    UserProfileSerializer, UserProfileAssignSerializer,
)

User = get_user_model()


# ═══════════════════════════════════════════════════════════════════════════════
# APP MODULES
# ═══════════════════════════════════════════════════════════════════════════════

class AppModuleListView(APIView):
    """GET/POST /rbac/modules/"""
    permission_classes = [IsSuperAdmin]

    def get(self, request):
        modules = selectors.list_modules(
            is_active=request.query_params.get("active"),
        )
        return success_response(AppModuleSerializer(modules, many=True).data)

    def post(self, request):
        payload = AppModuleWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            module = services.create_module(
                code=d["code"], name=d["name"],
                description=d.get("description", ""),
                icon=d.get("icon", ""), order=d.get("order", 0),
                parent_id=d["parent"].id if d.get("parent") else None,
                is_core=d.get("is_core", False),
            )
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return created_response(AppModuleSerializer(module).data)


class AppModuleDetailView(APIView):
    """GET/PATCH/DELETE /rbac/modules/<id>/"""
    permission_classes = [IsSuperAdmin]

    def _get(self, pk):
        try:
            return selectors.get_module(pk)
        except AppModule.DoesNotExist:
            return None

    def get(self, request, pk):
        module = self._get(pk)
        if not module:
            return error_response(_("Module introuvable."), status_code=404)
        return success_response(AppModuleSerializer(module).data)

    def patch(self, request, pk):
        module = self._get(pk)
        if not module:
            return error_response(_("Module introuvable."), status_code=404)
        payload = AppModuleWriteSerializer(module, data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            module = services.update_module(module, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return success_response(AppModuleSerializer(module).data)

    def delete(self, request, pk):
        module = self._get(pk)
        if not module:
            return error_response(_("Module introuvable."), status_code=404)
        try:
            services.delete_module(module, deleted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return success_response(message=_("Module supprimé."))


class AppModuleTreeView(APIView):
    """GET /rbac/modules/tree/"""
    permission_classes = [IsSuperAdmin]

    def get(self, request):
        return success_response(AppModuleTreeSerializer(selectors.get_module_tree(), many=True).data)


# ═══════════════════════════════════════════════════════════════════════════════
# MENUS
# ═══════════════════════════════════════════════════════════════════════════════

class MenuListView(APIView):
    """GET/POST /rbac/menus/"""
    permission_classes = [IsSuperAdmin]

    def get(self, request):
        menus = selectors.list_menus(
            module_id=request.query_params.get("module"),
            is_visible=request.query_params.get("visible"),
        )
        return success_response(MenuSerializer(menus, many=True).data)

    def post(self, request):
        payload = MenuWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            menu = services.create_menu(
                module_id=d["module"].id,
                name=d["name"],
                route=d.get("route", ""),
                icon=d.get("icon", ""),
                order=d.get("order", 0),
                menu_type=d.get("menu_type", Menu.MenuType.ITEM),
                parent_id=d["parent"].id if d.get("parent") else None,
                is_visible=d.get("is_visible", True),
            )
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return created_response(MenuSerializer(menu).data)


class MenuDetailView(APIView):
    """GET/PATCH/DELETE /rbac/menus/<id>/"""
    permission_classes = [IsSuperAdmin]

    def _get(self, pk):
        try:
            return selectors.get_menu(pk)
        except Menu.DoesNotExist:
            return None

    def get(self, request, pk):
        menu = self._get(pk)
        if not menu:
            return error_response(_("Menu introuvable."), status_code=404)
        return success_response(MenuSerializer(menu).data)

    def patch(self, request, pk):
        menu = self._get(pk)
        if not menu:
            return error_response(_("Menu introuvable."), status_code=404)
        payload = MenuWriteSerializer(menu, data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            menu = services.update_menu(menu, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return success_response(MenuSerializer(menu).data)

    def delete(self, request, pk):
        menu = self._get(pk)
        if not menu:
            return error_response(_("Menu introuvable."), status_code=404)
        try:
            services.delete_menu(menu, deleted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return success_response(message=_("Menu supprimé."))


class MenuTreeView(APIView):
    """GET /rbac/menus/tree/?module=<id>"""
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        tree = selectors.get_menu_tree(module_id=request.query_params.get("module"))
        return success_response(MenuTreeSerializer(tree, many=True).data)


# ═══════════════════════════════════════════════════════════════════════════════
# PERMISSIONS
# ═══════════════════════════════════════════════════════════════════════════════

class PermissionListView(APIView):
    """GET/POST /rbac/permissions/"""
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        perms = selectors.list_permissions(
            module_id=request.query_params.get("module"),
            category=request.query_params.get("category"),
            search=request.query_params.get("search"),
        )
        return success_response(PermissionSerializer(perms, many=True).data)

    def post(self, request):
        if not (request.user.is_staff and request.user.is_superuser):
            return error_response(_("Action réservée au super-administrateur."), status_code=403)
        payload = PermissionWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            perm = services.create_permission(
                module_id=d["module"].id,
                code=d["code"], name=d["name"],
                description=d.get("description", ""),
                category=d.get("category", Permission.Category.VIEW),
            )
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return created_response(PermissionSerializer(perm).data)


class PermissionBulkView(APIView):
    """POST /rbac/permissions/bulk/ — Création en masse."""
    permission_classes = [IsSuperAdmin]

    def post(self, request):
        payload = PermissionBulkSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        try:
            count = services.bulk_create_permissions(
                module_id=payload.validated_data["module_id"],
                items=payload.validated_data["items"],
            )
        except AppModule.DoesNotExist:
            return error_response(_("Module introuvable."), status_code=404)
        return success_response({"created": count}, message=_("Permissions créées."))


class PermissionDetailView(APIView):
    """GET /rbac/permissions/<id>/"""
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, pk):
        try:
            perm = selectors.get_permission(pk)
        except Permission.DoesNotExist:
            return error_response(_("Permission introuvable."), status_code=404)
        return success_response(PermissionSerializer(perm).data)


# ═══════════════════════════════════════════════════════════════════════════════
# ROLES
# ═══════════════════════════════════════════════════════════════════════════════

class RoleListView(APIView):
    """GET/POST /rbac/roles/"""
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        roles = selectors.list_roles(
            company_id=request.query_params.get("company"),
            include_system=request.query_params.get("system", "true").lower() != "false",
            search=request.query_params.get("search"),
        )
        return success_response(RoleSerializer(roles, many=True).data)

    def post(self, request):
        payload = RoleWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            role = services.create_role(
                name=d["name"],
                description=d.get("description", ""),
                company_id=d["company"].id if d.get("company") else None,
                created_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return created_response(RoleSerializer(role).data)


class RoleDetailView(APIView):
    """GET/PATCH/DELETE /rbac/roles/<id>/"""
    permission_classes = [IsInstitutionAdmin]

    def _get(self, pk):
        try:
            return selectors.get_role(pk)
        except Role.DoesNotExist:
            return None

    def get(self, request, pk):
        role = self._get(pk)
        if not role:
            return error_response(_("Rôle introuvable."), status_code=404)
        return success_response(RoleSerializer(role).data)

    def patch(self, request, pk):
        role = self._get(pk)
        if not role:
            return error_response(_("Rôle introuvable."), status_code=404)
        payload = RoleWriteSerializer(role, data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            role = services.update_role(role, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return success_response(RoleSerializer(role).data)

    def delete(self, request, pk):
        role = self._get(pk)
        if not role:
            return error_response(_("Rôle introuvable."), status_code=404)
        try:
            services.delete_role(role, deleted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return success_response(message=_("Rôle supprimé."))


class RoleSetPermissionsView(APIView):
    """POST /rbac/roles/<id>/permissions/ — Remplace toutes les permissions."""
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, pk):
        try:
            role = selectors.get_role(pk)
        except Role.DoesNotExist:
            return error_response(_("Rôle introuvable."), status_code=404)
        payload = RoleSetPermissionsSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        try:
            services.set_role_permissions(
                role, payload.validated_data["permission_ids"], granted_by=request.user
            )
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return success_response(RoleSerializer(selectors.get_role(pk)).data)


# ═══════════════════════════════════════════════════════════════════════════════
# PROFILES
# ═══════════════════════════════════════════════════════════════════════════════

class ProfileListView(APIView):
    """GET/POST /rbac/profiles/"""
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        profiles = selectors.list_profiles(
            company_id=request.query_params.get("company"),
            include_system=request.query_params.get("system", "true").lower() != "false",
        )
        return success_response(ProfileSerializer(profiles, many=True).data)

    def post(self, request):
        payload = ProfileWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            profile = services.create_profile(
                name=d["name"],
                description=d.get("description", ""),
                company_id=d["company"].id if d.get("company") else None,
                is_default=d.get("is_default", False),
                created_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return created_response(ProfileSerializer(profile).data)


class ProfileDetailView(APIView):
    """GET/PATCH/DELETE /rbac/profiles/<id>/"""
    permission_classes = [IsInstitutionAdmin]

    def _get(self, pk):
        try:
            return selectors.get_profile(pk)
        except Profile.DoesNotExist:
            return None

    def get(self, request, pk):
        profile = self._get(pk)
        if not profile:
            return error_response(_("Profil introuvable."), status_code=404)
        return success_response(ProfileSerializer(profile).data)

    def patch(self, request, pk):
        profile = self._get(pk)
        if not profile:
            return error_response(_("Profil introuvable."), status_code=404)
        payload = ProfileWriteSerializer(profile, data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            profile = services.update_profile(profile, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return success_response(ProfileSerializer(profile).data)

    def delete(self, request, pk):
        profile = self._get(pk)
        if not profile:
            return error_response(_("Profil introuvable."), status_code=404)
        try:
            services.delete_profile(profile, deleted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return success_response(message=_("Profil supprimé."))


class ProfileSetRolesView(APIView):
    """POST /rbac/profiles/<id>/roles/ — Remplace tous les rôles."""
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, pk):
        try:
            profile = selectors.get_profile(pk)
        except Profile.DoesNotExist:
            return error_response(_("Profil introuvable."), status_code=404)
        payload = ProfileSetRolesSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        try:
            services.set_profile_roles(profile, payload.validated_data["role_ids"])
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return success_response(ProfileSerializer(selectors.get_profile(pk)).data)


# ═══════════════════════════════════════════════════════════════════════════════
# USER ROLES & PROFILES (sous /users/<id>/...)
# ═══════════════════════════════════════════════════════════════════════════════

class UserRoleListView(APIView):
    """GET /rbac/users/<user_id>/roles/"""
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, user_id):
        try:
            user = User.objects.get(id=user_id, is_deleted=False)
        except (User.DoesNotExist, AttributeError):
            try:
                user = User.objects.get(id=user_id)
            except User.DoesNotExist:
                return error_response(_("Utilisateur introuvable."), status_code=404)
        roles = selectors.list_user_roles(user, company_id=request.query_params.get("company"))
        return success_response(UserRoleSerializer(roles, many=True).data)


class UserRoleAssignView(APIView):
    """POST /rbac/users/<user_id>/roles/assign/"""
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, user_id):
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return error_response(_("Utilisateur introuvable."), status_code=404)
        payload = UserRoleAssignSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            ur = services.assign_role(
                user, role_id=d["role_id"],
                company_id=d["company_id"],
                agency_id=d.get("agency_id"),
                expires_at=d.get("expires_at"),
                assigned_by=request.user,
            )
        except (ApplicationError, Role.DoesNotExist) as e:
            return error_response(str(e), status_code=400)
        return created_response(UserRoleSerializer(ur).data)


class UserRoleRevokeView(APIView):
    """POST /rbac/users/<user_id>/roles/revoke/"""
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, user_id):
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return error_response(_("Utilisateur introuvable."), status_code=404)
        payload = UserRoleRevokeSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            services.revoke_role(user, role_id=d["role_id"],
                                  company_id=d["company_id"],
                                  agency_id=d.get("agency_id"))
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return success_response(message=_("Rôle révoqué."))


class UserProfileView(APIView):
    """GET /rbac/users/<user_id>/profile/"""
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, user_id):
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return error_response(_("Utilisateur introuvable."), status_code=404)
        profiles = selectors.list_user_profiles(user, company_id=request.query_params.get("company"))
        return success_response(UserProfileSerializer(profiles, many=True).data)


class UserProfileAssignView(APIView):
    """POST /rbac/users/<user_id>/profile/assign/"""
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, user_id):
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return error_response(_("Utilisateur introuvable."), status_code=404)
        payload = UserProfileAssignSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            up = services.assign_profile(
                user, profile_id=d["profile_id"],
                company_id=d["company_id"],
                assigned_by=request.user,
            )
        except (ApplicationError, Profile.DoesNotExist) as e:
            return error_response(str(e), status_code=400)
        return created_response(UserProfileSerializer(up).data)


class UserPermissionsView(APIView):
    """GET /rbac/users/<user_id>/permissions/?company=<id> — Liste des codes de permissions."""
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, user_id):
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return error_response(_("Utilisateur introuvable."), status_code=404)
        perms = selectors.get_user_permissions(user, company_id=request.query_params.get("company"))
        return success_response(sorted(perms))

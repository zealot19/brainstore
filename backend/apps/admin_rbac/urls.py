from django.urls import path
from . import views

urlpatterns = [
    # ── Modules applicatifs ───────────────────────────────────────────────────
    path("modules/",            views.AppModuleListView.as_view(),   name="module-list"),
    path("modules/tree/",       views.AppModuleTreeView.as_view(),   name="module-tree"),
    path("modules/<uuid:pk>/",  views.AppModuleDetailView.as_view(), name="module-detail"),

    # ── Menus ─────────────────────────────────────────────────────────────────
    path("menus/",              views.MenuListView.as_view(),         name="menu-list"),
    path("menus/tree/",         views.MenuTreeView.as_view(),         name="menu-tree"),
    path("menus/<uuid:pk>/",    views.MenuDetailView.as_view(),       name="menu-detail"),

    # ── Permissions ───────────────────────────────────────────────────────────
    path("permissions/",        views.PermissionListView.as_view(),   name="permission-list"),
    path("permissions/bulk/",   views.PermissionBulkView.as_view(),   name="permission-bulk"),
    path("permissions/<uuid:pk>/", views.PermissionDetailView.as_view(), name="permission-detail"),

    # ── Rôles ─────────────────────────────────────────────────────────────────
    path("roles/",              views.RoleListView.as_view(),              name="role-list"),
    path("roles/<uuid:pk>/",    views.RoleDetailView.as_view(),            name="role-detail"),
    path("roles/<uuid:pk>/permissions/", views.RoleSetPermissionsView.as_view(), name="role-permissions"),

    # ── Profils ───────────────────────────────────────────────────────────────
    path("profiles/",           views.ProfileListView.as_view(),           name="profile-list"),
    path("profiles/<uuid:pk>/", views.ProfileDetailView.as_view(),         name="profile-detail"),
    path("profiles/<uuid:pk>/roles/", views.ProfileSetRolesView.as_view(), name="profile-roles"),

    # ── Rôles / Profils par utilisateur ──────────────────────────────────────
    path("users/<uuid:user_id>/roles/",           views.UserRoleListView.as_view(),    name="user-roles"),
    path("users/<uuid:user_id>/roles/assign/",    views.UserRoleAssignView.as_view(),  name="user-roles-assign"),
    path("users/<uuid:user_id>/roles/revoke/",    views.UserRoleRevokeView.as_view(),  name="user-roles-revoke"),
    path("users/<uuid:user_id>/profile/",         views.UserProfileView.as_view(),     name="user-profile"),
    path("users/<uuid:user_id>/profile/assign/",  views.UserProfileAssignView.as_view(), name="user-profile-assign"),
    path("users/<uuid:user_id>/permissions/",     views.UserPermissionsView.as_view(), name="user-permissions"),
]

from django.utils import timezone
from django.db.models import Q
from ..models import UserRole, UserProfile, Permission


def list_user_roles(user, company_id=None):
    qs = UserRole.objects.filter(user=user).select_related("role", "company", "agency")
    if company_id:
        qs = qs.filter(company_id=company_id)
    return qs


def list_user_profiles(user, company_id=None):
    qs = UserProfile.objects.filter(user=user).select_related("profile", "company")
    if company_id:
        qs = qs.filter(company_id=company_id)
    return qs


def get_user_permissions(user, company_id=None) -> set:
    """
    Retourne l'ensemble des codes de permission d'un utilisateur.
    Combine : rôles directs (UserRole) + rôles via profils (UserProfile → Profile → Role).
    Exclut les UserRole expirés.
    """
    if user.is_superuser:
        return {"*"}  # superuser = toutes permissions

    now = timezone.now()

    # Rôles directs non expirés
    direct_role_ids = UserRole.objects.filter(
        user=user,
        company_id=company_id,
    ).filter(
        Q(expires_at__isnull=True) | Q(expires_at__gt=now)
    ).values_list("role_id", flat=True)

    # Rôles via profil
    profile_ids = UserProfile.objects.filter(
        user=user, company_id=company_id
    ).values_list("profile_id", flat=True)

    from ..models import ProfileRole
    profile_role_ids = ProfileRole.objects.filter(
        profile_id__in=profile_ids
    ).values_list("role_id", flat=True)

    all_role_ids = set(list(direct_role_ids) + list(profile_role_ids))

    codes = Permission.objects.filter(
        is_deleted=False,
        rolepermission__role_id__in=all_role_ids,
    ).values_list("code", flat=True)

    return set(codes)


def has_permission(user, code: str, company_id=None) -> bool:
    perms = get_user_permissions(user, company_id)
    return "*" in perms or code in perms

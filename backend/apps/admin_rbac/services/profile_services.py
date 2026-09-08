from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from ..models import Profile, ProfileRole, Role


def create_profile(*, name, description="", company_id=None, role_ids=None,
                   is_default=False, is_system=False, created_by=None):
    if Profile.objects.filter(name=name, company_id=company_id).exists():
        raise ApplicationError(_("Un profil avec ce nom existe déjà pour cette institution."))

    # Un seul profil par défaut par institution
    if is_default and company_id:
        Profile.objects.filter(company_id=company_id, is_default=True).update(
            is_default=False, updated_at=timezone.now())

    profile = Profile.objects.create(
        name=name, description=description,
        company_id=company_id, is_default=is_default, is_system=is_system,
        created_by=created_by,
    )
    if role_ids:
        _set_roles(profile, role_ids)
    return profile


def update_profile(profile, *, updated_by=None, **fields):
    if profile.is_system:
        raise ApplicationError(_("Les profils système ne peuvent pas être modifiés."))
    if fields.get("is_default") and profile.company_id:
        Profile.objects.filter(
            company_id=profile.company_id, is_default=True
        ).exclude(id=profile.id).update(is_default=False, updated_at=timezone.now())
    for k, v in fields.items():
        if k not in ("id", "is_system"):
            setattr(profile, k, v)
    profile.updated_by = updated_by
    profile.save()
    return profile


def delete_profile(profile, deleted_by=None):
    if profile.is_system:
        raise ApplicationError(_("Les profils système ne peuvent pas être supprimés."))
    if profile.user_profiles.exists():
        raise ApplicationError(_("Ce profil est assigné à des utilisateurs."))
    profile.soft_delete(user=deleted_by)


@transaction.atomic
def set_profile_roles(profile, role_ids: list):
    """Remplace tous les rôles du profil."""
    if profile.is_system:
        raise ApplicationError(_("Les profils système ne peuvent pas être modifiés."))
    ProfileRole.objects.filter(profile=profile).delete()
    _set_roles(profile, role_ids)
    return profile


def _set_roles(profile, role_ids):
    roles = Role.objects.filter(id__in=role_ids, is_deleted=False)
    ProfileRole.objects.bulk_create([
        ProfileRole(profile=profile, role=r) for r in roles
    ], ignore_conflicts=True)

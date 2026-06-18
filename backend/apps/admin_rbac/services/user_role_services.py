from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from ..models import UserRole, UserProfile, Role, Profile


def assign_role(user, *, role_id, company_id, agency_id=None, assigned_by=None, expires_at=None):
    role = Role.objects.get(id=role_id, is_deleted=False)
    # Vérifie que le rôle appartient à l'institution ou est système
    if role.company_id and str(role.company_id) != str(company_id):
        raise ApplicationError(_("Ce rôle n'appartient pas à cette institution."))

    obj, created = UserRole.objects.get_or_create(
        user=user, role=role, company_id=company_id, agency_id=agency_id,
        defaults={"assigned_by": assigned_by, "expires_at": expires_at},
    )
    if not created and expires_at is not None:
        obj.expires_at = expires_at
        obj.assigned_by = assigned_by
        obj.save(update_fields=["expires_at", "assigned_by"])
    return obj


def revoke_role(user, *, role_id, company_id, agency_id=None):
    deleted, _ = UserRole.objects.filter(
        user=user, role_id=role_id, company_id=company_id, agency_id=agency_id
    ).delete()
    if not deleted:
        raise ApplicationError(_("Rôle non assigné à cet utilisateur."))


def assign_profile(user, *, profile_id, company_id, assigned_by=None):
    profile = Profile.objects.get(id=profile_id, is_deleted=False)
    if profile.company_id and str(profile.company_id) != str(company_id):
        raise ApplicationError(_("Ce profil n'appartient pas à cette institution."))

    obj, _ = UserProfile.objects.update_or_create(
        user=user, company_id=company_id,
        defaults={"profile": profile, "assigned_by": assigned_by},
    )
    return obj


def revoke_profile(user, *, company_id):
    deleted, _ = UserProfile.objects.filter(user=user, company_id=company_id).delete()
    if not deleted:
        raise ApplicationError(_("Aucun profil assigné pour cette institution."))

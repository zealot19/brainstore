from django.contrib.auth import get_user_model
from django.db.models import Q
from django.utils import timezone

User = get_user_model()


def get_user_by_id(user_id, company_id=None):
    """Récupère un utilisateur par UUID, optionnellement filtré par institution."""
    try:
        qs = User.objects.select_related("company", "default_agency")
        if company_id:
            return qs.get(id=user_id, company_id=company_id)
        return qs.get(id=user_id)
    except User.DoesNotExist:
        return None


def list_users(
    company_id=None,
    *,
    agency_id=None,
    is_active=None,
    is_institution_admin=None,
    is_agency_admin=None,
    search=None,
):
    """
    Retourne le QuerySet des utilisateurs selon les filtres.
    company_id=None → tous les utilisateurs (réservé SuperAdmin).
    """
    qs = User.objects.select_related("company", "default_agency").prefetch_related(
        "user_profiles__profile"
    ).order_by("last_name", "first_name")

    if company_id:
        qs = qs.filter(company_id=company_id)

    if agency_id:
        qs = qs.filter(agencies__id=agency_id).distinct()

    if is_active is not None:
        qs = qs.filter(is_active=is_active)

    if is_institution_admin is not None:
        qs = qs.filter(is_institution_admin=is_institution_admin)

    if is_agency_admin is not None:
        qs = qs.filter(is_agency_admin=is_agency_admin)

    if search:
        qs = qs.filter(
            Q(email__icontains=search)
            | Q(first_name__icontains=search)
            | Q(last_name__icontains=search)
            | Q(phone__icontains=search)
            | Q(job_title__icontains=search)
        )

    return qs


def get_user_stats(company_id):
    """Statistiques des utilisateurs d'une institution."""
    qs = User.objects.filter(company_id=company_id)
    now = timezone.now()
    return {
        "total":               qs.count(),
        "active":              qs.filter(is_active=True).count(),
        "inactive":            qs.filter(is_active=False).count(),
        "institution_admins":  qs.filter(is_institution_admin=True, is_active=True).count(),
        "agency_admins":       qs.filter(is_agency_admin=True, is_active=True).count(),
        "locked":              qs.filter(locked_until__gt=now).count(),
        "must_change_password": qs.filter(must_change_password=True, is_active=True).count(),
    }

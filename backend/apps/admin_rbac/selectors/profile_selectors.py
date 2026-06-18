from ..models import Profile


def list_profiles(*, company_id=None, include_system=True):
    qs = Profile.objects.filter(is_deleted=False).select_related("company")
    if company_id is not None:
        if include_system:
            qs = qs.filter(company_id__in=[company_id, None])
        else:
            qs = qs.filter(company_id=company_id)
    return qs.prefetch_related("roles").order_by("name")


def get_profile(profile_id):
    return Profile.objects.select_related("company").prefetch_related("roles__permissions").get(
        id=profile_id, is_deleted=False
    )

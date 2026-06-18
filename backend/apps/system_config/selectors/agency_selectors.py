from ..models import Agency


def get_agency(agency_id, company_id=None):
    qs = Agency.objects.select_related("company", "parent", "manager").filter(is_deleted=False)
    if company_id:
        qs = qs.filter(company_id=company_id)
    return qs.get(id=agency_id)


def list_agencies(company_id=None, *, parent_id=None, agency_type=None, is_active=None, search=None):
    qs = Agency.objects.select_related("company", "parent", "manager").filter(is_deleted=False)
    if company_id:
        qs = qs.filter(company_id=company_id)
    if parent_id is not None:
        qs = qs.filter(parent_id=parent_id)
    if agency_type:
        qs = qs.filter(agency_type=agency_type)
    if is_active is not None:
        qs = qs.filter(is_active=is_active)
    if search:
        qs = qs.filter(name__icontains=search)
    return qs.order_by("name")


def get_agency_tree(company_id):
    """Retourne les agences racines (sans parent) — les enfants sont résolus par le serializer."""
    return Agency.objects.filter(
        company_id=company_id, parent__isnull=True, is_deleted=False
    ).prefetch_related("children").order_by("name")

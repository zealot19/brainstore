from django.db.models import Count, Q
from ..models import Company, Subscription


def get_company(company_id):
    return (
        Company.objects.select_related("plan", "address", "currency")
        .get(id=company_id, is_deleted=False)
    )


def list_companies(*, status=None, plan_id=None, search=None):
    qs = Company.objects.select_related("plan").filter(is_deleted=False)
    if status:
        qs = qs.filter(status=status)
    if plan_id:
        qs = qs.filter(plan_id=plan_id)
    if search:
        qs = qs.filter(Q(name__icontains=search) | Q(slug__icontains=search) | Q(tax_id__icontains=search))
    return qs.annotate(user_count=Count("users", distinct=True), agency_count=Count("agencies", distinct=True))


def get_active_subscription(company):
    return (
        Subscription.objects.filter(company=company)
        .exclude(status=Subscription.Status.CANCELLED)
        .order_by("-started_at")
        .first()
    )


def list_company_subscriptions(company):
    return Subscription.objects.filter(company=company).order_by("-started_at")


def get_company_stats(company):
    from django.contrib.auth import get_user_model
    from ..models import Agency
    User = get_user_model()
    return {
        "user_count":   User.objects.filter(company=company, is_active=True).count(),
        "agency_count": Agency.objects.filter(company=company, is_deleted=False).count(),
        "plan_tier":    company.plan.tier if company.plan else None,
        "max_users":    company.plan.max_users if company.plan else None,
        "max_agencies": company.plan.max_agencies if company.plan else None,
    }

from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from slugify import slugify

from apps.core.exceptions import ApplicationError
from ..models import Company, Package, Subscription


# ── Package ───────────────────────────────────────────────────────────────────

def create_package(*, name, tier, description="", max_users=5, max_agencies=1,
                   max_storage_gb=5, price_monthly=0, price_yearly=0,
                   has_api_access=False, has_multi_agency=False,
                   has_advanced_reports=False, has_sso=False, sort_order=0):
    if Package.objects.filter(name__iexact=name).exists():
        raise ApplicationError(_("Un package avec ce nom existe déjà."))
    return Package.objects.create(
        name=name, tier=tier, description=description,
        max_users=max_users, max_agencies=max_agencies, max_storage_gb=max_storage_gb,
        price_monthly=price_monthly, price_yearly=price_yearly,
        has_api_access=has_api_access, has_multi_agency=has_multi_agency,
        has_advanced_reports=has_advanced_reports, has_sso=has_sso,
        sort_order=sort_order,
    )


def update_package(package, **fields):
    for key, value in fields.items():
        setattr(package, key, value)
    package.save()
    return package


# ── Company ───────────────────────────────────────────────────────────────────

def _unique_slug(name):
    base = slugify(name)
    slug = base
    n = 1
    while Company.objects.filter(slug=slug).exists():
        slug = f"{base}-{n}"
        n += 1
    return slug


@transaction.atomic
def create_company(*, name, package=None, package_id=None, legal_form="", country="CI",
                   language_code="fr", timezone="Africa/Abidjan",
                   email="", phone="", website="", tax_id="", rccm="",
                   cnps_number="", vat_number="", capital=None,
                   fiscal_year_start=None, fiscal_year_end=None,
                   accounting_plan="OHADA", currency=None,
                   code="", slogan="", postal_box="", logo=None,
                   is_active=True, address=None, address_input=None,
                   admin_email="", admin_first_name="", admin_last_name="",
                   created_by=None):
    slug = _unique_slug(name)
    if package is None and package_id:
        try:
            package = Package.objects.get(id=package_id, is_active=True)
        except Package.DoesNotExist:
            raise ApplicationError(_("Package introuvable ou inactif."))

    if address is None and address_input and address_input.get("line1"):
        from apps.core.models import Address
        address = Address.objects.create(
            line1=address_input.get("line1", ""),
            city=address_input.get("city", ""),
            postal_code=address_input.get("postal_code", ""),
        )

    company = Company.objects.create(
        name=name, slug=slug, package=package,
        code=code, slogan=slogan, postal_box=postal_box, logo=logo,
        legal_form=legal_form, country=country,
        language_code=language_code, timezone=timezone,
        email=email, phone=phone, website=website,
        tax_id=tax_id, rccm=rccm, cnps_number=cnps_number,
        vat_number=vat_number, capital=capital,
        fiscal_year_start=fiscal_year_start, fiscal_year_end=fiscal_year_end,
        accounting_plan=accounting_plan, currency=currency,
        address=address, is_active=is_active,
        status=Company.Status.DRAFT,
        created_by=created_by,
    )

    if package:
        _create_trial_subscription(company, package)

    setup = None
    if admin_email and admin_email.strip():
        setup = _bootstrap_company(
            company=company,
            admin_email=admin_email.strip(),
            admin_first_name=admin_first_name.strip(),
            admin_last_name=admin_last_name.strip(),
            created_by=created_by,
        )

    return company, setup


def _bootstrap_company(*, company, admin_email, admin_first_name, admin_last_name, created_by):
    """Crée l'agence siège et le premier administrateur d'une nouvelle institution."""
    from apps.system_config.models import Agency
    from apps.users.services.user_services import create_user

    hq = Agency.objects.create(
        company=company,
        name=f"Siège — {company.name}",
        code="HQ",
        agency_type=Agency.AgencyType.HEADQUARTERS,
        is_active=True,
        created_by=created_by,
    )

    user, temp_password = create_user(
        created_by=created_by,
        company=company,
        email=admin_email,
        first_name=admin_first_name,
        last_name=admin_last_name,
        is_institution_admin=True,
        default_agency_id=hq.id,
        agency_ids=[hq.id],
    )

    # Rôles & profils par défaut de la société (RBAC tranche 4).
    from apps.admin_rbac.services.defaults import seed_default_roles
    seed_default_roles(company, created_by=created_by)

    # Référentiel comptable OHADA de la société (G-Accounting A1).
    from apps.accounting.services.seed import seed_accounting
    seed_accounting(company, created_by=created_by)

    # Correspondances comptables de la Trésorerie (G-Trésorerie T1).
    from apps.treasury.services.seed import seed_treasury_mapping
    seed_treasury_mapping(company, created_by=created_by)

    # Types de membre d'équipage par défaut (Voyages).
    from apps.voyages_config.services.crew_seed import seed_crew_member_types
    seed_crew_member_types(company, created_by=created_by)

    # Types de dépense par défaut (Voyages).
    from apps.voyages_config.services.expense_seed import seed_expense_types
    seed_expense_types(company, created_by=created_by)

    return {
        "hq_agency_id":   str(hq.id),
        "hq_agency_name": hq.name,
        "admin_email":    user.email,
        "admin_name":     user.get_full_name(),
        "temp_password":  temp_password,
    }


@transaction.atomic
def update_company(company, *, updated_by=None, **fields):
    protected = {"slug", "id", "created_at", "created_by"}
    address_input = fields.pop("address_input", None)
    if address_input and address_input.get("line1"):
        from apps.core.models import Address
        if company.address:
            for k, v in address_input.items():
                setattr(company.address, k, v)
            company.address.save()
        else:
            company.address = Address.objects.create(
                line1=address_input.get("line1", ""),
                city=address_input.get("city", ""),
                postal_code=address_input.get("postal_code", ""),
            )
    for key, value in fields.items():
        if key not in protected:
            setattr(company, key, value)
    company.updated_by = updated_by
    company.save()
    return company


@transaction.atomic
def change_package(company, package_id, billing_cycle=Subscription.BillingCycle.MONTHLY,
                   updated_by=None):
    try:
        package = Package.objects.get(id=package_id, is_active=True)
    except Package.DoesNotExist:
        raise ApplicationError(_("Package introuvable ou inactif."))

    # Clôturer l'ancienne souscription active
    Subscription.objects.filter(
        company=company, status=Subscription.Status.ACTIVE
    ).update(status=Subscription.Status.CANCELLED)

    company.package = package
    company.updated_by = updated_by
    company.save(update_fields=["package", "updated_by", "updated_at"])

    sub = Subscription.objects.create(
        company=company, package=package,
        status=Subscription.Status.ACTIVE,
        billing_cycle=billing_cycle,
        started_at=timezone.now().date(),
    )
    return sub


def suspend_company(company, reason="", updated_by=None):
    company.status = Company.Status.SUSPENDED
    company.suspension_reason = reason
    company.suspended_at = timezone.now()
    company.updated_by = updated_by
    company.save(update_fields=["status", "suspension_reason", "suspended_at", "updated_by", "updated_at"])


def activate_company(company, updated_by=None):
    if company.status == Company.Status.CANCELLED:
        raise ApplicationError(_("Impossible de réactiver une institution résiliée."))
    company.status = Company.Status.ACTIVE
    company.suspension_reason = ""
    company.suspended_at = None
    company.updated_by = updated_by
    company.save(update_fields=["status", "suspension_reason", "suspended_at", "updated_by", "updated_at"])


def cancel_company(company, updated_by=None):
    company.status = Company.Status.CANCELLED
    company.updated_by = updated_by
    company.save(update_fields=["status", "updated_by", "updated_at"])
    Subscription.objects.filter(company=company, status__in=[
        Subscription.Status.ACTIVE, Subscription.Status.TRIAL
    ]).update(status=Subscription.Status.CANCELLED)


def start_trial(company, package_id, trial_days=30, updated_by=None):
    try:
        package = Package.objects.get(id=package_id, is_active=True)
    except Package.DoesNotExist:
        raise ApplicationError(_("Package introuvable."))

    company.package = package
    company.status = Company.Status.TRIAL
    company.updated_by = updated_by
    company.save(update_fields=["package", "status", "updated_by", "updated_at"])
    _create_trial_subscription(company, package, trial_days=trial_days)


# ── Helpers privés ────────────────────────────────────────────────────────────

def _create_trial_subscription(company, package, trial_days=30):
    today = timezone.now().date()
    return Subscription.objects.create(
        company=company, package=package,
        status=Subscription.Status.TRIAL,
        billing_cycle=Subscription.BillingCycle.MONTHLY,
        started_at=today,
        trial_ends_at=today + timezone.timedelta(days=trial_days),
    )

import pytest


@pytest.mark.django_db
def test_plan_has_no_module_flags():
    """Module flags were moved to Company.pkg_* — Plan no longer carries them."""
    from apps.system_config.models import Plan
    p = Plan.objects.create(name="Full", tier="professional")
    for attr in ["has_administration", "has_fleet", "has_voyages", "has_colis",
                 "has_bagages", "has_treasury", "has_accounting", "has_reporting"]:
        assert not hasattr(p, attr), f"Plan should not have {attr} (moved to Company)"


@pytest.mark.django_db
def test_enabled_modules_no_plan_returns_all():
    """Pas de plan -> tout activé (rétro-compat). Module gating via Company.pkg_* is Task 4."""
    from apps.system_config.models import Company
    from apps.system_config.selectors.entitlements import enabled_modules, ALL_MODULES
    c0 = Company.objects.create(name="NoPkg", slug="nopkg")
    assert enabled_modules(c0) == ALL_MODULES


@pytest.mark.django_db
def test_enabled_modules_with_plan_returns_all():
    """Plan sans flags de modules -> entitlements retourne tout (rétro-compat); Task 4 affinera."""
    from apps.system_config.models import Plan, Company
    from apps.system_config.selectors.entitlements import enabled_modules, ALL_MODULES
    plan = Plan.objects.create(name="BasicPlan", tier="starter")
    c1 = Company.objects.create(name="BasicCo", slug="basicco", plan=plan)
    mods = enabled_modules(c1)
    assert mods == ALL_MODULES


@pytest.mark.django_db
def test_me_permissions_returns_modules():
    from rest_framework.test import APIRequestFactory, force_authenticate
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.authentication.views import MePermissionsView
    from apps.system_config.models import Plan
    plan = Plan.objects.create(name="PlanMC", tier="starter")
    company, _ = create_company(name="MC", plan=plan, admin_email="mc@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="mc@x.com")
    req = APIRequestFactory().get("/x")
    force_authenticate(req, user=admin)
    resp = MePermissionsView.as_view()(req)
    data = resp.data["data"]
    assert "modules" in data
    # Plan has no module flags -> entitlements returns all modules
    assert "voyage" in data["modules"] and "colis" in data["modules"]

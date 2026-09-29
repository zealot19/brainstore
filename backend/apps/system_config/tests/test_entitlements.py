import pytest


@pytest.mark.django_db
def test_plan_has_module_flags_default_true():
    from apps.system_config.models import Plan
    p = Plan.objects.create(name="Full", tier="professional")
    for attr in ["has_administration", "has_fleet", "has_voyages", "has_colis",
                 "has_bagages", "has_treasury", "has_accounting", "has_reporting"]:
        assert getattr(p, attr) is True


@pytest.mark.django_db
def test_enabled_modules_reflects_plan():
    from apps.system_config.models import Plan, Company
    from apps.system_config.selectors.entitlements import enabled_modules, ALL_MODULES
    # pas de plan -> tout
    c0 = Company.objects.create(name="NoPkg", slug="nopkg")
    assert enabled_modules(c0) == ALL_MODULES
    # plan avec voyages coupé -> 'voyage' absent, 'colis' présent
    plan = Plan.objects.create(name="ColisOnly", tier="starter", has_voyages=False)
    c1 = Company.objects.create(name="ColisCo", slug="colisco", plan=plan)
    mods = enabled_modules(c1)
    assert "voyage" not in mods and "colis" in mods


@pytest.mark.django_db
def test_me_permissions_returns_modules():
    from rest_framework.test import APIRequestFactory, force_authenticate
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.authentication.views import MePermissionsView
    from apps.system_config.models import Plan
    plan = Plan.objects.create(name="ColisOnly2", tier="starter", has_voyages=False)
    company, _ = create_company(name="MC", plan=plan, admin_email="mc@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="mc@x.com")
    req = APIRequestFactory().get("/x")
    force_authenticate(req, user=admin)
    resp = MePermissionsView.as_view()(req)
    data = resp.data["data"]
    assert "modules" in data
    # admin d'institution : entitlement NON contourné -> voyage absent, colis présent
    assert "voyage" not in data["modules"] and "colis" in data["modules"]

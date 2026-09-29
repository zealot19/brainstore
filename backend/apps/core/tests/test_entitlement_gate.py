import pytest
from apps.core.module_map import module_for_path


def test_module_for_path():
    assert module_for_path("/api/v1/voyages/trips/") == "voyage"
    assert module_for_path("/api/v1/voyages/consignment/parcels/") == "colis"
    assert module_for_path("/api/v1/voyages/consignment/baggage/") == "bagages"
    assert module_for_path("/api/v1/treasury/sessions/") == "treasury"
    assert module_for_path("/api/v1/reporting/catalog/") == "reporting"
    assert module_for_path("/api/v1/system/agencies/") is None   # core, jamais verrouillé
    assert module_for_path("/static/x") is None


@pytest.mark.django_db
def test_middleware_allows_all_modules_without_plan_flags():
    """Module flags moved to Company.pkg_* (Task 4); Plan no longer gates modules.
    All modules are accessible until Company.pkg_* gating is wired (Task 4)."""
    from rest_framework.test import APIClient
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.authentication.tokens import CustomRefreshToken
    from apps.system_config.models import Plan
    pkg = Plan.objects.create(name="ColisOnly3", tier="starter")
    company, _ = create_company(name="GC", plan=pkg, admin_email="gc@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="gc@x.com")
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient()
    c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
    # With Plan module flags removed, entitlements returns all modules enabled
    # so voyage endpoint is no longer blocked at the entitlement layer.
    # Company.pkg_* gating (Task 4) will restore granular blocking.
    assert c.get("/api/v1/voyages/trips/").status_code != 403        # entitlement no longer blocks
    assert c.get("/api/v1/voyages/consignment/parcels/").status_code != 403  # colis activé

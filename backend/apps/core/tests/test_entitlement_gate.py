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
def test_middleware_blocks_transport_module_when_not_granted():
    """Société sans pkg_transport -> accès à un endpoint Transport retourne 403."""
    from rest_framework.test import APIClient
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.authentication.tokens import CustomRefreshToken
    from apps.system_config.models import Plan

    plan = Plan.objects.create(name="NoTransport", tier="starter")
    company, _ = create_company(
        name="NT", plan=plan,
        admin_email="nt@x.com", admin_first_name="A", admin_last_name="B",
    )
    # Disable the transport package after creation (create_company sets defaults=True)
    company.pkg_transport = False
    company.save()

    admin = User.objects.get(email="nt@x.com")
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient()
    c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")

    # /api/v1/voyages/trips/ -> module "voyage" -> transport package -> 403
    resp = c.get("/api/v1/voyages/trips/")
    assert resp.status_code == 403, (
        f"Expected 403 for transport-disabled company, got {resp.status_code}"
    )

    # /api/v1/fleet/ -> module "fleet" -> transport package -> 403
    resp = c.get("/api/v1/fleet/vehicles/")
    assert resp.status_code == 403, (
        f"Expected 403 for fleet-disabled company, got {resp.status_code}"
    )


@pytest.mark.django_db
def test_middleware_allows_transport_module_when_granted():
    """Société avec pkg_transport -> accès à un endpoint Transport n'est pas bloqué (non 403)."""
    from rest_framework.test import APIClient
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.authentication.tokens import CustomRefreshToken
    from apps.system_config.models import Plan

    plan = Plan.objects.create(name="WithTransport", tier="professional")
    company, _ = create_company(
        name="WT", plan=plan,
        admin_email="wt@x.com", admin_first_name="A", admin_last_name="B",
    )
    # pkg_transport defaults to True — no change needed

    admin = User.objects.get(email="wt@x.com")
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient()
    c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")

    # Entitlement middleware must NOT block transport endpoints for this company
    resp = c.get("/api/v1/voyages/trips/")
    assert resp.status_code != 403, (
        f"Expected non-403 for transport-enabled company, got {resp.status_code}"
    )


@pytest.mark.django_db
def test_middleware_never_blocks_core_paths():
    """Les chemins core (system/, auth/) ne sont jamais bloqués par l'entitlement middleware."""
    from rest_framework.test import APIClient
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.authentication.tokens import CustomRefreshToken
    from apps.system_config.models import Plan

    plan = Plan.objects.create(name="CoreOnly", tier="starter")
    company, _ = create_company(
        name="CO", plan=plan,
        admin_email="co@x.com", admin_first_name="A", admin_last_name="B",
    )
    company.pkg_transport = False
    company.pkg_accounting = False
    company.save()

    admin = User.objects.get(email="co@x.com")
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient()
    c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")

    # /api/v1/system/agencies/ -> module None -> never blocked by entitlement middleware
    resp = c.get("/api/v1/system/agencies/")
    assert resp.status_code != 403, (
        f"Core path must not be blocked by entitlement middleware, got {resp.status_code}"
    )

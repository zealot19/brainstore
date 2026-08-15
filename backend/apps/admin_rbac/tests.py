import pytest
from apps.admin_rbac.models import Permission


@pytest.mark.django_db
def test_fleet_permissions_fully_seeded():
    # Nouveaux codes de cette tranche + un échantillon des codes préexistants
    # (qui n'étaient dans aucune migration et manquaient donc en base fraîche).
    codes = [
        "fleet.parking.view", "fleet.parking.manage",
        "fleet.supplier.view", "fleet.supplier.manage",
        "fleet.contract.view", "fleet.contract.manage",
        "fleet.recurring_cost.view", "fleet.recurring_cost.manage",
        "fleet.config.view", "fleet.config.manage",
        "fleet.vehicle.view", "fleet.vehicle.create", "fleet.vehicle.update", "fleet.vehicle.delete",
        "fleet.brand.view", "fleet.brand.manage", "fleet.dashboard.view",
    ]
    found = set(Permission.objects.filter(code__in=codes).values_list("code", flat=True))
    assert set(codes) == found, set(codes) - found
    for p in Permission.objects.filter(code__in=codes):
        assert p.module and p.module.code == "fleet"


DEFAULT_ROLE_NAMES = {
    "Chef d'agence", "Guichetier", "Régulateur",
    "Gestionnaire de flotte", "Agent colis & bagages", "Comptable (lecture)",
}


@pytest.mark.django_db
def test_default_roles_seeded_on_company_create():
    from apps.system_config.services import create_company
    from apps.admin_rbac.models import Role, Profile
    company, _ = create_company(
        name="Seed Co", admin_email="seedadmin@x.com",
        admin_first_name="A", admin_last_name="B")
    role_names = set(Role.objects.filter(company=company).values_list("name", flat=True))
    profile_names = set(Profile.objects.filter(company=company).values_list("name", flat=True))
    assert DEFAULT_ROLE_NAMES <= role_names, DEFAULT_ROLE_NAMES - role_names
    assert DEFAULT_ROLE_NAMES <= profile_names, DEFAULT_ROLE_NAMES - profile_names


@pytest.mark.django_db
def test_default_role_bundles():
    from apps.system_config.services import create_company
    from apps.admin_rbac.models import Role
    company, _ = create_company(
        name="Bundle Co", admin_email="bundleadmin@x.com",
        admin_first_name="A", admin_last_name="B")
    guichet = set(Role.objects.get(company=company, name="Guichetier")
                  .permissions.values_list("code", flat=True))
    assert "ticketing.booking.create" in guichet
    assert "fleet.vehicle.create" not in guichet
    fleet = set(Role.objects.get(company=company, name="Gestionnaire de flotte")
                .permissions.values_list("code", flat=True))
    assert "fleet.vehicle.create" in fleet


@pytest.mark.django_db
def test_default_roles_idempotent():
    from apps.system_config.services import create_company
    from apps.admin_rbac.services.defaults import seed_default_roles
    from apps.admin_rbac.models import Role
    company, _ = create_company(
        name="Idem Co", admin_email="idemadmin@x.com",
        admin_first_name="A", admin_last_name="B")
    before = Role.objects.filter(company=company).count()
    seed_default_roles(company)  # rappel
    assert Role.objects.filter(company=company).count() == before


@pytest.mark.django_db
def test_seed_default_roles_command_backfills():
    from apps.system_config.services import create_company
    from apps.admin_rbac.models import Role
    from django.core.management import call_command
    company, _ = create_company(name="NoBootstrap Co")   # pas d'admin_email -> pas de bootstrap
    assert Role.objects.filter(company=company).count() == 0
    call_command("seed_default_roles", company=str(company.id))
    assert Role.objects.filter(company=company).count() == 6

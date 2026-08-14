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

import pytest

from apps.voyages_config.models import (
    FareClass, TimeSlot, ConsignmentNature, ConsignmentType,
    SeatingPlan, VoyagesSettings,
)
from apps.voyages_config.services.defaults_seed import seed_voyages_defaults


def _bare_company(name="VoyDef Co"):
    """Société sans bootstrap admin → aucun seed automatique, on teste le seeder seul."""
    from apps.system_config.services import create_company
    company, setup = create_company(name=name)
    assert setup is None
    return company


@pytest.mark.django_db
def test_seed_creates_all_reference_rows():
    company = _bare_company()
    seed_voyages_defaults(company)
    assert FareClass.objects.filter(company=company).count() == 3  # ECO, VIP, LOC (M14)
    assert TimeSlot.objects.filter(company=company).count() == 4
    assert ConsignmentNature.objects.filter(company=company).count() == 5
    assert ConsignmentType.objects.filter(company=company).count() == 3
    assert SeatingPlan.objects.filter(company=company).count() == 2
    assert VoyagesSettings.objects.filter(company=company).exists()


@pytest.mark.django_db
def test_seat_plans_generate_full_seat_grid():
    company = _bare_company("SeatCo")
    seed_voyages_defaults(company)
    bus = SeatingPlan.objects.get(company=company, code="BUS70")
    mini = SeatingPlan.objects.get(company=company, code="MINI30")
    assert bus.total_seats == 70 and bus.blocked_seats == 0 and bus.sellable_seats == 70
    assert mini.total_seats == 30 and mini.sellable_seats == 30


@pytest.mark.django_db
def test_seed_is_idempotent():
    company = _bare_company("IdemCo")
    seed_voyages_defaults(company)
    seed_voyages_defaults(company)  # second run must not duplicate
    assert FareClass.objects.filter(company=company).count() == 3
    assert ConsignmentType.objects.filter(company=company).count() == 3
    assert SeatingPlan.objects.filter(company=company).count() == 2
    assert VoyagesSettings.objects.filter(company=company).count() == 1


@pytest.mark.django_db
def test_bootstrap_seeds_voyages_defaults():
    """create_company avec admin déclenche le bootstrap qui seede le référentiel."""
    from apps.system_config.services import create_company
    company, setup = create_company(
        name="Boot Voy Co", admin_email="bv@x.com",
        admin_first_name="B", admin_last_name="V")
    assert setup is not None
    assert FareClass.objects.filter(company=company).count() == 3
    assert SeatingPlan.objects.filter(company=company).count() == 2

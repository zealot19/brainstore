import pytest
from apps.voyages_config.models import CrewMemberType
from apps.voyages_config.services.crew_seed import seed_crew_member_types


def _company():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Crew Co", admin_email="cr@x.com", admin_first_name="A", admin_last_name="B")
    return company


@pytest.mark.django_db
def test_bootstrap_seeds_crew_types():
    c = _company()
    types = {t.code: t for t in CrewMemberType.objects.filter(company=c)}
    assert set(types) == {"DRIVER", "CONVOYEUR", "CONTROLEUR"}
    assert types["DRIVER"].is_driver is True


@pytest.mark.django_db
def test_seed_idempotent():
    c = _company()
    n = CrewMemberType.objects.filter(company=c).count()
    seed_crew_member_types(c)
    assert CrewMemberType.objects.filter(company=c).count() == n

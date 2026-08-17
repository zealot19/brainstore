import pytest
from apps.treasury.models import MovementAccountMapping
from apps.treasury.services.seed import seed_treasury_mapping


def _company():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Trez Co", admin_email="trz@x.com", admin_first_name="A", admin_last_name="B")
    return company


@pytest.mark.django_db
def test_bootstrap_seeds_mapping():
    c = _company()
    m = {x.category: x.account.code for x in MovementAccountMapping.objects.filter(company=c)}
    assert m.get("ticket_sales") == "706"
    assert m.get("parcel_shipping") == "707"
    assert m.get("baggage") == "706"
    assert m.get("voyage_expense") == "658"
    assert m.get("fuel") == "601"
    assert len(m) == 12


@pytest.mark.django_db
def test_seed_idempotent():
    c = _company()
    n = MovementAccountMapping.objects.filter(company=c).count()
    seed_treasury_mapping(c)
    assert MovementAccountMapping.objects.filter(company=c).count() == n

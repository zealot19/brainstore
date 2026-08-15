import pytest
from datetime import date
from apps.system_config.models import Company
from apps.accounting.models import Account, Journal, FiscalYear, AccountingPeriod
from apps.accounting.services.seed import seed_accounting


@pytest.mark.django_db
def test_seed_creates_full_referential():
    c = Company.objects.create(name="Seed Acc Co")
    seed_accounting(c)
    assert Account.objects.filter(company=c).count() >= 120
    # parent lié
    a571 = Account.objects.get(company=c, code="571")
    assert a571.parent and a571.parent.code == "57"
    # journaux standard
    codes = set(Journal.objects.filter(company=c).values_list("code", flat=True))
    assert {"VTE", "ACH", "OD", "PAIE", "CAISSE", "BANQUE"} <= codes
    # journal VTE lié au compte 706
    assert Journal.objects.get(company=c, code="VTE").default_account.code == "706"
    # exercice courant + 12 périodes
    fy = FiscalYear.objects.get(company=c, code=f"FY{date.today().year}")
    assert AccountingPeriod.objects.filter(company=c, fiscal_year=fy).count() == 12


@pytest.mark.django_db
def test_seed_idempotent():
    c = Company.objects.create(name="Seed Idem Co")
    seed_accounting(c)
    n = Account.objects.filter(company=c).count()
    seed_accounting(c)  # rappel
    assert Account.objects.filter(company=c).count() == n


@pytest.mark.django_db
def test_company_create_seeds_accounting():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Bootstrap Acc Co", admin_email="ba@x.com",
                                admin_first_name="A", admin_last_name="B")
    assert Account.objects.filter(company=company).exists()

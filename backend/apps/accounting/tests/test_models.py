import pytest
from django.db import IntegrityError
from apps.system_config.models import Company
from apps.accounting.models import Account


@pytest.mark.django_db
def test_account_unique_per_company():
    c = Company.objects.create(name="Acc Co")
    Account.objects.create(company=c, code="571", name="Caisse", account_type="asset_cash")
    with pytest.raises(IntegrityError):
        Account.objects.create(company=c, code="571", name="Doublon", account_type="asset_cash")


@pytest.mark.django_db
def test_account_parent_selffk():
    c = Company.objects.create(name="Acc Co 2")
    p = Account.objects.create(company=c, code="41", name="Clients", account_type="asset_receivable")
    child = Account.objects.create(company=c, code="411", name="Clients loc.",
                                   account_type="asset_receivable", parent=p)
    assert child.parent == p and p.children.count() == 1

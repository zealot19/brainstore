import pytest
from apps.system_config.services import create_company
from apps.treasury.selectors import selectors


@pytest.mark.django_db
def test_list_transactions_uses_transaction_date(monkeypatch):
    company, _ = create_company(name="TxA", admin_email="txa@x.com", admin_first_name="A", admin_last_name="B")
    calls = []
    def fake(qs, *, date_field, company_id, include_archived):
        calls.append(dict(date_field=date_field, company_id=company_id, include_archived=include_archived))
        return qs
    monkeypatch.setattr("apps.treasury.selectors.selectors.apply_archive_window", fake)
    selectors.list_transactions(company.id, include_archived=False)
    assert calls == [{"date_field": "transaction_date", "company_id": company.id, "include_archived": False}]

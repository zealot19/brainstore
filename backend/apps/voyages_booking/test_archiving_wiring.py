import pytest
from apps.system_config.services import create_company
from apps.voyages_booking import selectors


def _spy(calls):
    def fake(qs, *, date_field, company_id, include_archived):
        calls.append(dict(date_field=date_field, company_id=company_id, include_archived=include_archived))
        return qs
    return fake


@pytest.mark.django_db
def test_list_bookings_windows_created_at(monkeypatch):
    company, _ = create_company(name="BkA", admin_email="bka@x.com", admin_first_name="A", admin_last_name="B")
    calls = []
    monkeypatch.setattr("apps.voyages_booking.selectors.apply_archive_window", _spy(calls))
    selectors.list_bookings(company, include_archived=False)
    assert calls == [{"date_field": "created_at", "company_id": company.id, "include_archived": False}]


@pytest.mark.django_db
def test_list_bookings_threads_include_archived(monkeypatch):
    company, _ = create_company(name="BkB", admin_email="bkb@x.com", admin_first_name="A", admin_last_name="B")
    calls = []
    monkeypatch.setattr("apps.voyages_booking.selectors.apply_archive_window", _spy(calls))
    selectors.list_bookings(company, include_archived=True)
    assert calls[0]["include_archived"] is True


@pytest.mark.django_db
def test_open_returns_windows_created_at(monkeypatch):
    company, _ = create_company(name="BkC", admin_email="bkc@x.com", admin_first_name="A", admin_last_name="B")
    calls = []
    monkeypatch.setattr("apps.voyages_booking.selectors.apply_archive_window", _spy(calls))
    selectors.open_return_bookings(company, include_archived=False)
    assert calls == [{"date_field": "created_at", "company_id": company.id, "include_archived": False}]

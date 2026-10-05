import pytest
from apps.system_config.services import create_company
from apps.voyages_trips.selectors import trip_selectors


@pytest.mark.django_db
def test_list_trips_uses_scheduled_departure(monkeypatch):
    company, _ = create_company(name="TrA", admin_email="tra@x.com", admin_first_name="A", admin_last_name="B")
    calls = []
    def fake(qs, *, date_field, company_id, include_archived):
        calls.append(dict(date_field=date_field, company_id=company_id, include_archived=include_archived))
        return qs
    monkeypatch.setattr("apps.voyages_trips.selectors.trip_selectors.apply_archive_window", fake)
    trip_selectors.list_trips(company, include_archived=True)
    assert calls == [{"date_field": "scheduled_departure", "company_id": company.id, "include_archived": True}]

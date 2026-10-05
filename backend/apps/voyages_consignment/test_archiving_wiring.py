import pytest
from datetime import timedelta
from django.utils import timezone
from apps.system_config.services import create_company
from apps.system_config.services.archiving import set_archive_window_days
from apps.voyages_consignment import selectors
from apps.voyages_consignment.models import Baggage


@pytest.mark.django_db
def test_list_parcels_windows_created_at(monkeypatch):
    company, _ = create_company(name="PcA", admin_email="pca@x.com", admin_first_name="A", admin_last_name="B")
    calls = []
    def fake(qs, *, date_field, company_id, include_archived):
        calls.append(dict(date_field=date_field, company_id=company_id, include_archived=include_archived))
        return qs
    monkeypatch.setattr("apps.voyages_consignment.selectors.apply_archive_window", fake)
    selectors.list_parcels(company, include_archived=False)
    assert calls == [{"date_field": "created_at", "company_id": company.id, "include_archived": False}]


@pytest.mark.django_db
def test_list_baggage_hides_out_of_window_rows_end_to_end():
    company, _ = create_company(name="BgA", admin_email="bga@x.com", admin_first_name="A", admin_last_name="B")
    set_archive_window_days(company.id, 30)
    recent = Baggage.objects.create(company=company)
    old = Baggage.objects.create(company=company)
    Baggage.objects.filter(id=old.id).update(created_at=timezone.now() - timedelta(days=60))
    default_ids = set(selectors.list_baggage(company).values_list("id", flat=True))
    assert recent.id in default_ids and old.id not in default_ids
    revealed_ids = set(selectors.list_baggage(company, include_archived=True).values_list("id", flat=True))
    assert old.id in revealed_ids

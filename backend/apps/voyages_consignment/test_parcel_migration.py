import pytest


@pytest.mark.django_db
def test_lifecycle_choices_present():
    from apps.voyages_consignment.models import Parcel
    codes = {c[0] for c in Parcel.Status.choices}
    assert {"registered", "ready_for_travel", "loaded", "in_transit",
            "arrived", "available_for_pickup", "picked_up", "cancelled"} <= codes

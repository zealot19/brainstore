import pytest
from apps.voyages_consignment.models import Parcel


@pytest.mark.django_db
def test_parcel_has_delivery_fields():
    fields = {f.name for f in Parcel._meta.get_fields()}
    assert {"delivery_amount", "delivery_address", "delivery_payment_method",
            "delivered_home_at", "delivered_home_by"} <= fields

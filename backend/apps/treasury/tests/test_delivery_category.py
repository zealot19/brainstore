from apps.treasury.models import Transaction


def test_parcel_delivery_category_exists():
    assert Transaction.Category.PARCEL_DELIVERY == "parcel_delivery"
    assert "parcel_delivery" in dict(Transaction.Category.choices)

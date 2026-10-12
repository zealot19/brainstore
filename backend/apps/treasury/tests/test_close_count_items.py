"""Clôture : le billetage accepte les coupures ET les valeurs (bons de caisse) — M28."""
from decimal import Decimal


def test_count_item_accepts_denomination():
    from apps.treasury.serializers import CountItemInputSerializer
    s = CountItemInputSerializer(data={"denomination_id": "00000000-0000-0000-0000-000000000001", "quantity": 3})
    assert s.is_valid(), s.errors


def test_count_item_accepts_value_type():
    """Régression : une ligne 'bon de caisse' {value_type_id, amount} doit être acceptée."""
    from apps.treasury.serializers import CountItemInputSerializer
    s = CountItemInputSerializer(data={"value_type_id": "00000000-0000-0000-0000-000000000002", "amount": "5000"})
    assert s.is_valid(), s.errors


def test_count_item_rejects_empty_and_mixed():
    from apps.treasury.serializers import CountItemInputSerializer
    assert not CountItemInputSerializer(data={}).is_valid()
    assert not CountItemInputSerializer(data={
        "denomination_id": "00000000-0000-0000-0000-000000000001", "quantity": 1,
        "value_type_id": "00000000-0000-0000-0000-000000000002", "amount": "1"}).is_valid()


def test_close_list_serializer_accepts_mixed_items():
    from apps.treasury.serializers import CloseSessionSerializer
    s = CloseSessionSerializer(data={"closing_count": [
        {"denomination_id": "00000000-0000-0000-0000-000000000001", "quantity": 3},
        {"value_type_id": "00000000-0000-0000-0000-000000000002", "amount": "5000"},
    ]})
    assert s.is_valid(), s.errors
    assert len(s.validated_data["closing_count"]) == 2

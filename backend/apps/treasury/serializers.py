from decimal import Decimal
from rest_framework import serializers
from apps.treasury.models import (CashRegister, BankAccount, CashSession, Transaction, Transfer,
                                  CurrencyDenomination, CashCount, CashCountItem)


# ── Cash register ──────────────────────────────────────────────────────────────

class CashRegisterReadSerializer(serializers.ModelSerializer):
    terminal_name    = serializers.SerializerMethodField()
    responsible_name = serializers.SerializerMethodField()
    account_code = serializers.CharField(source="account.code", read_only=True, default=None)
    journal_code = serializers.CharField(source="journal.code", read_only=True, default=None)
    journal_name = serializers.CharField(source="journal.name", read_only=True, default=None)
    agency_name  = serializers.CharField(source="agency.name", read_only=True, default=None)
    managers = serializers.SerializerMethodField()
    manager_names = serializers.SerializerMethodField()
    kind_display = serializers.CharField(source="get_kind_display", read_only=True, default=None)
    category_display = serializers.CharField(source="get_category_display", read_only=True, default=None)

    class Meta:
        model = CashRegister
        fields = [
            "id", "name", "kind", "kind_display",
            "category", "category_display", "allow_negative_balance",
            "terminal_name", "responsible_name",
            "managers", "manager_names",
            "current_balance", "is_active", "notes",
            "account", "journal", "account_code", "journal_code", "journal_name",
            "agency", "agency_name",
            "created_at", "updated_at",
        ]

    def get_managers(self, obj):
        return [str(u.id) for u in obj.managers.all()]

    def get_manager_names(self, obj):
        return [(u.get_full_name() or u.username) for u in obj.managers.all()]

    def get_terminal_name(self, obj):
        if obj.terminal_id:
            return f"{obj.terminal.name} ({obj.terminal.city.name})"
        return None

    def get_responsible_name(self, obj):
        if obj.responsible_id:
            return obj.responsible.get_full_name() or obj.responsible.username
        return None


class CashRegisterWriteSerializer(serializers.Serializer):
    name             = serializers.CharField(max_length=150)
    kind             = serializers.ChoiceField(choices=CashRegister.Kind.choices)
    category         = serializers.ChoiceField(choices=CashRegister.Category.choices,
                                                required=False, allow_blank=True, default="")
    allow_negative_balance = serializers.BooleanField(required=False, default=False)
    terminal_id      = serializers.UUIDField(required=False, allow_null=True)
    responsible_id   = serializers.UUIDField(required=False, allow_null=True)
    opening_balance  = serializers.DecimalField(max_digits=12, decimal_places=2,
                                                 required=False, default=0)
    notes            = serializers.CharField(required=False, allow_blank=True, default="")
    account_id       = serializers.UUIDField(required=False, allow_null=True)
    journal_id       = serializers.UUIDField(required=False, allow_null=True)
    agency_id        = serializers.UUIDField(required=False, allow_null=True)
    manager_ids      = serializers.ListField(child=serializers.UUIDField(), required=False, default=list)


class CashRegisterUpdateSerializer(serializers.Serializer):
    name           = serializers.CharField(max_length=150, required=False)
    kind           = serializers.ChoiceField(choices=CashRegister.Kind.choices, required=False)
    category       = serializers.ChoiceField(choices=CashRegister.Category.choices,
                                              required=False, allow_blank=True)
    allow_negative_balance = serializers.BooleanField(required=False)
    terminal_id    = serializers.UUIDField(required=False, allow_null=True)
    responsible_id = serializers.UUIDField(required=False, allow_null=True)
    is_active      = serializers.BooleanField(required=False)
    notes          = serializers.CharField(required=False, allow_blank=True)
    account_id     = serializers.UUIDField(required=False, allow_null=True)
    journal_id     = serializers.UUIDField(required=False, allow_null=True)
    agency_id      = serializers.UUIDField(required=False, allow_null=True)
    manager_ids    = serializers.ListField(child=serializers.UUIDField(), required=False)


# ── Bank account ───────────────────────────────────────────────────────────────

class BankAccountReadSerializer(serializers.ModelSerializer):
    account_code = serializers.CharField(source="account.code", read_only=True, default=None)
    journal_code = serializers.CharField(source="journal.code", read_only=True, default=None)
    journal_name = serializers.CharField(source="journal.name", read_only=True, default=None)

    class Meta:
        model = BankAccount
        fields = [
            "id", "bank_name", "account_name", "account_number",
            "current_balance", "is_active", "notes",
            "account", "journal", "account_code", "journal_code", "journal_name",
            "created_at", "updated_at",
        ]


class BankAccountWriteSerializer(serializers.Serializer):
    bank_name       = serializers.CharField(max_length=150)
    account_name    = serializers.CharField(max_length=150)
    account_number  = serializers.CharField(max_length=50)
    opening_balance = serializers.DecimalField(max_digits=14, decimal_places=2,
                                                required=False, default=0)
    notes           = serializers.CharField(required=False, allow_blank=True, default="")
    account_id      = serializers.UUIDField(required=False, allow_null=True)
    journal_id      = serializers.UUIDField(required=False, allow_null=True)


class BankAccountUpdateSerializer(serializers.Serializer):
    bank_name      = serializers.CharField(max_length=150, required=False)
    account_name   = serializers.CharField(max_length=150, required=False)
    account_number = serializers.CharField(max_length=50,  required=False)
    is_active      = serializers.BooleanField(required=False)
    notes          = serializers.CharField(required=False, allow_blank=True)
    account_id     = serializers.UUIDField(required=False, allow_null=True)
    journal_id     = serializers.UUIDField(required=False, allow_null=True)


# ── Cash session ───────────────────────────────────────────────────────────────

def _uname(u):
    return (u.get_full_name() or u.username) if u else None


class CashSessionReadSerializer(serializers.ModelSerializer):
    register_name = serializers.CharField(source="cash_register.name", read_only=True)
    register_kind = serializers.CharField(source="cash_register.kind", read_only=True, default=None)
    opened_by_name = serializers.SerializerMethodField()
    closed_by_name = serializers.SerializerMethodField()
    assigned_to_name = serializers.SerializerMethodField()
    status_display = serializers.CharField(source="get_status_display", read_only=True)
    ecart_status = serializers.CharField(read_only=True)
    justification_reason_display = serializers.SerializerMethodField()

    class Meta:
        model = CashSession
        fields = [
            "id", "name", "cash_register", "register_name", "register_kind", "status", "status_display",
            "opening_balance", "closing_balance",
            "expected_closing", "difference", "ecart_status",
            "justification_reason", "justification_reason_display", "justification_note",
            "assigned_to", "assigned_to_name",
            "scheduled_start", "scheduled_end",
            "opened_by", "opened_by_name", "closed_by_name",
            "opened_at", "closed_at",
            "notes", "created_at",
        ]

    def get_justification_reason_display(self, obj):
        return obj.get_justification_reason_display() if obj.justification_reason else None

    def get_opened_by_name(self, obj):
        return _uname(obj.opened_by)

    def get_closed_by_name(self, obj):
        return _uname(obj.closed_by)

    def get_assigned_to_name(self, obj):
        return _uname(obj.assigned_to)


class ScheduleSessionSerializer(serializers.Serializer):
    cash_register_id = serializers.UUIDField()
    assigned_to_id   = serializers.UUIDField(required=False, allow_null=True, default=None)
    name             = serializers.CharField(max_length=150, required=False, allow_blank=True, default="")
    scheduled_start  = serializers.DateTimeField(required=False, allow_null=True)
    scheduled_end    = serializers.DateTimeField(required=False, allow_null=True)


class ExtendSessionSerializer(serializers.Serializer):
    scheduled_end = serializers.DateTimeField()


class GuichetierSerializer(serializers.Serializer):
    id         = serializers.UUIDField()
    full_name  = serializers.SerializerMethodField()

    def get_full_name(self, obj):
        return _uname(obj)


class CountItemInputSerializer(serializers.Serializer):
    denomination_id = serializers.UUIDField()
    quantity        = serializers.IntegerField(min_value=0)


class OpenSessionSerializer(serializers.Serializer):
    cash_register_id = serializers.UUIDField()
    name             = serializers.CharField(max_length=150, required=False, allow_blank=True, default="")
    opening_balance  = serializers.DecimalField(max_digits=12, decimal_places=2,
                                                 required=False, allow_null=True)
    notes            = serializers.CharField(required=False, allow_blank=True, default="")


class OpenScheduledSerializer(serializers.Serializer):
    opening_balance = serializers.DecimalField(max_digits=12, decimal_places=2,
                                               required=False, allow_null=True)


class CloseSessionSerializer(serializers.Serializer):
    closing_balance = serializers.DecimalField(max_digits=12, decimal_places=2,
                                               required=False, allow_null=True)
    closing_count   = CountItemInputSerializer(many=True, required=False, default=list)
    justification_reason = serializers.ChoiceField(
        choices=CashSession.EcartReason.choices, required=False, allow_blank=True, default="")
    justification_note   = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
    notes           = serializers.CharField(required=False, allow_blank=True, default="")
    destination_cash_register_id = serializers.UUIDField(required=False, allow_null=True, default=None)


class DenominationSerializer(serializers.ModelSerializer):
    currency_code = serializers.CharField(source="currency.code", read_only=True)
    kind_display  = serializers.CharField(source="get_kind_display", read_only=True)

    class Meta:
        model = CurrencyDenomination
        fields = ["id", "currency", "currency_code", "value", "kind", "kind_display",
                  "is_active", "display_order"]


class CashCountItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CashCountItem
        fields = ["id", "denomination", "quantity", "unit_value", "subtotal"]


class CashCountSerializer(serializers.ModelSerializer):
    kind_display = serializers.CharField(source="get_kind_display", read_only=True)
    items = CashCountItemSerializer(many=True, read_only=True)

    class Meta:
        model = CashCount
        fields = ["id", "kind", "kind_display", "total_amount", "created_at", "items"]


# ── Transaction ────────────────────────────────────────────────────────────────

class TransactionReadSerializer(serializers.ModelSerializer):
    type_display     = serializers.CharField(source="get_transaction_type_display", read_only=True)
    category_display = serializers.CharField(source="get_category_display", read_only=True)
    payment_display  = serializers.CharField(source="get_payment_mode_display", read_only=True)
    account_label    = serializers.SerializerMethodField()
    journal_entry_name = serializers.CharField(source="journal_entry.name", read_only=True, default=None)

    class Meta:
        model = Transaction
        fields = [
            "id", "reference",
            "transaction_type", "type_display",
            "category", "category_display",
            "account_type", "account_label",
            "amount", "payment_mode", "payment_display",
            "description", "transaction_date",
            "trip_id", "booking_id", "parcel_id",
            "journal_entry", "journal_entry_name",
            "created_at",
        ]

    def get_account_label(self, obj):
        if obj.account_type == "cash" and obj.cash_session_id:
            return obj.cash_session.cash_register.name
        if obj.account_type == "bank" and obj.bank_account_id:
            return str(obj.bank_account)
        return None


class TransactionWriteSerializer(serializers.Serializer):
    transaction_type = serializers.ChoiceField(choices=Transaction.Type.choices)
    category         = serializers.ChoiceField(choices=Transaction.Category.choices)
    account_type     = serializers.ChoiceField(choices=Transaction.AccountType.choices)
    amount           = serializers.DecimalField(max_digits=12, decimal_places=2)
    payment_mode     = serializers.ChoiceField(choices=Transaction.PaymentMode.choices)
    description      = serializers.CharField(required=False, allow_blank=True, default="")
    transaction_date = serializers.DateField(required=False, allow_null=True)
    # Account
    cash_session_id  = serializers.UUIDField(required=False, allow_null=True)
    bank_account_id  = serializers.UUIDField(required=False, allow_null=True)
    # Optional refs
    trip_id    = serializers.UUIDField(required=False, allow_null=True)
    booking_id = serializers.UUIDField(required=False, allow_null=True)
    parcel_id  = serializers.UUIDField(required=False, allow_null=True)


# ── Transfer ───────────────────────────────────────────────────────────────────

class TransferReadSerializer(serializers.ModelSerializer):
    from_label   = serializers.SerializerMethodField()
    to_label     = serializers.SerializerMethodField()
    by_name      = serializers.SerializerMethodField()

    class Meta:
        model = Transfer
        fields = [
            "id", "reference",
            "from_label", "to_label",
            "amount", "description", "transfer_date",
            "by_name", "created_at",
        ]

    def get_from_label(self, obj):
        if obj.from_cash_register_id:
            return f"[Cash] {obj.from_cash_register.name}"
        if obj.from_bank_account_id:
            return f"[Bank] {obj.from_bank_account.account_name}"
        return None

    def get_to_label(self, obj):
        if obj.to_cash_register_id:
            return f"[Cash] {obj.to_cash_register.name}"
        if obj.to_bank_account_id:
            return f"[Bank] {obj.to_bank_account.account_name}"
        return None

    def get_by_name(self, obj):
        if obj.completed_by_id:
            return obj.completed_by.get_full_name() or obj.completed_by.username
        return None


class TransferWriteSerializer(serializers.Serializer):
    amount           = serializers.DecimalField(max_digits=12, decimal_places=2)
    description      = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
    transfer_date    = serializers.DateField(required=False, allow_null=True)
    # Source — one required
    from_cash_register_id = serializers.UUIDField(required=False, allow_null=True)
    from_bank_account_id  = serializers.UUIDField(required=False, allow_null=True)
    # Destination — one required
    to_cash_register_id   = serializers.UUIDField(required=False, allow_null=True)
    to_bank_account_id    = serializers.UUIDField(required=False, allow_null=True)


# ── Stats ──────────────────────────────────────────────────────────────────────

class TreasuryStatsSerializer(serializers.Serializer):
    total_cash_balance = serializers.DecimalField(max_digits=14, decimal_places=2)
    total_bank_balance = serializers.DecimalField(max_digits=14, decimal_places=2)
    total_balance      = serializers.DecimalField(max_digits=14, decimal_places=2)
    today_income       = serializers.DecimalField(max_digits=12, decimal_places=2)
    today_expense      = serializers.DecimalField(max_digits=12, decimal_places=2)
    today_net          = serializers.DecimalField(max_digits=12, decimal_places=2)
    open_sessions      = serializers.IntegerField()


# ── Dépenses (générales + voyage) ────────────────────────────────────────────

from apps.treasury.models import GeneralExpense  # noqa: E402


class GeneralExpenseReadSerializer(serializers.ModelSerializer):
    expense_type_name = serializers.CharField(source="expense_type.name", read_only=True)
    agency_name = serializers.CharField(source="agency.name", read_only=True, default=None)
    cash_register_name = serializers.SerializerMethodField()
    kind = serializers.SerializerMethodField()

    class Meta:
        model = GeneralExpense
        fields = ["id", "kind", "expense_type", "expense_type_name", "agency", "agency_name",
                  "label", "amount", "expense_date", "status", "cash_session",
                  "cash_register_name", "created_at"]

    def get_kind(self, obj):
        return "expense"

    def get_cash_register_name(self, obj):
        return obj.cash_session.cash_register.name if obj.cash_session_id else None


class GeneralExpenseWriteSerializer(serializers.Serializer):
    expense_type_id = serializers.UUIDField()
    label = serializers.CharField(max_length=200)
    amount = serializers.DecimalField(max_digits=14, decimal_places=2)
    expense_date = serializers.DateField(required=False)
    agency_id = serializers.UUIDField(required=False, allow_null=True)


class VoyageExpenseRowSerializer(serializers.Serializer):
    id = serializers.UUIDField()
    trip_id = serializers.UUIDField()
    trip_number = serializers.CharField(source="trip.number")
    expense_type_name = serializers.CharField(source="expense_type.name")
    amount = serializers.DecimalField(max_digits=14, decimal_places=2)
    status = serializers.CharField()
    date = serializers.DateField()
    cash_register_name = serializers.SerializerMethodField()

    def get_cash_register_name(self, obj):
        return obj.cash_session.cash_register.name if obj.cash_session_id else None


# ── Recettes (income) ────────────────────────────────────────────────────────

class IncomeRowSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source="get_category_display", read_only=True)
    payment_display  = serializers.CharField(source="get_payment_mode_display", read_only=True)
    cash_register_name = serializers.SerializerMethodField()
    agency_name        = serializers.SerializerMethodField()
    account_label      = serializers.SerializerMethodField()
    source_ref         = serializers.SerializerMethodField()
    source_party       = serializers.SerializerMethodField()
    trip_id            = serializers.SerializerMethodField()
    trip_number        = serializers.SerializerMethodField()

    class Meta:
        model = Transaction
        fields = [
            "id", "reference", "category", "category_display",
            "amount", "payment_mode", "payment_display", "transaction_date",
            "cash_register_name", "agency_name", "account_label",
            "source_ref", "source_party", "trip_id", "trip_number",
            "description", "created_at",
        ]

    def get_trip_id(self, obj):
        if obj.category == Transaction.Category.TICKET_SALES and obj.voyage_booking_id:
            return str(obj.voyage_booking.outbound_trip_id) if obj.voyage_booking.outbound_trip_id else None
        return None

    def get_trip_number(self, obj):
        if (obj.category == Transaction.Category.TICKET_SALES and obj.voyage_booking_id
                and obj.voyage_booking.outbound_trip_id):
            return obj.voyage_booking.outbound_trip.number or None
        return None

    def get_cash_register_name(self, obj):
        return obj.cash_session.cash_register.name if obj.cash_session_id else None

    def get_agency_name(self, obj):
        if obj.cash_session_id and obj.cash_session.cash_register.agency_id:
            return obj.cash_session.cash_register.agency.name
        return None

    def get_account_label(self, obj):
        if obj.account_type == "cash" and obj.cash_session_id:
            return obj.cash_session.cash_register.name
        if obj.account_type == "bank" and obj.bank_account_id:
            return str(obj.bank_account)
        return None

    def get_source_ref(self, obj):
        if obj.category == Transaction.Category.TICKET_SALES and obj.voyage_booking_id:
            return getattr(obj.voyage_booking, "reference", "") or ""
        if obj.category == Transaction.Category.PARCEL_SHIPPING and obj.voyages_parcel_id:
            return getattr(obj.voyages_parcel, "reference", "") or ""
        if obj.category == Transaction.Category.BAGGAGE and obj.voyages_baggage_id:
            return getattr(obj.voyages_baggage, "tag_number", "") or ""
        return ""

    def get_source_party(self, obj):
        if obj.category == Transaction.Category.PARCEL_SHIPPING and obj.voyages_parcel_id:
            return getattr(obj.voyages_parcel, "sender_name", "") or ""
        if obj.category == Transaction.Category.BAGGAGE and obj.voyages_baggage_id:
            return getattr(obj.voyages_baggage, "sender_name", "") or ""
        return ""


class OtherIncomeWriteSerializer(serializers.Serializer):
    amount = serializers.DecimalField(max_digits=12, decimal_places=2, min_value=Decimal("0.01"))
    payment_mode = serializers.ChoiceField(choices=Transaction.PaymentMode.choices)
    description = serializers.CharField(required=False, allow_blank=True, default="")
    cash_session_id = serializers.UUIDField(required=False, allow_null=True)


class VoyageIncomeWriteSerializer(serializers.Serializer):
    amount = serializers.DecimalField(max_digits=12, decimal_places=2, min_value=Decimal("0.01"))
    payment_mode = serializers.ChoiceField(choices=Transaction.PaymentMode.choices)
    title = serializers.CharField(max_length=255)
    vehicle_id = serializers.UUIDField(required=False, allow_null=True)
    date = serializers.DateField(required=False, allow_null=True)
    notes = serializers.CharField(required=False, allow_blank=True, default="")
    cash_session_id = serializers.UUIDField(required=False, allow_null=True)


# ── Moyens de paiement ──────────────────────────────────────────────────────

from apps.treasury.models import PaymentMethod  # noqa: E402


class PaymentMethodReadSerializer(serializers.ModelSerializer):
    mode_display = serializers.CharField(source="get_mode_display", read_only=True)

    class Meta:
        model = PaymentMethod
        fields = ["id", "code", "name", "requires_payment", "mode", "mode_display",
                  "is_active", "is_system", "created_at"]


class PaymentMethodWriteSerializer(serializers.Serializer):
    code = serializers.SlugField(max_length=40, required=False, allow_blank=True)
    name = serializers.CharField(max_length=100)
    requires_payment = serializers.BooleanField(required=False, default=True)
    mode = serializers.ChoiceField(choices=Transaction.PaymentMode.choices, required=False,
                                   default=Transaction.PaymentMode.CASH)
    is_active = serializers.BooleanField(required=False, default=True)


class RefundKindConfigSerializer(serializers.Serializer):
    """Config de remboursement d'un type : méthode + valeur (% ou montant fixe)."""
    method = serializers.ChoiceField(choices=["percentage", "fixed"], required=False)
    rate = serializers.DecimalField(max_digits=5, decimal_places=2,
                                    min_value=Decimal("0"), max_value=Decimal("100"), required=False)
    amount = serializers.DecimalField(max_digits=12, decimal_places=2,
                                      min_value=Decimal("0"), required=False)


class RefundRateSerializer(serializers.Serializer):
    # Par type : objet {method, rate, amount}. `rate` plat conservé pour rétro-compat.
    ticket = RefundKindConfigSerializer(required=False)
    colis = RefundKindConfigSerializer(required=False)
    bagage = RefundKindConfigSerializer(required=False)
    rate = serializers.DecimalField(max_digits=5, decimal_places=2,
                                    min_value=Decimal("0"), max_value=Decimal("100"), required=False)

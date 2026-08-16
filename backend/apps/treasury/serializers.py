from rest_framework import serializers
from apps.treasury.models import CashRegister, BankAccount, CashSession, Transaction, Transfer


# ── Cash register ──────────────────────────────────────────────────────────────

class CashRegisterReadSerializer(serializers.ModelSerializer):
    terminal_name    = serializers.SerializerMethodField()
    responsible_name = serializers.SerializerMethodField()
    account_code = serializers.CharField(source="account.code", read_only=True, default=None)
    journal_code = serializers.CharField(source="journal.code", read_only=True, default=None)
    journal_name = serializers.CharField(source="journal.name", read_only=True, default=None)
    agency_name  = serializers.CharField(source="agency.name", read_only=True, default=None)

    class Meta:
        model = CashRegister
        fields = [
            "id", "name", "terminal_name", "responsible_name",
            "current_balance", "is_active", "notes",
            "account", "journal", "account_code", "journal_code", "journal_name",
            "agency", "agency_name",
            "created_at", "updated_at",
        ]

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
    terminal_id      = serializers.UUIDField(required=False, allow_null=True)
    responsible_id   = serializers.UUIDField(required=False, allow_null=True)
    opening_balance  = serializers.DecimalField(max_digits=12, decimal_places=2,
                                                 required=False, default=0)
    notes            = serializers.CharField(required=False, allow_blank=True, default="")
    account_id       = serializers.UUIDField(required=False, allow_null=True)
    journal_id       = serializers.UUIDField(required=False, allow_null=True)
    agency_id        = serializers.UUIDField(required=False, allow_null=True)


class CashRegisterUpdateSerializer(serializers.Serializer):
    name           = serializers.CharField(max_length=150, required=False)
    terminal_id    = serializers.UUIDField(required=False, allow_null=True)
    responsible_id = serializers.UUIDField(required=False, allow_null=True)
    is_active      = serializers.BooleanField(required=False)
    notes          = serializers.CharField(required=False, allow_blank=True)
    account_id     = serializers.UUIDField(required=False, allow_null=True)
    journal_id     = serializers.UUIDField(required=False, allow_null=True)
    agency_id      = serializers.UUIDField(required=False, allow_null=True)


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

class CashSessionReadSerializer(serializers.ModelSerializer):
    register_name = serializers.CharField(source="cash_register.name", read_only=True)
    opened_by_name = serializers.SerializerMethodField()
    closed_by_name = serializers.SerializerMethodField()
    status_display = serializers.CharField(source="get_status_display", read_only=True)

    class Meta:
        model = CashSession
        fields = [
            "id", "register_name", "status", "status_display",
            "opening_balance", "closing_balance",
            "expected_closing", "difference",
            "opened_by_name", "closed_by_name",
            "opened_at", "closed_at",
            "notes", "created_at",
        ]

    def get_opened_by_name(self, obj):
        return obj.opened_by.get_full_name() or obj.opened_by.username

    def get_closed_by_name(self, obj):
        if obj.closed_by_id:
            return obj.closed_by.get_full_name() or obj.closed_by.username
        return None


class OpenSessionSerializer(serializers.Serializer):
    cash_register_id = serializers.UUIDField()
    opening_balance  = serializers.DecimalField(max_digits=12, decimal_places=2,
                                                 required=False, allow_null=True)
    notes            = serializers.CharField(required=False, allow_blank=True, default="")


class CloseSessionSerializer(serializers.Serializer):
    closing_balance = serializers.DecimalField(max_digits=12, decimal_places=2)
    notes           = serializers.CharField(required=False, allow_blank=True, default="")


# ── Transaction ────────────────────────────────────────────────────────────────

class TransactionReadSerializer(serializers.ModelSerializer):
    type_display     = serializers.CharField(source="get_transaction_type_display", read_only=True)
    category_display = serializers.CharField(source="get_category_display", read_only=True)
    payment_display  = serializers.CharField(source="get_payment_mode_display", read_only=True)
    account_label    = serializers.SerializerMethodField()

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

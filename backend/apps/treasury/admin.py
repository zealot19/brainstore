from django.contrib import admin
from apps.treasury.models import CashRegister, BankAccount, CashSession, Transaction, Transfer


@admin.register(CashRegister)
class CashRegisterAdmin(admin.ModelAdmin):
    list_display  = ("name", "terminal", "current_balance", "is_active", "company")
    list_filter   = ("is_active", "company")
    search_fields = ("name",)
    readonly_fields = ("current_balance", "created_at", "updated_at")


@admin.register(BankAccount)
class BankAccountAdmin(admin.ModelAdmin):
    list_display  = ("bank_name", "account_name", "account_number", "current_balance", "is_active", "company")
    list_filter   = ("is_active", "company")
    search_fields = ("bank_name", "account_number", "account_name")
    readonly_fields = ("current_balance", "created_at")


@admin.register(CashSession)
class CashSessionAdmin(admin.ModelAdmin):
    list_display  = ("cash_register", "status", "opening_balance",
                     "closing_balance", "difference", "opened_at", "company")
    list_filter   = ("status", "company")
    search_fields = ("cash_register__name",)
    readonly_fields = ("expected_closing", "difference", "opened_at", "closed_at")


@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display  = ("reference", "transaction_type", "category",
                     "amount", "payment_mode", "transaction_date", "company")
    list_filter   = ("transaction_type", "category", "account_type", "company")
    search_fields = ("reference", "description")
    readonly_fields = ("reference", "created_at")


@admin.register(Transfer)
class TransferAdmin(admin.ModelAdmin):
    list_display  = ("reference", "from_cash_register", "from_bank_account",
                     "to_cash_register", "to_bank_account", "amount", "transfer_date")
    search_fields = ("reference",)
    readonly_fields = ("reference", "created_at")

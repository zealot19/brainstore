from rest_framework import serializers
from .models import Account, Journal, FiscalYear, AccountingPeriod, Partner


class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = ["id", "partner_type", "name", "source_model", "source_id", "active", "note"]
        read_only_fields = ["id"]


class AccountSerializer(serializers.ModelSerializer):
    parent_code = serializers.CharField(source="parent.code", read_only=True, default=None)

    class Meta:
        model = Account
        fields = ["id", "code", "name", "account_type", "reconcile", "deprecated",
                  "currency", "parent", "parent_code", "note"]
        read_only_fields = ["id"]


class JournalSerializer(serializers.ModelSerializer):
    default_account_code = serializers.CharField(source="default_account.code", read_only=True, default=None)

    class Meta:
        model = Journal
        fields = ["id", "code", "name", "journal_type", "default_account",
                  "default_account_code", "sequence_prefix", "agency", "active"]
        read_only_fields = ["id"]


class FiscalYearSerializer(serializers.ModelSerializer):
    class Meta:
        model = FiscalYear
        fields = ["id", "code", "name", "date_start", "date_end", "state"]
        read_only_fields = ["id"]


class AccountingPeriodSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountingPeriod
        fields = ["id", "fiscal_year", "code", "name", "date_start", "date_end", "state"]
        read_only_fields = ["id"]

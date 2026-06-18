from django.utils.translation import gettext_lazy as _
from rest_framework import serializers
from apps.core.models import Currency
from .models import Package, Company, Subscription, Agency, Parameter, FeatureFlag


# ═══════════════════════════════════════════════════════════════════════════════
# PACKAGE
# ═══════════════════════════════════════════════════════════════════════════════

class PackageSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Package
        fields = [
            "id", "name", "tier", "description",
            "max_users", "max_agencies", "max_storage_gb",
            "price_monthly", "price_yearly", "sort_order",
            "has_api_access", "has_multi_agency", "has_advanced_reports", "has_sso",
            "is_active",
        ]


class PackageWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Package
        fields = [
            "name", "tier", "description",
            "max_users", "max_agencies", "max_storage_gb",
            "price_monthly", "price_yearly", "sort_order",
            "has_api_access", "has_multi_agency", "has_advanced_reports", "has_sso",
            "is_active",
        ]


# ═══════════════════════════════════════════════════════════════════════════════
# SUBSCRIPTION
# ═══════════════════════════════════════════════════════════════════════════════

class SubscriptionSerializer(serializers.ModelSerializer):
    package_name = serializers.CharField(source="package.name", read_only=True)
    package_tier = serializers.CharField(source="package.tier", read_only=True)

    class Meta:
        model  = Subscription
        fields = [
            "id", "package", "package_name", "package_tier",
            "status", "billing_cycle",
            "started_at", "expires_at", "trial_ends_at",
            "created_at",
        ]
        read_only_fields = ["id", "created_at"]


class SubscriptionWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Subscription
        fields = ["package", "billing_cycle", "started_at", "expires_at", "trial_ends_at"]


# ═══════════════════════════════════════════════════════════════════════════════
# COMPANY
# ═══════════════════════════════════════════════════════════════════════════════

class CompanyListSerializer(serializers.ModelSerializer):
    package_name  = serializers.CharField(source="package.name", read_only=True)
    currency_code = serializers.SlugRelatedField(source="currency", slug_field="code", read_only=True)
    address_line  = serializers.CharField(source="address.line1", read_only=True)
    user_count    = serializers.IntegerField(read_only=True, default=0)
    agency_count  = serializers.IntegerField(read_only=True, default=0)

    class Meta:
        model  = Company
        fields = [
            "id", "name", "code", "slug", "logo", "slogan", "is_active",
            "country", "language_code",
            "package", "package_name", "currency_code",
            "address_line", "postal_box",
            "user_count", "agency_count",
            "email", "phone", "website", "created_at",
        ]


class CompanyDetailSerializer(serializers.ModelSerializer):
    package_name        = serializers.CharField(source="package.name", read_only=True)
    active_subscription = serializers.SerializerMethodField()
    is_operational      = serializers.BooleanField(read_only=True)

    class Meta:
        model  = Company
        fields = [
            "id", "name", "slug", "logo", "legal_form", "capital",
            "rccm", "tax_id", "cnps_number", "vat_number",
            "email", "phone", "website",
            "country", "language_code", "timezone", "currency",
            "fiscal_year_start", "fiscal_year_end", "accounting_plan",
            "package", "package_name", "status", "suspension_reason", "suspended_at",
            "active_subscription", "is_operational",
            "is_active", "created_at", "updated_at",
        ]
        read_only_fields = ["id", "slug", "suspended_at", "is_operational", "created_at", "updated_at"]

    def get_active_subscription(self, obj):
        from .selectors import get_active_subscription
        sub = get_active_subscription(obj)
        return SubscriptionSerializer(sub).data if sub else None


class _AddressInputSerializer(serializers.Serializer):
    line1       = serializers.CharField(max_length=255, required=False, allow_blank=True)
    city        = serializers.CharField(max_length=100, required=False, allow_blank=True)
    postal_code = serializers.CharField(max_length=20,  required=False, allow_blank=True)


class CompanyCreateSerializer(serializers.ModelSerializer):
    currency = serializers.SlugRelatedField(
        slug_field="code", queryset=Currency.objects.all(),
        allow_null=True, required=False,
    )
    package = serializers.PrimaryKeyRelatedField(
        queryset=Package.objects.all(), allow_null=True, required=False,
    )
    address_input = _AddressInputSerializer(write_only=True, required=False)

    class Meta:
        model  = Company
        fields = [
            "name", "code", "slogan", "logo",
            "legal_form", "capital", "rccm", "tax_id", "cnps_number", "vat_number",
            "email", "phone", "website", "postal_box",
            "country", "language_code", "timezone", "currency",
            "fiscal_year_start", "fiscal_year_end", "accounting_plan",
            "package", "is_active", "address_input",
        ]

    def validate_name(self, value):
        if not value.strip():
            raise serializers.ValidationError(_("Le nom ne peut pas être vide."))
        return value.strip()



class CompanyUpdateSerializer(serializers.ModelSerializer):
    currency = serializers.SlugRelatedField(
        slug_field="code", queryset=Currency.objects.all(),
        allow_null=True, required=False,
    )
    address_input = _AddressInputSerializer(write_only=True, required=False)

    class Meta:
        model  = Company
        fields = [
            "name", "code", "slogan", "logo",
            "legal_form", "capital", "rccm", "tax_id", "cnps_number", "vat_number",
            "email", "phone", "website", "postal_box",
            "country", "language_code", "timezone", "currency",
            "fiscal_year_start", "fiscal_year_end", "accounting_plan",
            "address_input",
        ]



class CompanySuspendSerializer(serializers.Serializer):
    reason = serializers.CharField(label=_("Raison"), required=False, allow_blank=True, default="")


class ChangePackageSerializer(serializers.Serializer):
    package_id    = serializers.UUIDField(label=_("ID du package"))
    billing_cycle = serializers.ChoiceField(
        label=_("Cycle de facturation"),
        choices=Subscription.BillingCycle.choices,
        default=Subscription.BillingCycle.MONTHLY,
    )


# ═══════════════════════════════════════════════════════════════════════════════
# AGENCY
# ═══════════════════════════════════════════════════════════════════════════════

class AgencySerializer(serializers.ModelSerializer):
    manager_name = serializers.SerializerMethodField()
    parent_name  = serializers.CharField(source="parent.name", read_only=True)

    class Meta:
        model  = Agency
        fields = [
            "id", "company", "parent", "parent_name",
            "name", "code", "agency_type",
            "email", "phone", "manager", "manager_name",
            "currency", "is_active", "created_at",
        ]
        read_only_fields = ["id", "created_at"]

    def get_manager_name(self, obj):
        return obj.manager.get_full_name() if obj.manager else None


class AgencyWriteSerializer(serializers.ModelSerializer):
    currency = serializers.SlugRelatedField(
        slug_field="code", queryset=Currency.objects.all(),
        allow_null=True, required=False,
    )
    company = serializers.PrimaryKeyRelatedField(
        queryset=Company.objects.all(), required=False,
    )
    email = serializers.EmailField(allow_blank=True, allow_null=True, required=False, default="")
    phone = serializers.CharField(max_length=30, allow_blank=True, allow_null=True, required=False, default="")

    def validate_email(self, value): return value or ""
    def validate_phone(self, value): return value or ""

    class Meta:
        model  = Agency
        fields = ["company", "parent", "name", "code", "agency_type", "email", "phone", "manager", "currency", "is_active"]


class AgencyTreeSerializer(serializers.ModelSerializer):
    """Sérialisation récursive pour la vue arborescente."""
    children = serializers.SerializerMethodField()

    class Meta:
        model  = Agency
        fields = ["id", "name", "code", "agency_type", "is_active", "children"]

    def get_children(self, obj):
        active_children = obj.children.filter(is_deleted=False)
        return AgencyTreeSerializer(active_children, many=True).data


# ═══════════════════════════════════════════════════════════════════════════════
# PARAMETER
# ═══════════════════════════════════════════════════════════════════════════════

class ParameterSerializer(serializers.ModelSerializer):
    typed_value = serializers.SerializerMethodField()

    class Meta:
        model  = Parameter
        fields = [
            "id", "key", "value", "typed_value", "data_type", "scope",
            "company", "module", "description", "is_readonly", "is_active",
        ]
        read_only_fields = ["id", "typed_value"]

    def get_typed_value(self, obj):
        try:
            return obj.get_typed_value()
        except Exception:
            return obj.value


class ParameterWriteSerializer(serializers.ModelSerializer):
    company = serializers.PrimaryKeyRelatedField(
        queryset=Company.objects.all(), required=False, allow_null=True, default=None
    )

    class Meta:
        model  = Parameter
        fields = ["key", "value", "data_type", "scope", "company", "module", "description", "is_readonly"]


class ParameterBulkSerializer(serializers.Serializer):
    class _Item(serializers.Serializer):
        key   = serializers.CharField()
        value = serializers.CharField()

    items      = serializers.ListField(child=_Item())
    company_id = serializers.UUIDField(required=False, allow_null=True, default=None)


# ═══════════════════════════════════════════════════════════════════════════════
# FEATURE FLAG
# ═══════════════════════════════════════════════════════════════════════════════

class FeatureFlagSerializer(serializers.ModelSerializer):
    class Meta:
        model  = FeatureFlag
        fields = ["id", "key", "company", "is_enabled", "description", "is_active"]
        read_only_fields = ["id"]


class FeatureFlagWriteSerializer(serializers.ModelSerializer):
    company = serializers.PrimaryKeyRelatedField(
        queryset=Company.objects.all(), required=False, allow_null=True, default=None
    )

    class Meta:
        model  = FeatureFlag
        fields = ["key", "company", "is_enabled", "description"]


class FeatureFlagSetSerializer(serializers.Serializer):
    enabled = serializers.BooleanField(label=_("Activer"))

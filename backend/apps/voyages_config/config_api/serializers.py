from rest_framework import serializers
from apps.voyages_config.models import (
    Town, ServicePoint, FareClass, TimeSlot,
    ConsignmentNature, ConsignmentType, LoyaltyRule,
    Route, RouteStop,
    SeatingPlan,
    ServicePattern, VoyagesSettings, CrewMemberType, ExpenseType,
    ExpenseSchedule, ExpenseScheduleLine, VoyageType,
)


class _ScopeMixin(serializers.ModelSerializer):
    scope = serializers.SerializerMethodField()

    def get_scope(self, obj):
        return "global" if obj.company_id is None else "company"


# ── Town ─────────────────────────────────────────────────────────────────────
class TownRead(_ScopeMixin):
    class Meta:
        model = Town
        fields = ["id", "name", "code", "region", "company", "scope",
                  "is_active", "created_at", "updated_at"]


class CrewMemberTypeRead(_ScopeMixin):
    class Meta:
        model = CrewMemberType
        fields = ["id", "code", "name", "name_fr", "name_en", "is_driver", "company", "scope",
                  "is_active", "created_at", "updated_at"]


class CrewMemberTypeWrite(serializers.Serializer):
    code      = serializers.CharField(max_length=20)
    name      = serializers.CharField(max_length=100)
    name_en   = serializers.CharField(max_length=100, required=False, allow_blank=True, default="")
    is_driver = serializers.BooleanField(required=False, default=False)
    is_active = serializers.BooleanField(required=False, default=True)


class VoyageTypeRead(_ScopeMixin):
    class Meta:
        model = VoyageType
        fields = ["id", "code", "name", "is_default", "company", "scope",
                  "is_active", "created_at", "updated_at"]


class VoyageTypeWrite(serializers.Serializer):
    code       = serializers.CharField(max_length=20)
    name       = serializers.CharField(max_length=100)
    is_default = serializers.BooleanField(required=False, default=False)
    is_active  = serializers.BooleanField(required=False, default=True)


class ExpenseTypeRead(_ScopeMixin):
    class Meta:
        model = ExpenseType
        fields = ["id", "code", "name", "name_fr", "name_en", "account_code", "company", "scope",
                  "is_active", "created_at", "updated_at"]


class ExpenseTypeWrite(serializers.Serializer):
    code         = serializers.CharField(max_length=30)
    name         = serializers.CharField(max_length=150)
    name_en      = serializers.CharField(max_length=150, required=False, allow_blank=True, default="")
    account_code = serializers.CharField(max_length=10, required=False, allow_blank=True, default="")
    is_active    = serializers.BooleanField(required=False, default=True)

    def validate_account_code(self, value):
        if not value:
            return value
        from apps.accounting.models import Account
        request = self.context.get("request")
        company_id = getattr(getattr(request, "user", None), "company_id", None)
        qs = Account.objects.filter(code=value, account_type="expense", is_deleted=False)
        if company_id:
            qs = qs.filter(company_id=company_id)
        if not qs.exists():
            raise serializers.ValidationError(
                "Compte de charge introuvable dans le plan comptable.")
        return value


class ExpenseScheduleLineSerializer(serializers.ModelSerializer):
    expense_type_name = serializers.CharField(source="expense_type.name", read_only=True)

    class Meta:
        model = ExpenseScheduleLine
        fields = ["id", "expense_type", "expense_type_name", "amount"]


class ExpenseScheduleSerializer(serializers.ModelSerializer):
    lines = ExpenseScheduleLineSerializer(many=True, read_only=True)
    route_name = serializers.CharField(source="route.code", read_only=True)
    fare_class_name = serializers.CharField(source="fare_class.name", read_only=True)

    class Meta:
        model = ExpenseSchedule
        fields = ["id", "route", "route_name", "fare_class", "fare_class_name", "is_active", "lines"]


class ExpenseScheduleWriteSerializer(serializers.ModelSerializer):
    lines = ExpenseScheduleLineSerializer(many=True)

    class Meta:
        model = ExpenseSchedule
        fields = ["route", "fare_class", "is_active", "lines"]

    def _sync_lines(self, schedule, lines):
        schedule.lines.all().delete()
        for ln in lines:
            ExpenseScheduleLine.objects.create(schedule=schedule, **ln)

    def create(self, validated):
        lines = validated.pop("lines", [])
        schedule = ExpenseSchedule.objects.create(**validated)
        self._sync_lines(schedule, lines)
        return schedule

    def update(self, instance, validated):
        lines = validated.pop("lines", None)
        for k, v in validated.items():
            setattr(instance, k, v)
        instance.save()
        if lines is not None:
            self._sync_lines(instance, lines)
        return instance


class TownWrite(serializers.Serializer):
    name = serializers.CharField(max_length=150)
    code = serializers.CharField(max_length=20, required=False, allow_blank=True, default="")
    region = serializers.CharField(max_length=100, required=False, allow_blank=True, default="")
    is_active = serializers.BooleanField(required=False, default=True)


# ── ServicePoint ─────────────────────────────────────────────────────────────
class ServicePointRead(_ScopeMixin):
    town_name = serializers.CharField(source="town.name", read_only=True, default=None)
    agency_name = serializers.CharField(source="agency.name", read_only=True, default=None)

    class Meta:
        model = ServicePoint
        fields = ["id", "town", "town_name", "code", "name", "latitude", "longitude",
                  "agency", "agency_name",
                  "company", "scope", "is_active", "created_at", "updated_at"]


class ServicePointWrite(serializers.Serializer):
    # Ville facultative : les Stations sont rattachées à une agence, pas à une ville.
    town_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    code = serializers.CharField(max_length=20)
    name = serializers.CharField(max_length=150)
    latitude = serializers.DecimalField(max_digits=9, decimal_places=6, required=False, allow_null=True, default=None)
    longitude = serializers.DecimalField(max_digits=9, decimal_places=6, required=False, allow_null=True, default=None)
    is_active = serializers.BooleanField(required=False, default=True)
    agency_id = serializers.UUIDField(required=False, allow_null=True, default=None)


# ── FareClass ────────────────────────────────────────────────────────────────
class FareClassRead(_ScopeMixin):
    class Meta:
        model = FareClass
        fields = ["id", "code", "name", "rank", "color", "is_rental", "company", "scope",
                  "is_active", "created_at", "updated_at"]


class FareClassWrite(serializers.Serializer):
    code = serializers.CharField(max_length=20)
    name = serializers.CharField(max_length=100)
    rank = serializers.IntegerField(required=False, default=0, min_value=0)
    color = serializers.CharField(max_length=7, required=False, allow_blank=True, default="")
    is_rental = serializers.BooleanField(required=False, default=False)
    is_active = serializers.BooleanField(required=False, default=True)


# ── TimeSlot ─────────────────────────────────────────────────────────────────
class TimeSlotRead(_ScopeMixin):
    class Meta:
        model = TimeSlot
        fields = ["id", "code", "label", "start_time", "end_time", "ordering",
                  "company", "scope", "is_active", "created_at", "updated_at"]


class TimeSlotWrite(serializers.Serializer):
    code = serializers.CharField(max_length=20)
    label = serializers.CharField(max_length=100)
    start_time = serializers.TimeField()
    end_time = serializers.TimeField()
    ordering = serializers.IntegerField(required=False, default=0, min_value=0)
    is_active = serializers.BooleanField(required=False, default=True)


# ── ConsignmentNature ────────────────────────────────────────────────────────
class ConsignmentNatureRead(_ScopeMixin):
    class Meta:
        model = ConsignmentNature
        fields = ["id", "code", "name", "name_fr", "name_en", "is_fragile", "requires_declaration",
                  "is_prohibited", "company", "scope", "is_active", "created_at", "updated_at"]


class ConsignmentNatureWrite(serializers.Serializer):
    code = serializers.CharField(max_length=20)
    name = serializers.CharField(max_length=100)
    name_en = serializers.CharField(max_length=100, required=False, allow_blank=True, default="")
    is_fragile = serializers.BooleanField(required=False, default=False)
    requires_declaration = serializers.BooleanField(required=False, default=False)
    is_prohibited = serializers.BooleanField(required=False, default=False)
    is_active = serializers.BooleanField(required=False, default=True)


# ── ConsignmentType ──────────────────────────────────────────────────────────
class ConsignmentTypeRead(_ScopeMixin):
    nature_name = serializers.CharField(source="nature.name", read_only=True, default=None)
    applies_to_display = serializers.CharField(source="get_applies_to_display", read_only=True)

    class Meta:
        model = ConsignmentType
        fields = ["id", "code", "label", "label_fr", "label_en", "nature", "nature_name", "max_weight_kg",
                  "max_volume_m3", "applies_to", "applies_to_display",
                  "fixed_price", "min_price", "max_price",
                  "company", "scope", "is_active", "created_at", "updated_at"]


class ConsignmentTypeWrite(serializers.Serializer):
    code = serializers.CharField(max_length=20)
    label = serializers.CharField(max_length=150)
    label_en = serializers.CharField(max_length=150, required=False, allow_blank=True, default="")
    # Nature retirée du formulaire : facultative.
    nature_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    max_weight_kg = serializers.DecimalField(max_digits=8, decimal_places=2, required=False, allow_null=True, default=None)
    max_volume_m3 = serializers.DecimalField(max_digits=8, decimal_places=3, required=False, allow_null=True, default=None)
    applies_to = serializers.ChoiceField(choices=ConsignmentType.AppliesTo.choices,
                                         required=False, default=ConsignmentType.AppliesTo.BOTH)
    fixed_price = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, allow_null=True, default=None)
    min_price   = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, allow_null=True, default=None)
    max_price   = serializers.DecimalField(max_digits=12, decimal_places=2, required=False, allow_null=True, default=None)
    is_active = serializers.BooleanField(required=False, default=True)

    def validate(self, attrs):
        lo, hi = attrs.get("min_price"), attrs.get("max_price")
        if lo is not None and hi is not None and lo > hi:
            raise serializers.ValidationError(
                {"max_price": "Le prix maximum doit être ≥ au prix minimum."})
        return attrs


# ── LoyaltyRule ──────────────────────────────────────────────────────────────
class LoyaltyRuleRead(_ScopeMixin):
    class Meta:
        model = LoyaltyRule
        fields = ["id", "name", "points_per_one_way", "points_per_round_trip",
                  "reward_threshold", "reward_label", "valid_from", "valid_to",
                  "company", "scope", "is_active", "created_at", "updated_at"]


class LoyaltyRuleWrite(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    points_per_one_way = serializers.IntegerField(required=False, default=1, min_value=0)
    points_per_round_trip = serializers.IntegerField(required=False, default=2, min_value=0)
    reward_threshold = serializers.IntegerField(required=False, default=10, min_value=1)
    reward_label = serializers.CharField(max_length=150, required=False, allow_blank=True, default="1 billet gratuit")
    valid_from = serializers.DateField(required=False, allow_null=True, default=None)
    valid_to = serializers.DateField(required=False, allow_null=True, default=None)
    is_active = serializers.BooleanField(required=False, default=True)


# ── RouteStop (escale) ────────────────────────────────────────────────────────
class RouteStopRead(serializers.ModelSerializer):
    service_point_name = serializers.CharField(source="service_point.name", read_only=True, default=None)

    class Meta:
        model = RouteStop
        fields = ["id", "service_point", "service_point_name",
                  "sequence", "distance_from_origin_km", "offset_from_departure"]


class RouteStopWrite(serializers.Serializer):
    service_point_id = serializers.UUIDField()
    sequence = serializers.IntegerField(required=False, allow_null=True, default=None, min_value=1)
    distance_from_origin_km = serializers.DecimalField(max_digits=8, decimal_places=1, required=False, allow_null=True, default=None)
    offset_from_departure = serializers.DurationField(required=False, allow_null=True, default=None)


class RouteStopItemWrite(serializers.Serializer):
    service_point_id = serializers.UUIDField()
    distance_from_origin_km = serializers.DecimalField(max_digits=8, decimal_places=1,
                                                       required=False, allow_null=True, default=None)


class RouteStopsBulkWrite(serializers.Serializer):
    # M10 : définir en bloc la liste ordonnée des escales (remplacement complet).
    stops = RouteStopItemWrite(many=True)


# ── Route (trajet) ────────────────────────────────────────────────────────────
class RouteRead(_ScopeMixin):
    origin_name = serializers.CharField(source="origin.name", read_only=True, default=None)
    destination_name = serializers.CharField(source="destination.name", read_only=True, default=None)
    stops = RouteStopRead(many=True, read_only=True)

    class Meta:
        model = Route
        fields = ["id", "code", "label", "origin", "origin_name",
                  "destination", "destination_name", "distance_km", "estimated_duration",
                  "stops", "company", "scope", "is_active", "created_at", "updated_at"]


class RouteWrite(serializers.Serializer):
    code = serializers.CharField(max_length=30)
    label = serializers.CharField(max_length=200, required=False, allow_blank=True, default="")
    origin_id = serializers.UUIDField()
    destination_id = serializers.UUIDField()
    distance_km = serializers.DecimalField(max_digits=8, decimal_places=1, required=False, allow_null=True, default=None)
    estimated_duration = serializers.DurationField(required=False, allow_null=True, default=None)
    is_active = serializers.BooleanField(required=False, default=True)


# ── SeatingPlan (numérique, M05) ──────────────────────────────────────────────
class SeatingPlanRead(_ScopeMixin):
    sellable_seats = serializers.IntegerField(read_only=True)

    class Meta:
        model = SeatingPlan
        fields = ["id", "code", "name", "total_seats", "blocked_seats", "sellable_seats",
                  "company", "scope", "is_active", "created_at", "updated_at"]


class SeatingPlanWrite(serializers.Serializer):
    code = serializers.CharField(max_length=30)
    name = serializers.CharField(max_length=150)
    total_seats = serializers.IntegerField(required=False, default=0, min_value=0)
    blocked_seats = serializers.IntegerField(required=False, default=0, min_value=0)
    is_active = serializers.BooleanField(required=False, default=True)

    def validate(self, data):
        if (data.get("blocked_seats") or 0) > (data.get("total_seats") or 0):
            raise serializers.ValidationError(
                {"blocked_seats": "Les places bloquées ne peuvent pas dépasser le total."})
        return data


# ── ServicePattern (planification) ────────────────────────────────────────────
class ServicePatternRead(_ScopeMixin):
    route_code = serializers.CharField(source="route.code", read_only=True, default=None)
    time_slot_label = serializers.CharField(source="time_slot.label", read_only=True, default=None)
    fare_class_name = serializers.CharField(source="fare_class.name", read_only=True, default=None)
    default_seating_plan_code = serializers.CharField(source="default_seating_plan.code", read_only=True, default=None)

    class Meta:
        model = ServicePattern
        fields = ["id", "route", "route_code", "time_slot", "time_slot_label",
                  "fare_class", "fare_class_name", "default_seating_plan", "default_seating_plan_code",
                  "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday",
                  "valid_from", "valid_to", "company", "scope", "is_active",
                  "created_at", "updated_at"]


class ServicePatternWrite(serializers.Serializer):
    route_id = serializers.UUIDField()
    time_slot_id = serializers.UUIDField()
    fare_class_id = serializers.UUIDField()
    default_seating_plan_id = serializers.UUIDField(required=False, allow_null=True, default=None)
    monday = serializers.BooleanField(required=False, default=False)
    tuesday = serializers.BooleanField(required=False, default=False)
    wednesday = serializers.BooleanField(required=False, default=False)
    thursday = serializers.BooleanField(required=False, default=False)
    friday = serializers.BooleanField(required=False, default=False)
    saturday = serializers.BooleanField(required=False, default=False)
    sunday = serializers.BooleanField(required=False, default=False)
    valid_from = serializers.DateField(required=False, allow_null=True, default=None)
    valid_to = serializers.DateField(required=False, allow_null=True, default=None)
    is_active = serializers.BooleanField(required=False, default=True)


# ── VoyagesSettings ───────────────────────────────────────────────────────────
class VoyagesSettingsRead(_ScopeMixin):
    class Meta:
        model = VoyagesSettings
        fields = ["id", "departure_lead_hours", "arrival_grace_hours", "ticket_expiry_days",
                  "shift_duration_hours", "document_alert_days",
                  "auto_print_default", "sms_notification_default", "auto_manage_trips",
                  "baggage_free_allowance_kg", "parcel_trip_max_weight_kg", "parcel_trip_max_count",
                  "company", "scope", "created_at", "updated_at"]


class VoyagesSettingsWrite(serializers.Serializer):
    departure_lead_hours = serializers.IntegerField(required=False, min_value=0)
    arrival_grace_hours = serializers.IntegerField(required=False, min_value=0)
    ticket_expiry_days = serializers.IntegerField(required=False, min_value=0)
    shift_duration_hours = serializers.IntegerField(required=False, min_value=0)
    document_alert_days = serializers.IntegerField(required=False, min_value=0)
    auto_print_default = serializers.BooleanField(required=False)
    sms_notification_default = serializers.BooleanField(required=False)
    auto_manage_trips = serializers.BooleanField(required=False)
    baggage_free_allowance_kg = serializers.IntegerField(required=False, min_value=0)
    parcel_trip_max_weight_kg = serializers.DecimalField(required=False, allow_null=True, max_digits=8, decimal_places=2)
    parcel_trip_max_count = serializers.IntegerField(required=False, allow_null=True, min_value=0)


import json
from apps.voyages_config.models import TicketTemplate


class _JSONListField(serializers.JSONField):
    """Accepte une liste JSON, ou une chaine JSON (cas multipart/form-data)."""

    def to_internal_value(self, data):
        if isinstance(data, str):
            try:
                data = json.loads(data or "[]")
            except ValueError:
                self.fail("invalid")
        if not isinstance(data, list):
            self.fail("invalid")
        return data


class TicketTemplateSerializer(serializers.ModelSerializer):
    logo_url = serializers.SerializerMethodField()
    background_logo_url = serializers.SerializerMethodField()
    agencies_list = _JSONListField(required=False)

    class Meta:
        model = TicketTemplate
        fields = ["brand_name", "slogan", "niu", "rccm", "phone", "email", "address",
                  "logo", "logo_url", "background_logo", "background_logo_url",
                  "color_ink", "color_accent", "color_band",
                  "recto_notice", "verso_conditions", "agencies_list",
                  "ticket_width_mm", "ticket_height_mm",
                  "parcel_receipt_terms", "baggage_ticket_note",
                  "show_verso", "show_stub", "show_watermark", "show_qr",
                  "custom_html", "html_recto", "html_verso"]
        extra_kwargs = {"logo": {"required": False}, "background_logo": {"required": False}}

    def _url(self, f):
        req = self.context.get("request")
        if not f:
            return None
        try:
            return req.build_absolute_uri(f.url) if req else f.url
        except Exception:
            return None

    def get_logo_url(self, obj):
        return self._url(obj.logo)

    def get_background_logo_url(self, obj):
        return self._url(obj.background_logo)


from apps.voyages_config.models import ManifestTemplate


class ManifestTemplateSerializer(serializers.ModelSerializer):
    logo_url = serializers.SerializerMethodField()
    sign_labels_voyage = serializers.ListField(child=serializers.CharField(allow_blank=True), required=False)
    sign_labels_colis = serializers.ListField(child=serializers.CharField(allow_blank=True), required=False)

    class Meta:
        model = ManifestTemplate
        fields = ["brand_name", "slogan", "head_office", "phones", "agencies_line",
                  "logo", "logo_url", "sign_labels_voyage", "sign_labels_colis",
                  "footer_text", "footer_show_generated", "footer_show_page_numbers"]
        extra_kwargs = {"logo": {"required": False},
                        "footer_text": {"required": False},
                        "footer_show_generated": {"required": False},
                        "footer_show_page_numbers": {"required": False}}

    def get_logo_url(self, obj):
        req = self.context.get("request")
        if not obj.logo:
            return None
        try:
            return req.build_absolute_uri(obj.logo.url) if req else obj.logo.url
        except Exception:
            return None

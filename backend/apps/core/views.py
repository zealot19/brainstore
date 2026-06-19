from rest_framework.views import APIView
from apps.core.models import AuditLog
from apps.core.serializers import AuditLogSerializer
from apps.core.responses import success_response
from apps.core.permissions import IsInstitutionAdmin


class AuditLogListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        qs = AuditLog.objects.select_related("user", "company").order_by("-timestamp")

        company_id = request.query_params.get("company")
        module     = request.query_params.get("module")
        action     = request.query_params.get("action")
        user_id    = request.query_params.get("user")
        date_from  = request.query_params.get("date_from")
        date_to    = request.query_params.get("date_to")

        if not request.user.is_superuser:
            qs = qs.filter(company=request.user.company)
        elif company_id:
            qs = qs.filter(company_id=company_id)

        if module:
            qs = qs.filter(module=module)
        if action:
            qs = qs.filter(action=action)
        if user_id:
            qs = qs.filter(user_id=user_id)
        if date_from:
            qs = qs.filter(timestamp__date__gte=date_from)
        if date_to:
            qs = qs.filter(timestamp__date__lte=date_to)

        qs = qs[:500]
        return success_response(AuditLogSerializer(qs, many=True).data)

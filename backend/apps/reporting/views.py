from rest_framework.views import APIView
from django.http import HttpResponse
from apps.core.permissions import IsAuthenticated, HasModulePermission
from apps.core.responses import success_response, error_response
from apps.reporting.registry import REPORTS
from apps.reporting.filters import parse_filters
from apps.reporting.render.csv_ import render_csv
from apps.reporting.render.xlsx import render_xlsx


class ReportCatalogView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "reporting.view"}

    def get(self, request):
        data = [{"code": r["code"], "name": r["name"], "filters": r["filters"]} for r in REPORTS.values()]
        return success_response(sorted(data, key=lambda x: x["name"]))


class ReportGenerateView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "reporting.view"}

    def get(self, request, code):
        entry = REPORTS.get(code)
        if not entry:
            return error_response("Rapport introuvable.", status_code=404)
        result = entry["build"](request.user.company, parse_filters(request))
        fmt = request.query_params.get("format", "pdf")
        if fmt == "csv":
            body, ct, ext = render_csv(result), "text/csv", "csv"
        elif fmt == "xlsx":
            body, ct, ext = render_xlsx(result), \
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "xlsx"
        else:
            from apps.reporting.render.pdf import render_pdf
            body, ct, ext = render_pdf(result, request.user.company), "application/pdf", "pdf"
        resp = HttpResponse(body, content_type=ct)
        resp["Content-Disposition"] = f'attachment; filename="{code}.{ext}"'
        return resp

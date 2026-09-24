from rest_framework.views import APIView
from django.http import HttpResponse
from apps.core.permissions import IsAuthenticated, HasModulePermission
from apps.core.responses import success_response, error_response
from apps.reporting.registry import REPORTS
from apps.reporting.filters import parse_filters
from apps.reporting.filter_defs import FILTER_DEFS, resolve_options
from apps.reporting.render.csv_ import render_csv
from apps.reporting.render.xlsx import render_xlsx


def _filter_spec(key):
    """Enrichit une clé de filtre déclarée par un rapport avec son type + libellé."""
    d = FILTER_DEFS.get(key, {"type": "text", "label": key})
    spec = {"key": key, "type": d["type"], "label": d["label"]}
    if d.get("options"):
        spec["options"] = d["options"]
    return spec


class ReportCatalogView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "reporting.view"}

    def get(self, request):
        data = [{"code": r["code"], "name": r["name"], "orientation": r["orientation"],
                 "filters": [_filter_spec(k) for k in r["filters"]]} for r in REPORTS.values()]
        return success_response(sorted(data, key=lambda x: x["name"]))


class FilterOptionsView(APIView):
    """Options d'un filtre select (bornées à la société). ?source=<clé>[&report=<code>]."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "reporting.view"}

    def get(self, request):
        source = request.query_params.get("source")
        if not source:
            return error_response("Source manquante.", status_code=400)
        report = request.query_params.get("report")
        return success_response(resolve_options(source, request.user.company, report))


class ReportGenerateView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "reporting.view"}

    def get(self, request, code):
        entry = REPORTS.get(code)
        if not entry:
            return error_response("Rapport introuvable.", status_code=404)
        result = entry["build"](request.user.company, parse_filters(request))
        # NB: 'format' est réservé par DRF (négociation de contenu) → on utilise 'fmt'.
        fmt = request.query_params.get("fmt", "pdf")
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

"""Vues API du tableau de bord Transport."""
import datetime as dt
from rest_framework.views import APIView
from apps.core.permissions import IsAuthenticated, HasModulePermission
from apps.core.responses import success_response
from apps.voyages_trips.dashboard import selectors


def _parse_date(s, default):
    if not s:
        return default
    try:
        return dt.date.fromisoformat(s)
    except (TypeError, ValueError):
        return default


class TripCardsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "voyage.trip.view"}

    def get(self, request):
        today = dt.date.today()
        date_from = _parse_date(request.query_params.get("date_from"), today)
        date_to = _parse_date(request.query_params.get("date_to"), today)
        cards = selectors.trip_cards(request.user.company, request.user, date_from, date_to)
        return success_response({
            "date_from": date_from.isoformat(),
            "date_to": date_to.isoformat(),
            "trips": cards,
        })


class SeriesView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "voyage.trip.view"}

    def get(self, request):
        try:
            year = int(request.query_params.get("year", dt.date.today().year))
        except (TypeError, ValueError):
            year = dt.date.today().year
        metric = request.query_params.get("metric", "tickets")
        data = selectors.monthly_series(request.user.company, request.user, year, metric)
        return success_response({"year": year, "metric": metric, "data": data})

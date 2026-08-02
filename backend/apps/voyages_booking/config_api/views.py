from rest_framework.views import APIView
from apps.core.permissions import IsInstitutionAdmin
from apps.core.responses import success_response, created_response, error_response, no_content_response
from apps.core.pagination import StandardResultsSetPagination
from apps.voyages_booking.models import Passenger
from apps.voyages_booking import selectors, services
from . import serializers as S
from .common import scope_company_id, resolve_company_or_global


class PassengerListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        qs = selectors.find_passengers(request.user.company, request.query_params.get("q"))
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(S.PassengerRead(page, many=True).data)

    def post(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        payload = S.PassengerWrite(data=request.data)
        payload.is_valid(raise_exception=True)
        p = services.get_or_create_passenger(company, user=request.user, **payload.validated_data)
        return created_response(S.PassengerRead(p).data)


class PassengerDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, pk):
        return Passenger.objects.filter(is_deleted=False, company_id=scope_company_id(request), id=pk).first()

    def get(self, request, pk):
        p = self._get(request, pk)
        return success_response(S.PassengerRead(p).data) if p else error_response("Introuvable.", status_code=404)

    def patch(self, request, pk):
        p = self._get(request, pk)
        if not p:
            return error_response("Introuvable.", status_code=404)
        payload = S.PassengerWrite(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        for k, v in payload.validated_data.items():
            setattr(p, k, v)
        p.updated_by = request.user
        p.save()
        return success_response(S.PassengerRead(p).data)

    def delete(self, request, pk):
        p = self._get(request, pk)
        if not p:
            return error_response("Introuvable.", status_code=404)
        p.is_deleted = True
        p.updated_by = request.user
        p.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return no_content_response()

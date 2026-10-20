from rest_framework.views import APIView

from apps.core.permissions import IsAuthenticated, HasModulePermission
from apps.core.responses import (success_response, created_response, error_response,
                                 no_content_response)
from apps.partners.models import Partner
from apps.partners.serializers import PartnerReadSerializer, PartnerWriteSerializer

_NOT_FOUND = "Élément introuvable : il a peut-être été supprimé ou déplacé."


def _company(request):
    return request.user.company


class PartnerListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.partner.view", "POST": "treasury.partner.create"}

    def get(self, request):
        qs = Partner.objects.filter(company=_company(request), is_deleted=False)
        if request.query_params.get("active") == "true":
            qs = qs.filter(is_active=True)
        return success_response(PartnerReadSerializer(qs.order_by("name"), many=True).data)

    def post(self, request):
        ser = PartnerWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data
        company = _company(request)
        if Partner.objects.filter(company=company, code=d["code"], is_deleted=False).exists():
            return error_response("Un partenaire avec ce code existe déjà.")
        partner = Partner.objects.create(company=company, created_by=request.user, **d)
        return created_response(PartnerReadSerializer(partner).data)


class PartnerDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.partner.view", "PATCH": "treasury.partner.update",
                      "DELETE": "treasury.partner.delete"}

    def _obj(self, request, pk):
        return Partner.objects.filter(company=_company(request), id=pk, is_deleted=False).first()

    def get(self, request, pk):
        obj = self._obj(request, pk)
        return success_response(PartnerReadSerializer(obj).data) if obj else error_response(_NOT_FOUND, status_code=404)

    def patch(self, request, pk):
        obj = self._obj(request, pk)
        if not obj:
            return error_response(_NOT_FOUND, status_code=404)
        ser = PartnerWriteSerializer(data=request.data, partial=True)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data
        new_code = d.get("code", obj.code)
        if new_code != obj.code and Partner.objects.filter(
                company=obj.company, code=new_code, is_deleted=False).exclude(id=obj.id).exists():
            return error_response("Un partenaire avec ce code existe déjà.")
        for k, v in d.items():
            setattr(obj, k, v)
        obj.updated_by = request.user
        obj.save()
        return success_response(PartnerReadSerializer(obj).data)

    def delete(self, request, pk):
        obj = self._obj(request, pk)
        if not obj:
            return error_response(_NOT_FOUND, status_code=404)
        obj.soft_delete(user=request.user)
        return no_content_response()

from django.utils.translation import gettext_lazy as _
from rest_framework.views import APIView
from apps.core.permissions import IsAuthenticated, HasModulePermission
from apps.core.responses import success_response, created_response, error_response
from .models import Account, Journal, FiscalYear, AccountingPeriod
from .serializers import (AccountSerializer, JournalSerializer,
                          FiscalYearSerializer, AccountingPeriodSerializer)


def _company(request):
    return getattr(request.user, "company_id", None)


class AccountListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.account.view", "POST": "accounting.account.manage"}

    def get(self, request):
        qs = Account.objects.filter(is_deleted=False, company_id=_company(request))
        atype = request.query_params.get("type")
        if atype:
            qs = qs.filter(account_type=atype)
        term = request.query_params.get("search")
        if term:
            from django.db.models import Q
            qs = qs.filter(Q(code__icontains=term) | Q(name__icontains=term))
        return success_response(AccountSerializer(qs.order_by("code"), many=True).data)

    def post(self, request):
        data = request.data
        obj = Account.objects.create(
            company_id=_company(request), code=data["code"], name=data["name"],
            account_type=data["account_type"], reconcile=bool(data.get("reconcile", False)),
            currency=data.get("currency", "XAF"),
            parent_id=data.get("parent"), note=data.get("note", ""),
            created_by=request.user)
        return created_response(AccountSerializer(obj).data)


class AccountDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.account.view", "PATCH": "accounting.account.manage",
                      "PUT": "accounting.account.manage", "DELETE": "accounting.account.manage"}

    def _get(self, request, pk):
        return Account.objects.filter(is_deleted=False, company_id=_company(request), id=pk).first()

    def get(self, request, pk):
        o = self._get(request, pk)
        return success_response(AccountSerializer(o).data) if o else error_response(_("Introuvable."), status_code=404)

    def patch(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response(_("Introuvable."), status_code=404)
        for f in ("name", "account_type", "reconcile", "deprecated", "note"):
            if f in request.data:
                setattr(o, f, request.data[f])
        if "parent" in request.data:
            o.parent_id = request.data["parent"]
        o.updated_by = request.user
        o.save()
        return success_response(AccountSerializer(o).data)

    def delete(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response(_("Introuvable."), status_code=404)
        o.is_deleted = True
        o.updated_by = request.user
        o.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return success_response(message=_("Compte supprimé."))


class JournalListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.journal.view", "POST": "accounting.journal.manage"}

    def get(self, request):
        qs = Journal.objects.filter(is_deleted=False, company_id=_company(request)).order_by("code")
        return success_response(JournalSerializer(qs, many=True).data)

    def post(self, request):
        d = request.data
        obj = Journal.objects.create(
            company_id=_company(request), code=d["code"], name=d["name"],
            journal_type=d["journal_type"], default_account_id=d.get("default_account"),
            sequence_prefix=d.get("sequence_prefix", ""), agency_id=d.get("agency"),
            created_by=request.user)
        return created_response(JournalSerializer(obj).data)


class JournalDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.journal.view", "PATCH": "accounting.journal.manage",
                      "PUT": "accounting.journal.manage", "DELETE": "accounting.journal.manage"}

    def _get(self, request, pk):
        return Journal.objects.filter(is_deleted=False, company_id=_company(request), id=pk).first()

    def get(self, request, pk):
        o = self._get(request, pk)
        return success_response(JournalSerializer(o).data) if o else error_response(_("Introuvable."), status_code=404)

    def patch(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response(_("Introuvable."), status_code=404)
        for f in ("name", "journal_type", "sequence_prefix", "active"):
            if f in request.data:
                setattr(o, f, request.data[f])
        if "default_account" in request.data:
            o.default_account_id = request.data["default_account"]
        o.updated_by = request.user
        o.save()
        return success_response(JournalSerializer(o).data)


class FiscalYearListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.fiscalyear.view", "POST": "accounting.fiscalyear.manage"}

    def get(self, request):
        qs = FiscalYear.objects.filter(is_deleted=False, company_id=_company(request))
        return success_response(FiscalYearSerializer(qs, many=True).data)

    def post(self, request):
        d = request.data
        obj = FiscalYear.objects.create(
            company_id=_company(request), code=d["code"], name=d["name"],
            date_start=d["date_start"], date_end=d["date_end"], created_by=request.user)
        return created_response(FiscalYearSerializer(obj).data)


class PeriodListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.period.view", "POST": "accounting.period.manage"}

    def get(self, request):
        qs = AccountingPeriod.objects.filter(is_deleted=False, company_id=_company(request))
        fy = request.query_params.get("fiscal_year")
        if fy:
            qs = qs.filter(fiscal_year_id=fy)
        return success_response(AccountingPeriodSerializer(qs, many=True).data)

    def post(self, request):
        d = request.data
        obj = AccountingPeriod.objects.create(
            company_id=_company(request), fiscal_year_id=d["fiscal_year"], code=d["code"],
            name=d["name"], date_start=d["date_start"], date_end=d["date_end"], created_by=request.user)
        return created_response(AccountingPeriodSerializer(obj).data)


class PeriodCloseView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "accounting.period.manage"}

    def post(self, request, pk):
        o = AccountingPeriod.objects.filter(is_deleted=False, company_id=_company(request), id=pk).first()
        if not o:
            return error_response(_("Introuvable."), status_code=404)
        if o.state != "open":
            return error_response(_("La période n'est pas ouverte."))
        o.state = "closed"
        o.updated_by = request.user
        o.save(update_fields=["state", "updated_by", "updated_at"])
        return success_response(AccountingPeriodSerializer(o).data)

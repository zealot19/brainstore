from decimal import Decimal
from django.utils.translation import gettext_lazy as _
from rest_framework.views import APIView
from apps.core.permissions import IsAuthenticated, HasModulePermission
from apps.core.responses import success_response, created_response, error_response
from apps.core.exceptions import ApplicationError
from .models import Account, Journal, FiscalYear, AccountingPeriod, Partner, JournalEntry
from .serializers import (AccountSerializer, JournalSerializer,
                          FiscalYearSerializer, AccountingPeriodSerializer,
                          PartnerSerializer, JournalEntrySerializer)
from .services.accounting_service import AccountingService, EntryRequest, LineRequest


def _company(request):
    return getattr(request.user, "company_id", None)


class AccountListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.account.view", "POST": "accounting.account.create"}

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
    permission_map = {"GET": "accounting.account.view", "PATCH": "accounting.account.update",
                      "PUT": "accounting.account.update", "DELETE": "accounting.account.delete"}

    def _get(self, request, pk):
        return Account.objects.filter(is_deleted=False, company_id=_company(request), id=pk).first()

    def get(self, request, pk):
        o = self._get(request, pk)
        return success_response(AccountSerializer(o).data) if o else error_response(_("Élément introuvable : il a peut-être été supprimé ou déplacé."), status_code=404)

    def patch(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response(_("Élément introuvable : il a peut-être été supprimé ou déplacé."), status_code=404)
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
            return error_response(_("Élément introuvable : il a peut-être été supprimé ou déplacé."), status_code=404)
        o.is_deleted = True
        o.updated_by = request.user
        o.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return success_response(message=_("Compte supprimé."))


class JournalListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.journal.view", "POST": "accounting.journal.create"}

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
    permission_map = {"GET": "accounting.journal.view", "PATCH": "accounting.journal.update",
                      "PUT": "accounting.journal.update", "DELETE": "accounting.journal.delete"}

    def _get(self, request, pk):
        return Journal.objects.filter(is_deleted=False, company_id=_company(request), id=pk).first()

    def get(self, request, pk):
        o = self._get(request, pk)
        return success_response(JournalSerializer(o).data) if o else error_response(_("Élément introuvable : il a peut-être été supprimé ou déplacé."), status_code=404)

    def patch(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response(_("Élément introuvable : il a peut-être été supprimé ou déplacé."), status_code=404)
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
    permission_map = {"GET": "accounting.fiscalyear.view", "POST": "accounting.fiscalyear.create"}

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
    permission_map = {"GET": "accounting.period.view", "POST": "accounting.period.create"}

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
            return error_response(_("Élément introuvable : il a peut-être été supprimé ou déplacé."), status_code=404)
        if o.state != "open":
            return error_response(_("La période n'est pas ouverte."))
        o.state = "closed"
        o.updated_by = request.user
        o.save(update_fields=["state", "updated_by", "updated_at"])
        return success_response(AccountingPeriodSerializer(o).data)


class PartnerListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.partner.view", "POST": "accounting.partner.create"}

    def get(self, request):
        qs = Partner.objects.filter(is_deleted=False, company_id=_company(request))
        ptype = request.query_params.get("type")
        if ptype:
            qs = qs.filter(partner_type=ptype)
        term = request.query_params.get("search")
        if term:
            qs = qs.filter(name__icontains=term)
        return success_response(PartnerSerializer(qs.order_by("name"), many=True).data)

    def post(self, request):
        d = request.data
        obj = Partner.objects.create(
            company_id=_company(request), partner_type=d.get("partner_type", "other"),
            name=d["name"], source_model=d.get("source_model", ""), source_id=d.get("source_id"),
            note=d.get("note", ""), created_by=request.user)
        return created_response(PartnerSerializer(obj).data)


class PartnerDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.partner.view", "PATCH": "accounting.partner.update", "DELETE": "accounting.partner.delete"}

    def _get(self, request, pk):
        return Partner.objects.filter(is_deleted=False, company_id=_company(request), id=pk).first()

    def get(self, request, pk):
        o = self._get(request, pk)
        return success_response(PartnerSerializer(o).data) if o else error_response(_("Élément introuvable : il a peut-être été supprimé ou déplacé."), status_code=404)

    def patch(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response(_("Élément introuvable : il a peut-être été supprimé ou déplacé."), status_code=404)
        for f in ("partner_type", "name", "source_model", "active", "note"):
            if f in request.data:
                setattr(o, f, request.data[f])
        o.updated_by = request.user
        o.save()
        return success_response(PartnerSerializer(o).data)

    def delete(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response(_("Élément introuvable : il a peut-être été supprimé ou déplacé."), status_code=404)
        o.is_deleted = True
        o.updated_by = request.user
        o.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return success_response(message=_("Partenaire supprimé."))


class EntryListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.entry.view", "POST": "accounting.entry.create"}

    def get(self, request):
        qs = JournalEntry.objects.filter(is_deleted=False, company_id=_company(request)).select_related("journal")
        for param, fieldname in (("journal", "journal_id"), ("period", "period_id"), ("state", "state")):
            val = request.query_params.get(param)
            if val:
                qs = qs.filter(**{fieldname: val})
        if request.query_params.get("date_from"):
            qs = qs.filter(date__gte=request.query_params["date_from"])
        if request.query_params.get("date_to"):
            qs = qs.filter(date__lte=request.query_params["date_to"])
        return success_response(JournalEntrySerializer(qs.prefetch_related("lines"), many=True).data)

    def post(self, request):
        d = request.data
        lines = [LineRequest(account_code=str(ln.get("account")), label=ln.get("label", ""),
                             debit=Decimal(str(ln.get("debit") or 0)), credit=Decimal(str(ln.get("credit") or 0)),
                             partner_id=ln.get("partner")) for ln in d.get("lines", [])]
        req = EntryRequest(company_id=_company(request), journal_code=str(d.get("journal")), date=d.get("date"),
                           label=d.get("label", ""), reference=d.get("reference", ""),
                           entry_type=d.get("entry_type", "manual"), partner_id=d.get("partner"), lines=lines)
        try:
            entry = AccountingService.create_entry(req, created_by=request.user)
        except ApplicationError as e:
            return error_response(str(e.message))
        return created_response(JournalEntrySerializer(entry).data)


class EntryDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.entry.view", "PATCH": "accounting.entry.create", "DELETE": "accounting.entry.create"}

    def _get(self, request, pk):
        return JournalEntry.objects.filter(is_deleted=False, company_id=_company(request), id=pk).first()

    def get(self, request, pk):
        o = self._get(request, pk)
        return success_response(JournalEntrySerializer(o).data) if o else error_response(_("Élément introuvable : il a peut-être été supprimé ou déplacé."), status_code=404)

    def patch(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response(_("Élément introuvable : il a peut-être été supprimé ou déplacé."), status_code=404)
        if o.state != "draft":
            return error_response(_("Une pièce validée est immuable."))
        for f in ("label", "reference"):
            if f in request.data:
                setattr(o, f, request.data[f])
        o.updated_by = request.user
        o.save()
        return success_response(JournalEntrySerializer(o).data)

    def delete(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response(_("Élément introuvable : il a peut-être été supprimé ou déplacé."), status_code=404)
        if o.state != "draft":
            return error_response(_("Seule une pièce en brouillon peut être supprimée."))
        o.is_deleted = True
        o.updated_by = request.user
        o.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return success_response(message=_("Pièce supprimée."))


class EntryPostView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "accounting.entry.post"}

    def post(self, request, pk):
        o = JournalEntry.objects.filter(is_deleted=False, company_id=_company(request), id=pk).first()
        if not o:
            return error_response(_("Élément introuvable : il a peut-être été supprimé ou déplacé."), status_code=404)
        try:
            entry = AccountingService.post_entry(o.id, posted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e.message))
        return success_response(JournalEntrySerializer(entry).data)


class EntryCancelView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "accounting.entry.cancel"}

    def post(self, request, pk):
        o = JournalEntry.objects.filter(is_deleted=False, company_id=_company(request), id=pk).first()
        if not o:
            return error_response(_("Élément introuvable : il a peut-être été supprimé ou déplacé."), status_code=404)
        try:
            reversal = AccountingService.cancel_entry(o.id, reason=request.data.get("reason", ""), cancelled_by=request.user)
        except ApplicationError as e:
            return error_response(str(e.message))
        return success_response(JournalEntrySerializer(reversal).data)

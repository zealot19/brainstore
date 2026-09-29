from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.core.permissions import IsAuthenticated, HasModulePermission
from apps.core.responses import success_response, created_response, error_response, no_content_response
from apps.core.pagination import StandardResultsSetPagination
from apps.core.exceptions import ApplicationError

from apps.treasury import selectors, services
from apps.core.agency_scope import user_agency_ids
from apps.treasury.models import CashRegister, BankAccount, CashSession, Transaction, Transfer
from apps.treasury.serializers import (
    CashRegisterReadSerializer, CashRegisterWriteSerializer, CashRegisterUpdateSerializer,
    BankAccountReadSerializer, BankAccountWriteSerializer, BankAccountUpdateSerializer,
    CashSessionReadSerializer, OpenSessionSerializer, CloseSessionSerializer,
    ScheduleSessionSerializer, OpenScheduledSerializer, ExtendSessionSerializer, GuichetierSerializer,
    TransactionReadSerializer, TransactionWriteSerializer,
    TransferReadSerializer, TransferWriteSerializer,
    TreasuryStatsSerializer,
    IncomeRowSerializer, OtherIncomeWriteSerializer, VoyageIncomeWriteSerializer,
    DenominationSerializer, CashCountSerializer,
)


_PDF_UNAVAILABLE = ("Génération PDF indisponible : le moteur WeasyPrint n'est pas configuré sur ce serveur "
                    "(librairies Pango/Cairo manquantes). Contactez l'administrateur.")


def _company(request):
    return request.user.company


# ── Stats ──────────────────────────────────────────────────────────────────────

class TreasuryStatsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.dashboard.view"}

    def get(self, request):
        stats = selectors.get_treasury_stats(_company(request).id,
                                             agency_ids=user_agency_ids(request.user))
        return Response(TreasuryStatsSerializer(stats).data)


class TreasurySeriesView(APIView):
    """Série journalière recettes/dépenses pour les graphiques du tableau de bord."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.dashboard.view"}

    def get(self, request):
        try:
            days = int(request.query_params.get("days", 14))
        except (TypeError, ValueError):
            days = 14
        return Response(selectors.get_treasury_series(_company(request).id, days,
                                                      agency_ids=user_agency_ids(request.user)))


# ── Cash registers ─────────────────────────────────────────────────────────────

class CashRegisterListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.register.view", "POST": "treasury.register.manage"}

    def get(self, request):
        qs = selectors.list_cash_registers(
            _company(request).id,
            active_only=request.query_params.get("active") == "true",
            agency_scope=user_agency_ids(request.user),
        )
        return Response(CashRegisterReadSerializer(qs, many=True).data)

    def post(self, request):
        company = _company(request)
        ser = CashRegisterWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data
        terminal = responsible = None
        if d.get("terminal_id"):
            from apps.transport_config.models import Terminal
            try:
                terminal = Terminal.objects.get(id=d["terminal_id"], company=company, is_deleted=False)
            except Terminal.DoesNotExist:
                return Response({"detail": "Point de service introuvable."}, status=status.HTTP_404_NOT_FOUND)
        if d.get("responsible_id"):
            from django.contrib.auth import get_user_model
            try:
                responsible = get_user_model().objects.get(id=d["responsible_id"])
            except Exception:
                return Response({"detail": "Utilisateur introuvable."}, status=status.HTTP_404_NOT_FOUND)
        reg = services.create_cash_register(
            company=company, name=d["name"], kind=d["kind"], terminal=terminal, responsible=responsible,
            opening_balance=d.get("opening_balance", 0),
            account_id=d.get("account_id"), journal_id=d.get("journal_id"),
            agency_id=d.get("agency_id"), manager_ids=d.get("manager_ids") or [],
            notes=d.get("notes", ""), created_by=request.user,
        )
        return Response(CashRegisterReadSerializer(reg).data, status=status.HTTP_201_CREATED)


class CashRegisterDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.register.view", "PATCH": "treasury.register.manage", "DELETE": "treasury.register.manage"}

    def _get(self, request, register_id):
        return selectors.get_cash_register(register_id, _company(request).id)

    def get(self, request, register_id):
        obj = self._get(request, register_id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(CashRegisterReadSerializer(obj).data)

    def patch(self, request, register_id):
        obj = self._get(request, register_id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        ser = CashRegisterUpdateSerializer(data=request.data, partial=True)
        ser.is_valid(raise_exception=True)
        obj = services.update_cash_register(obj, updated_by=request.user, **ser.validated_data)
        return Response(CashRegisterReadSerializer(selectors.get_cash_register(obj.id, _company(request).id)).data)

    def delete(self, request, register_id):
        obj = self._get(request, register_id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            services.delete_cash_register(obj, deleted_by=request.user)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_204_NO_CONTENT)


# ── Bank accounts ──────────────────────────────────────────────────────────────

class BankAccountListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.bank.view", "POST": "treasury.bank.manage"}

    def get(self, request):
        qs = selectors.list_bank_accounts(
            _company(request).id,
            active_only=request.query_params.get("active") == "true",
        )
        return Response(BankAccountReadSerializer(qs, many=True).data)

    def post(self, request):
        ser = BankAccountWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data
        acc = services.create_bank_account(
            company=_company(request), created_by=request.user, **d
        )
        return Response(BankAccountReadSerializer(acc).data, status=status.HTTP_201_CREATED)


class BankAccountDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.bank.view", "PATCH": "treasury.bank.manage", "DELETE": "treasury.bank.manage"}

    def _get(self, request, account_id):
        return selectors.get_bank_account(account_id, _company(request).id)

    def get(self, request, account_id):
        obj = self._get(request, account_id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(BankAccountReadSerializer(obj).data)

    def patch(self, request, account_id):
        obj = self._get(request, account_id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        ser = BankAccountUpdateSerializer(data=request.data, partial=True)
        ser.is_valid(raise_exception=True)
        obj = services.update_bank_account(obj, updated_by=request.user, **ser.validated_data)
        return Response(BankAccountReadSerializer(obj).data)

    def delete(self, request, account_id):
        obj = self._get(request, account_id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            services.delete_bank_account(obj, deleted_by=request.user)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_204_NO_CONTENT)


# ── Sessions ───────────────────────────────────────────────────────────────────

class CashSessionListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.session.view"}

    def get(self, request):
        params = request.query_params
        qs = selectors.list_sessions(
            _company(request).id,
            register_id=params.get("register_id"),
            status=params.get("status"),
            date_from=params.get("date_from"),
            date_to=params.get("date_to"),
            agency_scope=user_agency_ids(request.user),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(CashSessionReadSerializer(page, many=True).data)


class MyActiveSessionView(APIView):
    """Session de caisse ouverte ASSIGNÉE à l'utilisateur courant, ou null.
    Alimente le minuteur de la barre de navigation : il n'apparaît que chez le
    guichetier à qui la session a été assignée — ni l'admin, ni le gestionnaire
    qui l'a ouverte. Auto-limitée à l'appelant ; pas de permission caisse requise."""
    permission_classes = [IsAuthenticated, HasModulePermission]

    def get(self, request):
        from django.utils import timezone
        from apps.treasury.models import CashSession
        now = timezone.now()
        # La session reste visible même après l'heure de fin prévue : c'est là que le
        # guichetier fait son billetage (les ventes, elles, sont bloquées à part par
        # get_open_session_for_user). Le fanion needs_billetage pilote le bouton.
        session = (CashSession.objects
                   .filter(assigned_to=request.user, company_id=_company(request).id,
                           status=CashSession.Status.OPEN, is_deleted=False)
                   .order_by("-opened_at").first())
        if not session:
            return Response({"data": None})
        data = CashSessionReadSerializer(session).data
        # Solde théorique « maintenant » (fond + recettes − dépenses + transferts),
        # affiché à côté du minuteur dans l'en-tête.
        from apps.treasury.services.expense_shared import principale_available_cash
        data["current_balance"] = str(principale_available_cash(session))
        # Fin de poste : session ouverte dont l'heure de fin prévue est dépassée → billetage.
        data["needs_billetage"] = bool(session.scheduled_end and session.scheduled_end <= now)
        return Response({"data": data})


class OpenSessionView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "treasury.session.manage"}

    def post(self, request):
        company = _company(request)
        ser = OpenSessionSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data
        reg = selectors.get_cash_register(d["cash_register_id"], company.id)
        if not reg:
            return Response({"detail": "Cash register not found."}, status=status.HTTP_404_NOT_FOUND)
        try:
            session = services.open_session(
                company=company, cash_register=reg,
                opening_balance=d.get("opening_balance"),
                name=d.get("name", ""),
                notes=d.get("notes", ""),
                created_by=request.user,
            )
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(CashSessionReadSerializer(session).data, status=status.HTTP_201_CREATED)


class CloseSessionView(APIView):
    # La clôture appartient au chef d'agence (gestionnaire de la caisse) : elle exige
    # treasury.session.manage, comme l'ouverture/suspension. Le guichetier (opérateur)
    # ne peut plus clôturer.
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "treasury.session.manage"}

    def post(self, request, session_id):
        company = _company(request)
        session = selectors.get_session(session_id, company.id)
        if not session:
            return Response(status=status.HTTP_404_NOT_FOUND)
        ser = CloseSessionSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            session = services.close_session(
                session,
                closing_balance=ser.validated_data.get("closing_balance"),
                closing_count=ser.validated_data.get("closing_count") or [],
                justification_reason=ser.validated_data.get("justification_reason", ""),
                justification_note=ser.validated_data.get("justification_note", ""),
                notes=ser.validated_data.get("notes", ""),
                destination_cash_register_id=ser.validated_data.get("destination_cash_register_id"),
                updated_by=request.user,
            )
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(CashSessionReadSerializer(selectors.get_session(session.id, company.id)).data)


class GuichetierListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.session.manage"}

    def get(self, request):
        company = _company(request)
        register_id = request.query_params.get("register_id")
        agency_id = request.query_params.get("agency_id")
        if register_id and not agency_id:
            reg = selectors.get_cash_register(register_id, company.id)
            agency_id = reg.agency_id if reg else None
        users = selectors.list_guichetiers(company.id, agency_id=agency_id)
        return success_response(GuichetierSerializer(users, many=True).data)


class ScheduleSessionView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "treasury.session.manage"}

    def post(self, request):
        from django.contrib.auth import get_user_model
        company = _company(request)
        ser = ScheduleSessionSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data
        reg = selectors.get_cash_register(d["cash_register_id"], company.id)
        if not reg:
            return error_response("Caisse introuvable.", status_code=status.HTTP_404_NOT_FOUND)
        guichetier = None
        if d.get("assigned_to_id"):
            guichetier = get_user_model().objects.filter(
                id=d["assigned_to_id"], company_id=company.id, is_active=True).first()
            if not guichetier:
                return error_response("Guichetier introuvable.", status_code=status.HTTP_404_NOT_FOUND)
        try:
            session = services.schedule_session(
                company=company, cash_register=reg, assigned_to=guichetier,
                scheduled_start=d.get("scheduled_start"), scheduled_end=d.get("scheduled_end"),
                name=d.get("name", ""), created_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return Response(CashSessionReadSerializer(session).data, status=status.HTTP_201_CREATED)


class OpenScheduledSessionView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "treasury.session.manage"}

    def post(self, request, session_id):
        company = _company(request)
        session = selectors.get_session(session_id, company.id)
        if not session:
            return Response(status=status.HTTP_404_NOT_FOUND)
        ser = OpenScheduledSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            session = services.open_scheduled_session(
                session, opening_balance=ser.validated_data.get("opening_balance"),
                updated_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return Response(CashSessionReadSerializer(selectors.get_session(session.id, company.id)).data)


class _SessionActionView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "treasury.session.manage"}
    action = None

    def post(self, request, session_id):
        company = _company(request)
        session = selectors.get_session(session_id, company.id)
        if not session:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            fn = getattr(services, self.action)
            fn(session, updated_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return Response(CashSessionReadSerializer(selectors.get_session(session.id, company.id)).data)


class SuspendSessionView(_SessionActionView):
    action = "suspend_session"


class ResumeSessionView(_SessionActionView):
    action = "resume_session"


class ExtendSessionView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "treasury.session.manage"}

    def post(self, request, session_id):
        company = _company(request)
        session = selectors.get_session(session_id, company.id)
        if not session:
            return Response(status=status.HTTP_404_NOT_FOUND)
        ser = ExtendSessionSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            services.extend_session(session, scheduled_end=ser.validated_data["scheduled_end"],
                                    updated_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return Response(CashSessionReadSerializer(selectors.get_session(session.id, company.id)).data)


class SessionCountsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.session.view"}

    def get(self, request, session_id):
        session = selectors.get_session(session_id, _company(request).id)
        if not session:
            return Response(status=status.HTTP_404_NOT_FOUND)
        counts = session.counts.filter(is_deleted=False).prefetch_related("items").order_by("created_at")
        return success_response(CashCountSerializer(counts, many=True).data)


class SessionBilletageView(APIView):
    """Billetage de fin de poste par le guichetier assigné (session ouverte, heure de
    fin dépassée). Le gestionnaire clôture ensuite en validant ce comptage."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.session.operate", "POST": "treasury.session.operate"}

    def get(self, request, session_id):
        from apps.treasury.models import CurrencyDenomination
        session = selectors.get_session(session_id, _company(request).id)
        if not session:
            return Response(status=status.HTTP_404_NOT_FOUND)
        denoms = (CurrencyDenomination.objects
                  .filter(company=_company(request), is_active=True, is_deleted=False)
                  .order_by("-value"))
        last = (session.counts.filter(kind="closing", is_deleted=False)
                .prefetch_related("items").order_by("-created_at").first())
        return success_response({
            "denominations": DenominationSerializer(denoms, many=True).data,
            "count": CashCountSerializer(last).data if last else None,
        })

    def post(self, request, session_id):
        session = selectors.get_session(session_id, _company(request).id)
        if not session:
            return Response(status=status.HTTP_404_NOT_FOUND)
        from apps.treasury.services.billetage import record_shift_billetage
        try:
            count, _total = record_shift_billetage(
                session, items=request.data.get("items") or [], user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(CashCountSerializer(count).data)


class SessionReportView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.session.view"}

    def get(self, request, session_id):
        session = selectors.get_session(session_id, _company(request).id)
        if not session:
            return Response(status=status.HTTP_404_NOT_FOUND)
        from apps.treasury.services.session_report import build_session_report
        return success_response(build_session_report(session))


class CashSessionDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.session.view"}

    def get(self, request, session_id):
        obj = selectors.get_session(session_id, _company(request).id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(CashSessionReadSerializer(obj).data)


# ── Transactions ───────────────────────────────────────────────────────────────

class TransactionListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.transaction.view", "POST": "treasury.transaction.manage"}

    def get(self, request):
        params = request.query_params
        qs = selectors.list_transactions(
            _company(request).id,
            transaction_type=params.get("type"),
            category=params.get("category"),
            account_type=params.get("account_type"),
            session_id=params.get("session_id"),
            bank_account_id=params.get("bank_account_id"),
            date_from=params.get("date_from"),
            date_to=params.get("date_to"),
            trip_id=params.get("trip_id"),
            agency_scope=user_agency_ids(request.user),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(TransactionReadSerializer(page, many=True).data)

    def post(self, request):
        company = _company(request)
        ser = TransactionWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data

        cash_session = bank_account = trip = booking = parcel = None
        if d.get("cash_session_id"):
            cash_session = selectors.get_session(d["cash_session_id"], company.id)
            if not cash_session:
                return Response({"detail": "Session not found."}, status=status.HTTP_404_NOT_FOUND)
        if d.get("bank_account_id"):
            bank_account = selectors.get_bank_account(d["bank_account_id"], company.id)
            if not bank_account:
                return Response({"detail": "Bank account not found."}, status=status.HTTP_404_NOT_FOUND)

        try:
            txn = services.create_transaction(
                company=company,
                transaction_type=d["transaction_type"], category=d["category"],
                account_type=d["account_type"], amount=d["amount"],
                payment_mode=d["payment_mode"],
                description=d.get("description", ""),
                transaction_date=d.get("transaction_date"),
                cash_session=cash_session, bank_account=bank_account,
                created_by=request.user,
            )
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(
            TransactionReadSerializer(selectors.get_transaction(txn.id, company.id)).data,
            status=status.HTTP_201_CREATED,
        )


class TransactionDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.transaction.view", "DELETE": "treasury.transaction.manage"}

    def get(self, request, txn_id):
        obj = selectors.get_transaction(txn_id, _company(request).id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(TransactionReadSerializer(obj).data)

    def delete(self, request, txn_id):
        obj = selectors.get_transaction(txn_id, _company(request).id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            services.delete_transaction(obj, deleted_by=request.user)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_204_NO_CONTENT)


# ── Transfers ──────────────────────────────────────────────────────────────────

class TransferListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.transfer.view", "POST": "treasury.transfer.manage"}

    def get(self, request):
        params = request.query_params
        qs = selectors.list_transfers(
            _company(request).id,
            date_from=params.get("date_from"),
            date_to=params.get("date_to"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(TransferReadSerializer(page, many=True).data)

    def post(self, request):
        company = _company(request)
        ser = TransferWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data

        def _reg(uid):
            return selectors.get_cash_register(uid, company.id) if uid else None

        def _bank(uid):
            return selectors.get_bank_account(uid, company.id) if uid else None

        from_reg  = _reg(d.get("from_cash_register_id"))
        from_bank = _bank(d.get("from_bank_account_id"))
        to_reg    = _reg(d.get("to_cash_register_id"))
        to_bank   = _bank(d.get("to_bank_account_id"))

        try:
            transfer = services.create_transfer(
                company=company, amount=d["amount"],
                description=d.get("description", ""),
                transfer_date=d.get("transfer_date"),
                from_cash_register=from_reg, from_bank_account=from_bank,
                to_cash_register=to_reg, to_bank_account=to_bank,
                created_by=request.user,
            )
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(
            TransferReadSerializer(selectors.get_transfer(transfer.id, company.id)).data,
            status=status.HTTP_201_CREATED,
        )


class TransferDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.transfer.view"}

    def get(self, request, transfer_id):
        obj = selectors.get_transfer(transfer_id, _company(request).id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(TransferReadSerializer(obj).data)


# ══════════════════════════════════════════════════════════════════════════════
# DÉPENSES (générales + voyage) — module Trésorerie
# ══════════════════════════════════════════════════════════════════════════════

from apps.treasury.selectors import expenses as expense_selectors  # noqa: E402
from apps.treasury.services import general_expense_services as gx  # noqa: E402
from apps.voyages_config.models import ExpenseType  # noqa: E402
from apps.system_config.models import Agency  # noqa: E402
from apps.treasury.serializers import (  # noqa: E402
    GeneralExpenseReadSerializer, GeneralExpenseWriteSerializer, VoyageExpenseRowSerializer)


class GeneralExpenseListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.expense.view", "POST": "treasury.expense.manage"}

    def get(self, request):
        p = request.query_params
        company_id = _company(request).id
        scope = user_agency_ids(request.user)
        qs = expense_selectors.list_general_expenses(
            company_id, agency_scope=scope,
            status=p.get("status"), date_from=p.get("date_from"), date_to=p.get("date_to"))
        rows = list(GeneralExpenseReadSerializer(qs, many=True).data)
        # Fusionne les remboursements (mouvements refund) sauf si on filtre sur un statut « à décaisser ».
        if p.get("status") != "unpaid":
            refunds = expense_selectors.list_refunds(
                company_id, agency_scope=scope,
                date_from=p.get("date_from"), date_to=p.get("date_to"))
            rows += [expense_selectors.refund_row(t) for t in refunds]
            rows.sort(key=lambda r: r["expense_date"], reverse=True)
        page = StandardResultsSetPagination()
        return page.get_paginated_response(page.paginate_queryset(rows, request))

    def post(self, request):
        ser = GeneralExpenseWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data
        company = _company(request)
        et = ExpenseType.objects.filter(company=company, id=d["expense_type_id"], is_deleted=False).first()
        if not et:
            return error_response("Type de dépense introuvable.", status_code=404)
        agency = None
        if d.get("agency_id"):
            agency = Agency.objects.filter(company=company, id=d["agency_id"], is_deleted=False).first()
        try:
            e = gx.create_general_expense(company=company, expense_type=et, label=d["label"],
                                          amount=d["amount"], expense_date=d.get("expense_date"),
                                          agency=agency, created_by=request.user)
        except ApplicationError as ex:
            return error_response(str(ex))
        return created_response(GeneralExpenseReadSerializer(e).data)


class GeneralExpenseDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.expense.view", "PATCH": "treasury.expense.manage",
                      "DELETE": "treasury.expense.manage"}

    def _obj(self, request, pk):
        from apps.treasury.models import GeneralExpense
        return GeneralExpense.objects.filter(company=_company(request), id=pk, is_deleted=False).first()

    def get(self, request, pk):
        obj = self._obj(request, pk)
        return success_response(GeneralExpenseReadSerializer(obj).data) if obj else error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)

    def patch(self, request, pk):
        obj = self._obj(request, pk)
        if not obj:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        ser = GeneralExpenseWriteSerializer(data=request.data, partial=True)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data
        fields = {"label": d.get("label"), "amount": d.get("amount"), "expense_date": d.get("expense_date")}
        if "expense_type_id" in d:
            fields["expense_type"] = ExpenseType.objects.filter(company=obj.company, id=d["expense_type_id"]).first()
        if "agency_id" in d:
            fields["agency"] = Agency.objects.filter(company=obj.company, id=d["agency_id"]).first() if d.get("agency_id") else None
        try:
            gx.update_general_expense(obj, updated_by=request.user, **fields)
        except ApplicationError as ex:
            return error_response(str(ex))
        return success_response(GeneralExpenseReadSerializer(obj).data)

    def delete(self, request, pk):
        obj = self._obj(request, pk)
        if not obj:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        try:
            gx.delete_general_expense(obj, deleted_by=request.user)
        except ApplicationError as ex:
            return error_response(str(ex))
        return no_content_response()


class GeneralExpenseDisburseView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "treasury.expense.manage"}

    def post(self, request, pk):
        from apps.treasury.models import GeneralExpense, CashSession
        obj = GeneralExpense.objects.filter(company=_company(request), id=pk, is_deleted=False).first()
        if not obj:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        session = None
        sid = request.data.get("cash_session_id")
        if sid:
            session = CashSession.objects.filter(company=obj.company, id=sid,
                                                 status=CashSession.Status.OPEN, is_deleted=False).first()
        try:
            gx.disburse_general_expense(obj, user=request.user, cash_session=session)
        except ApplicationError as ex:
            return error_response(str(ex))
        return success_response(GeneralExpenseReadSerializer(obj).data)


class VoyageExpenseListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.expense.view"}

    def get(self, request):
        p = request.query_params
        qs = expense_selectors.list_voyage_expenses(
            _company(request).id, status=p.get("status"),
            date_from=p.get("date_from"), date_to=p.get("date_to"),
            agency_scope=user_agency_ids(request.user))
        page = StandardResultsSetPagination()
        return page.get_paginated_response(
            VoyageExpenseRowSerializer(page.paginate_queryset(qs, request), many=True).data)


class ExpenseDashboardView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.expense.view"}

    def get(self, request):
        return success_response(expense_selectors.expenses_dashboard(
            _company(request).id, agency_scope=user_agency_ids(request.user)))


class GeneralExpenseVoucherView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.expense.view"}

    def get(self, request, pk):
        from django.http import HttpResponse
        from apps.treasury.models import GeneralExpense
        from apps.treasury.expense_voucher import render_expense_voucher
        company = _company(request)
        e = GeneralExpense.objects.select_related(
            "expense_type", "agency", "cash_session__cash_register", "created_by", "updated_by"
        ).filter(company=company, id=pk, is_deleted=False).first()
        if not e:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        caisse = e.cash_session.cash_register.name if e.cash_session_id else None
        try:
            pdf = render_expense_voucher(
                company=company, ref=str(e.id)[:8].upper(), date=e.expense_date,
                type_name=e.expense_type.name, label=e.label, amount=e.amount,
                agency_name=e.agency.name if e.agency_id else None, caisse_label=caisse,
                status_label=e.get_status_display(),
                created_by=e.created_by.get_full_name() if e.created_by_id else None,
                disbursed_by=(e.updated_by.get_full_name() if e.updated_by_id else None) if e.status == "paid" else None,
                kind_label="Dépense générale")
        except (ImportError, OSError):
            return error_response(_PDF_UNAVAILABLE, status_code=503)
        resp = HttpResponse(pdf, content_type="application/pdf")
        resp["Content-Disposition"] = f'inline; filename="bon-depense-{str(e.id)[:8]}.pdf"'
        return resp


class VoyageExpenseVoucherView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.expense.view"}

    def get(self, request, pk):
        from django.http import HttpResponse
        from apps.voyages_trips.models import TripExpense
        from apps.treasury.expense_voucher import render_expense_voucher
        company = _company(request)
        e = TripExpense.objects.select_related(
            "expense_type", "trip", "cash_session__cash_register", "created_by", "updated_by"
        ).filter(trip__company=company, id=pk, is_deleted=False).first()
        if not e:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        caisse = e.cash_session.cash_register.name if e.cash_session_id else None
        try:
            pdf = render_expense_voucher(
                company=company, ref=e.trip.number or str(e.id)[:8].upper(), date=e.date,
                type_name=e.expense_type.name, label=e.description or e.expense_type.name, amount=e.amount,
                agency_name=None, caisse_label=caisse, status_label=e.get_status_display(),
                created_by=e.created_by.get_full_name() if e.created_by_id else None,
                disbursed_by=(e.updated_by.get_full_name() if e.updated_by_id else None) if e.status == "paid" else None,
                kind_label="Dépense voyage")
        except (ImportError, OSError):
            return error_response(_PDF_UNAVAILABLE, status_code=503)
        resp = HttpResponse(pdf, content_type="application/pdf")
        resp["Content-Disposition"] = f'inline; filename="bon-depense-voyage-{str(e.id)[:8]}.pdf"'
        return resp


# ── Recettes (income) ────────────────────────────────────────────────────────

from apps.treasury.selectors import incomes as income_selectors  # noqa: E402


class _IncomeListBase(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.income.view"}
    category = None

    def get(self, request):
        p = request.query_params
        qs = income_selectors.list_income(
            _company(request).id, category=self.category,
            agency_scope=user_agency_ids(request.user),
            date_from=p.get("date_from"), date_to=p.get("date_to"),
            payment_mode=p.get("payment_mode"))
        page = StandardResultsSetPagination()
        return page.get_paginated_response(
            IncomeRowSerializer(page.paginate_queryset(qs, request), many=True).data)


class IncomeVoyageListView(_IncomeListBase):
    category = Transaction.Category.TICKET_SALES
    permission_map = {"GET": "treasury.income.view", "POST": "treasury.income.manage"}

    def post(self, request):
        ser = VoyageIncomeWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data
        company = _company(request)
        session = None
        if d.get("cash_session_id"):
            session = CashSession.objects.filter(
                company=company, id=d["cash_session_id"],
                status=CashSession.Status.OPEN, is_deleted=False).first()
        vehicle = None
        if d.get("vehicle_id"):
            from apps.fleet.models import Vehicle
            vehicle = Vehicle.objects.filter(company=company, id=d["vehicle_id"], is_deleted=False).first()
        desc = d["title"] + (f" — {d['notes']}" if d.get("notes") else "")
        try:
            txn = services.record_voyage_income(
                company, amount=d["amount"], payment_mode=d["payment_mode"],
                description=desc, vehicle=vehicle, transaction_date=d.get("date"),
                user=request.user, cash_session=session)
        except ApplicationError as ex:
            return error_response(str(ex))
        return created_response(IncomeRowSerializer(txn).data)


class IncomeParcelListView(_IncomeListBase):
    category = Transaction.Category.PARCEL_SHIPPING


class IncomeBaggageListView(_IncomeListBase):
    category = Transaction.Category.BAGGAGE


class IncomeDeliveryListView(_IncomeListBase):
    category = Transaction.Category.PARCEL_DELIVERY


class IncomeOtherListView(_IncomeListBase):
    category = Transaction.Category.OTHER_INCOME
    permission_map = {"GET": "treasury.income.view", "POST": "treasury.income.manage"}

    def post(self, request):
        ser = OtherIncomeWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data
        company = _company(request)
        session = None
        if d.get("cash_session_id"):
            session = CashSession.objects.filter(
                company=company, id=d["cash_session_id"],
                status=CashSession.Status.OPEN, is_deleted=False).first()
        try:
            txn = services.record_other_income(
                company, amount=d["amount"], payment_mode=d["payment_mode"],
                description=d.get("description", ""), user=request.user,
                cash_session=session)
        except ApplicationError as ex:
            return error_response(str(ex))
        return created_response(IncomeRowSerializer(txn).data)


class IncomeDashboardView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.income.view"}

    def get(self, request):
        return success_response(income_selectors.income_dashboard(
            _company(request).id, agency_scope=user_agency_ids(request.user)))


class IncomeReceiptView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.income.view"}

    def get(self, request, pk):
        from django.http import HttpResponse
        from apps.treasury.income_receipt import render_income_receipt
        company = _company(request)
        txn = Transaction.objects.select_related(
            "cash_session__cash_register__agency", "bank_account",
            "voyage_booking", "voyages_parcel", "voyages_baggage", "created_by"
        ).filter(company=company, id=pk, is_deleted=False,
                 transaction_type=Transaction.Type.INCOME).first()
        if not txn:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        row = IncomeRowSerializer(txn).data
        source_label = f"{txn.get_category_display()} {row['source_ref']}".strip()
        caisse = txn.cash_session.cash_register.name if txn.cash_session_id else None
        agency = (txn.cash_session.cash_register.agency.name
                  if txn.cash_session_id and txn.cash_session.cash_register.agency_id else None)
        try:
            pdf = render_income_receipt(
                company=company, ref=txn.reference or str(txn.id)[:8].upper(),
                date=txn.transaction_date, source_label=source_label,
                party=row["source_party"], amount=txn.amount,
                payment_label=txn.get_payment_mode_display(), caisse_label=caisse,
                agency_name=agency,
                created_by=txn.created_by.get_full_name() if txn.created_by_id else None,
                kind_label=f"Recette {txn.get_category_display()}")
        except (ImportError, OSError):
            return error_response(_PDF_UNAVAILABLE, status_code=503)
        resp = HttpResponse(pdf, content_type="application/pdf")
        resp["Content-Disposition"] = f'inline; filename="recu-recette-{str(txn.id)[:8]}.pdf"'
        return resp


# ── Moyens de paiement ──────────────────────────────────────────────────────

from apps.treasury.serializers import PaymentMethodReadSerializer, PaymentMethodWriteSerializer  # noqa: E402
from django.utils.text import slugify  # noqa: E402


class PaymentMethodListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.paymentmethod.view", "POST": "treasury.paymentmethod.manage"}

    def get(self, request):
        from apps.treasury.models import PaymentMethod
        qs = PaymentMethod.objects.filter(company=_company(request), is_deleted=False)
        if request.query_params.get("active") == "true":
            qs = qs.filter(is_active=True)
        return success_response(PaymentMethodReadSerializer(qs.order_by("name"), many=True).data)

    def post(self, request):
        from apps.treasury.models import PaymentMethod
        ser = PaymentMethodWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data
        company = _company(request)
        code = d.get("code") or slugify(d["name"])
        if PaymentMethod.objects.filter(company=company, code=code, is_deleted=False).exists():
            return error_response("Un moyen de paiement avec ce code existe déjà.")
        pm = PaymentMethod.objects.create(
            company=company, code=code, name=d["name"],
            requires_payment=d.get("requires_payment", True), mode=d.get("mode", "cash"),
            is_active=d.get("is_active", True), created_by=request.user)
        return created_response(PaymentMethodReadSerializer(pm).data)


class PaymentMethodDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.paymentmethod.view", "PATCH": "treasury.paymentmethod.manage",
                      "DELETE": "treasury.paymentmethod.manage"}

    def _obj(self, request, pk):
        from apps.treasury.models import PaymentMethod
        return PaymentMethod.objects.filter(company=_company(request), id=pk, is_deleted=False).first()

    def get(self, request, pk):
        obj = self._obj(request, pk)
        return success_response(PaymentMethodReadSerializer(obj).data) if obj else error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)

    def patch(self, request, pk):
        obj = self._obj(request, pk)
        if not obj:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        ser = PaymentMethodWriteSerializer(data=request.data, partial=True)
        ser.is_valid(raise_exception=True)
        for k, v in ser.validated_data.items():
            if k == "code" and obj.is_system:
                continue
            setattr(obj, k, v)
        obj.updated_by = request.user
        obj.save()
        return success_response(PaymentMethodReadSerializer(obj).data)

    def delete(self, request, pk):
        obj = self._obj(request, pk)
        if not obj:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        if obj.is_system:
            return error_response("Ce moyen de paiement système ne peut pas être supprimé (désactivez-le).")
        obj.soft_delete(user=request.user)
        return no_content_response()


from apps.treasury.serializers import RefundRateSerializer  # noqa: E402


class RefundRateView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.config.view", "PUT": "treasury.config.manage"}

    @staticmethod
    def _serialize(cfg):
        return {k: {"method": v["method"], "rate": str(v["rate"]), "amount": str(v["amount"])}
                for k, v in cfg.items()}

    def get(self, request):
        from apps.treasury.services.refund_config import get_refund_config
        return success_response(self._serialize(get_refund_config(_company(request))))

    def put(self, request):
        from apps.treasury.services.refund_config import (
            set_refund_rate, set_refund_config, get_refund_config)
        ser = RefundRateSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data
        company = _company(request)
        try:
            per_kind = {k: d[k] for k in ("ticket", "colis", "bagage") if k in d}
            if per_kind:
                set_refund_config(company, per_kind, user=request.user)
            elif d.get("rate") is not None:
                set_refund_rate(company, d["rate"], user=request.user)  # rétro-compat (taux plat)
        except ApplicationError as ex:
            return error_response(str(ex))
        return success_response(self._serialize(get_refund_config(company)))


# ── Coupures monétaires (billetage config) ──────────────────────────────────────

class DenominationListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.config.view", "POST": "treasury.config.manage"}

    def get(self, request):
        from apps.treasury.models import CurrencyDenomination
        qs = CurrencyDenomination.objects.filter(company=_company(request), is_deleted=False)\
            .select_related("currency").order_by("-value")
        return success_response(DenominationSerializer(qs, many=True).data)

    def post(self, request):
        from apps.core.models import Currency
        from apps.treasury.models import CurrencyDenomination
        company = _company(request)
        ser = DenominationSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data
        currency = d.get("currency") or Currency.objects.filter(code="XAF").first()
        if not currency:
            return error_response("Devise introuvable.")
        obj, created = CurrencyDenomination.objects.get_or_create(
            company=company, currency=currency, value=d["value"],
            defaults={"kind": d.get("kind", "banknote"),
                      "is_active": d.get("is_active", True),
                      "display_order": d.get("display_order", 0),
                      "created_by": request.user})
        if not created:
            return error_response("Cette coupure existe déjà.")
        return created_response(DenominationSerializer(obj).data)


class DenominationDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"PATCH": "treasury.config.manage", "DELETE": "treasury.config.manage"}

    def _get(self, request, pk):
        from apps.treasury.models import CurrencyDenomination
        return CurrencyDenomination.objects.filter(id=pk, company=_company(request), is_deleted=False).first()

    def patch(self, request, pk):
        obj = self._get(request, pk)
        if not obj:
            return error_response("Coupure introuvable.", status_code=status.HTTP_404_NOT_FOUND)
        for f in ("value", "kind", "is_active", "display_order"):
            if f in request.data:
                setattr(obj, f, request.data[f])
        obj.updated_by = request.user
        obj.save()
        return success_response(DenominationSerializer(obj).data)

    def delete(self, request, pk):
        obj = self._get(request, pk)
        if not obj:
            return error_response("Coupure introuvable.", status_code=status.HTTP_404_NOT_FOUND)
        obj.is_deleted = True; obj.updated_by = request.user
        obj.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return no_content_response()


# ── Remboursement par référence (guichet caisse) ─────────────────────────────────

def _serialize_refund_descriptor(d):
    return {
        **d,
        "amount_paid": str(d["amount_paid"]),
        "refund_rate": str(d["refund_rate"]),
        "refund_amount": str(d["refund_amount"]),
    }


class RefundLookupView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.transaction.view"}

    def get(self, request):
        reference = request.query_params.get("reference", "")
        desc = services.lookup_refundable(_company(request), reference)
        if not desc:
            return error_response("Aucun billet, colis ou bagage ne correspond à cette référence.",
                                  status_code=status.HTTP_404_NOT_FOUND)
        return success_response(_serialize_refund_descriptor(desc))


class RefundByReferenceView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "treasury.transaction.manage"}

    def post(self, request):
        kind = request.data.get("kind")
        obj_id = request.data.get("id")
        if not kind or not obj_id:
            return error_response("Référence à rembourser manquante.")
        try:
            services.refund_by_reference(_company(request), kind=kind, obj_id=obj_id, user=request.user)
        except ApplicationError as ex:
            return error_response(str(ex))
        return success_response({"detail": "Remboursement effectué."})

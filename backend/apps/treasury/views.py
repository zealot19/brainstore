from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.core.permissions import IsAuthenticated, HasModulePermission
from apps.core.pagination import StandardResultsSetPagination
from apps.core.exceptions import ApplicationError

from apps.treasury import selectors, services
from apps.treasury.models import CashRegister, BankAccount, CashSession, Transaction, Transfer
from apps.treasury.serializers import (
    CashRegisterReadSerializer, CashRegisterWriteSerializer, CashRegisterUpdateSerializer,
    BankAccountReadSerializer, BankAccountWriteSerializer, BankAccountUpdateSerializer,
    CashSessionReadSerializer, OpenSessionSerializer, CloseSessionSerializer,
    TransactionReadSerializer, TransactionWriteSerializer,
    TransferReadSerializer, TransferWriteSerializer,
    TreasuryStatsSerializer,
)


def _company(request):
    return request.user.company


# ── Stats ──────────────────────────────────────────────────────────────────────

class TreasuryStatsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.dashboard.view"}

    def get(self, request):
        stats = selectors.get_treasury_stats(_company(request).id)
        return Response(TreasuryStatsSerializer(stats).data)


# ── Cash registers ─────────────────────────────────────────────────────────────

class CashRegisterListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.register.view", "POST": "treasury.register.manage"}

    def get(self, request):
        qs = selectors.list_cash_registers(
            _company(request).id,
            active_only=request.query_params.get("active") == "true",
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
                return Response({"detail": "Terminal not found."}, status=status.HTTP_404_NOT_FOUND)
        if d.get("responsible_id"):
            from django.contrib.auth import get_user_model
            try:
                responsible = get_user_model().objects.get(id=d["responsible_id"])
            except Exception:
                return Response({"detail": "User not found."}, status=status.HTTP_404_NOT_FOUND)
        reg = services.create_cash_register(
            company=company, name=d["name"], terminal=terminal, responsible=responsible,
            opening_balance=d.get("opening_balance", 0),
            account_id=d.get("account_id"), journal_id=d.get("journal_id"),
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
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(CashSessionReadSerializer(page, many=True).data)


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
                notes=d.get("notes", ""),
                created_by=request.user,
            )
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(CashSessionReadSerializer(session).data, status=status.HTTP_201_CREATED)


class CloseSessionView(APIView):
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
                closing_balance=ser.validated_data["closing_balance"],
                notes=ser.validated_data.get("notes", ""),
                updated_by=request.user,
            )
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(CashSessionReadSerializer(selectors.get_session(session.id, company.id)).data)


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

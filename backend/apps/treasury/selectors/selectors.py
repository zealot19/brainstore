from datetime import timedelta

from django.db.models import Q, Sum, Count
from django.utils import timezone

from apps.treasury.models import CashRegister, BankAccount, CashSession, Transaction, Transfer
from apps.core.agency_scope import scope_by_agency
from apps.system_config.selectors.archiving import apply_archive_window


# ── Cash registers ─────────────────────────────────────────────────────────────

def _apply_agency_scope(qs, agency_scope, field):
    """Restreint `qs` aux agences de l'utilisateur. `agency_scope` accepte :
    - None → aucune restriction (admin institution) ;
    - un ensemble d'UUID (union des agences, cf. core.agency_scope.user_agency_ids) →
      filtre `field IN {…}` (ensemble vide → aucun résultat) ;
    - (héritage) le tuple (scoped, agency_id) → restreint à une seule agence.
    `field` = chemin ORM vers agency_id."""
    if agency_scope is None:
        return qs
    if isinstance(agency_scope, (set, frozenset)):
        return qs.filter(**{f"{field}__in": agency_scope}) if agency_scope else qs.none()
    if not agency_scope:
        return qs
    scoped, agency_id = agency_scope
    if not scoped:
        return qs
    return qs.filter(**{field: agency_id}) if agency_id else qs.none()


def list_cash_registers(company_id, *, active_only=False, agency_scope=None):
    qs = (CashRegister.objects
          .filter(company_id=company_id, is_deleted=False)
          .select_related("terminal__city", "responsible")
          .order_by("name"))
    if active_only:
        qs = qs.filter(is_active=True)
    return _apply_agency_scope(qs, agency_scope, "agency_id")


def get_cash_register(register_id, company_id):
    try:
        return (CashRegister.objects
                .select_related("terminal", "responsible")
                .get(id=register_id, company_id=company_id, is_deleted=False))
    except CashRegister.DoesNotExist:
        return None


# ── Bank accounts ──────────────────────────────────────────────────────────────

def list_bank_accounts(company_id, *, active_only=False):
    qs = (BankAccount.objects
          .filter(company_id=company_id, is_deleted=False)
          .order_by("bank_name"))
    if active_only:
        qs = qs.filter(is_active=True)
    return qs


def get_bank_account(account_id, company_id):
    try:
        return BankAccount.objects.get(id=account_id, company_id=company_id, is_deleted=False)
    except BankAccount.DoesNotExist:
        return None


# ── Cash sessions ──────────────────────────────────────────────────────────────

def get_active_session(register_id, company_id):
    # Une caisse est « occupée » tant qu'une session est ouverte OU suspendue.
    return (CashSession.objects
            .select_related("cash_register", "opened_by")
            .filter(cash_register_id=register_id, company_id=company_id,
                    status__in=[CashSession.Status.OPEN, CashSession.Status.SUSPENDED],
                    is_deleted=False)
            .first())


def list_sessions(company_id, *, register_id=None, status=None,
                  date_from=None, date_to=None, agency_scope=None):
    qs = (CashSession.objects
          .filter(company_id=company_id, is_deleted=False)
          .select_related("cash_register", "opened_by", "closed_by", "assigned_to")
          .order_by("-opened_at"))
    qs = _apply_agency_scope(qs, agency_scope, "cash_register__agency_id")
    if register_id:
        qs = qs.filter(cash_register_id=register_id)
    if status:
        qs = qs.filter(status=status)
    if date_from:
        qs = qs.filter(opened_at__date__gte=date_from)
    if date_to:
        qs = qs.filter(opened_at__date__lte=date_to)
    return qs


def get_session(session_id, company_id):
    try:
        return (CashSession.objects
                .select_related("cash_register", "opened_by", "closed_by", "assigned_to")
                .get(id=session_id, company_id=company_id, is_deleted=False))
    except CashSession.DoesNotExist:
        return None


# ── Transactions ───────────────────────────────────────────────────────────────

def list_transactions(company_id, *, transaction_type=None, category=None,
                      account_type=None, session_id=None, bank_account_id=None,
                      date_from=None, date_to=None, trip_id=None, agency_scope=None,
                      include_archived=False):
    qs = (Transaction.objects
          .filter(company_id=company_id, is_deleted=False)
          .select_related("cash_session__cash_register", "bank_account",
                          "trip", "booking", "parcel")
          .order_by("-transaction_date", "-created_at"))
    qs = _apply_agency_scope(qs, agency_scope, "agency_id")
    if transaction_type:
        qs = qs.filter(transaction_type=transaction_type)
    if category:
        qs = qs.filter(category=category)
    if account_type:
        qs = qs.filter(account_type=account_type)
    if session_id:
        qs = qs.filter(cash_session_id=session_id)
    if bank_account_id:
        qs = qs.filter(bank_account_id=bank_account_id)
    if date_from:
        qs = qs.filter(transaction_date__gte=date_from)
    if date_to:
        qs = qs.filter(transaction_date__lte=date_to)
    if trip_id:
        qs = qs.filter(trip_id=trip_id)
    qs = apply_archive_window(qs, date_field="transaction_date", company_id=company_id,
                              include_archived=include_archived)
    return qs


def get_transaction(txn_id, company_id):
    try:
        return (Transaction.objects
                .select_related("cash_session__cash_register", "bank_account",
                                "trip", "booking", "parcel")
                .get(id=txn_id, company_id=company_id, is_deleted=False))
    except Transaction.DoesNotExist:
        return None


# ── Transfers ──────────────────────────────────────────────────────────────────

def list_transfers(company_id, *, date_from=None, date_to=None):
    qs = (Transfer.objects
          .filter(company_id=company_id, is_deleted=False)
          .select_related("from_cash_register", "from_bank_account",
                          "to_cash_register", "to_bank_account",
                          "completed_by")
          .order_by("-transfer_date", "-created_at"))
    if date_from:
        qs = qs.filter(transfer_date__gte=date_from)
    if date_to:
        qs = qs.filter(transfer_date__lte=date_to)
    return qs


def get_transfer(transfer_id, company_id):
    try:
        return (Transfer.objects
                .select_related("from_cash_register", "from_bank_account",
                                "to_cash_register", "to_bank_account")
                .get(id=transfer_id, company_id=company_id, is_deleted=False))
    except Transfer.DoesNotExist:
        return None


# ── Stats ──────────────────────────────────────────────────────────────────────

def get_treasury_stats(company_id, agency_ids=None):
    today = timezone.now().date()
    txns = scope_by_agency(
        Transaction.objects.filter(company_id=company_id, is_deleted=False),
        agency_ids, "agency_id")
    today_txns = txns.filter(transaction_date=today)

    total_cash = (scope_by_agency(
                    CashRegister.objects.filter(company_id=company_id, is_deleted=False, is_active=True),
                    agency_ids, "agency_id")
                  .aggregate(total=Sum("current_balance"))["total"] or 0)
    # Les comptes bancaires n'ont pas de dimension agence (niveau institution) :
    # non affichés aux utilisateurs cloisonnés à une agence.
    total_bank = 0 if agency_ids is not None else (
        BankAccount.objects
        .filter(company_id=company_id, is_deleted=False, is_active=True)
        .aggregate(total=Sum("current_balance"))["total"] or 0)

    today_income  = (today_txns.filter(transaction_type=Transaction.Type.INCOME)
                     .aggregate(total=Sum("amount"))["total"] or 0)
    today_expense = (today_txns.filter(transaction_type=Transaction.Type.EXPENSE)
                     .aggregate(total=Sum("amount"))["total"] or 0)

    open_sessions = scope_by_agency(
        CashSession.objects.filter(company_id=company_id, is_deleted=False,
                                   status=CashSession.Status.OPEN),
        agency_ids, "cash_register__agency_id").count()

    return {
        "total_cash_balance": total_cash,
        "total_bank_balance": total_bank,
        "total_balance":      total_cash + total_bank,
        "today_income":       today_income,
        "today_expense":      today_expense,
        "today_net":          today_income - today_expense,
        "open_sessions":      open_sessions,
    }


def get_treasury_series(company_id, days=14, agency_ids=None):
    """Recettes vs dépenses par jour sur les `days` derniers jours (série continue)."""
    days = max(1, min(int(days), 90))
    today = timezone.now().date()
    start = today - timedelta(days=days - 1)
    rows = (scope_by_agency(
                Transaction.objects.filter(company_id=company_id, is_deleted=False,
                                           transaction_date__gte=start),
                agency_ids, "agency_id")
            .values("transaction_date")
            .annotate(
                income=Sum("amount", filter=Q(transaction_type=Transaction.Type.INCOME)),
                expense=Sum("amount", filter=Q(transaction_type=Transaction.Type.EXPENSE)),
            ))
    by = {r["transaction_date"]: r for r in rows}
    out = []
    for i in range(days):
        d = start + timedelta(days=i)
        r = by.get(d)
        out.append({
            "date": d.isoformat(),
            "income": float(r["income"]) if (r and r["income"]) else 0.0,
            "expense": float(r["expense"]) if (r and r["expense"]) else 0.0,
        })
    return out


def get_open_session_for_user(company_id, user):
    """Session de caisse ouverte de l'utilisateur : celle qu'il a ouverte
    (gestionnaire) ou celle qui lui est assignée (guichetier). C'est cette
    session qui autorise ses encaissements (ventes billets, colis, bagages…).

    La plage horaire est respectée : une fois la fin prévue (scheduled_end)
    dépassée, la session ne donne plus accès à la caisse — plus aucune vente
    n'est possible, même si le gestionnaire ne l'a pas encore clôturée."""
    from django.db.models import Q
    from django.utils import timezone
    from apps.treasury.models import CashSession
    now = timezone.now()
    return (CashSession.objects
            .filter(Q(opened_by=user) | Q(assigned_to=user),
                    company_id=company_id, status=CashSession.Status.OPEN, is_deleted=False)
            .filter(Q(scheduled_end__isnull=True) | Q(scheduled_end__gte=now))
            .order_by("-opened_at")
            .first())


# Permissions qui font d'un utilisateur un « guichetier » (personnel de guichet).
GUICHET_PERMS = (
    "treasury.session.operate",
    "ticketing.booking.create", "ticketing.parcel.manage", "ticketing.luggage.manage",
)


def list_guichetiers(company_id, agency_id=None):
    """Guichetiers assignables à une session : utilisateurs actifs de l'agence
    qui font du guichet (permission caisse.operate OU vente billets/colis/bagages),
    qui ne sont PAS gestionnaires de sessions (treasury.session.manage) et qui
    n'ont pas déjà une session ouverte."""
    from django.contrib.auth import get_user_model
    from django.db.models import Q
    from apps.admin_rbac.selectors.user_role_selectors import has_permission
    User = get_user_model()
    qs = User.objects.filter(company_id=company_id, is_active=True)
    if agency_id:
        qs = qs.filter(Q(default_agency_id=agency_id) | Q(user_agencies__agency_id=agency_id)).distinct()
    return [
        u for u in qs
        if any(has_permission(u, p, company_id) for p in GUICHET_PERMS)
        and not has_permission(u, "treasury.session.manage", company_id)
        and get_open_session_for_user(company_id, u) is None
    ]

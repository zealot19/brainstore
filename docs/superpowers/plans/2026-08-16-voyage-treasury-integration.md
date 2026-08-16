# Intégration Voyage → Trésorerie (vente au guichet) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** À la vente d'un billet au guichet, créer un mouvement de trésorerie qui génère l'écriture comptable 571/706.

**Architecture:** Service `record_booking_payment` (treasury) qui résout la session de caisse du vendeur (espèces) ou un compte bancaire (non‑espèces) et appelle `create_transaction` (→ pont T1) ; accroché dans `voyages_booking.create_booking`.

**Tech Stack:** Django + DRF, pytest.

**Spec:** `docs/superpowers/specs/2026-08-16-voyage-treasury-integration-design.md`

## Global Constraints

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche : `feature/voyage-treasury-integration` (déjà créée depuis `master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude). Français.
- Python : `.../ERP-master/env/bin/python` depuis `.../ERP-master/backend`.
- Dépendance unidirectionnelle `voyages_booking → treasury` via **import local**. Aucun changement de modèle (pas de migration).

**Rappels codebase (vérifiés) :**
- `treasury.services.create_transaction(*, company, transaction_type, category, account_type, amount, payment_mode, description="", transaction_date=None, cash_session=None, bank_account=None, trip=None, booking=None, parcel=None, created_by)` → applique soldes + déclenche le pont (`journal_entry` posté). `Transaction.PaymentMode` = `cash, mobile_money, transfer, check` ; `AccountType` = `cash, bank` ; `Category.TICKET_SALES = "ticket_sales"`.
- `treasury.services.open_session(*, company, cash_register, opening_balance=None, notes="", created_by)` → `CashSession(opened_by=created_by, status=open)`. `create_cash_register(*, company, name, ..., created_by)`, `create_bank_account(*, company, bank_name, account_name, account_number, ..., created_by)`.
- `create_company(*, name, admin_email, admin_first_name, admin_last_name)` seede plan comptable + journaux (CAISSE/BANQUE/OD) + mapping catégorie→compte (ticket_sales→706) → le pont poste 571/706.
- `voyages_booking.services.booking_services.create_booking(company, *, trip_type, outbound_trip, return_trip, buyer_spec, items, payment_method="", amount_received=None, return_open=False, user)` — `@transaction.atomic` ; calcule `total`, finalise, `loyalty_services.accrue(...)`, `return booking` (~ligne 159). `Booking.channel` défaut `counter`.
- `ApplicationError` (`apps.core.exceptions`). Fixtures d'exemple : `apps/voyages_trips/tests.py::_plan/_trip` + `materialise_seats`.

---

### Task 1: Service `record_booking_payment` + sélecteur + tests

**Files:**
- Modify: `backend/apps/treasury/selectors/selectors.py`
- Create: `backend/apps/treasury/services/booking_sales.py`
- Modify: `backend/apps/treasury/services/__init__.py`
- Test: `backend/apps/treasury/tests/test_booking_sales.py`

**Interfaces:**
- Produces : `get_open_session_for_user(company_id, user) -> CashSession | None` ; `record_booking_payment(company, *, booking, amount, payment_method, user) -> Transaction | None`.

- [ ] **Step 1: Écrire les tests (échouent)**

`backend/apps/treasury/tests/test_booking_sales.py` :
```python
import pytest
from decimal import Decimal
from apps.authentication.models import User
from apps.core.exceptions import ApplicationError
from apps.treasury.services.services import create_cash_register, create_bank_account, open_session
from apps.treasury.services.booking_sales import record_booking_payment, _normalize_payment


def _company(name="Sale Co", email="sale@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


def _lines(entry):
    return {l.account.code: (l.debit, l.credit) for l in entry.lines.all()}


def test_normalize_payment():
    assert _normalize_payment("") == ("cash", True)
    assert _normalize_payment("Espèces") == ("cash", True)
    assert _normalize_payment("cash") == ("cash", True)
    assert _normalize_payment("virement")[1] is False
    assert _normalize_payment("mobile_money")[0] == "mobile_money"
    assert _normalize_payment("chèque")[0] == "check"


@pytest.mark.django_db
def test_cash_sale_requires_open_session_and_posts_571_706():
    company, admin = _company()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    txn = record_booking_payment(company, booking=None, amount=Decimal("15000"), payment_method="cash", user=admin)
    assert txn is not None and txn.journal_entry is not None
    ln = _lines(txn.journal_entry)
    assert ln["571"][0] == Decimal("15000")
    assert ln["706"][1] == Decimal("15000")


@pytest.mark.django_db
def test_cash_sale_without_session_raises():
    company, admin = _company(name="NoSess", email="ns@x.com")
    with pytest.raises(ApplicationError):
        record_booking_payment(company, booking=None, amount=Decimal("1000"), payment_method="cash", user=admin)


@pytest.mark.django_db
def test_bank_sale_single_account_posts_521_706():
    company, admin = _company(name="BankCo", email="bk@x.com")
    create_bank_account(company=company, bank_name="BICEC", account_name="Cpt", account_number="1", created_by=admin)
    txn = record_booking_payment(company, booking=None, amount=Decimal("5000"), payment_method="virement", user=admin)
    assert txn is not None and txn.account_type == "bank"
    ln = _lines(txn.journal_entry)
    assert ln["521"][0] == Decimal("5000")
    assert ln["706"][1] == Decimal("5000")


@pytest.mark.django_db
def test_bank_sale_no_account_is_non_blocking():
    company, admin = _company(name="NoBank", email="nb@x.com")
    txn = record_booking_payment(company, booking=None, amount=Decimal("5000"), payment_method="virement", user=admin)
    assert txn is None
```

- [ ] **Step 2: Lancer (échoue)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/treasury/tests/test_booking_sales.py -q`
Expected : FAIL (module inexistant).

- [ ] **Step 3: Sélecteur**

Dans `apps/treasury/selectors/selectors.py`, ajouter :
```python
def get_open_session_for_user(company_id, user):
    from apps.treasury.models import CashSession
    return (CashSession.objects
            .filter(company_id=company_id, opened_by=user, status=CashSession.Status.OPEN, is_deleted=False)
            .order_by("-opened_at")
            .first())
```

- [ ] **Step 4: Service**

`apps/treasury/services/booking_sales.py` :
```python
from decimal import Decimal
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.treasury.models import Transaction, BankAccount
from apps.treasury.selectors.selectors import get_open_session_for_user
from apps.treasury.services.services import create_transaction

_NON_CASH = {
    "mobile_money": "mobile_money", "mobile": "mobile_money", "momo": "mobile_money", "om": "mobile_money",
    "transfer": "transfer", "virement": "transfer", "bank": "transfer",
    "check": "check", "cheque": "check", "chèque": "check",
}


def _normalize_payment(payment_method):
    key = (payment_method or "").strip().lower()
    if key in _NON_CASH:
        return _NON_CASH[key], False
    return "cash", True


def record_booking_payment(company, *, booking, amount, payment_method, user):
    """Crée le mouvement de trésorerie d'une vente de billets au guichet (non-bloquant hors espèces)."""
    amount = Decimal(str(amount or 0))
    if amount <= 0:
        return None
    if booking is not None and Transaction.objects.filter(booking=booking, is_deleted=False).exists():
        return None  # idempotent

    mode, is_cash = _normalize_payment(payment_method)
    ref = getattr(booking, "reference", "") or ""
    trip = getattr(booking, "outbound_trip", None)
    common = dict(company=company, transaction_type=Transaction.Type.INCOME,
                  category=Transaction.Category.TICKET_SALES, amount=amount, payment_mode=mode,
                  description=f"Vente {ref}".strip(), booking=booking, trip=trip, created_by=user)

    if is_cash:
        session = get_open_session_for_user(company.id, user)
        if not session:
            raise ApplicationError(_("Ouvrez d'abord votre session de caisse pour encaisser une vente au comptant."))
        return create_transaction(account_type=Transaction.AccountType.CASH, cash_session=session, **common)

    banks = list(BankAccount.objects.filter(company=company, is_deleted=False, is_active=True))
    if len(banks) != 1:
        return None
    return create_transaction(account_type=Transaction.AccountType.BANK, bank_account=banks[0], **common)
```

Dans `apps/treasury/services/__init__.py` : ajouter `from .booking_sales import record_booking_payment` et l'ajouter à `__all__`.

- [ ] **Step 5: Tests + check**

Run: `../env/bin/python -m pytest apps/treasury/tests/test_booking_sales.py -q && ../env/bin/python manage.py check`
Expected : 5 tests PASS + check OK.

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/treasury/selectors/selectors.py backend/apps/treasury/services/booking_sales.py backend/apps/treasury/services/__init__.py backend/apps/treasury/tests/test_booking_sales.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury): record_booking_payment (vente billet -> mouvement + ecriture)"
```

---

### Task 2: Accroche dans `create_booking` + test d'intégration (idempotence)

**Files:**
- Modify: `backend/apps/voyages_booking/services/booking_services.py`
- Test: `backend/apps/voyages_booking/tests_integration_treasury.py`

**Interfaces:**
- Consumes : `record_booking_payment`.

- [ ] **Step 1: Accrocher le service dans la vente**

Dans `apps/voyages_booking/services/booking_services.py`, `create_booking`, remplacer la fin
`    loyalty_services.accrue(booking, user=user)\n    return booking` par :
```python
    loyalty_services.accrue(booking, user=user)

    from apps.treasury.services import record_booking_payment
    record_booking_payment(company, booking=booking, amount=total, payment_method=payment_method, user=user)
    return booking
```

- [ ] **Step 2: Écrire le test d'intégration (échoue avant l'accroche ; ici vérifie le flux complet + idempotence)**

`backend/apps/voyages_booking/tests_integration_treasury.py` :
```python
import pytest
from decimal import Decimal
from django.utils import timezone
from datetime import timedelta
from apps.authentication.models import User
from apps.core.exceptions import ApplicationError


def _setup():
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Town, ServicePoint, FareClass, Route, SeatingPlan, PlanSeat
    from apps.voyages_trips.models import Trip
    from apps.voyages_trips.services.assignment import materialise_seats
    from apps.voyages_pricing.models import Fare
    company, _ = create_company(name="IntCo", admin_email="int@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="int@x.com")
    town = Town.objects.create(company=company, name="Douala")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="Gare A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="Gare B")
    route = Route.objects.create(company=company, code="A-B", origin=a, destination=b)
    fc = FareClass.objects.create(company=company, code="ECO", name="Éco")
    plan = SeatingPlan.objects.create(company=company, code="P1", name="P1", rows=1, columns=2, total_seats=2)
    for i in range(2):
        PlanSeat.objects.create(company=company, plan=plan, seat_number=f"S{i+1}", row=1, column=i + 1,
                                seat_type="standard", is_sellable=True)
    now = timezone.now() + timedelta(days=1)
    trip = Trip.objects.create(company=company, route=route, fare_class=fc, origin=a, destination=b,
                               seating_plan=plan, scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                               status="pending")
    materialise_seats(trip)
    Fare.objects.create(company=company, route=route, fare_class=fc, amount=Decimal("15000"))
    return company, admin, trip


def _book(company, admin, trip):
    from apps.voyages_booking.services.booking_services import create_booking
    seat = trip.seats.order_by("column").first()
    return create_booking(
        company, trip_type="one_way", outbound_trip=trip, return_trip=None,
        buyer_spec={"first_name": "Cli", "last_name": "Ent", "phone": "690"},
        items=[{"passenger": {"first_name": "Cli", "last_name": "Ent", "phone": "690"},
                "destination_point_id": None, "outbound_seat_id": str(seat.id)}],
        payment_method="cash", user=admin)


@pytest.mark.django_db
def test_counter_cash_sale_creates_treasury_movement():
    from apps.treasury.services import create_cash_register, open_session
    from apps.treasury.models import Transaction
    company, admin, trip = _setup()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    booking = _book(company, admin, trip)
    txns = Transaction.objects.filter(booking=booking, is_deleted=False)
    assert txns.count() == 1
    assert txns.first().journal_entry is not None


@pytest.mark.django_db
def test_counter_cash_sale_blocked_without_session():
    company, admin, trip = _setup()
    with pytest.raises(ApplicationError):
        _book(company, admin, trip)
    from apps.voyages_booking.models import Booking
    assert not Booking.objects.filter(company=company).exists()  # rollback atomique
```
*(Si un champ de `Fare`/`Trip`/`ServicePoint` diffère à l'exécution, ajuster le fixture d'après le modèle — les noms de champs sont vérifiés via `_plan`/`_trip` de `voyages_trips/tests.py`.)*

- [ ] **Step 3: Lancer les tests**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_booking/tests_integration_treasury.py -q`
Expected : 2 tests PASS.

- [ ] **Step 4: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_booking/services/booking_services.py backend/apps/voyages_booking/tests_integration_treasury.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages): la vente au guichet genere le mouvement de tresorerie + ecriture"
```

---

### Task 3: Vérification finale + fusion

- [ ] **Step 1: Suites concernées + check + migrations**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py makemigrations --check --dry-run
../env/bin/python manage.py check
../env/bin/python -m pytest apps/treasury/ apps/voyages_booking/ apps/accounting/ -q
```
Expected : aucune migration ; check OK ; tests PASS.

- [ ] **Step 2: Checklist manuelle (rapport final)**

- Ouvrir une session de caisse (guichetier) ; vendre un billet au comptant → un mouvement « Ventes de billets » apparaît (badge Comptabilisé, 571/706), lié à la réservation.
- Vendre sans session ouverte → la vente est refusée (« Ouvrez d'abord votre session de caisse »), aucun billet créé.
- Vente non‑espèces avec un unique compte bancaire → mouvement bancaire (521/706).

- [ ] **Step 3: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push).

---

## Self-Review

**Spec coverage :**
- `get_open_session_for_user` + `_normalize_payment` + `record_booking_payment` (espèces→session obligatoire 571/706 ; non‑espèces→banque unique 521/706 sinon non‑bloquant ; idempotent) → Task 1. ✅
- Accroche `create_booking` (guichet) ; blocage atomique si espèces sans session → Task 2. ✅
- 571/706 direct, pas de dépendance partenaire → Tasks 1-2. ✅
- Hors périmètre (online, colis, annulation, 411/partenaire) → non inclus. ✅

**Placeholder scan :** code complet (sélecteur, service, accroche, tests). Le fixture d'intégration note un ajustement possible des noms de champs — les champs utilisés proviennent des fixtures existantes `voyages_trips/tests.py`.

**Type consistency :** `record_booking_payment(company, *, booking, amount, payment_method, user)` identique entre définition (Task 1), tests (Task 1) et accroche (Task 2). `get_open_session_for_user(company_id, user)` cohérent. `create_transaction(...)` conforme à la signature existante. `Transaction.Type.INCOME`/`Category.TICKET_SALES`/`AccountType.CASH|BANK` réutilisés.

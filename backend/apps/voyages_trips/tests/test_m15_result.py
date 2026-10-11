import pytest
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from apps.authentication.models import User


def _expense_type(company):
    from apps.voyages_config.models import ExpenseType
    return ExpenseType.objects.create(company=company, code="CARB", name="Carburant")


def _setup():
    from apps.system_config.services import create_company
    from apps.voyages_config.models import (Town, ServicePoint, Route, FareClass, SeatingPlan,
                                            ConsignmentNature, ConsignmentType)
    from apps.voyages_trips.models import Trip, TripExpense
    from apps.voyages_trips.services.assignment import materialise_seats
    from apps.voyages_pricing.models import Fare
    from apps.treasury.services import create_cash_register, open_session
    from apps.voyages_consignment.models import Parcel, Baggage
    from apps.treasury.models import Transaction
    from apps.treasury.services.services import create_transaction

    company, _ = create_company(name="M15Co", admin_email="m15@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="m15@x.com")
    town = Town.objects.create(company=company, name="Dla")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="Gare A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="Gare B")
    route = Route.objects.create(company=company, code="A-B", origin=a, destination=b)
    eco = FareClass.objects.create(company=company, code="ECO", name="Éco", rank=1)
    plan = SeatingPlan.objects.create(company=company, code="P1", name="P1", total_seats=6, blocked_seats=0)
    now = timezone.now() + timedelta(days=1)

    def _trip(offset):
        dep = now + timedelta(days=offset)
        t = Trip.objects.create(company=company, route=route, fare_class=eco, origin=a, destination=b,
                                seating_plan=plan, scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=3),
                                status="pending")
        materialise_seats(t)
        return t
    trip = _trip(0)
    other = _trip(5)
    Fare.objects.create(company=company, route=route, origin_point=a, destination_point=b,
                        fare_class=eco, trip_type="one_way", amount=Decimal("15000"))
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    session = open_session(company=company, cash_register=reg, created_by=admin)

    # Vente de tickets (recette réelle via create_booking → txn ticket_sales VALIDATED liée au outbound_trip)
    from apps.voyages_booking.services.booking_services import create_booking
    seat = trip.seats.order_by("column").first()
    create_booking(company, trip_type="one_way", outbound_trip=trip, return_trip=None,
                   buyer_spec={"name": "Cli", "phone": "6"},
                   items=[{"passenger": {"name": "Cli", "phone": "6"}, "destination_point_id": None,
                           "outbound_seat_id": str(seat.id)}],
                   payment_method="cash", user=admin)

    nature = ConsignmentNature.objects.create(company=company, code="STD", name="Standard")
    ctype = ConsignmentType.objects.create(company=company, code="CT", label="Type", nature=nature)
    parcel = Parcel.objects.create(company=company, status="registered", origin_point=a, destination_point=b,
                                   consignment_type=ctype, trip=trip, sender_name="E", sender_phone="6",
                                   recipient_name="R", recipient_phone="7")
    baggage = Baggage.objects.create(company=company, trip=trip)

    def _income(category, amount, **fk):
        txn = create_transaction(company=company, transaction_type=Transaction.Type.INCOME,
                                 category=category, account_type=Transaction.AccountType.CASH,
                                 cash_session=session, amount=Decimal(str(amount)), payment_mode="cash",
                                 created_by=admin)
        for k, v in fk.items():
            setattr(txn, k, v)
        txn.save()
        return txn

    _income(Transaction.Category.PARCEL_SHIPPING, 5000, voyages_parcel=parcel)   # colis vente
    _income(Transaction.Category.PARCEL_DELIVERY, 2000, voyages_parcel=parcel)   # colis transit
    _income(Transaction.Category.BAGGAGE, 1000, voyages_baggage=baggage)         # bagage transit
    # Bruit : même catégorie mais rattachée à un AUTRE voyage → exclue du voyage courant
    other_parcel = Parcel.objects.create(company=company, status="registered", origin_point=a, destination_point=b,
                                         consignment_type=ctype, trip=other, sender_name="E", sender_phone="6",
                                         recipient_name="R", recipient_phone="7")
    _income(Transaction.Category.PARCEL_SHIPPING, 9999, voyages_parcel=other_parcel)

    # Dépenses : une décaissée (compte), une planifiée (exclue)
    et = _expense_type(company)
    TripExpense.objects.create(trip=trip, expense_type=et, amount=Decimal("3000"), status="paid")
    TripExpense.objects.create(trip=trip, expense_type=et, amount=Decimal("4000"), status="planned")

    return dict(company=company, trip=trip, other=other, admin=admin)


@pytest.mark.django_db
def test_trip_result_breakdown():
    from apps.voyages_trips.selectors import trip_result
    g = _setup()
    r = trip_result(g["trip"])
    assert r["recettes"]["tickets"] == Decimal("15000")
    assert r["recettes"]["colis_vente"] == Decimal("5000")
    assert r["recettes"]["colis_transit"] == Decimal("2000")
    assert r["recettes"]["bagages"] == Decimal("1000")
    assert r["recettes"]["total"] == Decimal("23000")
    assert r["depenses_total"] == Decimal("3000")        # PLANNED 4000 exclue
    assert r["resultat"] == Decimal("20000")


@pytest.mark.django_db
def test_trip_result_other_trip_empty():
    from apps.voyages_trips.selectors import trip_result
    g = _setup()
    r = trip_result(g["other"])
    # Le voyage « other » n'a que le colis de bruit (5000 shipping), rien d'autre.
    assert r["recettes"]["tickets"] == Decimal("0")
    assert r["recettes"]["colis_vente"] == Decimal("9999")
    assert r["recettes"]["bagages"] == Decimal("0")
    assert r["depenses_total"] == Decimal("0")
    assert r["resultat"] == Decimal("9999")

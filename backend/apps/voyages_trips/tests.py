from apps.voyages_trips.selectors import list_trips

_U = "00000000-0000-0000-0000-000000000001"


def test_list_trips_filters_route_vehicle_and_departure_range():
    qs = list_trips(None, route=_U, vehicle=_U, date_field="departure",
                    date_from="2026-01-01", date_to="2026-12-31")
    sql = str(qs.query)
    assert "route_id" in sql
    assert "vehicle_id" in sql
    assert "scheduled_departure" in sql


def test_list_trips_created_basis():
    qs = list_trips(None, date_field="created", date_from="2026-01-01")
    assert "created_at" in str(qs.query)


import pytest
from apps.voyages_trips.models import Transbordement


def test_transbordement_model_fields_default_zero():
    t = Transbordement()
    assert t.passengers_moved == 0
    assert t.passengers_overflow == 0
    assert t.baggage_moved == 0


from apps.voyages_trips.services.transbordement import overflow_split


def test_overflow_split():
    assert overflow_split([1, 2, 3], 2) == ([1, 2], [3])
    assert overflow_split([1, 2], 5) == ([1, 2], [])
    assert overflow_split([], 0) == ([], [])


from datetime import timedelta
from django.utils import timezone
from apps.voyages_trips.services.transbordement import apply_transbord
from apps.voyages_trips.services.assignment import materialise_seats


def _plan(company, code, n_sellable):
    from apps.voyages_config.models import SeatingPlan, PlanSeat
    plan = SeatingPlan.objects.create(company=company, code=code, name=code,
                                      rows=1, columns=n_sellable, total_seats=n_sellable)
    for i in range(n_sellable):
        PlanSeat.objects.create(company=company, plan=plan, seat_number=f"{code}{i+1}",
                                row=1, column=i + 1, seat_type="standard", is_sellable=True)
    return plan


def _trip(company, route, fare_class, origin, dest, plan, status="pending"):
    from apps.voyages_trips.models import Trip
    now = timezone.now() + timedelta(days=1)
    t = Trip.objects.create(company=company, route=route, fare_class=fare_class,
                            origin=origin, destination=dest, seating_plan=plan,
                            scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                            status=status)
    materialise_seats(t)
    return t


def _graph():
    """Construit un graphe minimal et renvoie un dict d'objets utiles."""
    from apps.system_config.models import Company
    from apps.voyages_config.models import Town, ServicePoint, FareClass, Route
    from apps.voyages_booking.models import Passenger, Booking, Ticket
    from apps.voyages_consignment.models import Baggage
    from apps.voyages_trips.models import TripSeat

    c = Company.objects.create(name="TestCo", slug="testco")
    town = Town.objects.create(company=c, name="Ville")
    a = ServicePoint.objects.create(company=c, town=town, code="A", name="A")
    b = ServicePoint.objects.create(company=c, town=town, code="B", name="B")
    route = Route.objects.create(company=c, code="A-B", origin=a, destination=b)
    fc = FareClass.objects.create(company=c, code="ECO", name="Éco")

    plan_big = _plan(c, "BIG", 4)
    plan_small = _plan(c, "SML", 2)
    plan_dest = _plan(c, "DST", 4)

    src = _trip(c, route, fc, a, b, plan_big)
    dest = _trip(c, route, fc, a, b, plan_dest)

    booking = Booking.objects.create(company=c, outbound_trip=src,
                                     buyer=Passenger.objects.create(company=c, name="Ach Eteur", phone="600"),
                                     trip_type="one_way")
    seats = list(src.seats.order_by("column"))
    tickets = []
    for i in range(3):
        seat = seats[i]
        seat.status = TripSeat.Status.SOLD
        seat.save(update_fields=["status"])
        p = Passenger.objects.create(company=c, name=f"P{i} X", phone=f"61{i}")
        tk = Ticket.objects.create(booking=booking, passenger=p, trip=src, trip_seat=seat,
                                   fare_class=fc, direction="outbound", origin_point=a, destination_point=b,
                                   status="sold")
        tickets.append(tk)
    bag = Baggage.objects.create(company=c, trip=src, ticket=tickets[2], sender_name="P2")
    return dict(company=c, src=src, dest=dest, plan_big=plan_big, plan_small=plan_small,
                tickets=tickets, baggage=bag)


@pytest.mark.django_db
def test_apply_transbord_same_plan_keeps_seats():
    g = _graph()
    res = apply_transbord(g["src"], g["plan_big"], user=None)
    assert res == {"passengers_moved": 3, "passengers_overflow": 0, "baggage_moved": 0}
    for tk in g["tickets"]:
        tk.refresh_from_db()
        assert tk.trip_id == g["src"].id and tk.trip_seat.status == "sold"


@pytest.mark.django_db
def test_apply_transbord_smaller_without_overflow_raises():
    from apps.core.exceptions import ApplicationError
    g = _graph()
    with pytest.raises(ApplicationError):
        apply_transbord(g["src"], g["plan_small"], user=None)


@pytest.mark.django_db
def test_apply_transbord_smaller_with_overflow_moves_surplus_and_baggage():
    g = _graph()
    res = apply_transbord(g["src"], g["plan_small"], overflow_trip=g["dest"], user=None)
    assert res == {"passengers_moved": 2, "passengers_overflow": 1, "baggage_moved": 1}
    on_src = [t for t in g["tickets"] if (t.refresh_from_db() or True) and t.trip_id == g["src"].id]
    assert len(on_src) == 2
    overflow = g["tickets"][2]; overflow.refresh_from_db()
    assert overflow.trip_id == g["dest"].id
    g["baggage"].refresh_from_db()
    assert g["baggage"].trip_id == g["dest"].id
    for t in g["tickets"]:
        t.refresh_from_db()
        assert t.trip_seat.trip_id == t.trip_id


@pytest.mark.django_db
def test_transbord_trip_rejects_non_transbordable_status():
    from apps.core.exceptions import ApplicationError
    from apps.voyages_trips.services.transbordement import transbord_trip
    g = _graph()
    g["src"].status = "draft"
    g["src"].save(update_fields=["status"])
    with pytest.raises(ApplicationError):
        transbord_trip(g["src"], None, user=None)


def test_transbordement_selection_kind_defaults():
    t = Transbordement(kind="selection")
    assert t.kind == "selection"
    assert t.parcels_moved == 0


def _parcel(company, src_trip, origin, dest_point):
    from apps.voyages_config.models import ConsignmentNature, ConsignmentType
    from apps.voyages_consignment.models import Parcel
    nat = ConsignmentNature.objects.create(company=company, code="N", name="Nature")
    typ = ConsignmentType.objects.create(company=company, code="T", label="Type", nature=nat)
    return Parcel.objects.create(company=company, reference="COL-1", trip=src_trip,
                                 origin_point=origin, destination_point=dest_point, consignment_type=typ,
                                 sender_name="Exp", sender_phone="600", recipient_name="Dst", recipient_phone="601")


@pytest.mark.django_db
def test_transbord_selection_to_existing_trip():
    from apps.voyages_trips.services.transbordement import transbord_selection
    from apps.voyages_config.models import ServicePoint
    g = _graph()
    a = ServicePoint.objects.get(company=g["company"], code="A")
    b = ServicePoint.objects.get(company=g["company"], code="B")
    parcel = _parcel(g["company"], g["src"], a, b)
    t0 = g["tickets"][0]
    src_seat_id = t0.trip_seat_id
    res = transbord_selection(g["src"], ticket_ids=[str(t0.id)], parcel_ids=[str(parcel.id)],
                              baggage_ids=[str(g["baggage"].id)], dest_trip=g["dest"], user=None)
    assert res["passengers_moved"] == 1 and res["parcels_moved"] == 1 and res["baggage_moved"] == 1
    t0.refresh_from_db(); parcel.refresh_from_db(); g["baggage"].refresh_from_db()
    assert t0.trip_id == g["dest"].id and t0.trip_seat.trip_id == g["dest"].id
    assert parcel.trip_id == g["dest"].id and g["baggage"].trip_id == g["dest"].id
    # non sélectionnés restés
    assert g["tickets"][1].refresh_from_db() is None and g["tickets"][1].trip_id == g["src"].id
    # siège source libéré
    from apps.voyages_trips.models import TripSeat
    assert TripSeat.objects.get(id=src_seat_id).status == "available"


@pytest.mark.django_db
def test_transbord_selection_empty_raises():
    from apps.core.exceptions import ApplicationError
    from apps.voyages_trips.services.transbordement import transbord_selection
    g = _graph()
    with pytest.raises(ApplicationError):
        transbord_selection(g["src"], ticket_ids=[], parcel_ids=[], baggage_ids=[],
                            dest_trip=g["dest"], user=None)


@pytest.mark.django_db
def test_transbord_selection_capacity_insufficient_raises():
    from apps.core.exceptions import ApplicationError
    from apps.voyages_trips.services.transbordement import transbord_selection
    from apps.voyages_config.models import Route, FareClass, ServicePoint
    g = g2 = _graph()
    route = Route.objects.get(company=g["company"], code="A-B")
    fc = FareClass.objects.get(company=g["company"], code="ECO")
    a = ServicePoint.objects.get(company=g["company"], code="A")
    b = ServicePoint.objects.get(company=g["company"], code="B")
    small = _plan(g["company"], "ONE", 1)
    dest1 = _trip(g["company"], route, fc, a, b, small)
    with pytest.raises(ApplicationError):
        transbord_selection(g["src"], ticket_ids=[str(g["tickets"][0].id), str(g["tickets"][1].id)],
                            parcel_ids=[], baggage_ids=[], dest_trip=dest1, user=None)


import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.voyages_trips.views import TripListCreateView


def _make_staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(
        name="Voy RBAC Co", admin_email="voyadmin@x.com",
        admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="voyadmin@x.com")
    staff, _ = create_user(
        created_by=admin, company=company, email="voystaff@x.com",
        first_name="S", last_name="T", is_institution_admin=False,
        default_agency_id=setup["hq_agency_id"], agency_ids=[setup["hq_agency_id"]])
    pids = list(Permission.objects.filter(code__in=codes).values_list("id", flat=True))
    role = create_role(name="Role", company_id=company.id, permission_ids=pids, created_by=admin)
    UserRole.objects.create(user=staff, role=role, company=company)
    return company, admin, staff


def _status(view, method, user, **kw):
    req = getattr(APIRequestFactory(), method)("/x", {}, format="json")
    force_authenticate(req, user=user)
    r = view.as_view()(req, **kw)
    return r.status_code


@pytest.mark.django_db
def test_trip_view_permission_gating():
    company, admin, staff = _make_staff(["voyage.trip.view"])
    assert _status(TripListCreateView, "get", staff) != 403
    assert _status(TripListCreateView, "post", staff) == 403
    assert _status(TripListCreateView, "get", admin) != 403
    assert _status(TripListCreateView, "post", admin) != 403


@pytest.mark.django_db
def test_trip_create_permission():
    company, admin, staff = _make_staff(["voyage.trip.view", "voyage.trip.create"])
    assert _status(TripListCreateView, "post", staff) != 403


@pytest.mark.django_db
def test_staff_without_voyage_perm_denied():
    company, admin, staff = _make_staff([])
    assert _status(TripListCreateView, "get", staff) == 403

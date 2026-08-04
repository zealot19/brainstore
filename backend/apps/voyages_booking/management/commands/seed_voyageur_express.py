"""
Populate the EXISTING « Voyageur Express SA » company with realistic end-to-end
data across the new Voyages tables — from Fleet up to Réservations — without
creating a new company. Reuses the company's existing route, seating plan,
service points and fare class where they already exist.

Adds: HR employees (linked to drivers), external drivers with identities, a
return route, fares (one-way + round-trip), a loyalty rule, future bookable
trips (with materialised seats), passengers and bookings.

Also points the test login shimi@gmail.com / 0000 at this company so the data
is immediately visible.

Idempotent-friendly: reference/config rows use get_or_create; trips, passengers
and bookings are created only if the company has no bookings yet.

Usage:
    python manage.py seed_voyageur_express
"""
from datetime import date, timedelta
from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand, CommandError
from django.db import transaction
from django.utils import timezone

from apps.system_config.models import Company
from apps.hr.models import Employee
from apps.fleet.models import Vehicle, ExternalDriver
from apps.voyages_config.models import (
    ServicePoint, Route, RouteStop, SeatingPlan, PlanSeat,
    VehicleSeatingAssignment, FareClass, TimeSlot, LoyaltyRule, VoyagesSettings,
)
from apps.voyages_pricing.models import Fare
from apps.voyages_trips.models import Trip, TripCrew
from apps.voyages_trips.services import trip_services
from apps.voyages_trips.services.assignment import assign_vehicle
from apps.voyages_booking.models import Booking, Passenger, Ticket
from apps.voyages_booking import services as booking_services
from apps.voyages_consignment.models import Parcel
from apps.voyages_consignment import services as consignment_services

_COLS = ["A", "B", "C", "D"]


class Command(BaseCommand):
    help = "Fill the existing Voyageur Express SA company with fleet→réservations demo data."

    @transaction.atomic
    def handle(self, *args, **opts):
        w = self.stdout.write

        try:
            company = Company.objects.get(slug="voyageur-express")
        except Company.DoesNotExist:
            raise CommandError("La société « voyageur-express » est introuvable.")
        w(f"Institution : {company.name}")

        # ── Test login shimi@gmail.com / 0000 → this company ──────────────────
        User = get_user_model()
        user = (User.objects.filter(email__iexact="shimi@gmail.com").first()
                or User.objects.filter(username__iexact="shimi").first()
                or User(username="shimi"))
        user.email = "shimi@gmail.com"
        user.first_name = user.first_name or "Shimi"
        user.last_name = user.last_name or "Admin"
        user.company = company
        user.is_institution_admin = True
        user.is_active = True
        user.must_change_password = False
        user.set_password("0000")
        user.save()
        w(f"Utilisateur : shimi@gmail.com / 0000 (admin institution, compte « {user.username} »)")

        # ── 1. HR employees ───────────────────────────────────────────────────
        people = [
            ("Étienne", "Ateba"), ("Georges", "Mbarga"), ("Rodrigue", "Talla"),
            ("Serge", "Ndongo"), ("Aline", "Kouam"), ("Firmin", "Essomba"),
        ]
        employees = []
        for i, (fn, ln) in enumerate(people, start=1):
            emp, _ = Employee.objects.get_or_create(
                company=company, employee_number=f"VE-EMP-{i:03d}",
                defaults={"first_name": fn, "last_name": ln, "hire_date": date(2023, 3, 1),
                          "phone": f"6{70000000 + i}"})
            employees.append(emp)
        w(f"Employés    : {len(employees)} (matricules VE-EMP-001…)")

        # ── 2. External drivers (give existing ones an identity, add more) ─────
        existing_drivers = list(ExternalDriver.objects.filter(
            is_deleted=False, company=company).order_by("license_number"))
        for drv, emp in zip(existing_drivers, employees):
            if not drv.employee_id:
                drv.employee = emp
                if not drv.license_expiry:
                    drv.license_expiry = date.today() + timedelta(days=400)
                drv.save(update_fields=["employee", "license_expiry", "updated_at"])
        # Ensure at least 3 drivers exist, each linked to an employee
        drivers = list(ExternalDriver.objects.filter(is_deleted=False, company=company))
        next_emp = len(existing_drivers)
        while len(drivers) < 3 and next_emp < len(employees):
            emp = employees[next_emp]; next_emp += 1
            drv, _ = ExternalDriver.objects.get_or_create(
                company=company, license_number=f"CM-DRV-2{next_emp:03d}",
                defaults={"employee": emp, "license_category": ExternalDriver.LicenseCategory.D,
                          "license_expiry": date.today() + timedelta(days=500)})
            drivers.append(drv)
        drivers = [d for d in drivers if d.employee_id][:3]
        w(f"Conducteurs : {', '.join(d.full_name for d in drivers)}")

        # ── 3. Network : reuse existing route + service points ────────────────
        route_out = Route.objects.filter(is_deleted=False, company=company, code="DLA - YDE").first()
        if not route_out:
            raise CommandError("Trajet « DLA - YDE » introuvable dans Voyageur Express.")
        origin = route_out.origin           # DLA - AKWA (gare)
        destination = route_out.destination  # YDE - MVAN (gare)

        # An escale on the outbound route (Edéa, non-gare) if present
        edea = ServicePoint.objects.filter(is_deleted=False, company=company, name__icontains="Edea").first()
        if edea:
            RouteStop.objects.get_or_create(
                route=route_out, sequence=1,
                defaults={"company": company, "service_point": edea, "distance_from_origin_km": 65})

        # Return route (MVAN → AKWA), created if missing
        route_ret, _ = Route.objects.get_or_create(
            company=company, code="YDE - DLA",
            defaults={"label": "Yaoundé → Douala", "origin": destination, "destination": origin,
                      "distance_km": route_out.distance_km})

        # ── 4. Seating plan : reuse existing, else build a 40-seat plan ────────
        plan = SeatingPlan.objects.filter(is_deleted=False, company=company).order_by("code").first()
        if not plan:
            plan = SeatingPlan.objects.create(company=company, code="BUS40",
                                              name="Bus 40 places", rows=10, columns=4, total_seats=40)
        if not plan.seats.filter(is_deleted=False).exists():
            n = 0
            for row in range(1, 11):
                for col in range(1, 5):
                    if n >= 40:
                        break
                    n += 1
                    PlanSeat.objects.create(company=company, plan=plan,
                                            seat_number=f"{row}{_COLS[col - 1]}", row=row, column=col,
                                            seat_type=PlanSeat.SeatType.STANDARD, is_sellable=True)

        # ── 5. Fare class(es) ─────────────────────────────────────────────────
        fc_std = FareClass.objects.filter(is_deleted=False, company=company).order_by("rank").first()
        if not fc_std:
            fc_std = FareClass.objects.create(company=company, code="CLS", name="Classique", rank=1)
        fc_vip, _ = FareClass.objects.get_or_create(company=company, code="VIP",
                                                    defaults={"name": "VIP", "rank": 2})

        # ── 6. Vehicles : ensure the two we use have the plan assigned ─────────
        vehicles = list(Vehicle.objects.filter(is_deleted=False, company=company).order_by("license_plate"))
        if len(vehicles) < 2:
            raise CommandError("Au moins deux véhicules sont requis dans Voyageur Express.")
        bus_a, bus_b = vehicles[0], vehicles[1]
        for v in (bus_a, bus_b):
            VehicleSeatingAssignment.objects.get_or_create(
                company=company, vehicle=v, seating_plan=plan,
                defaults={"valid_from": date.today() - timedelta(days=60)})

        # ── 7. Time slots (plages horaires) + loyalty + settings ──────────────
        slot_am, _ = TimeSlot.objects.get_or_create(
            company=company, code="MAT",
            defaults={"label": "Matin", "start_time": "05:00", "end_time": "11:59", "ordering": 1})
        slot_pm, _ = TimeSlot.objects.get_or_create(
            company=company, code="APM",
            defaults={"label": "Après-midi", "start_time": "12:00", "end_time": "17:59", "ordering": 2})
        TimeSlot.objects.get_or_create(
            company=company, code="SOI",
            defaults={"label": "Soir", "start_time": "18:00", "end_time": "23:59", "ordering": 3})
        LoyaltyRule.objects.get_or_create(
            company=company, name="Programme fidélité",
            defaults={"points_per_one_way": 1, "points_per_round_trip": 2,
                      "reward_threshold": 5, "reward_label": "1 billet gratuit"})
        VoyagesSettings.objects.get_or_create(company=company, defaults={"ticket_expiry_days": 2})

        # ── 8. Fares (one-way + round-trip, both classes) ─────────────────────
        fares = [
            (route_out, origin, destination, fc_std, "one_way", 4000),
            (route_out, origin, destination, fc_std, "round_trip", 7000),
            (route_out, origin, destination, fc_vip, "one_way", 6500),
            (route_out, origin, destination, fc_vip, "round_trip", 11000),
            (route_ret, destination, origin, fc_std, "one_way", 4000),
            (route_ret, destination, origin, fc_std, "round_trip", 7000),
            (route_ret, destination, origin, fc_vip, "one_way", 6500),
        ]
        if edea:
            fares.append((route_out, origin, edea, fc_std, "one_way", 2000))
            fares.append((route_out, origin, edea, fc_vip, "one_way", 3500))
        for route, o, d, fc, tt, amount in fares:
            # Use all_objects so a previously soft-deleted fare (which still holds
            # the unique slot) is revived rather than triggering a UNIQUE error.
            obj = Fare.all_objects.filter(
                company=company, route=route, origin_point=o, destination_point=d,
                fare_class=fc, trip_type=tt).first()
            if obj:
                obj.is_deleted = False
                obj.is_active = True
                obj.amount = amount
                obj.save()
            else:
                Fare.objects.create(company=company, route=route, origin_point=o,
                                    destination_point=d, fare_class=fc, trip_type=tt, amount=amount)
        w(f"Tarifs      : {Fare.objects.filter(company=company, is_deleted=False).count()} lignes")

        # ── 9. Trips + 10. Réservations ───────────────────────────────────────
        if Booking.objects.filter(company=company, is_deleted=False).exists():
            w("Réservations: déjà présentes — étapes voyages/réservations ignorées.")
            w(self.style.SUCCESS("Terminé."))
            return

        # Deterministic local midnight so departure hours land inside the slots.
        base = timezone.localtime(timezone.now()).replace(hour=0, minute=0, second=0, microsecond=0)

        def make_trip(route, vehicle, driver, days_ahead, hour, fare_class):
            dep = base + timedelta(days=days_ahead, hours=hour)
            arr = dep + timedelta(hours=4)
            trip = trip_services.create_trip(
                company=company, route=route, fare_class=fare_class,
                scheduled_departure=dep, scheduled_arrival=arr, user=None)
            assign_vehicle(trip, vehicle, user=None)
            TripCrew.objects.create(trip=trip, driver=driver, role=TripCrew.Role.DRIVER, created_by=None)
            trip_services.submit_trip(trip, user=None)
            trip.refresh_from_db()
            return trip

        t_out = make_trip(route_out, bus_a, drivers[0], 1, 7, fc_std)   # DLA→YDE Matin, Classique
        t_ret = make_trip(route_ret, bus_a, drivers[0], 3, 14, fc_std)  # YDE→DLA Après-midi, Classique
        t_extra = make_trip(route_out, bus_b, drivers[1 % len(drivers)], 4, 8, fc_vip)  # DLA→YDE Matin, VIP
        w(f"Voyages     : {t_out.number} (Classique/Matin), {t_ret.number} (Classique/Après-midi), "
          f"{t_extra.number} (VIP/Matin)")

        def seats(trip, k):
            return list(trip.seats.filter(status="available").order_by("row", "column")[:k])

        def pax(fn, ln, phone, idn):
            return {"first_name": fn, "last_name": ln, "phone": phone, "id_type": "cni", "id_number": idn}

        edea_id = edea.id if edea else None

        # a) One-way paid, 3 passengers — one drops at the Edéa escale (cheaper fare)
        s = seats(t_out, 3)
        booking_services.create_booking(
            company, trip_type="one_way", outbound_trip=t_out, return_trip=None,
            buyer_spec=pax("Colette", "Manga", "699100001", "CNI100001"),
            items=[
                {"passenger": pax("Colette", "Manga", "699100001", "CNI100001"), "destination_point_id": None, "outbound_seat_id": s[0].id, "return_seat_id": None},
                {"passenger": pax("Hervé", "Biya", "699100002", "CNI100002"), "destination_point_id": edea_id, "outbound_seat_id": s[1].id, "return_seat_id": None},
                {"passenger": pax("Nadège", "Fotso", "699100003", "CNI100003"), "destination_point_id": None, "outbound_seat_id": s[2].id, "return_seat_id": None},
            ], payment_method="Espèces", amount_received=15000, user=None)

        # b) One-way paid (loyalty accrues)
        s = seats(t_out, 1)
        booking_services.create_booking(
            company, trip_type="one_way", outbound_trip=t_out, return_trip=None,
            buyer_spec=pax("Patrick", "Owona", "699100004", "CNI100004"),
            items=[{"passenger": pax("Patrick", "Owona", "699100004", "CNI100004"), "destination_point_id": None, "outbound_seat_id": s[0].id, "return_seat_id": None}],
            payment_method="Espèces", amount_received=5000, user=None)

        # c) Round-trip paid
        so, sr = seats(t_out, 1), seats(t_ret, 1)
        booking_services.create_booking(
            company, trip_type="round_trip", outbound_trip=t_out, return_trip=t_ret,
            buyer_spec=pax("Solange", "Ndam", "699100005", "CNI100005"),
            items=[{"passenger": pax("Solange", "Ndam", "699100005", "CNI100005"),
                    "destination_point_id": None, "outbound_seat_id": so[0].id, "return_seat_id": sr[0].id}],
            payment_method="Espèces", amount_received=10000, user=None)

        # d) One-way paid on the extra VIP trip (2 passengers, VIP fare 6500 each)
        s = seats(t_extra, 2)
        booking_services.create_booking(
            company, trip_type="one_way", outbound_trip=t_extra, return_trip=None,
            buyer_spec=pax("Boris", "Eyenga", "699100006", "CNI100006"),
            items=[
                {"passenger": pax("Boris", "Eyenga", "699100006", "CNI100006"), "destination_point_id": None, "outbound_seat_id": s[0].id, "return_seat_id": None},
                {"passenger": pax("Diane", "Ngo", "699100007", "CNI100007"), "destination_point_id": None, "outbound_seat_id": s[1].id, "return_seat_id": None},
            ], payment_method="Espèces", amount_received=15000, user=None)

        w(f"Passagers   : {Passenger.objects.filter(company=company, is_deleted=False).count()}")
        w(f"Réservations: {Booking.objects.filter(company=company, is_deleted=False).count()} (toutes payées)")
        # ── Colis & Bagages ────────────────────────────────────────────────────
        if not Parcel.objects.filter(company=company, is_deleted=False).exists():
            from apps.voyages_config.models import ConsignmentNature, ConsignmentType
            nature, _ = ConsignmentNature.objects.get_or_create(
                company=company, code="STD", defaults={"name": "Marchandise générale"})
            ctype, _ = ConsignmentType.objects.get_or_create(
                company=company, code="CARTON", defaults={"label": "Carton", "nature": nature,
                                                           "max_weight_kg": 30})
            p1 = consignment_services.register_parcel(
                company, origin_point=origin, destination_point=destination, consignment_type=ctype,
                sender_name="Awono Paul", sender_phone="699200001",
                recipient_name="Bella Marie", recipient_phone="699200002", recipient_id_number="CNI123456",
                description="Carton de vêtements", weight_kg=12, quantity=1,
                amount_due=2500, amount_received=3000, payment_method="Espèces", user=None)
            consignment_services.assign_to_trip(p1, t_out, user=None)
            consignment_services.mark_arrived(p1, user=None)
            consignment_services.register_parcel(
                company, origin_point=origin, destination_point=destination, consignment_type=ctype,
                sender_name="Ngo Lea", sender_phone="699200003",
                recipient_name="Fouda Eric", recipient_phone="699200004",
                description="Colis divers", weight_kg=5, quantity=2,
                amount_due=1500, amount_received=1500, payment_method="Espèces", user=None)
            tk = Ticket.objects.filter(booking__company=company, trip=t_out, is_deleted=False).first()
            if tk:
                consignment_services.add_baggage(
                    company, ticket=tk, consignment_type=ctype, description="Valise",
                    weight_kg=28, amount_due=2000, amount_received=2000, payment_method="Espèces", user=None)
            w("Colis/Bagages : 2 colis (dont 1 arrivé) + 1 bagage")

        w(self.style.SUCCESS("Données de démonstration ajoutées à Voyageur Express SA."))

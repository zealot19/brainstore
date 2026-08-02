"""
Seed a full end-to-end demo dataset for the Voyages chain:

    Fleet config → Vehicles → Drivers (HR) → Voyages config (network, seating,
    fares, loyalty) → Trips (with materialised seats) → Passengers → Réservations.

Idempotent-friendly: reference/config rows use get_or_create; trips, passengers
and bookings are only created if the demo company has none yet.

Usage:
    python manage.py seed_voyages_demo
"""
from datetime import date, timedelta
from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand
from django.db import transaction
from django.utils import timezone

from apps.system_config.models import Company
from apps.hr.models import Employee
from apps.fleet.models import (
    Vehicle, VehicleBrand, VehicleModel, ExternalDriver,
)
from apps.fleet.models.config.reference import VehicleCategoryCfg
from apps.voyages_config.models import (
    Town, ServicePoint, Route, RouteStop, SeatingPlan, PlanSeat,
    VehicleSeatingAssignment, FareClass, TimeSlot, LoyaltyRule, VoyagesSettings,
)
from apps.voyages_pricing.models import Fare
from apps.voyages_trips.models import Trip, TripCrew
from apps.voyages_trips.services import trip_services
from apps.voyages_trips.services.assignment import assign_vehicle
from apps.voyages_booking.models import Booking
from apps.voyages_booking import services as booking_services

_COLS = ["A", "B", "C", "D"]


class Command(BaseCommand):
    help = "Seed a full demo dataset from fleet config up to réservations."

    @transaction.atomic
    def handle(self, *args, **opts):
        w = self.stdout.write

        # ── 1. Company ────────────────────────────────────────────────────────
        company, _ = Company.objects.get_or_create(
            slug="demo-transport",
            defaults={"name": "Demo Transport SARL", "code": "DEMO", "country": "CM"})
        w(f"Institution : {company.name}")

        # ── 1b. Test user (shimi / 0000) — institution admin of the demo company
        User = get_user_model()
        user, _ = User.objects.get_or_create(
            username="shimi",
            defaults={"first_name": "Shimi", "last_name": "Admin"})
        user.email = "shimi@gmail.com"
        user.company = company
        user.is_institution_admin = True
        user.is_active = True
        user.must_change_password = False
        user.set_password("0000")
        user.save()
        w("Utilisateur : shimi@gmail.com / 0000 (admin institution)")

        # ── 2. Fleet reference + vehicles ─────────────────────────────────────
        brand, _ = VehicleBrand.objects.get_or_create(name="Toyota")
        model, _ = VehicleModel.objects.get_or_create(brand=brand, name="Coaster", defaults={"seats": 30})
        category, _ = VehicleCategoryCfg.objects.get_or_create(company=company, name="Autocar")

        vehicles = []
        for plate in ["CE-101-AA", "CE-202-BB"]:
            v, _ = Vehicle.objects.get_or_create(
                company=company, license_plate=plate,
                defaults={"model": model, "category": category,
                          "status": Vehicle.Status.AVAILABLE, "year": 2022})
            vehicles.append(v)
        w(f"Véhicules   : {', '.join(v.license_plate for v in vehicles)}")

        # ── 3. HR employees + external drivers ────────────────────────────────
        drivers = []
        driver_names = [("Paul", "Mballa"), ("Jean", "Nkemi")]
        for i, (fn, ln) in enumerate(driver_names, start=1):
            emp, _ = Employee.objects.get_or_create(
                company=company, employee_number=f"EMP-{i:03d}",
                defaults={"first_name": fn, "last_name": ln, "hire_date": date(2023, 1, 10)})
            drv, _ = ExternalDriver.objects.get_or_create(
                company=company, license_number=f"LIC-{i:05d}",
                defaults={"employee": emp, "license_category": ExternalDriver.LicenseCategory.D,
                          "license_expiry": date.today() + timedelta(days=365)})
            drivers.append(drv)
        w(f"Conducteurs : {', '.join(d.full_name for d in drivers)}")

        # ── 4. Voyages config : network ───────────────────────────────────────
        dla, _ = Town.objects.get_or_create(company=company, code="DLA", defaults={"name": "Douala"})
        yde, _ = Town.objects.get_or_create(company=company, code="YDE", defaults={"name": "Yaoundé"})
        bfs, _ = Town.objects.get_or_create(company=company, code="BFS", defaults={"name": "Bafoussam"})

        gare_dla, _ = ServicePoint.objects.get_or_create(
            company=company, code="GDLA",
            defaults={"town": dla, "name": "Gare de Douala", "is_station": True})
        gare_yde, _ = ServicePoint.objects.get_or_create(
            company=company, code="GYDE",
            defaults={"town": yde, "name": "Gare de Yaoundé", "is_station": True})
        # An escale (drop point) that is not a station
        esc_bfs, _ = ServicePoint.objects.get_or_create(
            company=company, code="EBFS",
            defaults={"town": bfs, "name": "Carrefour Bafoussam", "is_station": False})

        route_out, _ = Route.objects.get_or_create(
            company=company, code="DLA-YDE",
            defaults={"label": "Douala → Yaoundé", "origin": gare_dla, "destination": gare_yde,
                      "distance_km": 245})
        route_ret, _ = Route.objects.get_or_create(
            company=company, code="YDE-DLA",
            defaults={"label": "Yaoundé → Douala", "origin": gare_yde, "destination": gare_dla,
                      "distance_km": 245})
        # Escale on the outbound route
        RouteStop.objects.get_or_create(
            route=route_out, sequence=1,
            defaults={"company": company, "service_point": esc_bfs, "distance_from_origin_km": 120})

        # ── 4b. Seating plan + seats ──────────────────────────────────────────
        plan, created = SeatingPlan.objects.get_or_create(
            company=company, code="COASTER-30",
            defaults={"name": "Coaster 30 places", "rows": 8, "columns": 4, "total_seats": 30})
        if created or not plan.seats.exists():
            plan.seats.all().delete()
            n = 0
            for row in range(1, 9):
                for col in range(1, 5):
                    if n >= 30:
                        break
                    n += 1
                    PlanSeat.objects.create(
                        company=company, plan=plan, seat_number=f"{row}{_COLS[col - 1]}",
                        row=row, column=col, seat_type=PlanSeat.SeatType.STANDARD, is_sellable=True)

        # Assign the plan to both vehicles (valid from a month ago)
        for v in vehicles:
            VehicleSeatingAssignment.objects.get_or_create(
                company=company, vehicle=v, seating_plan=plan,
                defaults={"valid_from": date.today() - timedelta(days=30)})

        # ── 4c. Commercial config ─────────────────────────────────────────────
        fc_std, _ = FareClass.objects.get_or_create(company=company, code="STD",
                                                    defaults={"name": "Classique", "rank": 1})
        fc_vip, _ = FareClass.objects.get_or_create(company=company, code="VIP",
                                                    defaults={"name": "VIP", "rank": 2})
        TimeSlot.objects.get_or_create(company=company, code="AM",
                                       defaults={"label": "Matin", "start_time": "06:00", "end_time": "12:00"})
        LoyaltyRule.objects.get_or_create(
            company=company, name="Programme fidélité",
            defaults={"points_per_one_way": 1, "points_per_round_trip": 2,
                      "reward_threshold": 5, "reward_label": "1 billet gratuit"})
        VoyagesSettings.objects.get_or_create(company=company, defaults={"ticket_expiry_days": 2})

        # ── 5. Fares (one-way + round-trip) per class ─────────────────────────
        fares = [
            (route_out, gare_dla, gare_yde, fc_std, "one_way", 5000),
            (route_out, gare_dla, gare_yde, fc_std, "round_trip", 9000),
            (route_out, gare_dla, gare_yde, fc_vip, "one_way", 8000),
            (route_out, gare_dla, esc_bfs, fc_std, "one_way", 3000),
            (route_ret, gare_yde, gare_dla, fc_std, "one_way", 5000),
            (route_ret, gare_yde, gare_dla, fc_std, "round_trip", 9000),
        ]
        for route, o, d, fc, tt, amount in fares:
            Fare.objects.get_or_create(
                company=company, route=route, origin_point=o, destination_point=d,
                fare_class=fc, trip_type=tt, defaults={"amount": amount})
        w(f"Tarifs      : {Fare.objects.filter(company=company, is_deleted=False).count()} lignes")

        # ── 6. Trips ──────────────────────────────────────────────────────────
        if Trip.objects.filter(company=company, is_deleted=False).exists():
            w("Voyages     : déjà présents — étape ignorée.")
        else:
            now = timezone.now().replace(minute=0, second=0, microsecond=0)

            def make_trip(route, vehicle, driver, days_ahead, submit=True):
                dep = now + timedelta(days=days_ahead, hours=7)
                arr = dep + timedelta(hours=4)
                trip = trip_services.create_trip(
                    company=company, route=route, fare_class=fc_std,
                    scheduled_departure=dep, scheduled_arrival=arr, user=None)
                assign_vehicle(trip, vehicle, user=None)
                TripCrew.objects.create(trip=trip, driver=driver, role=TripCrew.Role.DRIVER, created_by=None)
                if submit:
                    trip_services.submit_trip(trip, user=None)
                trip.refresh_from_db()
                return trip

            t_out = make_trip(route_out, vehicles[0], drivers[0], 2)   # DLA→YDE
            t_ret = make_trip(route_ret, vehicles[0], drivers[0], 3)   # YDE→DLA (return leg)
            t_extra = make_trip(route_out, vehicles[1], drivers[1], 4)  # another DLA→YDE
            w(f"Voyages     : {t_out.number}, {t_ret.number}, {t_extra.number} (sièges générés)")

            # ── 7. Passengers + 8. Bookings ──────────────────────────────────
            def seats(trip, k):
                return list(trip.seats.filter(status="available").order_by("row", "column")[:k])

            # 8a. One-way HELD booking (2 passengers)
            s = seats(t_out, 2)
            booking_services.create_booking(
                company, trip_type="one_way", outbound_trip=t_out, return_trip=None,
                buyer_spec={"first_name": "Alice", "last_name": "Ngo", "phone": "699000001",
                            "id_type": "cni", "id_number": "CNI001"},
                items=[
                    {"passenger": {"first_name": "Alice", "last_name": "Ngo", "phone": "699000001",
                                   "id_type": "cni", "id_number": "CNI001"},
                     "outbound_seat_id": s[0].id, "return_seat_id": None},
                    {"passenger": {"first_name": "Bruno", "last_name": "Foka", "phone": "699000002",
                                   "id_type": "cni", "id_number": "CNI002"},
                     "outbound_seat_id": s[1].id, "return_seat_id": None},
                ], user=None)

            # 8b. One-way CONFIRMED booking (loyalty accrues)
            s = seats(t_out, 1)
            bk2 = booking_services.create_booking(
                company, trip_type="one_way", outbound_trip=t_out, return_trip=None,
                buyer_spec={"first_name": "Carine", "last_name": "Meli", "phone": "699000003",
                            "id_type": "cni", "id_number": "CNI003"},
                items=[{"passenger": {"first_name": "Carine", "last_name": "Meli", "phone": "699000003",
                                      "id_type": "cni", "id_number": "CNI003"},
                        "outbound_seat_id": s[0].id, "return_seat_id": None}], user=None)
            booking_services.confirm_booking(bk2, payment_method="", amount_paid=None, user=None)

            # 8c. Round-trip CONFIRMED booking (outbound + return legs)
            so = seats(t_out, 1)
            sr = seats(t_ret, 1)
            bk3 = booking_services.create_booking(
                company, trip_type="round_trip", outbound_trip=t_out, return_trip=t_ret,
                buyer_spec={"first_name": "David", "last_name": "Sone", "phone": "699000004",
                            "id_type": "cni", "id_number": "CNI004"},
                items=[{"passenger": {"first_name": "David", "last_name": "Sone", "phone": "699000004",
                                      "id_type": "cni", "id_number": "CNI004"},
                        "outbound_seat_id": so[0].id, "return_seat_id": sr[0].id}], user=None)
            booking_services.confirm_booking(bk3, payment_method="", amount_paid=None, user=None)

            w(f"Réservations: {Booking.objects.filter(company=company, is_deleted=False).count()} "
              f"(1 réservée, 2 confirmées)")

        w(self.style.SUCCESS("Données de démonstration créées avec succès."))

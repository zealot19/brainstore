from apps.voyages_config.models import PlanSeat
from apps.voyages_trips.models import Trip, TripSeat
from apps.voyages_trips.selectors.eligibility import eligible_vehicles, active_seating_plan


def _plan_capacity(plan):
    if plan is None:
        return 0
    return PlanSeat.objects.filter(plan=plan, is_deleted=False, is_sellable=True).count()


def transbord_options(company, trip):
    vehicles = []
    for v in eligible_vehicles(company, window_start=trip.scheduled_departure,
                               window_end=trip.scheduled_arrival, exclude_trip=trip):
        plan = active_seating_plan(v, trip.scheduled_departure.date())
        vehicles.append({
            "id": str(v.id), "license_plate": v.license_plate,
            "model_name": getattr(getattr(v, "model", None), "name", "") or "",
            "seats": _plan_capacity(plan),
        })
    overflow = []
    for t in (Trip.objects.filter(company=company, is_deleted=False, route_id=trip.route_id,
                                  status__in=["draft", "pending"])
              .exclude(id=trip.id).select_related("route")):
        free = t.seats.filter(status=TripSeat.Status.AVAILABLE).count()
        if free > 0:
            overflow.append({"id": str(t.id), "number": t.number, "code": t.code, "free_seats": free})
    sold_count = trip.tickets.filter(is_deleted=False, status__in=["sold", "boarded"]).count()
    return {"vehicles": vehicles, "overflow_trips": overflow, "sold_count": sold_count}


def trip_transbordements(trip):
    return trip.transbordements.filter(is_deleted=False).select_related(
        "from_vehicle", "to_vehicle", "overflow_trip").order_by("-created_at")

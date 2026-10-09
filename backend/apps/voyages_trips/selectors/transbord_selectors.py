from apps.voyages_trips.models import Trip, TripSeat
from apps.voyages_trips.selectors.eligibility import eligible_vehicles, active_seating_plan


def _plan_capacity(plan):
    """Places vendables du plan (M05 : total − bloquées)."""
    if plan is None:
        return 0
    return plan.sellable_seats


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


def selection_options(company, trip):
    """Contenu du voyage (passagers/colis/bagages) + destinations possibles."""
    from apps.voyages_consignment.models import Parcel, Baggage

    tickets = [{
        "id": str(t.id),
        "seat": t.trip_seat.seat_number if t.trip_seat_id else "",
        "passenger_name": t.passenger.full_name if t.passenger_id else "",
    } for t in trip.tickets.filter(is_deleted=False, status__in=["sold", "boarded"])
        .select_related("trip_seat", "passenger")]

    parcels = [{
        "id": str(p.id), "reference": p.reference, "recipient_name": p.recipient_name,
    } for p in Parcel.objects.filter(is_deleted=False, company=company, trip=trip)]

    baggage = [{
        "id": str(b.id), "tag_number": b.tag_number, "owner_name": b.owner_name,
    } for b in Baggage.objects.filter(is_deleted=False, company=company, trip=trip).select_related("ticket__passenger")]

    dest_trips = []
    for t in (Trip.objects.filter(company=company, is_deleted=False, route_id=trip.route_id,
                                  status__in=["draft", "pending"]).exclude(id=trip.id)):
        free = t.seats.filter(status=TripSeat.Status.AVAILABLE).count()
        dest_trips.append({"id": str(t.id), "number": t.number, "code": t.code, "free_seats": free})

    vehicles = []
    for v in eligible_vehicles(company, window_start=trip.scheduled_departure,
                               window_end=trip.scheduled_arrival, exclude_trip=trip):
        plan = active_seating_plan(v, trip.scheduled_departure.date())
        vehicles.append({
            "id": str(v.id), "license_plate": v.license_plate,
            "model_name": getattr(getattr(v, "model", None), "name", "") or "",
            "seats": _plan_capacity(plan),
        })

    return {"tickets": tickets, "parcels": parcels, "baggage": baggage,
            "dest_trips": dest_trips, "vehicles": vehicles}

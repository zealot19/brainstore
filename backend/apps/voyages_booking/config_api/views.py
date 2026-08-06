from rest_framework.views import APIView
from apps.core.permissions import IsInstitutionAdmin
from apps.core.responses import success_response, created_response, error_response, no_content_response
from apps.core.pagination import StandardResultsSetPagination
from apps.voyages_booking.models import Passenger
from apps.voyages_booking import selectors, services
from . import serializers as S
from .common import scope_company_id, resolve_company_or_global


class PassengerListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        qs = selectors.find_passengers(request.user.company, request.query_params.get("q"))
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(S.PassengerRead(page, many=True).data)

    def post(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        payload = S.PassengerWrite(data=request.data)
        payload.is_valid(raise_exception=True)
        p = services.get_or_create_passenger(company, user=request.user, **payload.validated_data)
        return created_response(S.PassengerRead(p).data)


class PassengerDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, request, pk):
        return Passenger.objects.filter(is_deleted=False, company_id=scope_company_id(request), id=pk).first()

    def get(self, request, pk):
        p = self._get(request, pk)
        return success_response(S.PassengerRead(p).data) if p else error_response("Introuvable.", status_code=404)

    def patch(self, request, pk):
        p = self._get(request, pk)
        if not p:
            return error_response("Introuvable.", status_code=404)
        payload = S.PassengerWrite(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        for k, v in payload.validated_data.items():
            setattr(p, k, v)
        p.updated_by = request.user
        p.save()
        return success_response(S.PassengerRead(p).data)

    def delete(self, request, pk):
        p = self._get(request, pk)
        if not p:
            return error_response("Introuvable.", status_code=404)
        p.is_deleted = True
        p.updated_by = request.user
        p.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return no_content_response()


from apps.core.exceptions import ApplicationError
from apps.voyages_booking.models import Booking, Ticket
from apps.voyages_trips.models import Trip


def _trip(company, trip_id):
    return Trip.objects.filter(is_deleted=False, company=company, id=trip_id).first()


class BookableTripsView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        trips = selectors.bookable_trips(
            request.user.company,
            fare_class_id=request.query_params.get("fare_class"),
            time_slot_id=request.query_params.get("time_slot"),
            travel_date=request.query_params.get("date") or None)
        return success_response(S.TripOptionSerializer(trips, many=True).data)


class TripSeatMapView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, trip_id):
        trip = _trip(request.user.company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        return success_response(S.SeatCellSerializer(selectors.seat_map(trip), many=True).data)


class TripDestinationsView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, trip_id):
        trip = _trip(request.user.company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        return success_response(S.TripDestinationSerializer(selectors.trip_destinations(trip), many=True).data)


class BookingListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        qs = selectors.list_bookings(
            request.user.company, status=request.query_params.get("status"),
            trip_id=request.query_params.get("trip"), q=request.query_params.get("q"))
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(S.BookingRead(page, many=True).data)

    def post(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        payload = S.BookingCreateSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        outbound = _trip(company, d["outbound_trip_id"])
        if not outbound:
            return error_response("Voyage aller introuvable.", status_code=404)
        return_trip = _trip(company, d["return_trip_id"]) if d.get("return_trip_id") else None
        try:
            booking = services.create_booking(
                company, trip_type=d["trip_type"], outbound_trip=outbound, return_trip=return_trip,
                buyer_spec=d["buyer"], items=d["items"], payment_method=d["payment_method"],
                amount_received=d["amount_received"], user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(S.BookingRead(booking).data)


class BookingDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, pk):
        b = selectors.booking_detail(request.user.company, pk)
        return success_response(S.BookingRead(b).data) if b else error_response("Introuvable.", status_code=404)

    def delete(self, request, pk):
        b = selectors.booking_detail(request.user.company, pk)
        if not b:
            return error_response("Introuvable.", status_code=404)
        services.cancel_booking(b, user=request.user)
        return success_response(S.BookingRead(b).data)


class BookingCancelView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, pk):
        b = selectors.booking_detail(request.user.company, pk)
        if not b:
            return error_response("Introuvable.", status_code=404)
        services.cancel_booking(b, user=request.user)
        return success_response(S.BookingRead(b).data)


class BookingNoShowView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, pk):
        b = selectors.booking_detail(request.user.company, pk)
        if not b:
            return error_response("Introuvable.", status_code=404)
        try:
            b = services.mark_no_show(b, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.BookingRead(b).data)


class TicketBoardView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, pk):
        t = Ticket.objects.filter(is_deleted=False, booking__company=request.user.company, id=pk).first()
        if not t:
            return error_response("Billet introuvable.", status_code=404)
        try:
            t = services.board_ticket(t, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.TicketRead(t).data)


class PassengerLoyaltyView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, pk):
        p = Passenger.objects.filter(is_deleted=False, company=request.user.company, id=pk).first()
        if not p:
            return error_response("Passager introuvable.", status_code=404)
        acc, movements = selectors.loyalty_view(p)
        return success_response({
            "account": S.LoyaltyAccountRead(acc).data if acc else None,
            "movements": S.LoyaltyMovementRead(movements, many=True).data,
        })


from apps.voyages_trips.models import Trip as VoyageTrip
from apps.voyages_consignment.selectors import trip_manifest


def _company_header(company, request):
    logo_url = None
    if getattr(company, "logo", None):
        try:
            logo_url = request.build_absolute_uri(company.logo.url)
        except Exception:
            logo_url = None
    address = str(company.address) if getattr(company, "address_id", None) else ""
    return {"name": company.name, "slogan": company.slogan or "", "logo_url": logo_url,
            "phone": company.phone or "", "email": company.email or "", "address": address}


class TripRoadmapView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, trip_id):
        trip = (VoyageTrip.objects.filter(is_deleted=False, company=request.user.company, id=trip_id)
                .select_related("route", "origin", "destination", "vehicle").first())
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)

        seats = trip.seats.filter(is_deleted=False)
        seats_total = seats.count()
        seats_sold = seats.filter(status__in=["sold"]).count()

        passengers = []
        boarded_count = 0
        for t in selectors.trip_passengers(trip):
            is_boarded = t.status == "boarded"
            if is_boarded:
                boarded_count += 1
            passengers.append({
                "ticket_id": str(t.id), "number": t.number,
                "passenger_name": t.passenger.full_name if t.passenger_id else "",
                "seat_number": t.trip_seat.seat_number if t.trip_seat_id else "",
                "destination_point_name": t.destination_point.name if t.destination_point_id else "",
                "direction_display": t.get_direction_display(),
                "status": t.status, "boarded": is_boarded,
                "boarded_at": t.boarded_at,
            })

        manifest = trip_manifest(trip)
        baggage = [{
            "tag_number": b.tag_number, "owner_name": b.owner_name,
            "ticket_id": str(b.ticket_id) if b.ticket_id else None,
            "passenger_name": (b.ticket.passenger.full_name if b.ticket_id and b.ticket.passenger_id else ""),
            "description": b.description, "weight_kg": b.weight_kg, "quantity": b.quantity,
        } for b in manifest["baggage"]]
        parcels = [{
            "reference": p.reference, "sender_name": p.sender_name, "sender_phone": p.sender_phone,
            "recipient_name": p.recipient_name, "recipient_phone": p.recipient_phone,
            "description": p.description, "quantity": p.quantity,
        } for p in manifest["parcels"]]

        crew = [{"role_display": c.get_role_display(),
                 "driver_name": c.driver.full_name if c.driver_id else ""}
                for c in trip.crew.filter(is_deleted=False)]

        data = {
            "company": _company_header(trip.company, request),
            "trip": {
                "number": trip.number, "route_code": trip.route.code if trip.route_id else "",
                "origin_name": trip.origin.name if trip.origin_id else "",
                "destination_name": trip.destination.name if trip.destination_id else "",
                "scheduled_departure": trip.scheduled_departure,
                "status": trip.status, "status_display": trip.get_status_display(),
                "vehicle_plate": trip.vehicle.license_plate if trip.vehicle_id else "",
                "crew": crew, "seats_total": seats_total, "seats_sold": seats_sold,
                "boarded_count": boarded_count,
            },
            "passengers": passengers, "baggage": baggage, "parcels": parcels,
        }
        return success_response(data)


class TripBoardAllView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, trip_id):
        trip = VoyageTrip.objects.filter(is_deleted=False, company=request.user.company, id=trip_id).first()
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        try:
            done = services.board_all_tickets(trip, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response({"done": done})


class BookingPrintView(APIView):
    """Données enrichies pour l'impression des billets d'une réservation."""
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, pk):
        b = selectors.booking_detail(request.user.company, pk)
        if not b:
            return error_response("Introuvable.", status_code=404)
        tickets = []
        for t in b.tickets.filter(is_deleted=False).exclude(status="cancelled").order_by("direction"):
            trip = t.trip if t.trip_id else None
            tickets.append({
                "number": t.number,
                "passenger_name": t.passenger.full_name if t.passenger_id else "",
                "direction_display": t.get_direction_display(),
                "trip_number": trip.number if trip else "",
                "route_code": trip.route.code if trip and trip.route_id else "",
                "origin_name": trip.origin.name if trip and trip.origin_id else "",
                "destination_name": t.destination_point.name if t.destination_point_id else (
                    trip.destination.name if trip and trip.destination_id else ""),
                "scheduled_departure": trip.scheduled_departure if trip else None,
                "seat_number": t.trip_seat.seat_number if t.trip_seat_id else "",
                "fare_class": t.fare_class.name if t.fare_class_id else "",
                "amount": t.amount,
                "is_reward": t.is_reward,
            })
        return success_response({
            "company": _company_header(request.user.company, request),
            "reference": b.reference,
            "buyer_name": b.buyer.full_name if b.buyer_id else "",
            "trip_type_display": b.get_trip_type_display(),
            "amount_paid": b.amount_paid,
            "created_at": b.created_at,
            "tickets": tickets,
        })

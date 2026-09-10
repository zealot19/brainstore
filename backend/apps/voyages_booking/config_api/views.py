from rest_framework.views import APIView
from apps.core.permissions import IsInstitutionAdmin, IsAuthenticated, HasModulePermission
from apps.core.responses import success_response, created_response, error_response, no_content_response
from apps.core.pagination import StandardResultsSetPagination
from apps.voyages_booking.models import Passenger
from apps.voyages_booking import selectors, services
from . import serializers as S
from .common import scope_company_id, resolve_company_or_global


class PassengerListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.customer.view', 'POST': 'ticketing.customer.manage'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.customer.view', 'PATCH': 'ticketing.customer.manage', 'PUT': 'ticketing.customer.manage', 'DELETE': 'ticketing.customer.manage'}

    def _get(self, request, pk):
        return Passenger.objects.filter(is_deleted=False, company_id=scope_company_id(request), id=pk).first()

    def get(self, request, pk):
        p = self._get(request, pk)
        return success_response(S.PassengerRead(p).data) if p else error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)

    def patch(self, request, pk):
        p = self._get(request, pk)
        if not p:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
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
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.booking.view'}

    def get(self, request):
        trips = selectors.bookable_trips(
            request.user.company,
            fare_class_id=request.query_params.get("fare_class"),
            time_slot_id=request.query_params.get("time_slot"),
            travel_date=request.query_params.get("date") or None)
        return success_response(S.TripOptionSerializer(trips, many=True).data)


class TripSeatMapView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.booking.view'}

    def get(self, request, trip_id):
        trip = _trip(request.user.company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        return success_response(S.SeatCellSerializer(selectors.seat_map(trip), many=True).data)


class TripDestinationsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.booking.view'}

    def get(self, request, trip_id):
        trip = _trip(request.user.company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        return success_response(S.TripDestinationSerializer(selectors.trip_destinations(trip), many=True).data)


class BookingListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.booking.view', 'POST': 'ticketing.booking.create'}

    def get(self, request):
        qs = selectors.list_bookings(
            request.user.company, status=request.query_params.get("status"),
            trip_id=request.query_params.get("trip"), q=request.query_params.get("q"),
            trip_type=request.query_params.get("trip_type"),
            channel=request.query_params.get("channel"),
            date_field=request.query_params.get("date_field"),
            date_from=request.query_params.get("date_from"),
            date_to=request.query_params.get("date_to"))
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
                amount_received=d["amount_received"], return_open=d["return_open"], user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(S.BookingRead(booking).data)


class OpenReturnsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.booking.view'}

    def get(self, request):
        qs = selectors.open_return_bookings(request.user.company, q=request.query_params.get("q"))
        return success_response(S.BookingRead(qs, many=True).data)


class BookingAssignReturnView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.booking.update'}

    def post(self, request, pk):
        b = selectors.booking_detail(request.user.company, pk)
        if not b:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        payload = S.AssignReturnSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        return_trip = _trip(request.user.company, d["return_trip_id"])
        if not return_trip:
            return error_response("Voyage retour introuvable.", status_code=404)
        try:
            b = services.assign_return(b, return_trip, items=d["items"], user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.BookingRead(b).data)


class BookingDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.booking.view', 'DELETE': 'ticketing.booking.cancel'}

    def get(self, request, pk):
        b = selectors.booking_detail(request.user.company, pk)
        return success_response(S.BookingRead(b).data) if b else error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)

    def delete(self, request, pk):
        b = selectors.booking_detail(request.user.company, pk)
        if not b:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        services.cancel_booking(b, user=request.user)
        return success_response(S.BookingRead(b).data)


class BookingCancelView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.booking.cancel'}

    def post(self, request, pk):
        b = selectors.booking_detail(request.user.company, pk)
        if not b:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        services.cancel_booking(b, user=request.user)
        return success_response(S.BookingRead(b).data)


class BookingNoShowView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.booking.noshow'}

    def post(self, request, pk):
        b = selectors.booking_detail(request.user.company, pk)
        if not b:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        try:
            b = services.mark_no_show(b, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.BookingRead(b).data)


class TicketBoardView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.booking.board'}

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
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.customer.view'}

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


def build_roadmap_data(trip, request):
    """Assemble le contexte de la feuille de route (partagé par le JSON et le PDF)."""
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

    crew = [{"role_display": (c.member.member_type.name if (c.member_id and c.member.member_type_id) else ""),
             "driver_name": c.member.full_name if c.member_id else ""}
            for c in trip.crew.filter(is_deleted=False).select_related("member__member_type")]

    return {
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


def _roadmap_trip(request, trip_id):
    return (VoyageTrip.objects.filter(is_deleted=False, company=request.user.company, id=trip_id)
            .select_related("route", "origin", "destination", "vehicle").first())


class TripRoadmapView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.booking.view'}

    def get(self, request, trip_id):
        trip = _roadmap_trip(request, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        return success_response(build_roadmap_data(trip, request))


class TripRoadmapPdfView(APIView):
    """PDF (WeasyPrint) de la feuille de route : ?doc=voyages (passagers+bagages) ou colis."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.booking.view'}

    def get(self, request, trip_id):
        from django.http import HttpResponse
        from apps.voyages_booking.roadmap_pdf import render_roadmap_pdf
        trip = _roadmap_trip(request, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        doc = "colis" if request.query_params.get("doc") == "colis" else "voyages"
        data = build_roadmap_data(trip, request)
        try:
            pdf = render_roadmap_pdf(data, doc)
        except (ImportError, OSError):
            return error_response(
                "Génération PDF indisponible : le moteur WeasyPrint n'est pas configuré sur ce serveur "
                "(librairies Pango/Cairo manquantes). Contactez l'administrateur.",
                status_code=503)
        filename = f"bordereau-{doc}-{trip.number}.pdf".replace("/", "-")
        resp = HttpResponse(pdf, content_type="application/pdf")
        resp["Content-Disposition"] = f'inline; filename="{filename}"'
        return resp


class TripBoardAllView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.booking.board'}

    def post(self, request, trip_id):
        trip = VoyageTrip.objects.filter(is_deleted=False, company=request.user.company, id=trip_id).first()
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        try:
            done = services.board_all_tickets(trip, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response({"done": done})


class BookingRenderTicketsView(APIView):
    """HTML des billets d'une réservation, rendu depuis le modèle « Config billets »."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.ticket.view'}

    def get(self, request, pk):
        from datetime import timedelta
        from django.utils import timezone
        from apps.voyages_config import ticket_render
        from apps.voyages_config.models import VoyagesSettings
        b = selectors.booking_detail(request.user.company, pk)
        if not b:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        company = request.user.company
        tpl = ticket_render.get_or_create_template(company)
        base = ticket_render.company_tokens(company, request)
        settings = (VoyagesSettings.objects.filter(is_deleted=False, company=company).first()
                    or VoyagesSettings.objects.filter(is_deleted=False, company__isnull=True).first())
        expiry_days = settings.ticket_expiry_days if settings else 7
        now = timezone.now()
        reg = timezone.localtime(b.created_at)
        exp = reg + timedelta(days=expiry_days)
        pages = []
        for t in b.tickets.filter(is_deleted=False).exclude(status="cancelled").order_by("direction"):
            trip = t.trip if t.trip_id else None
            dep = timezone.localtime(trip.scheduled_departure) if trip else None
            tokens = dict(base)
            tokens.update({
                "ticket_number": t.number, "booking_reference": b.reference,
                "passenger_name": t.passenger.full_name if t.passenger_id else "",
                "seat": t.trip_seat.seat_number if t.trip_seat_id else "",
                "departure": trip.origin.name if trip and trip.origin_id else "",
                "destination": t.destination_point.name if t.destination_point_id else (
                    trip.destination.name if trip and trip.destination_id else ""),
                "travel_date": dep.strftime("%d/%m/%Y") if dep else "",
                "travel_time": dep.strftime("%HH%M") if dep else "",
                "travel_class": t.fare_class.name if t.fare_class_id else "",
                "trip_type": t.get_direction_display(),
                "trip_number": trip.number if trip else "",
                "vehicle": trip.vehicle.license_plate if trip and trip.vehicle_id else "",
                "agent": (b.created_by.get_full_name() or b.created_by.username) if b.created_by_id else "",
                "ticket_price": f"{t.amount:.0f} XAF",
                "registered_date": reg.strftime("%d/%m/%Y"),
                "printed_date": now.strftime("%d/%m/%Y"),
                "expiration_date": exp.strftime("%d/%m/%Y"),
            })
            pages.extend(ticket_render.build_ticket_pages(tpl, tokens, request=request))
        return success_response({"html": ticket_render.render_document(pages, tpl=tpl)})


class BookingPrintView(APIView):
    """Données enrichies pour l'impression des billets d'une réservation."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.ticket.print'}

    def get(self, request, pk):
        b = selectors.booking_detail(request.user.company, pk)
        if not b:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
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


class BookingStatsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "ticketing.booking.view"}

    def get(self, request):
        from apps.voyages_booking.stats import get_booking_stats
        if not request.user.company_id:
            return error_response("Votre compte n'est lié à aucune institution.", status_code=400)
        return success_response(get_booking_stats(request.user.company_id))


class BookingSeriesView(APIView):
    """Série journalière (réservations + recette) pour les graphiques du tableau de bord."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "ticketing.booking.view"}

    def get(self, request):
        from apps.voyages_booking.stats import get_booking_series
        if not request.user.company_id:
            return error_response("Votre compte n'est lié à aucune institution.", status_code=400)
        try:
            days = int(request.query_params.get("days", 14))
        except (TypeError, ValueError):
            days = 14
        return success_response(get_booking_series(request.user.company_id, days))

import hashlib
import hmac
import logging

from django.conf import settings
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.core.exceptions import ApplicationError
from apps.online_booking import selectors, services
from apps.online_booking.serializers import (
    PublicTripSerializer, TripSearchQuerySerializer, SeatMapSerializer,
    InitiateBookingSerializer, BookingRequestStatusSerializer,
    CampayWebhookSerializer,
)

logger = logging.getLogger(__name__)


def _get_company(company_id):
    from apps.system_config.models import Company
    try:
        return Company.objects.get(id=company_id, is_deleted=False)
    except Company.DoesNotExist:
        return None


# ── Trip search ────────────────────────────────────────────────────────────────

class PublicTripSearchView(APIView):
    """Public: search available trips for a company."""
    permission_classes = [AllowAny]

    def get(self, request, company_id):
        company = _get_company(company_id)
        if not company:
            return Response(status=status.HTTP_404_NOT_FOUND)

        ser = TripSearchQuerySerializer(data=request.query_params)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data

        trips = selectors.search_trips(
            company.id,
            from_city_id=d["from_city_id"],
            to_city_id=d["to_city_id"],
            travel_date=d["travel_date"],
        )
        return Response(PublicTripSerializer(trips, many=True).data)


class PublicTripDetailView(APIView):
    """Public: trip detail for online booking."""
    permission_classes = [AllowAny]

    def get(self, request, company_id, trip_id):
        company = _get_company(company_id)
        if not company:
            return Response(status=status.HTTP_404_NOT_FOUND)
        trip = selectors.get_public_trip(trip_id, company.id)
        if not trip:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(PublicTripSerializer(trip).data)


class PublicSeatMapView(APIView):
    """Public: seat availability map for a trip."""
    permission_classes = [AllowAny]

    def get(self, request, company_id, trip_id):
        company = _get_company(company_id)
        if not company:
            return Response(status=status.HTTP_404_NOT_FOUND)
        trip = selectors.get_public_trip(trip_id, company.id)
        if not trip:
            return Response(status=status.HTTP_404_NOT_FOUND)

        cat          = trip.vehicle_category
        booked_seats = selectors.get_booked_seats(trip_id)
        available    = max(0, trip.total_seats - len(booked_seats))

        data = SeatMapSerializer({
            "total_seats":     trip.total_seats,
            "free_seating":    trip.free_seating,
            "seat_rows":       cat.seat_rows,
            "seat_cols":       cat.seat_cols,
            "aisle_after_col": cat.aisle_after_col,
            "has_back_row":    cat.has_back_row,
            "booked_seats":    booked_seats,
            "available_count": available,
        })
        return Response(data.data)


# ── Booking initiation ─────────────────────────────────────────────────────────

class InitiateBookingView(APIView):
    """Public: submit a booking request and initiate Mobile Money payment."""
    permission_classes = [AllowAny]

    def post(self, request, company_id, trip_id):
        company = _get_company(company_id)
        if not company:
            return Response(status=status.HTTP_404_NOT_FOUND)
        trip = selectors.get_public_trip(trip_id, company.id)
        if not trip:
            return Response({"detail": "Trip not found or no longer available."},
                            status=status.HTTP_404_NOT_FOUND)

        ser = InitiateBookingSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data

        fare = None
        if d.get("fare_id"):
            from apps.transport_config.models import Fare
            try:
                fare = Fare.objects.get(id=d["fare_id"], is_deleted=False)
            except Fare.DoesNotExist:
                return Response({"detail": "Fare not found."}, status=status.HTTP_404_NOT_FOUND)

        try:
            booking_request = services.initiate_booking(
                company=company, trip=trip,
                passenger_name=d["passenger_name"],
                passenger_phone=d["passenger_phone"],
                passenger_email=d.get("passenger_email", ""),
                passenger_type=d.get("passenger_type", "adult"),
                seat_number=d.get("seat_number", ""),
                fare=fare, amount=d["amount"],
                payment_method=d["payment_method"],
                payment_phone=d["payment_phone"],
            )
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        return Response(
            BookingRequestStatusSerializer(booking_request).data,
            status=status.HTTP_201_CREATED,
        )


# ── Booking status ─────────────────────────────────────────────────────────────

class BookingRequestStatusView(APIView):
    """Public: check status of a booking request (UUID is the secret)."""
    permission_classes = [AllowAny]

    def get(self, request, request_id):
        booking_request = selectors.get_booking_request(request_id)
        if not booking_request:
            return Response(status=status.HTTP_404_NOT_FOUND)

        # Poll Campay if still pending
        if booking_request.status == booking_request.Status.PENDING:
            booking_request = services.sync_payment_status(booking_request)

        return Response(BookingRequestStatusSerializer(booking_request).data)


# ── Campay webhook ────────────────────────────────────────────────────────────

class CampayWebhookView(APIView):
    """
    Campay calls this endpoint to confirm or fail a payment.
    Validate the request using CAMPAY_WEBHOOK_SECRET if configured.
    """
    permission_classes = [AllowAny]

    def _verify_signature(self, request) -> bool:
        secret = getattr(settings, "CAMPAY_WEBHOOK_SECRET", "")
        if not secret:
            return True  # signature verification not configured
        received = request.headers.get("X-Campay-Signature", "")
        expected = hmac.new(secret.encode(), request.body, hashlib.sha256).hexdigest()
        return hmac.compare_digest(received, expected)

    def post(self, request):
        if not self._verify_signature(request):
            logger.warning("Campay webhook: invalid signature")
            return Response({"detail": "Invalid signature."}, status=status.HTTP_403_FORBIDDEN)

        ser = CampayWebhookSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data

        campay_ref = d["reference"]
        ext_ref    = d.get("external_reference", "")
        op_ref     = d.get("operator_reference", "")
        camp_status = d["status"].upper()

        # Locate the booking request by Campay reference
        booking_request = selectors.get_booking_request_by_payment_ref(campay_ref)
        if not booking_request:
            # Fallback: try external_reference (which is our request UUID)
            if ext_ref:
                booking_request = selectors.get_booking_request(ext_ref)
        if not booking_request:
            logger.warning("Campay webhook: unknown reference %s", campay_ref)
            return Response(status=status.HTTP_200_OK)  # ACK to avoid retries

        if camp_status == "SUCCESSFUL":
            services.confirm_payment(booking_request, operator_ref=op_ref)
        elif camp_status in ("FAILED", "CANCELLED"):
            services.fail_payment(booking_request, operator_ref=op_ref)
        else:
            logger.info("Campay webhook: status %s for %s — ignoring", camp_status, campay_ref)

        return Response(status=status.HTTP_200_OK)

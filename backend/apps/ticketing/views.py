from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.core.permissions import IsInstitutionAdmin, IsAuthenticated
from apps.core.pagination import StandardResultsSetPagination
from apps.core.exceptions import ApplicationError

from apps.ticketing import selectors, services
from apps.ticketing.serializers import (
    CustomerReadSerializer, CustomerWriteSerializer,
    BookingReadSerializer, BookingWriteSerializer,
    BookingStatsSerializer, QRScanSerializer,
    LuggageReadSerializer, LuggageWriteSerializer, LuggageStatusSerializer,
    TicketSerializer,
)


def _company(request):
    return request.user.company


# ── Customers ──────────────────────────────────────────────────────────────────

class CustomerListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        qs = selectors.list_customers(
            _company(request).id,
            search=request.query_params.get("search"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(CustomerReadSerializer(page, many=True).data)

    def post(self, request):
        ser = CustomerWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data
        customer = services.create_customer(
            company=_company(request), created_by=request.user, **d
        )
        return Response(CustomerReadSerializer(customer).data, status=status.HTTP_201_CREATED)


class CustomerDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def _get(self, request, customer_id):
        obj = selectors.get_customer(customer_id, _company(request).id)
        if not obj:
            return None
        return obj

    def get(self, request, customer_id):
        obj = self._get(request, customer_id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(CustomerReadSerializer(obj).data)

    def patch(self, request, customer_id):
        obj = self._get(request, customer_id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        ser = CustomerWriteSerializer(data=request.data, partial=True)
        ser.is_valid(raise_exception=True)
        obj = services.update_customer(obj, updated_by=request.user, **ser.validated_data)
        return Response(CustomerReadSerializer(obj).data)

    def delete(self, request, customer_id):
        obj = self._get(request, customer_id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            services.delete_customer(obj, deleted_by=request.user)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_204_NO_CONTENT)


# ── Bookings ───────────────────────────────────────────────────────────────────

class BookingListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        params = request.query_params
        qs = selectors.list_bookings(
            _company(request).id,
            trip_id     = params.get("trip_id"),
            customer_id = params.get("customer_id"),
            status      = params.get("status"),
            date_from   = params.get("date_from"),
            date_to     = params.get("date_to"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(BookingReadSerializer(page, many=True).data)

    def post(self, request):
        company = _company(request)
        ser = BookingWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data

        from apps.voyage.models import Trip
        try:
            trip = Trip.objects.get(id=d["trip_id"], company=company, is_deleted=False)
        except Trip.DoesNotExist:
            return Response({"detail": "Trip not found."}, status=status.HTTP_404_NOT_FOUND)

        customer = selectors.get_customer(d["customer_id"], company.id)
        if not customer:
            return Response({"detail": "Customer not found."}, status=status.HTTP_404_NOT_FOUND)

        fare = None
        if d.get("fare_id"):
            from apps.transport_config.models import Fare
            try:
                fare = Fare.objects.get(id=d["fare_id"], is_deleted=False)
            except Fare.DoesNotExist:
                return Response({"detail": "Fare not found."}, status=status.HTTP_404_NOT_FOUND)

        try:
            booking = services.create_booking(
                company=company, trip=trip, customer=customer,
                passenger_type=d.get("passenger_type", "adult"),
                seat_number=d.get("seat_number", ""),
                fare=fare,
                amount_paid=d.get("amount_paid", 0),
                notes=d.get("notes", ""),
                created_by=request.user,
            )
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        return Response(
            BookingReadSerializer(selectors.get_booking(booking.id, company.id)).data,
            status=status.HTTP_201_CREATED,
        )


class BookingDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, booking_id):
        obj = selectors.get_booking(booking_id, _company(request).id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(BookingReadSerializer(obj).data)

    def delete(self, request, booking_id):
        obj = selectors.get_booking(booking_id, _company(request).id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            services.cancel_booking(obj, updated_by=request.user)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_204_NO_CONTENT)


class BookingConfirmView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, booking_id):
        obj = selectors.get_booking(booking_id, _company(request).id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            obj = services.confirm_booking(obj, updated_by=request.user)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(BookingReadSerializer(selectors.get_booking(obj.id, _company(request).id)).data)


class BookingBoardView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, booking_id):
        obj = selectors.get_booking(booking_id, _company(request).id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            obj = services.board_passenger(obj, updated_by=request.user)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(BookingReadSerializer(selectors.get_booking(obj.id, _company(request).id)).data)


class BookingCancelView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, booking_id):
        obj = selectors.get_booking(booking_id, _company(request).id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            obj = services.cancel_booking(obj, updated_by=request.user)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(BookingReadSerializer(selectors.get_booking(obj.id, _company(request).id)).data)


class BookingNoShowView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, booking_id):
        obj = selectors.get_booking(booking_id, _company(request).id)
        if not obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            obj = services.mark_no_show(obj, updated_by=request.user)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(BookingReadSerializer(selectors.get_booking(obj.id, _company(request).id)).data)


class BookingStatsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        stats = selectors.get_booking_stats(
            _company(request).id,
            trip_id=request.query_params.get("trip_id"),
        )
        return Response(BookingStatsSerializer(stats).data)


class TripBookingListView(APIView):
    """All bookings for a given trip — used in boarding view."""
    permission_classes = [IsAuthenticated]

    def get(self, request, trip_id):
        company = _company(request)
        qs = selectors.list_trip_bookings(trip_id, company.id)
        return Response(BookingReadSerializer(qs, many=True).data)


# ── QR Scan ────────────────────────────────────────────────────────────────────

class QRScanView(APIView):
    """Scan a QR code to board a passenger."""
    permission_classes = [IsAuthenticated]

    def post(self, request):
        company = _company(request)
        ser = QRScanSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            booking = services.board_by_qr(
                ser.validated_data["qr_code"],
                company.id,
                updated_by=request.user,
            )
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(BookingReadSerializer(selectors.get_booking(booking.id, company.id)).data)


# ── Luggage ────────────────────────────────────────────────────────────────────

class LuggageListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, booking_id):
        company = _company(request)
        items = selectors.list_luggage(booking_id, company.id)
        if items is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(LuggageReadSerializer(items, many=True).data)

    def post(self, request, booking_id):
        company = _company(request)
        booking = selectors.get_booking(booking_id, company.id)
        if not booking:
            return Response(status=status.HTTP_404_NOT_FOUND)
        ser = LuggageWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        item = services.add_luggage(
            booking=booking, created_by=request.user, **ser.validated_data
        )
        return Response(LuggageReadSerializer(item).data, status=status.HTTP_201_CREATED)


class LuggageDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, booking_id, luggage_id):
        item = selectors.get_luggage(luggage_id, booking_id, _company(request).id)
        if not item:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(LuggageReadSerializer(item).data)

    def delete(self, request, booking_id, luggage_id):
        item = selectors.get_luggage(luggage_id, booking_id, _company(request).id)
        if not item:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            services.delete_luggage(item, deleted_by=request.user)
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_204_NO_CONTENT)


class LuggageStatusView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, booking_id, luggage_id):
        item = selectors.get_luggage(luggage_id, booking_id, _company(request).id)
        if not item:
            return Response(status=status.HTTP_404_NOT_FOUND)
        ser = LuggageStatusSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            item = services.update_luggage_status(
                item, new_status=ser.validated_data["status"], updated_by=request.user
            )
        except ApplicationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(LuggageReadSerializer(item).data)

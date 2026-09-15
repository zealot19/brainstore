from django.db.models import Q
from rest_framework.views import APIView
from apps.core.permissions import IsInstitutionAdmin, IsAuthenticated, HasModulePermission
from apps.core.responses import success_response, created_response, error_response, no_content_response
from apps.core.exceptions import ApplicationError
from apps.core.pagination import StandardResultsSetPagination
from apps.voyages_config.models import ServicePoint, ConsignmentType
from apps.voyages_trips.models import Trip
from apps.voyages_booking.models import Ticket
from apps.voyages_consignment.models import Parcel, Baggage
from apps.voyages_consignment import selectors, services
from . import serializers as S
from .common import scope_company_id, resolve_company_or_global


def _cfg(model, company_id, pk):
    return model.objects.filter(is_deleted=False, id=pk).filter(
        Q(company_id=company_id) | Q(company__isnull=True)).first()


class ParcelListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.parcel.view', 'POST': 'ticketing.parcel.manage'}

    def get(self, request):
        qs = selectors.list_parcels(
            request.user.company,
            status=request.query_params.get("status"),
            trip_id=request.query_params.get("trip"),
            q=request.query_params.get("q"),
            consignment_type=request.query_params.get("consignment_type"),
            origin_point=request.query_params.get("origin_point"),
            destination_point=request.query_params.get("destination_point"),
            date_field=request.query_params.get("date_field"),
            date_from=request.query_params.get("date_from"),
            date_to=request.query_params.get("date_to"))
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(qs, request)
        return paginator.get_paginated_response(S.ParcelRead(page, many=True).data)

    def post(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        payload = S.ParcelWrite(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        cid = company.id
        origin = _cfg(ServicePoint, cid, d["origin_point_id"])
        dest = _cfg(ServicePoint, cid, d["destination_point_id"])
        ctype = _cfg(ConsignmentType, cid, d["consignment_type_id"])
        if not origin or not dest or not ctype:
            return error_response("Référence introuvable (point ou type).", status_code=404)
        try:
            parcel = services.register_parcel(
                company, origin_point=origin, destination_point=dest, consignment_type=ctype,
                sender_name=d["sender_name"], sender_phone=d["sender_phone"],
                recipient_name=d["recipient_name"], recipient_phone=d["recipient_phone"],
                recipient_address=d["recipient_address"], description=d["description"],
                weight_kg=d["weight_kg"], quantity=d["quantity"], declared_value=d["declared_value"],
                amount_due=d["amount_due"], amount_received=d["amount_received"],
                payment_method=d["payment_method"], user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(S.ParcelRead(parcel).data)


class ParcelDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.parcel.view', 'PATCH': 'ticketing.parcel.manage', 'PUT': 'ticketing.parcel.manage', 'DELETE': 'ticketing.parcel.manage'}

    def get(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk)
        return success_response(S.ParcelRead(p).data) if p else error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)

    def patch(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk)
        if not p:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        payload = S.ParcelEditSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            p = services.edit_parcel(p, user=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelRead(p).data)

    def delete(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk)
        if not p:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        try:
            services.cancel_parcel(p, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelRead(p).data)


class ParcelPendingView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.parcel.view'}

    def get(self, request):
        qs = selectors.pending_for_trip(request.user.company, route_id=request.query_params.get("route"))
        return success_response(S.ParcelRead(qs, many=True).data)


class ParcelAssignTripView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.parcel.manage'}

    def post(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk)
        if not p:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        payload = S.AssignTripSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        trip = Trip.objects.filter(is_deleted=False, company=request.user.company,
                                   id=payload.validated_data["trip_id"]).first()
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        try:
            p = services.assign_to_trip(p, trip, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelRead(p).data)


class ParcelArrivedView(APIView):
    """Réception quantitative d'un colis (pièces reçues / manquantes / avariées)."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.parcel.manage'}

    def post(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk)
        if not p:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        payload = S.ParcelReceiveSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            p = services.receive_parcel(p, received_pieces=d["received_pieces"],
                                        missing_pieces=d["missing_pieces"],
                                        damaged_pieces=d["damaged_pieces"], user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelRead(p).data)


class ParcelUnloadView(APIView):
    """Retire un colis de son voyage (retour au pool « prêt »)."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.parcel.manage'}

    def post(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk)
        if not p:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        try:
            p = services.unassign_from_trip(p, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelRead(p).data)


class _ParcelActionView(APIView):
    """Base : applique un service de transition (sans corps) à un colis."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.parcel.manage'}
    service_fn = None

    def post(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk)
        if not p:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        try:
            p = type(self).service_fn(p, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelRead(p).data)


class ParcelLoadView(_ParcelActionView):
    service_fn = staticmethod(services.load_parcel)


class ParcelDispatchView(_ParcelActionView):
    service_fn = staticmethod(services.dispatch_parcel)


class ParcelArriveView(_ParcelActionView):
    service_fn = staticmethod(services.mark_arrived)


class ParcelUnassignView(_ParcelActionView):
    service_fn = staticmethod(services.unassign_from_trip)


class ParcelExpeditionView(APIView):
    """Listes de l'écran Expédition : colis prêts (pool) + colis du voyage + totaux."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.parcel.view'}

    def get(self, request):
        company = request.user.company
        trip_id = request.query_params.get("trip")
        destination = request.query_params.get("destination")
        ready = selectors.ready_parcels(company, destination_point=destination)
        assigned = selectors.trip_parcels(company, trip_id) if trip_id else Parcel.objects.none()
        assigned = list(assigned)
        weight = sum(float(p.weight_kg or 0) for p in assigned)
        return success_response({
            "ready": S.ParcelRead(ready, many=True).data,
            "assigned": S.ParcelRead(assigned, many=True).data,
            "totals": {"count": len(assigned), "weight": weight},
        })


class ParcelPickupView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.parcel.manage'}

    def post(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk)
        if not p:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        payload = S.ParcelPickupSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        try:
            p = services.pickup_parcel(p, picked_up_by=payload.validated_data["picked_up_by"],
                                       picked_up_id_number=payload.validated_data["picked_up_id_number"],
                                       user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelRead(p).data)


class ParcelCancelView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.parcel.manage'}

    def post(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk)
        if not p:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        try:
            p = services.cancel_parcel(p, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelRead(p).data)


class BaggageListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.luggage.view', 'POST': 'ticketing.luggage.manage'}

    def get(self, request):
        qs = selectors.list_baggage(
            request.user.company,
            ticket_id=request.query_params.get("ticket"),
            trip_id=request.query_params.get("trip"),
            status=request.query_params.get("status"),
            q=request.query_params.get("q"),
            consignment_type=request.query_params.get("consignment_type"),
            date_field=request.query_params.get("date_field"),
            date_from=request.query_params.get("date_from"),
            date_to=request.query_params.get("date_to"))
        return success_response(S.BaggageRead(qs, many=True).data)

    def post(self, request):
        company, err = resolve_company_or_global(request)
        if err:
            return err
        payload = S.BaggageWrite(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        trip = Trip.objects.filter(is_deleted=False, company=company, id=d["trip_id"]).first()
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        ticket = None
        if d["ticket_id"]:
            ticket = Ticket.objects.filter(is_deleted=False, booking__company=company, id=d["ticket_id"]).first()
            if not ticket:
                return error_response("Billet introuvable.", status_code=404)
        ctype = None
        if d["consignment_type_id"]:
            ctype = _cfg(ConsignmentType, company.id, d["consignment_type_id"])
            if not ctype:
                return error_response("Type introuvable.", status_code=404)
        try:
            bag = services.add_baggage(
                company, trip=trip, ticket=ticket, consignment_type=ctype, description=d["description"],
                weight_kg=d["weight_kg"], quantity=d["quantity"], declared_value=d["declared_value"],
                sender_name=d["sender_name"], sender_phone=d["sender_phone"], civility=d["civility"],
                id_type=d["id_type"], id_number=d["id_number"], birth_date=d["birth_date"], email=d["email"],
                amount_due=d["amount_due"], amount_received=d["amount_received"],
                payment_method=d["payment_method"], user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(S.BaggageRead(bag).data)


class BaggageDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.luggage.view', 'PATCH': 'ticketing.luggage.manage', 'PUT': 'ticketing.luggage.manage', 'DELETE': 'ticketing.luggage.manage'}

    def _get(self, request, pk):
        return Baggage.objects.filter(is_deleted=False, company=request.user.company, id=pk).first()

    def get(self, request, pk):
        b = self._get(request, pk)
        return success_response(S.BaggageRead(b).data) if b else error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)

    def patch(self, request, pk):
        b = self._get(request, pk)
        if not b:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        payload = S.BaggageEditSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            b = services.edit_baggage(b, user=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.BaggageRead(b).data)

    def delete(self, request, pk):
        b = self._get(request, pk)
        if not b:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        try:
            services.cancel_baggage(b, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.BaggageRead(b).data)


class BaggageLoadView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.luggage.manage'}

    def post(self, request, pk):
        b = Baggage.objects.filter(is_deleted=False, company=request.user.company, id=pk).first()
        if not b:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        try:
            b = services.load_baggage(b, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.BaggageRead(b).data)


class BaggageDeliverView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.luggage.manage'}

    def post(self, request, pk):
        b = Baggage.objects.filter(is_deleted=False, company=request.user.company, id=pk).first()
        if not b:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        payload = S.BaggageDeliverSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        try:
            b = services.deliver_baggage(b, comment=payload.validated_data["comment"],
                                         delivered_at=payload.validated_data["delivered_at"], user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.BaggageRead(b).data)


def _bulk_apply(items, fn, user):
    """Applique fn(obj, user=user) à chaque objet ; renvoie (done, erreurs)."""
    done, errors = 0, []
    for obj in items:
        try:
            fn(obj, user=user)
            done += 1
        except ApplicationError as e:
            errors.append(str(e))
    return done, errors


class ParcelBulkView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.parcel.manage'}

    def post(self, request):
        ids = request.data.get("ids") or []
        action = request.data.get("action")
        if not ids:
            return error_response("Aucun colis sélectionné.")
        qs = Parcel.objects.filter(is_deleted=False, company=request.user.company, id__in=ids)
        fn = {"dispatch": services.dispatch_parcel, "arrive": services.mark_arrived,
              "receive": services.receive_parcel, "load": services.load_parcel,
              "unassign": services.unassign_from_trip,
              "cancel": services.cancel_parcel}.get(action)
        if not fn:
            return error_response("Action inconnue.")
        done, errors = _bulk_apply(list(qs), fn, request.user)
        return success_response({"done": done, "errors": errors})


class BaggageBulkView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.luggage.manage'}

    def post(self, request):
        ids = request.data.get("ids") or []
        action = request.data.get("action")
        if not ids:
            return error_response("Aucun bagage sélectionné.")
        qs = Baggage.objects.filter(is_deleted=False, company=request.user.company, id__in=ids)
        fn = {"load": services.load_baggage, "deliver": services.deliver_baggage,
              "cancel": services.cancel_baggage}.get(action)
        if not fn:
            return error_response("Action inconnue.")
        done, errors = _bulk_apply(list(qs), fn, request.user)
        return success_response({"done": done, "errors": errors})


class TripManifestView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.parcel.view'}

    def get(self, request, trip_id):
        trip = Trip.objects.filter(is_deleted=False, company=request.user.company, id=trip_id).first()
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        m = selectors.trip_manifest(trip)
        return success_response({
            "parcels": S.ParcelRead(m["parcels"], many=True).data,
            "baggage": S.BaggageRead(m["baggage"], many=True).data,
        })


from apps.voyages_config import ticket_render
from apps.voyages_consignment import doc_render


def _agent(user):
    return (user.get_full_name() or user.username) if user else ""


class ParcelReceiptView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.parcel.view'}

    def get(self, request, pk):
        p = (Parcel.objects.filter(is_deleted=False, company=request.user.company, id=pk)
             .select_related("origin_point", "destination_point").first())
        if not p:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        tpl = ticket_render.get_or_create_template(request.user.company)
        logo_url = ticket_render._abs(request, tpl.logo)
        html = doc_render.build_parcel_receipt(p, tpl, agent=_agent(request.user), logo_url=logo_url)
        return success_response({"html": html})


class BaggageTicketView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.luggage.view'}

    def get(self, request, pk):
        b = (Baggage.objects.filter(is_deleted=False, company=request.user.company, id=pk)
             .select_related("trip", "trip__route", "trip__destination", "trip__vehicle",
                             "ticket", "ticket__passenger").first())
        if not b:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        tpl = ticket_render.get_or_create_template(request.user.company)
        logo_url = ticket_render._abs(request, tpl.logo)
        html = doc_render.build_baggage_ticket(b, tpl, agent=_agent(request.user), logo_url=logo_url)
        return success_response({"html": html})


class BaggageLabelView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.luggage.view'}

    def get(self, request, pk):
        b = (Baggage.objects.filter(is_deleted=False, company=request.user.company, id=pk)
             .select_related("trip", "trip__route", "trip__destination",
                             "ticket", "ticket__passenger").first())
        if not b:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        tpl = ticket_render.get_or_create_template(request.user.company)
        html = doc_render.build_baggage_label(b, tpl, agent=_agent(request.user))
        return success_response({"html": html})


class ParcelStatsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "ticketing.parcel.view"}

    def get(self, request):
        from apps.voyages_consignment.stats import get_parcel_stats
        if not request.user.company_id:
            return error_response("Votre compte n'est lié à aucune institution.", status_code=400)
        return success_response(get_parcel_stats(request.user.company_id))

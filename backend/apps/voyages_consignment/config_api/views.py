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
from apps.system_config.selectors.archiving import wants_archived
from . import serializers as S
from .common import scope_company_id, resolve_company_or_global


def _cfg(model, company_id, pk):
    return model.objects.filter(is_deleted=False, id=pk).filter(
        Q(company_id=company_id) | Q(company__isnull=True)).first()


def _user_base_station(user, company_id):
    """Station (ServicePoint) de l'agence de base de l'utilisateur, ou None.

    #1 : à l'enregistrement d'un colis, l'origine est imposée = la station de
    l'agence à laquelle l'agent est rattaché (default_agency). Chaque agence a
    sa station (cf. ensure_agency_station).

    Les admins (institution / super) ne sont PAS restreints : ils supervisent
    toutes les agences et choisissent librement l'origine (repli sur la valeur
    fournie)."""
    if getattr(user, "is_superuser", False) or getattr(user, "is_institution_admin", False):
        return None
    aid = getattr(user, "default_agency_id", None)
    if not aid:
        return None
    return ServicePoint.objects.filter(
        is_deleted=False, company_id=company_id, agency_id=aid).first()


class ParcelListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.parcel.view', 'POST': 'ticketing.parcel.create'}

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
            date_to=request.query_params.get("date_to"),
            delivered_home=request.query_params.get("delivered_home"),
            delivery_payment_method=request.query_params.get("delivery_payment_method"),
            user=request.user, include_archived=wants_archived(request))
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
        # #1 : l'origine est TOUJOURS la station de l'agence de base de l'agent
        # expéditeur (on n'utilise pas la valeur envoyée par le client). Repli sur
        # l'origine fournie uniquement si l'utilisateur n'a pas d'agence par défaut
        # (ex. admin d'institution).
        origin = _user_base_station(request.user, cid) or _cfg(ServicePoint, cid, d.get("origin_point_id"))
        dest = _cfg(ServicePoint, cid, d["destination_point_id"])
        ctype = _cfg(ConsignmentType, cid, d["consignment_type_id"])
        from apps.voyages_config.models import ConsignmentNature
        nature = _cfg(ConsignmentNature, cid, d["nature_id"]) if d.get("nature_id") else None
        if not origin or not dest or not ctype:
            return error_response("Référence introuvable (point ou type).", status_code=404)
        try:
            parcel = services.register_parcel(
                company, origin_point=origin, destination_point=dest, consignment_type=ctype,
                nature=nature, content=d["content"],
                sender_name=d["sender_name"], sender_phone=d["sender_phone"],
                sender_civility=d["sender_civility"], sender_id_type=d["sender_id_type"],
                sender_id_number=d["sender_id_number"],
                recipient_name=d["recipient_name"], recipient_phone=d["recipient_phone"],
                recipient_address=d["recipient_address"], description=d["description"],
                weight_kg=d["weight_kg"], quantity=d["quantity"], declared_value=d["declared_value"],
                amount_due=d["amount_due"], amount_received=d["amount_received"],
                payment_method=d["payment_method"], user=request.user,
                cash_register_id=request.data.get("cash_register_id"))
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(S.ParcelRead(parcel).data)


class ParcelDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.parcel.view', 'PATCH': 'ticketing.parcel.update', 'PUT': 'ticketing.parcel.update', 'DELETE': 'ticketing.parcel.delete'}

    def get(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk, request.user)
        return success_response(S.ParcelRead(p).data) if p else error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)

    def patch(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk, request.user)
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
        p = selectors.parcel_detail(request.user.company, pk, request.user)
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
        qs = selectors.pending_for_trip(request.user.company, route_id=request.query_params.get("route"), user=request.user)
        return success_response(S.ParcelRead(qs, many=True).data)


class ParcelAssignTripView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.parcel.manage'}

    def post(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk, request.user)
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
        p = selectors.parcel_detail(request.user.company, pk, request.user)
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
        p = selectors.parcel_detail(request.user.company, pk, request.user)
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
        p = selectors.parcel_detail(request.user.company, pk, request.user)
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
        ready = selectors.ready_parcels(company, destination_point=destination, user=request.user)
        # #11 : à bord = expéditions (shipments) du voyage, pré-départ incluses, pour
        # pouvoir retirer / valider / dévalider par expédition. Agence d'origine (#10).
        onboard = []
        if trip_id:
            from apps.voyages_consignment.models import ParcelShipment
            from apps.core.agency_scope import user_agency_ids, scope_by_agency_q
            onboard = list(ParcelShipment.objects
                           .filter(is_deleted=False, parcel__company=company, trip_id=trip_id)
                           .exclude(status=ParcelShipment.Status.CANCELLED)
                           .filter(scope_by_agency_q(user_agency_ids(request.user), "parcel__agency_id"))
                           .select_related("parcel", "parcel__destination_point", "trip"))
        weight = sum(float(s.parcel.weight_kg or 0) for s in onboard)
        return success_response({
            "ready": S.ParcelRead(ready, many=True).data,
            "onboard": S.ParcelShipmentSerializer(onboard, many=True).data,
            "totals": {"count": len(onboard), "weight": weight},
        })


class ParcelPickupView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.parcel.manage'}

    def post(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk, request.user)
        if not p:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        payload = S.ParcelPickupSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            p = services.pickup_parcel(p, picked_up_by=d["picked_up_by"],
                                       picked_up_phone=d["picked_up_phone"],
                                       picked_up_id_number=d["picked_up_id_number"],
                                       picked_up_kind=d["picked_up_kind"],
                                       user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelRead(p).data)


class ParcelDeliverHomeView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.parcel.manage'}

    def post(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk, request.user)
        if not p:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        payload = S.ParcelDeliverSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        try:
            p = services.deliver_parcel_home(
                p, delivery_amount=payload.validated_data["delivery_amount"],
                delivery_address=payload.validated_data["delivery_address"],
                payment_method=payload.validated_data["payment_method"],
                delivered_to=payload.validated_data["delivered_to"],
                delivered_to_id=payload.validated_data["delivered_to_id"],
                user=request.user, cash_register_id=request.data.get("cash_register_id"))
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelRead(p).data)


class ParcelCancelView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.parcel.manage'}

    def post(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk, request.user)
        if not p:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        try:
            p = services.cancel_parcel(p, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelRead(p).data)


class BaggageListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.luggage.view', 'POST': 'ticketing.luggage.create'}

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
            date_to=request.query_params.get("date_to"),
            user=request.user, include_archived=wants_archived(request))
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
                payment_method=d["payment_method"], user=request.user,
                cash_register_id=request.data.get("cash_register_id"))
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(S.BaggageRead(bag).data)


class BaggageDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.luggage.view', 'PATCH': 'ticketing.luggage.update', 'PUT': 'ticketing.luggage.update', 'DELETE': 'ticketing.luggage.delete'}

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
from apps.voyages_config.doc_format import resolve_doc_format
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
        w, h = resolve_doc_format(request.user.company, "recu_colis")
        html = doc_render.build_parcel_receipt(p, tpl, agent=_agent(request.user), logo_url=logo_url,
                                               width_mm=w, height_mm=h)
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
        w, h = resolve_doc_format(request.user.company, "ticket_bagage")
        html = doc_render.build_baggage_ticket(b, tpl, agent=_agent(request.user), logo_url=logo_url,
                                               width_mm=w, height_mm=h)
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
        w, h = resolve_doc_format(request.user.company, "etiquette_bagage")
        html = doc_render.build_baggage_label(b, tpl, agent=_agent(request.user), width_mm=w, height_mm=h,
                                              copies=b.quantity or 1)
        return success_response({"html": html})


class ParcelLabelView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.parcel.view'}

    def get(self, request, pk):
        p = (Parcel.objects.filter(is_deleted=False, company=request.user.company, id=pk)
             .select_related("origin_point", "destination_point").first())
        if not p:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        tpl = ticket_render.get_or_create_template(request.user.company)
        logo_url = ticket_render._abs(request, tpl.logo)
        w, h = resolve_doc_format(request.user.company, "etiquette_colis")
        html = doc_render.build_parcel_label(p, tpl, agent=_agent(request.user), logo_url=logo_url,
                                             width_mm=w, height_mm=h, copies=p.quantity or 1)
        return success_response({"html": html})


class ParcelStatsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "ticketing.parcel.view"}

    def get(self, request):
        from apps.voyages_consignment.stats import get_parcel_stats
        if not request.user.company_id:
            return error_response("Votre compte n'est lié à aucune institution.", status_code=400)
        return success_response(get_parcel_stats(request.user.company_id))


# ── M25 : expéditions partielles ──────────────────────────────────────────────
class ParcelShipmentListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.parcel.view', 'POST': 'ticketing.parcel.create'}

    def get(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk, request.user)
        if not p:
            return error_response("Colis introuvable.", status_code=404)
        qs = p.shipments.filter(is_deleted=False)
        return success_response(S.ParcelShipmentSerializer(qs, many=True).data)

    def post(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk, request.user)
        if not p:
            return error_response("Colis introuvable.", status_code=404)
        trip = Trip.objects.filter(is_deleted=False, company=request.user.company,
                                   id=request.data.get("trip_id")).first()
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        try:
            s = services.create_shipment(p, trip=trip, quantity=request.data.get("quantity"),
                                         note=request.data.get("note", ""), user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(S.ParcelShipmentSerializer(s).data)


class _ShipmentActionView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.parcel.manage', 'DELETE': 'ticketing.parcel.manage'}
    service_fn = None

    def _get(self, request, pk):
        from apps.voyages_consignment.models import ParcelShipment
        return ParcelShipment.objects.filter(is_deleted=False, parcel__company=request.user.company,
                                             id=pk).select_related("parcel", "trip").first()

    def post(self, request, pk):
        s = self._get(request, pk)
        if not s:
            return error_response("Expédition introuvable.", status_code=404)
        try:
            s = type(self).service_fn(s, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelShipmentSerializer(s).data)


class ShipmentValidateView(_ShipmentActionView):   service_fn = staticmethod(services.validate_shipment)
class ShipmentUnvalidateView(_ShipmentActionView): service_fn = staticmethod(services.unvalidate_shipment)  # admin only (service-enforced)
class ShipmentLoadView(_ShipmentActionView):     service_fn = staticmethod(services.load_shipment)


class ShipmentWithdrawView(_ShipmentActionView):
    """#11 : retirer une quantité de pièces chargées (body: quantity). Retrait total => annulation."""
    def post(self, request, pk):
        s = self._get(request, pk)
        if not s:
            return error_response("Expédition introuvable.", status_code=404)
        try:
            s = services.withdraw_shipment(s, quantity=request.data.get("quantity"), user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelShipmentSerializer(s).data)
class ShipmentDispatchView(_ShipmentActionView): service_fn = staticmethod(services.dispatch_shipment)
class ShipmentArriveView(_ShipmentActionView):   service_fn = staticmethod(services.arrive_shipment)


class ShipmentCancelView(_ShipmentActionView):
    def delete(self, request, pk):
        s = self._get(request, pk)
        if not s:
            return error_response("Expédition introuvable.", status_code=404)
        try:
            services.cancel_shipment(s, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return no_content_response()


class ArrivedShipmentListView(APIView):
    """Expéditions arrivées (à réceptionner) — écran Réception."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'GET': 'ticketing.parcel.view'}

    def get(self, request):
        from apps.voyages_consignment.models import ParcelShipment
        from apps.core.agency_scope import user_agency_ids, scope_by_agency_q
        # Réception : seule l'agence de DESTINATION du colis voit/réceptionne
        # (les agences intermédiaires d'un trajet ne le voient pas). Admin = tout.
        qs = (ParcelShipment.objects
              .filter(is_deleted=False, parcel__company=request.user.company,
                      status=ParcelShipment.Status.ARRIVED)
              .filter(scope_by_agency_q(user_agency_ids(request.user),
                                        "parcel__destination_point__agency_id"))
              .select_related("parcel", "parcel__destination_point", "trip", "trip__route")
              .order_by("arrived_at"))
        return success_response(S.ParcelShipmentSerializer(qs, many=True).data)


class ParcelShipView(APIView):
    """Expédier N pièces d'un colis sur un voyage en un geste (défaut = restant)."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.parcel.manage'}

    def post(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk, request.user)
        if not p:
            return error_response("Colis introuvable.", status_code=404)
        trip = Trip.objects.filter(is_deleted=False, company=request.user.company,
                                   id=request.data.get("trip_id")).first()
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        try:
            s = services.ship_pieces(p, trip=trip, quantity=request.data.get("quantity"), user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(S.ParcelShipmentSerializer(s).data)


class ShipmentReceiveView(_ShipmentActionView):
    """Réceptionner une expédition arrivée (reçues/manquantes/avariées)."""
    def post(self, request, pk):
        s = self._get(request, pk)
        if not s:
            return error_response("Expédition introuvable.", status_code=404)
        try:
            s = services.receive_shipment(
                s, received_pieces=request.data.get("received_pieces"),
                missing_pieces=request.data.get("missing_pieces", 0),
                damaged_pieces=request.data.get("damaged_pieces", 0), user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelShipmentSerializer(s).data)

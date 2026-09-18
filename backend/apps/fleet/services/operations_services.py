from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from datetime import timedelta

from django.contrib.contenttypes.models import ContentType

from apps.core.exceptions import ApplicationError
from apps.core.models import Attachment
from apps.fleet.models import Service, OdometerLog, Vehicle, Contract, RecurringCost


# ── Services / interventions ────────────────────────────────────────────────────

@transaction.atomic
def create_service(*, vehicle, intervention_type, planned_date, description="",
                   supplier=None, driver=None, currency="XAF", notes="", created_by):
    if vehicle.status == Vehicle.Status.OUT_OF_SERVICE:
        raise ApplicationError(_("Impossible de planifier une intervention sur un véhicule hors service."))
    return Service.objects.create(
        vehicle=vehicle, intervention_type=intervention_type, planned_date=planned_date,
        description=description, supplier=supplier, driver=driver, currency=currency,
        status=Service.Status.PLANNED, notes=notes, created_by=created_by,
    )


@transaction.atomic
def start_service(service, *, start_date=None, updated_by):
    if service.status != Service.Status.PLANNED:
        raise ApplicationError(_("Seule une intervention planifiée peut être démarrée."))
    today = start_date or timezone.now().date()
    service.status = Service.Status.IN_PROGRESS
    service.start_date = today
    service.odometer_at_start = service.vehicle.current_odometer
    service.updated_by = updated_by
    service.save(update_fields=["status", "start_date", "odometer_at_start", "updated_by", "updated_at"])
    vehicle = service.vehicle
    vehicle.status = Vehicle.Status.IN_MAINTENANCE
    vehicle.updated_by = updated_by
    vehicle.save(update_fields=["status", "updated_by", "updated_at"])
    return service


def record_intervention_expense(*, company, agency, label, amount, expense_date, user):
    """Enregistre le coût d'une intervention comme dépense générale « à décaisser ».

    Réutilise (ou crée) un type de dépense dédié « Entretien véhicule » par institution.
    La dépense est laissée à décaisser (UNPAID) : la trésorerie la décaisse via le flux habituel.
    """
    from apps.treasury.models import GeneralExpense
    from apps.voyages_config.models import ExpenseType
    etype, _created = ExpenseType.objects.get_or_create(
        company=company, code="ENTRETIEN",
        defaults={"name": "Entretien véhicule", "account_code": "624"})
    return GeneralExpense.objects.create(
        company=company, agency=agency, expense_type=etype, label=label,
        amount=amount, expense_date=expense_date,
        status=GeneralExpense.Status.UNPAID, created_by=user)


@transaction.atomic
def complete_service(service, *, done_date=None, cost=None, odometer_km=None,
                     notes=None, updated_by):
    if service.status != Service.Status.IN_PROGRESS:
        raise ApplicationError(_("Seule une intervention en cours peut être clôturée."))
    today = done_date or timezone.now().date()
    service.status = Service.Status.DONE
    service.done_date = today
    if cost is not None:
        service.cost = cost
    if notes is not None:
        service.notes = notes
    vehicle = service.vehicle
    if odometer_km is not None and odometer_km > vehicle.current_odometer:
        OdometerLog.objects.create(
            vehicle=vehicle, value_km=odometer_km, date=today,
            source=OdometerLog.Source.MAINTENANCE,
            note=f"Fin intervention : {service.intervention_type.name}", created_by=updated_by,
        )
        vehicle.current_odometer = odometer_km
        service.odometer_at_done = odometer_km
    else:
        service.odometer_at_done = vehicle.current_odometer
    itype = service.intervention_type
    if itype.interval_km:
        service.next_due_km = service.odometer_at_done + itype.interval_km
    if itype.interval_days:
        service.next_due_date = today + timedelta(days=itype.interval_days)
    service.updated_by = updated_by
    service.save()
    vehicle.status = Vehicle.Status.AVAILABLE
    vehicle.updated_by = updated_by
    vehicle.save(update_fields=["status", "current_odometer", "updated_by", "updated_at"])
    # Le coût de l'intervention devient une dépense générale à décaisser.
    if service.cost and service.cost > 0:
        record_intervention_expense(
            company=vehicle.company, agency=vehicle.agency,
            label=f"Entretien {itype.name} — {vehicle.license_plate}",
            amount=service.cost, expense_date=today, user=updated_by)
    return service


@transaction.atomic
def cancel_service(service, *, updated_by):
    if service.status == Service.Status.DONE:
        raise ApplicationError(_("Une intervention terminée ne peut pas être annulée."))
    was_in_progress = service.status == Service.Status.IN_PROGRESS
    service.status = Service.Status.CANCELLED
    service.updated_by = updated_by
    service.save(update_fields=["status", "updated_by", "updated_at"])
    if was_in_progress:
        vehicle = service.vehicle
        vehicle.status = Vehicle.Status.AVAILABLE
        vehicle.updated_by = updated_by
        vehicle.save(update_fields=["status", "updated_by", "updated_at"])
    return service


@transaction.atomic
def update_service(service, *, updated_by, **fields):
    if service.status == Service.Status.DONE:
        raise ApplicationError(_("Une intervention terminée ne peut pas être modifiée."))
    allowed = {"description", "planned_date", "intervention_type", "supplier",
               "driver", "currency", "notes"}
    for key, val in fields.items():
        if key in allowed:
            setattr(service, key, val)
    service.updated_by = updated_by
    service.save()
    return service


def delete_service(service, *, deleted_by):
    if service.status == Service.Status.IN_PROGRESS:
        raise ApplicationError(_("Annulez l'intervention avant de la supprimer."))
    service.soft_delete(user=deleted_by)


# ── Pièces jointes d'un service ─────────────────────────────────────────────────

@transaction.atomic
def add_service_attachment(service, *, file, name="", description="", created_by):
    ct = ContentType.objects.get_for_model(Service)
    return Attachment.objects.create(
        content_type=ct, object_id=service.id,
        name=name or getattr(file, "name", "fichier"),
        file=file, size=getattr(file, "size", 0) or 0,
        mime_type=getattr(file, "content_type", "") or "",
        description=description, created_by=created_by,
    )


def delete_service_attachment(attachment, *, deleted_by):
    attachment.soft_delete(user=deleted_by)


# ── Contrats ────────────────────────────────────────────────────────────────────

@transaction.atomic
def create_contract(*, vehicle, intervention_type, name, start_date, end_date,
                    reference="", supplier=None, responsible=None, driver=None,
                    policy_number="", creation_date=None, activation_cost=0,
                    billing_period=None, deductible=None, currency="XAF",
                    status=Contract.Status.ACTIVE, terms="", notes="",
                    included_service_ids=None, created_by):
    contract = Contract.objects.create(
        vehicle=vehicle, intervention_type=intervention_type, name=name,
        start_date=start_date, end_date=end_date, reference=reference, supplier=supplier,
        responsible=responsible, driver=driver, policy_number=policy_number,
        creation_date=creation_date, activation_cost=activation_cost or 0,
        billing_period=billing_period, deductible=deductible, currency=currency,
        status=status, terms=terms, notes=notes, created_by=created_by,
    )
    if included_service_ids:
        contract.included_services.set(included_service_ids)
    return contract


@transaction.atomic
def update_contract(contract, *, updated_by, included_service_ids=None, **fields):
    allowed = {"name", "reference", "intervention_type", "supplier", "responsible",
               "driver", "policy_number", "start_date", "end_date", "creation_date",
               "activation_cost", "billing_period", "deductible", "currency", "status",
               "terms", "notes"}
    for key, val in fields.items():
        if key in allowed:
            setattr(contract, key, val)
    contract.updated_by = updated_by
    contract.save()
    if included_service_ids is not None:
        contract.included_services.set(included_service_ids)
    return contract


def delete_contract(contract, *, deleted_by):
    contract.soft_delete(user=deleted_by)


# ── Coûts récurrents ────────────────────────────────────────────────────────────

@transaction.atomic
def add_recurring_cost(contract, *, description, amount, period, currency="XAF", created_by):
    return RecurringCost.objects.create(
        contract=contract, description=description, amount=amount,
        currency=currency, period=period, created_by=created_by,
    )


@transaction.atomic
def update_recurring_cost(cost, *, updated_by, **fields):
    allowed = {"description", "amount", "currency", "period"}
    for key, val in fields.items():
        if key in allowed:
            setattr(cost, key, val)
    cost.updated_by = updated_by
    cost.save()
    return cost


def delete_recurring_cost(cost, *, deleted_by):
    cost.soft_delete(user=deleted_by)

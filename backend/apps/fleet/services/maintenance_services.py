from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from datetime import timedelta

from apps.core.exceptions import ApplicationError
from apps.fleet.models import MaintenanceType, MaintenanceOrder, OdometerLog, Vehicle


@transaction.atomic
def create_maintenance_type(
    *, company=None, name: str, category: str,
    interval_km=None, interval_days=None, description: str = "", created_by,
):
    return MaintenanceType.objects.create(
        company=company,
        name=name,
        category=category,
        interval_km=interval_km,
        interval_days=interval_days,
        description=description,
        created_by=created_by,
    )


@transaction.atomic
def update_maintenance_type(mtype, *, updated_by, **fields):
    allowed = {"name", "category", "interval_km", "interval_days", "description"}
    for key, val in fields.items():
        if key in allowed:
            setattr(mtype, key, val)
    mtype.updated_by = updated_by
    mtype.save()
    return mtype


def delete_maintenance_type(mtype, *, deleted_by):
    if mtype.orders.filter(is_deleted=False, status__in=["planned", "in_progress"]).exists():
        raise ApplicationError(_("Ce type de maintenance est utilisé par des ordres en cours."))
    mtype.soft_delete(user=deleted_by)


@transaction.atomic
def create_maintenance_order(
    *, vehicle, maintenance_type, planned_date,
    provider: str = "", notes: str = "", created_by,
):
    if vehicle.status == Vehicle.Status.OUT_OF_SERVICE:
        raise ApplicationError(_("Impossible de planifier une maintenance sur un véhicule hors service."))

    return MaintenanceOrder.objects.create(
        vehicle=vehicle,
        maintenance_type=maintenance_type,
        planned_date=planned_date,
        status=MaintenanceOrder.Status.PLANNED,
        provider=provider,
        notes=notes,
        created_by=created_by,
    )


@transaction.atomic
def start_maintenance(order, *, start_date=None, updated_by):
    if order.status != MaintenanceOrder.Status.PLANNED:
        raise ApplicationError(_("Seul un ordre planifié peut être démarré."))

    today = start_date or timezone.now().date()
    order.status = MaintenanceOrder.Status.IN_PROGRESS
    order.start_date = today
    order.odometer_at_start = order.vehicle.current_odometer
    order.updated_by = updated_by
    order.save(update_fields=[
        "status", "start_date", "odometer_at_start", "updated_by", "updated_at"
    ])

    # Véhicule → EN MAINTENANCE
    vehicle = order.vehicle
    vehicle.status = Vehicle.Status.IN_MAINTENANCE
    vehicle.updated_by = updated_by
    vehicle.save(update_fields=["status", "updated_by", "updated_at"])

    return order


@transaction.atomic
def complete_maintenance(order, *, done_date=None, cost=None, odometer_km=None,
                          provider: str = None, notes: str = None, updated_by):
    if order.status != MaintenanceOrder.Status.IN_PROGRESS:
        raise ApplicationError(_("Seul un ordre en cours peut être clôturé."))

    today = done_date or timezone.now().date()
    order.status = MaintenanceOrder.Status.DONE
    order.done_date = today
    if cost is not None:
        order.cost = cost
    if provider is not None:
        order.provider = provider
    if notes is not None:
        order.notes = notes

    # Odomètre à la fin
    vehicle = order.vehicle
    if odometer_km is not None and odometer_km > vehicle.current_odometer:
        OdometerLog.objects.create(
            vehicle=vehicle,
            value_km=odometer_km,
            date=today,
            source=OdometerLog.Source.MAINTENANCE,
            note=f"Fin maintenance : {order.maintenance_type.name}",
            created_by=updated_by,
        )
        vehicle.current_odometer = odometer_km
        order.odometer_at_done = odometer_km
    else:
        order.odometer_at_done = vehicle.current_odometer

    # Calcul next_due depuis les intervalles du type
    mtype = order.maintenance_type
    if mtype.interval_km:
        order.next_due_km = order.odometer_at_done + mtype.interval_km
    if mtype.interval_days:
        order.next_due_date = today + timedelta(days=mtype.interval_days)

    order.updated_by = updated_by
    order.save()

    # Véhicule → DISPONIBLE
    vehicle.status = Vehicle.Status.AVAILABLE
    vehicle.updated_by = updated_by
    vehicle.save(update_fields=["status", "current_odometer", "updated_by", "updated_at"])

    return order


@transaction.atomic
def cancel_maintenance(order, *, updated_by):
    if order.status == MaintenanceOrder.Status.DONE:
        raise ApplicationError(_("Un ordre terminé ne peut pas être annulé."))

    was_in_progress = order.status == MaintenanceOrder.Status.IN_PROGRESS
    order.status = MaintenanceOrder.Status.CANCELLED
    order.updated_by = updated_by
    order.save(update_fields=["status", "updated_by", "updated_at"])

    if was_in_progress:
        vehicle = order.vehicle
        vehicle.status = Vehicle.Status.AVAILABLE
        vehicle.updated_by = updated_by
        vehicle.save(update_fields=["status", "updated_by", "updated_at"])

    return order


@transaction.atomic
def update_maintenance_order(order, *, updated_by, **fields):
    if order.status == MaintenanceOrder.Status.DONE:
        raise ApplicationError(_("Un ordre terminé ne peut pas être modifié."))
    allowed = {"planned_date", "provider", "notes"}
    for key, val in fields.items():
        if key in allowed:
            setattr(order, key, val)
    order.updated_by = updated_by
    order.save()
    return order


def delete_maintenance_order(order, *, deleted_by):
    if order.status == MaintenanceOrder.Status.IN_PROGRESS:
        raise ApplicationError(_("Annulez la maintenance avant de la supprimer."))
    order.soft_delete(user=deleted_by)

from django.db import transaction
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.voyages_pricing.models import Fare
from apps.voyages_pricing.selectors.fare_selectors import point_index


def _validate_segment(route, origin_point, destination_point):
    oi = point_index(route, origin_point)
    di = point_index(route, destination_point)
    if oi is None or di is None:
        raise ApplicationError(_("Les points doivent appartenir au trajet."))
    if oi >= di:
        raise ApplicationError(_("Le point de départ doit précéder le point d'arrivée."))


def _ensure_unique(company, route, origin_point, destination_point, fare_class, exclude_id=None):
    qs = Fare.objects.filter(is_deleted=False, company=company, route=route,
                             origin_point=origin_point, destination_point=destination_point,
                             fare_class=fare_class)
    if exclude_id:
        qs = qs.exclude(id=exclude_id)
    if qs.exists():
        raise ApplicationError(_("Un tarif existe déjà pour ce segment et cette catégorie."))


@transaction.atomic
def create_fare(*, company, route, origin_point, destination_point, fare_class, amount,
                currency="XAF", valid_from=None, valid_to=None, user):
    _validate_segment(route, origin_point, destination_point)
    _ensure_unique(company, route, origin_point, destination_point, fare_class)
    return Fare.objects.create(
        company=company, route=route, origin_point=origin_point, destination_point=destination_point,
        fare_class=fare_class, amount=amount, currency=currency,
        valid_from=valid_from, valid_to=valid_to, created_by=user)


@transaction.atomic
def update_fare(fare, *, user, **fields):
    allowed = {"amount", "currency", "valid_from", "valid_to",
               "origin_point", "destination_point", "fare_class", "is_active"}
    for k, v in fields.items():
        if k in allowed:
            setattr(fare, k, v)
    _validate_segment(fare.route, fare.origin_point, fare.destination_point)
    _ensure_unique(fare.company, fare.route, fare.origin_point, fare.destination_point,
                   fare.fare_class, exclude_id=fare.id)
    fare.updated_by = user
    fare.save()
    return fare


def delete_fare(fare, *, user):
    fare.is_deleted = True
    fare.updated_by = user
    fare.save(update_fields=["is_deleted", "updated_by", "updated_at"])

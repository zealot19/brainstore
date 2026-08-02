from datetime import date as _date
from django.db.models import Q
from apps.voyages_config.models import RouteStop
from apps.voyages_pricing.models import Fare


def route_points(route):
    """Ordered [origin, *escales-by-sequence, destination], de-duplicated by id."""
    seq = [route.origin]
    for rs in (RouteStop.objects.filter(route=route, is_deleted=False)
               .select_related("service_point").order_by("sequence")):
        seq.append(rs.service_point)
    seq.append(route.destination)
    seen, out = set(), []
    for sp in seq:
        if sp.id not in seen:
            seen.add(sp.id)
            out.append(sp)
    return out


def point_index(route, sp):
    for i, p in enumerate(route_points(route)):
        if p.id == sp.id:
            return i
    return None


def list_fares(company, route_id=None):
    qs = (Fare.objects.filter(is_deleted=False)
          .filter(Q(company_id=company.id) | Q(company__isnull=True))
          .select_related("route", "origin_point", "destination_point", "fare_class")
          .order_by("route__code", "amount"))
    if route_id:
        qs = qs.filter(route_id=route_id)
    return qs


def resolve_fare(company, route, origin_point, destination_point, fare_class,
                 trip_type="one_way", on_date=None):
    on_date = on_date or _date.today()
    qs = (Fare.objects.filter(
            is_deleted=False, is_active=True, route=route,
            origin_point=origin_point, destination_point=destination_point,
            fare_class=fare_class, trip_type=trip_type)
          .filter(Q(company=company) | Q(company__isnull=True))
          .filter(Q(valid_from__isnull=True) | Q(valid_from__lte=on_date))
          .filter(Q(valid_to__isnull=True) | Q(valid_to__gte=on_date)))
    rows = sorted(qs, key=lambda f: (f.company_id is None,
                                     -(f.valid_from.toordinal() if f.valid_from else 0)))
    return rows[0] if rows else None

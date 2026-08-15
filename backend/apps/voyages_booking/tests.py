from apps.voyages_booking.selectors import list_bookings


def test_list_bookings_filters_type_channel_and_departure():
    qs = list_bookings(None, trip_type="round_trip", channel="online",
                       date_field="departure", date_from="2026-01-01", date_to="2026-12-31")
    sql = str(qs.query)
    assert "trip_type" in sql
    assert "channel" in sql
    assert "scheduled_departure" in sql


def test_list_bookings_created_basis_default():
    qs = list_bookings(None, date_from="2026-01-01")
    assert "created_at" in str(qs.query)


import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.voyages_booking.config_api.views import BookingListView


def _make_staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(
        name="Resa RBAC Co", admin_email="resaadmin@x.com",
        admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="resaadmin@x.com")
    staff, _ = create_user(
        created_by=admin, company=company, email="resastaff@x.com",
        first_name="S", last_name="T", is_institution_admin=False,
        default_agency_id=setup["hq_agency_id"], agency_ids=[setup["hq_agency_id"]])
    pids = list(Permission.objects.filter(code__in=codes).values_list("id", flat=True))
    role = create_role(name="Role", company_id=company.id, permission_ids=pids, created_by=admin)
    UserRole.objects.create(user=staff, role=role, company=company)
    return company, admin, staff


def _status(view, method, user, **kw):
    req = getattr(APIRequestFactory(), method)("/x", {}, format="json")
    force_authenticate(req, user=user)
    r = view.as_view()(req, **kw)
    return r.status_code


@pytest.mark.django_db
def test_booking_view_permission_gating():
    company, admin, staff = _make_staff(["ticketing.booking.view"])
    assert _status(BookingListView, "get", staff) != 403
    assert _status(BookingListView, "post", staff) == 403
    assert _status(BookingListView, "get", admin) != 403
    assert _status(BookingListView, "post", admin) != 403


@pytest.mark.django_db
def test_booking_create_permission():
    company, admin, staff = _make_staff(["ticketing.booking.view", "ticketing.booking.create"])
    assert _status(BookingListView, "post", staff) != 403


@pytest.mark.django_db
def test_staff_without_booking_perm_denied():
    company, admin, staff = _make_staff([])
    assert _status(BookingListView, "get", staff) == 403

from decimal import Decimal
from apps.voyages_config.models.ticket import (
    TicketTemplate, DEFAULT_PARCEL_RECEIPT_TERMS, DEFAULT_BAGGAGE_TICKET_NOTE,
)


def test_ticket_template_has_doc_fields_with_defaults():
    t = TicketTemplate()
    assert t.ticket_width_mm == Decimal("203")
    assert t.ticket_height_mm == Decimal("82.55")
    assert t.parcel_receipt_terms == DEFAULT_PARCEL_RECEIPT_TERMS
    assert t.baggage_ticket_note == DEFAULT_BAGGAGE_TICKET_NOTE


from apps.voyages_config import ticket_render


def test_build_verso_has_blank_cut_column_52mm():
    t = TicketTemplate(slogan="NOUS PARTONS ENSEMBLE", color_ink="#1a1a1a", color_accent="#e6a817")
    t.agencies_list = [{"name": "YAOUNDE", "location": "OLEMBE", "phone": "690000000"}]
    html = ticket_render.build_verso(t)
    assert 'class="cut"' in html          # colonne vierge gauche
    assert "52mm" in html                 # largeur alignee sur le talon du recto
    assert "Nos Agences" in html and "YAOUNDE" in html


def test_render_document_uses_template_size():
    t = TicketTemplate()  # defauts 203 x 82.55
    doc = ticket_render.render_document(["<div>x</div>"], tpl=t)
    assert "203" in doc and "82.55" in doc and "landscape" in doc


import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.voyages_config.config_api.views import TownListView, TimeSlotListView


def _make_staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(
        name="Cfg RBAC Co", admin_email="cfgadmin@x.com",
        admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="cfgadmin@x.com")
    staff, _ = create_user(
        created_by=admin, company=company, email="cfgstaff@x.com",
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
def test_town_permission_gating():
    company, admin, staff = _make_staff(["transport.city.view"])
    assert _status(TownListView, "get", staff) != 403
    assert _status(TownListView, "post", staff) == 403
    assert _status(TownListView, "get", admin) != 403


@pytest.mark.django_db
def test_town_manage_permission():
    company, admin, staff = _make_staff(["transport.city.view", "transport.city.manage"])
    assert _status(TownListView, "post", staff) != 403


@pytest.mark.django_db
def test_grouped_config_gating():
    company, admin, staff = _make_staff(["transport.config.view"])
    assert _status(TimeSlotListView, "get", staff) != 403
    assert _status(TimeSlotListView, "post", staff) == 403


@pytest.mark.django_db
def test_staff_without_config_perm_denied():
    company, admin, staff = _make_staff([])
    assert _status(TownListView, "get", staff) == 403

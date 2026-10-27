"""#11 — retrait de pièces chargées + dévalidation (admin)."""
import pytest
from apps.core.exceptions import ApplicationError
from apps.authentication.models import User
from apps.voyages_consignment.models import ParcelShipment
from apps.voyages_consignment.services import (
    create_shipment, validate_shipment, load_shipment, dispatch_shipment,
    withdraw_shipment, unvalidate_shipment,
)
from apps.voyages_consignment.test_m25_shipment import _setup


@pytest.mark.django_db
def test_withdraw_partial_reduces_quantity():
    g = _setup("wd1@x.com")
    s = create_shipment(g["parcel"], trip=g["trip1"], quantity=10, user=g["admin"])
    validate_shipment(s, user=g["admin"])      # 10 pièces engagées sur le véhicule
    withdraw_shipment(s, quantity=4, user=g["admin"])   # on en retire 4 -> 6 restent
    s.refresh_from_db(); g["parcel"].refresh_from_db()
    assert s.quantity == 6
    assert g["parcel"].remaining_pieces == 4   # les 4 retirées redeviennent disponibles


@pytest.mark.django_db
def test_withdraw_all_cancels_shipment():
    g = _setup("wd2@x.com")
    s = create_shipment(g["parcel"], trip=g["trip1"], quantity=10, user=g["admin"])
    withdraw_shipment(s, quantity=10, user=g["admin"])
    s.refresh_from_db()
    assert s.status == ParcelShipment.Status.CANCELLED


@pytest.mark.django_db
def test_withdraw_blocked_once_in_transit():
    g = _setup("wd3@x.com")
    s = create_shipment(g["parcel"], trip=g["trip1"], quantity=5, user=g["admin"])
    validate_shipment(s, user=g["admin"]); load_shipment(s, user=g["admin"]); dispatch_shipment(s, user=g["admin"])
    with pytest.raises(ApplicationError):
        withdraw_shipment(s, quantity=1, user=g["admin"])


@pytest.mark.django_db
def test_withdraw_rejects_bad_quantity():
    g = _setup("wd4@x.com")
    s = create_shipment(g["parcel"], trip=g["trip1"], quantity=5, user=g["admin"])
    with pytest.raises(ApplicationError):
        withdraw_shipment(s, quantity=0, user=g["admin"])
    with pytest.raises(ApplicationError):
        withdraw_shipment(s, quantity=6, user=g["admin"])   # > chargé


@pytest.mark.django_db
def test_unvalidate_admin_reverts_to_draft():
    g = _setup("uv1@x.com")
    s = create_shipment(g["parcel"], trip=g["trip1"], quantity=5, user=g["admin"])
    validate_shipment(s, user=g["admin"])
    assert s.status == ParcelShipment.Status.VALIDATED
    unvalidate_shipment(s, user=g["admin"])   # admin d'institution
    s.refresh_from_db()
    assert s.status == ParcelShipment.Status.DRAFT and s.validated_at is None


@pytest.mark.django_db
def test_unvalidate_requires_admin():
    g = _setup("uv2@x.com")
    s = create_shipment(g["parcel"], trip=g["trip1"], quantity=5, user=g["admin"])
    validate_shipment(s, user=g["admin"])
    clerk = User.objects.create(email="clerk-uv@x.com", username="clerk-uv",
                                company=g["company"], is_institution_admin=False)
    with pytest.raises(ApplicationError):
        unvalidate_shipment(s, user=clerk)


@pytest.mark.django_db
def test_validated_withdraw_is_admin_only():
    """Un guichetier (non-admin) retire un brouillon mais PAS une expédition validée ;
    seul l'admin peut retirer une expédition validée."""
    from apps.system_config.models import Agency
    from apps.users.services.user_services import create_user
    g = _setup("wd5@x.com")
    # Rattache le colis à une agence et crée un guichetier (non-admin) de cette agence.
    ag = Agency.objects.create(company=g["company"], name="DLA", code="DLA")
    g["parcel"].agency = ag
    g["parcel"].save(update_fields=["agency"])
    clerk, _ = create_user(created_by=g["admin"], company=g["company"], email="clerk-wd@x.com",
                           first_name="G", last_name="U", is_institution_admin=False,
                           default_agency_id=ag.id, agency_ids=[ag.id])
    # Brouillon (trip1) : le guichetier peut retirer.
    s_draft = create_shipment(g["parcel"], trip=g["trip1"], quantity=3, user=clerk)
    withdraw_shipment(s_draft, quantity=1, user=clerk)
    s_draft.refresh_from_db()
    assert s_draft.quantity == 2
    # Validé (trip2, expédition distincte) : le guichetier ne peut plus retirer…
    s = create_shipment(g["parcel"], trip=g["trip2"], quantity=4, user=clerk)
    validate_shipment(s, user=clerk)
    with pytest.raises(ApplicationError):
        withdraw_shipment(s, quantity=1, user=clerk)
    # … mais l'admin le peut.
    withdraw_shipment(s, quantity=1, user=g["admin"])
    s.refresh_from_db()
    assert s.quantity == 3

import pytest
from decimal import Decimal
from apps.authentication.models import User


def _ctx(email, diff="500"):
    from apps.system_config.services import create_company
    from apps.treasury.models import CashRegister, CashSession
    from apps.treasury.services.services import create_cash_register
    company, _ = create_company(name="M30 Co", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    caissier = User.objects.create(company=company, email="cais-" + email, username="cais-" + email,
                                   is_institution_admin=False, is_superuser=False)
    reg = create_cash_register(company=company, name="P", kind=CashRegister.Kind.PRINCIPALE,
                               manager_ids=[admin.id], created_by=admin)
    session = CashSession.objects.create(company=company, cash_register=reg, assigned_to=caissier,
                                         status=CashSession.Status.CLOSED, difference=Decimal(diff),
                                         opened_by=admin, closed_by=admin, created_by=admin)
    return company, admin, caissier, session


@pytest.mark.django_db
def test_raise_requires_ecart():
    from apps.treasury.services.explanation import raise_explanation
    from apps.core.exceptions import ApplicationError
    company, admin, caissier, session = _ctx("m30a@x.com", diff="0")
    with pytest.raises(ApplicationError):
        raise_explanation(session, note="Expliquez", user=admin)


@pytest.mark.django_db
def test_raise_creates_pending():
    from apps.treasury.models import SessionExplanationRequest
    from apps.treasury.services.explanation import raise_explanation
    company, admin, caissier, session = _ctx("m30b@x.com")
    req = raise_explanation(session, note="Pourquoi cet écart ?", user=admin)
    assert req.status == SessionExplanationRequest.Status.PENDING_RESPONSE
    assert req.requested_by_id == admin.id


@pytest.mark.django_db
def test_respond_only_assigned_caissier():
    from apps.treasury.models import SessionExplanationRequest
    from apps.treasury.services.explanation import raise_explanation, respond_explanation
    from apps.core.exceptions import ApplicationError
    company, admin, caissier, session = _ctx("m30c@x.com")
    req = raise_explanation(session, note="x", user=admin)
    other = User.objects.create(company=company, email="oth@x.com", username="oth@x.com",
                                is_institution_admin=False, is_superuser=False)
    with pytest.raises(ApplicationError):
        respond_explanation(req, note="pas moi", user=other)
    respond_explanation(req, note="voici l'explication", user=caissier)
    req.refresh_from_db()
    assert req.status == SessionExplanationRequest.Status.RESPONDED
    assert req.responded_by_id == caissier.id


@pytest.mark.django_db
def test_respond_requires_pending():
    from apps.treasury.services.explanation import raise_explanation, respond_explanation
    from apps.core.exceptions import ApplicationError
    company, admin, caissier, session = _ctx("m30d@x.com")
    req = raise_explanation(session, note="x", user=admin)
    respond_explanation(req, note="r1", user=caissier)
    with pytest.raises(ApplicationError):
        respond_explanation(req, note="r2", user=caissier)


@pytest.mark.django_db
def test_decide_after_response_only():
    from apps.treasury.models import SessionExplanationRequest
    from apps.treasury.services.explanation import raise_explanation, respond_explanation, decide_explanation
    from apps.core.exceptions import ApplicationError
    company, admin, caissier, session = _ctx("m30e@x.com")
    req = raise_explanation(session, note="x", user=admin)
    with pytest.raises(ApplicationError):   # avant réponse
        decide_explanation(req, decision=SessionExplanationRequest.Decision.JUSTIFIED, note="", user=admin)
    respond_explanation(req, note="r", user=caissier)
    decide_explanation(req, decision=SessionExplanationRequest.Decision.JUSTIFIED, note="OK", user=admin)
    req.refresh_from_db()
    assert req.status == SessionExplanationRequest.Status.DECIDED
    assert req.decision == SessionExplanationRequest.Decision.JUSTIFIED


@pytest.mark.django_db
def test_decide_invalid_value():
    from apps.treasury.services.explanation import raise_explanation, respond_explanation, decide_explanation
    from apps.core.exceptions import ApplicationError
    company, admin, caissier, session = _ctx("m30f@x.com")
    req = raise_explanation(session, note="x", user=admin)
    respond_explanation(req, note="r", user=caissier)
    with pytest.raises(ApplicationError):
        decide_explanation(req, decision="maybe", note="", user=admin)

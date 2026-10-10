"""M30 — demandes d'explication d'écart de session (couche workflow)."""
from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.treasury.models import SessionExplanationRequest


def _is_admin(user):
    return bool(getattr(user, "is_superuser", False) or getattr(user, "is_institution_admin", False))


@transaction.atomic
def raise_explanation(session, *, note, user):
    if session.difference in (None, 0):
        raise ApplicationError(_("Aucun écart sur cette session : pas de demande d'explication."))
    if not (note or "").strip():
        raise ApplicationError(_("La demande doit préciser un motif."))
    return SessionExplanationRequest.objects.create(
        company=session.company, cash_session=session,
        request_note=note, requested_by=user, created_by=user)


@transaction.atomic
def respond_explanation(req, *, note, user):
    if req.status != SessionExplanationRequest.Status.PENDING_RESPONSE:
        raise ApplicationError(_("Cette demande n'attend plus de réponse."))
    if not (_is_admin(user) or req.cash_session.assigned_to_id == getattr(user, "id", None)):
        raise ApplicationError(_("Seul le caissier assigné peut répondre à cette demande."))
    if not (note or "").strip():
        raise ApplicationError(_("La réponse ne peut pas être vide."))
    req.response_note = note
    req.responded_by = user
    req.responded_at = timezone.now()
    req.status = SessionExplanationRequest.Status.RESPONDED
    req.updated_by = user
    req.save()
    return req


@transaction.atomic
def decide_explanation(req, *, decision, note, user):
    if req.status != SessionExplanationRequest.Status.RESPONDED:
        raise ApplicationError(_("La décision n'est possible qu'après réponse du caissier."))
    if decision not in (SessionExplanationRequest.Decision.JUSTIFIED,
                        SessionExplanationRequest.Decision.NOT_JUSTIFIED):
        raise ApplicationError(_("Décision invalide."))
    req.decision = decision
    req.decision_note = note or ""
    req.decided_by = user
    req.decided_at = timezone.now()
    req.status = SessionExplanationRequest.Status.DECIDED
    req.updated_by = user
    req.save()
    return req

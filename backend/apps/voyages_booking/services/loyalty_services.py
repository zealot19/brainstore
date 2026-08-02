from datetime import date as _date
from django.db import transaction
from django.db.models import Q
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.voyages_booking.models import LoyaltyAccount, LoyaltyMovement, Booking
from apps.voyages_config.models import LoyaltyRule


def applicable_rule(company, on_date=None):
    on_date = on_date or _date.today()
    qs = (LoyaltyRule.objects.filter(is_deleted=False, is_active=True)
          .filter(Q(company=company) | Q(company__isnull=True))
          .filter(Q(valid_from__isnull=True) | Q(valid_from__lte=on_date))
          .filter(Q(valid_to__isnull=True) | Q(valid_to__gte=on_date)))
    rows = sorted(qs, key=lambda r: (r.company_id is None,))
    return rows[0] if rows else None


def account_for(passenger, user=None):
    acc = LoyaltyAccount.objects.filter(is_deleted=False, passenger=passenger).first()
    if not acc:
        acc = LoyaltyAccount.objects.create(company=passenger.company, passenger=passenger, created_by=user)
    return acc


def _points_for(rule, trip_type):
    if not rule:
        return 0
    return rule.points_per_round_trip if trip_type == Booking.TripType.ROUND_TRIP else rule.points_per_one_way


@transaction.atomic
def accrue(booking, user=None):
    if booking.loyalty_movements.filter(kind=LoyaltyMovement.Kind.EARN, is_deleted=False).exists():
        return  # idempotent — already earned
    rule = applicable_rule(booking.company)
    pts = _points_for(rule, booking.trip_type)
    if pts <= 0:
        return
    # one accrual per traveler (outbound tickets only, skip reward tickets)
    travelers = booking.tickets.filter(is_deleted=False, is_reward=False,
                                       direction="outbound")
    for t in travelers:
        acc = account_for(t.passenger, user=user)
        acc.points_balance += pts
        acc.lifetime_points += pts
        acc.updated_by = user
        acc.save(update_fields=["points_balance", "lifetime_points", "updated_by", "updated_at"])
        LoyaltyMovement.objects.create(account=acc, kind=LoyaltyMovement.Kind.EARN, points=pts,
                                       booking=booking, rule=rule, created_by=user,
                                       note=f"{booking.reference}")


@transaction.atomic
def reverse(booking, user=None):
    earns = booking.loyalty_movements.filter(kind=LoyaltyMovement.Kind.EARN, is_deleted=False)
    for mv in earns:
        acc = mv.account
        acc.points_balance -= mv.points
        acc.lifetime_points -= mv.points
        acc.updated_by = user
        acc.save(update_fields=["points_balance", "lifetime_points", "updated_by", "updated_at"])
        LoyaltyMovement.objects.create(account=acc, kind=LoyaltyMovement.Kind.REVERSAL,
                                       points=-mv.points, booking=booking, rule=mv.rule,
                                       created_by=user, note=f"Annulation {booking.reference}")


@transaction.atomic
def redeem_reward(booking, passenger, ticket, user=None):
    rule = applicable_rule(booking.company)
    if not rule:
        raise ApplicationError(_("Aucune règle de fidélité active."))
    acc = account_for(passenger, user=user)
    if acc.points_balance < rule.reward_threshold:
        raise ApplicationError(_("Solde de points insuffisant pour une récompense."))
    acc.points_balance -= rule.reward_threshold
    acc.updated_by = user
    acc.save(update_fields=["points_balance", "updated_by", "updated_at"])
    LoyaltyMovement.objects.create(account=acc, kind=LoyaltyMovement.Kind.REDEEM,
                                   points=-rule.reward_threshold, booking=booking, rule=rule,
                                   created_by=user, note=rule.reward_label)
    ticket.is_reward = True
    ticket.amount = 0
    ticket.updated_by = user
    ticket.save(update_fields=["is_reward", "amount", "updated_by", "updated_at"])

"""Transbordement : remplacement du bus d'un voyage + bascule du surplus."""
from django.db import transaction
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError


def overflow_split(sold_ids, capacity):
    """Sépare les billets gardés (dans la capacité) du surplus."""
    return sold_ids[:capacity], sold_ids[capacity:]

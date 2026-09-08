"""Soft-delete helper for genuine entity removals on syncable (BaseModel) tables.

Marks rows deleted (tombstone) and bumps `updated_at` so the change is visible to
the delta/CDC sync layer. Use this instead of a hard `.delete()` when a row is
being *removed* (not part of a delete-and-recreate "replace" pattern — those keep
hard deletes, which fire `post_delete` and are captured by the CDC layer, and
avoid violating `unique_together` on recreate).
"""
from django.utils import timezone


def soft_delete_qs(qs, user=None):
    """Soft-delete every row in `qs`; returns the number of rows affected."""
    return qs.update(
        is_deleted=True,
        deleted_at=timezone.now(),
        deleted_by=user,
        updated_at=timezone.now(),
    )

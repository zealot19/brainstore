"""Schema fingerprint for version-parity checks between instances.

Sync refuses when master and agency are on different migration states (schema
skew) — apply on a mismatched schema would corrupt data. Both run the same
codebase, so a fresh/upgraded agency matches the master exactly.
"""
import hashlib

from django.db import connection
from django.db.migrations.recorder import MigrationRecorder

_HEADER = "X-Schema-Version"


def schema_fingerprint() -> str:
    applied = MigrationRecorder(connection).applied_migrations()
    items = sorted(f"{app}:{name}" for (app, name) in applied.keys())
    return hashlib.sha256("\n".join(items).encode()).hexdigest()[:16]

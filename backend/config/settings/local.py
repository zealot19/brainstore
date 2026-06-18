"""
Settings de développement local.
"""
from .base import *  # noqa
from .base import env

DEBUG = True

ALLOWED_HOSTS = ["*"]

# ── Base de données locale (SQLite par défaut, PostgreSQL recommandé) ─────────
DATABASES = {
    "default": env.db("DATABASE_URL", default="sqlite:///db.sqlite3"),
}

# ── Email en console ──────────────────────────────────────────────────────────
EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"

# ── Debug Toolbar (optionnel) ─────────────────────────────────────────────────
INSTALLED_APPS += ["django_extensions"] if False else []  # noqa: F405

# ── CORS — tout accepter en dev ───────────────────────────────────────────────
CORS_ALLOW_ALL_ORIGINS = True

# ── Rosetta (interface de traduction) ─────────────────────────────────────────
ROSETTA_SHOW_AT_ADMIN_PANEL = True

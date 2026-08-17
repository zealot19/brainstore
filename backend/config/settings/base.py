"""
Base settings — partagés entre tous les environnements.
Toute valeur sensible ou spécifique à l'environnement doit être dans local.py / production.py.
"""
import os
from pathlib import Path
import environ

# ── Chemins ──────────────────────────────────────────────────────────────────
BASE_DIR = Path(__file__).resolve().parent.parent.parent
APPS_DIR = BASE_DIR / "apps"

# ── Environ ───────────────────────────────────────────────────────────────────
env = environ.Env()
environ.Env.read_env(BASE_DIR / ".env")

# ── Sécurité ──────────────────────────────────────────────────────────────────
SECRET_KEY = env("SECRET_KEY")
DEBUG = env.bool("DEBUG", default=False)
ALLOWED_HOSTS = env.list("ALLOWED_HOSTS", default=[])

# ── Applications ─────────────────────────────────────────────────────────────
DJANGO_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]

THIRD_PARTY_APPS = [
    "rest_framework",
    "rest_framework_simplejwt",
    "rest_framework_simplejwt.token_blacklist",
    "corsheaders",
    "django_filters",
    "drf_spectacular",
    "modeltranslation",
    "rosetta",
]

LOCAL_APPS = [
    # ── Fondation (toujours en premier) ──
    "apps.core",
    # ── Configuration système globale ──
    "apps.system_config",
    # ── Authentification ──
    "apps.authentication",
    # ── RBAC & Administration ──
    "apps.admin_rbac",
    # ── Gestion des utilisateurs ──
    "apps.users",
    # ── Ressources Humaines ──
    "apps.hr",
    # ── Gestion de flotte ──
    "apps.fleet",
    # ── Transport — Configuration ──
    "apps.transport_config",
    # ── Voyages (gestion des départs) ──
    "apps.voyage",
    # ── Config Voyages (référentiels transport passagers) ──
    "apps.voyages_config",
    # ── Gestion Voyages (voyages / départs) ──
    "apps.voyages_trips",
    # ── Tarification Voyages ──
    "apps.voyages_pricing",
    # ── Réservations Voyages ──
    "apps.voyages_booking",
    # ── Colis & Bagages Voyages ──
    "apps.voyages_consignment",
    # ── Reporting (états PDF/Excel/CSV) ──
    "apps.reporting",
    # ── Ticketing (réservations, billets, bagages) ──
    "apps.ticketing",
    # ── Colis ──
    "apps.parcel",
    # ── Comptabilité (G-Accounting) ──
    "apps.accounting",
    # ── Trésorerie ──
    "apps.treasury",
    # ── Réservation en ligne ──
    "apps.online_booking",
    # ── Sync SCIG — Sage 100 (retail / inventaire / transferts) ──
    "apps.sync_scig_sage",
]

# ── Modèle utilisateur personnalisé ──────────────────────────────────────────
AUTH_USER_MODEL = "authentication.User"

# ── Backends d'authentification ───────────────────────────────────────────────
AUTHENTICATION_BACKENDS = [
    "apps.authentication.backends.EmailOrUsernameBackend",
]

INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS

# ── Middleware ────────────────────────────────────────────────────────────────
MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.locale.LocaleMiddleware",         # i18n: détecte la langue
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "apps.core.middleware.TenantMiddleware",             # multi-tenant
]

# ── URLs ──────────────────────────────────────────────────────────────────────
ROOT_URLCONF = "config.urls"
WSGI_APPLICATION = "config.wsgi.application"
ASGI_APPLICATION = "config.asgi.application"

# ── Templates ─────────────────────────────────────────────────────────────────
TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
                "django.template.context_processors.i18n",
            ],
        },
    },
]

# ── Base de données ───────────────────────────────────────────────────────────
DATABASES = {
    "default": env.db("DATABASE_URL", default="sqlite:///db.sqlite3"),
}
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# ── Internationalisation (i18n / l10n) ───────────────────────────────────────
LANGUAGE_CODE = env("LANGUAGE_CODE", default="fr-fr")

from django.utils.translation import gettext_lazy as _

LANGUAGES = [
    ("fr", _("Français")),
    ("en", _("English")),
    ("ar", _("العربية")),
]

TIME_ZONE = env("TIME_ZONE", default="Africa/Abidjan")
USE_I18N = True
USE_L10N = True
USE_TZ = True

LOCALE_PATHS = [
    BASE_DIR / "locale",
]

# ── Fichiers statiques & médias ───────────────────────────────────────────────
STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "staticfiles"
STATICFILES_DIRS = [BASE_DIR / "static"]

MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"

# ── Validation des mots de passe ──────────────────────────────────────────────
AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
     "OPTIONS": {"min_length": 8}},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

# ── Django REST Framework ─────────────────────────────────────────────────────
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ],
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.IsAuthenticated",
    ],
    "DEFAULT_FILTER_BACKENDS": [
        "django_filters.rest_framework.DjangoFilterBackend",
        "rest_framework.filters.SearchFilter",
        "rest_framework.filters.OrderingFilter",
    ],
    "DEFAULT_PAGINATION_CLASS": "apps.core.pagination.StandardResultsSetPagination",
    "PAGE_SIZE": 25,
    "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
    "DEFAULT_RENDERER_CLASSES": [
        "rest_framework.renderers.JSONRenderer",
    ],
    "EXCEPTION_HANDLER": "apps.core.exceptions.custom_exception_handler",
}

# ── JWT ───────────────────────────────────────────────────────────────────────
from datetime import timedelta

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=15),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=7),
    "ROTATE_REFRESH_TOKENS": True,
    "BLACKLIST_AFTER_ROTATION": True,
    "UPDATE_LAST_LOGIN": True,
    "ALGORITHM": "HS256",
    "AUTH_HEADER_TYPES": ("Bearer",),
    "USER_ID_FIELD": "id",
    "USER_ID_CLAIM": "user_id",
}

# ── drf-spectacular (OpenAPI) ─────────────────────────────────────────────────
SPECTACULAR_SETTINGS = {
    "TITLE": "DreamsPOS ERP API",
    "DESCRIPTION": "API REST pour l'ERP DreamsPOS — backend Django, frontend Angular.",
    "VERSION": "1.0.0",
    "SERVE_INCLUDE_SCHEMA": False,
    "COMPONENT_SPLIT_REQUEST": True,
    "TAGS": [
        {"name": "auth", "description": "Authentification et gestion des tokens"},
        {"name": "users", "description": "Gestion des utilisateurs"},
        {"name": "institutions", "description": "Gestion des institutions (tenants)"},
        {"name": "packages", "description": "Packages et souscriptions"},
    ],
}

# ── CORS ─────────────────────────────────────────────────────────────────────
CORS_ALLOWED_ORIGINS = env.list("CORS_ALLOWED_ORIGINS", default=[
    "http://localhost:4200",
    "http://127.0.0.1:4200",
])
CORS_ALLOW_CREDENTIALS = True

# ── Logging ───────────────────────────────────────────────────────────────────
LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "verbose": {
            "format": "[{asctime}] {levelname} {name} {message}",
            "style": "{",
        },
    },
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
            "formatter": "verbose",
        },
    },
    "root": {
        "handlers": ["console"],
        "level": "INFO",
    },
    "loggers": {
        "django": {"handlers": ["console"], "level": "WARNING", "propagate": False},
        "apps": {"handlers": ["console"], "level": "DEBUG", "propagate": False},
    },
}

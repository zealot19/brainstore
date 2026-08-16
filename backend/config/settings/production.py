"""
Settings de production.
"""
from .base import *  # noqa
from .base import env, MIDDLEWARE

DEBUG = False

ALLOWED_HOSTS = env.list("ALLOWED_HOSTS", default=[])

# Domaines de confiance pour le CSRF (schéma inclus) — ex. le domaine Vercel.
CSRF_TRUSTED_ORIGINS = env.list("CSRF_TRUSTED_ORIGINS", default=[])

# Render fournit automatiquement le hostname externe : on l'ajoute pour que l'app
# démarre sans configurer ALLOWED_HOSTS à la main au premier déploiement.
_render_host = env("RENDER_EXTERNAL_HOSTNAME", default="")
if _render_host:
    ALLOWED_HOSTS.append(_render_host)
    CSRF_TRUSTED_ORIGINS.append(f"https://{_render_host}")

# ── Fichiers statiques (WhiteNoise) ───────────────────────────────────────────
# Render/Vercel ne servent pas les statiques Django : WhiteNoise s'en charge depuis
# l'app. `collectstatic` les rassemble dans STATIC_ROOT (défini dans base.py).
MIDDLEWARE = MIDDLEWARE[:1] + ["whitenoise.middleware.WhiteNoiseMiddleware"] + MIDDLEWARE[1:]
STORAGES = {
    "default": {"BACKEND": "django.core.files.storage.FileSystemStorage"},
    "staticfiles": {"BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage"},
}

# ── Sécurité HTTP ─────────────────────────────────────────────────────────────
# Render/Vercel terminent le TLS en amont : sans ce header, SECURE_SSL_REDIRECT boucle.
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
SECURE_SSL_REDIRECT = True
SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

# ── Email ─────────────────────────────────────────────────────────────────────
# Tant qu'aucun SMTP n'est configuré (EMAIL_HOST vide), on n'échoue pas au démarrage :
# les mails sont écrits dans les logs (backend console).
EMAIL_HOST = env("EMAIL_HOST", default="")
if EMAIL_HOST:
    EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
    EMAIL_PORT = env.int("EMAIL_PORT", default=587)
    EMAIL_HOST_USER = env("EMAIL_HOST_USER", default="")
    EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD", default="")
    EMAIL_USE_TLS = True
else:
    EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"
DEFAULT_FROM_EMAIL = env("DEFAULT_FROM_EMAIL", default="no-reply@example.com")

# ── Sentry ────────────────────────────────────────────────────────────────────
SENTRY_DSN = env("SENTRY_DSN", default="")
if SENTRY_DSN:
    import sentry_sdk
    sentry_sdk.init(dsn=SENTRY_DSN, traces_sample_rate=0.1)

"""Quels modèles participent à la synchro — piloté par une petite DENY-LIST.

Plutôt que d'énumérer ~120 tables (fragile, on en oublie à chaque nouvelle table),
on synchronise TOUT sauf une liste d'exclusion : internes Django/JWT, moteur de
sync lui-même, intégration Sage, état bot/relais, pile héritée morte, journaux et
compteurs propres à l'instance. Les nouvelles tables métier sont incluses
automatiquement.
"""
from django.apps import apps as django_apps

# Apps dont les données sont internes / propres à l'instance : jamais synchronisées.
BLOCKLIST_APPS = {
    "admin", "auth", "contenttypes", "sessions", "token_blacklist",  # internes Django/JWT
    "sync",                       # état du moteur de synchro (ne JAMAIS copier)
    "sync_scig_sage",             # intégration Sage (locale là où tourne Sage)
    "whatsapp_bot",               # sessions du bot
    "online_booking",             # état de relais des réservations en ligne
    "voyage", "ticketing", "transport_config", "parcel",  # pile héritée morte
}

# Modèles précis exclus, dans des apps par ailleurs synchronisées.
BLOCKLIST_MODELS = {
    "core.auditlog",                          # journal d'audit propre à l'instance
    "core.sequence",                          # compteurs de numérotation par instance
    "authentication.loginattempt",
    "authentication.usersession",
    "authentication.passwordresettoken",
}


def is_syncable_model(model) -> bool:
    meta = model._meta
    if meta.app_label in BLOCKLIST_APPS:
        return False
    if meta.label_lower in BLOCKLIST_MODELS:
        return False
    return True


def is_syncable(label: str) -> bool:
    """Par libellé 'app.model' (insensible à la casse)."""
    try:
        model = django_apps.get_model(label)
    except Exception:
        return False
    return is_syncable_model(model)


def syncable_models():
    """Modèles concrets synchronisables (hors tables M2M auto : PK non-UUID, gérées à part)."""
    return [m for m in django_apps.get_models(include_auto_created=False)
            if is_syncable_model(m)]

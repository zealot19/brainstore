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
    if getattr(meta, "auto_created", False):   # table de liaison M2M : voie dédiée
        return False
    return True


def is_syncable_m2m(through) -> bool:
    """Table de liaison M2M synchronisable : non exclue par la deny-list ET ses
    deux extrémités (FK) sont elles-mêmes synchronisables."""
    from django.db.models import ForeignKey
    meta = through._meta
    if meta.app_label in BLOCKLIST_APPS or meta.label_lower in BLOCKLIST_MODELS:
        return False
    for f in meta.concrete_fields:
        if isinstance(f, ForeignKey) and not is_syncable_model(f.related_model):
            return False
    return True


def syncable_m2m_throughs():
    """Tables de liaison M2M auto-créées à synchroniser (une seule fois chacune)."""
    seen, out = set(), []
    for m in syncable_models():
        for field in m._meta.many_to_many:
            through = field.remote_field.through
            lbl = through._meta.label_lower
            if getattr(through._meta, "auto_created", False) and lbl not in seen \
                    and is_syncable_m2m(through):
                seen.add(lbl)
                out.append(through)
    return out


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

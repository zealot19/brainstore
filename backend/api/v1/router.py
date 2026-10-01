"""
Agrégateur des URLs de tous les modules sous /api/v1/.
Chaque module enregistre ses routes ici lors de son installation.
"""
from django.urls import path, include

urlpatterns = [
    # ── Configuration système ──────────────────────────────────────────────
    path("system/", include("apps.system_config.urls")),

    # ── Authentification ───────────────────────────────────────────────────
    path("auth/",   include("apps.authentication.urls")),

    # ── RBAC & Administration ──────────────────────────────────────────────
    path("rbac/",   include("apps.admin_rbac.urls")),

    # ── Gestion des utilisateurs ───────────────────────────────────────────
    path("users/",  include("apps.users.urls")),

    # ── Ressources Humaines ────────────────────────────────────────────────
    path("hr/",     include("apps.hr.urls")),

    # ── Gestion de flotte ──────────────────────────────────────────────────
    path("fleet/",      include("apps.fleet.urls")),

    # ── Configuration Voyages ──────────────────────────────────────────────
    path("voyages/config/", include("apps.voyages_config.urls")),

    # ── Gestion Voyages ────────────────────────────────────────────────────
    path("voyages/trips/", include("apps.voyages_trips.urls")),
    path("voyages/dashboard/", include("apps.voyages_trips.dashboard.urls")),

    # ── Tarification Voyages ───────────────────────────────────────────────
    path("voyages/pricing/", include("apps.voyages_pricing.urls")),

    # ── Réservations Voyages ───────────────────────────────────────────────
    path("voyages/booking/", include("apps.voyages_booking.urls")),

    # ── Colis & Bagages Voyages ────────────────────────────────────────────
    path("voyages/consignment/", include("apps.voyages_consignment.urls")),

    # ── Transport — Configuration ───────────────────────────────────────────
    path("transport/",  include("apps.transport_config.urls")),

    # ── Voyages (départs & équipage) ───────────────────────────────────────────
    path("voyage/",     include("apps.voyage.urls")),

    # ── Ticketing (clients, réservations, billets, bagages) ────────────────────
    path("ticketing/",  include("apps.ticketing.urls")),

    # ── Colis ───────────────────────────────────────────────────────────────────
    path("parcels/",    include("apps.parcel.urls")),

    # ── Comptabilité (G-Accounting) ──────────────────────────────────────────────
    path("accounting/", include("apps.accounting.urls")),

    # ── Trésorerie ──────────────────────────────────────────────────────────────
    path("treasury/",   include("apps.treasury.urls")),
    path("partners/",   include("apps.partners.urls")),

    # ── Réservation en ligne (public) ───────────────────────────────────────────
    path("online/",     include("apps.online_booking.urls")),

    # ── Bot WhatsApp (webhook Cloud API) ────────────────────────────────────────
    path("whatsapp/",   include("apps.whatsapp_bot.urls")),

    # ── Synchronisation multi-instances (push/pull inter-instances) ─────────────
    path("sync/",       include("apps.sync.urls")),

    # ── Reporting (états PDF/Excel/CSV) ────────────────────────────────────────
    path("reporting/",  include("apps.reporting.urls")),

    # ── Sync SCIG — Sage 100 (retail / inventaire / transferts) ────────────────
    path("scig-sage/",  include("apps.sync_scig_sage.urls")),

    # ── Journal d'audit global ──────────────────────────────────────────────────
    path("audit/",      include("apps.core.urls")),
]

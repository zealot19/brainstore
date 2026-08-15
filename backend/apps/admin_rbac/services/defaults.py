"""Rôles & profils par défaut créés à la création d'une société (RBAC tranche 4).
Permissions résolues par requête sur le catalogue → robuste. Idempotent (par nom)."""
from apps.admin_rbac.models import Permission, Role, Profile
from .role_services import create_role
from .profile_services import create_profile


def _views(codes, *prefixes):
    return {c for c in codes if c.endswith(".view") and any(c.startswith(p + ".") for p in prefixes)}


def _allof(codes, *prefixes):
    return {c for c in codes if any(c == p or c.startswith(p + ".") for p in prefixes)}


def _role_specs(codes):
    guichet = {
        "ticketing.booking.view", "ticketing.booking.create", "ticketing.booking.cancel",
        "ticketing.booking.noshow", "ticketing.booking.board",
        "ticketing.customer.view", "ticketing.customer.manage",
        "ticketing.ticket.view", "ticketing.ticket.print", "ticketing.dashboard.view",
    }
    return [
        ("Chef d'agence", "Gestion opérationnelle complète de l'agence",
         _allof(codes, "voyage") | _allof(codes, "ticketing")
         | _views(codes, "transport") | _views(codes, "fleet")),
        ("Guichetier", "Vente au guichet : réservations, clients, billets, colis, bagages",
         guichet | _allof(codes, "ticketing.parcel") | _allof(codes, "ticketing.luggage")
         | {"voyage.trip.view", "voyage.dashboard.view"}
         | {"transport.city.view", "transport.route.view", "transport.fareclass.view",
            "transport.terminal.view", "transport.fare.view"}),
        ("Régulateur", "Exploitation : voyages, équipages, affectations véhicules",
         _allof(codes, "voyage")
         | {"fleet.vehicle.view", "fleet.assignment.view", "fleet.assignment.manage",
            "fleet.driver.view", "fleet.dashboard.view"}
         | {"transport.route.view", "transport.city.view", "transport.terminal.view",
            "transport.fareclass.view"}),
        ("Gestionnaire de flotte", "Gestion complète de la flotte",
         _allof(codes, "fleet")),
        ("Agent colis & bagages", "Enregistrement et suivi des colis et bagages",
         _allof(codes, "ticketing.parcel") | _allof(codes, "ticketing.luggage")
         | {"ticketing.dashboard.view", "voyage.trip.view"}),
        ("Comptable (lecture)", "Consultation générale, impressions et rapports",
         {c for c in codes if c.endswith(".view")}
         | {"ticketing.ticket.print", "scig.report.view", "scig.report.export"}),
    ]


def seed_default_roles(company, created_by=None):
    """Crée les rôles/profils par défaut manquants pour la société. Retourne les noms créés."""
    codes = set(Permission.objects.values_list("code", flat=True))
    created = []
    for name, desc, want in _role_specs(codes):
        want = {c for c in want if c in codes}
        if Role.objects.filter(name=name, company_id=company.id).exists():
            continue
        perm_ids = list(Permission.objects.filter(code__in=want).values_list("id", flat=True))
        role = create_role(name=name, description=desc, company_id=company.id,
                           permission_ids=perm_ids, created_by=created_by)
        if not Profile.objects.filter(name=name, company_id=company.id).exists():
            create_profile(name=name, description=desc, company_id=company.id,
                           role_ids=[role.id], created_by=created_by)
        created.append(name)
    return created

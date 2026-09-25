"""Rôles & profils par défaut créés à la création d'une société (RBAC tranche 4).
Permissions résolues par requête sur le catalogue → robuste. Idempotent (par nom).
Le top-up est additif : relancer la commande complète les permissions manquantes
des rôles par défaut existants, sans jamais en retirer."""
from apps.admin_rbac.models import Permission, Role, RolePermission, Profile
from .role_services import create_role
from .profile_services import create_profile


def _views(codes, *prefixes):
    return {c for c in codes if c.endswith(".view") and any(c.startswith(p + ".") for p in prefixes)}


def _allof(codes, *prefixes):
    return {c for c in codes if any(c == p or c.startswith(p + ".") for p in prefixes)}


def _role_specs(codes):
    # Référentiel « config voyages » nécessaire pour vendre (villes, trajets, tarifs,
    # points de service, catégories) + consultation des voyages.
    config_voyages = {
        "voyage.trip.view", "voyage.dashboard.view",
        "transport.city.view", "transport.route.view", "transport.fareclass.view",
        "transport.fare.view", "transport.terminal.view", "transport.category.view",
        "transport.config.view",
    }
    # Trésorerie minimale pour encaisser au guichet : opérer sa session (billetage),
    # voir sa session, choisir un mode de paiement, consulter ses recettes.
    sales_caisse = {
        "treasury.session.operate", "treasury.session.view",
        "treasury.paymentmethod.view", "treasury.income.view",
    }
    # Le guichetier vend et imprime le billet à la vente (ticket.print), mais ne
    # consulte PAS le détail d'un billet (ticket.view) et ne réimprime pas de
    # duplicata (ticket.duplicata) — contrôle anti-fraude.
    guichet = {
        "ticketing.booking.view", "ticketing.booking.create", "ticketing.booking.cancel",
        "ticketing.booking.noshow", "ticketing.booking.board",
        "ticketing.customer.view", "ticketing.customer.manage",
        "ticketing.ticket.print", "ticketing.dashboard.view",
    }
    # Trésorerie d'agence (le chef d'agence pilote la caisse, hors banque/virements).
    treasury_agence = (
        _allof(codes, "treasury.session", "treasury.register", "treasury.income",
               "treasury.expense", "treasury.transaction", "treasury.paymentmethod")
        | {"treasury.dashboard.view", "treasury.config.view",
           "treasury.bank.view", "treasury.transfer.view"}
    )
    return [
        ("Chef d'agence", "Gestion opérationnelle complète de l'agence",
         _allof(codes, "voyage") | _allof(codes, "ticketing")
         | _views(codes, "transport") | _views(codes, "fleet")
         | treasury_agence),
        ("Guichetier", "Vente au guichet : réservations, clients, billets, colis, bagages",
         guichet | _allof(codes, "ticketing.parcel") | _allof(codes, "ticketing.luggage")
         | config_voyages | sales_caisse),
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
         | {"ticketing.dashboard.view"} | config_voyages | sales_caisse),
        ("Comptable (lecture)", "Consultation générale, impressions et rapports",
         {c for c in codes if c.endswith(".view")}
         | {"ticketing.ticket.print", "scig.report.view", "scig.report.export"}),
    ]


def seed_default_roles(company, created_by=None):
    """Crée les rôles/profils par défaut manquants et complète (additif) les
    permissions manquantes des rôles par défaut existants. Retourne les noms créés."""
    codes = set(Permission.objects.values_list("code", flat=True))
    created = []
    for name, desc, want in _role_specs(codes):
        want = {c for c in want if c in codes}
        perm_ids = list(Permission.objects.filter(code__in=want).values_list("id", flat=True))
        role = Role.objects.filter(name=name, company_id=company.id).first()
        if role:
            # Top-up additif : n'ajoute que les permissions manquantes.
            have = set(role.permissions.values_list("id", flat=True))
            for pid in perm_ids:
                if pid not in have:
                    RolePermission.objects.get_or_create(role=role, permission_id=pid)
            continue
        role = create_role(name=name, description=desc, company_id=company.id,
                           permission_ids=perm_ids, created_by=created_by)
        if not Profile.objects.filter(name=name, company_id=company.id).exists():
            create_profile(name=name, description=desc, company_id=company.id,
                           role_ids=[role.id], created_by=created_by)
        created.append(name)
    return created

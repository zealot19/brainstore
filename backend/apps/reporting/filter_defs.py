"""Définitions typées des filtres de rapport + résolveurs d'options.

Chaque rapport déclare une LISTE DE CLÉS ; le framework connaît, pour chaque clé,
son type et (pour les select) sa source d'options. Libellés en français, cohérents
avec les noms de rapports (le module reporting n'est pas i18n-clé côté back).
"""

# clé -> {type, label, options?}. type ∈ date|datetime|text|number|select.
FILTER_DEFS = {
    "date_from":  {"type": "date",   "label": "Date début"},
    "date_to":    {"type": "date",   "label": "Date fin"},
    "periode":    {"type": "select", "label": "Période",              "options": "periode"},
    "year":       {"type": "number", "label": "Année"},

    "station_depart":      {"type": "select", "label": "Gare de départ",   "options": "service_points"},
    "station_arrivee":     {"type": "select", "label": "Gare d'arrivée",   "options": "service_points"},
    "station_escale":      {"type": "select", "label": "Escale",           "options": "service_points"},
    "categorie_tarifaire": {"type": "select", "label": "Catégorie tarifaire", "options": "fare_classes"},
    "partner":    {"type": "select", "label": "Partenaire",          "options": "partners"},
    "vehicle":    {"type": "select", "label": "Véhicule",            "options": "vehicles"},
    "crew":       {"type": "select", "label": "Personnel naviguant", "options": "crew"},

    "payment_mode": {"type": "select", "label": "Mode de paiement",  "options": "payment_methods"},
    "register":   {"type": "select", "label": "Caisse",              "options": "cash_registers"},
    "bank":       {"type": "select", "label": "Banque",              "options": "bank_accounts"},
    "agency":     {"type": "select", "label": "Agence",              "options": "agencies"},
    "agent":      {"type": "select", "label": "Agent",               "options": "agents"},
    "statut":     {"type": "select", "label": "Statut",              "options": "statut"},
    "group_by":   {"type": "select", "label": "Grouper par",         "options": "group_by"},
    "type_colis":  {"type": "select", "label": "Type de colis",      "options": "consignment_types"},
    "type_bagage": {"type": "select", "label": "Type de bagage",     "options": "consignment_types"},
    "sens":        {"type": "select", "label": "Sens",               "options": "sens"},
    "type_encaissement": {"type": "select", "label": "Type d'encaissement", "options": "income_categories"},
    "type_depense":      {"type": "select", "label": "Type de dépense",     "options": "expense_types"},
    "ecart":             {"type": "select", "label": "Écart",              "options": "ecart"},

    # Champs texte / nombre (utilisés dès les phases suivantes ; déjà pris en charge).
    "client":       {"type": "text",   "label": "Client"},
    "destinataire": {"type": "text",   "label": "Destinataire"},
    "no_cni":       {"type": "text",   "label": "No CNI"},
    "telephone":    {"type": "text",   "label": "Téléphone"},
    "poids_min":    {"type": "number", "label": "Poids min (kg)"},
    "poids_max":    {"type": "number", "label": "Poids max (kg)"},
}

_PERIODE = [("today", "Aujourd'hui"), ("week", "Cette semaine"),
            ("month", "Ce mois"), ("year", "Cette année")]
_GROUP_BY = [("agency", "Agence"), ("vehicle", "Véhicule"),
             ("route", "Trajet"), ("day", "Jour"), ("month", "Mois")]
_ECART = [("excedent", "Excédent"), ("manquant", "Manquant"), ("equilibre", "Équilibré")]

# Natures d'encaissement retenues par le relevé des recettes (income).
INCOME_CATEGORIES = [("ticket_sales", "Voyage"), ("parcel_shipping", "Colis"),
                     ("baggage", "Bagage"), ("other_income", "Autre")]


def _statut_choices(report):
    """Statuts de l'entité du rapport (source d'options 'statut')."""
    if report == "voyages":
        from apps.voyages_trips.models import Trip
        return Trip.Status.choices
    if report == "reservation":
        from apps.voyages_booking.models import Ticket
        return Ticket.Status.choices
    if report == "bagages":
        from apps.voyages_consignment.models import Baggage
        return Baggage.Status.choices
    if report == "colis":
        from apps.voyages_consignment.models import Parcel
        return Parcel.Status.choices
    return []


def resolve_options(source, company, report=None):
    """Renvoie [{value, label}] pour une source d'options, borné à la société."""
    def pack(pairs):
        return [{"value": str(v), "label": str(l)} for v, l in pairs]

    if source == "periode":  return pack(_PERIODE)
    if source == "group_by": return pack(_GROUP_BY)
    if source == "ecart":    return pack(_ECART)
    if source == "income_categories": return pack(INCOME_CATEGORIES)
    if source == "statut":   return pack(_statut_choices(report))
    if source == "sens":
        from apps.voyages_booking.models import Ticket
        return pack(Ticket.Direction.choices)
    if source == "consignment_types":
        from apps.voyages_config.models import ConsignmentType
        return pack((t.id, t.label) for t in ConsignmentType.objects
                    .filter(company=company, is_deleted=False).order_by("label"))
    if source == "expense_types":
        from apps.voyages_config.models import ExpenseType
        return pack((t.id, t.name) for t in ExpenseType.objects
                    .filter(company=company, is_deleted=False).order_by("code"))

    if source == "service_points":
        from apps.voyages_config.models import ServicePoint
        return pack((s.id, s.name) for s in ServicePoint.objects
                    .filter(company=company, is_deleted=False).order_by("name"))
    if source == "fare_classes":
        from apps.voyages_config.models import FareClass
        return pack((c.id, c.name) for c in FareClass.objects
                    .filter(company=company, is_deleted=False).order_by("rank", "code"))
    if source == "partners":
        from apps.partners.models import Partner
        return pack((p.id, f"{p.code} — {p.name}") for p in Partner.objects
                    .filter(company=company, is_deleted=False).order_by("name"))
    if source == "vehicles":
        from apps.fleet.models import Vehicle
        return pack((v.id, v.license_plate) for v in Vehicle.objects
                    .filter(company=company, is_deleted=False).order_by("license_plate"))
    if source == "payment_methods":
        from apps.treasury.models import PaymentMethod
        return pack((m.code, m.name) for m in PaymentMethod.objects
                    .filter(company=company, is_deleted=False).order_by("name"))
    if source == "cash_registers":
        from apps.treasury.models import CashRegister
        return pack((r.id, r.name) for r in CashRegister.objects
                    .filter(company=company, is_deleted=False).order_by("name"))
    if source == "bank_accounts":
        from apps.treasury.models import BankAccount
        return pack((b.id, f"{b.bank_name} — {b.account_name}") for b in BankAccount.objects
                    .filter(company=company, is_deleted=False).order_by("bank_name"))
    if source == "agencies":
        from apps.system_config.models import Agency
        return pack((a.id, a.name) for a in Agency.objects
                    .filter(company=company, is_deleted=False).order_by("name"))
    if source == "agents":
        from django.contrib.auth import get_user_model
        U = get_user_model()
        return pack((u.id, u.get_full_name() or u.username) for u in U.objects
                    .filter(company=company, is_active=True).order_by("first_name"))
    if source == "crew":
        from apps.voyages_trips.models import CrewMember
        return pack((m.id, m.name or f"{m.first_name} {m.last_name}".strip() or str(m.id))
                    for m in CrewMember.objects.filter(company=company, is_deleted=False).order_by("name"))
    return []

"""Declares which models sync, and in which direction (the ownership map).

DOWN = master-owned config, mirrored to agencies (read-only there).
UP   = agency-owned transactions, consolidated to the master (single-origin).
Everything not listed is instance-local and never synced.

This is the working set for the backbone; extend as SP2/SP3 register more models.
"""
from apps.sync import registry

_DOWN = [
    # system / tenancy
    "system_config.Company",
    "system_config.Agency",
    "system_config.License",
    # RBAC + identity
    "admin_rbac.Role",
    "admin_rbac.Permission",
    "admin_rbac.Profile",
    "admin_rbac.RolePermission",
    "admin_rbac.ProfileRole",
    "admin_rbac.UserRole",
    "admin_rbac.UserProfile",
    "authentication.User",
    "authentication.UserAgency",
    # network / pricing / schedule (config)
    "voyages_config.Town",
    "voyages_config.ServicePoint",
    "voyages_config.Route",
    "voyages_config.FareClass",
    "voyages_config.SeatingPlan",
    "voyages_pricing.Fare",
]

_UP = [
    # departures + seats: owned by the origin agency (it sells offline)
    "voyages_trips.Trip",
    "voyages_trips.TripSeat",
    "voyages_booking.Passenger",
    "voyages_booking.Booking",
    "voyages_booking.Ticket",
    "voyages_consignment.Parcel",
    "treasury.Transaction",
]


def register_all():
    for label in _DOWN:
        registry.register(label, registry.DOWN)
    for label in _UP:
        registry.register(label, registry.UP)

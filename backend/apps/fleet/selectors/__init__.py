from .vehicle_selectors import (
    list_vehicle_brands, get_vehicle_brand,
    list_vehicle_models, get_vehicle_model,
    list_external_drivers, get_external_driver,
    list_vehicles, get_vehicle,
    list_vehicle_odometer_logs,
    get_vehicle_stats,
    get_fleet_alerts,
    get_fleet_stats,
)
from .fuel_selectors import (
    list_fuel_logs, get_fuel_log, list_vehicle_fuel_logs,
)
from .maintenance_selectors import (
    list_maintenance_types, get_maintenance_type,
    list_maintenance_orders, get_maintenance_order,
    list_vehicle_maintenance_orders,
)
from .assignment_selectors import (
    list_assignments, get_assignment, list_vehicle_assignments,
)
from .accident_selectors import (
    list_accidents, get_accident, list_vehicle_accidents,
)

__all__ = [
    "list_vehicle_brands", "get_vehicle_brand",
    "list_vehicle_models", "get_vehicle_model",
    "list_external_drivers", "get_external_driver",
    "list_vehicles", "get_vehicle",
    "list_vehicle_odometer_logs",
    "get_vehicle_stats",
    "get_fleet_alerts",
    "get_fleet_stats",
    "list_fuel_logs", "get_fuel_log", "list_vehicle_fuel_logs",
    "list_maintenance_types", "get_maintenance_type",
    "list_maintenance_orders", "get_maintenance_order",
    "list_vehicle_maintenance_orders",
    "list_assignments", "get_assignment", "list_vehicle_assignments",
    "list_accidents", "get_accident", "list_vehicle_accidents",
]

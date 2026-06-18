from .vehicle_services import (
    create_vehicle_brand, update_vehicle_brand, delete_vehicle_brand,
    create_vehicle_model, update_vehicle_model, delete_vehicle_model,
    create_external_driver, update_external_driver, delete_external_driver,
    create_vehicle, update_vehicle, update_vehicle_odometer, delete_vehicle,
    create_insurance, update_insurance, delete_insurance,
    create_vehicle_document, update_vehicle_document, delete_vehicle_document,
)
from .fuel_services import (
    create_fuel_log, update_fuel_log, delete_fuel_log,
)
from .maintenance_services import (
    create_maintenance_type, update_maintenance_type, delete_maintenance_type,
    create_maintenance_order, start_maintenance, complete_maintenance,
    cancel_maintenance, update_maintenance_order, delete_maintenance_order,
)
from .assignment_services import (
    create_assignment, start_assignment, complete_assignment,
    cancel_assignment, update_assignment, delete_assignment,
)
from .accident_services import (
    create_accident, update_accident, update_accident_status,
    close_accident, delete_accident,
)

__all__ = [
    "create_vehicle_brand", "update_vehicle_brand", "delete_vehicle_brand",
    "create_vehicle_model", "update_vehicle_model", "delete_vehicle_model",
    "create_external_driver", "update_external_driver", "delete_external_driver",
    "create_vehicle", "update_vehicle", "update_vehicle_odometer", "delete_vehicle",
    "create_insurance", "update_insurance", "delete_insurance",
    "create_vehicle_document", "update_vehicle_document", "delete_vehicle_document",
    "create_fuel_log", "update_fuel_log", "delete_fuel_log",
    "create_maintenance_type", "update_maintenance_type", "delete_maintenance_type",
    "create_maintenance_order", "start_maintenance", "complete_maintenance",
    "cancel_maintenance", "update_maintenance_order", "delete_maintenance_order",
    "create_assignment", "start_assignment", "complete_assignment",
    "cancel_assignment", "update_assignment", "delete_assignment",
    "create_accident", "update_accident", "update_accident_status",
    "close_accident", "delete_accident",
]

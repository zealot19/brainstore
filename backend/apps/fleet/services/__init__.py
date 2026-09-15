from .vehicle_services import (
    create_vehicle_brand, update_vehicle_brand, delete_vehicle_brand,
    create_vehicle_model, update_vehicle_model, delete_vehicle_model,
    create_external_driver, update_external_driver, delete_external_driver,
    create_vehicle, update_vehicle, update_vehicle_odometer, delete_vehicle,
    create_vehicle_document, update_vehicle_document, delete_vehicle_document,
    create_parking, update_parking, delete_parking,
    create_supplier, update_supplier, delete_supplier,
)
from .fuel_services import (
    create_fuel_log, update_fuel_log, delete_fuel_log,
)
from .operations_services import (
    create_service, start_service, complete_service,
    cancel_service, update_service, delete_service,
    add_service_attachment, delete_service_attachment,
    create_contract, update_contract, delete_contract,
    add_recurring_cost, update_recurring_cost, delete_recurring_cost,
)
from .assignment_services import (
    create_assignment, start_assignment, complete_assignment,
    cancel_assignment, update_assignment, delete_assignment,
)
from .accident_services import (
    create_accident, update_accident, delete_accident,
)

__all__ = [
    "create_vehicle_brand", "update_vehicle_brand", "delete_vehicle_brand",
    "create_vehicle_model", "update_vehicle_model", "delete_vehicle_model",
    "create_external_driver", "update_external_driver", "delete_external_driver",
    "create_vehicle", "update_vehicle", "update_vehicle_odometer", "delete_vehicle",
    "create_vehicle_document", "update_vehicle_document", "delete_vehicle_document",
    "create_parking", "update_parking", "delete_parking",
    "create_supplier", "update_supplier", "delete_supplier",
    "create_fuel_log", "update_fuel_log", "delete_fuel_log",
    "create_service", "start_service", "complete_service",
    "cancel_service", "update_service", "delete_service",
    "add_service_attachment", "delete_service_attachment",
    "create_contract", "update_contract", "delete_contract",
    "add_recurring_cost", "update_recurring_cost", "delete_recurring_cost",
    "create_assignment", "start_assignment", "complete_assignment",
    "cancel_assignment", "update_assignment", "delete_assignment",
    "create_accident", "update_accident", "delete_accident",
]

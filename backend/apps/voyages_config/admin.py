from django.contrib import admin
from .models import (
    Town, ServicePoint, Route, RouteStop,
    SeatingPlan, PlanSeat, VehicleSeatingAssignment,
)

admin.site.register([
    Town, ServicePoint, Route, RouteStop,
    SeatingPlan, PlanSeat, VehicleSeatingAssignment,
])

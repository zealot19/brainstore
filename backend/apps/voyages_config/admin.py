from django.contrib import admin
from .models import (
    Town, ServicePoint, Route, RouteStop,
    SeatingPlan,
    FareClass, TimeSlot, ConsignmentNature, ConsignmentType,
    ServicePattern, LoyaltyRule, VoyagesSettings, VoyageType,
)

admin.site.register([
    Town, ServicePoint, Route, RouteStop,
    SeatingPlan,
    FareClass, TimeSlot, ConsignmentNature, ConsignmentType,
    ServicePattern, LoyaltyRule, VoyagesSettings, VoyageType,
])

from django.contrib import admin
from .models import (
    Town, ServicePoint, Route, RouteStop,
    SeatingPlan,
    FareClass, TimeSlot, ConsignmentNature, ConsignmentType,
    ServicePattern, LoyaltyRule, VoyagesSettings,
)

admin.site.register([
    Town, ServicePoint, Route, RouteStop,
    SeatingPlan,
    FareClass, TimeSlot, ConsignmentNature, ConsignmentType,
    ServicePattern, LoyaltyRule, VoyagesSettings,
])

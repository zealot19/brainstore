from django.contrib import admin
from .models import Trip, TripStop, TripCrew, TripSeat

admin.site.register([Trip, TripStop, TripCrew, TripSeat])

from django.contrib import admin
from .models import Town, ServicePoint, Route, RouteStop

admin.site.register([Town, ServicePoint, Route, RouteStop])

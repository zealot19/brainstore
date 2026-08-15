from django.contrib import admin
from .models import Account, Journal, FiscalYear, AccountingPeriod

admin.site.register([Account, Journal, FiscalYear, AccountingPeriod])

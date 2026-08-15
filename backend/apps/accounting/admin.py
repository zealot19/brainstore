from django.contrib import admin
from .models import (Account, Journal, FiscalYear, AccountingPeriod,
                     Partner, JournalEntry, JournalEntryLine)

admin.site.register([Account, Journal, FiscalYear, AccountingPeriod,
                     Partner, JournalEntry, JournalEntryLine])

import pytest
from apps.voyages_config.models import ExpenseScheduleLine
from apps.hr.models import LeaveBalance
from apps.fleet.models import OdometerLog

pytestmark = pytest.mark.django_db


def test_line_and_log_tables_uuid_pk():
    for M in (ExpenseScheduleLine, LeaveBalance, OdometerLog):
        assert M._meta.pk.get_internal_type() == "UUIDField", M.__name__

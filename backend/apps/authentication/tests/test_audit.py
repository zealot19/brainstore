import pytest
from apps.core.models import AuditLog
from apps.authentication import services
from apps.authentication.models import User
from apps.system_config.services import create_company

pytestmark = pytest.mark.django_db


def test_login_records_audit():
    c, _ = create_company(name="A", admin_email="a@x.com", admin_first_name="A", admin_last_name="B")
    u = User.objects.get(email="a@x.com")
    services.generate_tokens(u, ip="1.2.3.4")
    assert AuditLog.objects.filter(user=u, module="AUTH", action="LOGIN").exists()

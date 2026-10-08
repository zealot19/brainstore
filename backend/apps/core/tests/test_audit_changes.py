import pytest
from decimal import Decimal
from datetime import date
from apps.core.models import AuditLog
from apps.core.services.audit_service import audit_changes, log_action


def test_cancel_action_exists():
    assert AuditLog.Action.CANCEL == "CANCEL"


def test_audit_changes_only_changed_fields():
    before = {"status": "draft", "amount": Decimal("1000"), "note": "x"}
    after  = {"status": "validated", "amount": Decimal("1500"), "note": "x"}
    out = audit_changes(before, after)
    assert out == {
        "status": {"old": "draft", "new": "validated"},
        "amount": {"old": "1000", "new": "1500"},
    }
    assert "note" not in out


def test_audit_changes_fields_subset_and_none_and_date():
    before = {"a": None, "d": date(2026, 1, 1), "x": 1}
    after  = {"a": "set", "d": date(2026, 1, 2), "x": 2}
    out = audit_changes(before, after, fields=["a", "d"])
    assert out == {
        "a": {"old": "", "new": "set"},
        "d": {"old": "2026-01-01", "new": "2026-01-02"},
    }
    assert "x" not in out  # hors `fields`


def test_audit_changes_no_change_is_empty():
    assert audit_changes({"a": 1}, {"a": 1}) == {}


@pytest.mark.django_db
def test_log_action_persists_changes():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    create_company(name="AudCo", admin_email="aud@x.com", admin_first_name="A", admin_last_name="B")
    user = User.objects.get(email="aud@x.com")
    log_action(user=user, company=user.company, module=AuditLog.Module.TREASURY,
               action=AuditLog.Action.CANCEL, target_type="Ticket", target_id="t1",
               description="Annulation", changes={"status": {"old": "sold", "new": "cancelled"}})
    row = AuditLog.objects.get(target_id="t1")
    assert row.action == "CANCEL"
    assert row.changes == {"status": {"old": "sold", "new": "cancelled"}}


@pytest.mark.django_db
def test_log_action_without_changes_defaults_empty():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    create_company(name="AudCo2", admin_email="aud2@x.com", admin_first_name="A", admin_last_name="B")
    user = User.objects.get(email="aud2@x.com")
    log_action(user=user, company=user.company, module=AuditLog.Module.SYSTEM,
               action=AuditLog.Action.UPDATE, target_id="t2")
    assert AuditLog.objects.get(target_id="t2").changes == {}


@pytest.mark.django_db
def test_serializer_exposes_changes():
    from apps.core.serializers import AuditLogSerializer
    row = AuditLog(module="TREASURY", action="CANCEL", changes={"x": {"old": "1", "new": "2"}})
    data = AuditLogSerializer(row).data
    assert data["changes"] == {"x": {"old": "1", "new": "2"}}

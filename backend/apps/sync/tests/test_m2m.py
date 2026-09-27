import pytest
from apps.sync.snapshot import full_snapshot
from apps.sync.apply import apply_change
from apps.system_config.services import create_company
from apps.authentication.models import User
from apps.treasury.models import CashRegister

pytestmark = pytest.mark.django_db


@pytest.fixture(autouse=True)
def _sync(settings):
    settings.SYNC_ENABLED = True


def test_cashregister_manager_m2m_syncs_via_snapshot_and_apply():
    """Scénario réel : un gestionnaire de caisse affecté sur le master est bien
    répliqué à l'agence (snapshot -> apply). Régression du bug M2M non synchronisé."""
    company, _ = create_company(name="M2MCo", admin_email="m2m@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="m2m@x.com")
    reg = CashRegister.objects.create(company=company, name="Caisse 1")
    reg.managers.add(admin)                      # affectation du gestionnaire

    entries = full_snapshot()
    m2m = [e for e in entries if e["entity"] == "treasury.cashregister_managers"]
    link = next((e for e in m2m if str(reg.id) in e["payload"].values()
                 and str(admin.id) in e["payload"].values()), None)
    assert link is not None, "le lien gestionnaire doit figurer dans le snapshot"

    # Simule l'agence : le lien n'existe pas encore -> apply le recrée.
    reg.managers.clear()
    assert reg.managers.count() == 0
    assert apply_change(link) == "applied"
    assert reg.managers.filter(pk=admin.pk).exists()
    # idempotent
    assert apply_change(link) == "applied"
    assert reg.managers.filter(pk=admin.pk).count() == 1


def test_media_file_embeds_in_snapshot_and_writes_on_apply(settings, tmp_path):
    import os
    from django.core.files.base import ContentFile
    from apps.sync.capture import snapshot
    from apps.sync.apply import _write_media
    settings.MEDIA_ROOT = str(tmp_path / "master")
    company, _ = create_company(name="MedCo", admin_email="med@x.com",
                                admin_first_name="A", admin_last_name="B")
    company.logo.save("logos/co.png", ContentFile(b"PNG-BYTES-1234567890"), save=True)

    snap = snapshot(company)
    assert "__media__" in snap and "logo" in snap["__media__"]
    assert snap["__media__"]["logo"]["name"]

    # simulate the agency: a fresh, empty MEDIA_ROOT -> _write_media reconstitutes the file
    settings.MEDIA_ROOT = str(tmp_path / "agency")
    _write_media(snap)
    written = os.path.join(settings.MEDIA_ROOT, snap["__media__"]["logo"]["name"])
    assert os.path.exists(written)
    assert open(written, "rb").read() == b"PNG-BYTES-1234567890"


def test_m2m_clear_is_captured_as_deletes():
    from apps.sync.models import ChangeLog
    company, _ = create_company(name="ClrCo", admin_email="clr@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="clr@x.com")
    reg = CashRegister.objects.create(company=company, name="Caisse Clr")
    reg.managers.add(admin)
    ChangeLog.objects.all().delete()          # ignore le bruit d'avant
    reg.managers.clear()
    assert ChangeLog.objects.filter(entity="treasury.cashregister_managers", op="delete").exists()

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

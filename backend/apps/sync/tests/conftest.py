import pytest
from apps.sync import registry


@pytest.fixture(autouse=True)
def _restore_registry():
    """Snapshot the sync registry and restore it after each test (tests mutate it)."""
    snap = registry.all_specs()
    yield
    registry.clear()
    for spec in snap.values():
        registry.register(spec.label, spec.direction, spec.conflict)

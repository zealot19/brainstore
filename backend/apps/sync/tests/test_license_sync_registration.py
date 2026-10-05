from apps.sync import registry
import apps.sync.registrations  # noqa: F401  (ensures registrations are loaded)


def test_license_registered_down():
    spec = registry.spec_for("system_config.license")
    assert spec is not None
    assert spec.direction == registry.DOWN

from apps.core.packages import (modules_for_packages, package_for_module,
                                all_package_codes, grant_field_for)

def test_transport_modules():
    assert modules_for_packages(["transport"]) == {
        "fleet", "treasury", "voyage", "colis", "bagages", "reporting"}

def test_administration_always_on_has_no_grant_field():
    assert grant_field_for("administration") is None
    assert grant_field_for("transport") == "pkg_transport"

def test_package_for_module():
    assert package_for_module("fleet") == "transport"
    assert package_for_module("accounting") == "accounting"
    assert package_for_module("administration") == "administration"

def test_all_codes():
    assert set(all_package_codes()) == {"administration", "transport", "accounting"}

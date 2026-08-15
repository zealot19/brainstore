from apps.accounting import chart


def test_type_mapping():
    assert chart.account_type_for("571") == "asset_cash"
    assert chart.account_type_for("411") == "asset_receivable"
    assert chart.account_type_for("401") == "liability_payable"
    assert chart.account_type_for("447") == "tax"
    assert chart.account_type_for("601") == "expense"
    assert chart.account_type_for("706") == "income"
    assert chart.account_type_for("22") == "asset_fixed"
    assert chart.account_type_for("13") == "equity"


def test_reconcile_rules():
    assert chart.is_reconcilable("411") and chart.is_reconcilable("401")
    assert not chart.is_reconcilable("408")   # non lettrable
    assert not chart.is_reconcilable("418")


def test_chart_loads_and_contains_key_accounts():
    accts = {a["code"]: a for a in chart.load_ohada_accounts()}
    for code in ("411", "401", "571", "521", "601", "706", "421", "431", "447", "13"):
        assert code in accts, code
    assert len(accts) >= 120  # plan standard complet
    # parents cohérents
    assert accts["571"]["parent"] == "57"

import json
from pathlib import Path

_DATA = Path(__file__).parent / "data" / "ohada_syscohada.json"

# Comptes de tiers lettrables (SYSCOHADA) — préfixes exacts.
RECONCILE_PREFIXES = ("401", "411", "421", "425", "431", "447")


def is_reconcilable(code: str) -> bool:
    return any(code.startswith(p) for p in RECONCILE_PREFIXES)


def account_type_for(code: str) -> str:
    """Déduit le type OHADA d'un compte à partir de son code."""
    c2 = code[:2]
    cls = code[0]
    if cls == "1":
        if c2 in ("16", "17", "18", "19"):
            return "liability_current"
        return "equity"
    if cls == "2":
        return "asset_fixed"
    if cls == "3":
        return "asset_current"
    if cls == "4":
        if c2 == "40":
            return "liability_payable"
        if c2 == "41":
            return "asset_receivable"
        if c2 == "44":
            return "tax"
        if c2 in ("42", "43", "45", "46", "47", "48", "49"):
            return "liability_current"
        return "asset_current"
    if cls == "5":
        return "asset_cash"
    if cls == "6":
        return "expense"
    if cls == "7":
        return "income"
    if cls == "8":
        return "income" if c2 in ("82", "84", "86", "88") else "expense"
    return "asset_current"


def load_ohada_accounts() -> list[dict]:
    with open(_DATA, encoding="utf-8") as f:
        return json.load(f)

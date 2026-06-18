"""
Mappers: convert raw Sage 100 SQL rows → Django model field dicts.
Used by sync services to upsert Article, ArticleVariant, Depot, StockLevel.
"""
from django.utils import timezone


def map_depots(sage_rows: list[dict]) -> list[dict]:
    return [
        {
            "sage_depot_no": row["DE_No"],
            "name": (row.get("DE_Intitule") or f"Dépôt #{row['DE_No']}").strip(),
            "is_active": True,
            "last_synced_at": timezone.now(),
        }
        for row in sage_rows
    ]


def map_articles(sage_rows: list[dict]) -> list[dict]:
    return [
        {
            "sage_reference": row["AR_Ref"].strip(),
            "designation": (row.get("AR_Design") or "").strip(),
            "barcode": (row.get("AR_CodeBarre") or "").strip(),
            "family": (row.get("AR_Famille") or "").strip(),
            "sub_family": (row.get("AR_SousFamille") or "").strip(),
            "has_size_variant": bool(row.get("AR_Gamme1")),
            "has_color_variant": bool(row.get("AR_Gamme2")),
            "is_active": True,
            "last_synced_at": timezone.now(),
        }
        for row in sage_rows
    ]


def map_variants(sage_rows: list[dict], prices_by_ref: dict) -> list[dict]:
    """
    prices_by_ref: { "AG_Ref": {"price_normal": x, "price_sale": y} }
    """
    result = []
    for row in sage_rows:
        ref = (row.get("AG_Ref") or row["AR_Ref"]).strip()
        price_data = prices_by_ref.get(ref, {})
        result.append({
            "sage_ref_variant": ref,
            "article_sage_ref": row["AR_Ref"].strip(),
            "size": (row.get("AG_Gamme1") or "").strip(),
            "color": (row.get("AG_Gamme2") or "").strip(),
            "barcode": (row.get("AG_CodeBarre") or "").strip(),
            "price_normal": price_data.get("price_normal", 0),
            "price_sale": price_data.get("price_sale"),
        })
    return result


def map_stock(sage_rows: list[dict]) -> list[dict]:
    return [
        {
            "sage_ref_variant": (row.get("AS_Ref") or "").strip(),
            "depot_no": row["DE_No"],
            "stock_real": float(row.get("AS_StockReel") or 0),
            "stock_available": float(row.get("AS_StockDisponible") or 0),
            "stock_transit": float(
                (row.get("AS_StockActuel") or 0)
                - (row.get("AS_StockDisponible") or 0)
            ),
        }
        for row in sage_rows
    ]


def build_prices_index(
    price_rows: list[dict],
    sale_rows: list[dict],
) -> dict:
    """
    Build a dict { sage_ref_variant → {price_normal, price_sale} }
    from raw Sage price and sale rows.
    """
    index: dict[str, dict] = {}
    for row in price_rows:
        ref = row["AR_Ref"].strip()
        index[ref] = {"price_normal": float(row.get("AC_Prix") or 0), "price_sale": None}
    for row in sale_rows:
        ref = row["AR_Ref"].strip()
        if ref in index:
            index[ref]["price_sale"] = float(row.get("AC_PrixSolde") or 0)
    return index

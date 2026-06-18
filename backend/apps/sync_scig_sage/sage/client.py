"""
Sage 100 SQL client — direct read/write via pyodbc (SQL Server / ODBC).

Instantiation:
    SageClient(connection)   — pass a SageConnection model instance (multi-tenant)
    SageClient()             — fallback: reads SAGE_SQL_* from Django settings (legacy/dev)

Tables read (Sage 100c Gestion Commerciale):
    F_DEPOT       — warehouses
    F_ARTICLE     — articles catalog
    F_ARTGAMME    — variants (size × color)
    F_ARTSTOCK    — stock per (article variant, depot)
    F_ARTPRIX     — sale prices
"""
import logging
from contextlib import contextmanager

from django.conf import settings

logger = logging.getLogger(__name__)

try:
    import pyodbc
    _PYODBC_AVAILABLE = True
except ImportError:
    _PYODBC_AVAILABLE = False
    logger.warning("pyodbc not installed — Sage 100 SQL sync unavailable. Run: pip install pyodbc")


class SageConnectionError(Exception):
    pass


class SageQueryError(Exception):
    pass


class SageClient:
    """Direct SQL connection to Sage 100 Gestion Commerciale database."""

    def __init__(self, connection=None):
        """
        Args:
            connection: SageConnection model instance. If None, falls back to
                        Django settings (SAGE_SQL_SERVER, SAGE_SQL_PORT, etc.)
        """
        if not _PYODBC_AVAILABLE:
            raise SageConnectionError(
                "pyodbc is not installed. Run: pip install pyodbc"
            )
        if connection is not None:
            self._conn_str = connection.build_connection_string()
        else:
            self._conn_str = (
                "DRIVER={ODBC Driver 17 for SQL Server};"
                f"SERVER={getattr(settings, 'SAGE_SQL_SERVER', 'localhost')},"
                f"{getattr(settings, 'SAGE_SQL_PORT', 1433)};"
                f"DATABASE={getattr(settings, 'SAGE_SQL_DATABASE', 'GESCOM')};"
                f"UID={getattr(settings, 'SAGE_SQL_USERNAME', 'sa')};"
                f"PWD={getattr(settings, 'SAGE_SQL_PASSWORD', '')};"
                "TrustServerCertificate=yes;"
                "Connection Timeout=10;"
            )

    @contextmanager
    def _connection(self):
        conn = None
        try:
            conn = pyodbc.connect(self._conn_str, timeout=10)
            yield conn
        except pyodbc.Error as exc:
            raise SageConnectionError(
                f"Sage 100 SQL connection failed: {exc}"
            ) from exc
        finally:
            if conn:
                conn.close()

    def _execute(self, sql: str, params: tuple = ()) -> list[dict]:
        with self._connection() as conn:
            cursor = conn.cursor()
            try:
                cursor.execute(sql, params)
                cols = [col[0] for col in cursor.description]
                return [dict(zip(cols, row)) for row in cursor.fetchall()]
            except pyodbc.Error as exc:
                raise SageQueryError(f"Sage SQL query failed: {exc}") from exc

    def test_connection(self) -> bool:
        """Try a trivial query; returns True on success, raises SageConnectionError on failure."""
        with self._connection() as conn:
            conn.cursor().execute("SELECT 1")
        return True

    # ── Depots ────────────────────────────────────────────────────────────────

    def fetch_depots(self) -> list[dict]:
        """Read F_DEPOT — warehouses/stores."""
        return self._execute("""
            SELECT
                DE_No,
                DE_Intitule,
                DE_Principal,
                DE_Sommeil
            FROM F_DEPOT
            WHERE DE_Sommeil = 0
            ORDER BY DE_No
        """)

    # ── Articles ──────────────────────────────────────────────────────────────

    def fetch_articles(self) -> list[dict]:
        """Read F_ARTICLE — full article catalog."""
        return self._execute("""
            SELECT
                AR_Ref,
                AR_Design,
                AR_CodeBarre,
                AR_Famille,
                AR_SousFamille,
                AR_Gamme1,
                AR_Gamme2,
                AR_Sommeil
            FROM F_ARTICLE
            WHERE AR_Sommeil = 0
            ORDER BY AR_Ref
        """)

    # ── Variants (gammes) ─────────────────────────────────────────────────────

    def fetch_variants(self, article_ref: str | None = None) -> list[dict]:
        """
        Read F_ARTGAMME — variant combinations (size × color).
        AG_Gamme1 = Taille, AG_Gamme2 = Couleur.
        """
        if article_ref:
            return self._execute("""
                SELECT
                    AG_No,
                    AR_Ref,
                    AG_Ref,
                    AG_Gamme1,
                    AG_Gamme2,
                    AG_CodeBarre
                FROM F_ARTGAMME
                WHERE AR_Ref = ?
                ORDER BY AG_Gamme1, AG_Gamme2
            """, (article_ref,))
        return self._execute("""
            SELECT
                AG_No,
                AR_Ref,
                AG_Ref,
                AG_Gamme1,
                AG_Gamme2,
                AG_CodeBarre
            FROM F_ARTGAMME
            ORDER BY AR_Ref, AG_Gamme1, AG_Gamme2
        """)

    # ── Prices ────────────────────────────────────────────────────────────────

    def fetch_prices(self) -> list[dict]:
        """
        Read F_ARTPRIX — sale prices per article.
        Adjust table/column names if your Sage version differs.
        """
        return self._execute("""
            SELECT
                AR_Ref,
                AC_Prix,
                AC_PrixTTC
            FROM F_ARTPRIX
        """)

    def fetch_sale_prices(self) -> list[dict]:
        """
        Read promotional/sale prices from F_TARIFVENTEDET if applicable.
        May not exist in all Sage 100 configurations.
        """
        try:
            return self._execute("""
                SELECT
                    AR_Ref,
                    TA_Coef,
                    AC_Prix AS AC_PrixSolde
                FROM F_TARIFVENTEDET
                WHERE TA_Type = 1
            """)
        except SageQueryError:
            logger.warning("F_TARIFVENTEDET not found — skipping sale prices sync")
            return []

    # ── Stock ─────────────────────────────────────────────────────────────────

    def fetch_stock(self, depot_no: int | None = None) -> list[dict]:
        """
        Read F_ARTSTOCK — stock levels per (article variant, depot).
        AS_Ref = AG_Ref (variant reference).
        """
        if depot_no is not None:
            return self._execute("""
                SELECT
                    AS_Ref,
                    DE_No,
                    AS_StockReel,
                    AS_StockDisponible,
                    AS_StockActuel
                FROM F_ARTSTOCK
                WHERE DE_No = ?
            """, (depot_no,))
        return self._execute("""
            SELECT
                AS_Ref,
                DE_No,
                AS_StockReel,
                AS_StockDisponible,
                AS_StockActuel
            FROM F_ARTSTOCK
        """)

    # ── Write — inventory adjustment ──────────────────────────────────────────

    def push_inventory_adjustments(self, adjustments: list[dict]) -> int:
        """
        Write validated inventory counts back to Sage 100.

        Each dict: {
            "sage_ref_variant": str,   # AG_Ref / AS_Ref
            "depot_no": int,
            "qty": Decimal,
        }

        Updates AS_StockReel in F_ARTSTOCK.
        Returns number of rows updated.
        """
        if not adjustments:
            return 0

        updated = 0
        with self._connection() as conn:
            cursor = conn.cursor()
            try:
                for adj in adjustments:
                    cursor.execute("""
                        UPDATE F_ARTSTOCK
                        SET AS_StockReel = ?
                        WHERE AS_Ref = ? AND DE_No = ?
                    """, (
                        float(adj["qty"]),
                        adj["sage_ref_variant"],
                        int(adj["depot_no"]),
                    ))
                    updated += cursor.rowcount
                conn.commit()
            except pyodbc.Error as exc:
                conn.rollback()
                raise SageQueryError(
                    f"Failed to push inventory adjustments: {exc}"
                ) from exc
        return updated

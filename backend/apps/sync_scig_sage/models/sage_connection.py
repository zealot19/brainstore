from django.db import models
from apps.core.models import BaseModel
from apps.sync_scig_sage.sage.encryption import encrypt_password, decrypt_password


class SageConnection(BaseModel):
    """
    Sage 100 SQL connection parameters stored per company.
    One record per company — each client has their own Sage 100 server.
    Password is encrypted at rest using Fernet (AES-128-CBC derived from SECRET_KEY).
    """
    company = models.OneToOneField(
        "system_config.Company",
        on_delete=models.CASCADE,
        related_name="sage_connection",
    )
    server = models.CharField(
        max_length=255,
        help_text="Adresse IP ou hostname du serveur SQL Server (ex: 192.168.1.10)",
    )
    port = models.PositiveIntegerField(
        default=1433,
        help_text="Port SQL Server (défaut: 1433)",
    )
    database = models.CharField(
        max_length=100,
        help_text="Nom de la base de données Sage 100 (ex: GESCOM)",
    )
    username = models.CharField(
        max_length=100,
        help_text="Utilisateur SQL Server (ex: sa)",
    )
    # Stored encrypted — never exposed in plain text via API
    _password_encrypted = models.TextField(
        db_column="password_encrypted",
        blank=True,
        default="",
    )
    is_active = models.BooleanField(default=True)
    last_tested_at = models.DateTimeField(null=True, blank=True)
    last_test_success = models.BooleanField(null=True, blank=True)
    last_test_error = models.TextField(blank=True, default="")

    class Meta:
        verbose_name = "Connexion Sage 100"
        verbose_name_plural = "Connexions Sage 100"

    def __str__(self):
        return f"Sage 100 — {self.company} @ {self.server}/{self.database}"

    # ── Password property (transparent encrypt/decrypt) ───────────────────────

    @property
    def password(self) -> str:
        return decrypt_password(self._password_encrypted)

    @password.setter
    def password(self, plaintext: str):
        self._password_encrypted = encrypt_password(plaintext)

    def set_password(self, plaintext: str):
        self.password = plaintext

    # ── Connection string helper ───────────────────────────────────────────────

    def build_connection_string(self) -> str:
        return (
            "DRIVER={ODBC Driver 17 for SQL Server};"
            f"SERVER={self.server},{self.port};"
            f"DATABASE={self.database};"
            f"UID={self.username};"
            f"PWD={self.password};"
            "TrustServerCertificate=yes;"
            "Connection Timeout=10;"
        )

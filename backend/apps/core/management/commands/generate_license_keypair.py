# backend/apps/core/management/commands/generate_license_keypair.py
from django.core.management.base import BaseCommand
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
from cryptography.hazmat.primitives import serialization


class Command(BaseCommand):
    help = "Generate an Ed25519 license keypair. Private key -> master env LICENSE_PRIVATE_KEY; public key -> apps/core/license_keys.py."

    def handle(self, *args, **opts):
        priv = Ed25519PrivateKey.generate()
        priv_pem = priv.private_bytes(serialization.Encoding.PEM,
                                      serialization.PrivateFormat.PKCS8,
                                      serialization.NoEncryption()).decode()
        pub_pem = priv.public_key().public_bytes(serialization.Encoding.PEM,
                                                 serialization.PublicFormat.SubjectPublicKeyInfo).decode()
        self.stdout.write("=== PRIVATE KEY (set as LICENSE_PRIVATE_KEY on the master; DO NOT COMMIT) ===")
        self.stdout.write(priv_pem)
        self.stdout.write("=== PUBLIC KEY (paste into apps/core/license_keys.py PUBLIC_KEYS[1]) ===")
        self.stdout.write(pub_pem)

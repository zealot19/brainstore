"""Bundled license-verification public keys, keyed by version. Safe to ship.
Private keys live only in the master env (LICENSE_PRIVATE_KEY) and are never
committed. Populate version 1 after running `generate_license_keypair`."""
PUBLIC_KEYS: dict[int, str] = {
    # 1: "-----BEGIN PUBLIC KEY-----\n...\n-----END PUBLIC KEY-----\n",
}

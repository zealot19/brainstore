#!/usr/bin/env bash
# Restauration du serveur central depuis une sauvegarde locale (voir backup.sh).
# ⚠️ ÉCRASE la base et (si fournie) les médias actuels.
#
#   ./restore.sh /opt/erp/backups/db_2026-10-30_0230.dump
#   ./restore.sh /opt/erp/backups/db_....dump /opt/erp/backups/media_....tar.gz
set -euo pipefail
cd "$(dirname "$0")"

COMPOSE="docker compose -f docker-compose.nginx.yml"
set -a; [ -f .env ] && . ./.env; set +a
PGUSER="${POSTGRES_USER:-erp}"
PGDB="${POSTGRES_DB:-erp}"

DUMP="${1:?Usage: restore.sh <db_xxx.dump> [media_xxx.tar.gz]}"
MEDIA="${2:-}"
[ -f "$DUMP" ] || { echo "Introuvable : $DUMP"; exit 1; }

echo "⚠️  Va ÉCRASER la base '$PGDB'${MEDIA:+ ET les médias}. Ctrl+C pour annuler…"
sleep 5

# Couper le backend pendant la restauration (évite les connexions actives)
$COMPOSE stop web

# Base : pg_restore nettoie puis recrée les objets (--clean --if-exists), sans propriétaire.
$COMPOSE exec -T db pg_restore -U "$PGUSER" -d "$PGDB" --clean --if-exists --no-owner < "$DUMP"

# Médias (optionnel)
if [ -n "$MEDIA" ]; then
  [ -f "$MEDIA" ] || { echo "Introuvable : $MEDIA"; exit 1; }
  tar xzf "$MEDIA" -C "$(pwd)"
fi

# Relancer le backend (applique aussi les migrations au démarrage)
$COMPOSE up -d web
echo "Restauration terminée."

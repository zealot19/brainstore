#!/usr/bin/env bash
# Sauvegarde LOCALE du serveur central : base PostgreSQL + fichiers médias.
# Crée deux fichiers horodatés dans $BACKUP_DIR et applique une rotation.
#
#   ./backup.sh                       # sauvegarde ponctuelle
#   BACKUP_DIR=/mnt/sauv ./backup.sh  # dossier personnalisé
#   KEEP_DAYS=30 ./backup.sh          # conserver 30 jours (défaut 14)
#
# Planification quotidienne (cron root, car docker tourne en root ici) :
#   sudo crontab -e
#   30 2 * * * /opt/erp/deploy/vps/backup.sh >> /opt/erp/backups/backup.log 2>&1
set -euo pipefail

# Se placer dans deploy/vps (emplacement de ce script + du compose + du .env)
cd "$(dirname "$0")"

COMPOSE="docker compose -f docker-compose.nginx.yml"
BACKUP_DIR="${BACKUP_DIR:-/opt/erp/backups}"
KEEP_DAYS="${KEEP_DAYS:-14}"
STAMP="$(date +%F_%H%M%S)"

# Charger POSTGRES_USER / POSTGRES_DB depuis .env
set -a; [ -f .env ] && . ./.env; set +a
PGUSER="${POSTGRES_USER:-erp}"
PGDB="${POSTGRES_DB:-erp}"

mkdir -p "$BACKUP_DIR"

# 1) Base : dump format custom compressé (-Fc). pg_dump tourne DANS le conteneur db,
#    connexion par socket local => "trust", aucun mot de passe requis.
$COMPOSE exec -T db pg_dump -U "$PGUSER" -d "$PGDB" -Fc > "$BACKUP_DIR/db_$STAMP.dump"

# 2) Médias : archive du bind-mount ./media (peut être vide au tout début).
tar czf "$BACKUP_DIR/media_$STAMP.tar.gz" -C "$(pwd)" media 2>/dev/null || true

# 3) Rotation : supprimer les sauvegardes plus vieilles que KEEP_DAYS jours.
find "$BACKUP_DIR" -name 'db_*.dump'      -mtime +"$KEEP_DAYS" -delete
find "$BACKUP_DIR" -name 'media_*.tar.gz' -mtime +"$KEEP_DAYS" -delete

echo "OK $(date '+%F %T')  ->  $BACKUP_DIR/db_$STAMP.dump  +  media_$STAMP.tar.gz"

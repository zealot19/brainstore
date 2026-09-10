# Héberger l'ERP sur un VPS (au lieu de Railway + Vercel)

Ce guide explique comment héberger **tout le serveur central sur un seul VPS**
(un serveur Linux loué : OVH, Hetzner, DigitalOcean, Contabo, AWS EC2…), à la
place de Railway (backend) + Vercel (frontend).

Sur **un seul domaine** (ex. `https://erp.mondomaine.com`), la même machine sert :
le **frontend Angular**, l'**API Django**, la **base PostgreSQL**, et le **HTTPS**.

> Ce document remplace [`DEPLOY.md`](DEPLOY.md) (Railway/Vercel) pour un scénario
> auto-hébergé. Pour l'installation *en agence*, voir [`README.md`](README.md) §7.

---

## Sommaire
- [1. Ce dont vous avez besoin](#1-ce-dont-vous-avez-besoin)
- [2. Comment ça s'assemble (une seule machine)](#2-comment-ça-sassemble-une-seule-machine)
- [3. Étape 1 — Préparer le VPS](#3-étape-1--préparer-le-vps)
- [4. Étape 2 — Récupérer le code](#4-étape-2--récupérer-le-code)
- [5. Étape 3 — Configurer le backend (`.env`)](#5-étape-3--configurer-le-backend-env)
- [6. Étape 4 — Construire le frontend Angular](#6-étape-4--construire-le-frontend-angular)
- [7. Étape 5 — Les fichiers `docker-compose.yml` et `Caddyfile`](#7-étape-5--les-fichiers-docker-composeyml-et-caddyfile)
- [8. Étape 6 — Démarrer, HTTPS, premier compte](#8-étape-6--démarrer-https-premier-compte)
- [9. Exploitation (sauvegardes, mises à jour, logs)](#9-exploitation-sauvegardes-mises-à-jour-logs)
- [10. Dépannage](#10-dépannage)
- [11. Annexe A — Sans Docker (Nginx + systemd + certbot)](#11-annexe-a--sans-docker-nginx--systemd--certbot)
- [12. Annexe B — Servir aussi les agences (sync)](#12-annexe-b--servir-aussi-les-agences-sync)

---

## 1. Ce dont vous avez besoin

- **Un VPS** sous Linux (Ubuntu 22.04+ recommandé). Minimum conseillé :
  **2 vCPU / 4 Go RAM / 40 Go disque** (plus si trafic important).
- **Un nom de domaine** (ex. `erp.mondomaine.com`) avec un **enregistrement DNS
  de type A** pointant vers l'**adresse IP publique** du VPS.
- Un **accès SSH** au VPS (`ssh root@IP` ou un utilisateur avec `sudo`).
- Les **ports 80 et 443 ouverts** (HTTP/HTTPS) et **22** (SSH).

> **Pourquoi un domaine ?** Le certificat HTTPS (gratuit, Let's Encrypt) est délivré
> pour un nom de domaine, pas pour une adresse IP. Créez d'abord l'enregistrement DNS
> A → IP du VPS, et attendez qu'il soit propagé (quelques minutes à quelques heures).

---

## 2. Comment ça s'assemble (une seule machine)

```
        Internet (HTTPS 443)
                │
        ┌───────▼─────────────────────────────────────────┐
        │  VPS (Docker)                                     │
        │                                                   │
        │  ┌──────────┐   /api /admin /static  ┌─────────┐  │
        │  │  Caddy   │ ───────────────────────►│  web    │  │
        │  │ (proxy + │   (reverse proxy)       │ Django  │  │
        │  │  HTTPS)  │                          │+Gunicorn│  │
        │  │          │   / (tout le reste)      └────┬────┘  │
        │  │          │ ──► Angular (fichiers)        │       │
        │  │          │   /media ──► volume médias    ▼       │
        │  └──────────┘                          ┌─────────┐  │
        │                                        │   db    │  │
        │                                        │Postgres │  │
        │                                        └─────────┘  │
        └───────────────────────────────────────────────────┘
```

- **Caddy** : reverse proxy + **HTTPS automatique** (obtient et renouvelle seul le
  certificat Let's Encrypt). Il sert les fichiers Angular et transmet `/api`,
  `/admin`, `/static` à Django.
- **web** : Django + Gunicorn (applique les migrations au démarrage).
- **db** : PostgreSQL.
- **Un seul domaine** = pas de configuration CORS à faire (front et API sont sur la
  même origine).

> Nous utilisons **Caddy** car il gère le certificat HTTPS **tout seul** — c'est le
> plus simple. L'annexe A montre l'équivalent avec Nginx + certbot si vous préférez.

---

## 3. Étape 1 — Préparer le VPS

Connectez-vous en SSH, puis :

```bash
# Mettre à jour le système
sudo apt update && sudo apt -y upgrade

# Installer Docker + le plugin Compose
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker "$USER"       # puis déconnectez-vous / reconnectez-vous
sudo systemctl enable docker          # Docker démarre au boot (reprise après coupure)

# Pare-feu : autoriser SSH + web
sudo apt -y install ufw
sudo ufw allow OpenSSH
sudo ufw allow 80
sudo ufw allow 443
sudo ufw --force enable

docker compose version                # doit répondre une version
```

---

## 4. Étape 2 — Récupérer le code

```bash
git clone <ADRESSE_DU_DEPOT> erp
cd erp
mkdir -p deploy/vps                    # on y mettra .env, docker-compose.yml, Caddyfile
```

---

## 5. Étape 3 — Configurer le backend (`.env`)

Créez `deploy/vps/.env` (remplacez le domaine, les mots de passe et la clé) :

```dotenv
# ── Django ──
SECRET_KEY=REMPLACEZ_PAR_UNE_LONGUE_CLE_ALEATOIRE
DJANGO_SETTINGS_MODULE=config.settings.production
DEBUG=0
ALLOWED_HOSTS=erp.mondomaine.com
CSRF_TRUSTED_ORIGINS=https://erp.mondomaine.com
# CORS inutile : le front et l'API sont sur le même domaine.

# ── Base de données (service "db" ci-dessous) ──
POSTGRES_DB=erp
POSTGRES_USER=erp
POSTGRES_PASSWORD=REMPLACEZ_PAR_UN_MOT_DE_PASSE_FORT
DATABASE_URL=postgres://erp:REMPLACEZ_PAR_UN_MOT_DE_PASSE_FORT@db:5432/erp

# ── Langue / fuseau ──
LANGUAGE_CODE=fr-fr
TIME_ZONE=Africa/Abidjan

# ── Serveur central (si des agences se synchronisent ici — voir Annexe B) ──
SYNC_ENABLED=1
NODE_ROLE=master
SYNC_TOKEN=REMPLACEZ_PAR_UN_JETON_PARTAGE_FORT

# ── Paiement en ligne : simulé tant que Campay n'est pas configuré ──
FAKE_PAYMENTS=1

# ── (Optionnel) e-mail sortant, stockage S3, Sentry… voir backend/.env.example ──
```

> **Générer une `SECRET_KEY`** :
> ```bash
> python3 -c "import secrets; print(secrets.token_urlsafe(64))"
> ```

---

## 6. Étape 4 — Construire le frontend Angular

Le frontend est un site statique à générer **une fois** (et à chaque mise à jour).
Avant de construire, indiquez l'URL publique de l'API dans
`angular/src/environments/environment.prod.ts` :

```ts
export const environment = {
  production: true,
  apiUrl: 'https://erp.mondomaine.com/api/v1',
  onlineCompanyId: '<UUID de l'institution servie par la réservation en ligne>',
};
```

Puis construisez avec un conteneur Node jetable (aucune installation de Node requise
sur le VPS) :

```bash
cd /chemin/erp
docker run --rm -v "$PWD/angular:/app" -w /app node:20-alpine \
  sh -c "npm ci && npx ng build --configuration production"
```

Le résultat se trouve dans `angular/dist/angular/browser/` (c'est ce dossier que
Caddy servira).

---

## 7. Étape 5 — Les fichiers `docker-compose.yml` et `Caddyfile`

### `deploy/vps/docker-compose.yml`

```yaml
services:
  db:
    image: postgres:16-alpine
    restart: unless-stopped
    environment:
      POSTGRES_DB: ${POSTGRES_DB}
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
    volumes:
      - pgdata:/var/lib/postgresql/data

  web:                      # Django + Gunicorn (migrate auto au démarrage)
    build: ../../backend
    restart: unless-stopped
    env_file: .env
    volumes:
      - media:/app/media    # fichiers téléversés (persistants)
    depends_on:
      - db

  caddy:                    # reverse proxy + HTTPS automatique
    image: caddy:2-alpine
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile:ro
      - ../../angular/dist/angular/browser:/srv/app:ro   # Angular (build de l'étape 4)
      - media:/srv/media:ro                              # médias, servis directement
      - caddy_data:/data                                 # certificats (persistants)
      - caddy_config:/config
    depends_on:
      - web

volumes:
  pgdata:
  media:
  caddy_data:
  caddy_config:
```

### `deploy/vps/Caddyfile`

```caddyfile
{
    email admin@mondomaine.com      # pour les avis Let's Encrypt
}

erp.mondomaine.com {
    encode zstd gzip

    # Fichiers médias téléversés (servis depuis le volume partagé)
    handle_path /media/* {
        root * /srv/media
        file_server
    }

    # Backend Django : API, admin, statiques Django
    @backend path /api/* /admin/* /static/*
    handle @backend {
        reverse_proxy web:8000
    }

    # Frontend Angular (application mono-page) — tout le reste
    handle {
        root * /srv/app
        try_files {path} /index.html
        file_server
    }
}
```

> Caddy ajoute automatiquement l'en-tête `X-Forwarded-Proto: https`, ce dont Django a
> besoin en production (`SECURE_PROXY_SSL_HEADER`) pour éviter une boucle de redirection.

---

## 8. Étape 6 — Démarrer, HTTPS, premier compte

```bash
cd /chemin/erp/deploy/vps

# 1) Démarrer toute la pile (Caddy obtient le certificat HTTPS automatiquement)
docker compose up -d --build

# 2) Vérifier que les 3 services tournent : db, web, caddy
docker compose ps

# 3) Créer le super-administrateur
docker compose exec web python manage.py createsuperuser
```

Ouvrez ensuite **`https://erp.mondomaine.com`** dans un navigateur : le cadenas HTTPS
doit être présent. Connectez-vous, puis créez la première institution :
**Super Admin → Institutions → Nouvelle institution** (l'app crée l'agence Siège et
le compte admin, avec un mot de passe temporaire affiché une seule fois).

> **Le HTTPS ne s'active pas ?** Vérifiez que le DNS `erp.mondomaine.com` pointe bien
> vers l'IP du VPS et que les ports 80/443 sont ouverts, puis regardez les logs :
> `docker compose logs -f caddy`.

---

## 9. Exploitation (sauvegardes, mises à jour, logs)

**Sauvegarde quotidienne de la base** (cron) :

```bash
# /etc/cron.daily/erp-backup   (chmod +x)
cd /chemin/erp/deploy/vps
docker compose exec -T db pg_dump -U erp erp | gzip > /var/backups/erp_$(date +%F).sql.gz
find /var/backups -name 'erp_*.sql.gz' -mtime +14 -delete
```

Restauration : `gunzip -c fichier.sql.gz | docker compose exec -T db psql -U erp erp`

**Mettre à jour l'application** :

```bash
cd /chemin/erp
git pull
# Reconstruire le frontend (étape 4)
docker run --rm -v "$PWD/angular:/app" -w /app node:20-alpine \
  sh -c "npm ci && npx ng build --configuration production"
# Redéployer le backend (les migrations s'appliquent au démarrage)
cd deploy/vps && docker compose up -d --build
```

**Logs** : `docker compose logs -f web` (ou `caddy`, `db`).
**Reprise après coupure** : `restart: unless-stopped` + `systemctl enable docker`
relancent tout automatiquement. Un **onduleur (UPS)** est recommandé.

---

## 10. Dépannage

| Symptôme | Cause probable | Correctif |
|---|---|---|
| Le certificat HTTPS n'est pas délivré | DNS pas encore propagé / ports 80-443 fermés | Vérifier l'enregistrement A et le pare-feu ; `docker compose logs -f caddy` |
| **Boucle de redirection** (ERR_TOO_MANY_REDIRECTS) | l'en-tête `X-Forwarded-Proto` n'arrive pas à Django | garder Caddy (il le pose seul) ; en Nginx, ajouter `proxy_set_header X-Forwarded-Proto $scheme;` |
| **400 Bad Request** / « DisallowedHost » | domaine absent de `ALLOWED_HOSTS` | ajouter le domaine dans `.env` puis `docker compose up -d` |
| **502 Bad Gateway** | le service `web` n'est pas prêt / a planté | `docker compose logs -f web` ; vérifier `DATABASE_URL` et `SECRET_KEY` |
| 500 « no such column » | migration non appliquée | `docker compose exec web python manage.py migrate` |
| Les images/logos téléversés ne s'affichent pas | volume médias non monté | vérifier le volume `media` (web `/app/media`, caddy `/srv/media`) |
| Formulaire refusé (CSRF) | domaine absent de `CSRF_TRUSTED_ORIGINS` | ajouter `https://erp.mondomaine.com` puis redémarrer |

---

## 11. Annexe A — Sans Docker (Nginx + systemd + certbot)

Pour héberger « à la main » (sans Docker), sur Ubuntu :

```bash
# Dépendances système (dont celles de WeasyPrint pour les PDF)
sudo apt -y install python3.12 python3.12-venv python3-pip postgresql nginx \
  libpango-1.0-0 libpangocairo-1.0-0 libpangoft2-1.0-0 libgdk-pixbuf-2.0-0 \
  libcairo2 libffi8 libharfbuzz0b libfontconfig1 shared-mime-info fonts-dejavu

# Base de données
sudo -u postgres psql -c "CREATE USER erp WITH PASSWORD 'motdepasse';"
sudo -u postgres psql -c "CREATE DATABASE erp OWNER erp;"

# Backend
cd /opt/erp/backend
python3.12 -m venv .venv && . .venv/bin/activate
pip install -r requirements/production.txt
cp .env.example .env            # renseigner comme au §5 (DATABASE_URL=postgres://erp:...@localhost:5432/erp)
python manage.py migrate
python manage.py collectstatic --noinput
python manage.py createsuperuser
```

**Service systemd** `/etc/systemd/system/erp.service` :

```ini
[Unit]
Description=ERP Gunicorn
After=network.target postgresql.service

[Service]
User=www-data
WorkingDirectory=/opt/erp/backend
EnvironmentFile=/opt/erp/backend/.env
ExecStart=/opt/erp/backend/.venv/bin/gunicorn config.wsgi:application --bind 127.0.0.1:8000 --workers 3
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable --now erp
```

**Frontend** : `cd /opt/erp/angular && npm ci && npx ng build --configuration production`
(sortie : `dist/angular/browser`).

**Nginx** `/etc/nginx/sites-available/erp` :

```nginx
server {
    listen 80;
    server_name erp.mondomaine.com;

    root /opt/erp/angular/dist/angular/browser;
    index index.html;
    client_max_body_size 25m;

    location /media/ { alias /opt/erp/backend/media/; }

    location ~ ^/(api|admin|static)/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;   # indispensable
    }

    location / { try_files $uri $uri/ /index.html; }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/erp /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
# HTTPS gratuit (ajoute automatiquement le bloc 443 + renouvellement)
sudo apt -y install certbot python3-certbot-nginx
sudo certbot --nginx -d erp.mondomaine.com
```

---

## 12. Annexe B — Servir aussi les agences (sync)

Ce VPS peut être le **serveur central (master)** auquel les agences se synchronisent :

- Dans `.env` : `SYNC_ENABLED=1`, `NODE_ROLE=master`, un `SYNC_TOKEN` fort.
- Créez les agences dans l'interface (**Administration → Agences**), avec un **code**.
- Sur chaque serveur d'agence, suivez [`README.md`](README.md) §7 : le même
  `SYNC_TOKEN`, `SYNC_MASTER_URL=https://erp.mondomaine.com/api/v1`, le bon
  `NODE_AGENCY_ID`, puis `bootstrap_from_master`.
- Vérification : `GET https://erp.mondomaine.com/api/v1/sync/status/` (admin) montre
  les agences en ligne.

> **Une seule agence, sans nœuds distants ?** Mettez `SYNC_ENABLED=0` et ignorez cette annexe.

---

© Brainstore Group — ERP Transport & Voyages · Guide d'hébergement VPS.

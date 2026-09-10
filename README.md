# Brainstore Group — ERP Transport & Voyages

ERP complet pour une **agence / compagnie de voyage** (transport de passagers, colis
et bagages) : billetterie, réservations, flotte, trésorerie, comptabilité OHADA,
reporting, réservation en ligne (PWA + WhatsApp), et synchronisation avec Sage 100.

Ce document explique **comment installer et exploiter l'application de bout en bout** :

1. En **ligne** (serveur central « master » : backend + frontend hébergés).
2. En **local dans chaque agence** (serveur Linux sous Docker, synchronisé au master).

> Interface disponible en **français, anglais, espagnol et portugais** (sélecteur de
> langue dans l'en-tête).

---

## Sommaire

- [1. Présentation & pile technique](#1-présentation--pile-technique)
- [2. Architecture (master en ligne + agences)](#2-architecture-master-en-ligne--agences)
- [3. Structure du dépôt](#3-structure-du-dépôt)
- [4. Prérequis](#4-prérequis)
- [5. Développement local (poste développeur)](#5-développement-local-poste-développeur)
- [6. Déploiement EN LIGNE (master hébergé)](#6-déploiement-en-ligne-master-hébergé)
- [7. Déploiement LOCAL EN AGENCE (serveur Linux + Docker)](#7-déploiement-local-en-agence-serveur-linux--docker)
- [8. Référence des variables d'environnement](#8-référence-des-variables-denvironnement)
- [9. Exploitation & maintenance](#9-exploitation--maintenance)
- [10. Dépannage](#10-dépannage)
- [11. Documentation complémentaire](#11-documentation-complémentaire)

---

## 1. Présentation & pile technique

| Couche | Technologie |
|---|---|
| **Backend** | Django + Django REST Framework, JWT (SimpleJWT), drf-spectacular (Swagger), WeasyPrint (PDF), Gunicorn |
| **Frontend** | Angular 21 (standalone), i18n Transloco, servi par Vercel / build statique |
| **Base de données** | PostgreSQL 16 (SQLite possible en dev) |
| **Cache / files** | Redis (Celery — optionnel en dev) |
| **Conteneurisation** | Docker + Docker Compose |
| **Python / Node** | Python **3.12** (CI & prod), Node **20 LTS** |

**Modules** : `core`, `authentication`, `admin_rbac` (rôles & permissions), `users`,
`system_config`, `hr`, `fleet`, `transport_config`, `voyage`, `ticketing`
(réservations / billets / bagages), `parcel` (colis), `treasury` (trésorerie),
`accounting` (OHADA), `online_booking` (PWA), `sync_scig_sage` (Sage 100),
`whatsapp_bot`.

L'API expose sa documentation interactive sur **`/api/docs/`** (Swagger UI).

---

## 2. Architecture (master en ligne + agences)

L'ERP fonctionne en **hub-and-spoke** (étoile) :

```
                       ┌───────────────────────────────────────┐
                       │         MASTER (en ligne)             │
                       │  Frontend Angular  ──►  Backend Django │
                       │  (Vercel)                (Railway)     │
                       │  + PostgreSQL (source de vérité)       │
                       │  + Réservation en ligne (PWA/WhatsApp) │
                       └───────────────▲───────────────────────┘
                                       │  HTTPS  (SYNC_TOKEN partagé)
                    ┌──────────────────┼──────────────────┐
                    │                  │                  │
          ┌─────────▼────────┐ ┌───────▼────────┐ ┌───────▼────────┐
          │  AGENCE A (LAN)  │ │  AGENCE B (LAN) │ │  AGENCE C …    │
          │  Docker: web +   │ │  Docker: web +  │ │                │
          │  db + workers    │ │  db + workers   │ │                │
          │  PostgreSQL local│ │  PostgreSQL local│ │                │
          └──────────────────┘ └─────────────────┘ └────────────────┘
```

- **Master** : instance hébergée en ligne. Détient la **configuration de référence**
  (institutions, agences, réseau, tarifs, RBAC, utilisateurs) et sert la
  **réservation en ligne** (PWA `/reserver` + bot WhatsApp).
- **Agence** : serveur local dans les locaux de l'agence. Fonctionne **même sans
  Internet** (ventes au guichet). Un worker **pousse** ses transactions (réservations,
  colis, trésorerie, départs, sièges) vers le master et **tire** la config du master.
- La configuration de référence est **en lecture seule** sur les agences (on l'édite
  sur le master, elle redescend).

> Une agence unique peut aussi tout faire tourner sur le master seul (sans nœuds
> agences) : mettez simplement `SYNC_ENABLED=0`.

---

## 3. Structure du dépôt

```
ERP-master/
├── backend/                 # Django (API)
│   ├── config/settings/     # base.py · local.py · production.py
│   ├── api/v1/router.py      # agrégation des routes /api/v1/…
│   ├── apps/                 # modules métier
│   ├── requirements/         # base.txt · local.txt · production.txt
│   ├── Dockerfile            # image de prod (migrate auto au démarrage)
│   ├── docker-compose.yml    # pile de DEV (db + redis + backend)
│   └── .env.example
├── angular/                 # Frontend Angular
│   ├── src/environments/     # environment.ts (dev) · environment.prod.ts (prod)
│   ├── public/i18n/          # fr/en/es/pt.json
│   └── package.json
├── deploy/agency/           # pile de PROD pour une agence (on-premise)
│   ├── docker-compose.yml    # web + db + sync_worker + reserve_worker
│   └── .env.example
├── .github/workflows/deploy.yml  # CI/CD (tests + déploiement)
├── DEPLOY.md                # notes déploiement Railway/Vercel
└── docs/                    # runbooks (sync, onboarding agence, WhatsApp…)
```

---

## 4. Prérequis

**Poste de dev** : Python 3.12, Node 20 LTS + npm, PostgreSQL 16 (ou Docker), Git.

**Serveur d'agence (Linux)** : Docker Engine + Docker Compose plugin (Ubuntu 22.04+
recommandé), 2 vCPU / 4 Go RAM minimum, accès HTTPS sortant vers le master.

```bash
# Installer Docker sur Ubuntu/Debian
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker "$USER"   # puis se reconnecter
docker compose version            # vérifier le plugin compose
```

---

## 5. Développement local (poste développeur)

### 5.1 Option A — Docker (le plus simple)

```bash
cd backend
cp .env.example .env              # ajuste SECRET_KEY si besoin
docker compose up --build         # db + redis + backend sur http://localhost:8000
```

### 5.2 Option B — virtualenv

```bash
cd backend
python3.12 -m venv .venv && source .venv/bin/activate
pip install -r requirements/local.txt
cp .env.example .env              # DJANGO_SETTINGS_MODULE=config.settings.local
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver        # http://127.0.0.1:8000  ·  API: /api/v1  ·  Docs: /api/docs/
```

### 5.3 Frontend

```bash
cd angular
npm install
# src/environments/environment.ts → apiUrl doit pointer vers le backend :
#   apiUrl: 'http://127.0.0.1:8000/api/v1'
npm start                          # http://localhost:4200
```

Tests : `pytest` (backend), `npm run i18n:check` + `npx ng build` (frontend).

---

## 6. Déploiement EN LIGNE (master hébergé)

Le master est hébergé sur **Railway** (backend + PostgreSQL) et **Vercel** (frontend),
déployés automatiquement par **GitHub Actions** (`.github/workflows/deploy.yml`) à
chaque push sur `master` du dépôt de déploiement.

> Détails complets et à jour : voir **[`DEPLOY.md`](DEPLOY.md)**. Résumé ci-dessous.

### 6.1 Backend — Railway (une fois)

1. Railway → **New Project → Deploy from GitHub repo** → dépôt de déploiement.
2. **Settings → Root Directory = `backend`** (Railway lit `backend/railway.json`).
3. **Désactiver l'auto-deploy Git** de Railway (c'est GitHub Actions qui déploie).
4. **Add → Database → PostgreSQL** (fournit `DATABASE_URL`).
5. Renseigner les **variables** (voir [§8](#8-référence-des-variables-denvironnement)) :
   `DJANGO_SETTINGS_MODULE=config.settings.production`, `SECRET_KEY`, `DATABASE_URL`,
   `CORS_ALLOWED_ORIGINS`, `CSRF_TRUSTED_ORIGINS`.
6. Créer un **token Railway** → secret GitHub `RAILWAY_TOKEN`.
7. Noter l'URL publique, ex. `https://brainstore-production.up.railway.app`.

Le `Dockerfile` applique **`migrate` au démarrage** puis lance Gunicorn ; les
statiques sont servis par **WhiteNoise** (`collectstatic` au build).

### 6.2 Frontend — Vercel (une fois)

1. Vercel → **Add New → Project** → dépôt de déploiement.
2. **Root Directory = `angular`**.
3. Éditer `angular/src/environments/environment.prod.ts` :
   ```ts
   apiUrl: 'https://<backend-railway>/api/v1',
   onlineCompanyId: '<UUID de l'institution servie par la PWA>',
   ```
4. Récupérer `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` → secrets GitHub.

### 6.3 Secrets GitHub (dépôt de déploiement)

`Settings → Secrets and variables → Actions` :
`RAILWAY_TOKEN`, `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.
Le pipeline : **test (pytest + i18n)** → **deploy-backend** → **deploy-frontend**
(les tests sont une barrière : s'ils échouent, rien n'est déployé).

### 6.4 Ordre de mise en ligne (les URLs se répondent)

1. Déployer le **backend** → obtenir l'URL Railway.
2. Mettre cette URL dans `environment.prod.ts` (`apiUrl`) → push.
3. Le pipeline déploie le **frontend** → obtenir l'URL `*.vercel.app`.
4. Renseigner `CORS_ALLOWED_ORIGINS` + `CSRF_TRUSTED_ORIGINS` (= URL Vercel) sur
   Railway → redéploiement.

### 6.5 Premier démarrage (super-admin + institution)

```bash
# Console Railway (ou `railway run`)
python manage.py createsuperuser
```

Puis, connecté en super-admin dans l'UI : **Super Admin → Institutions → Nouvelle
institution**. En renseignant l'e-mail du premier administrateur, l'app crée
automatiquement l'**agence Siège** et le **compte admin** (mot de passe temporaire
affiché une seule fois — à transmettre à l'agence).

---

## 7. Déploiement LOCAL EN AGENCE (serveur Linux + Docker)

Chaque agence tourne en autonomie sur son serveur, et se synchronise au master.
La pile `deploy/agency/` démarre 4 services : **web** (Django+Gunicorn), **db**
(PostgreSQL), **sync_worker** (push/pull config), **reserve_worker** (heartbeat +
réservations en ligne de l'agence).

### 7.1 Pré-requis côté master (une fois)

- Sur le master : `SYNC_ENABLED=1`, `NODE_ROLE=master`, un `SYNC_TOKEN` fort.
- L'**agence existe** dans la config (Administration → Agences) avec un **code**, et
  ses points de vente/gares (`ServicePoint`) sont rattachés à cette agence.
- Master **et** agences font tourner le **même code / mêmes migrations** (un écart de
  schéma renvoie une erreur 409 : migrer le master d'abord, puis les agences).

### 7.2 Récupérer le code sur le serveur d'agence

```bash
git clone <URL_DU_DEPOT> erp && cd erp
```

### 7.3 Configurer le `.env` de l'agence

```bash
cd deploy/agency
cp .env.example .env
nano .env
```

Renseigner (voir [§8](#8-référence-des-variables-denvironnement) pour le détail) :

```dotenv
SECRET_KEY=<clé aléatoire forte>
DJANGO_SETTINGS_MODULE=config.settings.production
DEBUG=0
ALLOWED_HOSTS=<hote-agence>,localhost,127.0.0.1

POSTGRES_DB=erp_agency
POSTGRES_USER=erp_agency
POSTGRES_PASSWORD=<mot de passe fort>
DATABASE_URL=postgres://erp_agency:<mdp>@db:5432/erp_agency
WEB_PORT=8000

SYNC_ENABLED=1
NODE_ROLE=agency
NODE_ID=<uuid unique de cette instance>
NODE_AGENCY_ID=<UUID de l'agence servie (existe sur le master)>
SYNC_MASTER_URL=https://<hote-master>/api/v1
SYNC_TOKEN=<même jeton que le master>
SYNC_INTERVAL=90
RESERVE_INTERVAL=20

FAKE_PAYMENTS=1        # 0 + Campay pour du vrai Mobile Money
```

> Générer un UUID : `python3 -c "import uuid;print(uuid.uuid4())"`.

### 7.4 Démarrer la pile

```bash
docker compose up -d --build       # depuis deploy/agency/
docker compose ps                  # web + db + sync_worker + reserve_worker
```

Le service `web` applique les **migrations** au démarrage (via le `Dockerfile`).
L'UI de l'agence est alors accessible sur `http://<hote-agence>:8000`.

### 7.5 Amorcer depuis le master (une fois)

```bash
docker compose run --rm web python manage.py bootstrap_from_master
```

Tire un instantané complet de la config du master (institutions, agences,
utilisateurs, RBAC, réseau, tarifs) en ordre de dépendances : l'agence est
opérationnelle immédiatement. (Les départs/sièges sont créés localement.)

### 7.6 Synchronisation (déjà automatique)

Les workers `sync_worker` et `reserve_worker` tournent en boucle via Compose. Si
vous préférez cron/systemd plutôt que les conteneurs workers :

```cron
*/2 * * * *  cd /chemin/erp/backend && python manage.py sync_once     >> /var/log/sync.log 2>&1
*/1 * * * *  cd /chemin/erp/backend && python manage.py reserve_worker >> /var/log/reserve.log 2>&1
```

**Vérifier** : sur le master, `GET /api/v1/sync/status/` (admin) montre l'agence
**en ligne** avec un `last_seen` récent. Une réservation créée en agence remonte
au master après `sync_once` ; un tarif modifié sur le master redescend en agence.

### 7.7 Résilience (coupure de courant / redémarrage)

Tous les services déclarent `restart: unless-stopped` : après une coupure,
Docker les **relance automatiquement au retour du courant**, à condition que le
démon Docker démarre au boot :

```bash
sudo systemctl enable docker        # Docker démarre au démarrage du serveur
```

Recommandé : un **onduleur (UPS)** sur le serveur + le routeur/switch, pour un
arrêt propre et une reprise sans corruption de la base.

### 7.8 Sauvegardes (base de l'agence)

Chaque base d'agence se sauvegarde **indépendamment** (le master reste la source
consolidée). Exemple de sauvegarde quotidienne (cron) :

```bash
# /etc/cron.daily/erp-backup  (chmod +x)
cd /chemin/erp/deploy/agency
docker compose exec -T db pg_dump -U erp_agency erp_agency \
  | gzip > /var/backups/erp_agency_$(date +%F).sql.gz
find /var/backups -name 'erp_agency_*.sql.gz' -mtime +14 -delete
```

Restauration : `gunzip -c fichier.sql.gz | docker compose exec -T db psql -U erp_agency erp_agency`.

---

## 8. Référence des variables d'environnement

### 8.1 Backend — commun / master en ligne (`backend/.env`, ou variables Railway)

| Variable | Rôle | Exemple |
|---|---|---|
| `DJANGO_SETTINGS_MODULE` | Réglages actifs | `config.settings.production` (prod) / `.local` (dev) |
| `SECRET_KEY` | Clé secrète Django (obligatoire) | *(chaîne aléatoire longue)* |
| `DEBUG` | Mode debug | `False` en prod |
| `ALLOWED_HOSTS` | Hôtes autorisés (liste) | `erp.mondomaine.com,localhost` |
| `DATABASE_URL` | Connexion PostgreSQL | `postgres://user:pass@host:5432/db` |
| `CORS_ALLOWED_ORIGINS` | Origines front autorisées | `https://front.vercel.app` |
| `CSRF_TRUSTED_ORIGINS` | Origines de confiance CSRF | `https://front.vercel.app` |
| `LANGUAGE_CODE` / `TIME_ZONE` | Langue / fuseau par défaut | `fr-fr` / `Africa/Abidjan` |
| `REDIS_URL` | Cache / Celery | `redis://localhost:6379/0` |
| `EMAIL_HOST` … `DEFAULT_FROM_EMAIL` | SMTP (notifications) | *(voir `.env.example`)* |
| `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` / `AWS_STORAGE_BUCKET_NAME` | Stockage objet des médias (prod) | — |
| `SENTRY_DSN` | Suivi d'erreurs (optionnel) | — |

### 8.2 Réservation en ligne & paiements

| Variable | Rôle |
|---|---|
| `FAKE_PAYMENTS` | `1` = paiements simulés (défaut) ; `0` = Mobile Money réel (Campay) |
| `WHATSAPP_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID`, `WHATSAPP_VERIFY_TOKEN`, `WHATSAPP_APP_SECRET`, `WHATSAPP_COMPANY_ID` | Bot WhatsApp (voir `docs/whatsapp-bot-setup.md`) |

### 8.3 Synchronisation (master ↔ agences)

| Variable | Master | Agence |
|---|---|---|
| `SYNC_ENABLED` | `1` | `1` |
| `NODE_ROLE` | `master` | `agency` |
| `NODE_ID` | — | UUID **unique** de l'instance |
| `NODE_AGENCY_ID` | — | UUID de l'agence servie (existe sur le master) |
| `SYNC_MASTER_URL` | — | `https://<master>/api/v1` |
| `SYNC_TOKEN` | jeton partagé fort | **même** jeton que le master |
| `SYNC_INTERVAL` / `RESERVE_INTERVAL` | — | cadence workers (s) |

### 8.4 Frontend (`angular/src/environments/environment.prod.ts`)

| Champ | Rôle |
|---|---|
| `apiUrl` | URL du backend + `/api/v1` |
| `onlineCompanyId` | UUID de l'institution servie par la PWA de réservation |

---

## 9. Exploitation & maintenance

- **Migrations** : appliquées automatiquement au démarrage (Docker/Railway). En
  manuel : `python manage.py migrate`. Un « no such column » 500 = migration non
  appliquée → relancer `migrate`.
- **Mise à jour d'une agence** : `git pull` → `docker compose up -d --build`
  (migrer le **master d'abord**, sinon écart de schéma = 409 sur la sync).
- **Statut de sync** : `GET /api/v1/sync/status/` (admin d'institution).
- **Sauvegardes** : master = base gérée par l'hébergeur ; agences = `pg_dump`
  quotidien ([§7.8](#78-sauvegardes-base-de-lagence)).
- **Logs** : `docker compose logs -f web` (et `sync_worker`, `reserve_worker`).
- **Documentation API** : `/api/docs/` (Swagger).

---

## 10. Dépannage

| Symptôme | Cause probable | Correctif |
|---|---|---|
| 500 « no such column » | migration non appliquée | `python manage.py migrate` |
| Sync renvoie **409** | écart de schéma master/agence | migrer le master puis l'agence (même version) |
| « Agence hors ligne » (réservation en ligne refusée) | `reserve_worker` arrêté / pas de heartbeat | vérifier le worker et `SYNC_MASTER_URL`/`SYNC_TOKEN` |
| Erreurs **CORS/CSRF** dans le navigateur | origines non déclarées | ajouter l'URL front dans `CORS_ALLOWED_ORIGINS` + `CSRF_TRUSTED_ORIGINS` |
| Boucle de redirection HTTPS derrière proxy | header proxy manquant | déjà géré (`SECURE_PROXY_SSL_HEADER`) en prod |
| Config non modifiable en agence | c'est voulu (lecture seule) | éditer sur le **master**, elle redescend |
| Nouvelle permission RBAC invisible | non accordée / pas de reconnexion | accorder au rôle puis se reconnecter (les admins passent outre) |

---

## 11. Documentation complémentaire

- **[`DEPLOY.md`](DEPLOY.md)** — déploiement Railway/Vercel détaillé.
- **`docs/sync-onboarding-runbook.md`** — mise en service d'une nouvelle agence.
- **`docs/whatsapp-bot-setup.md`** — configuration du bot WhatsApp.
- **`ARCHITECTURE TECHNIQUE - ERP.pdf`** — architecture technique.
- **Manuels utilisateur** (`Manuel - 01 … 11 .pdf`) — prise en main, voyages,
  réservations, colis & bagages, flotte, trésorerie, comptabilité, reporting,
  administration & sécurité, réservation en ligne, synchronisation Sage.

---

© Brainstore Group — ERP Transport & Voyages.

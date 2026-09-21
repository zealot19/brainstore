# Déploiement Online + Offline (master en ligne + agences hors-ligne, synchronisés)

Ce guide décrit, **de bout en bout et dans l'ordre**, comment :

1. déployer la **version en ligne** (le *master*, source de vérité) sur un **VPS** ;
2. déployer la **version hors-ligne** (une *agence*) sur un **serveur local** dans les
   locaux de l'agence ;
3. **synchroniser** les deux (config qui descend, ventes qui remontent), y compris
   quand l'agence perd Internet.

> Ce document est le **fil conducteur**. Il s'appuie sur deux guides plus détaillés,
> à garder sous la main :
> - [`README-VPS.md`](README-VPS.md) — héberger le serveur central sur un VPS ;
> - [`README.md`](README.md) §7 — installer une agence + §8 référence des variables.

---

## 1. Vue d'ensemble

L'ERP fonctionne en **hub-and-spoke** (étoile). Un seul **master** en ligne détient la
configuration de référence et sert la réservation en ligne ; chaque **agence** tourne
sur son propre serveur, **fonctionne même sans Internet**, et se synchronise au master.

```
                    ┌──────────────────────────────────────────────┐
                    │   MASTER (VPS, en ligne)                      │
                    │   Caddy(HTTPS) → Django(API) + Angular(UI)    │
                    │   PostgreSQL (source de vérité)               │
                    │   NODE_ROLE=master                            │
                    └───────────────▲──────────────────────────────┘
                                    │  HTTPS + SYNC_TOKEN partagé
             ┌──────────────────────┼──────────────────────┐
             │                      │                      │
   ┌─────────▼─────────┐  ┌─────────▼─────────┐  ┌─────────▼─────────┐
   │ AGENCE A (local)  │  │ AGENCE B (local)  │  │ AGENCE C …        │
   │ Caddy→web+db      │  │ Caddy→web+db      │  │                   │
   │ + sync_worker     │  │ + sync_worker     │  │                   │
   │ + reserve_worker  │  │ + reserve_worker  │  │                   │
   │ PostgreSQL local  │  │ PostgreSQL local  │  │                   │
   │ NODE_ROLE=agency  │  │ NODE_ROLE=agency  │  │                   │
   └───────────────────┘  └───────────────────┘  └───────────────────┘
```

- **Master** = **source de vérité**. On y crée/édite les institutions, agences, réseau
  (villes, gares, lignes), tarifs, RBAC, utilisateurs. Il sert aussi la réservation en
  ligne (PWA `/reserver` + bot WhatsApp).
- **Agence** = nœud local. Il **tire** la config du master (lecture seule sur place) et
  **pousse** ses transactions (réservations, colis, trésorerie, départs, sièges). Il
  **vend au guichet même sans Internet** ; les données remontent au retour du lien.

> **Une seule agence, sans master distant ?** Déployez uniquement la Partie A et mettez
> `SYNC_ENABLED=0`. Ce guide couvre le cas multi-sites synchronisé.

---

## 2. Sens de la synchronisation

| Donnée | Master → Agence (descend) | Agence → Master (remonte) |
|---|:---:|:---:|
| Institutions, agences, réseau, tarifs, RBAC, utilisateurs | ✅ (lecture seule en agence) | — |
| Réservations / billets, colis, bagages | — | ✅ |
| Mouvements de trésorerie, sessions de caisse | — | ✅ |
| Départs (voyages), sièges vendus | créés **localement** | ✅ (remontent) |
| Réservations en ligne (PWA / WhatsApp) | relayées vers l'agence concernée | ✅ (statut) |

Règle d'or : **la config s'édite sur le master**, les **ventes se font en agence**.

---

## 3. La séquence globale (à respecter dans cet ordre)

L'ordre compte : une agence ne peut se synchroniser que si le master existe déjà, que
l'agence y est déclarée, et que **les deux tournent le même code / les mêmes migrations**.

```
1. Déployer le MASTER sur le VPS (Partie A) ................... [en ligne]
2. Sur le master : activer la sync + créer l'institution
   + créer l'AGENCE (avec un code) + noter son UUID ......... (Partie A, §A.8)
3. Déployer l'AGENCE sur le serveur local (Partie B) ......... [hors-ligne]
4. Amorcer l'agence depuis le master : bootstrap_from_master . (Partie B, §B.7)
5. Vérifier la synchronisation (sync/status) ................. (Partie C)
6. Exploitation : mises à jour ordonnées (master d'abord),
   sauvegardes, résilience ................................... (Partie D)
```

> **Ne jamais** amorcer une agence avant que son `NODE_AGENCY_ID` (l'UUID de l'agence)
> n'existe sur le master, sinon `bootstrap_from_master` n'a rien à tirer.

---

## 4. Prérequis

**Communs (master ET agence)**
- Un serveur Linux (Ubuntu 22.04+), **2 vCPU / 4 Go RAM / 40 Go** minimum.
- **Docker + plugin Compose** : `curl -fsSL https://get.docker.com | sh`.
- Le **même dépôt, au même commit** (`git log -1` identique des deux côtés).
- Un **`SYNC_TOKEN`** commun (jeton partagé fort), le même sur le master et sur chaque agence.

**Spécifiques**
- **Master** : un **nom de domaine** public (ex. `erp.mondomaine.com`) → enregistrement
  DNS **A** vers l'IP du VPS ; **ports 80/443 ouverts**.
- **Agence** : un serveur dans les locaux + un **hostname** :
  - soit un **domaine public** (ex. `agence1.mondomaine.com`, ports 80/443 ouverts) → HTTPS Let's Encrypt ;
  - soit un **nom local** (LAN, ex. `erp.agence1.lan`) → HTTPS **auto-signé** (Caddy `tls internal`).

> ⚠️ **HTTPS obligatoire des deux côtés.** Les réglages de production imposent
> `SECURE_SSL_REDIRECT=True` : l'app **doit** être derrière le TLS de Caddy (public ou
> `tls internal`). En clair HTTP pur, on tombe dans une boucle de redirection.

**Générer les secrets utiles :**
```bash
python3 -c "import secrets; print(secrets.token_urlsafe(64))"   # SECRET_KEY, SYNC_TOKEN
python3 -c "import uuid; print(uuid.uuid4())"                     # NODE_ID
```

---

## 5. PARTIE A — Déployer le MASTER en ligne (VPS)

Reprend [`README-VPS.md`](README-VPS.md) (pile *tout-en-un* : Caddy + Django + PostgreSQL).
Résumé des commandes ; se référer à README-VPS.md pour les détails/écrans.

### A.1 — Préparer le VPS
```bash
sudo apt update && sudo apt -y upgrade
curl -fsSL https://get.docker.com | sh
sudo systemctl enable docker
git clone <URL_DU_DEPOT> erp && cd erp
```

### A.2 — Construire le frontend (API sur le même domaine)
Dans `angular/src/environments/environment.prod.ts` :
```ts
export const environment = {
  production: true,
  apiUrl: 'https://erp.mondomaine.com/api/v1',
  onlineCompanyId: '<UUID de l'institution servie par la réservation en ligne>',
};
```
```bash
docker run --rm -v "$PWD/angular:/app" -w /app node:20-alpine \
  sh -c "npm ci && npx ng build --configuration production"
# → sortie servie par Caddy : angular/dist/angular/browser/
```

### A.3 — `deploy/vps/Caddyfile`
Remplacer le domaine et l'e-mail (le reste est déjà correct) :
```caddyfile
{
    email admin@mondomaine.com
}
erp.mondomaine.com {
    encode zstd gzip
    handle_path /media/* { root * /srv/media; file_server }
    @backend path /api/* /admin/* /static/*
    handle @backend { reverse_proxy web:8000 }
    handle { root * /srv/app; try_files {path} /index.html; file_server }
}
```

### A.4 — `deploy/vps/.env` (rôle **master**)
```dotenv
SECRET_KEY=<longue clé aléatoire>
DJANGO_SETTINGS_MODULE=config.settings.production
DEBUG=0
ALLOWED_HOSTS=erp.mondomaine.com
CSRF_TRUSTED_ORIGINS=https://erp.mondomaine.com

POSTGRES_DB=erp
POSTGRES_USER=erp
POSTGRES_PASSWORD=<mot de passe fort>
DATABASE_URL=postgres://erp:<mot de passe fort>@db:5432/erp
LANGUAGE_CODE=fr-fr
TIME_ZONE=Africa/Abidjan

# ── Sync : ce nœud est le MASTER ──
SYNC_ENABLED=1
NODE_ROLE=master
SYNC_TOKEN=<jeton partagé fort — à réutiliser tel quel sur chaque agence>

FAKE_PAYMENTS=1
```

### A.5 — Démarrer + premier compte
```bash
cd deploy/vps
docker compose up -d --build           # db + web + caddy ; Caddy obtient le certificat HTTPS
docker compose ps
docker compose exec web python manage.py createsuperuser
```
Ouvrir **`https://erp.mondomaine.com`**, se connecter (cadenas HTTPS présent).

### A.8 — Déclarer l'institution et **l'agence** (indispensable à la sync)
Dans l'interface du master :
1. **Super Admin → Institutions → Nouvelle institution** (crée l'agence Siège + l'admin).
2. **Administration → Agences → Nouvelle agence** : donner un **code** ; y rattacher ses
   **points de vente / gares** (`ServicePoint`).
3. **Noter l'UUID de cette agence** — c'est le futur `NODE_AGENCY_ID` du serveur local.
   (URL de la fiche agence, ou API `GET /api/v1/system/agencies/`.)

> Le master est en ligne et prêt à accueillir des agences. Passez à la Partie B.

---

## 6. PARTIE B — Déployer l'AGENCE hors-ligne (serveur local)

Pile **tout-en-un + workers de sync** : `db + web + caddy + sync_worker + reserve_worker`.
Cette pile est **fournie prête à l'emploi** dans `deploy/agency/` :
`docker-compose.web.yml`, `Caddyfile`, `.env.example`. (Listings ci-dessous pour référence ;
il suffit d'éditer le domaine et le `.env`.)

### B.1 — Préparer le serveur d'agence
```bash
sudo apt update && sudo apt -y upgrade
curl -fsSL https://get.docker.com | sh
sudo systemctl enable docker          # relance auto après coupure de courant
git clone <URL_DU_DEPOT> erp && cd erp
git checkout <même commit que le master>
```

### B.2 — Construire le frontend (API = ce serveur)
Dans `angular/src/environments/environment.prod.ts` :
```ts
apiUrl: 'https://agence1.mondomaine.com/api/v1',   // domaine public de l'agence
// … ou, en LAN sans domaine public :
// apiUrl: 'https://erp.agence1.lan/api/v1',
```
```bash
docker run --rm -v "$PWD/angular:/app" -w /app node:20-alpine \
  sh -c "npm ci && npx ng build --configuration production"
```

### B.3 — Compose de l'agence — **fourni** : `deploy/agency/docker-compose.web.yml`
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
      - agency_pgdata:/var/lib/postgresql/data

  web:                       # Django + Gunicorn (migrate auto au démarrage)
    build: ../../backend
    restart: unless-stopped
    env_file: .env
    volumes:
      - media:/app/media
    depends_on: [db]

  caddy:                     # reverse proxy + HTTPS (UI Angular + /api)
    image: caddy:2-alpine
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile:ro
      - ../../angular/dist/angular/browser:/srv/app:ro
      - media:/srv/media:ro
      - caddy_data:/data
      - caddy_config:/config
    depends_on: [web]

  sync_worker:               # pousse les ventes ↑ / tire la config ↓
    build: ../../backend
    restart: unless-stopped
    env_file: .env
    command: sh -c 'while true; do python manage.py sync_once || true; sleep ${SYNC_INTERVAL:-90}; done'
    depends_on: [db, web]

  reserve_worker:            # heartbeat + réservations en ligne relayées
    build: ../../backend
    restart: unless-stopped
    env_file: .env
    command: sh -c 'while true; do python manage.py reserve_worker || true; sleep ${RESERVE_INTERVAL:-20}; done'
    depends_on: [db, web]

volumes:
  agency_pgdata:
  media:
  caddy_data:
  caddy_config:
```

### B.4 — `Caddyfile` de l'agence — **fourni** : `deploy/agency/Caddyfile`

**Cas 1 — domaine public** (ports 80/443 ouverts, certificat Let's Encrypt) :
```caddyfile
{ email admin@mondomaine.com }
agence1.mondomaine.com {
    encode zstd gzip
    handle_path /media/* { root * /srv/media; file_server }
    @backend path /api/* /admin/* /static/*
    handle @backend { reverse_proxy web:8000 }
    handle { root * /srv/app; try_files {path} /index.html; file_server }
}
```

**Cas 2 — LAN sans domaine public** (HTTPS auto-signé, satisfait `SECURE_SSL_REDIRECT`) :
```caddyfile
erp.agence1.lan {
    tls internal                      # certificat local (Caddy fait office d'autorité)
    encode zstd gzip
    handle_path /media/* { root * /srv/media; file_server }
    @backend path /api/* /admin/* /static/*
    handle @backend { reverse_proxy web:8000 }
    handle { root * /srv/app; try_files {path} /index.html; file_server }
}
```
> En LAN : faites résoudre `erp.agence1.lan` vers l'IP du serveur (DNS du routeur, ou
> `/etc/hosts` des postes). Au premier accès, le navigateur affiche un avertissement de
> certificat (auto-signé) — l'accepter une fois, ou installer le CA local de Caddy.

### B.5 — `.env` de l'agence (rôle **agency**)
```dotenv
SECRET_KEY=<longue clé aléatoire propre à l'agence>
DJANGO_SETTINGS_MODULE=config.settings.production
DEBUG=0
ALLOWED_HOSTS=agence1.mondomaine.com          # ou erp.agence1.lan
CSRF_TRUSTED_ORIGINS=https://agence1.mondomaine.com   # ou https://erp.agence1.lan

POSTGRES_DB=erp_agency
POSTGRES_USER=erp_agency
POSTGRES_PASSWORD=<mot de passe fort>
DATABASE_URL=postgres://erp_agency:<mot de passe fort>@db:5432/erp_agency
LANGUAGE_CODE=fr-fr
TIME_ZONE=Africa/Abidjan

# ── Sync : ce nœud est une AGENCE (spoke) ──
SYNC_ENABLED=1
NODE_ROLE=agency
NODE_ID=<uuid unique de CETTE instance>
NODE_AGENCY_ID=<UUID de l'agence noté en §A.8, existe sur le master>
SYNC_MASTER_URL=https://erp.mondomaine.com/api/v1     # le master
SYNC_TOKEN=<LE MÊME jeton que le master>
SYNC_INTERVAL=90
RESERVE_INTERVAL=20

FAKE_PAYMENTS=1
```

### B.6 — Démarrer la pile
```bash
cd deploy/agency          # là où sont votre docker-compose.web.yml, Caddyfile et .env
docker compose -f docker-compose.web.yml up -d --build
docker compose -f docker-compose.web.yml ps     # db, web, caddy, sync_worker, reserve_worker
```

### B.7 — Amorcer depuis le master (une seule fois)
```bash
docker compose -f docker-compose.web.yml run --rm web python manage.py bootstrap_from_master
```
Tire un instantané complet de la config du master (institutions, agences, utilisateurs,
RBAC, réseau, tarifs) **dans l'ordre des dépendances**. L'agence est opérationnelle
immédiatement ; les départs/sièges se créent ensuite localement.

Accéder à **`https://agence1.mondomaine.com`** (ou `https://erp.agence1.lan`) et se
connecter avec un utilisateur descendu du master. *(Besoin d'un admin local garanti :
`… run --rm web python manage.py createsuperuser`.)*

---

## 7. PARTIE C — Vérifier la synchronisation

1. **Côté master**, en admin : `GET https://erp.mondomaine.com/api/v1/sync/status/` →
   l'agence apparaît **en ligne** avec un `last_seen` récent (mis à jour par
   `reserve_worker`).
2. **Descente (config)** : modifiez un **tarif** sur le master → après un cycle
   `sync_once` (≤ 90 s), il apparaît en agence (lecture seule).
3. **Remontée (ventes)** : créez une **réservation** en agence → après un cycle
   `sync_once`, elle est visible sur le master.
4. **Logs** en cas de doute :
   `docker compose -f docker-compose.web.yml logs -f sync_worker reserve_worker`.

---

## 8. PARTIE D — Exploitation

### Mises à jour (dans l'ordre)
Master et agences doivent tourner **le même code / les mêmes migrations** (un écart de
schéma renvoie **HTTP 409** et bloque la sync).
```
1. Mettre à jour et migrer le MASTER d'abord (git pull → docker compose up -d --build).
2. Puis chaque AGENCE (même commit → up -d --build ; le web migre au démarrage).
```

### Sauvegardes
Chaque base se sauvegarde **indépendamment** (le master reste la source consolidée) :
```bash
# Agence — sauvegarde quotidienne (cron)
docker compose -f docker-compose.web.yml exec -T db \
  pg_dump -U erp_agency erp_agency | gzip > /var/backups/erp_agency_$(date +%F).sql.gz
```
Restauration : `gunzip -c fichier.sql.gz | docker compose … exec -T db psql -U erp_agency erp_agency`.

### Résilience (coupure de courant)
Tous les services sont en `restart: unless-stopped` ; avec `systemctl enable docker`, la
pile **repart automatiquement** au retour du courant. Recommandé : un **onduleur (UPS)**
sur le serveur d'agence + le routeur, pour un arrêt/reprise propre.

---

## 9. Dépannage sync

| Symptôme | Cause probable | Action |
|---|---|---|
| **HTTP 409** au `sync_once` | schéma master ≠ agence | Migrer le **master** d'abord, puis l'agence (même commit). |
| Agence jamais « en ligne » | `SYNC_TOKEN`/`SYNC_MASTER_URL` faux, ou master injoignable | Vérifier le jeton **identique**, l'URL `…/api/v1`, le réseau. `logs -f reserve_worker`. |
| `bootstrap_from_master` vide | `NODE_AGENCY_ID` absent du master | Créer l'agence (avec code) sur le master (§A.8), reprendre. |
| Boucle de redirection HTTPS | app servie en **HTTP** pur | Passer par Caddy en TLS (domaine public **ou** `tls internal`). |
| Rien ne remonte du guichet | worker arrêté / hors-ligne prolongé | `logs -f sync_worker` ; la remontée reprend au retour du lien. |

---

## 10. Référence des variables de synchronisation

| Variable | Master | Agence | Rôle |
|---|:---:|:---:|---|
| `SYNC_ENABLED` | `1` | `1` | Active la synchronisation. |
| `NODE_ROLE` | `master` | `agency` | Rôle du nœud. |
| `SYNC_TOKEN` | ✅ | ✅ (identique) | Jeton partagé d'authentification master↔agence. |
| `NODE_ID` | — | ✅ (uuid unique) | Identifiant unique de l'instance agence. |
| `NODE_AGENCY_ID` | — | ✅ | UUID de l'agence servie (doit exister sur le master). |
| `SYNC_MASTER_URL` | — | ✅ | URL du master, suffixée `/api/v1`. |
| `SYNC_INTERVAL` | — | `90` | Cadence `sync_once` (s). |
| `RESERVE_INTERVAL` | — | `20` | Cadence `reserve_worker` (s) / heartbeat. |

Détails complets des autres variables (Django, Postgres, e-mail, S3…) :
[`README.md`](README.md) §8 et [`backend/.env.example`](backend/.env.example).

---

© Brainstore Group — ERP Transport & Voyages · Déploiement online + offline synchronisé.

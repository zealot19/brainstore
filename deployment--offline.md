# Tester la synchronisation en local (sans VPS)

Comment faire tourner **le master et une agence en même temps** pour tester la
synchronisation **sans payer de VPS**. Aucune des deux piles n'a besoin d'une
machine dédiée : ce sont des projets Docker Compose indépendants qui peuvent
cohabiter sur un seul hôte.

> Pour le déploiement réel (master en ligne + agences), voir **`deployment.readme`**.
> Ce fichier-ci ne concerne **que** les tests locaux.

---

## Ce qui rend l'HTTP local possible

Les réglages de prod ont `SECURE_SSL_REDIRECT = True` **et**
`SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")`. Le nginx interne
ajoute `X-Forwarded-Proto: https` en proxifiant `/api`. Donc, tant que l'agence
appelle le **nginx du master (port 8080)** — et **jamais** le backend `:8000` en
direct — l'HTTP fonctionne sans boucle de redirection.

Deux règles suffisent pour cohabiter :
1. Des **`WEB_PORT` différents** (master 8080, agence 8081). Compose isole
   containers, réseaux et volumes par nom de dossier ; les bases Postgres ne
   publient pas de port → aucun conflit.
2. `SYNC_MASTER_URL` = **`http://<hôte>:8080/api/v1`** (le nginx du master).

---

## Build depuis le code local (sans token GitHub)

Les fichiers `docker-compose.yml` par défaut **clonent le code depuis GitHub** au
build → il faut un token pour un dépôt privé (`REPO_URL=https://<TOKEN>@github.com/...`).

Si le dépôt est **déjà cloné sur la machine**, utilisez plutôt les variantes
`*.local` fournies dans chaque dossier — elles construisent l'image **depuis le code
présent sur le disque**, sans token ni accès réseau au dépôt :

| Fichier | Rôle |
|---|---|
| `docker-compose.local.yml` | contexte de build = racine du dépôt (voit `backend/` + `angular/`) |
| `Dockerfile.backend.local` / `Dockerfile.frontend.local` | `COPY` le code local au lieu de `git clone` |
| `.dockerignore` (racine) | exclut `env/`, `node_modules/`, `.git/`… du contexte |

**Il suffit d'ajouter `-f docker-compose.local.yml`** à toutes les commandes
`docker compose` ci-dessous (lancées **depuis** `online-master/` ou `agency/`). Ex. :
```bash
docker compose -f docker-compose.local.yml up -d --build
docker compose -f docker-compose.local.yml exec backend python manage.py createsuperuser
```
Le `.env` reste identique — supprimez simplement le besoin de `REPO_URL`/token.
Prérequis : avoir cloné le dépôt sur la machine (`git clone …`), donc `backend/` et
`angular/` présents à côté des dossiers `online-master/` et `agency/`.

> Pour un **vrai** déploiement portable (copier un seul dossier sur un serveur),
> gardez les `docker-compose.yml` d'origine (build depuis GitHub).

---

## Méthode recommandée : une seule VM (les deux piles)

VM **Linux** avec Docker déjà installé. Le vieux Mac ne sert qu'à ouvrir le
navigateur / SSH.

### 0. Récupérer le code + l'IP de la VM
```bash
git clone https://github.com/zealot19/brainstore.git
cd brainstore                      # contient online-master/ et agency/
hostname -I | awk '{print $1}'     # noter l'IP, ex. 192.168.1.50
```

### 1. Master (port 8080)
```bash
cd online-master
cp .env.example .env
```
`.env` :
```env
WEB_PORT=8080
SECRET_KEY=<aléatoire>
POSTGRES_PASSWORD=devpass
DATABASE_URL=postgres://erp:devpass@db:5432/erp
ALLOWED_HOSTS=*
SYNC_TOKEN=shared-dev-token-123
```
```bash
docker compose up -d --build
docker compose exec backend python manage.py createsuperuser
```
Ouvrir `http://<IP_VM>:8080`, créer une **institution** + une **agence** (avec un
**code**), puis **copier l'UUID de l'agence**.

### 2. Agence (port 8081, même VM)
```bash
cd ../agency
cp .env.example .env
```
`.env` — la ligne clé est `SYNC_MASTER_URL` qui pointe sur l'**IP de la VM, port 8080** :
```env
WEB_PORT=8081
SECRET_KEY=<aléatoire>
POSTGRES_PASSWORD=devpass
DATABASE_URL=postgres://erp_agency:devpass@db:5432/erp_agency
ALLOWED_HOSTS=*
NODE_ID=<uuidgen>                                  # python3 -c "import uuid;print(uuid.uuid4())"
NODE_AGENCY_ID=<UUID de l'agence sur le master>
SYNC_MASTER_URL=http://192.168.1.50:8080/api/v1    # <-- IP de la VM, port 8080, /api/v1
SYNC_TOKEN=shared-dev-token-123                     # identique au master
```
```bash
docker compose up -d --build
docker compose exec backend python manage.py bootstrap_from_master
```
Ouvrir `http://<IP_VM>:8081`.

### 3. Vérifier la synchronisation
- Master (connecté en admin) : `GET http://<IP_VM>:8080/api/v1/sync/status/` doit
  montrer l'agence **en ligne**.
- Suivre le worker (depuis `agency/`) : `docker compose logs -f sync_worker`.

### Variante sans IP en dur
Ajouter aux services `sync_worker`, `reserve_worker` et `backend` de
`agency/docker-compose.yml` :
```yaml
    extra_hosts:
      - "host.docker.internal:host-gateway"
```
puis `SYNC_MASTER_URL=http://host.docker.internal:8080/api/v1`.
(`host-gateway` est la façon officielle Docker d'atteindre l'hôte depuis un
container sous Linux.)

---

## Autres variantes

### Même machine (Mac / PC de dev)
Identique à la VM unique, sauf que sous **Docker Desktop (Mac/Windows)**
`host.docker.internal` est disponible d'office :
```env
SYNC_MASTER_URL=http://host.docker.internal:8080/api/v1
```

### Deux VMs (plus proche du réel)
`online-master/` sur VM‑A, `agency/` sur VM‑B. Tout est identique, l'agence pointe
sur l'IP de VM‑A :
```env
SYNC_MASTER_URL=http://<IP_VM_A>:8080/api/v1
```

---

## Simuler le hors-ligne
```bash
cd online-master && docker compose stop        # le master tombe
# … faire une vente dans l'agence sur :8081 (elle continue de fonctionner) …
docker compose start                            # le master revient
```
La vente remonte au prochain cycle `sync_once` (~90 s).

---

## Pièges fréquents
- **Même `SYNC_TOKEN`** des deux côtés.
- Pointer sur **`/api/v1` en port 8080** (nginx), **jamais `:8000`**.
- Créer l'agence sur le master **avant** de remplir `NODE_AGENCY_ID`.
- Le build a besoin d'Internet (les images font `git clone` + `npm`/`pip`).
  ~8 containers au total → une VM avec **2 Go+ de RAM** est confortable.

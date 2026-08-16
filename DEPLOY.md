# Déploiement — Backend (Render) + Frontend (Vercel)

Monorepo : **Render** déploie `backend/` (Django), **Vercel** déploie `angular/`.

## Vue d'ensemble de l'ordre (interdépendance des URLs)

Le frontend a besoin de l'URL du backend, et le backend (CORS) a besoin du domaine
du frontend. On déploie donc en **4 temps** :

1. **Backend d'abord** → on obtient `https://<backend>.onrender.com`.
2. **Renseigner l'URL backend** dans `angular/src/environments/environment.prod.ts` (`apiUrl`).
3. **Frontend** sur Vercel → on obtient `https://<front>.vercel.app`.
4. **Renseigner le domaine Vercel** côté Render : `CORS_ALLOWED_ORIGINS` + `CSRF_TRUSTED_ORIGINS`, puis redéployer.

---

## 1. Backend — Render

Deux options : le **Blueprint** (`render.yaml`, recommandé) ou un service manuel.

### Via Blueprint
1. Sur Render : **New → Blueprint**, pointer sur le repo → il lit `render.yaml`
   (service web `erp-backend` + base `erp-db`).
2. Render crée la base Postgres et injecte `DATABASE_URL` automatiquement.
3. Le build lance : `pip install -r requirements/production.txt` → `collectstatic` → `migrate`.
4. Démarrage : `gunicorn config.wsgi:application`.

### Variables d'environnement (Render)
| Variable | Valeur |
|---|---|
| `DJANGO_SETTINGS_MODULE` | `config.settings.production` |
| `SECRET_KEY` | généré par Render |
| `DATABASE_URL` | injecté depuis la base `erp-db` |
| `PYTHON_VERSION` | `3.12.7` (⚠️ pas 3.14) |
| `CORS_ALLOWED_ORIGINS` | `https://<front>.vercel.app` *(après l'étape 3)* |
| `CSRF_TRUSTED_ORIGINS` | `https://<front>.vercel.app` *(après l'étape 3)* |
| `ALLOWED_HOSTS` | *(optionnel)* le hostname Render est ajouté auto ; ajouter un domaine custom si besoin |
| `EMAIL_HOST`, `EMAIL_HOST_USER`, … | *(optionnel)* sinon les mails vont dans les logs |

### Après le premier déploiement
Créer le super-admin (Render → Shell) :
```
python manage.py createsuperuser
```
Puis créer une institution via l'UI super-admin (le bootstrap sème plan comptable,
journaux, mapping trésorerie, types d'équipage…).

---

## 2. Frontend — Vercel

1. **New Project** → importer le repo.
2. **Root Directory** : `angular`.
3. Vercel lit `angular/vercel.json` : build `npm run build`, sortie `dist/angular/browser`,
   rewrites SPA vers `/index.html`.
4. **Avant le build**, s'assurer que `apiUrl` (dans `environment.prod.ts`) pointe sur l'URL
   Render (étape 2 de l'ordre global). Le build prod substitue `environment.ts` →
   `environment.prod.ts` via `fileReplacements` (angular.json).

> Note : l'`apiUrl` est figée **au build** (Angular). Pour la changer, éditer
> `environment.prod.ts` et redéployer.

---

## 3. Points d'attention

- **Python 3.14 en local** : Render est pinné à **3.12.7** (`PYTHON_VERSION`). Vérifier
  que la suite passe sur 3.12 avant de trop s'engager.
- **TLS derrière proxy** : `SECURE_PROXY_SSL_HEADER` est réglé pour Render/Vercel (évite la
  boucle de redirection HTTPS).
- **Statiques** : servis par **WhiteNoise** (pas besoin de S3 pour démarrer). `collectstatic`
  tourne au build ; `backend/static/` existe (corrige le warning W004).
- **`angular/dist/`** : n'est plus versionné (rebuild au déploiement).
- **Base Postgres 'free'** : expire après 90 jours — passer à un plan payant pour la prod.
- **Médias uploadés** (`MEDIA_ROOT`) : le disque Render est éphémère → pour des fichiers
  persistants (logos, docs), configurer un stockage objet (S3/`django-storages`, déjà en deps).

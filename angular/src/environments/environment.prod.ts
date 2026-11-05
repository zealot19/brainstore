// Build de production. `fileReplacements` (angular.json) remplace environment.ts
// par ce fichier lors de `ng build`.
// apiUrl RELATIF (/api/v1) : le frontend et l'API sont servis par le MÊME serveur
// (NGINX sert l'app Angular ET proxifie /api, /admin, /static vers le backend).
// Marche sur IP ou domaine, en http ou https, sans rien coder en dur.
// ⚠️ Si un jour le frontend est servi depuis une AUTRE origine que l'API (ex. front
//    Vercel + backend Railway), remettre l'URL ABSOLUE du backend suffixée par /api/v1
//    (ex. 'https://brainstore-test.up.railway.app/api/v1').
export const environment = {
  production: true,
  apiUrl: '/api/v1',
  // Institution servie par la PWA de réservation en ligne (définir au déploiement).
  onlineCompanyId: '00000000-0000-0000-0000-000000000000',
};


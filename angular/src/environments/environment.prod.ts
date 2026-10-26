// Build de production (Vercel). `fileReplacements` (angular.json) remplace
// environment.ts par ce fichier lors de `ng build`.
// ⚠️ Remplacer apiUrl par l'URL du backend Railway, suffixée par /api/v1.
export const environment = {
  production: true,
  apiUrl: 'https://brainstore-test.up.railway.app/api/v1',
  // Institution servie par la PWA de réservation en ligne (définir au déploiement).
  onlineCompanyId: '00000000-0000-0000-0000-000000000000',
};


// Build de production (Vercel). `fileReplacements` (angular.json) remplace
// environment.ts par ce fichier lors de `ng build`.
// ⚠️ Remplacer apiUrl par l'URL du backend Railway, suffixée par /api/v1.
export const environment = {
  production: true,
  apiUrl: 'https://brainstore-production.up.railway.app/api/v1',
};

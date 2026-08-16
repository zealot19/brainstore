// Build de production (Vercel). `fileReplacements` (angular.json) remplace
// environment.ts par ce fichier lors de `ng build`.
// ⚠️ Remplacer apiUrl par l'URL du backend Render, suffixée par /api/v1.
export const environment = {
  production: true,
  apiUrl: 'https://erp-backend.onrender.com/api/v1',
};

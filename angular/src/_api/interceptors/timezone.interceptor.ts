import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Joint le fuseau horaire de l'OS/navigateur à chaque requête (en-tête
 * X-Timezone). Le serveur l'active pour rendre les heures (bordereaux, reçus,
 * rapports) à l'heure locale du poste, sans dépendre du fuseau enregistré.
 */
export const timezoneInterceptor: HttpInterceptorFn = (req, next) => {
  let tz = '';
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch { tz = ''; }
  return tz ? next(req.clone({ setHeaders: { 'X-Timezone': tz } })) : next(req);
};

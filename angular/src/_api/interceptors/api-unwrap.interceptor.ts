import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { API_BASE } from '../config/api.config';

/**
 * Désemballe l'enveloppe { success, data } retournée par le backend Django.
 * Normalise aussi les erreurs en { detail: "..." } pour uniformiser les composants.
 */
export const apiUnwrapInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.startsWith(API_BASE)) return next(req);

  return next(req).pipe(
    map(event => {
      if (
        event instanceof HttpResponse &&
        event.body !== null &&
        typeof event.body === 'object' &&
        'success' in event.body &&
        'data' in event.body
      ) {
        return event.clone({ body: (event.body as { success: boolean; data: unknown }).data });
      }
      return event;
    }),
    catchError((err: HttpErrorResponse) => {
      const errBody = err?.error?.error;
      if (errBody) {
        let detail: string = errBody.message ?? 'Une erreur est survenue.';
        // Erreurs de validation DRF : détails par champ
        if (errBody.details && typeof errBody.details === 'object' && !Array.isArray(errBody.details)) {
          const fieldMsgs = Object.entries(errBody.details as Record<string, unknown>)
            .map(([field, msgs]) => {
              const txt = Array.isArray(msgs) ? (msgs as string[]).join(', ') : String(msgs);
              return `${field} : ${txt}`;
            })
            .join(' | ');
          if (fieldMsgs) detail = fieldMsgs;
        }
        return throwError(() => new HttpErrorResponse({
          error: { detail },
          status: err.status,
          statusText: err.statusText,
          url: err.url ?? undefined,
          headers: err.headers,
        }));
      }
      // Pas d'enveloppe { success, error } : erreur réseau / serveur / passerelle.
      // On synthétise un message clair et actionnable selon le statut HTTP.
      return throwError(() => new HttpErrorResponse({
        error: { detail: statusMessage(err) },
        status: err.status,
        statusText: err.statusText,
        url: err.url ?? undefined,
        headers: err.headers,
      }));
    })
  );
};

/** Message clair et compréhensible quand le serveur ne fournit pas de message. */
function statusMessage(err: HttpErrorResponse): string {
  const s = err.status;
  if (s === 0) return "Serveur injoignable. Vérifiez votre connexion internet, puis réessayez.";
  if (s === 400) return "La demande n'a pas pu être traitée : vérifiez les informations saisies.";
  if (s === 401) return "Votre session a expiré. Veuillez vous reconnecter.";
  if (s === 403) return "Accès refusé : vous n'avez pas la permission d'effectuer cette action.";
  if (s === 404) return "Élément introuvable : il a peut-être été supprimé ou déplacé.";
  if (s === 409) return "Conflit : cette opération entre en conflit avec l'état actuel des données.";
  if (s === 413) return "Fichier trop volumineux : réduisez sa taille et réessayez.";
  if (s === 422) return "Données invalides : corrigez les champs signalés et réessayez.";
  if (s === 429) return "Trop de requêtes : patientez un instant avant de réessayer.";
  if (s >= 500) return "Erreur inattendue du serveur. Réessayez ; si le problème persiste, contactez un administrateur.";
  return "L'opération a échoué. Réessayez ; si le problème persiste, contactez un administrateur.";
}

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
      return throwError(() => err);
    })
  );
};

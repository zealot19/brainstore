import {
  HttpInterceptorFn,
  HttpErrorResponse,
  HttpBackend,
  HttpClient,
  HttpRequest,
  HttpHandlerFn,
  HttpEvent,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  BehaviorSubject, catchError, filter, map, Observable,
  switchMap, take, throwError,
} from 'rxjs';
import { TokenService } from '../services/auth/token.service';
import { AUTH } from '../config/api.config';
import { TokenPair } from '../models/auth.models';

// État partagé du refresh (module-level = singleton dans une SPA)
let isRefreshing  = false;
const refreshDone$ = new BehaviorSubject<string | null>(null);

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const router       = inject(Router);
  // HttpClient construit sur HttpBackend pour contourner les interceptors
  // → évite la dépendance circulaire errorInterceptor ↔ HttpClient ↔ interceptors
  const http         = new HttpClient(inject(HttpBackend));

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401 && !req.url.includes(AUTH.refresh)) {
        return handle401(req, next, http, tokenService, router);
      }
      return throwError(() => err);
    })
  ) as Observable<HttpEvent<unknown>>;
};

function handle401(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
  http: HttpClient,
  tokenService: TokenService,
  router: Router,
): Observable<HttpEvent<unknown>> {

  if (!isRefreshing) {
    isRefreshing = true;
    refreshDone$.next(null);

    const refresh = tokenService.getRefreshToken();

    if (!refresh) {
      isRefreshing = false;
      redirectToLock(tokenService, router);
      return throwError(() => new Error('No refresh token')) as Observable<HttpEvent<unknown>>;
    }

    return http.post<{ success: boolean; data: TokenPair }>(AUTH.refresh, { refresh }).pipe(
      map(res => res.data),
      switchMap(tokens => {
        isRefreshing = false;
        tokenService.saveTokens(tokens.access, tokens.refresh ?? refresh);
        refreshDone$.next(tokens.access);
        return next(withBearer(req, tokens.access));
      }),
      catchError(err => {
        isRefreshing = false;
        refreshDone$.next(null);
        redirectToLock(tokenService, router);
        return throwError(() => err);
      })
    ) as Observable<HttpEvent<unknown>>;
  }

  // D'autres requêtes attendent que le refresh soit terminé
  return refreshDone$.pipe(
    filter((token): token is string => token !== null),
    take(1),
    switchMap(token => next(withBearer(req, token)))
  );
}

function withBearer(req: HttpRequest<unknown>, token: string): HttpRequest<unknown> {
  return req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) });
}

function redirectToLock(tokenService: TokenService, router: Router): void {
  const user = tokenService.getUser();

  if (user) {
    // Profil encore en cache → lock screen (session expirée, pas déconnexion)
    tokenService.saveLockReturnUrl(router.url);
    localStorage.removeItem('drp_access');
    localStorage.removeItem('drp_refresh');
    router.navigate(['/lock-screen']);
  } else {
    // Aucun profil → déconnexion complète
    tokenService.clearTokens();
    router.navigate(['/signin']);
  }
}

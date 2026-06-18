import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/auth/token.service';

/** Bloque l'accès aux routes protégées si l'utilisateur n'est pas connecté */
export const authGuard: CanActivateFn = (_route, state) => {
  const tokenService = inject(TokenService);
  const router       = inject(Router);

  if (tokenService.isAuthenticated()) return true;

  // Profil en cache mais tokens absents → session expirée → lock screen
  if (tokenService.getUser()) {
    tokenService.saveLockReturnUrl(state.url);
    return router.createUrlTree(['/lock-screen']);
  }

  // Aucun profil → déconnexion complète
  return router.createUrlTree(['/signin'], {
    queryParams: { returnUrl: state.url },
  });
};

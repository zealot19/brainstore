import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../services/auth/token.service';
import { API_BASE, PUBLIC_URLS } from '../config/api.config';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);

  const isApiUrl    = req.url.startsWith(API_BASE);
  const isPublicUrl = PUBLIC_URLS.some(url => req.url.startsWith(url));

  if (!isApiUrl || isPublicUrl) {
    return next(req);
  }

  const token = tokenService.getAccessToken();
  if (!token) return next(req);

  return next(req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  }));
};

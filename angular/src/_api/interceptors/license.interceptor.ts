import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { LicenseService } from '../services/system/license.service';

export const licenseInterceptor: HttpInterceptorFn = (req, next) => {
  const lic = inject(LicenseService);
  return next(req).pipe(catchError((err) => {
    if (err?.status === 403 && err?.error?.error?.code === 'LICENSE_EXPIRED') {
      lic.lock(err.error.error.message);
    }
    return throwError(() => err);
  }));
};

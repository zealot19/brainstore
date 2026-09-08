import {
  ApplicationConfig, importProvidersFrom,
  provideZoneChangeDetection, APP_INITIALIZER, inject, isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxMaskModule } from 'ngx-mask';

import { provideTransloco } from '@jsverse/transloco';

import { routes } from './app.routes';
import { jwtInterceptor }      from '../_api/interceptors/jwt.interceptor';
import { errorInterceptor }    from '../_api/interceptors/error.interceptor';
import { apiUnwrapInterceptor } from '../_api/interceptors/api-unwrap.interceptor';
import { AuthService }          from '../_api/services/auth/auth.service';
import { TranslocoHttpLoader } from './core/i18n/transloco-loader';
import { TRANSLOCO_APP_CONFIG } from './core/i18n/transloco.config';
import { LanguageService } from './core/i18n/language.service';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideZoneChangeDetection(),
    importProvidersFrom(BsDatepickerModule),
    provideAnimations(),
    provideHttpClient(withInterceptors([jwtInterceptor, errorInterceptor, apiUnwrapInterceptor])),
    provideTransloco({
      config: TRANSLOCO_APP_CONFIG,
      loader: TranslocoHttpLoader,
    }),
    NgxMaskModule.forRoot({ showMaskTyped: false }).providers!,
    // Rafraîchit silencieusement le profil utilisateur au démarrage
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        const auth = inject(AuthService);
        const lang = inject(LanguageService);
        return () => { auth.initSession(); lang.init(); };
      },
      multi: true,
    },
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};

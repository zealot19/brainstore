import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptors, HttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideTransloco, TranslocoService, Translation } from '@jsverse/transloco';
import { acceptLanguageInterceptor } from './accept-language.interceptor';
import { TRANSLOCO_APP_CONFIG } from '../../app/core/i18n/transloco.config';

class FakeLoader { getTranslation() { return Promise.resolve({} as Translation); } }

describe('acceptLanguageInterceptor', () => {
  let http: HttpClient;
  let ctrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([acceptLanguageInterceptor])),
        provideHttpClientTesting(),
        provideTransloco({ config: TRANSLOCO_APP_CONFIG, loader: FakeLoader }),
      ],
    });
    http = TestBed.inject(HttpClient);
    ctrl = TestBed.inject(HttpTestingController);
  });

  afterEach(() => ctrl.verify());

  it('adds the active language as Accept-Language', () => {
    TestBed.inject(TranslocoService).setActiveLang('es');
    http.get('/api/v1/anything').subscribe();
    const req = ctrl.expectOne('/api/v1/anything');
    expect(req.request.headers.get('Accept-Language')).toBe('es');
    req.flush({});
  });
});

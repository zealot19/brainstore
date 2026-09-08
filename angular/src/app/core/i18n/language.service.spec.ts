import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideTransloco, TranslocoService, Translation } from '@jsverse/transloco';
import { BehaviorSubject } from 'rxjs';
import { LanguageService, STORAGE_KEY } from './language.service';
import { TRANSLOCO_APP_CONFIG } from './transloco.config';
import { AuthService } from '../../../_api/services/auth/auth.service';
import { AUTH } from '../../../_api/config/api.config';

class FakeLoader { getTranslation() { return Promise.resolve({} as Translation); } }

describe('LanguageService', () => {
  let service: LanguageService;
  let http: HttpTestingController;
  let transloco: TranslocoService;
  let currentUser$: BehaviorSubject<any>;

  beforeEach(() => {
    localStorage.removeItem(STORAGE_KEY);
    currentUser$ = new BehaviorSubject<any>(null);
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideTransloco({ config: TRANSLOCO_APP_CONFIG, loader: FakeLoader }),
        { provide: AuthService, useValue: { currentUser$ } },
      ],
    });
    service = TestBed.inject(LanguageService);
    http = TestBed.inject(HttpTestingController);
    transloco = TestBed.inject(TranslocoService);
  });

  afterEach(() => http.verify());

  it('setLanguage sets active lang, persists locally, and PATCHes the profile', () => {
    service.setLanguage('en');
    expect(transloco.getActiveLang()).toBe('en');
    expect(localStorage.getItem(STORAGE_KEY)).toBe('en');
    const req = http.expectOne(AUTH.me);
    expect(req.request.method).toBe('PATCH');
    expect(req.request.body).toEqual({ language_code: 'en' });
    req.flush({});
  });

  it('init uses localStorage when present', () => {
    localStorage.setItem(STORAGE_KEY, 'es');
    service.init();
    expect(transloco.getActiveLang()).toBe('es');
  });

  it('init adopts profile language when no local choice', () => {
    service.init();
    currentUser$.next({ language_code: 'pt' });
    expect(transloco.getActiveLang()).toBe('pt');
  });

  it('init falls back to fr for unknown codes', () => {
    service.init();
    currentUser$.next({ language_code: 'de' });
    expect(transloco.getActiveLang()).toBe('fr');
  });
});

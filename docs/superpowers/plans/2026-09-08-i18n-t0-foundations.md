# i18n T0 — Foundations + shared scope — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stand up the runtime i18n backbone (Transloco) so the whole Angular app chrome switches language live between fr/en/es/pt, persisted to the user profile, with backend `LANGUAGES` extended and the extraction/translation/parity tooling every later tranche reuses.

**Architecture:** Transloco runtime i18n on the Angular side (JSON per language served from `public/i18n/`, root file for the always-loaded `shared` chrome namespace, feature scopes deferred to later tranches). A `LanguageService` drives active language + persistence (localStorage + `PATCH /auth/me/`); an `Accept-Language` HTTP interceptor makes the existing Django `LocaleMiddleware` return localized responses. Node scripts extract hardcoded strings, machine-draft es/pt, and check key parity in CI.

**Tech Stack:** Angular 21 (standalone), `@jsverse/transloco`, Karma/Jasmine; Django 5 / DRF, gettext, pytest; Node (ESM scripts); GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-09-08-cemac-multilingual-i18n-design.md`

## Global Constraints

- Languages tranche 1: `fr`, `en`, `es`, `pt` (all LTR). `ar` stays declared-but-commented; never shown in the switcher.
- **French is the source language** (`defaultLang` and `fallbackLang` = `fr`). A missing key in any language falls back to `fr`.
- Content policy: `fr` + `en` are hand-authored; `es` + `pt` are machine-drafted via the translate script. Never leave a key absent from a language file — draft it.
- Angular assets are served from `angular/public/` → all translation JSON lives under `angular/public/i18n/`, loaded from URL path `/i18n/...`.
- Key naming: `<scope>.<zone>.<slug>` (e.g. `shared.actions.save`). The T0 chrome uses the `shared.*` namespace in the **root** translation file (always loaded). Feature tranches (T2+) introduce per-feature `provideTranslocoScope('<feature>')`; do NOT create feature scopes in T0.
- HTTP interceptors are functional (`HttpInterceptorFn`) and registered in `app.config.ts` `withInterceptors([...])`.
- Frontend commands run from `angular/`; backend commands from `backend/` with the venv active (`source ../env/bin/activate`), tests via `pytest`.
- Do not touch `/Users/zealot/Desktop/brainstore/new_erp/passwords.md`.

---

### Task 1: Backend — add `es` and `pt` to `LANGUAGES`

**Files:**
- Modify: `backend/config/settings/base.py:174-178` (the `LANGUAGES` list)
- Test: `backend/apps/core/tests/test_i18n_settings.py` (create)

**Interfaces:**
- Consumes: nothing.
- Produces: `settings.LANGUAGES` containing the four codes `fr, en, es, pt`. The `Accept-Language` interceptor (Task 4) and later message tranches rely on these being registered so `LocaleMiddleware` will honor them.

- [ ] **Step 1: Write the failing test**

Create `backend/apps/core/tests/test_i18n_settings.py`:

```python
from django.conf import settings


def test_cemac_ltr_languages_registered():
    codes = {code for code, _label in settings.LANGUAGES}
    assert {"fr", "en", "es", "pt"} <= codes


def test_arabic_not_active_in_tranche_1():
    codes = {code for code, _label in settings.LANGUAGES}
    assert "ar" not in codes
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd backend && source ../env/bin/activate && pytest apps/core/tests/test_i18n_settings.py -v`
Expected: `test_cemac_ltr_languages_registered` FAILS (es/pt absent); `test_arabic_not_active_in_tranche_1` currently FAILS too (ar is present in the list today).

- [ ] **Step 3: Edit the setting**

In `backend/config/settings/base.py`, replace the existing `LANGUAGES` block:

```python
LANGUAGES = [
    ("fr", _("Français")),
    ("en", _("English")),
    ("es", _("Español")),
    ("pt", _("Português")),
    # ("ar", _("العربية")),  # RTL — préparé, activé dans une tranche dédiée ultérieure
]
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd backend && source ../env/bin/activate && pytest apps/core/tests/test_i18n_settings.py -v`
Expected: PASS (both tests).

- [ ] **Step 5: Commit**

```bash
git add backend/config/settings/base.py backend/apps/core/tests/test_i18n_settings.py
git commit -m "feat(i18n): register es/pt languages, defer ar (RTL)"
```

---

### Task 2: Install Transloco + provider, loader, and root translation files

**Files:**
- Modify: `angular/package.json` (dependency added by `npm install`)
- Create: `angular/src/app/core/i18n/transloco-loader.ts`
- Create: `angular/src/app/core/i18n/transloco.config.ts`
- Modify: `angular/src/app/app.config.ts`
- Create: `angular/public/i18n/fr.json`, `angular/public/i18n/en.json`, `angular/public/i18n/es.json`, `angular/public/i18n/pt.json`
- Test: `angular/src/app/core/i18n/transloco.setup.spec.ts`

**Interfaces:**
- Consumes: nothing.
- Produces:
  - `TranslocoHttpLoader` (implements `TranslocoLoader`) loading `/i18n/${lang}.json`.
  - `TRANSLOCO_APP_CONFIG` exported from `transloco.config.ts`: `{ availableLangs: ['fr','en','es','pt'], defaultLang: 'fr', fallbackLang: 'fr', reRenderOnLangChange: true, prodMode: <!isDevMode> , missingHandler: { useFallbackTranslation: true } }`.
  - Root translation files with a `shared` namespace object. Consumed by every later task and tranche.

- [ ] **Step 1: Install the package**

Run: `cd angular && npm install @jsverse/transloco`
Expected: `@jsverse/transloco` appears in `package.json` dependencies; `package-lock.json` updated.

- [ ] **Step 2: Create the initial root translation files**

`angular/public/i18n/fr.json`:

```json
{
  "shared": {
    "actions": {
      "save": "Enregistrer",
      "cancel": "Annuler",
      "delete": "Supprimer",
      "edit": "Modifier",
      "add": "Ajouter",
      "search": "Rechercher",
      "close": "Fermer",
      "confirm": "Confirmer",
      "back": "Retour",
      "export": "Exporter",
      "print": "Imprimer"
    },
    "validation": {
      "required": "Ce champ est obligatoire.",
      "email": "Adresse e-mail invalide.",
      "min_length": "Trop court.",
      "max_length": "Trop long."
    },
    "common": {
      "yes": "Oui",
      "no": "Non",
      "loading": "Chargement…",
      "no_data": "Aucune donnée",
      "all": "Tous"
    },
    "language": {
      "label": "Langue",
      "fr": "Français",
      "en": "English",
      "es": "Español",
      "pt": "Português"
    }
  }
}
```

`angular/public/i18n/en.json` (hand-authored English):

```json
{
  "shared": {
    "actions": {
      "save": "Save",
      "cancel": "Cancel",
      "delete": "Delete",
      "edit": "Edit",
      "add": "Add",
      "search": "Search",
      "close": "Close",
      "confirm": "Confirm",
      "back": "Back",
      "export": "Export",
      "print": "Print"
    },
    "validation": {
      "required": "This field is required.",
      "email": "Invalid email address.",
      "min_length": "Too short.",
      "max_length": "Too long."
    },
    "common": {
      "yes": "Yes",
      "no": "No",
      "loading": "Loading…",
      "no_data": "No data",
      "all": "All"
    },
    "language": {
      "label": "Language",
      "fr": "Français",
      "en": "English",
      "es": "Español",
      "pt": "Português"
    }
  }
}
```

Create `angular/public/i18n/es.json` and `angular/public/i18n/pt.json` as **copies of `fr.json` for now** (they will be replaced by machine drafts in Task 7 once the translate script exists). This guarantees no missing files.

- [ ] **Step 3: Create the loader**

`angular/src/app/core/i18n/transloco-loader.ts`:

```typescript
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Translation, TranslocoLoader } from '@jsverse/transloco';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private readonly http = inject(HttpClient);

  getTranslation(lang: string) {
    // `lang` is "fr" for root, or "<scope>/fr" once feature scopes exist (T2+).
    return this.http.get<Translation>(`/i18n/${lang}.json`);
  }
}
```

- [ ] **Step 4: Create the config**

`angular/src/app/core/i18n/transloco.config.ts`:

```typescript
import { isDevMode } from '@angular/core';
import { TranslocoConfig } from '@jsverse/transloco';

export const AVAILABLE_LANGS = ['fr', 'en', 'es', 'pt'] as const;
export type AppLang = (typeof AVAILABLE_LANGS)[number];

export const TRANSLOCO_APP_CONFIG: Partial<TranslocoConfig> = {
  availableLangs: [...AVAILABLE_LANGS],
  defaultLang: 'fr',
  fallbackLang: 'fr',
  reRenderOnLangChange: true,
  prodMode: !isDevMode(),
  missingHandler: { useFallbackTranslation: true, logMissingKey: isDevMode() },
};
```

- [ ] **Step 5: Wire the provider in `app.config.ts`**

Add imports and provider. Insert `provideTransloco` into the `providers` array (after `provideHttpClient(...)`):

```typescript
import { provideTransloco } from '@jsverse/transloco';
import { TranslocoHttpLoader } from './core/i18n/transloco-loader';
import { TRANSLOCO_APP_CONFIG } from './core/i18n/transloco.config';
// ...
    provideTransloco({
      config: TRANSLOCO_APP_CONFIG,
      loader: TranslocoHttpLoader,
    }),
```

- [ ] **Step 6: Write the setup test**

`angular/src/app/core/i18n/transloco.setup.spec.ts`:

```typescript
import { TestBed } from '@angular/core/testing';
import { TranslocoService, provideTransloco, Translation } from '@jsverse/transloco';
import { TranslocoConfig } from '@jsverse/transloco';
import { TRANSLOCO_APP_CONFIG } from './transloco.config';

const FR: Translation = { shared: { actions: { save: 'Enregistrer' } } };
const EN: Translation = { shared: { actions: { save: 'Save' } } };

class FakeLoader {
  getTranslation(lang: string) {
    return Promise.resolve(lang === 'en' ? EN : FR);
  }
}

describe('Transloco setup', () => {
  let service: TranslocoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideTransloco({ config: TRANSLOCO_APP_CONFIG, loader: FakeLoader }),
      ],
    });
    service = TestBed.inject(TranslocoService);
  });

  it('defaults to French and translates a shared key', async () => {
    await service.load('fr');
    service.setActiveLang('fr');
    expect(service.translate('shared.actions.save')).toBe('Enregistrer');
  });

  it('switches to English at runtime', async () => {
    await service.load('en');
    service.setActiveLang('en');
    expect(service.translate('shared.actions.save')).toBe('Save');
  });

  it('exposes the four CEMAC LTR languages', () => {
    const cfg = TRANSLOCO_APP_CONFIG as TranslocoConfig;
    expect(cfg.availableLangs).toEqual(['fr', 'en', 'es', 'pt']);
    expect(cfg.defaultLang).toBe('fr');
    expect(cfg.fallbackLang).toBe('fr');
  });
});
```

- [ ] **Step 7: Run the test**

Run: `cd angular && npm test -- --watch=false --include='**/transloco.setup.spec.ts'`
Expected: PASS (3 specs).

- [ ] **Step 8: Commit**

```bash
git add angular/package.json angular/package-lock.json angular/public/i18n angular/src/app/core/i18n/transloco-loader.ts angular/src/app/core/i18n/transloco.config.ts angular/src/app/core/i18n/transloco.setup.spec.ts angular/src/app/app.config.ts
git commit -m "feat(i18n): wire Transloco runtime i18n with fr/en/es/pt root translations"
```

---

### Task 3: `LanguageService` — active language + persistence

**Files:**
- Create: `angular/src/app/core/i18n/language.service.ts`
- Test: `angular/src/app/core/i18n/language.service.spec.ts`

**Interfaces:**
- Consumes: `TranslocoService` (`setActiveLang`, `getActiveLang`), `HttpClient`, `AUTH.me` from `src/_api/config/api.config` (`AUTH.me` = `${API_BASE}/auth/me/`), `AuthService.currentUser$` from `src/_api/services/auth/auth.service` (emits `UserProfile | null` with `language_code`).
- Produces:
  - `LanguageService.current: AppLang` (getter → `transloco.getActiveLang()` narrowed).
  - `LanguageService.setLanguage(lang: AppLang): void` — sets active lang, writes `localStorage['erp.lang']`, and fires `PATCH AUTH.me { language_code }` (fire-and-forget).
  - `LanguageService.init(): void` — resolves initial language from `localStorage['erp.lang']` → else current user's `language_code` → else `'fr'`; sets it active; and subscribes to `currentUser$` to adopt the profile language when it loads **only if** the user has not made an explicit local choice.
  - `STORAGE_KEY = 'erp.lang'` exported const.

- [ ] **Step 1: Write the failing test**

`angular/src/app/core/i18n/language.service.spec.ts`:

```typescript
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd angular && npm test -- --watch=false --include='**/language.service.spec.ts'`
Expected: FAIL — `LanguageService` not found.

- [ ] **Step 3: Implement the service**

`angular/src/app/core/i18n/language.service.ts`:

```typescript
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslocoService } from '@jsverse/transloco';
import { AuthService } from '../../../_api/services/auth/auth.service';
import { AUTH } from '../../../_api/config/api.config';
import { AVAILABLE_LANGS, AppLang } from './transloco.config';

export const STORAGE_KEY = 'erp.lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly transloco = inject(TranslocoService);
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);

  private isValid(lang: string | null | undefined): lang is AppLang {
    return !!lang && (AVAILABLE_LANGS as readonly string[]).includes(lang);
  }

  get current(): AppLang {
    const active = this.transloco.getActiveLang();
    return this.isValid(active) ? active : 'fr';
  }

  setLanguage(lang: AppLang): void {
    this.transloco.setActiveLang(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    this.http.patch(AUTH.me, { language_code: lang }).subscribe({ error: () => {} });
  }

  /** Resolve the initial language and keep it in sync with the profile. */
  init(): void {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (this.isValid(stored)) {
      this.transloco.setActiveLang(stored);
    }
    this.auth.currentUser$.subscribe(user => {
      // A local choice always wins; otherwise adopt the profile language.
      if (this.isValid(localStorage.getItem(STORAGE_KEY))) return;
      const code = user?.language_code;
      this.transloco.setActiveLang(this.isValid(code) ? code : 'fr');
    });
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd angular && npm test -- --watch=false --include='**/language.service.spec.ts'`
Expected: PASS (4 specs).

- [ ] **Step 5: Call `init()` at startup**

In `angular/src/app/app.config.ts`, extend the existing `APP_INITIALIZER` factory so it also initializes language after auth session bootstrap:

```typescript
import { LanguageService } from './core/i18n/language.service';
// inside the APP_INITIALIZER useFactory:
      useFactory: () => {
        const auth = inject(AuthService);
        const lang = inject(LanguageService);
        return () => { auth.initSession(); lang.init(); };
      },
```

- [ ] **Step 6: Commit**

```bash
git add angular/src/app/core/i18n/language.service.ts angular/src/app/core/i18n/language.service.spec.ts angular/src/app/app.config.ts
git commit -m "feat(i18n): LanguageService with localStorage + profile persistence"
```

---

### Task 4: `Accept-Language` HTTP interceptor

**Files:**
- Create: `angular/src/_api/interceptors/accept-language.interceptor.ts`
- Modify: `angular/src/app/app.config.ts` (add to `withInterceptors`)
- Test: `angular/src/_api/interceptors/accept-language.interceptor.spec.ts`

**Interfaces:**
- Consumes: `TranslocoService.getActiveLang()`.
- Produces: `acceptLanguageInterceptor: HttpInterceptorFn` — clones every outgoing request adding header `Accept-Language: <activeLang>`.

- [ ] **Step 1: Write the failing test**

`angular/src/_api/interceptors/accept-language.interceptor.spec.ts`:

```typescript
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd angular && npm test -- --watch=false --include='**/accept-language.interceptor.spec.ts'`
Expected: FAIL — interceptor not found.

- [ ] **Step 3: Implement the interceptor**

`angular/src/_api/interceptors/accept-language.interceptor.ts`:

```typescript
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

export const acceptLanguageInterceptor: HttpInterceptorFn = (req, next) => {
  const lang = inject(TranslocoService).getActiveLang();
  return next(req.clone({ setHeaders: { 'Accept-Language': lang } }));
};
```

- [ ] **Step 4: Register it**

In `angular/src/app/app.config.ts`, add to the interceptor array:

```typescript
import { acceptLanguageInterceptor } from '../_api/interceptors/accept-language.interceptor';
// ...
    provideHttpClient(withInterceptors([
      jwtInterceptor, errorInterceptor, apiUnwrapInterceptor, acceptLanguageInterceptor,
    ])),
```

- [ ] **Step 5: Run test to verify it passes**

Run: `cd angular && npm test -- --watch=false --include='**/accept-language.interceptor.spec.ts'`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add angular/src/_api/interceptors/accept-language.interceptor.ts angular/src/_api/interceptors/accept-language.interceptor.spec.ts angular/src/app/app.config.ts
git commit -m "feat(i18n): send Accept-Language on every API request"
```

---

### Task 5: `LanguageSwitcherComponent` in the header

**Files:**
- Create: `angular/src/app/shared/components/language-switcher/language-switcher.component.ts`
- Modify: `angular/src/app/layouts/header/header.component.ts` (imports + template usage)
- Test: `angular/src/app/shared/components/language-switcher/language-switcher.component.spec.ts`

**Interfaces:**
- Consumes: `LanguageService` (`current`, `setLanguage`), `AVAILABLE_LANGS`, root translations (`shared.language.*`), `TranslocoModule` (`transloco` pipe).
- Produces: `<app-language-switcher>` standalone component — a select/dropdown listing the four languages; selecting one calls `LanguageService.setLanguage`.

- [ ] **Step 1: Write the failing test**

`angular/src/app/shared/components/language-switcher/language-switcher.component.spec.ts`:

```typescript
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '../../../core/i18n/testing/transloco-testing';
import { LanguageSwitcherComponent } from './language-switcher.component';
import { LanguageService } from '../../../core/i18n/language.service';

describe('LanguageSwitcherComponent', () => {
  let setLanguage: jasmine.Spy;

  beforeEach(() => {
    setLanguage = jasmine.createSpy('setLanguage');
    TestBed.configureTestingModule({
      imports: [LanguageSwitcherComponent, getTranslocoModule()],
      providers: [{ provide: LanguageService, useValue: { current: 'fr', setLanguage } }],
    });
  });

  it('lists the four languages', () => {
    const fixture = TestBed.createComponent(LanguageSwitcherComponent);
    fixture.detectChanges();
    const options = fixture.nativeElement.querySelectorAll('option');
    expect(options.length).toBe(4);
  });

  it('calls setLanguage on selection', () => {
    const fixture = TestBed.createComponent(LanguageSwitcherComponent);
    fixture.detectChanges();
    const select: HTMLSelectElement = fixture.nativeElement.querySelector('select');
    select.value = 'en';
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(setLanguage).toHaveBeenCalledWith('en');
  });
});
```

- [ ] **Step 2: Create the shared Transloco testing helper**

`angular/src/app/core/i18n/testing/transloco-testing.ts`:

```typescript
import { TranslocoTestingModule, TranslocoTestingOptions } from '@jsverse/transloco';
import fr from '../../../../../public/i18n/fr.json';
import en from '../../../../../public/i18n/en.json';
import es from '../../../../../public/i18n/es.json';
import pt from '../../../../../public/i18n/pt.json';

export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
  return TranslocoTestingModule.forRoot({
    langs: { fr, en, es, pt },
    translocoConfig: { availableLangs: ['fr', 'en', 'es', 'pt'], defaultLang: 'fr' },
    preloadLangs: true,
    ...options,
  });
}
```

If importing JSON fails to compile, add `"resolveJsonModule": true` to `angular/tsconfig.json` `compilerOptions` (Angular's base tsconfig usually already has it; verify).

- [ ] **Step 3: Run test to verify it fails**

Run: `cd angular && npm test -- --watch=false --include='**/language-switcher.component.spec.ts'`
Expected: FAIL — component not found.

- [ ] **Step 4: Implement the component**

`angular/src/app/shared/components/language-switcher/language-switcher.component.ts`:

```typescript
import { Component, inject } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageService } from '../../../core/i18n/language.service';
import { AVAILABLE_LANGS, AppLang } from '../../../core/i18n/transloco.config';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [TranslocoModule],
  template: `
    <select class="form-select form-select-sm lang-switcher"
            [value]="lang.current"
            (change)="onChange($event)"
            [attr.aria-label]="'shared.language.label' | transloco">
      @for (code of langs; track code) {
        <option [value]="code">{{ 'shared.language.' + code | transloco }}</option>
      }
    </select>
  `,
})
export class LanguageSwitcherComponent {
  readonly lang = inject(LanguageService);
  readonly langs = AVAILABLE_LANGS;

  onChange(event: Event): void {
    this.lang.setLanguage((event.target as HTMLSelectElement).value as AppLang);
  }
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `cd angular && npm test -- --watch=false --include='**/language-switcher.component.spec.ts'`
Expected: PASS (2 specs).

- [ ] **Step 6: Place the switcher in the header**

In `angular/src/app/layouts/header/header.component.ts`, add `LanguageSwitcherComponent` to the component `imports` array, and add `<app-language-switcher />` into the header template's right-hand action zone (next to the profile/logout controls). Read the existing template to find the actions container and insert there.

- [ ] **Step 7: Commit**

```bash
git add angular/src/app/shared/components/language-switcher angular/src/app/core/i18n/testing angular/src/app/layouts/header/header.component.ts
git commit -m "feat(i18n): language switcher in header"
```

---

### Task 6: Extraction + translation Node scripts

**Files:**
- Create: `angular/scripts/i18n-extract.mjs`
- Create: `angular/scripts/i18n-translate.mjs`
- Create: `angular/scripts/lib/flatten.mjs` (shared key helpers)
- Modify: `angular/package.json` (npm scripts)
- Test: `angular/scripts/__tests__/flatten.test.mjs`

**Interfaces:**
- Consumes: nothing (dev tooling).
- Produces:
  - `flatten(obj) -> Record<string,string>` and `unflatten(map) -> object` in `lib/flatten.mjs`.
  - `npm run i18n:extract -- <glob>` — scans templates, appends new `shared.*`/scope keys to `public/i18n/fr.json`, rewrites templates to use the `transloco` pipe, prints a summary; flags TS string literals to stderr without editing them.
  - `npm run i18n:translate -- <scope>` — reads the language's `fr` file, produces `en/es/pt` drafts for **missing keys only** (never overwrites existing), preserving key order.

The translate script uses a pluggable translator. Default = **identity passthrough with a `[draft]` marker stripped** (offline-safe), so the pipeline is deterministic and testable; a real MT backend can be slotted behind the `translate(text, target)` function later. This keeps T0 free of network/credential dependencies.

- [ ] **Step 1: Write the failing test for key helpers**

`angular/scripts/__tests__/flatten.test.mjs`:

```javascript
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { flatten, unflatten } from '../lib/flatten.mjs';

test('flatten nests dotted keys', () => {
  assert.deepEqual(flatten({ shared: { actions: { save: 'S' } } }), { 'shared.actions.save': 'S' });
});

test('unflatten is the inverse of flatten', () => {
  const obj = { shared: { actions: { save: 'S', cancel: 'C' } } };
  assert.deepEqual(unflatten(flatten(obj)), obj);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd angular && node --test scripts/__tests__/flatten.test.mjs`
Expected: FAIL — `lib/flatten.mjs` not found.

- [ ] **Step 3: Implement the key helpers**

`angular/scripts/lib/flatten.mjs`:

```javascript
export function flatten(obj, prefix = '', out = {}) {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) flatten(v, key, out);
    else out[key] = v;
  }
  return out;
}

export function unflatten(map) {
  const root = {};
  for (const [key, val] of Object.entries(map)) {
    const parts = key.split('.');
    let node = root;
    for (let i = 0; i < parts.length - 1; i++) node = node[parts[i]] ??= {};
    node[parts[parts.length - 1]] = val;
  }
  return root;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd angular && node --test scripts/__tests__/flatten.test.mjs`
Expected: PASS.

- [ ] **Step 5: Implement the translate script**

`angular/scripts/i18n-translate.mjs`:

```javascript
#!/usr/bin/env node
// Usage: node scripts/i18n-translate.mjs <scope|root>
// Fills en/es/pt drafts for keys missing relative to the fr source. Never overwrites.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { flatten, unflatten } from './lib/flatten.mjs';

const scope = process.argv[2] ?? 'root';
const dir = scope === 'root' ? 'public/i18n' : `public/i18n/${scope}`;
const src = flatten(JSON.parse(readFileSync(`${dir}/fr.json`, 'utf8')));

// Slot a real MT backend here later. Draft = copy of source (fallback-safe).
const translate = (text /*, target */) => text;

for (const target of ['en', 'es', 'pt']) {
  const path = `${dir}/${target}.json`;
  const existing = existsSync(path) ? flatten(JSON.parse(readFileSync(path, 'utf8'))) : {};
  let added = 0;
  for (const [key, val] of Object.entries(src)) {
    if (existing[key] === undefined) { existing[key] = translate(val, target); added++; }
  }
  writeFileSync(path, JSON.stringify(unflatten(existing), null, 2) + '\n');
  console.log(`${target}: +${added} draft keys -> ${path}`);
}
```

- [ ] **Step 6: Implement the extraction script**

`angular/scripts/i18n-extract.mjs`:

```javascript
#!/usr/bin/env node
// Usage: node scripts/i18n-extract.mjs <scope> <glob...>
// Extracts translatable text from templates into public/i18n[/<scope>]/fr.json
// and rewrites the templates to use the transloco pipe. Review the diff after running.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { globSync } from 'node:fs';
import { flatten, unflatten } from './lib/flatten.mjs';

const [scope, ...globs] = process.argv.slice(2);
if (!scope || globs.length === 0) {
  console.error('usage: i18n-extract.mjs <scope> <glob...>');
  process.exit(1);
}
const dir = scope === 'root' ? 'public/i18n' : `public/i18n/${scope}`;
const frPath = `${dir}/fr.json`;
const fr = existsSync(frPath) ? flatten(JSON.parse(readFileSync(frPath, 'utf8'))) : {};

const slug = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '').slice(0, 40) || 'label';

// Text node between tags that is plain (no interpolation/binding), and translatable attrs.
const TEXT = />([^<>{}]*[A-Za-zÀ-ÿ]{2,}[^<>{}]*)</g;
const ATTR = /\b(placeholder|title|alt|aria-label|matTooltip)="([^"{}<>]*[A-Za-zÀ-ÿ]{2,}[^"{}<>]*)"/g;

let totalKeys = 0;
for (const pattern of globs) {
  for (const file of globSync(pattern)) {
    let html = readFileSync(file, 'utf8');
    const base = `${scope}.${slug(file.split('/').pop().replace(/\..*$/, ''))}`;
    const add = (text) => {
      const clean = text.trim();
      const key = `${base}.${slug(clean)}`;
      if (fr[key] === undefined) { fr[key] = clean; totalKeys++; }
      return key;
    };
    html = html.replace(TEXT, (m, txt) =>
      txt.trim() ? `>{{ '${add(txt)}' | transloco }}<` : m);
    html = html.replace(ATTR, (m, attr, txt) =>
      `[${attr}]="'${add(txt)}' | transloco"`);
    writeFileSync(file, html);
  }
}
writeFileSync(frPath, JSON.stringify(unflatten(fr), null, 2) + '\n');
console.error('NOTE: TS string literals are NOT auto-wrapped — wrap toasts/validation manually.');
console.log(`extracted ${totalKeys} keys -> ${frPath}`);
```

- [ ] **Step 7: Add npm scripts**

In `angular/package.json` `"scripts"`, add:

```json
    "i18n:extract": "node scripts/i18n-extract.mjs",
    "i18n:translate": "node scripts/i18n-translate.mjs",
    "i18n:check": "node scripts/i18n-check.mjs"
```

- [ ] **Step 8: Commit**

```bash
git add angular/scripts angular/package.json
git commit -m "feat(i18n): extraction + translation tooling scripts"
```

---

### Task 7: Generate es/pt drafts and wire the header/nav chrome

**Files:**
- Modify: `angular/public/i18n/es.json`, `angular/public/i18n/pt.json` (regenerated by the script)
- Modify: `angular/public/i18n/fr.json`, `angular/public/i18n/en.json` (add `shared.nav.*`)
- Modify: `angular/src/app/layouts/header/header.component.ts`, sidebar/menu template (wire the `transloco` pipe)
- Test: `angular/src/app/layouts/header/header.i18n.spec.ts`

**Interfaces:**
- Consumes: the translate script (Task 6), the root translations (Task 2), `LanguageService`.
- Produces: `shared.nav.*` keys populated in all four languages; header + sidebar templates rendering via `transloco`; es/pt files are full drafts (no missing keys vs fr).

- [ ] **Step 1: Add navigation labels to fr.json and en.json**

Add a `nav` block under `shared` in `public/i18n/fr.json`:

```json
    "nav": {
      "dashboard": "Tableau de bord",
      "hr": "Ressources humaines",
      "fleet": "Flotte",
      "voyages": "Voyages",
      "ticketing": "Billetterie",
      "parcels": "Colis",
      "treasury": "Trésorerie",
      "accounting": "Comptabilité",
      "users": "Utilisateurs",
      "rbac": "Rôles & permissions",
      "config": "Configuration",
      "audit": "Journal d'audit",
      "logout": "Déconnexion",
      "profile": "Mon profil"
    }
```

And the English counterpart in `public/i18n/en.json`:

```json
    "nav": {
      "dashboard": "Dashboard",
      "hr": "Human Resources",
      "fleet": "Fleet",
      "voyages": "Trips",
      "ticketing": "Ticketing",
      "parcels": "Parcels",
      "treasury": "Treasury",
      "accounting": "Accounting",
      "users": "Users",
      "rbac": "Roles & Permissions",
      "config": "Configuration",
      "audit": "Audit Log",
      "logout": "Log out",
      "profile": "My Profile"
    }
```

- [ ] **Step 2: Regenerate es/pt drafts**

Run: `cd angular && npm run i18n:translate -- root`
Expected: `es.json` and `pt.json` rewritten as full drafts, `+N draft keys` reported, no key missing vs `fr.json`.

- [ ] **Step 3: Wire the header + sidebar templates**

In the header and the sidebar/menu templates, replace the hardcoded French chrome labels with the pipe, e.g. `{{ 'shared.nav.dashboard' | transloco }}`, `{{ 'shared.nav.logout' | transloco }}`. Ensure the host component `imports` includes `TranslocoModule`. Read each template first to map its literal strings to the `shared.nav.*` / `shared.actions.*` keys.

- [ ] **Step 4: Write the header i18n test**

`angular/src/app/layouts/header/header.i18n.spec.ts` — assert the header renders a translated nav/label and updates on language change:

```typescript
import { TestBed } from '@angular/core/testing';
import { TranslocoService } from '@jsverse/transloco';
import { getTranslocoModule } from '../../core/i18n/testing/transloco-testing';
import { HeaderComponent } from './header.component';

describe('Header i18n', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderComponent, getTranslocoModule()],
    });
  });

  it('renders a translated label and re-renders on lang change', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const transloco = TestBed.inject(TranslocoService);
    transloco.setActiveLang('fr');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Déconnexion');
    transloco.setActiveLang('en');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Log out');
  });
});
```

If `HeaderComponent` has heavy dependencies (router, services) that complicate standalone instantiation, provide the minimal stubs its constructor needs in the `providers` array rather than weakening the assertion.

- [ ] **Step 5: Run the test**

Run: `cd angular && npm test -- --watch=false --include='**/header.i18n.spec.ts'`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add angular/public/i18n angular/src/app/layouts
git commit -m "feat(i18n): translate app chrome (header + nav), es/pt drafts"
```

---

### Task 8: Key-parity checker + CI gate

**Files:**
- Create: `angular/scripts/i18n-check.mjs`
- Create: `angular/scripts/__tests__/i18n-check.test.mjs`
- Modify: `.github/workflows/deploy.yml`

**Interfaces:**
- Consumes: `lib/flatten.mjs` (Task 6), the JSON files under `public/i18n/`.
- Produces: `checkParity(dir) -> { scope, missing: {lang: string[]}, extra: {lang: string[]} }[]`; CLI exits non-zero when any language's key set differs from `fr`.

- [ ] **Step 1: Write the failing test**

`angular/scripts/__tests__/i18n-check.test.mjs`:

```javascript
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { diffKeys } from '../i18n-check.mjs';

test('diffKeys reports missing and extra keys against fr', () => {
  const fr = { a: '1', b: '2' };
  const other = { a: '1', c: '3' };
  const d = diffKeys(fr, other);
  assert.deepEqual(d.missing, ['b']);
  assert.deepEqual(d.extra, ['c']);
});

test('diffKeys is clean when key sets match', () => {
  const d = diffKeys({ a: '1' }, { a: 'x' });
  assert.deepEqual(d.missing, []);
  assert.deepEqual(d.extra, []);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd angular && node --test scripts/__tests__/i18n-check.test.mjs`
Expected: FAIL — `i18n-check.mjs` not found.

- [ ] **Step 3: Implement the checker**

`angular/scripts/i18n-check.mjs`:

```javascript
#!/usr/bin/env node
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { flatten } from './lib/flatten.mjs';

export function diffKeys(fr, other) {
  const frKeys = new Set(Object.keys(fr));
  const otherKeys = new Set(Object.keys(other));
  return {
    missing: [...frKeys].filter(k => !otherKeys.has(k)),
    extra: [...otherKeys].filter(k => !frKeys.has(k)),
  };
}

function checkDir(dir) {
  const fr = flatten(JSON.parse(readFileSync(`${dir}/fr.json`, 'utf8')));
  let ok = true;
  for (const lang of ['en', 'es', 'pt']) {
    const path = `${dir}/${lang}.json`;
    if (!existsSync(path)) { console.error(`MISSING FILE: ${path}`); ok = false; continue; }
    const { missing, extra } = diffKeys(fr, flatten(JSON.parse(readFileSync(path, 'utf8'))));
    if (missing.length || extra.length) {
      ok = false;
      console.error(`[${dir}] ${lang}: ${missing.length} missing, ${extra.length} extra`);
      if (missing.length) console.error('  missing:', missing.slice(0, 20).join(', '));
      if (extra.length) console.error('  extra:', extra.slice(0, 20).join(', '));
    }
  }
  return ok;
}

// Only run the CLI when invoked directly (not when imported by tests).
if (import.meta.url === `file://${process.argv[1]}`) {
  const root = 'public/i18n';
  const dirs = [root, ...readdirSync(root)
    .map(n => `${root}/${n}`)
    .filter(p => statSync(p).isDirectory())];
  const allOk = dirs.map(checkDir).every(Boolean);
  if (!allOk) { console.error('\ni18n key parity check FAILED'); process.exit(1); }
  console.log('i18n key parity OK');
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd angular && node --test scripts/__tests__/i18n-check.test.mjs`
Expected: PASS.

- [ ] **Step 5: Run the checker end-to-end**

Run: `cd angular && npm run i18n:check`
Expected: `i18n key parity OK` (exit 0), since Task 7 regenerated full es/pt drafts.

- [ ] **Step 6: Add the CI gate**

In `.github/workflows/deploy.yml`, inside the frontend test job (the one that runs in `angular/`), add a step after `npm ci`:

```yaml
      - name: i18n key parity
        working-directory: angular
        run: npm run i18n:check
```

If no frontend job exists yet, add a minimal `i18n` job:

```yaml
  i18n:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - name: Check translation key parity
        working-directory: angular
        run: node scripts/i18n-check.mjs
```

- [ ] **Step 7: Commit**

```bash
git add angular/scripts/i18n-check.mjs angular/scripts/__tests__/i18n-check.test.mjs .github/workflows/deploy.yml
git commit -m "feat(i18n): key-parity checker + CI gate"
```

---

## Self-Review

**1. Spec coverage:**
- §4.1 Transloco provider/loader/scopes → Task 2 (root chrome; feature scopes explicitly deferred per Global Constraints). ✓
- §4.1 LanguageService → Task 3. ✓
- §4.1 AcceptLanguageInterceptor → Task 4. ✓
- §4.1 LanguageSwitcherComponent in header → Task 5 + Task 7 wiring. ✓
- §4.2 selection flow (login profile → switcher → localStorage → PATCH /auth/me) → Task 3 (`init`/`setLanguage`) + confirmed `/auth/me` PATCH accepts `language_code`. ✓
- §4.3 backend LANGUAGES es/pt (+ ar deferred) → Task 1. ✓ (message `_()` wrapping + .po = **T1**, not T0.)
- §5 extraction + translate tooling → Task 6; applied to chrome in Task 7. ✓
- §6 key-parity test + CI → Task 8; Transloco/service/interceptor/switcher specs → Tasks 2-5, 7. ✓
- §7 T0 deliverable "switcher flips chrome live" → Task 7 header i18n test proves runtime re-render. ✓
- Out of scope confirmed untouched: modeltranslation, PDF, PWA, WhatsApp, feature scopes (all later tranches). ✓

**2. Placeholder scan:** No TBD/TODO; every code step contains full code. The extraction/translate scripts are real and runnable; `translate()` is an explicit identity-passthrough draft (documented decision, not a placeholder) so T0 needs no MT credentials.

**3. Type consistency:** `AppLang`/`AVAILABLE_LANGS` (Task 2) reused in Tasks 3/4/5. `STORAGE_KEY='erp.lang'` defined once (Task 3) and asserted in its spec. `AUTH.me` is the real endpoint (`/auth/me/`, PATCH-capable). `flatten`/`unflatten` (Task 6) reused by Task 8. `getTranslocoModule()` helper defined in Task 5 Step 2, reused in Task 7. Loader path `/i18n/${lang}.json` matches files created in Task 2 and the `public/` assets root.

**Known verification to do at execution time:** confirm `@jsverse/transloco` resolves against Angular 21 peer deps during `npm install` (Task 2 Step 1); if it warns, pin the latest compatible major. `resolveJsonModule` needed for the testing helper (Task 5 Step 2) — verify in `tsconfig.json`.

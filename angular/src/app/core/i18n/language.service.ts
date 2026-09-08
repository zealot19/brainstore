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

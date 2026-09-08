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

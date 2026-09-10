import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageService } from '../../../core/i18n/language.service';
import { AVAILABLE_LANGS, AppLang } from '../../../core/i18n/transloco.config';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [FormsModule, TranslocoModule],
  template: `
    <select class="form-select form-select-sm lang-switcher"
            [ngModel]="lang.current"
            (ngModelChange)="onChange($event)"
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

  onChange(lang: AppLang): void {
    this.lang.setLanguage(lang);
  }
}

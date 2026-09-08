import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

/** Slugify a French menu label into a `nav.*` translation key. MUST stay in
 *  sync with scripts/seed-nav-i18n.mjs (same algorithm). */
export function navSlug(label: string): string {
  return label
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // strip accents
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

/**
 * Translates a data-driven sidebar label via `nav.<slug>`.
 * Impure so it re-evaluates when the active language changes; falls back to the
 * original French label when no translation key exists.
 */
@Pipe({ name: 'navLabel', standalone: true, pure: false })
export class NavLabelPipe implements PipeTransform {
  private readonly transloco = inject(TranslocoService);

  transform(value: string | undefined | null): string {
    if (!value) return value ?? '';
    const key = `nav.${navSlug(value)}`;
    const translated = this.transloco.translate(key);
    return !translated || translated === key ? value : translated;
  }
}

import { isDevMode } from '@angular/core';

export const AVAILABLE_LANGS = ['fr', 'en', 'es', 'pt'] as const;
export type AppLang = (typeof AVAILABLE_LANGS)[number];

export const TRANSLOCO_APP_CONFIG = {
  availableLangs: [...AVAILABLE_LANGS],
  defaultLang: 'fr',
  fallbackLang: 'fr',
  reRenderOnLangChange: true,
  prodMode: !isDevMode(),
  missingHandler: { useFallbackTranslation: true, logMissingKey: isDevMode() },
};

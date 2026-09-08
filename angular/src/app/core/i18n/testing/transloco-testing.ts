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

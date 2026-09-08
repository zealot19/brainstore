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

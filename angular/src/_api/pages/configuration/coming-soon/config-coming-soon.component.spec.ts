import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { getTranslocoModule } from '../../../../app/core/i18n/testing/transloco-testing';
import { ConfigComingSoonComponent } from './config-coming-soon.component';

describe('ConfigComingSoonComponent', () => {
  function setup(title?: string) {
    TestBed.configureTestingModule({
      imports: [ConfigComingSoonComponent, getTranslocoModule()],
      providers: [{ provide: ActivatedRoute, useValue: { snapshot: { data: title ? { title } : {} } } }],
    });
    const fixture = TestBed.createComponent(ConfigComingSoonComponent);
    fixture.detectChanges();
    return fixture;
  }
  it('affiche le titre passé en data', () => {
    const el: HTMLElement = setup('Types de voyage').nativeElement;
    expect(el.textContent).toContain('Types de voyage');
  });
  it('ne casse pas sans titre', () => {
    expect(() => setup().detectChanges()).not.toThrow();
  });
});

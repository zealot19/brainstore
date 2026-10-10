import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-banner',
  imports: [CommonModule],
  // Bandeaux d'information retirés des pages (M02) : le composant ne rend plus rien.
  // L'`@Input() text` est conservé pour que les 50 appels `[text]="…"` restent valides.
  template: ``,
})
export class InfoBannerComponent {
  @Input() text = '';
}

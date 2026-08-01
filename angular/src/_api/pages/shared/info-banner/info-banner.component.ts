import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-banner',
  imports: [CommonModule],
  template: `
    <div class="alert alert-info d-flex align-items-start gap-2" role="alert">
      <i class="ti ti-info-circle mt-1"></i>
      <div>{{ text }}</div>
    </div>`,
})
export class InfoBannerComponent {
  @Input() text = '';
}

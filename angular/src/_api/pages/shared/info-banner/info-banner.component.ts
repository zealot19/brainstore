import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-banner',
  imports: [CommonModule],
  template: `
    <div class="d-flex align-items-start gap-2 p-3 mb-3 rounded-3" role="note"
         style="background:#f5f6f8; border:1px solid #e6e8eb; border-left:3px solid #9aa0a6; color:#4b5563;">
      <i class="ti ti-info-circle mt-1" style="color:#9aa0a6; font-size:1.05rem;"></i>
      <div class="small lh-sm">{{ text }}</div>
    </div>`,
})
export class InfoBannerComponent {
  @Input() text = '';
}

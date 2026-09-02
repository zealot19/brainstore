import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, ToastType } from './toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-stack" aria-live="polite" aria-atomic="true">
      @for (t of toast.toasts(); track t.id) {
        <div class="app-toast" [class]="'app-toast--' + t.type" role="alert">
          <i class="ti" [ngClass]="icon(t.type)"></i>
          <div class="app-toast__body">
            @if (t.title) { <div class="app-toast__title">{{ t.title }}</div> }
            <div class="app-toast__msg">{{ t.message }}</div>
          </div>
          <button type="button" class="app-toast__close" (click)="toast.dismiss(t.id)" aria-label="Fermer">
            <i class="ti ti-x"></i>
          </button>
        </div>
      }
    </div>
  `,
  styles: [`
    .toast-stack {
      position: fixed; top: 1rem; right: 1rem; z-index: 1200;
      display: flex; flex-direction: column; gap: .55rem;
      max-width: min(92vw, 380px); pointer-events: none;
    }
    .app-toast {
      pointer-events: auto;
      display: flex; align-items: flex-start; gap: .6rem;
      background: #fff; color: #262b33;
      border: 1px solid #e6eaf0; border-left-width: 4px;
      border-radius: 10px; padding: .7rem .8rem;
      box-shadow: 0 8px 24px rgba(16, 33, 60, .14);
      animation: toast-in .22s ease-out;
      font-size: .875rem;
    }
    @keyframes toast-in { from { opacity: 0; transform: translateX(16px); } to { opacity: 1; transform: none; } }
    .app-toast > .ti { font-size: 1.1rem; line-height: 1.3; }
    .app-toast__body { flex: 1 1 auto; min-width: 0; }
    .app-toast__title { font-weight: 700; margin-bottom: .1rem; }
    .app-toast__msg { word-break: break-word; }
    .app-toast__close {
      border: 0; background: transparent; color: #9aa2ad; cursor: pointer;
      padding: 0; line-height: 1; font-size: 1rem; margin-top: .1rem;
    }
    .app-toast__close:hover { color: #5b636e; }
    .app-toast--success { border-left-color: #16794f; } .app-toast--success > .ti { color: #16794f; }
    .app-toast--error   { border-left-color: #d13438; } .app-toast--error > .ti   { color: #d13438; }
    .app-toast--info    { border-left-color: #0068b8; } .app-toast--info > .ti    { color: #0068b8; }
    .app-toast--warning { border-left-color: #a66e00; } .app-toast--warning > .ti { color: #a66e00; }
    @media print { .toast-stack { display: none !important; } }
  `],
})
export class ToastContainerComponent {
  toast = inject(ToastService);
  icon(t: ToastType): string {
    return { success: 'ti-circle-check', error: 'ti-alert-circle',
             info: 'ti-info-circle', warning: 'ti-alert-triangle' }[t];
  }
}

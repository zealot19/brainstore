import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: number;
  type: ToastType;
  message: string;
  title?: string;
}

/** Notifications légères en haut à droite (toasts). Auto-fermeture + fondu. */
@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly toasts = signal<Toast[]>([]);
  private seq = 0;

  private push(type: ToastType, message: string, title?: string, duration?: number): void {
    const id = ++this.seq;
    this.toasts.update(list => [...list, { id, type, message, title }]);
    const ttl = duration ?? (type === 'error' || type === 'warning' ? 6000 : 4000);
    setTimeout(() => this.dismiss(id), ttl);
  }

  success(message: string, title?: string): void { this.push('success', message, title); }
  error(message: string, title?: string): void { this.push('error', message, title); }
  info(message: string, title?: string): void { this.push('info', message, title); }
  warning(message: string, title?: string): void { this.push('warning', message, title); }

  dismiss(id: number): void {
    this.toasts.update(list => list.filter(t => t.id !== id));
  }
}

import {
  Component, ElementRef, OnDestroy, OnInit, effect, inject, signal, viewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import QRCode from 'qrcode';
import { OnlineBookingService } from '../../../services/online/online-booking.service';
import { BookingRequestStatus } from '../../../models/online-booking.models';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-rsv-status',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class RsvStatusComponent implements OnInit, OnDestroy {
  private svc = inject(OnlineBookingService);
  private route = inject(ActivatedRoute);
  private toast = inject(ToastService);

  req = signal<BookingRequestStatus | null>(null);
  loading = signal(true);

  qrCanvas = viewChild<ElementRef<HTMLCanvasElement>>('qr');

  private timer: ReturnType<typeof setInterval> | null = null;
  private requestId = '';

  constructor() {
    effect(() => {
      const r = this.req();
      const el = this.qrCanvas()?.nativeElement;
      if (r?.status === 'paid' && r.ticket && el) {
        QRCode.toCanvas(el, r.ticket.qr_code, { width: 220 }).catch(() => {});
      }
    });
  }

  ngOnInit(): void {
    this.requestId = this.route.snapshot.paramMap.get('requestId') ?? '';
    this.poll(true);
    this.timer = setInterval(() => this.poll(false), 5000);
  }

  private poll(first: boolean): void {
    this.svc.status(this.requestId).subscribe({
      next: r => {
        this.req.set(r);
        this.loading.set(false);
        if (r.status !== 'pending') this.stop();
      },
      error: e => {
        this.loading.set(false);
        if (first) this.toast.error(e?.error?.detail ?? 'Réservation introuvable.');
      },
    });
  }

  private stop(): void {
    if (this.timer) { clearInterval(this.timer); this.timer = null; }
  }

  ngOnDestroy(): void { this.stop(); }
}

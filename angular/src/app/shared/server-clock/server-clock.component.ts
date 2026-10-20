import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerTimeService } from '../../../_api/services/system/server-time.service';

/** Petite horloge affichant l'heure du serveur (#4), rafraîchie chaque seconde. */
@Component({
  selector: 'app-server-clock',
  standalone: true,
  imports: [CommonModule],
  template: `<span class="text-muted small d-inline-flex align-items-center" [title]="'Heure serveur' + (st.tz ? ' (' + st.tz + ')' : '')">
    <i class="ti ti-clock me-1"></i>{{ now | date: 'EEE d MMM HH:mm' : (st.utcOffset || undefined) }}
  </span>`,
})
export class ServerClockComponent implements OnInit, OnDestroy {
  st = inject(ServerTimeService);
  now: Date = this.st.now();
  private timer: any;

  ngOnInit(): void { this.timer = setInterval(() => (this.now = this.st.now()), 1000); }
  ngOnDestroy(): void { clearInterval(this.timer); }
}

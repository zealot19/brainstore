import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RoadmapService } from '../../../services/voyages-booking/roadmap.service';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { Roadmap } from '../../../models/voyages-roadmap.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-vb-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
  imports: [HasPermissionDirective, CommonModule, TranslocoModule],
})
export class VbRoadmapComponent implements OnInit {
  private toast = inject(ToastService);
  tripId = ''; data: Roadmap | null = null; loading = false; errorMsg = '';

  constructor(private svc: RoadmapService, private booking: BookingService,
              private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.tripId = this.route.snapshot.paramMap.get('tripId')!;
    this.load();
  }
  load(): void {
    this.loading = true; this.errorMsg = '';
    this.svc.get(this.tripId).subscribe({
      next: d => { this.data = d; this.loading = false; },
      error: e => { this.loading = false; this.errorMsg = e?.error?.detail ?? 'Impossible de charger la feuille de route.'; },
    });
  }
  get canBoard(): boolean { return this.data?.trip.status === 'pending' || this.data?.trip.status === 'departed'; }

  board(ticketId: string): void {
    this.booking.board(ticketId).subscribe({ next: () => this.load(), error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }
  boardAll(): void {
    this.svc.boardAll(this.tripId).subscribe({ next: () => this.load(), error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }
  printDoc(which: 'voyages' | 'colis'): void {
    // Impression côté navigateur : le CSS d'impression (styles.scss) masque le chrome et
    // n'imprime que le bordereau ciblé via la classe body.printing-<which>. Aucun moteur PDF serveur requis.
    const cls = `printing-${which}`;
    const cleanup = () => { document.body.classList.remove(cls); window.removeEventListener('afterprint', cleanup); };
    document.body.classList.add(cls);
    window.addEventListener('afterprint', cleanup);
    setTimeout(() => window.print(), 50);
  }
  back(): void { this.router.navigate(['/voyages/list']); }
}
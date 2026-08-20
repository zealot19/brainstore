import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RoadmapService } from '../../../services/voyages-booking/roadmap.service';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { Roadmap } from '../../../models/voyages-roadmap.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-vb-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
  imports: [HasPermissionDirective, CommonModule],
})
export class VbRoadmapComponent implements OnInit {
  tripId = ''; data: Roadmap | null = null; loading = false;

  constructor(private svc: RoadmapService, private booking: BookingService,
              private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.tripId = this.route.snapshot.paramMap.get('tripId')!;
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.get(this.tripId).subscribe({ next: d => { this.data = d; this.loading = false; }, error: () => this.loading = false });
  }
  get canBoard(): boolean { return this.data?.trip.status === 'pending' || this.data?.trip.status === 'departed'; }

  board(ticketId: string): void {
    this.booking.board(ticketId).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  boardAll(): void {
    this.svc.boardAll(this.tripId).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  printDoc(which: 'voyages' | 'colis'): void {
    // PDF serveur (WeasyPrint) : ouvre le bordereau dans un nouvel onglet pour visualiser/imprimer.
    this.svc.pdf(this.tripId, which).subscribe({
      next: blob => {
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
        setTimeout(() => URL.revokeObjectURL(url), 60000);
      },
      error: () => alert('Impossible de générer le PDF du bordereau.'),
    });
  }
  back(): void { this.router.navigate(['/voyages/list']); }
}

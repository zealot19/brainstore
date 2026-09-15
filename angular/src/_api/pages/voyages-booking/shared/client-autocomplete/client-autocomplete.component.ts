import { Component, Input, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { PassengerService } from '../../../../services/voyages-booking/passenger.service';
import { Passenger, PassengerSpec } from '../../../../models/voyages-booking.models';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-client-autocomplete',
  standalone: true,
  templateUrl: './client-autocomplete.component.html',
  imports: [CommonModule, FormsModule, TranslocoModule],
})
export class ClientAutocompleteComponent {
  @Input({ required: true }) row!: PassengerSpec;
  private passengerSvc = inject(PassengerService);
  private host = inject(ElementRef<HTMLElement>);
  results: Passenger[] = [];
  open = false;
  dropUp = false;   // ouvre le panneau vers le haut si peu de place en bas
  private q$ = new Subject<string>();

  constructor() {
    this.q$.pipe(
      debounceTime(250), distinctUntilChanged(),
      switchMap(q => this.passengerSvc.list(q)),
    ).subscribe(r => {
      this.results = (r ?? []).slice(0, 8);
      this.open = this.results.length > 0;
      if (this.open) {
        const rect = this.host.nativeElement.querySelector('input')?.getBoundingClientRect();
        this.dropUp = !!rect && (window.innerHeight - rect.bottom < 250);
      }
    });
  }

  onInput(value: string): void {
    this.row.name = value;
    this.row.id = undefined;          // typing after a pick unlinks the client
    if (value && value.trim().length >= 2) this.q$.next(value.trim());
    else { this.results = []; this.open = false; }
  }

  pick(p: Passenger): void {
    this.row.id = p.id;
    this.row.name = p.name;
    this.row.phone = p.phone;
    this.row.id_type = p.id_type;
    this.row.id_number = p.id_number;
    this.open = false;
  }

  hide(): void { setTimeout(() => (this.open = false), 150); }
}

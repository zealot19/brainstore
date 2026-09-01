import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { PassengerService } from '../../../../services/voyages-booking/passenger.service';
import { Passenger, PassengerSpec } from '../../../../models/voyages-booking.models';

@Component({
  selector: 'app-client-autocomplete',
  standalone: true,
  templateUrl: './client-autocomplete.component.html',
  imports: [CommonModule, FormsModule],
})
export class ClientAutocompleteComponent {
  @Input({ required: true }) row!: PassengerSpec;
  private passengerSvc = inject(PassengerService);
  results: Passenger[] = [];
  open = false;
  private q$ = new Subject<string>();

  constructor() {
    this.q$.pipe(
      debounceTime(250), distinctUntilChanged(),
      switchMap(q => this.passengerSvc.list(q)),
    ).subscribe(r => { this.results = (r ?? []).slice(0, 8); this.open = this.results.length > 0; });
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

import { Component, EventEmitter, Input, Output, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineSeat } from '../../../models/online-booking.models';

@Component({
  selector: 'app-seat-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seat-picker.component.html',
  styleUrls: ['./seat-picker.component.scss'],
})
export class SeatPickerComponent {
  private _seats = signal<OnlineSeat[]>([]);
  @Input() set seats(v: OnlineSeat[]) { this._seats.set(v ?? []); this.selected.set(''); }

  @Output() seatChange = new EventEmitter<string>();

  selected = signal<string>('');

  rows = computed<number[]>(() =>
    [...new Set(this._seats().map(s => s.row))].sort((a, b) => a - b));

  seatsInRow(row: number): OnlineSeat[] {
    return this._seats().filter(s => s.row === row).sort((a, b) => a.column - b.column);
  }

  isTaken(s: OnlineSeat): boolean { return s.status !== 'available'; }

  pick(s: OnlineSeat): void {
    if (this.isTaken(s)) return;
    const next = this.selected() === s.id ? '' : s.id;
    this.selected.set(next);
    this.seatChange.emit(next);
  }
}

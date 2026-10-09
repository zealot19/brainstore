import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';

export interface StopItem {
  service_point_id: string;
  service_point_name: string;
  distance_from_origin_km?: number | null;
}

/**
 * M10 — Sélecteur réutilisable d'arrêts intermédiaires : ajout multiple en une fois,
 * retrait, doublons autorisés, ordre d'ajout conservé. Paramétré par `options` + `stops`.
 */
@Component({
  selector: 'app-stops-picker',
  templateUrl: './stops-picker.component.html',
  imports: [CommonModule, FormsModule, TranslocoModule],
})
export class StopsPickerComponent {
  @Input() options: { id: string; name: string; code?: string }[] = [];
  @Input() stops: StopItem[] = [];
  @Input() disabled = false;
  @Output() stopsChange = new EventEmitter<StopItem[]>();

  picked: string[] = [];   // sélection multiple en attente d'ajout

  addPicked(): void {
    if (this.disabled || !this.picked.length) return;
    const added: StopItem[] = this.picked
      .map(id => this.options.find(o => o.id === id))
      .filter((o): o is { id: string; name: string; code?: string } => !!o)
      .map(o => ({ service_point_id: o.id, service_point_name: o.name, distance_from_origin_km: null }));
    this.stops = [...this.stops, ...added];   // doublons permis (pas de filtrage)
    this.picked = [];
    this.stopsChange.emit(this.stops);
  }

  removeAt(i: number): void {
    this.stops = this.stops.filter((_, idx) => idx !== i);
    this.stopsChange.emit(this.stops);
  }

  onDistance(i: number, value: unknown): void {
    const n = (value === '' || value === null || value === undefined) ? null : Number(value);
    this.stops = this.stops.map((s, idx) => idx === i ? { ...s, distance_from_origin_km: n } : s);
    this.stopsChange.emit(this.stops);
  }
}

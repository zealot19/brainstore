import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VOYAGES_CONFIG } from '../../config/api.config';
import { TimeSlot } from '../../models/voyages-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class TimeSlotService extends BaseConfigService<TimeSlot> {
  constructor(http: HttpClient) { super(http, VOYAGES_CONFIG.timeSlots, VOYAGES_CONFIG.timeSlot); }
}

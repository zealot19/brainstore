import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FLEET_CONFIG } from '../../config/api.config';
import { Period } from '../../models/fleet-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class PeriodService extends BaseConfigService<Period> {
  constructor(http: HttpClient) { super(http, FLEET_CONFIG.periods, FLEET_CONFIG.period); }
}

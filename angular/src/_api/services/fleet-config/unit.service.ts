import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FLEET_CONFIG } from '../../config/api.config';
import { Unit } from '../../models/fleet-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class UnitService extends BaseConfigService<Unit> {
  constructor(http: HttpClient) { super(http, FLEET_CONFIG.units, FLEET_CONFIG.unit); }
}

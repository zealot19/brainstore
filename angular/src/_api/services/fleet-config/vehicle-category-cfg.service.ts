import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FLEET_CONFIG } from '../../config/api.config';
import { VehicleCategoryCfg } from '../../models/fleet-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class VehicleCategoryCfgService extends BaseConfigService<VehicleCategoryCfg> {
  constructor(http: HttpClient) { super(http, FLEET_CONFIG.vehicleCategories, FLEET_CONFIG.vehicleCategory); }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FLEET_CONFIG } from '../../config/api.config';
import { FuelType } from '../../models/fleet-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class FuelTypeService extends BaseConfigService<FuelType> {
  constructor(http: HttpClient) { super(http, FLEET_CONFIG.fuelTypes, FLEET_CONFIG.fuelType); }
}

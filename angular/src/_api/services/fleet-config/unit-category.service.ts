import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FLEET_CONFIG } from '../../config/api.config';
import { UnitCategory } from '../../models/fleet-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class UnitCategoryService extends BaseConfigService<UnitCategory> {
  constructor(http: HttpClient) { super(http, FLEET_CONFIG.unitCategories, FLEET_CONFIG.unitCategory); }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FLEET_CONFIG } from '../../config/api.config';
import { InterventionType } from '../../models/fleet-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class InterventionTypeService extends BaseConfigService<InterventionType> {
  constructor(http: HttpClient) { super(http, FLEET_CONFIG.interventionTypes, FLEET_CONFIG.interventionType); }
}

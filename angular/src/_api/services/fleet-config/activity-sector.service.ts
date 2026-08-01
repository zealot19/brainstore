import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FLEET_CONFIG } from '../../config/api.config';
import { ActivitySector } from '../../models/fleet-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class ActivitySectorService extends BaseConfigService<ActivitySector> {
  constructor(http: HttpClient) { super(http, FLEET_CONFIG.activitySectors, FLEET_CONFIG.activitySector); }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VOYAGES_CONFIG } from '../../config/api.config';
import { ServicePoint } from '../../models/voyages-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class ServicePointService extends BaseConfigService<ServicePoint> {
  constructor(http: HttpClient) { super(http, VOYAGES_CONFIG.servicePoints, VOYAGES_CONFIG.servicePoint); }
}

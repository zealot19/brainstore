import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VOYAGES_CONFIG } from '../../config/api.config';
import { ServicePattern } from '../../models/voyages-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class ServicePatternService extends BaseConfigService<ServicePattern> {
  constructor(http: HttpClient) { super(http, VOYAGES_CONFIG.servicePatterns, VOYAGES_CONFIG.servicePattern); }
}

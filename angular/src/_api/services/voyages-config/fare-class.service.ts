import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VOYAGES_CONFIG } from '../../config/api.config';
import { FareClass } from '../../models/voyages-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class FareClassService extends BaseConfigService<FareClass> {
  constructor(http: HttpClient) { super(http, VOYAGES_CONFIG.fareClasses, VOYAGES_CONFIG.fareClass); }
}

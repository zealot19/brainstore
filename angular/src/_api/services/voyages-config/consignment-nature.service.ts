import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VOYAGES_CONFIG } from '../../config/api.config';
import { ConsignmentNature } from '../../models/voyages-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class ConsignmentNatureService extends BaseConfigService<ConsignmentNature> {
  constructor(http: HttpClient) { super(http, VOYAGES_CONFIG.consignmentNatures, VOYAGES_CONFIG.consignmentNature); }
}

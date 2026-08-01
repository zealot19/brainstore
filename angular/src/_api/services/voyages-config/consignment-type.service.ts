import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VOYAGES_CONFIG } from '../../config/api.config';
import { ConsignmentType } from '../../models/voyages-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class ConsignmentTypeService extends BaseConfigService<ConsignmentType> {
  constructor(http: HttpClient) { super(http, VOYAGES_CONFIG.consignmentTypes, VOYAGES_CONFIG.consignmentType); }
}

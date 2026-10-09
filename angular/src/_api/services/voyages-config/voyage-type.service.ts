import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VOYAGES_CONFIG } from '../../config/api.config';
import { VoyageType } from '../../models/voyages-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class VoyageTypeService extends BaseConfigService<VoyageType> {
  constructor(http: HttpClient) { super(http, VOYAGES_CONFIG.voyageTypes, VOYAGES_CONFIG.voyageType); }
}

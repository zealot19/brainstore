import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FLEET_CONFIG } from '../../config/api.config';
import { DocumentType } from '../../models/fleet-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class DocumentTypeService extends BaseConfigService<DocumentType> {
  constructor(http: HttpClient) { super(http, FLEET_CONFIG.documentTypes, FLEET_CONFIG.documentType); }
}

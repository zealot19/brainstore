import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VOYAGES_CONFIG } from '../../config/api.config';
import { VehicleSeatingAssignment } from '../../models/voyages-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class VehicleSeatingAssignmentService extends BaseConfigService<VehicleSeatingAssignment> {
  constructor(http: HttpClient) { super(http, VOYAGES_CONFIG.vehicleSeatingAssignments, VOYAGES_CONFIG.vehicleSeatingAssignment); }
}

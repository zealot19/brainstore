import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SYSTEM } from '../../config/api.config';
import { Package, PackageForm } from '../../models/system.models';

@Injectable({ providedIn: 'root' })
export class PackageService {

  constructor(private http: HttpClient) {}

  list(): Observable<Package[]> {
    return this.http.get<Package[]>(SYSTEM.packagesAdmin);
  }

  create(data: PackageForm): Observable<Package> {
    return this.http.post<Package>(SYSTEM.packagesAdmin, data);
  }

  update(id: string, data: Partial<PackageForm>): Observable<Package> {
    return this.http.patch<Package>(SYSTEM.packageAdmin(id), data);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(SYSTEM.packageAdmin(id));
  }
}

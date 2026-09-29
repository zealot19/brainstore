import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

export interface AppPackage {
  code: string;
  label: string;
  icon: string;
  modules: string[];
}

const KEY = 'activePackage';

@Injectable({ providedIn: 'root' })
export class PackageService {
  activePackage = signal<AppPackage | null>(this.read());

  constructor(private http: HttpClient) {}

  loadMyPackages(): Observable<AppPackage[]> {
    return this.http
      .get<any>(`${environment.apiUrl}/system/my-packages/`)
      .pipe(map(r => r.data ?? r));
  }

  setActive(pkg: AppPackage): void {
    localStorage.setItem(KEY, JSON.stringify(pkg));
    this.activePackage.set(pkg);
  }

  clear(): void {
    localStorage.removeItem(KEY);
    this.activePackage.set(null);
  }

  private read(): AppPackage | null {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as AppPackage) : null;
  }
}

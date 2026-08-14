import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, catchError, of } from 'rxjs';
import { AUTH } from '../../config/api.config';

const STORAGE_KEY = 'drp_permissions';

interface PermissionsResponse {
  // Le corps est déjà désemballé par apiUnwrapInterceptor ({success,data} -> data).
  permissions: string[];
  is_superuser: boolean;
}

@Injectable({ providedIn: 'root' })
export class PermissionService {

  private readonly http = inject(HttpClient);

  private _codes$ = new BehaviorSubject<Set<string>>(this._loadFromStorage());
  private _superuser$ = new BehaviorSubject<boolean>(false);

  /** Observable du set complet de codes (rafraîchi après login) */
  readonly permissions$ = this._codes$.asObservable();

  // ── Requête serveur ─────────────────────────────────────────────────────────

  /**
   * Appeler après un login réussi (ou au bootstrap si token présent).
   * Stocke le résultat dans localStorage pour une résolution immédiate.
   */
  load(): Observable<PermissionsResponse> {
    return this.http.get<PermissionsResponse>(AUTH.mePermissions).pipe(
      tap(res => {
        const { permissions, is_superuser } = res;
        this._superuser$.next(is_superuser ?? false);
        const codes = new Set(permissions ?? []);
        this._codes$.next(codes);
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...codes]));
      }),
      catchError(() => of({} as PermissionsResponse))
    );
  }

  /** Vider les permissions à la déconnexion */
  clear(): void {
    this._codes$.next(new Set());
    this._superuser$.next(false);
    localStorage.removeItem(STORAGE_KEY);
  }

  // ── Vérification synchrone ───────────────────────────────────────────────────

  /** Retourne true si l'utilisateur possède le code (ou est superuser / wildcard *) */
  has(code: string): boolean {
    const codes = this._codes$.getValue();
    return codes.has('*') || this._superuser$.getValue() || codes.has(code);
  }

  /** Retourne true si l'utilisateur possède AU MOINS un des codes */
  hasAny(...codes: string[]): boolean {
    return codes.some(c => this.has(c));
  }

  /** Retourne true si l'utilisateur possède TOUS les codes */
  hasAll(...codes: string[]): boolean {
    return codes.every(c => this.has(c));
  }

  // ── Lecture interne ─────────────────────────────────────────────────────────

  private _loadFromStorage(): Set<string> {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
    } catch {
      return new Set();
    }
  }
}

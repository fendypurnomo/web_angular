import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/shared/services';

@Injectable({ providedIn: 'root' })

export class NotLoggedInGuard implements CanActivate {
  constructor(
    private router: Router,
    private storage: StorageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  private checkLogin(url: string): boolean {
    if (this.storage.getLoggedIn !== true) { return true; }

    this.router.navigate(['/dashboard']);
    return false;
  }
}
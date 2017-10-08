import { CanActivate, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthService) {}

  canActivate() {
    return this.auth.isAuthenticated();
  }

  canLoad() {
    return this.auth.isAuthenticated();
  }
}

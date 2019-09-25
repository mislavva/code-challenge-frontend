import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { logOut } from '../store/actions/auth.actions';

@Injectable()
export class AuthGuard implements CanActivateChild {
  constructor(private store: Store<AppState>) {}

  canActivateChild() {
    const token = localStorage.getItem('CC_token');
    if (!token) {
      this.store.dispatch(logOut());
      return false;
    }
    return true;
  }
}

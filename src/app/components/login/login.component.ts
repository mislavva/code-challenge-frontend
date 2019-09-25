import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logIn } from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public spinner$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.spinner$ = this.store.select(state => state.auth.authenticating);
  }

  public login({ email, password }) {
    this.store.dispatch(logIn({ email, password }));
  }
}

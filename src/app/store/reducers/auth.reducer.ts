import { createReducer, on, Action } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export interface AuthState {
  authenticating: boolean;
  authenticated: boolean;
}

export const authStateKey = 'auth';

const initialState: AuthState = {
  authenticating: false,
  authenticated: false,
};

const _authReducer = createReducer( // tslint:disable-line
  initialState,

  on(
    AuthActions.logIn,
    state => ({
      ...state,
      authenticating: true,
      authenticated: false,
    })
  ),

  on(
    AuthActions.logInSuccess,
    state => ({
      ...state,
      authenticating: false,
      authenticated: true,
    })
  ),

  on(
    AuthActions.logInFailure,
    AuthActions.logOut,
    state => ({
      ...state,
      authenticating: false,
      authenticated: false,
    }),
  )
);

export function authReducer(state: AuthState, action: Action) {
  return _authReducer(state, action);
}

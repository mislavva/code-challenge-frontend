import { createAction, props } from '@ngrx/store';

export const logIn = createAction(
  '[Auth] Log In',
  props<{ email: string; password: string; }>(),
);

export const logInSuccess = createAction(
  '[Auth] Log In Success',
  props<{ token: string; }>(),
);

export const logInFailure = createAction(
  '[Auth] Log In Failure',
  props<{ message: string }>(),
);

export const logOut = createAction('[Auth] Log Out');

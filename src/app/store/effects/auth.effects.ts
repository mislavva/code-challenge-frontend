import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from '../actions/auth.actions';
import { exhaustMap, map, catchError, tap, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ErrorSnackbarComponent } from 'src/app/modules/snackbar/components/error-snackbar/error-snackbar.component';
import { LoginService } from 'src/app/services/login.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  logIn$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.logIn),
      delay(1000),
      exhaustMap(
        ({ email, password }) => this.loginService.logIn({ email, password }).pipe(
          map(res => AuthActions.logInSuccess({ token: res.token })),
          catchError(err => of(AuthActions.logInFailure({ message: err.error.message })))
        )
      )
    )
  );

  logInSuccess$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.logInSuccess),
      tap(({ token }) => {
        localStorage.setItem('CC_token', token);
        this.router.navigate(['encoder']);
      })
    ),
    { dispatch: false }
  );

  logInFailure$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.logInFailure),
      tap(({ message }) => {
        this.snackbar.openFromComponent(ErrorSnackbarComponent, {
          data: message,
          verticalPosition: 'top',
          panelClass: 'error-snackbar'
        });
      })
    ),
    { dispatch: false }
  );

  logOut$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.logOut),
      tap(() => {
        this.router.navigate(['/login']);
        localStorage.removeItem('CC_token');
      })
    ),
    { dispatch: false }
  );
}

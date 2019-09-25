import { Injectable } from '@angular/core';
import * as EncoderActions from '../actions/encoder.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material';
import { exhaustMap, map, catchError, tap, delay } from 'rxjs/operators';
import { EncoderService } from 'src/app/modules/encoder/services/encoder.service';
import { of } from 'rxjs';
import { ErrorSnackbarComponent } from 'src/app/modules/snackbar/components/error-snackbar/error-snackbar.component';

@Injectable()
export class EncoderEffects {
  constructor(
    private actions$: Actions,
    private snackbar: MatSnackBar,
    private encoderService: EncoderService
  ) { }

  encodeText$ = createEffect(
    () => this.actions$.pipe(
      ofType(EncoderActions.encodeText),
      delay(1000),
      exhaustMap(
        ({ text }) => this.encoderService.encodeText(text).pipe(
          map(({ encoded }) => EncoderActions.encodeTextSuccess({ encoded })),
          catchError(error => of(EncoderActions.encodeTextFailure({ message: error.error.message })))
        )
      )
    )
  );

  encodeTextFailure$ = createEffect(
    () => this.actions$.pipe(
      ofType(EncoderActions.encodeTextFailure),
      tap(({ message }) => {
        this.snackbar.openFromComponent(ErrorSnackbarComponent, { data: message });
      })
    ), { dispatch: false }
  );
}

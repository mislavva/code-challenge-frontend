import { createAction, props } from '@ngrx/store';

export const encodeText = createAction(
  '[Encoder] Encode Text',
  props<{ text: string; }>(),
);

export const encodeTextSuccess = createAction(
  '[Encoder] Encode Text Success',
  props<{ encoded: string; }>(),
);

export const encodeTextFailure = createAction(
  '[Encoder] Encode Text Failure',
  props<{ message: string }>(),
);

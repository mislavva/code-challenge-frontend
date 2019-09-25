import { createReducer, on, Action, createSelector } from '@ngrx/store';
import * as EncoderActions from '../actions/encoder.actions';

export const encoderFeatureKey = 'encoder';

export interface EncoderFeatureState {
  encodedText: string;
  encoding: boolean;
  encoded: boolean;
}

const initialState: EncoderFeatureState = {
  encodedText: '',
  encoding: false,
  encoded: false,
};

const _encoderReducer = createReducer( // tslint:disable-line
  initialState,

  on(
    EncoderActions.encodeText,
    state => ({ ...state, encoding: true, encoded: false, encodedText: '' })
  ),

  on(
    EncoderActions.encodeTextSuccess,
    (state, { encoded }) => ({ ...state, encoding: false, encoded: true, encodedText: encoded })
  ),

  on(
    EncoderActions.encodeTextFailure,
    state => ({ ...state, encoding: false, encoded: false })
  ),

);

export function encoderReducer(state: EncoderFeatureState, action: Action) {
  return _encoderReducer(state, action);
}

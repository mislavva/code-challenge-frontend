import { AuthState, authStateKey, authReducer } from './reducers/auth.reducer';
import { EncoderFeatureState } from './reducers/encoder.reducer';

export interface AppState {
  auth: AuthState;
  encoder: EncoderFeatureState;
}

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EncoderComponent } from './components/encoder/encoder.component';
import { EncoderService } from './services/encoder.service';
import { EncoderRoutingModule } from './encoder-routing.module';
import { StoreModule } from '@ngrx/store';
import { encoderFeatureKey, encoderReducer } from 'src/app/store/reducers/encoder.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EncoderEffects } from 'src/app/store/effects/encoder.effects';

import {
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { CommonModule } from '@angular/common';

const MAT_MODULES = [
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [
    EncoderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EncoderRoutingModule,
    StoreModule.forFeature(encoderFeatureKey, encoderReducer),
    EffectsModule.forFeature([ EncoderEffects ]),
    MAT_MODULES
  ],
  providers: [EncoderService]
})
export class EncoderModule { }

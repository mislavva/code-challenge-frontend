import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSnackBarModule,
  MatIconModule,
  MatButtonModule,
} from '@angular/material';

import { ErrorSnackbarComponent } from './components/error-snackbar/error-snackbar.component';

const MAT_MODULES = [
  MatSnackBarModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    ErrorSnackbarComponent
  ],
  imports: [
    CommonModule,
    MAT_MODULES
  ],
  exports: [
    ErrorSnackbarComponent
  ],
  entryComponents: [
    ErrorSnackbarComponent
  ]
})
export class SnackbarModule { }

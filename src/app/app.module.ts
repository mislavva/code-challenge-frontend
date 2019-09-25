import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './interceptors/http.request.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { AuthEffects } from './store/effects/auth.effects';
import { LoginService } from './services/login.service';

import {
  MatProgressBarModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
} from '@angular/material';
import { authStateKey, authReducer } from './store/reducers/auth.reducer';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SnackbarModule } from './modules/snackbar/snackbar.module';
import { ErrorSnackbarComponent } from './modules/snackbar/components/error-snackbar/error-snackbar.component';

const MAT_MODULES = [
  MatProgressBarModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SnackbarModule,
    StoreModule.forRoot({ [authStateKey]: authReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
    EffectsModule.forRoot([ AuthEffects ]),
    MAT_MODULES,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    AuthGuard,
    LoginService
  ],
  entryComponents: [
    ErrorSnackbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

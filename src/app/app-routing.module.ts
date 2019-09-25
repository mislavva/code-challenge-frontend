import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      animation: 'LoginPage'
    }
  },
  {
    path: 'encoder',
    pathMatch: 'full',
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./modules/encoder/encoder.module').then(m => m.EncoderModule),
    data: {
      animation: 'EncoderPage'
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      animation: 'NotFoundPage'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

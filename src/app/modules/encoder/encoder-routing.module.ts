import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncoderComponent } from './components/encoder/encoder.component';

const routes: Routes = [
  {
    path: '',
    component: EncoderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncoderRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrigonometriaPage } from './trigonometria.page';

const routes: Routes = [
  {
    path: '',
    component: TrigonometriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrigonometriaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AritmeticaPage } from './aritmetica.page';

const routes: Routes = [
  {
    path: '',
    component: AritmeticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AritmeticaPageRoutingModule {}

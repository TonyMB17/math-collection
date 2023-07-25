import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FisicaPageRoutingModule } from './fisica-routing.module';

import { FisicaPage } from './fisica.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FisicaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FisicaPage]
})
export class FisicaPageModule {}

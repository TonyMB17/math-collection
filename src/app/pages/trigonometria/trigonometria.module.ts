import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrigonometriaPageRoutingModule } from './trigonometria-routing.module';

import { TrigonometriaPage } from './trigonometria.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrigonometriaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TrigonometriaPage]
})
export class TrigonometriaPageModule {}

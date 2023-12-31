import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AritmeticaPageRoutingModule } from './aritmetica-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { AritmeticaPage } from './aritmetica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AritmeticaPageRoutingModule
  ],
  declarations: [AritmeticaPage]
})
export class AritmeticaPageModule {}

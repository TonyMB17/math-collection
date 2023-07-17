import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlgebraPageRoutingModule } from './algebra-routing.module';

import { AlgebraPage } from './algebra.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlgebraPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [AlgebraPage],
})
export class AlgebraPageModule {}

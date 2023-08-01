import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalMenuComponent } from './components/principal-menu/principal-menu.component'
import { ModalComponent } from './components/modal/modal.component';
import { NgxSpinnerModule } from 'ngx-spinner'; // Importa ngx-spinner
import { SplashScreenComponent } from './splash-screen/splash-screen.component'; // Asegúrate de importar correctamente el componente

//para

@NgModule({
  declarations: [AppComponent, PrincipalMenuComponent, ModalComponent, SplashScreenComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgxSpinnerModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  showSplashScreen: boolean = true;
  showRouterOutlet: boolean = false;

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.showSpinner();

    // Esperar 5 segundos (5000 milisegundos) antes de ocultar el spinner y mostrar el contenido de la página principal
    setTimeout(() => {
      this.hideSpinner();
    }, 5000);
  }

  showSpinner() {
    this.spinner.show();
  }

  hideSpinner() {
    this.spinner.hide();
    this.showSplashScreen = false;
    this.showRouterOutlet = true;
  }
}

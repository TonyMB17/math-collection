import { Component, Injectable, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.page.html',
  styleUrls: ['./estadistica.page.scss'],
})

@Injectable(
  {
    providedIn: 'root'
  })
  
export class EstadisticaPage implements OnInit {

  public formulas = [
    { //¿Qué es la Estadística?
      title: '¿Qué es la Estadística?', 
      data: [
        { 
          title: 'Estadística', 
          src: "assets/estadistica/estadistica 30.jpg", 
          description: ""
        },
        { 
          title: 'Clases de Estadística', 
          src: "assets/estadistica/estadistica 31.jpg", 
          description: ""
        },
        { 
          title: 'Población y Muestra', 
          src: "assets/estadistica/estadistica 32.jpg", 
          description: ""
        },
        { 
          title: 'Variables Estadísticas', 
          src: "assets/estadistica/estadistica 33.jpg", 
          description: ""
        },
        { 
          title: 'Presentación de los datos mediante tablas o cuadros', 
          src: "assets/estadistica/estadistica 34.jpg", 
          description: ""
        },
        { 
          title: 'Tamaño de la muestra (n):', 
          src: "assets/estadistica/estadistica 35.jpg", 
          description: ""
        },
        { 
          title: 'Alcance (A):', 
          src: "assets/estadistica/estadistica 36.jpg", 
          description: ""
        },
        { 
          title: 'Rango (R):', 
          src: "assets/estadistica/estadistica 37.jpg", 
          description: ""
        },
        { 
          title: 'Frecuencia Absoluta (fi):', 
          src: "assets/estadistica/estadistica 38.jpg", 
          description: ""
        },
        { 
          title: 'Mediana (Med):', 
          src: "assets/estadistica/estadistica 39.jpg", 
          description: ""
        },
        { 
          title: 'Mediana para Datos Agrupados por Intervalos de Clase', 
          src: "assets/estadistica/estadistica 40.jpg", 
          description: ""
        },
        { 
          title: 'Moda (Z ó mod):', 
          src: "assets/estadistica/estadistica 41.jpg", 
          description: ""
        },
        { 
          title: 'Moda para Datos Agrupados por Intervalos de Clase', 
          src: "assets/estadistica/estadistica 42.jpg", 
          description: ""
        },

      ] 
    },
    { //Distribuciones de Frecuencias
      title: 'Distribuciones de Frecuencias', 
      data: [
        { 
          title: 'Frecuencia Relativa', 
          src: "assets/estadistica/estadistica 1.jpg", 
          description: ""
        },
        { 
          title: 'Medidas de Tendencia Central', 
          src: "assets/estadistica/estadistica 2.jpg", 
          description: "ni → frecuencias absoluta; N = n1 + n2 + n3 + … + ni;	N → Número de casos de la población"
        },
      ] 
    },
    { //Medidas de Tendencia Central
      title: 'Medidas de Tendencia Central', 
      data: [
        { 
          title: 'Media Aritmética', 
          src: "assets/estadistica/estadistica 3.jpg", 
          description: ""
        },
        { 
          title: 'Media Aritmética datos agrupados', 
          src: "assets/estadistica/estadistica 4.jpg", 
          description: ""
        },
        { 
          title: 'Media estadística Ponderada', 
          src: "assets/estadistica/estadistica 5.jpg", 
          description: ""
        },
        { 
          title: 'Cálculo de las Marcas de Clase', 
          src: "assets/estadistica/estadistica 6.jpg", 
          description: ""
        },
        { 
          title: 'Mediana', 
          src: "assets/estadistica/estadistica 7.jpg", 
          description: ""
        },
        { 
          title: 'Cuartiles', 
          src: "assets/estadistica/estadistica 8.jpg", 
          description: ""
        },
        { 
          title: 'Deciles', 
          src: "assets/estadistica/estadistica 9.jpg", 
          description: ""
        },
        { 
          title: 'Centiles', 
          src: "assets/estadistica/estadistica 10.jpg", 
          description: ""
        },
        { 
          title: 'Moda', 
          src: "assets/estadistica/estadistica 11.jpg", 
          description: ""
        },
        { 
          title: 'Cálculo de Percentiles', 
          src: "assets/estadistica/estadistica 12.jpg", 
          description: ""
        },
        { 
          title: 'Rango Intercuántico', 
          src: "assets/estadistica/estadistica 13.jpg", 
          description: ""
        },
        { 
          title: 'Rango Semi-Intercuantílico', 
          src: "assets/estadistica/estadistica 14.jpg", 
          description: ""
        },
      ] 
    },
    { //Medidas de Dispersión
      title: 'Medidas de Dispersión', 
      data: [
        { 
          title: 'Varianza', 
          src: "assets/estadistica/estadistica 15.jpg", 
          description: ""
        },
        { 
          title: 'Desviación Estándar (o Típica)', 
          src: "assets/estadistica/estadistica 16.jpg", 
          description: ""
        },
        { 
          title: 'Varianza para datos agrupados', 
          src: "assets/estadistica/estadistica 17.jpg", 
          description: ""
        },
        { 
          title: 'Desviación Estándar (o Típica) para datos agrupados', 
          src: "assets/estadistica/estadistica 18.jpg", 
          description: ""
        },
        { 
          title: 'Coeficiente de Variación ', 
          src: "assets/estadistica/estadistica 19.jpg", 
          description: "para comparar el grado de dispersión entre varias distribuciones"
        },
      ] 
    },
    { //Teoría y cálculo de Probabilidades
      title: 'Teoría y cálculo de Probabilidades', 
      data: [
        { 
          title: 'Probabilidad a priori y frecuencia relativa', 
          src: "assets/estadistica/estadistica 20.jpg", 
          description: ""
        },
        { 
          title: 'Suceso Complementario', 
          src: "assets/estadistica/estadistica 21.jpg", 
          description: ""
        },
        { 
          title: '', 
          src: "assets/estadistica/estadistica 22.jpg", 
          description: ""
        },
        { 
          title: 'Permutación', 
          src: "assets/estadistica/estadistica 23.jpg", 
          description: ""
        },
        { 
          title: 'Variaciones', 
          src: "assets/estadistica/estadistica 24.jpg", 
          description: ""
        },
        { 
          title: 'Combinaciones', 
          src: "assets/estadistica/estadistica 25.jpg", 
          description: ""
        },
        { 
          title: 'Tipos de Sucesos', 
          src: "assets/estadistica/estadistica 26.jpg", 
          description: ""
        },
        { 
          title: 'Regla de la Adicción: Unión de Sucesos (simultáneos)', 
          src: "assets/estadistica/estadistica 27.jpg", 
          description: ""
        },
        { 
          title: 'Regla de la Multiplicación: Sucesos Condicionados o Intersección de Sucesos (secuenciales)', 
          src: "assets/estadistica/estadistica 28.jpg", 
          description: ""
        },
        { 
          title: 'Regla de Laplace', 
          src: "assets/estadistica/estadistica 29.jpg", 
          description: "La probabilidad de un suceso es igual a su cardinal entre el cardinal del espacio muestral en el que se inscribe"
        },
      ] 
    },
  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    
  }

  async openModal(key: number) {
    this.playClickSound();
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps:
      {
        'titulo': this.formulas[key].title,
        'datos': this.formulas[key].data
      }
    });
    modal.present();
  }

  playClickSound(): void {
    const audio = new Audio();
    audio.src = '../../../assets/sounds/Click.mp3'; // Asegúrate de ajustar la ruta del archivo de audio según su ubicación en tu proyecto
    audio.load();
    audio.play();
  }

  getFormula(){
    return this.formulas;
  }

}

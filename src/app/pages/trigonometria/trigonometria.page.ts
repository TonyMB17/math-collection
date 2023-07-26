import { Component, Injectable, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-trigonometria',
  templateUrl: './trigonometria.page.html',
  styleUrls: ['./trigonometria.page.scss'],
})

@Injectable(
  {
    providedIn: 'root'
  })
  
export class TrigonometriaPage implements OnInit {

  public formulas = [
    { //ÁNGULO TRIGONOMÉTRICO Y LONGITUD DE ARCO
      title: 'ÁNGULO TRIGONOMÉTRICO Y LONGITUD DE ARCO', 
      data: [
        { 
          title: 'Fórmulas de Conversión:', 
          src: "assets/trigonometria/trigonometria 1.jpg", 
          description: "Se observa que el cociente de su medida con la medida del ángulo de una vuelta es una constante."
        },
        { 
          title: '', 
          src: "assets/trigonometria/trigonometria 2.jpg", 
          description: "Aprovechando esta característica, ahora tomaremos un ángulo cualquiera:"
        },
        { 
          title: 'Longitud de Arco en un Sector Circular', 
          src: "assets/trigonometria/trigonometria 3.jpg", 
          description: "Un sector circular es una parte de un círculo donde un vértice es el centro del círculo y los otros dos son puntos de la circunferencia. Entre sus tres elementos se cumple las siguientes relaciones:"
        },
        { 
          title: 'Superficie de un Sector Circular', 
          src: "assets/trigonometria/trigonometria 4.jpg", 
          description: ""
        },
        { 
          title: '', 
          src: "assets/trigonometria/trigonometria 5.jpg", 
          description: "Si interceptamos dos sectores circulares, se forma una figura que por su semejanza con el trapecio recibe en nombre de «Trapecio Circular«. La superficie de esta figura se puede calcular del siguiente modo:"
        },
        { 
          title: 'Poleas en Contacto', 
          src: "assets/trigonometria/trigonometria 6.jpg", 
          description: "longitudes recorridas iguales"
        },
        { 
          title: 'Poleas unidas por una faja transportadora', 
          src: "assets/trigonometria/trigonometria 7.jpg", 
          description: "Longitudes recorridas iguales"
        },
        { 
          title: 'Poleas unidas a través de un eje', 
          src: "assets/trigonometria/trigonometria 8.jpg", 
          description: "ángulos girados iguales"
        },
        { 
          title: 'Rueda en un plano horizontal', 
          src: "assets/trigonometria/trigonometria 9.jpg", 
          description: ""
        },
      ] 
    },
    { //RAZONES TRIGONOMÉTRICAS DE UN ÁNGULO AGUDO
      title: 'RAZONES TRIGONOMÉTRICAS DE UN ÁNGULO AGUDO', 
      data: [
        { 
          title: 'Razón Trigonométrica de un Ángulo Agudo', 
          src: "assets/trigonometria/Razon 1.jpg", 
          description: ""
        },
        { 
          title: '', 
          src: "assets/trigonometria/Razon 2.jpg", 
          description: ""
        },
        { 
          title: 'Razones Trigonométricas Recíprocas', 
          src: "assets/trigonometria/Razon 3.jpg", 
          description: "Las razones recíprocas son aquellas cuyo valor es el inverso aritmético de la otra, por ejemplo:  y  son razones que cumplen esta condición. En las razones trigonométricas encontramos algunas parejas de razones recíprocas, a saber:"
        },
        { 
          title: 'El producto de dos razones recíprocas es siempre la unidad', 
          src: "assets/trigonometria/Razon 4.jpg", 
          description: ""
        },
        { 
          title: 'Razones Trigonométricas de Ángulos Complementarios', 
          src: "assets/trigonometria/Razon 5.jpg", 
          description: "Al definir las razones trigonométricas, hemos considerado a uno de los ángulos agudos, pero también se puede tomar las razones trigonométricas del otro ángulo o sea de su complemento y como se trata de los mismos lados encontramos algunas igualdades:"
        },
        { 
          title: 'Propiedad Fundamental de las Razones Trigonométricas', 
          src: "assets/trigonometria/Razon 6.jpg", 
          description: "A continuación vamos a establecer de que dependen las razones trigonométricas. Sea APO = θ  un ángulo agudo, en la recta OP tome los puntos cualesquiera B y D trácense BC y DE perpendiculares a OA. Tome también un punto F en OP y trácese la perpendicular FG."
        },
        { 
          title: 'Razones trigonométricas de 30º y 60º', 
          src: "assets/trigonometria/Razon 7.jpg", 
          description: "Construimos un triángulo equilátero, en el cual trazamos la altura y formamos dos triángulos rectángulos de 30º y 60º. Si uno de los lados del triángulo equilátero es «L», los lados del triángulo rectángulo son L/2 y L√3/2 , de donde deducimos la propiedad:"
        },
        { 
          title: '', 
          src: "assets/trigonometria/Razon 8.jpg", 
          description: "Pero para tomar el valor de las razones trigonométricas de 30º y 60º, es más cómodo dar un valor a «L», pues las razones no dependen de la longitud de los lados. Así para , tenemos:"
        },
        { 
          title: 'Razones trigonométricas de 45º', 
          src: "assets/trigonometria/Razon 9.jpg", 
          description: "Construimos un triángulo rectángulo isósceles y a uno de los catetos le llamamos «L», luego la  hipotenusa se calcula por Pitágoras y su valor es «L√2». Para obtener las razones trigonométricas de 45º, hacemos L=1 y tenemos:"
        },
        { 
          title: 'Razones Trigonométricas de 37º y 53º', 
          src: "assets/trigonometria/Razon 10.jpg", 
          description: ""
        },
      ] 
    },
    { //RAZONES TRIGONOMÉTRICAS DE ÁNGULOS DE CUALQUIER MAGNITUD
      title: 'RAZONES TRIGONOMÉTRICAS DE ÁNGULOS DE CUALQUIER MAGNITUD', 
      data: [
        { 
          title: 'Sistema de Coordenadas Rectangulares.', 
          src: "assets/trigonometria/coordenadas 1.jpg", 
          description: "Es el sistema que consta de dos rectas dirigidas (rectas numéricas) las cuales se cortan perpendicularmente en el número cero. Estas dos rectas numéricas se denominan ejes coordenados."
        },
        { 
          title: 'Punto medio de un segmento', 
          src: "assets/trigonometria/coordenadas 2.jpg", 
          description: "El punto medio de un segmento del cual se conocen las coordenadas de sus extremos se calcula de la siguiente manera:"
        },
        { 
          title: 'Distancia entre dos puntos', 
          src: "assets/trigonometria/coordenadas 3.jpg", 
          description: "La distancia entre dos puntos A y B se calcula se la siguiente manera:"
        },
        { 
          title: 'Cálculo del radio vector (R)', 
          src: "assets/trigonometria/coordenadas 4.jpg", 
          description: "La distancia de un punto P(x;y) al origen de coordenadas se denomina radio vector el cual siempre será positivo y se calcula de la siguiente manera:"
        },
        { 
          title: 'Ángulos en Posición Normal', 
          src: "assets/trigonometria/coordenadas 5.jpg", 
          description: ""
        },
        { 
          title: '', 
          src: "assets/trigonometria/coordenadas 6.jpg", 
          description: "Se denominan ángulos en posición normal, a alguien cuyo lado inicial coincide con el semieje positivo de las abscisas, su vértice con el origen de coordenadas y su lado final se encuentra en cualquier parte del plano (cuadrantes o sobre los ejes coordenados). A estos ángulos también se les denomina ángulos en posición estándar. A continuación se muestra algunos ejemplos de ángulos en posición normal."
        },
        { 
          title: 'Ángulos Cuadrantales', 
          src: "assets/trigonometria/coordenadas 7.jpg", 
          description: ""
        },
        { 
          title: 'Los principales ángulos cuadrantales son:', 
          src: "assets/trigonometria/coordenadas 8.jpg", 
          description: ""
        },
        { 
          title: 'Razones Trigonométricas de los Ángulos en Posición Normal', 
          src: "assets/trigonometria/coordenadas 9.jpg", 
          description: ""
        },
        { 
          title: '', 
          src: "assets/trigonometria/coordenadas 10.jpg", 
          description: "Se definen las razones trigonométricas de «α» de la siguiente manera:"
        },
        { 
          title: 'Signos de las Razones Trigonométricas', 
          src: "assets/trigonometria/coordenadas 11.jpg", 
          description: ""
        },
        { 
          title: 'Signos de las Razones Trigonométricas', 
          src: "assets/trigonometria/coordenadas 12.jpg", 
          description: ""
        },
        { 
          title: 'Razones Trigonométricas de los Ángulos Cuadrantales', 
          src: "assets/trigonometria/coordenadas 13.jpg", 
          description: ""
        },
      ] 
    },
    { //IDENTIDADES TRIGONOMÉTRICAS
      title: 'IDENTIDADES TRIGONOMÉTRICAS', 
      data: [
        { 
          title: 'Identidades Reciprocas:', 
          src: "assets/trigonometria/Identidades 1.jpg", 
          description: ""
        },
        { 
          title: 'Identidades Reciprocas:', 
          src: "assets/trigonometria/Identidades 2.jpg", 
          description: ""
        },
        { 
          title: 'Identidades por Cociente:', 
          src: "assets/trigonometria/Identidades 3.jpg", 
          description: "Utilizando el gráfico anterior:"
        },
        { 
          title: 'Identidades Pitagóricas:', 
          src: "assets/trigonometria/Identidades 4.jpg", 
          description: "Aplicando el teorema de PITÁGORAS en la figura anterior, se obtiene:"
        },
        { 
          title: '', 
          src: "assets/trigonometria/Identidades 5.jpg", 
          description: "Dividiendo entre: Cos² x la identidad (6), obtenemos:"
        },
        { 
          title: '', 
          src: "assets/trigonometria/Identidades 6.jpg", 
          description: "usando las identidades (4) y (2):"
        },
        { 
          title: '', 
          src: "assets/trigonometria/Identidades 7.jpg", 
          description: "Del mismo modo, usando las identidades (6), (5) y (1)"
        },
        { 
          title: 'Identidades Trigonométricas Auxiliares', 
          src: "assets/trigonometria/Identidades 8.jpg", 
          description: "Las identidades trigonométricas auxiliares más importantes son:"
        },
        { 
          title: 'Demostraciones de Identidades Trigonométricas', 
          src: "assets/trigonometria/Identidades 9.jpg", 
          description: "Para demostrar identidades trigonométricas no hay una técnica ni un procedimiento especial. Las siguientes sugerencias ayudan a realizar dichas demostraciones."
        },
        { 
          title: '', 
          src: "assets/trigonometria/Identidades 10.jpg", 
          description: "De las identidades trigonométricas fundamentales se pueden deducir otras así:"
        },
      ] 
    },
    { //TRANSFORMACIONES TRIGONOMÉTRICAS
      title: 'TRANSFORMACIONES TRIGONOMÉTRICAS', 
      data: [
        { 
          title: 'Transformación de una Suma y Diferencia de Senos en un Producto', 
          src: "assets/trigonometria/Transformacion 1.jpg", 
          description: "Nuevamente debemos indicar un error frecuente cuando se tiene que transformar a producto."
        },
        { 
          title: '', 
          src: "assets/trigonometria/Transformacion 1.jpg", 
          description: ""
        },
        { 
          title: '', 
          src: "assets/trigonometria/Transformacion 2.jpg", 
          description: "Para factorizar una suma o diferencia de senos, se recurrirá a las fórmulas de la suma y diferencia de ángulos."
        },
        { 
          title: '', 
          src: "assets/trigonometria/Transformacion 3.jpg", 
          description: "Sumando y restando (1) y (2), tenemos:"
        },
        { 
          title: '', 
          src: "assets/trigonometria/Transformacion 4.jpg", 
          description: "Haciendo un cambio de variable:"
        },
        { 
          title: '', 
          src: "assets/trigonometria/Transformacion 5.jpg", 
          description: "Luego reemplazando tenemos:"
        },
        { 
          title: 'Transformación de Suma y Diferencia a de Cosenos en un Producto', 
          src: "assets/trigonometria/Transformacion 6.jpg", 
          description: "Al igual que las fórmulas anteriores emplearemos las relaciones de la suma y diferencia de ángulos:"
        },
        { 
          title: '', 
          src: "assets/trigonometria/Transformacion 7.jpg", 
          description: "Sumando y restando (3) y (4) tenemos:"
        },
        { 
          title: '', 
          src: "assets/trigonometria/Transformacion 8.jpg", 
          description: "Haciendo un cambio de variable:"
        },
        { 
          title: '', 
          src: "assets/trigonometria/Transformacion 9.jpg", 
          description: "Reemplazando tenemos:"
        },
        { 
          title: 'Casos Especiales de Factorización Trigonométrica', 
          src: "assets/trigonometria/Transformacion 10.jpg", 
          description: "Además de factorizar la suma o diferencia de senos y cosenos, podemos encontrar otras expresiones que se pueden transformar a producto aplicando las relaciones anteriores. Analicemos algunos de ellos:"
        },
        { 
          title: 'Transformación de un Producto de Senos y Cosenos en una Suma o Diferencia', 
          src: "assets/trigonometria/Transformacion 11.jpg", 
          description: "Para transformar un producto de senos y cosenos en una suma o diferencia, tenemos que recurrir a las fórmulas de seno y coseno de la suma y diferencia de ángulos."
        },
        { 
          title: '', 
          src: "assets/trigonometria/Transformacion 12.jpg", 
          description: "Sumando (1) y (2)"
        },
        { 
          title: 'Propiedades', 
          src: "assets/trigonometria/Transformacion 13.jpg", 
          description: "Existen muchas relaciones trigonométricas que nos permiten pasar de un producto de funciones a suma o diferencia, pero, las más notables son:"
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

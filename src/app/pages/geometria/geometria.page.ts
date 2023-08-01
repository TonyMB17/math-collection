import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-geometria',
  templateUrl: './geometria.page.html',
  styleUrls: ['./geometria.page.scss'],
})

@Injectable(
  {
    providedIn: 'root'
  })
  
export class GeometriaPage implements OnInit {

  public formulas = [
    { //SEGMENTOS
      title: 'SEGMENTOS', 
      data: [
        { 
          title: 'Formula 1', 
          src: "assets/geometria/segmentos 1.jpg", 
          description: "1.- Si M es punto medio de AB y N es punto medio de CD"
        },
        { 
          title: 'Formula 2', 
          src: "assets/geometria/segmentos 2.jpg", 
          description: "2.- Si M es punto medio de AB y N es punto medio de AC"
        },
        { 
          title: 'Formula 3', 
          src: "assets/geometria/segmentos 3.jpg", 
          description: "3.- Si M es punto medio de AC"
        },
        { 
          title: 'Formula 4', 
          src: "assets/geometria/segmentos 4.jpg", 
          description: "4.- Si M es punto medio de BC"
        },
        { 
          title: 'Formula 5', 
          src: "assets/geometria/segmentos 5.jpg", 
          description: "5.- Si M es punto medio de BC"
        },
        { 
          title: 'Formula 6', 
          src: "assets/geometria/segmentos 6.jpg", 
          description: "6.- Teorema de Descartes"
        },
        { 
          title: 'Formula 7', 
          src: "assets/geometria/segmentos 7.jpg", 
          description: "7.- Teorema de Newton: “O” es punto medio de BD"
        },
        { 
          title: 'Formula 8', 
          src: "assets/geometria/segmentos 8.jpg", 
          description: "8.- Teorema:"
        },
        { 
          title: 'Formula 9', 
          src: "assets/geometria/segmentos 9.jpg", 
          description: "9.- Teorema:"
        },
        { 
          title: 'Formula 10', 
          src: "assets/geometria/segmentos 10.jpg", 
          description: "10.- Teorema:"
        },
        { 
          title: 'Formula 11', 
          src: "assets/geometria/segmentos 11.jpg", 
          description: "11.- Teorema:"
        },
      ] 
    },
    { //LOS ÁNGULOS
      title: 'LOS ÁNGULOS', 
      data: [
        { 
          title: 'Postulado de la Medida del Ángulo Geométrico', 
          src: "assets/geometria/Angulo 1.jpg", 
          description: "“La medida de un ángulo geométrico es un número real positivo comprendido entre 0 y 180”."
        },
        { 
          title: 'Postulado de la Adición de las Medidas de Ángulos Geométricos', 
          src: "assets/geometria/Angulo 2.jpg", 
          description: "Si se toma un punto “P”, interior al ángulo AOB, entonces se tendrá:"
        },
        { 
          title: 'Congruencia de Ángulos', 
          src: "assets/geometria/Angulo 3.jpg", 
          description: "Dos ángulos son congruentes si tienen la misma medida, así si el ∡AOB tiene la misma medida que el ∡COD, es decir m∡AOB = M(∡COD); entonces estos dos ángulos son congruentes."
        },
        { 
          title: 'Bisectriz de un Angulo', 
          src: "assets/geometria/Angulo 4.jpg", 
          description: "Se llama bisectriz de un ángulo a un RAYO INTERIOR, el mismo que partiendo del vértice, divide al ángulo dado en dos ángulos congruentes."
        },
        {
          src: "assets/geometria/Angulo titulo.png",
        },
        { 
          title: 'Por su Medida:', 
          src: "assets/geometria/Angulo 5.jpg", 
          description: "a) Angulo Agudo: Es aquel ángulo cuya medida es mayor que 0 pero menor que 90."
        },
        { 
          title: 'Por su Medida:', 
          src: "assets/geometria/Angulo 6.jpg", 
          description: "b) Angulo Recto: Es aquel ángulo que mide 90."
        },
        { 
          title: 'Por su Medida:', 
          src: "assets/geometria/Angulo 7.jpg", 
          description: "c) Angulo Obtuso: Es aquel ángulo cuya medida es mayor que 90 pero menor que 180."
        },
        { 
          title: 'Por la Posición de sus Lados:', 
          src: "assets/geometria/Angulo 8.jpg", 
          description: "a) Ángulos Adyacentes: Son dos ángulos que tienen un vértice común, un lado común y están situados en diferentes semiplanos respecto del lado común. Los ángulos AOB y BOC son adyacentes"
        },
        { 
          title: 'Observación:', 
          src: "assets/geometria/Angulo 9.jpg", 
          description: "Los ángulos AOC y BOC no son ángulos adyacentes."
        },
        { 
          title: 'Por la Posición de sus Lados:', 
          src: "assets/geometria/Angulo 10.jpg", 
          description: "b) Ángulos Consecutivos: Son tres ó más ángulos aquellos que están situados uno a continuación del otro teniendo todos éstos el vértice común y un lado común. Los ángulos AOB, BOC, COD y DOE son consecutivos"
        },
        { 
          title: 'Por la Posición de sus Lados:', 
          src: "assets/geometria/Angulo 11.jpg", 
          description: "c) Ángulos Opuestos por el Vértice: Son dos ángulos con vértice común y medidas iguales cuyos lados forman líneas rectas dos a dos."
        },
        { 
          title: 'Por la Suma de sus Medidas:', 
          src: "assets/geometria/Angulo 12.jpg", 
          description: "a) Ángulos Complementarios: Son dos  ángulos cuya suma de sus medidas es igual a 90."
        },
        { 
          title: 'Por la Suma de sus Medidas:', 
          src: "assets/geometria/Angulo 13.jpg", 
          description: "b) Ángulos Suplementarios: Son dos ángulos cuya suma de sus medidas es igual a 180."
        },
        { 
          title: 'Propiedades:', 
          src: "assets/geometria/Angulo 14.jpg", 
          description: "Si C es Complemento y S es Suplemento, entonces tendremos:"
        },
      ] 
    },
    { //ÁNGULOS FORMADOS POR RECTAS
      title: 'ÁNGULOS FORMADOS POR RECTAS', 
      data: [
        { 
          title: '', 
          src: "assets/geometria/AngulosFormadosRectas 1.jpg", 
          description: "1.- Si , L1 // L2 se cumple:"
        },
        { 
          title: '', 
          src: "assets/geometria/AngulosFormadosRectas 2.jpg", 
          description: "2.- Si , L1 // L2 se cumple:"
        },
        { 
          title: '', 
          src: "assets/geometria/AngulosFormadosRectas 3.jpg", 
          description: "3.- Si , L1 // L2 se cumple:"
        },
        { 
          title: '', 
          src: "assets/geometria/AngulosFormadosRectas 4.jpg", 
          description: "1- Ángulos de Lados Paralelos"
        },
        { 
          title: '', 
          src: "assets/geometria/AngulosFormadosRectas 5.jpg", 
          description: "2- Ángulos de Lados Paralelos"
        },
        { 
          title: '', 
          src: "assets/geometria/AngulosFormadosRectas 6.jpg", 
          description: "3- Ángulos de Lados Paralelos"
        },
        { 
          title: '', 
          src: "assets/geometria/AngulosFormadosRectas 7.jpg", 
          description: "1- Ángulos de Lados Perpendiculares"
        },
        { 
          title: '', 
          src: "assets/geometria/AngulosFormadosRectas 8.jpg", 
          description: "2- Ángulos de Lados Perpendiculares"
        },
        { 
          title: '', 
          src: "assets/geometria/AngulosFormadosRectas 9.jpg", 
          description: "3- Ángulos de Lados Perpendiculares"
        },
      ] 
    },
    { //LOS TRIÁNGULOS
      title: 'LOS TRIÁNGULOS', 
      data: [
        { 
          title: '¿Qué son los Triángulos?', 
          src: "assets/geometria/Triangulo 1.jpg",
          description: "Es la figura geométrica formada al unir tres puntos no colineales mediante segmentos de recta."
        },
        { 
          title: 'Perímetro de un Triángulo', 
          src: "assets/geometria/Triangulo 2.jpg",
          description: "El perímetro de un triángulo, representado por , viene a ser la suma de las longitudes de sus tres lados."
        },
        {
          src: "assets/geometria/Triangulo subti.jpg", 
        },
        { 
          title: 'I.- Por la medida de sus ángulos', 
          src: "assets/geometria/Triangulo 3.jpg", 
          description: ""
        },
        { 
          title: 'I.- Por la medida de sus ángulos', 
          src: "assets/geometria/Triangulo 4.jpg", 
          description: ""
        },
        { 
          title: 'b) Triángulo Oblicuángulo:', 
          src: "assets/geometria/Triangulo 5.jpg", 
          description: ""
        },
        { 
          title: 'b) Triángulo Oblicuángulo:', 
          src: "assets/geometria/Triangulo 6.jpg", 
          description: ""
        },
        { 
          title: 'II.- Por la longitud de sus Lados', 
          src: "assets/geometria/Triangulo 7.jpg", 
          description: ""
        },
        { 
          title: 'II.- Por la longitud de sus Lados', 
          src: "assets/geometria/Triangulo 8.jpg", 
          description: ""
        },
        { 
          title: 'II.- Por la longitud de sus Lados', 
          src: "assets/geometria/Triangulo 9.jpg", 
          description: ""
        },
        { 
          title: 'Teoremas Fundamentales en Todo Triángulo', 
          src: "assets/geometria/Triangulo 1.jpg", 
          description: "Teorema 1: En todo triángulo la suma de las medidas de sus ángulos internos es igual a 180º."
        },
        { 
          title: 'Teoremas Fundamentales en Todo Triángulo', 
          src: "assets/geometria/Triangulo 11.jpg", 
          description: "Teorema 2: En todo triángulo la medida de un ángulo exterior es igual a la suma de las medidas de dos ángulos del triángulo no adyacente a él."
        },
        { 
          title: 'Teoremas Fundamentales en Todo Triángulo', 
          src: "assets/geometria/Triangulo 12.jpg", 
          description: "Teorema 3: En todo triángulo la suma de las medidas de sus ángulos externos, uno por cada vértice, es igual a 360º."
        },
        { 
          title: 'Teoremas Fundamentales en Todo Triángulo', 
          src: "assets/geometria/Triangulo 13.jpg", 
          description: "Teorema 4 (Ley de Correspondencia): En un mismo triángulo, a mayor lado se opone mayor ángulo y viceversa."
        },
        { 
          title: 'Teoremas Fundamentales en Todo Triángulo', 
          src: "assets/geometria/Triangulo 14.jpg", 
          description: "Teorema 5: En un mismo triángulo, a lados congruentes se oponen ángulos congruentes y viceversa."
        },
        { 
          title: 'Teoremas Fundamentales en Todo Triángulo', 
          src: "assets/geometria/Triangulo 15.jpg", 
          description: "Teorema 6 (Condición de existencia de un triángulo): En todo triángulo la longitud de uno de sus lados está comprendido entre la suma y la diferencia de las longitudes de los otros dos lados."
        },
        { 
          title: 'Ceviana', 
          src: "assets/geometria/Triangulo 16.jpg", 
          description: "Es un segmento que une un vértice con cualquier punto del lado opuesto o de su prolongación. BP: Ceviana Interior relativa a AC ; BQ: Ceviana Exterior relativa a AC"
        },
        { 
          title: 'Mediana', 
          src: "assets/geometria/Triangulo 17.jpg", 
          description: "Es una ceviana que une un vértice con el punto medio del lado opuesto. BM : Mediana relativa a AC"
        },
        { 
          title: 'Bisectriz Interior', 
          src: "assets/geometria/Triangulo 18.jpg", 
          description: "Es una ceviana interior que biseca al ángulo interior. BD : bisectriz interior relativa a AC"
        },
        { 
          title: 'Bisectriz Exterior', 
          src: "assets/geometria/Triangulo 19.jpg", 
          description: "Es una ceviana exterior que biseca al ángulo exterior. BF : Bisectriz exterior relativa a AC"
        },
        { 
          title: 'Mediatriz', 
          src: "assets/geometria/Triangulo 20.jpg", 
          description: "La mediatriz de un segmento, es la recta perpendicular en su punto medio. Si consideramos un triángulo, la mediatriz de un lado es la recta coplanar al triángulo y perpendicular en su punto medio."
        },
        { //Propiedades Adicionales
          title: 'Propiedades Adicionales', 
          src: "assets/geometria/Triangulo 21.jpg", 
          description: "Propiedad 1"
        },
        { 
          title: 'Propiedades Adicionales', 
          src: "assets/geometria/Triangulo 22.jpg", 
          description: "Propiedad 2"
        },
        { 
          title: 'Propiedades Adicionales', 
          src: "assets/geometria/Triangulo 23.jpg", 
          description: "Propiedad 3"
        },
        { 
          title: 'Propiedades Adicionales', 
          src: "assets/geometria/Triangulo 24.jpg", 
          description: "Propiedad 4"
        },
        { 
          title: 'Propiedades Adicionales', 
          src: "assets/geometria/Triangulo 25.jpg", 
          description: "Propiedad 5"
        },
        { 
          title: 'Propiedades Adicionales', 
          src: "assets/geometria/Triangulo 26.jpg", 
          description: "Propiedad 6"
        },
        { 
          title: 'Propiedades Adicionales', 
          src: "assets/geometria/Triangulo 27.jpg", 
          description: "Propiedad 7"
        },
        { 
          title: 'Propiedades Adicionales', 
          src: "assets/geometria/Triangulo 28.jpg", 
          description: "Propiedad 8"
        },
        { 
          title: 'Propiedades Adicionales', 
          src: "assets/geometria/Triangulo 29.jpg", 
          description: "Propiedad 9"
        },
        { 
          title: 'Propiedades Adicionales', 
          src: "assets/geometria/Triangulo 30.jpg", 
          description: "Propiedad 10"
        },
        { 
          title: 'Propiedades Adicionales', 
          src: "assets/geometria/Triangulo 31.jpg", 
          description: "Propiedad 11"
        },
      ] 
    },
    { //CONGRUENCIA DE TRIÁNGULOS
      title: 'CONGRUENCIA DE TRIÁNGULOS', 
      data: [
        { 
          title: '¿Qué es la Congruencia de Triángulos?', 
          src: "assets/geometria/Congruencias 1.jpg",
          description: "Dos triángulos son congruentes si sus ángulos son respectivamente de igual medida y además sus lados correspondientes de igual longitud (ángulos y lados homólogos)."
        },
        { 
          title: 'Teorema de los Puntos Medios (Base  Media):', 
          src: "assets/geometria/Congruencias 2.jpg",
          description: "El segmento que une los puntos medios de los lados de un triángulo es paralelo al tercer lado y mide la mitad de la longitud del lado al cual es paralelo."
        },
        { 
          title: 'Teorema de la Bisectriz:', 
          src: "assets/geometria/Congruencias 3.jpg",
          description: "Cualquier punto de la bisectriz de un ángulo equidista de los lados del ángulo."
        },
        { 
          title: 'Teorema de la Mediatriz:', 
          src: "assets/geometria/Congruencias 4.jpg",
          description: "Cualquier punto de la mediatriz de un segmento equidista de los extremos del segmento."
        },
        { 
          title: 'Teorema de la Mediana Relativa a la Hipotenusa:', 
          src: "assets/geometria/Congruencias 5.jpg",
          description: "En todo triángulo rectángulo se cumple que la longitud de la mediana relativa a la hipotenusa es la mitad de la longitud de la hipotenusa."
        },
        { 
          title: 'Propiedades en los Triángulos Isósceles', 
          src: "assets/geometria/Congruencias 6.jpg",
          description: "1.- En todo triángulo isósceles, si por un punto de su base se trazan perpendiculares a los lados congruentes, la suma de las longitudes de estas perpendiculares es igual a una de las alturas congruentes."
        },
        { 
          title: 'Propiedades en los Triángulos Isósceles', 
          src: "assets/geometria/Congruencias 7.jpg",
          description: "2.- En todo triángulo isósceles, por un punto que se encuentra sobre la prolongación de su base se trazan perpendiculares a los lados congruentes, la diferencia de las longitudes de estas perpendiculares es igual a una de las alturas congruentes."
        },
        { 
          title: 'Propiedades en los Triángulos Isósceles', 
          src: "assets/geometria/Congruencias 8.jpg",
          description: "3.- Si por un punto que se encuentra sobre la base de un triángulo isósceles se trazan rectas paralelas a los lados congruentes, la suma de las longitudes de estas paralelas es igual a la longitud de los lados congruentes."
        },
        { 
          title: 'Propiedades en los Triángulos Isósceles', 
          src: "assets/geometria/Congruencias 9.jpg",
          description: "4.- Si por un punto que se encuentra sobre la prolongación de la base de un triángulo isósceles se trazan paralelas a los lados congruentes, la diferencia de las longitudes de estas paralelas es igual a la longitud de los lados congruentes."
        },
        { 
          title: 'Propiedades en los Triángulos Equiláteros', 
          src: "assets/geometria/Congruencias 10.jpg",
          description: "1.- En todo triángulo equilátero, si por un punto cualquiera de su interior se trazan perpendiculares a los tres lados, la suma de las longitudes de estas perpendiculares es igual a la longitud de una de las alturas del triángulo."
        },
        { 
          title: 'Propiedades en los Triángulos Equiláteros', 
          src: "assets/geometria/Congruencias 11.jpg",
          description: "2.- Si por un punto exterior a un triángulo equilátero relativo a uno de sus lados, se trazan perpendiculares a los tres lados, la longitud de la altura del triángulo es igual a la suma de las longitudes de las perpendiculares extremas menos la longitud de la perpendicular intermedia."
        },
        { 
          title: 'Propiedades en los Triángulos Equiláteros', 
          src: "assets/geometria/Congruencias 12.jpg",
          description: "3.- Si por un punto que se encuentra en el interior de un triángulo equilátero, se trazan paralelas a los tres lados, la longitud de uno de los lados del triángulo es igual a la suma de las longitudes de las paralelas."
        },
        { 
          title: 'Propiedades en los Triángulos Equiláteros', 
          src: "assets/geometria/Congruencias 13.jpg",
          description: "4.- Si por un punto exterior a un triángulo equilátero, relativo a uno de sus lados, se trazan paralelas a sus tres lados, la longitud de uno de los lados del triángulo es igual a la suma de las longitudes de las dos paralelas extremas menos la longitud de la paralela intermedia."
        },
        { 
          title: 'Triángulos Rectángulos Notables', 
          src: "assets/geometria/Congruencias 14.jpg",
          description: "Son un grupo de triángulos rectángulos donde son conocidas las medidas angulares y a partir de ellas es posible determinar las proporciones de sus lados y viceversa."
        },
        { 
          title: 'Propiedades Especiales', 
          src: "assets/geometria/Congruencias 15.jpg",
          description: "Propiedade 1"
        },
        { 
          title: 'Propiedades Especiales', 
          src: "assets/geometria/Congruencias 16.jpg",
          description: "Propiedade 2"
        },
        { 
          title: 'Propiedades Especiales', 
          src: "assets/geometria/Congruencias 17.jpg",
          description: "Propiedade 3"
        },
        { 
          title: 'Propiedades Especiales', 
          src: "assets/geometria/Congruencias 18.jpg",
          description: "Propiedade 4"
        },
        { 
          title: 'Propiedades Especiales', 
          src: "assets/geometria/Congruencias 19.jpg",
          description: "Propiedade 5"
        },
      ] 
    },
    { //POLÍGONOS
      title: 'POLÍGONOS', 
      data: [
        { 
          title: 'Número de Diagonales Trazadas desde un solo vértice:', 
          src: "assets/geometria/Poligonos 1.jpg",
          description: "En todo polígono de “n” lados, desde un vértice se pueden trazar:"
        },
        { 
          title: 'Número Total de Diagonales:', 
          src: "assets/geometria/Poligonos 2.jpg",
          description: "En todo polígono de “n” lados, el número total de diagonales que se puede trazar es:"
        },
        { 
          title: 'Número de Diagonales trazadas desde “V” Vértices consecutivos:', 
          src: "assets/geometria/Poligonos 3.jpg",
          description: "Para calcular el número de diagonales que se pueden trazar desde los “v” primeros vértices consecutivos, se utiliza la siguiente expresión."
        },
        { 
          title: 'Diagonales Medias trazadas desde el punto medio de uno de los lados del Polígono:', 
          src: "assets/geometria/Poligonos 4.jpg",
          description: "En un polígono de “n” lados, el número de diagonales medias trazadas des el punto medio de uno de sus lados, se obtiene así:"
        },
        { 
          title: 'Número de Diagonales Medias:', 
          src: "assets/geometria/Poligonos 5.jpg",
          description: "En un polígono de “n” lados, el número total de Diagonales Medias se obtiene con la siguiente expresión:"
        },
        { 
          title: 'Número de Diagonales Medias trazadas desde los “k” primeros lados:', 
          src: "assets/geometria/Poligonos 6.jpg",
          description: "En un polígono de “n” lados, la expresión que se usa para calcular el número de diagonales medias trazadas desde los “k” primeros lados es:"
        },
        { 
          title: 'Suma de las medidas de los ángulos interiores:', 
          src: "assets/geometria/Poligonos 7.jpg",
          description: ""
        },
        { 
          title: 'Medida de un Ángulo interior:', 
          src: "assets/geometria/Poligonos 8.jpg",
          description: ""
        },
        { 
          title: 'Suma de las medidas de los Ángulos Exteriores:', 
          src: "assets/geometria/Poligonos 9.jpg",
          description: ""
        },
        { 
          title: 'Medida de un Ángulo Exterior:', 
          src: "assets/geometria/Poligonos 10.jpg",
          description: ""
        },
        { 
          title: 'Suma de las Medidas de los Ángulos Centrales:', 
          src: "assets/geometria/Poligonos 11.jpg",
          description: ""
        },
        { 
          title: 'Medida de un Ángulo Central:', 
          src: "assets/geometria/Poligonos 12.jpg",
          description: ""
        },
      ] 
    },
    { //CUADRILÁTEROS
      title: 'CUADRILÁTEROS', 
      data: [
        { 
          title: 'En los Trapezoides:', 
          src: "assets/geometria/cuadrilatero 1.jpg",
          description: "1.- Si"
        },
        { 
          title: 'En los Trapezoides:', 
          src: "assets/geometria/cuadrilatero 2.jpg",
          description: "2.- Si"
        },
        { 
          title: 'En los Trapezoides:', 
          src: "assets/geometria/cuadrilatero 3.jpg",
          description: "3.- Si"
        },
        { 
          title: 'En los Trapezoides:', 
          src: "assets/geometria/cuadrilatero 4.jpg",
          description: "4.- Si"
        },
        { 
          title: 'En los Trapezoides:', 
          src: "assets/geometria/cuadrilatero 5.jpg",
          description: "5.- Si"
        },
        { 
          title: 'En los Trapezoides:', 
          src: "assets/geometria/cuadrilatero 6.jpg",
          description: "6.- Si 2p=a+b+c+d"
        },
        { 
          title: 'En los Trapezoides:', 
          src: "assets/geometria/cuadrilatero 7.jpg",
          description: "7.- Si 2p=a+b+c+d"
        },
        { 
          title: 'En los Trapezoides:', 
          src: "assets/geometria/cuadrilatero 8.jpg",
          description: "8.- Si:"
        },
        { 
          title: 'En los Trapecios:', 
          src: "assets/geometria/cuadrilatero 9.jpg",
          description: "1.- Si ER // PU y además α + θ = 90°"
        },
        { 
          title: 'En los Trapecios:', 
          src: "assets/geometria/cuadrilatero 10.jpg",
          description: "2.- Si ER // PU"
        },
        { 
          title: 'En los Trapecios:', 
          src: "assets/geometria/cuadrilatero 11.jpg",
          description: "3.- Si ER // PU"
        },
        { 
          title: 'En los Trapecios:', 
          src: "assets/geometria/cuadrilatero 12.jpg",
          description: "4.- Si ER // PU"
        },
        { 
          title: 'En los Trapecios:', 
          src: "assets/geometria/cuadrilatero 13.jpg",
          description: "5.- Si ER // PU"
        },
        { 
          title: 'En los Trapecios:', 
          src: "assets/geometria/cuadrilatero 14.jpg",
          description: "6.- Si ER // PU"
        },
        { 
          title: 'En los Trapecios:', 
          src: "assets/geometria/cuadrilatero 15.jpg",
          description: "7.- Si ER // PU"
        },
        { 
          title: 'En los Paralelogramos:', 
          src: "assets/geometria/cuadrilatero 16.jpg",
          description: "1.-  Si FI // PE"
        },
        { 
          title: 'En los Paralelogramos:', 
          src: "assets/geometria/cuadrilatero 17.jpg",
          description: "2.- Si"
        },
        { 
          title: 'En los Paralelogramos:', 
          src: "assets/geometria/cuadrilatero 18.jpg",
          description: "3.- Si FIPE → Paralelogramo"
        },
        { 
          title: 'En los Paralelogramos:', 
          src: "assets/geometria/cuadrilatero 19.jpg",
          description: "4.– Si FIPE → Paralelogramo"
        },
        { 
          title: 'En los Paralelogramos:', 
          src: "assets/geometria/cuadrilatero 20.jpg",
          description: "5.- Si FIPE → Paralelogramo"
        },
        { 
          title: 'En los Paralelogramos:', 
          src: "assets/geometria/cuadrilatero 21.jpg",
          description: "6.- Si FIPE → Paralelogramo"
        },
        { 
          title: 'En los Paralelogramos:', 
          src: "assets/geometria/cuadrilatero 22.jpg",
          description: "7.- Si FIPE → Paralelogramo"
        },
        { 
          title: 'En los Paralelogramos:', 
          src: "assets/geometria/cuadrilatero 23.jpg",
          description: "8.– Si FIPE → Paralelogramo"
        },
        { 
          title: 'En los Paralelogramos:', 
          src: "assets/geometria/cuadrilatero 24.jpg",
          description: "9.– Si FIPE → Paralelogramo"
        },
        { 
          title: 'En los Paralelogramos:', 
          src: "assets/geometria/cuadrilatero 25.jpg",
          description: "10.- Si FIPE → Paralelogramo"
        },
        { 
          title: 'En los Paralelogramos:', 
          src: "assets/geometria/cuadrilatero 26.jpg",
          description: "11.- Si FIPE → Paralelogramo"
        },
        { 
          title: 'Teorema de los Cuadriláteros', 
          src: "assets/geometria/cuadrilatero 27.jpg",
          description: "“En todo cuadrilátero, si se unen los puntos medios de sus lados, se forma un paralelogramo cuyo perímetro es igual a la suma de las longitudes de las diagonales de dicho cuadrilátero”."
        },
      ] 
    },
    { //CIRCUNFERENCIA
      title: 'CIRCUNFERENCIA', 
      data: [
        { 
          title: 'Longitud de la Circunferencia', 
          src: "assets/geometria/Circunferencia 1.jpg",
          description: ""
        },
        { 
          title: 'Elementos de la Circunferencia', 
          src: "assets/geometria/Circunferencia 2.jpg",
          description: ""
        },
        { 
          title: 'Ángulo Central', 
          src: "assets/geometria/Circunferencia 3.jpg",
          description: "Es aquel ángulo cuyo vértice se encuentra en el centro de la circunferencia."
        },
        { 
          title: 'Ángulo Inscrito', 
          src: "assets/geometria/Circunferencia 4.jpg",
          description: "Es el ángulo determinado por dos cuerdas que tienen un extremo común."
        },
        { 
          title: 'Ángulo Semi inscrito', 
          src: "assets/geometria/Circunferencia 5.jpg",
          description: "Es el ángulo determinado por una cuerda y una tangente."
        },
        { 
          title: 'Ángulo Exinscrito', 
          src: "assets/geometria/Circunferencia 6.jpg",
          description: "Es el ángulo determinado por una cuerda y la prolongación de otra, con la cual tiene un extremo común."
        },
        { 
          title: 'Ángulo Interior', 
          src: "assets/geometria/Circunferencia 7.jpg",
          description: "Es el ángulo determinado por dos cuerdas secantes en el interior del a circunferencia."
        },
        { 
          title: 'Ángulo Exterior', 
          src: "assets/geometria/Circunferencia 8.jpg",
          description: "– Angulo Exterior formado por dos Secantes:"
        },
        { 
          title: 'Ángulo Exterior', 
          src: "assets/geometria/Circunferencia 9.jpg",
          description: "– Ángulo Exterior formado por una Tangente y una Secante:"
        },
        { 
          title: 'Ángulo Exterior', 
          src: "assets/geometria/Circunferencia 10.jpg",
          description: "– Ángulo Exterior formado por dos Tangentes (Ángulo Circunscrito):"
        },
        { 
          title: 'Forma Práctica', 
          src: "assets/geometria/Circunferencia 11.jpg",
          description: ""
        },
        { 
          title: 'Propiedades Fundamentales en la Circunferencia', 
          src: "assets/geometria/Circunferencia 12.jpg",
          description: "1.- Si AB es diámetro:"
        },
        { 
          title: 'Propiedades Fundamentales en la Circunferencia', 
          src: "assets/geometria/Circunferencia 13.jpg",
          description: "2.- Si T es punto de Tangencia:"
        },
        { 
          title: 'Propiedades Fundamentales en la Circunferencia', 
          src: "assets/geometria/Circunferencia 14.jpg",
          description: "3.-  Si PA y PB son tangentes:"
        },
        { 
          title: 'Propiedades Fundamentales en la Circunferencia', 
          src: "assets/geometria/Circunferencia 15.jpg",
          description: "4.- Si AB ⊥ OM"
        },
        { 
          title: 'Propiedades Fundamentales en la Circunferencia', 
          src: "assets/geometria/Circunferencia 16.jpg",
          description: "5.- Si AB=CD:"
        },
        { 
          title: 'Propiedades Fundamentales en la Circunferencia', 
          src: "assets/geometria/Circunferencia 17.jpg",
          description: "6.- Si AB // CD:"
        },
        { 
          title: 'Propiedades Fundamentales en la Circunferencia', 
          src: "assets/geometria/Circunferencia 18.jpg",
          description: "7.- Si A y B son puntos de tangencia:"
        },
        { 
          title: 'Propiedades Fundamentales en la Circunferencia', 
          src: "assets/geometria/Circunferencia 19.jpg",
          description: "8.- Si A, B y C son puntos de tangencia:"
        },
        { 
          title: 'Propiedades Fundamentales en la Circunferencia', 
          src: "assets/geometria/Circunferencia 20.jpg",
          description: "9.- Si A, B y C son puntos de tangencia:"
        },
        { 
          title: 'Propiedades Fundamentales en la Circunferencia', 
          src: "assets/geometria/Circunferencia 21.jpg",
          description: "10.- AB y CD : Tangentes Exteriores MN y PQ : Tangentes Interiores"
        },
        { 
          title: 'Teorema de Pithot', 
          src: "assets/geometria/Circunferencia 22.jpg",
          description: "En todo cuadrilátero circunscrito a una circunferencia se cumple que la suma de las longitudes de dos lados opuestos es igual a la suma de las longitudes de los otros dos lados."
        },
        { 
          title: 'Cuadrilátero Exinscrito a una Circunferencia', 
          src: "assets/geometria/Circunferencia 23.jpg",
          description: "Es aquel cuadrilátero en el cual las prolongaciones de sus cuatro lados son tangentes a una misma circunferencia."
        },
        { 
          title: 'Teorema de Steiner', 
          src: "assets/geometria/Circunferencia 24.jpg",
          description: "En todo cuadrilátero exinscrito a una circunferencia, se cumple que la diferencia de las longitudes de dos lados opuestos es igual a la diferencia de las longitudes de los otros dos lados."
        },
        { 
          title: 'Propiedades:', 
          src: "assets/geometria/Circunferencia 25.jpg",
          description: "1- Propiedad: Si “p” es el semiperímetro del Δ RQN"
        },
        { 
          title: 'Propiedades:', 
          src: "assets/geometria/Circunferencia 26.jpg",
          description: "2- Propiedad: Si “p” es el semiperímetro del Δ QRN"
        },
        { 
          title: 'Propiedades:', 
          src: "assets/geometria/Circunferencia 27.jpg",
          description: "3- Propiedad: Si F y P son puntos de tangencia:"
        },
        { 
          title: 'Teorema de Poncelet', 
          src: "assets/geometria/Circunferencia 28.jpg",
          description: "En todo triángulo rectángulo se cumple que la suma de las longitudes de sus catetos es igual a la suma de la longitud de su hipotenusa y la longitud del diámetro de la circunferencia inscrita en dicho triángulo."
        },
        { 
          title: 'Propiedades de Poncelet:', 
          src: "assets/geometria/Circunferencia 29.jpg",
          description: "1.- En todo triángulo rectángulo, la suma de las longitudes de los exradios relativos a los catetos es igual a la longitud de la hipotenusa."
        },
        { 
          title: 'Propiedades de Poncelet:', 
          src: "assets/geometria/Circunferencia 30.jpg",
          description: "2.- En todo triángulo rectángulo, la suma de las longitudes del irradio y el exradio relativo a un cateto es igual a la longitud de dicho cateto."
        },
        { 
          title: 'Propiedades de Poncelet:', 
          src: "assets/geometria/Circunferencia 31.jpg",
          description: "3.- En todo triángulo rectángulo, la suma de las longitudes del irradio y de los exradios relativos a los catetos es igual a la longitud del exradio relativo a la hipotenusa."
        },
        { 
          title: 'Circunferencias Exteriores:', 
          src: "assets/geometria/Circunferencia 32.jpg",
          description: "Son aquellas cuya distancia entre los centros es mayor que la suma de las longitudes de los radios."
        },
        { 
          title: 'Circunferencias Tangentes Exteriores:', 
          src: "assets/geometria/Circunferencia 33.jpg",
          description: "Son aquellas cuya distancia entre los centros es igual a la suma de las longitudes de sus radios."
        },
        { 
          title: 'Circunferencias Tangentes Interiores:', 
          src: "assets/geometria/Circunferencia 34.jpg",
          description: "Son aquellas cuya distancia entre los centros es igual a la diferencia de las longitudes de los radios."
        },
        { 
          title: 'Circunferencias Interiores:', 
          src: "assets/geometria/Circunferencia 35.jpg",
          description: "Son aquellas cuya distancia entre los centros es menor que la diferencia de las longitudes de los radios."
        },
        { 
          title: 'Circunferencias Secantes:', 
          src: "assets/geometria/Circunferencia 36.jpg",
          description: "Son aquellas en las que la distancia entre sus centros es mayor que la diferencia de las longitudes de los radios y menor que la suma de éstas."
        },
        { 
          title: 'Circunferencias Ortogonales:', 
          src: "assets/geometria/Circunferencia 37.jpg",
          description: "Son aquellas circunferencias secantes en las que el ángulo formado por los radios en los puntos de intersección de éstas es de 90º."
        },
        { 
          title: 'Circunferencias Concéntricas:', 
          src: "assets/geometria/Circunferencia 38.jpg",
          description: "Son aquellas cuya distancia entre los centros es cero, es decir, tienen el mismo centro."
        },
        { 
          title: 'Propiedades Adicionales:', 
          src: "assets/geometria/Circunferencia 39.jpg",
          description: "1.- Si L, I, D y S son puntos de tangencia"
        },
        { 
          title: 'Propiedades Adicionales:', 
          src: "assets/geometria/Circunferencia 40.jpg",
          description: "2.- Si L, I, D y S son puntos de tangencia"
        },
        { 
          title: 'Propiedades Adicionales:', 
          src: "assets/geometria/Circunferencia 41.jpg",
          description: "3.- Si L, I, D y S son puntos de tangencia"
        },
        { 
          title: 'Propiedades Adicionales:', 
          src: "assets/geometria/Circunferencia 42.jpg",
          description: "4.- Si F, I, P, E son puntos de tangencia"
        },
        { 
          title: 'Primera Condición:', 
          src: "assets/geometria/Circunferencia 43.jpg",
          description: "Un cuadrilátero es inscriptible si los ángulos opuestos son suplementarios. Es decir:"
        },
        { 
          title: 'Primera Condición:', 
          src: "assets/geometria/Circunferencia 44.jpg",
          description: "Esta condición es equivalente a decir que un ángulo interior del cuadrilátero es congruente al ángulo opuesto exterior."
        },
        { 
          title: 'Segunda Condición:', 
          src: "assets/geometria/Circunferencia 45.jpg",
          description: "Un cuadrilátero es inscriptible si el ángulo formado por un lado y una diagonal es congruente al ángulo formado por el lado opuesto y la otra diagonal."
        },
        { 
          title: '', 
          src: "assets/geometria/Circunferencia 1.jpg",
          description: ""
        },
      ] 
    },
    { //PROPORCIONALIDAD Y SEMEJANZA
      title: 'PROPORCIONALIDAD Y SEMEJANZA', 
      data: [
        { 
          title: 'Teorema de Thales', 
          src: "assets/geometria/Proporcionalidad 1.jpg",
          description: "Tres o más Rectas paralelas determinan sobre dos o más rectas secantes segmentos cuyas longitudes son proporcionales."
        },
        { 
          title: 'Aplicación del Teorema de Thales en los Triángulos', 
          src: "assets/geometria/Proporcionalidad 2.jpg",
          description: "Toda recta paralela a uno de los lados de un triángulo, que intersecta a los otros o a sus prolongaciones determina sobre ellos segmentos cuyas longitudes son proporcionales."
        },
        { 
          title: 'Teorema de la Bisectriz Interior', 
          src: "assets/geometria/Proporcionalidad 3.jpg",
          description: "En todo triángulo se cumple que las longitudes de los lados que forman el vértice de donde parte la bisectriz interior son proporcionales a las longitudes de los segmentos determinados por dicha bisectriz sobre el lado opuesto."
        },
        { 
          title: 'Teorema de la Bisectriz Exterior', 
          src: "assets/geometria/Proporcionalidad 4.jpg",
          description: "En todo triángulo se cumple que las longitudes de los lados que forman el vértice del cual parte la bisectriz exterior son proporcionales a las longitudes de los segmentos determinados por dicha bisectriz sobre el lado opuesto."
        },
        { 
          title: 'Teorema del Incentro', 
          src: "assets/geometria/Proporcionalidad 5.jpg",
          description: "En todo triángulo se cumple que el incentro divide a la bisectriz interior en dos segmentos cuyas longitudes del que une el vértice con el incentro y el incentro con el lado opuesto son proporcionales a la suma de las longitudes de los lados que concurren con la bisectriz y el lado opuesto a este."
        },
        { 
          title: 'Teorema del Excentro', 
          src: "assets/geometria/Proporcionalidad 6.jpg",
          description: "En todo triángulo se cumple que la razón entre la diferencia de dos lados y el tercer lado, es igual a la razón de los segmentos que determina el excentros sobre la bisectriz exterior relativa a dicho tercer lado."
        },
        { 
          title: '', 
          src: "assets/geometria/Proporcionalidad 7.jpg",
          description: "También se cumple:"
        },
        { 
          title: 'Teorema de Menelao', 
          src: "assets/geometria/Proporcionalidad 8.jpg",
          description: "Una recta secante a un triángulo determina sobre sus lados seis segmentos cumpliéndose que el producto de multiplicar las longitudes de ellos considerados en forma no consecutiva es igual al producto de multiplicar las longitudes de los tres restantes."
        },
        { 
          title: 'Teorema de Ceva', 
          src: "assets/geometria/Proporcionalidad 9.jpg",
          description: "Tres cevianas concurrentes trazadas desde los vértices de un triángulo determinan sobre sus lados seis segmentos cumpliéndose que el producto de multiplicar las longitudes de tres de ellos considerados en forma no consecutiva es igual al producto de multiplicar las longitudes de los tres restantes."
        },
        { 
          title: 'Teorema del Incentro y el Baricentro', 
          src: "assets/geometria/Proporcionalidad 10.jpg",
          description: "Si el segmento que une el incentro con el baricentro de un triángulo es paralelo a uno de los lados, la longitud de este lado es la media aritmética de las longitudes de los otros dos lados. - I : Incentro del Δ ABC, - G : Baricentro del Δ ABC"
        },
        { 
          title: '', 
          src: "assets/geometria/Proporcionalidad 11.jpg",
          description: "Teorema:"
        },
        { 
          title: 'Generalización del Teorema de Menelao', 
          src: "assets/geometria/Proporcionalidad 12.jpg",
          description: ""
        }, 
        { 
          title: 'Generalización del Teorema de Ceva:', 
          src: "assets/geometria/Proporcionalidad 13.jpg",
          description: ""
        },
        { 
          title: 'Teorema de Van Aubel', 
          src: "assets/geometria/Proporcionalidad 14.jpg",
          description: ""
        }, 
        { 
          title: 'División Armónica de un Segmento', 
          src: "assets/geometria/Proporcionalidad 15.jpg",
          description: "Se dice que dos puntos B y D dividen armónicamente a un segmento dado AC cuando se verifica la relación:"
        }, 
        { 
          title: 'Teorema de Newton:', 
          src: "assets/geometria/Proporcionalidad 16.jpg",
          description: "Si los puntos B y D dividen armónicamente al AC y “O” es punto medio de BD, se cumple:"
        },
        { 
          title: 'Haz Armónico:', 
          src: "assets/geometria/Proporcionalidad 17.jpg",
          description: "Es el conjunto de cuatro rectas concurrentes que pasan por cuatro puntos que forman una cuaterna armónica. – “O” es el centro del Haz Armónico. – Los rayos OA y OC son los rayos armónicos. – Los rayos OB y OD son los rayos conjugados armónicos."
        }, 
        { 
          title: 'Propiedades:', 
          src: "assets/geometria/Proporcionalidad 18.jpg",
          description: "1.- Dos vértices de un triángulo y los pies de las bisectrices interior y exterior trazadas desde el tercer vértice, siempre forman una cuaterna armónica."
        }, 
        { 
          title: 'Propiedades:', 
          src: "assets/geometria/Proporcionalidad 19.jpg",
          description: "2.- En el Δ  AQC"
        }, 
        { 
          title: 'Propiedades:', 
          src: "assets/geometria/Proporcionalidad 20.jpg",
          description: "3.- En el Δ  AQC, si P y T son puntos de tangencia:"
        }, 
        { 
          title: 'Semejanza de Triángulos', 
          src: "assets/geometria/Proporcionalidad 21.jpg",
          description: "Dos triángulos son semejantes si sus tres ángulos interiores son respectivamente congruentes y sus elementos homólogos son proporcionales. En dos triángulos semejantes se cumple que el valor de la razón geométrica de cualquier par de elementos homólogos es una constante, llamado razón de semejanza. Ejemplo: En la figura se muestra, que el Δ RQN es semejante al Δ LSP."
        },
        { 
          title: 'Propiedades:', 
          src: "assets/geometria/Proporcionalidad 22.jpg",
          description: "1.- Si DA//RN//AZ"
        },
        { 
          title: 'Propiedades:', 
          src: "assets/geometria/Proporcionalidad 23.jpg",
          description: "2.- Si"
        }, 
        { 
          title: 'Propiedades:', 
          src: "assets/geometria/Proporcionalidad 24.jpg",
          description: "3.- Si se tiene un trapecio isósceles"
        }, 
        { 
          title: 'Propiedades:', 
          src: "assets/geometria/Proporcionalidad 25.jpg",
          description: "4.- Si"
        }, 
        { 
          title: 'Propiedades:', 
          src: "assets/geometria/Proporcionalidad 26.jpg",
          description: "5.- Si"
        }, 
        { 
          title: 'Propiedades:', 
          src: "assets/geometria/Proporcionalidad 27.jpg",
          description: "6.- Si"
        },  
        { 
          title: 'Propiedades Especiales', 
          src: "assets/geometria/Proporcionalidad 28.jpg",
          description: "1.- Si"
        }, 
        { 
          title: 'Propiedades Especiales', 
          src: "assets/geometria/Proporcionalidad 29.jpg",
          description: "2.- Si"
        }, 
        { 
          title: 'Propiedades Especiales', 
          src: "assets/geometria/Proporcionalidad 30.jpg",
          description: "3.- Si"
        }, 
        { 
          title: 'Propiedades Especiales', 
          src: "assets/geometria/Proporcionalidad 31.jpg",
          description: "4.- Si     M es punto medio de AC; N es punto medio de BD"
        }, 
        { 
          title: 'Propiedades Especiales', 
          src: "assets/geometria/Proporcionalidad 32.jpg",
          description: "5.- Si un conjunto de rectas concurrentes intercepta a dos o más rectas paralelas, entonces los segmentos determinados en éstas son proporcionales."
        }, 
      ] 
    },
    { //ÁREAS DE REGIONES SOMBREADAS
      title: 'ÁREAS DE REGIONES SOMBREADAS', 
      data: [
        { 
          title: 'Áreas de Regiones Triangulares', 
          src: "assets/geometria/Areas 1.jpg",
          description: "El área del triángulo sea este acutángulo, obtusángulo o rectángulo, conociendo su base(b) y su altura (h se halla con:"
        },
        { 
          title: '', 
          src: "assets/geometria/Areas 2.jpg",
          description: "El área del triángulo equilátero conociendo su lado"
        },
        { 
          title: '', 
          src: "assets/geometria/Areas 3.jpg",
          description: "El área del triángulo equilátero conociendo su altura “h”"
        },
        { 
          title: '', 
          src: "assets/geometria/Areas 4.jpg",
          description: "El área de cualquier triángulo conociendo 2 lados y el ángulo comprendido entre ellos."
        },
        { 
          title: '', 
          src: "assets/geometria/Areas 5.jpg",
          description: "El área de un triángulo conociendo sus tres lados (Teorema de Heron)"
        },
        { 
          title: '', 
          src: "assets/geometria/Areas 6.jpg",
          description: "Área de un triángulo en función de sus tres alturas; conociendo las alturas AQ = ha , BR = hb y CP = hc ; el área del triángulo ABC es:"
        },
        { 
          title: '', 
          src: "assets/geometria/Areas 7.jpg",
          description: "Área de un triángulo cualesquiera circunscrito a una circunferencia de inradio “r”"
        },
        { 
          title: '', 
          src: "assets/geometria/Areas 8.jpg",
          description: "Área de un triángulo cualesquiera inscrito en una circunferencia de circunradio “R”"
        },
        { 
          title: '', 
          src: "assets/geometria/Areas 9.jpg",
          description: "El área de una región triangular es igual al producto entre la diferencia de su semiperímetro y un lado, y el exradio a dicho lado."
        },
        { 
          title: '', 
          src: "assets/geometria/Areas 10.jpg",
          description: "Conociendo los tres lados del triángulo podemos determinar el semiperímetro"
        },
        { 
          title: '', 
          src: "assets/geometria/Areas 11.jpg",
          description: "El área de una región triangular es igual a la raíz cuadrada del producto entre su inradio y sus tres exradios."
        },
        { 
          title: '', 
          src: "assets/geometria/Areas 12.jpg",
          description: "En el gráfico se cumple la siguiente relación entre los exradios y el inradio del triángulo ABC."
        },
        { 
          title: '', 
          src: "assets/geometria/Areas 13.jpg",
          description: "Área de un triángulo en función de sus tres medianas; conociendo las medianas AM=ma , BN=mb y CP=mc , el área del triángulo ABC es:"
        },
        { 
          title: '', 
          src: "assets/geometria/Areas 14.jpg",
          description: "Conociendo las alturas AQ = ha , BR = hb y CP = hc y de inradio “r” se cumple que:"
        },
        { 
          title: 'Área del Triángulo Rectángulo', 
          src: "assets/geometria/Areas 15.jpg",
          description: "El área de un triángulo rectángulo es igual al producto de las longitudes de los segmentos determinados en la hipotenusa, por el punto de tangencia de la circunferencia inscrita al triángulo."
        },
        { 
          title: 'Área del Triángulo Rectángulo', 
          src: "assets/geometria/Areas 16.jpg",
          description: "El área de un triángulo rectángulo es igual al producto de las longitudes de los segmentos determinados en la hipotenusa, por el punto de tangencia de la circunferencia exinscrita relativa hacia la hipotenusa del triángulo."
        },
        { 
          title: 'Área del Triángulo Rectángulo', 
          src: "assets/geometria/Areas 17.jpg",
          description: "El área de un triángulo rectángulo es igual al producto de las longitudes de los segmentos determinados en la hipotenusa, por el punto de tangencia de la circunferencia exinscrita relativa a un cateto del triángulo."
        },
        { 
          title: 'Área del Triángulo Rectángulo', 
          src: "assets/geometria/Areas 18.jpg",
          description: "El área de un triángulo rectángulo es igual al producto del inradio y el exradio relativo hacia la hipotenusa del triángulo."
        },
        { 
          title: 'Área del Triángulo Rectángulo', 
          src: "assets/geometria/Areas 19.jpg",
          description: "El área de un triángulo rectángulo es igual al producto de los exradios relativos a cada uno de sus catetos."
        },
        { 
          title: 'Teoremas para Relacionar las Áreas de Dos Triángulos', 
          src: "assets/geometria/Areas 20.jpg",
          description: "Teorema I: La relación de las áreas de dos triángulos que tienen una altura común, es igual a la relación de las bases."
        },
        { 
          title: 'Teoremas para Relacionar las Áreas de Dos Triángulos', 
          src: "assets/geometria/Areas 21.jpg",
          description: "Teorema II: Si dos regiones triangulares tienen un lado de igual longitud, sus áreas serán proporcionales a las longitudes de sus alturas relativas a dichos lados."
        },
        { 
          title: 'Corolarios', 
          src: "assets/geometria/Areas 22.jpg",
          description: "a) Todo triángulo es dividido en dos triángulos equivalentes por una de sus medianas."
        },
        { 
          title: 'Corolarios', 
          src: "assets/geometria/Areas 23.jpg",
          description: "b) El área de un triángulo es el cuádruplo del área del triángulo formado al unir los puntos medios de dos lados."
        },
        { 
          title: 'Corolarios', 
          src: "assets/geometria/Areas 24.jpg",
          description: "c) Todo triángulo s dividido en seis triángulos equivalentes por sus tres medianas. Si “G” es el Baricentro entonces:"
        },
        { 
          title: 'Corolarios', 
          src: "assets/geometria/Areas 25.jpg",
          description: "d) En todo triángulo se cumple que las áreas de los triángulos formados al trazar una bisectriz interior, son proporcionales a los lados concurrentes con dicha bisectriz."
        },
        { 
          title: 'Teoremas para Relacionar las Áreas de Dos Triángulos', 
          src: "assets/geometria/Areas 26.jpg",
          description: "Teorema III: Primer caso:"
        },
        { 
          title: 'Teoremas para Relacionar las Áreas de Dos Triángulos', 
          src: "assets/geometria/Areas 27.jpg",
          description: "Teorema III: Segundo Caso:"
        },
        { 
          title: 'Teoremas para Relacionar las Áreas de Dos Triángulos', 
          src: "assets/geometria/Areas 28.jpg",
          description: "Teorema IV: Si dos regiones triangulares son semejantes, se cumple que sus áreas son proporcionales a los cuadrados de las longitudes de sus líneas homólogas"
        },
        { 
          title: '', 
          src: "assets/geometria/Areas 29.jpg",
          description: ""
        },
        { 
          title: 'Fórmula General', 
          src: "assets/geometria/Areas 30.jpg",
          description: "El área de una región cuadrangular convexa o no convexa es igual al semiproducto de las longitudes de sus diagonales multiplicado con el seno de la medida del ángulo determinado por dichas diagonales."
        },
        { 
          title: 'Fórmula General', 
          src: "assets/geometria/Areas 31.jpg",
          description: "Para el cuadrilátero convexo ABCD:"
        },
        { 
          title: 'Fórmula General', 
          src: "assets/geometria/Areas 32.jpg",
          description: "Para el cuadrilátero cóncavo MNLP:"
        },
        { 
          title: 'Área de una región Trapecial', 
          src: "assets/geometria/Areas 33.jpg",
          description: "El área de una región trapecial es igual al producto de la semisuma de las longitudes de las bases con la longitud de la altura de dicho trapecio."
        },
        { 
          title: 'Teorema', 
          src: "assets/geometria/Areas 34.jpg",
          description: "El área de una región trapecial, es igual al producto de la longitud de un lado lateral y la distancia del punto medio del otro lado lateral hacia él."
        },
        { 
          title: 'Propiedad:', 
          src: "assets/geometria/Areas 35.jpg",
          description: "En todo trapecio, al trazar las dos diagonales las áreas de los triángulos que están conformados por los lados no paralelos y por parte de las dos diagonales  son congruentes"
        },
        { 
          title: 'Propiedad:', 
          src: "assets/geometria/Areas 36.jpg",
          description: "Si representamos con  el área total del trapecio se cumple:"
        },
        { 
          title: 'Propiedad:', 
          src: "assets/geometria/Areas 37.jpg",
          description: "En un trapecio cualesquiera"
        },
        { 
          title: 'Propiedad:', 
          src: "assets/geometria/Areas 38.jpg",
          description: "El área de un cuadrado se puede hallar conociendo uno de sus lados o una diagonal."
        },
        { 
          title: 'Propiedad:', 
          src: "assets/geometria/Areas 39.jpg",
          description: "El área de un rectángulo está dado por el producto entre su base y su altura respectiva"
        },
        { 
          title: 'Propiedad:', 
          src: "assets/geometria/Areas 40.jpg",
          description: "Área de un Romboide"
        },
        { 
          title: 'Propiedad:', 
          src: "assets/geometria/Areas 41.jpg",
          description: "Área de un Rombo"
        },
        { 
          title: 'Propiedad:', 
          src: "assets/geometria/Areas 42.jpg",
          description: "En un paralelogramo cualesquiera si AT representa el área total."
        },
        { 
          title: 'Propiedad:', 
          src: "assets/geometria/Areas 43.jpg",
          description: "En todo cuadrilátero se cumple que:"
        },
        { 
          title: 'Propiedad:', 
          src: "assets/geometria/Areas 44.jpg",
          description: "En todo cuadrilátero se cumple que:"
        },
        { 
          title: 'Propiedad:', 
          src: "assets/geometria/Areas 45.jpg",
          description: "En todo trapecio se cumple que:"
        },
        { 
          title: 'Área de un Círculo', 
          src: "assets/geometria/Areas 46.jpg",
          description: ""
        },
        { 
          title: 'Sector Circular:', 
          src: "assets/geometria/Areas 47.jpg",
          description: "Es aquella porción de círculo limitada por un ángulo central y su arco correspondiente."
        },
        { 
          title: 'Corona Circular:', 
          src: "assets/geometria/Areas 48.jpg",
          description: "Es aquella región plana limitada por dos circunferencias concéntricas."
        },
        { 
          title: 'Segmento Circular:', 
          src: "assets/geometria/Areas 49.jpg",
          description: "Es aquella porción de círculo limitada por una cuerda de dicho círculo y el arco que subtiende dicha cuerda."
        },
        { 
          title: 'Trapecio Circular:', 
          src: "assets/geometria/Areas 50.jpg",
          description: "En el gráfico, la región sombreada se denomina trapecio circular."
        },
        { 
          title: '', 
          src: "assets/geometria/Areas 51.jpg",
          description: ""
        },
        { 
          title: 'Teorema:', 
          src: "assets/geometria/Areas 52.jpg",
          description: "Al trazar regiones semejantes sobre los lados de un triángulo rectángulo, de modo que dichos lados del triángulo sean líneas homólogas de las regiones semejantes; se cumple que el área de la región trazada sobre la hipotenusa es igual a la suma de las áreas de las regiones trazadas sobre los catetos."
        },
        { 
          title: 'Teorema', 
          src: "assets/geometria/Areas 53.jpg",
          description: "En el gráfico las regiones sobre los catetos y la hipotenusa cuyas áreas son A1 , A2  y A3 respectivamente en la cuales AB, BC y AC son sus correspondientes líneas homólogas, se cumple que:"
        },
        { 
          title: 'Lúnulas de Hipócrates:', 
          src: "assets/geometria/Areas 54.jpg",
          description: ""
        },
        { 
          title: 'Propiedades Adicionales: En todo cuadrado si AT representa el área total del cuadrado se cumple que:', 
          src: "assets/geometria/Areas 55.jpg",
          description: ""
        },
        { 
          title: '', 
          src: "assets/geometria/Areas 56.jpg",
          description: ""
        },
        { 
          title: '', 
          src: "assets/geometria/Areas 57.jpg",
          description: " En todo paralelogramo si AT representa el área total del cuadrado se cumple que:"
        },
        { 
          title: '', 
          src: "assets/geometria/Areas 58.jpg",
          description: "Área del pescadito"
        },
      ] 
    },
  ];

  constructor(private modalCtrl: ModalController, private router: Router) { }

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

  async Loading() {
    this.playClickSound();
    // Redireccionar a la página "Pantalla"
    this.router.navigateByUrl('/loading');

    // Esperar 2 segundos antes de redireccionar a la página "Aritmética"
    setTimeout(() => {
      this.router.navigateByUrl('/home'); // Reemplaza 'aritmetica' con la ruta de la página a la que deseas redireccionar
    }, 1000);
  }

}

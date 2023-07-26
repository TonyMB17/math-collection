import { Component, OnInit, ViewChild} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-algebra',
  templateUrl: './algebra.page.html',
  styleUrls: ['./algebra.page.scss'],
})

@Injectable(
  {
    providedIn: 'root'
  })
  
export class AlgebraPage implements OnInit {  

  public formulas = [
    { 
      title: 'Teoria de Exponentes', 
      data: [
        { 
          title: 'Exponente Cero', 
          src: "./assets/images/algebra/e_cero.png", 
          description: "Todo número elevado a un exponente es Cero es igual a la Unidad, excepto el Cero."
        },
        { 
          title: 'Exponente Negativo', 
          src: "./assets/images/algebra/e_negativo.png", 
          description: "Todo número elevado a un exponente negativo se invierte, excepto el Cero."
        },
        { 
          title: 'Producto de Bases Iguales', 
          src: "./assets/images/algebra/e_bases_iguales.png", 
          description: "Si se multiplicación dos o más expresiones cuyas bases son iguales, sus exponentes se suman."
        },
        { 
          title: 'Cociente de Bases Iguales', 
          src: "./assets/images/algebra/Cociente-de-Bases-Iguales.png", 
          description: "Si se dividen dos expresiones cuyas bases son iguales, sus exponentes se restan."
        },
        { 
          title: 'Potencia de Potencia', 
          src: "./assets/images/algebra/Potencia-de-Potencia.png", 
          description: "Cuando una potencia se encuentra encima de otra potencia (separado por algún signo de agrupación), ambos elementos se multiplican."
        },        
        { 
          title: 'Potencia de un Producto', 
          src: "./assets/images/algebra/Potencia-de-Producto.png", 
          description: "Cuando una potencia afecta al producto de 2 o más términos, dicha potencia se distribuye a cada uno de los elementos que se están multiplicando."
        },        
        { 
          title: 'Potencia de un Cociente', 
          src: "./assets/images/algebra/Potencia-de-Cociente-1.png", 
          description: "Cuando una potencia afecta al cociente de 2 términos, dicha potencia se distribuye a cada uno de los elementos que se están dividiendo."
        },        
        { 
          title: 'Exponente Fraccionario', 
          src: "./assets/images/algebra/Exponente-Fraccionario.png", 
          description: "Toda expresión elevada a un exponente fraccionario proviene de una radicación."
        },        
        { 
          title: 'Raíz de un producto', 
          src: "./assets/images/algebra/Raiz-de-un-Producto.png", 
          description: "Cuando una potencia se encuentra encima de otra potencia (separado por algún signo de agrupación), ambos elementos se multiplican."
        },        
        { 
          title: 'Raíz de un Cociente', 
          src: "./assets/images/algebra/Raiz-de-un-Cociente.png", 
          description: "Si la raíz afecta al cociente de 2 términos, la raíz se puede distribuir a cada una de las expresiones."
        },        
        { 
          title: 'Raíz de Raíz', 
          src: "./assets/images/algebra/Raiz-de-Raiz.png", 
          description: "Cuando una potencia se encuentra encima de otra potencia (separado por algún signo de agrupación), ambos elementos se multiplican."
        },
      ] 
    },
    {
      title: 'Operaciones con Polinomios', 
      data: [
        { 
          title: 'Suma de Polinomios', 
          src: "./assets/images/algebra/suma-polinomios.jpg", 
          description: "Si pretendemos calcular la suma de los polinomios P(x) = x2 - 4x + 4 y Q(x) = 3x2 + 5x - 3, simplemente sumamos los coeficientes de las partes literales P(x)+Q(x) = (1+3)x2 + (-4+5)x + (4-3) = 4x2 + x + 1."
        },
        { 
          title: 'Resta de Polinomios', 
          src: "./assets/images/algebra/resta-polinomio.jpg", 
          description: "Para restar polinomios, actuamos de forma análoga, podemos restar los coeficientes de las partes literales o simplemente colocarlos de forma vertical y operar."
        },
        { 
          title: 'Multiplicacion de Polinomios', 
          src: "./assets/images/algebra/multiplicacion-polinomio.jpg", 
          description: "Si queremnos multiplicar dos polinomios, aplicaremos reiteradamente la propiedad distribuitiva."
        },
        { 
          title: 'División de polinomios', 
          src: "./assets/images/algebra/division-polinimios.png", 
          description: "Ordenamos los polinomios según las potencias y de mayor a menor. Se dividen los primeros términos del dividendo y del divisor. El resultado obtenido se multiplica por el divisor y se resta al dividendo. Seguimos este procedimiento hasta que el resto sea de un grado menor que el divisor."
        },     
      ] 
    },
    {
      title: 'Factorizacion', 
      data: [
        { 
          title: 'Factor común', 
          src: "./assets/images/algebra/factor-comun.png", 
          description: "Encontrando, por inspección, el monomio que es el máximo común divisor de todos los términos del polinomio y factorizándolo como un factor común que es una aplicación de la ley distributiva."
        },
        { 
          title: 'Factor común por agrupación de términos', 
          src: "./assets/images/algebra/factor-comun-t.png", 
          description: "Un método que a veces es útil, pero no garantiza que funcione, es la factorización mediante la agrupación."
        },
        { 
          title: 'Diferencia de dos cuadrados', 
          src: "./assets/images/algebra/d-cuadrados.png", 
          description: "Otra fórmula para la factorización es la suma o diferencia de dos cubos."
        },
        { 
          title: 'Suma o diferencia de cubos', 
          src: "./assets/images/algebra/d-cubos.png", 
          description: "Un método que a veces es útil, pero no garantiza que funcione, es la factorización mediante la agrupación."
        },
        { 
          title: 'Expansiones binomiales', 
          src: "./assets/images/algebra/e-binomiales.png", 
          description: "l teorema del binomio suministra patrones de coeficientes que permiten factorizaciones fácilmente reconocidos cuando el polinomio es una potencia de un binomio."
        },
      ] 
    },
    {
      title: 'Radicacion', 
      data: [
        { 
          title: 'Raíz de un producto', 
          src: "./assets/images/algebra/raiz-producto.png", 
          description: "La raíz de un producto es igual al producto de las raíces de los factores nombrados anteriormente."
        },
        { 
          title: 'Raíz de un cociente', 
          src: "./assets/images/algebra/raiz-cociente.png", 
          description: "La raíz de una fracción es igual al cociente de la raíz del numerador entre la raíz del denominador."
        },
        { 
          title: 'Raíz de una raíz', 
          src: "./assets/images/algebra/raiz-raiz.png", 
          description: "Para calcular la raíz de una raíz se multiplican los índices de las raíces y se conserva el radicando."
        },
        { 
          title: 'Potencia de una raíz', 
          src: "./assets/images/algebra/potencia-raiz.png", 
          description: "Para calcular la potencia de una raíz se eleva el radicando a esa potencia."
        },
        { 
          title: 'Otras propiedades', 
          src: "./assets/images/algebra/otras-radicales.png", 
          description: "Utilizando las propiedades fundamentales, se pueden obtener otras propiedades, como por ejemplo, el cálculo de la raíz de un producto con el mismo radicando y distintos índices, que se obtiene multiplicando los índices de las raíces y conservando el radicando elevado a la suma de los índices."
        },
      ] 
    },
    {
      title: 'Binomio de Newton', 
      data: [
        { 
          title: 'Fórmula del binomio de Newton', 
          src: "./assets/images/algebra/binomio-newton.png", 
          description: "Es una fórmula que permite calcular de manera fácil la potencia de un binomio. Es decir, el binomio de Newton consiste en una fórmula con la que se pueden resolver expresiones algebraicas de la forma (a+b)n."
        },
        { 
          title: 'Factorial', 
          src: "./assets/images/algebra/factorial.png", 
          description: "Un número factorial se calcula multiplicando todos los números enteros positivos desde 1 hasta dicho número."
        }, 
        { 
          title: 'Número combinatorio', 
          src: "./assets/images/algebra/combinatorio.png", 
          description: "Para determinar un número combinatorio (o coeficiente binomial) se debe aplicar la siguiente fórmula donde n!y k!son números factoriales."
        },         
        { 
          title: 'Variaciones', 
          src: "./assets/images/algebra/variaciones.png", 
          description: "Las variaciones ordinarias son la forma de ordenar “m” elementos tomados de “n” en en “n” (m>= n) en el que sí importa el orden y no se pueden repetir."
        }, 
        { 
          title: 'Permutaciones', 
          src: "./assets/images/algebra/permutacion.png", 
          description: "Una permutación de un conjunto de elementos, es una disposición de dichos elementos teniendo en cuenta el orden. El número de permutaciones de “n” elementos tomados de “k” en “k” se calcula con la fórmula."
        }, 
      ] 
    },
    {
      title: 'Ecuaciones Lineales y Cuadraticas', 
      data: [
        { 
          title: 'Ecuación de Primer Grado', 
          src: "./assets/images/algebra/Formula-de-Ecuacion-de-Primer-Grado.jpg", 
          description: "También llamado como ecuación lineal. Donde a las letras “a” y “b” se les da el nombre de parámetros tal que “a, b ∈ R” y a “x” la incógnita."
        }, 
        { 
          title: 'Ecuaciones de Segundo Grado', 
          src: "./assets/images/algebra/Formula-de-Ecuaciones-de-Segundo-Grado.jpg", 
          description: "Frecuentemente a dicha ecuación de segundo grado se le llama: Ecuación cuadrática y se caracteriza por presentar 2 soluciones (su incógnita x asume dos valores)"
        }, 
        { 
          title: 'Metodo de Factorización', 
          src: "./assets/images/algebra/Formula-de-Ecuaciones-de-Segundo-Grado-por-Factorizacion.jpg", 
          description: "Este método se aplica únicamente si el trinomio ax2 + bx + c es factorizable, para lo cual se debe tener en cuenta la siguiente propiedad."
        },
        { 
          title: 'Formula General', 
          src: "./assets/images/algebra/Ecuaciones-de-Segundo-Grado-por-la-Formula-de-Camot.jpg", 
          description: "Dada la ecuación: ax2 + bx + c = 0, sus raíces se obtienen utilizando la fórmula deducida por SADI CARNOT"
        },
        { 
          title: 'Naturaleza de la Raíces', 
          src: "./assets/images/algebra/Naturaleza-de-la-Raices.jpg", 
          description: "Discriminante Mayor a Cero (Δ > 0): En este caso las raíces son reales y diferentes. Discriminante Igual a Cero (Δ = 0): En este caso las raíces son reales e iguales. Además en este caso el trinomio “ax2 + bx + c” es un trinomio cuadrado perfecto. Discriminante Menor a Cero (Δ < 0): En este caso las raíces son complejas y conjugadas o imaginarias, debe notarse que las raíces siempre se presentan en pareja, siendo una de ellas, la conjugada de la otra."
        },
      ] 
    },
    {
      title: 'Sistemas de Ecuaciones', 
      data: [
        { 
          title: 'Método de sustitución', 
          src: "./assets/images/algebra/sustitucion.png", 
          description: "Ordenamos los polinomios según las potencias y de mayor a menor. Se dividen los primeros términos del dividendo y del divisor. El resultado obtenido se multiplica por el divisor y se resta al dividendo. Seguimos este procedimiento hasta que el resto sea de un grado menor que el divisor."
        }, 
        { 
          title: 'Método de igualación', 
          src: "./assets/images/algebra/igualacion.png", 
          description: "El método de igualación consiste en despejar la misma incógnita en las dos ecuaciones y después igualar los resultados."
        }, 
        { 
          title: 'Método de reducción', 
          src: "./assets/images/algebra/reduccion.png", 
          description: "Con el método de reducción lo que hacemos es combinar, sumando o restando, nuestras ecuaciones para que desaparezca una de nuestras incógnitas."
        }, 
      ] 
    },
    {
      title: 'Inecuaciones', 
      data: [
        { 
          title: 'División de polinomios', 
          src: "./assets/images/algebra/division-polinimios.png", 
          description: "Ordenamos los polinomios según las potencias y de mayor a menor. Se dividen los primeros términos del dividendo y del divisor. El resultado obtenido se multiplica por el divisor y se resta al dividendo. Seguimos este procedimiento hasta que el resto sea de un grado menor que el divisor."
        }, 
      ] 
    },
    {
      title: 'Relaciones y Funciones', 
      data: [
        { 
          title: 'División de polinomios', 
          src: "./assets/images/algebra/division-polinimios.png", 
          description: "Ordenamos los polinomios según las potencias y de mayor a menor. Se dividen los primeros términos del dividendo y del divisor. El resultado obtenido se multiplica por el divisor y se resta al dividendo. Seguimos este procedimiento hasta que el resto sea de un grado menor que el divisor."
        }, 
      ] 
    },
    {
      title: 'Logaritmos', 
      data: [
        { 
          title: 'División de polinomios', 
          src: "./assets/images/algebra/division-polinimios.png", 
          description: "Ordenamos los polinomios según las potencias y de mayor a menor. Se dividen los primeros términos del dividendo y del divisor. El resultado obtenido se multiplica por el divisor y se resta al dividendo. Seguimos este procedimiento hasta que el resto sea de un grado menor que el divisor."
        }, 
      ] 
    },
    {
      title: 'Progresiones Aritmeticas y Geometricas', 
      data: [
        { 
          title: 'División de polinomios', 
          src: "./assets/images/algebra/division-polinimios.png", 
          description: "Ordenamos los polinomios según las potencias y de mayor a menor. Se dividen los primeros términos del dividendo y del divisor. El resultado obtenido se multiplica por el divisor y se resta al dividendo. Seguimos este procedimiento hasta que el resto sea de un grado menor que el divisor."
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

    // Función para reproducir el sonido cuando se hace clic en el botón
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

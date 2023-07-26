import { Component, Injectable, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-fisica',
  templateUrl: './fisica.page.html',
  styleUrls: ['./fisica.page.scss'],
})

@Injectable(
  {
    providedIn: 'root'
  })
  
export class FisicaPage implements OnInit {

 public formulas = [
    { 
      title: 'Tipos de cambio (Factores de conversión)', 
      data: [
        { 
          title: 'Longitud', 
          src: "../../../assets/fisica/Longitud.PNG", 
          description: "La longitud en física es una magnitud escalar que cuantifica la extensión o distancia de un objeto o trayectoria en el espacio. Se mide en unidades como metros (m) o centímetros (cm) y es fundamental para describir la posición, tamaño y dimensiones de los objetos y fenómenos físicos."
        },
        { 
          title: 'Masa', 
          src: "../../../assets/fisica/Masa.PNG", 
          description: "La masa en física es una magnitud escalar que representa la cantidad de materia que posee un objeto. Se mide en unidades como kilogramos (kg) o gramos (g) y es una propiedad intrínseca de los objetos que determina su inercia y su interacción gravitatoria con otros cuerpos. En resumen, la masa es la medida de la cantidad de sustancia que compone un objeto y es diferente del peso, que depende de la aceleración gravitatoria."
        },
        { 
          title: 'Tiempo', 
          src: "../../../assets/fisica/Tiempo.PNG", 
          description: "El tiempo en física es una magnitud escalar que se utiliza para medir la duración o secuencia de eventos en el universo. Es una dimensión fundamental en la que los eventos ocurren y se desarrollan. Se mide en unidades como segundos (s), minutos (min), horas (h) o días (d). El tiempo es una parte esencial de la descripción de los fenómenos físicos, y su estudio y comprensión han sido fundamentales para el desarrollo de la física y otras ciencias."
        },
        { 
          title: 'Area', 
          src: "../../../assets/fisica/Area.PNG", 
          description: "El área en física es una magnitud escalar que cuantifica la extensión de una superficie bidimensional. Se trata de una medida de la cantidad de espacio que ocupa una figura o región en un plano. El área se expresa en unidades como metros cuadrados (m²), centímetros cuadrados (cm²) o cualquier otra unidad de superficie. Es una cantidad importante en diversas disciplinas de la física, como la mecánica, la óptica y la termodinámica, y es fundamental para describir y entender diferentes fenómenos y propiedades de objetos y sistemas."
        },
        { 
          title: 'Volumen', 
          src: "../../../assets/fisica/Volumen.PNG", 
          description: "El volumen en física es una magnitud escalar que representa el espacio ocupado por un objeto tridimensional. Se refiere a la cantidad de espacio que contiene un cuerpo o figura en el espacio. El volumen se mide en unidades cúbicas, como metros cúbicos (m³) o centímetros cúbicos (cm³). Es una propiedad esencial para describir la capacidad, tamaño y extensión de sólidos y líquidos. En diversas áreas de la física, el volumen es una cantidad crucial para calcular propiedades como la densidad, la presión y la cantidad de materia presente en un sistema."
        },
        { 
          title: 'Rapidez', 
          src: "../../../assets/fisica/Rapidez.PNG", 
          description: "La rapidez en física es una magnitud escalar que describe la velocidad de un objeto en un determinado instante, sin tener en cuenta su dirección. Es decir, la rapidez se refiere a la distancia recorrida por un objeto en un intervalo de tiempo específico, sin importar la dirección en la que se desplaza."
        },
        { 
          title: 'Fuerza', 
          src: "../../../assets/fisica/Fuerza.PNG", 
          description: "La fuerza en física es una magnitud vectorial que representa la interacción entre dos objetos o partículas. Se define como una acción capaz de cambiar el estado de movimiento o la forma de un objeto. La fuerza puede ser una causa que acelera o desacelera un cuerpo, o que lo deforma si actúa sobre un objeto sólido."
        },
      ] 
    },
    { 
      title: 'Sistemas de unidades', 
      data: [
        { 
          title: 'Sistemas de unidades', 
          src: "../../../assets/fisica/SistemaUnidades.PNG", 
          description: "Los sistemas de unidades son sistemas de medida que se utilizan para estandarizar y facilitar la comunicación de las mediciones en diferentes campos científicos y técnicos. Hay varios sistemas de unidades en uso en todo el mundo, pero los dos sistemas más comunes son:"
        },
        { 
          title: 'Magnitud', 
          src: "../../../assets/fisica/Magnitud.PNG", 
          description: "En física, una magnitud es una propiedad o cualidad que puede ser medida y descrita cuantitativamente. Las magnitudes son conceptos fundamentales que nos permiten caracterizar diferentes aspectos de los objetos y fenómenos del mundo físico. Existen dos tipos de magnitudes: escalares y vectoriales."
        },
        { 
          title: 'Simbolos', 
          src: "../../../assets/fisica/Simbolo.PNG", 
          description: "Los símbolos son representaciones gráficas o caracteres especiales utilizados para representar conceptos, objetos, magnitudes, unidades o ideas específicas. En física, los símbolos se utilizan para abreviar y simplificar la notación matemática y facilitar la comunicación y comprensión de fórmulas, ecuaciones y conceptos. Algunos ejemplos comunes de símbolos utilizados en física son:"
        },
      ] 
    },
    { 
      title: 'Sigue la flecha (Vectores)', 
      data: [
        { 
          title: 'componentes vectoriales', 
          src: "../../../assets/fisica/ComponenteVectorial.PNG", 
          description: "(Vx y Vy) se calculan conociendo la magnitud “V”del vector y su ángulo “α”: En física, los componentes vectoriales son las proyecciones de un vector en direcciones específicas de un sistema de coordenadas. Los vectores son magnitudes físicas que tienen tanto magnitud como dirección y, en ocasiones, sentido. Para descomponer o analizar un vector en sus componentes, es necesario utilizar un sistema de coordenadas, como el sistema cartesiano (x, y, z)."
        },
        { 
          title: 'La magnitud de la resultante', 
          src: "../../../assets/fisica/MagnitudResultante.PNG", 
          description: "se obtiene de las componentes vectoriales o de la sumatoria de ellas"
        },
        { 
          title: 'El ángulo de inclinación de la resultante', 
          src: "../../../assets/fisica/AnguloInclinacionResultante.PNG", 
          description: "con respecto de la región más próxima del eje “x”, se obtiene con la fórmula Te recomendamos estudiar las funciones trigonométricas"
        },
        { 
          title: 'En todo triángulo rectángulo, con respecto a uno de sus ángulos agudos:', 
          src: "../../../assets/fisica/TrianduloAngulosAgudos.PNG", 
          description: "-----"
        },
        { 
          title: 'Las Leyes de Senos y Cosenos.', 
          src: "../../../assets/fisica/LeyesSenosCosenos.PNG", 
          description: "Para todo triángulo, sabiendo que las longitudes de sus lados son “a”, “b” y “c”, con ángulos opuestos respectivamente “α”, “β” y “γ”, se cumplen las expresiones:"
        },
      ] 
    },
    { 
      title: 'Cinemática', 
      data: [
        { 
          title: 'Fórmulas de cinemática', 
          src: "../../../assets/fisica/FormulasCinematicas1.PNG", 
          description: ""
        },
        { 
          title: '', 
          src: "../../../assets/fisica/FormulasCinematicas2.PNG", 
          description: "Estas fórmulas te van a servir para calcular variables como la velocidad, aceleración, desplazamiento y tiempo, con algunos datos y las condiciones en que se lleva a cabo el movimiento. Recuerda que debes contar con un mínimo de información para comenzar a usar las fórmulas."
        },
      ] 
    },
    { 
      title: 'Fórmulas de movimiento rotacional', 
      data: [
        { 
          title: 'Para movimiento rotacional con aceleración angular constante', 
          src: "../../../assets/fisica/MovimientoRotacional.PNG", 
          description: ""
        },
        { 
          title: 'Fórmulas para rapidez angular constante', 
          src: "../../../assets/fisica/RapidezAngular.PNG", 
          description: ""
        },
        { 
          title: 'Fórmulas para Tiro Parabólico', 
          src: "../../../assets/fisica/TiroParabolico.PNG", 
          description: ""
        },
        { 
          title: 'Símbolo', 
          src: "../../../assets/fisica/SimboloRotacional.PNG", 
          description: "El tiempo de vuelo de un objeto es el doble del tiempo que tarda en subir. La velocidad de salida y la velocidad de llegada son iguales en magnitud. Si te dan una de las dos entonces no digas: ¡me falta un dato! La componente de la velocidad en “x” es constante si se desprecia la fricción con el aire, y esta te servirá para calcular el alcance de un proyectil en tiro parabólico. La rapidez angular tiene unidades de radianes sobre segundo y la rapidez tangencial metros sobre segundo. "
        },
      ] 
    },
    { 
      title: 'Dinámica', 
      data: [
        { 
          title: 'Fórmulas de Dinámica', 
          src: "../../../assets/fisica/FormulasDinamica.PNG", 
          description: ""
        },
        { 
          title: 'Variables', 
          src: "../../../assets/fisica/Variable.PNG", 
          description: "Cuando se calcula el peso de un cuerpo en movimiento vertical se suman algebraicamente la aceleración del movimiento y la aceleración de la gravedad. ¡Ponte buzo! Porque en problemas de la segunda ley de Newton a veces necesitas fórmulas de movimiento rectilíneo o de cinemática. En problemas donde el movimiento no es horizontal realiza siempre el diagrama de cuerpo libre. Si no se dan ángulos en el problema asígnale un valor de cero en la fórmula. Cuando F f el movimiento es a velocidad constante"
        },
      ] 
    },
    { 
      title: 'Trabajo, energía y potencia', 
      data: [
        { 
          title: 'Fórmulas de trabajo, energía y potencia', 
          src: "../../../assets/fisica/FormulasTrabajo.PNG", 
          description: ""
        },
        { 
          title: 'Variables Fórmulas de trabajo, energía y potencia', 
          src: "../../../assets/fisica/VariableTrabajo.PNG", 
          description: "Con estas fórmulas vas a poder calcular sin ningún trabajo la energía, la potencia y también el trabajo en cuerpos sometidos a fuerzas. ¡Energízate!"
        },
      ] 
    },
    { 
      title: 'Impulso y cantidad de movimiento', 
      data: [
        { 
          title: 'Simbolos', 
          src: "../../../assets/fisica/SimboloImpulso.PNG", 
          description: ""
        },
        { 
          title: 'Ley de la conservación de la cantidad de movimiento', 
          src: "../../../assets/fisica/FormulasConservación.PNG", 
          description: ""
        },
        { 
          title: 'Variables', 
          src: "../../../assets/fisica/VariablesImpulso.PNG", 
          description: "Aquí vamos a utilizar estas fórmulas para calcular los efectos que producen las fuerzas actuando durante un tiempo sobre un cuerpo y lo qué pasa cuando dos de ellos chocan. ¡Cuidado! el golpe avisa. Para que no te hagas bolas recuerda que el impulso no es lo mismo que la cantidad de movimiento, en el primero tomas en cuenta la fuerza que mueve a un cuerpo en un tiempo determinado, y en el segundo necesitas la velocidad y la masa del cuerpo."
        },
      ] 
    },
    { 
      title: 'Esfuerzo y deformación', 
      data: [
        { 
          title: 'Fórmulas de esfuerzo y deformación', 
          src: "../../../assets/fisica/FormulasEsfuerzo.PNG", 
          description: ""
        },
        { 
          title: 'Variable', 
          src: "../../../assets/fisica/VariableEsfuerzo.PNG", 
          description: "¿Sabes cómo se calcula la altura a la que quedarás del piso cuando te tiras del bongee?, eso depende de la longitud de la liga, su módulo de Young, tu peso y una buena suerte para no estrellarte. ¡Aguanta! y no te revientes, mejor aplica las siguientes fórmulas. "
        },
      ] 
    },
    { 
      title: 'Hidrostática', 
      data: [
        { 
          title: 'Fórmulas del Principio de Arquímedes y de presión hidrostática', 
          src: "../../../assets/fisica/FormulasPrincipios.PNG", 
          description: "Un submarino sumergido aguanta mucha presión, ¿quieres calcularla?, o quizás quieras conocer la fuerza que eleva a un globo. Pues todo esto y más lo calcularemos con estas fórmulas. ¡Vamos a sumergirnos en ellas"
        },
        { 
          title: 'Fórmulas para el Principio de Pascal', 
          src: "../../../assets/fisica/FormulasPascal.PNG", 
          description: ""
        },
        { 
          title: 'Fórmulas para cuerpos que flotan y Principio de Bernoulli', 
          src: "../../../assets/fisica/FormulasCuerpos.PNG", 
          description: ""
        },
        { 
          title: 'Variable', 
          src: "../../../assets/fisica/VariableH.PNG", 
          description: "Para calcular el peso específico o gravedad específica se multiplica la densidad por la aceleración de la gravedad. Consulta las fórmulas de áreas y volúmenes, puedes necesitarlas en problemas relacionados con el Principio de Aquímedes o de Pascal. El peso aparente de un cuerpo se calcula restando la fuerza de flotación o empuje del peso del cuerpo."
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

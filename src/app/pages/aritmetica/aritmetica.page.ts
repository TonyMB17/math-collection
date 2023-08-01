import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';


@Component({
  selector: 'app-aritmetica',
  templateUrl: './aritmetica.page.html',
  styleUrls: ['./aritmetica.page.scss'],
})

@Injectable(
  {
    providedIn: 'root'
  })
  
export class AritmeticaPage implements OnInit {

  public formulas = [
    { 
      title: 'CONJUNTOS', 
      data: [
        { 
          title: 'Clases de conjunto Finito', 
          src: "../../../assets/aritmetica/ConjuuntoFinito.jpg", 
          description: "Un conjunto finito es una colección de elementos con un número limitado y contable de miembros."
        },
        { 
          title: 'Clases de conjunto Infinito', 
          src: "../../../assets/aritmetica/ConjuntosInfinitos.jpg", 
          description: "Conjunto Infinito: Un conjunto que contiene un número ilimitado de elementos. Puede ser numerable o no numerable."
        },
        { 
          title: 'Conjunto Universal', 
          src: "../../../assets/aritmetica/ConjuntoUniversal.jpg", 
          description: "Conjunto Universal: Es el conjunto que contiene todos los elementos relevantes para una cierta situación o contexto particular. En otras palabras, es el conjunto que abarca todos los elementos que se están considerando en un determinado problema o análisis."
        },
        { 
          title: 'Conjunto Nulo o Vacio', 
          src: "../../../assets/aritmetica/ConjuntoNulo.jpg", 
          description: "Conjunto Nulo o Vacío: Es el conjunto que no contiene ningún elemento. Se representa matemáticamente con el símbolo {} o simplemente ∅. El conjunto vacío es un concepto importante en teoría de conjuntos y se define como el conjunto que no tiene miembros. Es diferente del conjunto que contiene el valor 0 o el conjunto con un solo elemento 0. El conjunto vacío es único y es un elemento básico en el álgebra de conjuntos. Por ejemplo, si consideramos el conjunto de los números enteros mayores que 10 y menores que 5, no encontraremos ningún número que cumpla esa condición. Por lo tanto, este conjunto sería el conjunto vacío: ∅ = {}."
        },
        { 
          title: 'Conjunto Unitario (Singleton)', 
          src: "../../../assets/aritmetica/ConjuntoUnitario.jpg", 
          description: "Conjunto Unitario: Es un conjunto que contiene exactamente un solo elemento. En otras palabras, un conjunto es unitario si y solo si tiene cardinalidad 1, es decir, consta de un único miembro."
        },
        { 
          title: 'Conjunto Potencia', 
          src: "../../../assets/aritmetica/ConjuntoPotencia.jpg", 
          description: "El conjunto potencia de un conjunto dado es el conjunto que contiene todos los subconjuntos posibles que se pueden formar a partir de los elementos del conjunto original, incluyendo el conjunto vacío. Se representa matemáticamente como 'P(A)', donde 'A' es el conjunto original."
        },
        { 
          title: 'Numero de Subconjuntos', 
          src: "../../../assets/aritmetica/Numero de Subconjuntos.PNG", 
          description: "El número de subconjuntos de un conjunto con 'n' elementos es 2 elevado a la 'n'."
        },
        { 
          title: 'Numero de Subconjuntos Propios', 
          src: "../../../assets/aritmetica/Numero de SubconjuntosPropios.PNG", 
          description: "El número de subconjuntos propios de un conjunto con 'n' elementos es 2 elevado a la 'n' menos 1. Un subconjunto propio de un conjunto es un subconjunto que contiene al menos un elemento del conjunto original pero no es igual al conjunto completo. La razón por la cual se resta 1 al número total de subconjuntos (2^n - 1) es para excluir el conjunto vacío, que también es un subconjunto pero no es considerado propio, ya que no contiene ningún elemento del conjunto original.En resumen, el número de subconjuntos propios de un conjunto con 'n' elementos es 2^n - 1."
        },
        { 
          title: 'Union o Reunion', 
          src: "../../../assets/aritmetica/Union.PNG", 
          description: "La unión o reunión de dos o más conjuntos es una operación en teoría de conjuntos que crea un nuevo conjunto que contiene todos los elementos que pertenecen a al menos uno de los conjuntos originales. En otras palabras, la unión de dos conjuntos A y B, denotada como A ∪ B, consiste en combinar todos los elementos de A y B sin duplicarlos. Si un elemento está presente en ambos conjuntos, se toma solo una vez en el conjunto unión. Por ejemplo, si A = {1, 2, 3} y B = {3, 4}, entonces A ∪ B = {1, 2, 3, 4}."
        },
        { 
          title: 'Interseccion', 
          src: "../../../assets/aritmetica/Interseccion.png", 
          description: "La intersección de dos o más conjuntos es una operación en teoría de conjuntos que crea un nuevo conjunto que contiene solo los elementos que pertenecen a todos los conjuntos originales. En otras palabras, la intersección de dos conjuntos A y B, denotada como A ∩ B, consiste en seleccionar solo aquellos elementos que están presentes en ambos conjuntos. Por ejemplo, si A = {1, 2, 3} y B = {3, 4}, entonces A ∩ B = {3}, ya que es el único elemento que se encuentra en ambos conjuntos."
        },
        { 
          title: 'Diferencia', 
          src: "../../../assets/aritmetica/Diferencia.PNG", 
          description: "La diferencia de dos conjuntos A y B, denotada como A - B o A \ B, es una operación en teoría de conjuntos que crea un nuevo conjunto que contiene los elementos que están en A pero no están en B. En otras palabras, la diferencia de conjuntos A - B consiste en seleccionar todos los elementos que pertenecen a A pero que no están presentes en B. Por ejemplo, si A = {1, 2, 3, 4} y B = {3, 4, 5}, entonces A - B = {1, 2}, ya que los elementos 1 y 2 están en A pero no están en B. Es importante tener en cuenta que el orden de la diferencia importa. En el caso de B - A, se seleccionarían los elementos que pertenecen a B pero no están en A."
        },
        { 
          title: 'Diferencia Simetrica', 
          src: "../../../assets/aritmetica/DiferenciaSimetrica.PNG", 
          description: "La diferencia simétrica de dos conjuntos A y B, denotada como A Δ B o A ⊕ B, es una operación en teoría de conjuntos que crea un nuevo conjunto que contiene los elementos que están en A o en B, pero no en ambos conjuntos simultáneamente. En otras palabras, la diferencia simétrica de conjuntos A y B consiste en seleccionar todos los elementos que pertenecen exclusivamente a uno de los conjuntos, es decir, los elementos que están en A pero no en B, y los elementos que están en B pero no en A. Por ejemplo, si A = {1, 2, 3, 4} y B = {3, 4, 5}, entonces A Δ B = {1, 2, 5}, ya que los elementos 1 y 2 están en A pero no en B, y el elemento 5 está en B pero no en A."
        },
        { 
          title: 'Complemento de un conjunto', 
          src: "../../../assets/aritmetica/Complemento.PNG", 
          description: "El complemento de un conjunto es una operación en teoría de conjuntos que crea un nuevo conjunto que contiene todos los elementos que no están en el conjunto original, pero que sí pertenecen a un conjunto más grande, conocido como el conjunto universal. Formalmente, si tenemos un conjunto 'A' contenido en el conjunto universal 'U', el complemento de 'A', denotado como 'A'', 'A^c' o 'Aᶜ', está formado por todos los elementos que están en 'U' pero no están en 'A'. Por ejemplo, si consideramos el conjunto universal de los números enteros 'U = {..., -2, -1, 0, 1, 2, ...}' y un conjunto 'A = {1, 2, 3}', entonces el complemento de 'A' sería 'A' = {..., -2, -1, 0}'."
        },
        { 
          title: 'Conjunto Disjunto', 
          src: "../../../assets/aritmetica/ConjuntoDisjunto.png", 
          description: "Un conjunto disjunto, también conocido como conjunto disyunto o conjunto no intersecante, es una colección de conjuntos que no tienen elementos en común. Es decir, dos o más conjuntos se consideran disjuntos si su intersección es el conjunto vacío. Formalmente, si tenemos varios conjuntos A₁, A₂, ..., Aₙ, se dice que son disjuntos si para cualquier par de conjuntos Aᵢ y Aⱼ, donde i ≠ j, se cumple que Aᵢ ∩ Aⱼ = ∅ (conjunto vacío)."
        },
      ] 
    },
    { 
      title: 'LÓGICA PROPOSICIONAL', 
      data: [
        { 
          title: 'Tabla de verdad de la negación (¬):', 
          src: "data:image/jpeg;base64,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UkroGTCDuNg2iWhxY07XPv3Kp9Kn/StQ9md/IKHonBy+4aNYOoPmhi4uV1d8UMbWMNdzWlpjALsEgYdnnyk597K/QqpcWMLh9YsaSPxxvWZfAvqJBERFEREBTLHhlf2S58WsqamWPDK/slz4tZBQcCQQDg43Hxg45964ngNrN2W3qVS5O1zqskbGsZE1m1G8bTJCRvzjH4Lt/kvzzX520NZguOOzFbqTV5XczeNhbtx5PlLRgKZ/00q6fduyanahFhpqwMiLm8S3b46QEiLb8gGD5d4XYLmeAVNzavdEgIltyPvSZGHAynLGH/tZsN/0rplegREQEREBERBJHho9jd8YKspI8NHsbvjBVkBERAREQEREBERAREQEREGtqP3Uv5Un8Ssei+D1/Z4f4BbUkYcC08xBafUVNi4PVmtawMdhoDQOOl5gMD+5B54U6GL1eSo+WSNkgDXui2NstznZy4HcVm0PTe5oY6/GvkDGhjXyhofsgYAOyAPcvPINfzHddL2k5Br+Y7rpe0gp4RTOQa/mO66XtJyDX8x3XS9pBTRTOQa/mO66XtJyDX8x3XS9pBTRTOQa/mO66XtJyDX8x3XS9pBTUywP+Mr+yXPi1k5Br+Y7rpe0sTuDVUubJxbtprXsB4+X+lxaXf3f5W/sgrgKHwt4LV9QjiisbWI52TjZxnLf7TkHcQSD61s8gVvMd10vaX3kGv5juul7SCgxgAAAwAMAfgvamcg1/Md10vaTkGv5juul7SCmimcg1/Md10vaTkGv5juul7SCmimcg1/Md10vaTkGv5juul7SCmimcg1/Md10vaTkGv5juul7SDwPDR7G74wVZaFPSIYnmVjSHFnF5L3u+rnOMOJ8a30BERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//2Q==", 
          description: "La tabla de verdad de la negación, también conocida como operador NOT o complemento, muestra los resultados de aplicar el operador de negación a una proposición lógica. La negación cambia el valor de verdad de una proposición de verdadero a falso o de falso a verdadero."
        },
        { 
          title: 'Tabla de verdad de la conjunción (∧):', 
          src: "https://matediscretasu3.files.wordpress.com/2011/10/conjuncion.png", 
          description: "La tabla de verdad de la conjunción, también conocida como operador AND, muestra los resultados de aplicar la operación de conjunción lógica a dos proposiciones. La conjunción de dos proposiciones, denotada como 'P ∧ Q', es verdadera (V) solo cuando ambas proposiciones 'P' y 'Q' son verdaderas. Si alguna de las proposiciones es falsa, el resultado de la conjunción será falso (F)."
        },
        { 
          title: 'Tabla de verdad de la disyunción (∨):', 
          src: "https://3.bp.blogspot.com/_5MBjaUDlp-s/TCTOh2GFwPI/AAAAAAAAACk/KnzqmVmeU1k/s1600/JAJAJA.png", 
          description: "La tabla de verdad de la disyunción, también conocida como operador OR, muestra los resultados de aplicar la operación de disyunción lógica a dos proposiciones. La disyunción de dos proposiciones, denotada como 'P ∨ Q', es verdadera (V) cuando al menos una de las proposiciones 'P' o 'Q' es verdadera. Si ambas proposiciones son falsas, el resultado de la disyunción es falso (F)."
        },
        { 
          title: 'Tabla de verdad de la implicación (→):', 
          src: "https://4.bp.blogspot.com/-yETRpQKdGq4/WVVePAiWxKI/AAAAAAAAAF0/4tdiwozGug0lNeYXXgfyOH4sTFtolczCQCLcBGAs/s280/LERO.png", 
          description: "La tabla de verdad de la implicación, también conocida como operador de implicación condicional, muestra los resultados de aplicar la operación de implicación lógica a dos proposiciones. La implicación condicional de dos proposiciones 'P' y 'Q', denotada como 'P → Q', es verdadera (V) excepto en el caso en que P sea verdadera (V) y 'Q' sea falsa (F). En ese caso, la implicación es falsa (F)."
        },
        { 
          title: 'Tabla de verdad del bicondicional (↔):', 
          src: "https://lh5.ggpht.com/-wgeeQmexcps/Ui0ef1jkP_I/AAAAAAAAKu4/tcTVVGXJ8Dc/s72-c/image_thumb.png?imgmax=800", 
          description: "La tabla de verdad del bicondicional muestra los resultados de la operación de doble implicación lógica entre dos proposiciones. El bicondicional es verdadero (V) cuando ambas proposiciones tienen el mismo valor de verdad (ambas verdaderas o ambas falsas), y es falso (F) cuando las proposiciones tienen diferentes valores de verdad."
        },
        { 
          title: 'Algebra Proposicional:', 
          src: "../../../assets/aritmetica/AlgebraProposicional.png", 
          description: "El Álgebra Proposicional, también conocida como lógica proposicional o cálculo proposicional, es una rama de la lógica y las matemáticas que se ocupa del estudio y manipulación de proposiciones lógicas y sus operaciones. En el Álgebra Proposicional, las proposiciones se representan mediante símbolos y se combinan utilizando operadores lógicos para formar nuevas proposiciones."
        },
        { 
          title: 'Leyes Logicas', 
          src: "../../../assets/aritmetica/LeyesLogicas.png", 
          description: "Las leyes lógicas, también conocidas como leyes de la lógica proposicional o reglas de inferencia, son principios fundamentales que rigen la manipulación de proposiciones en el Álgebra Proposicional. Estas leyes permiten simplificar, transformar y demostrar la validez de argumentos lógicos. Algunas de las leyes lógicas más comunes son:"
        },
        { 
          title: 'Leyes y Propiedades Combinadas', 
          src: "../../../assets/aritmetica/LeyesPropiedadesCombinadas.jpg", 
          description: "Las leyes y propiedades combinadas del Álgebra Proposicional son reglas que resultan de combinar múltiples leyes lógicas para simplificar expresiones lógicas y demostrar equivalencias. Al aplicar estas combinaciones, se pueden simplificar proposiciones de manera eficiente y razonar sobre argumentos lógicos de forma más concisa. Estas reglas son fundamentales en la lógica y se utilizan en diversas áreas de las matemáticas y la informática para manipular y analizar proposiciones lógicas de manera efectiva."
        },
      ] 
    },
    { 
      title: 'SISTEMA DE NÚMEROS ENTEROS.', 
      data: [
        { 
          title: 'Conmutatividad de la suma', 
          src: "https://unigal.mx/wp-content/uploads/2021/09/PROPIEDAD-CONMUTATIVA-DE-LA-SUMA.jpg", 
          description: "La conmutatividad de la suma es una propiedad fundamental de las operaciones aritméticas que se aplica a los números. Esta propiedad establece que el orden de los términos en una suma no afecta al resultado final."
        },
        { 
          title: 'Conmutatividad de la multiplicación', 
          src: "https://www.smartick.es/blog/wp-content/uploads/propiedad_conmutativa.png", 
          description: "La conmutatividad de la multiplicación es una propiedad esencial de las operaciones aritméticas que se aplica a los números. Esta propiedad establece que el orden de los factores en una multiplicación no afecta al resultado final."
        },
        { 
          title: 'Asociatividad de la suma', 
          src: "https://www.mundoprimaria.com/wp-content/uploads/2022/01/propiedad-asociativa-de-la-suma.png", 
          description: "La asociatividad de la suma es una propiedad básica de las operaciones aritméticas que se aplica a los números. Esta propiedad establece que el agrupamiento de los términos en una suma no afecta al resultado final."
        },
        { 
          title: 'Asociatividad de la multiplicación', 
          src: "https://www.smartick.es/blog/wp-content/uploads/propiedad_asociativa.png", 
          description: "La asociatividad de la multiplicación es una propiedad fundamental de las operaciones aritméticas que se aplica a los números. Esta propiedad establece que el agrupamiento de los factores en una multiplicación no afecta al resultado final."
        },
        { 
          title: 'Distributividad', 
          src: "https://www.neurochispas.com/wp-content/uploads/2020/12/Propiedad-distributiva-de-la-multiplicacion.png", 
          description: "La propiedad de distributividad es una de las propiedades fundamentales en las operaciones aritméticas y algebraicas. Se aplica tanto a la suma como a la multiplicación y es una regla que permite simplificar y manipular expresiones matemáticas. En términos generales, la propiedad de distributividad establece que la suma y la multiplicación se pueden combinar de cierta manera sin alterar el resultado final. Hay dos formas de distributividad:"
        },
        { 
          title: 'Elemento neutro de la suma', 
          src: "https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/sumar_y_restar/image/propsuma6_xl.png", 
          description: "El elemento neutro de la suma, también conocido como identidad aditiva, es un concepto fundamental en las operaciones aritméticas. En el conjunto de los números reales, el elemento neutro de la suma es el número cero (0)."
        },
        { 
          title: 'Elemento neutro de la multiplicación', 
          src: "https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/multiplicacion_y_division/image/propmulti6_2_xl.png", 
          description: "El elemento neutro de la multiplicación, también conocido como identidad multiplicativa, es un concepto esencial en las operaciones aritméticas. En el conjunto de los números reales y en otros conjuntos numéricos, el elemento neutro de la multiplicación es el número uno (1)."
        },
        { 
          title: 'Elemento inverso aditivo', 
          src: "https://i.ytimg.com/vi/l_t_bVVET84/maxresdefault.jpg", 
          description: "El elemento inverso aditivo, también conocido como opuesto aditivo o inverso aditivo, es un concepto fundamental en aritmética y álgebra. En el conjunto de los números reales, para cada número 'a', existe un único número 'b' que, al sumarlo con 'a', da como resultado el elemento neutro aditivo, que es el número cero (0)."
        },
        { 
          title: 'Elemento inverso multiplicativo (recíproco):', 
          src: "https://i.ytimg.com/vi/8seg2V378zs/maxresdefault.jpg", 
          description: "El elemento inverso multiplicativo, también conocido como inverso multiplicativo o recíproco, es un concepto importante en aritmética y álgebra. En el conjunto de los números reales y en otros conjuntos numéricos, excepto el número cero, para cada número 'a' diferente de cero, existe un único número 'b' que, al multiplicarlo con 'a', da como resultado el elemento neutro multiplicativo, que es el número uno (1)."
        },
      ] 
    },
    { 
      title: 'SISTEMAS DE NUMERACIÓN', 
      data: [
        { 
          title: 'Principales Sistemas de numeracion', 
          src: "../../../assets/aritmetica/PrincipalesSistemasNumeracion.PNG", 
          description: "Los principales sistemas de numeración son sistemas utilizados para representar y contar cantidades. Cada sistema se basa en reglas específicas para representar los números y su base define la cantidad de símbolos que se utilizan para expresar los valores."
        },
        { 
          title: 'Numeros Capicuas', 
          src: "../../../assets/aritmetica/NumeroCapicua.jpg", 
          description: "Un número capicúa puede ser de cualquier longitud, desde números de una sola cifra (por ejemplo, 1, 2, 3) hasta números más largos (por ejemplo, 121, 787, 13331)."
        },
        { 
          title: 'Descomposicion polinomica de un numero', 
          src: "../../../assets/aritmetica/DescomposicionPolinomica.jpg", 
          description: "La descomposición polinómica de un número es una representación matemática que descompone dicho número en una suma de términos con coeficientes enteros. Cada término se obtiene multiplicando una potencia de la variable x o cualquier otra letra utilizada para denotar la variable) por un coeficiente entero."
        },
        { 
          title: 'Cambio de base', 
          src: "../../../assets/aritmetica/CambioBase.jpg", 
          description: "El cambio de base es una operación que consiste en representar un número de un sistema numérico a otro. En matemáticas, los números pueden expresarse en diferentes sistemas de numeración, como el sistema decimal (base 10), binario (base 2), octal (base 8), hexadecimal (base 16), entre otros."
        },
        { 
          title: 'Descomposicion Polinomica', 
          src: "../../../assets/aritmetica/DescomposicionPolinomica1.PNG", 
          description: "La descomposición polinómica es una técnica en álgebra que consiste en descomponer un polinomio en una suma de términos más simples. En particular, el objetivo es expresar el polinomio como una combinación de factores, ya sean lineales o cuadráticos, multiplicados por coeficientes."
        },
        { 
          title: 'Metodo Ruffini', 
          src: "../../../assets/aritmetica/DescomposicionRuffini.jpg", 
          description: "El método de Ruffini, también conocido como regla de Ruffini, es una técnica utilizada para dividir un polinomio por un binomio de la forma (x - a), donde a es una constante. Este método es una forma rápida y eficiente de realizar la división de polinomios y encontrar el cociente y el residuo."
        },
        { 
          title: 'Forma Practica', 
          src: "../../../assets/aritmetica/FormaPractica.PNG", 
          description: "------"
        }
      ] 
    },
    { 
      title: 'DIVISIBILIDAD', 
      data: [
        { 
          title: 'Múltiplo:', 
          src: "../../../assets/aritmetica/Multiplo.PNG", 
          description: "Múltiplo, de un número entero, “B”, es otro número “A”, tal que A = B x C, para algún entero “C”. Así, 45 es múltiplo de 15 porque 45 = 15 x 3. En otras palabras “A” es múltiplo de “B” cuando al dividir “A” entre “B” el cociente es un número entero y no deja residuo."
        },
        { 
          title: 'Sucesión de Múltiplos:', 
          src: "../../../assets/aritmetica/SucesionMultiplos.PNG", 
          description: "Los múltiplos de un número se obtienen multiplicándolo por los sucesivos números naturales y por sus opuestos, ±1, ±2, ±3… Por tanto, cualquier número tiene infinitos múltiplos."
        },
        { 
          title: 'Operaciones con Múltiplos:', 
          src: "../../../assets/aritmetica/OperacionesMultiplos.PNG", 
          description: "En las operaciones con múltiplos de un mismo módulo, se cumple:"
        },
        { 
          title: 'Divisibilidad por 2 ó múltiplos de 2:', 
          src: "../../../assets/aritmetica/DivisibilidadPor2.PNG", 
          description: "Un número es múltiplo de 2  cuando termina en cifra cero o par, como:"
        },
        { 
          title: 'Divisibilidad por 3 ó múltiplos de 3:', 
          src: "../../../assets/aritmetica/DivisibilidadPor3.PNG", 
          description: "Un número es múltiplo de 3 cuando la suma de sus cifras es un múltiplo de 3, como:"
        },
        { 
          title: 'Divisibilidad por 4 ó múltiplos de 4:', 
          src: "../../../assets/aritmetica/DivisibilidadPor4.PNG", 
          description: "Un número es múltiplo de 4 cuando el número que forman las dos últimas cifras del número es un múltiplo de 4. Como:"
        },
        { 
          title: 'Divisibilidad por 5 ó múltiplos de 5:', 
          src: "../../../assets/aritmetica/DivisibilidadPor5.PNG", 
          description: "Un número es múltiplo de 5 cuando la última cifra del número es cero o 5. Como:"
        },
        { 
          title: 'Divisibilidad Aplicada al Binomio de Newton', 
          src: "../../../assets/aritmetica/DivisibilidadBinomioN.PNG", 
          description: "Sirve para hallar residuos de divisiones sin necesidad de conocer el cociente. En su mayoría se aplica cuando el dividendo es muy grande. Existen dos casos"
        },
        { 
          title: 'Restos Potenciales:', 
          src: "../../../assets/aritmetica/RestoPotencial.PNG", 
          description: "Los restos potenciales son los residuos que dejan las potencias enteras, sucesivas y positivas de un número (N≠0) al ser dividido por el módulo “n”."
        },
      ] 
    },
    { 
      title: 'NÚMEROS PRIMOS.', 
      data: [
        { 
          title: 'Divisor Propio:', 
          src: "../../../assets/aritmetica/DivisorPropio.PNG", 
          description: "Es todo aquel divisor del número menor que dicho número"
        },
        { 
          title: 'Numero Primo', 
          src: "../../../assets/aritmetica/NumeroPrimo.PNG", 
          description: "Llamados también números primos absolutos; número primo es aquel número que tiene dos divisores únicamente: la unidad y el mismo."
        },
        { 
          title: 'Números Compuestos', 
          src: "../../../assets/aritmetica/NumeroCompuesto.PNG", 
          description: "Se llama número compuesto a todo número que tenga más de dos divisores. Esta serie es más abundante e infinita. Como por ejemplo:"
        },
        { 
          title: 'Números Primos Entre Si o Primos Relativos (PESI)', 
          src: "../../../assets/aritmetica/NumerosPrimosRelativos.PNG", 
          description: "Se dice que dos o más números son primos entre sí, solo si tienen un único divisor común que siempre es la unidad."
        },
        { 
          title: 'Descompocicion Canonica', 
          src: "../../../assets/aritmetica/DescomposicionCanonicaFactoresPrimos.PNG", 
          description: "Todo número entero mayor que uno se puede descomponer como el producto de sus factores primos elevados a exponentes enteros positivos y dicha descomposición es única."
        },
        { 
          title: 'Tabla de Divisores de el Número 1800', 
          src: "../../../assets/aritmetica/Tabla1800.PNG", 
          description: "Primero hallamos todas la potencias consecutivas del 2 y luego estos resultados colocamos a la cabeza de la tabla: En seguida hallamos las potencias del 3 y del 5 empezando con el exponente 1 y colocamos estos resultados en columna. Luego multiplicamos todos los factores del 3 con los factores del 5 y colocamos en seguida (también en columna)."
        },
        { 
          title: 'Cantidad de los Divisores de un Número', 
          src: "../../../assets/aritmetica/CantidadDivisoresNumero.PNG", 
          description: "Para hallar la cantidad de los divisores de un número  (CD(N)) primero se descompone a los números en sus factores primos"
        },
        { 
          title: 'Cantidad de Divisores Compuestos de un Número', 
          src: "../../../assets/aritmetica/CantidadDivisoresCompuestoNumero.PNG", 
          description: "Para hallar la cantidad de divisores compuestos de un número N, se resuelve con la fórmula:"
        },
        { 
          title: 'Suma de los Divisores de un Número', 
          src: "../../../assets/aritmetica/SumaDivisoresNumero.PNG", 
          description: "Para hallar la cantidad de los divisores de un número (SD(N)) primero se descompone a los números en sus factores primos."
        },
        { 
          title: 'Producto de los Divisores de un Número', 
          src: "../../../assets/aritmetica/ProductoDivisoresNumero.PNG", 
          description: "Para hallar el producto de los divisores de un número (PD(N)); primero se necesita hallar la cantidad de los divisores del número CD(N); la fórmula que nos permite  encontrar el producto de divisores es:"
        },
        { 
          title: 'Suma de las Inversas de los Divisores de un Número', 
          src: "../../../assets/aritmetica/SumaInversasDivisorNumero.PNG", 
          description: "Para hallar la suma de las inversas de los divisores de un número (SID(N)), primero se tiene que hallar la suma de los divisores del número SD(N); la fórmula que nos permite a encontrar la suma de las inversas de los divisores del número es:"
        },
      ] 
    },
    { 
      title: 'MÁXIMO COMÚN DIVISOR Y MÍNIMO COMÚN MÚLTIPLO', 
      data: [
        { 
          title: 'Máximo Común Divisor (M.C.D.)', 
          src: "../../../assets/aritmetica/MaximoComunDivisor.PNG", 
          description: "Se llama máximo común divisor de dos o más números al mayor de los divisores comunes a esos números. Se designa por las iniciales M.C.D. ó D. Así el máximo común divisor de los números a, b y c, se escribirá:"
        },
        { 
          title: 'Descomposición de los Números en sus Factores Primos', 
          src: "../../../assets/aritmetica/DescomposicionNumerosFactoresPrimos.PNG", 
          description: "Cuando los números son muy grandes y mentalmente no se puede determinar por que números será divisible y nos resulta sumamente laborioso se recurre a descomponer pacientemente cada uno de los números en forma canónica (Teorema fundamental de la aritmética). Regla: Para hallar el M.C.D. de dos o más números, se les descompone en sus factores primos y se multiplican los factores comunes afectados de sus menores exponentes."
        },
        { 
          title: 'Descomposición Simultánea de los Números', 
          src: "../../../assets/aritmetica/DescomposicionSimultaneaNumeros.PNG", 
          description: "El método consiste en dividir todos los números al mismo tiempo por un factor común, los cocientes nuevamente se dividen por un factor común y así sucesivamente hasta que nos queden cocientes o números primos entre sí. Luego el M.C.D. de los números será el producto de los factores comunes."
        },
        { 
          title: 'Corolario 1º:', 
          src: "../../../assets/aritmetica/Corolario1.PNG", 
          description: "El M.C.D. de dos números no divisibles el uno por el otro, es el mismo que el del menor y el resto por defecto o por exceso de su división. Si los tres pares de números A, B; B, R; B y R’ tienen los mismos divisores comunes, el mayor divisor común de cada par será el mismo en los tres pares."
        },
        { 
          title: 'Corolario 2º:', 
          src: "../../../assets/aritmetica/Corolario2.PNG", 
          description: "descripcion de la fornula 1"
        },
        { 
          title: 'Mínimo Común Múltiplo (M.C.M.)', 
          src: "../../../assets/aritmetica/MinimoComunMultiplo.PNG", 
          description: "Se llama mínimo común múltiplo de dos o as números al menor múltiplo común de esos números. De designa por las iniciales M.C.M. ó M. Así el mínimo común múltiplo de los números a, b y c, se escribirá:"
        },
        { 
          title: 'Métodos para Hallar el M.C.M.', 
          src: "../../../assets/aritmetica/MetodosHallarMCM.PNG", 
          description: "Para hallar el mínimo común múltiplo, tenemos los siguientes métodos:"
        },
        { 
          title: 'Por Descomposición de los Números en sus Factores Primos', 
          src: "../../../assets/aritmetica/DescomposicionNumerosFactoresPrimos2.PNG", 
          description: "La descomposición de los números en sus factores primos, combinada con la condición de divisibilidad, nos permite obtener por un procedimiento rápido el M.C.M. de dos o varios números, aplicando la siguiente regla. Regla: El M.C.M. de varios números, será el producto de todos los factores primos comunes y no comunes afectados a sus mayores exponentes."
        },
        { 
          title: 'Por Descomposición Simultanea o al Mismo Tiempo de los Números', 
          src: "../../../assets/aritmetica/DescomposicionSimultaneaTiempoNumeros.PNG", 
          description: "Este método es aun más rápido que el anterior, y consiste en dividir cada uno de los números dados por su menor divisor; lo propio se hace con los cocientes hasta obtener que todos los cocientes sean 1. El M.C.M. es el producto de todos los divisores primos. Como ejemplo hallemos y comprobemos el M.C.M. con los números anteriores."
        },
        { 
          title: 'Por el Método del M.C.D.', 
          src: "../../../assets/aritmetica/MetodoMCD.PNG", 
          description: "Teorema (teorema fundamental): El M.C.M. de dos números, es el cociente de dividir su producto por su M.C.D."
        },
      ] 
    },
    { 
      title: 'RAZONES Y PROPORCIONES', 
      data: [
        { 
          title: 'Razón Aritmética o por Diferencia', 
          src: "https://paginaeducativa.com/wp-content/uploads/Razon-Aritmetica-o-por-Diferencia.jpg", 
          description: "descripcion de la fornula 1"
        },
        { 
          title: 'Si al antecedente de una razón aritmética se le suma o se le resta un número, la razón queda aumentada o disminuida en ese número', 
          src: "https://paginaeducativa.com/wp-content/uploads/Propiedades-de-las-Razones-Aritmeticas-o-por-Diferencias.jpg", 
          description: "descripcion de la fornula 1"
        },
        { 
          title: 'Si al consecuente de una razón aritmética se le suma o resta un número, la razón queda disminuida en el primer caso y aumentada en el segundo en el mismo número', 
          src: "https://paginaeducativa.com/wp-content/uploads/Ejemplo-Propiedades-de-las-Razones-Aritmeticas-o-por-Diferencias.jpg", 
          description: "descripcion de la fornula 1"
        },
        { 
          title: 'Si al antecedente y consecuente de una razón aritmética se suma o resta un mismo número, la razón no varia.', 
          src: "https://paginaeducativa.com/wp-content/uploads/Formula-de-las-Razones-Aritmeticas-o-por-Diferencias.jpg", 
          description: "descripcion de la fornula 1"
        },
        { 
          title: 'Razón Geométrica o por Cociente', 
          src: "https://paginaeducativa.com/wp-content/uploads/Razon-Geometrica-o-por-Cociente.jpg", 
          description: "descripcion de la fornula 1"
        },
        { 
          title: 'Si el antecedente de una razón geométrica se multiplica o divide por un número, la razón queda multiplicada o dividida por ese número.', 
          src: "https://paginaeducativa.com/wp-content/uploads/Propiedades-De-Las-Razones-Geometricas-O-Por-Cocientes.jpg", 
          description: "descripcion de la fornula 1"
        },
        { 
          title: 'Si el consecuente de una razón geométrica se multiplica o divide por un número, la razón queda dividida en el primer caso y multiplicada en el segundo por ese mismo número.', 
          src: "https://paginaeducativa.com/wp-content/uploads/Ejemplo-De-Las-Razones-Geometricas-O-Por-Cocientes.jpg", 
          description: "descripcion de la fornula 1"
        },
        { 
          title: 'Si all antecedente y al consecuente de una razón geométrica se multiplica o divide por un mismo número, la razón, no varía.', 
          src: "https://paginaeducativa.com/wp-content/uploads/Propiedades-De-Las-Razones-Geometricas.jpg", 
          description: "descripcion de la fornula 1"
        },
      ] 
    },
    { 
      title: 'MAGNITUDES', 
      data: [
        { 
          title: 'Magnitudes Directamente Proporcionales', 
          src: "../../../assets/aritmetica/MagnitudDirectamenteProporcional.PNG", 
          description: "Dos magnitudes A y B son directamente proporcionales, cuando al aumentar A la magnitud B también aumenta en la misma proporción o viceversa. os magnitudes A y B son directamente proporcionales, cuando el COCIENTE de sus valores correspondientes resulta un valor constante. Si A y B son directamente proporcionales, se cumple"
        },
        { 
          title: 'Si dos magnitudes A y B son directamente proporcionales, entonces su gráfica resulta una recta:', 
          src: "../../../assets/aritmetica/MagnitudDirectamenteProporcional2.PNG", 
          description: ""
        },
        { 
          title: 'Magnitudes Inversamente Proporcionales', 
          src: "../../../assets/aritmetica/MagnitudInversamenteProporcional.PNG", 
          description: "Dos magnitudes A y B son inversamente proporcionales cuando al aumentar A la magnitud B disminuye en la misma proporción o viceversa. Dos magnitudes A y B son inversamente proporcionales cuando el PRODUCTO de sus valores correspondientes resulta ser un valor constante. Si A y B son inversamente proporcionales, se cumple:"
        },
        { 
          title: 'Si dos magnitudes A y B son inversamente proporcionales, entonces su gráfica resulta una curva que pertenece a una hipérbola equilátera:', 
          src: "../../../assets/aritmetica/MagnitudInversamenteProporcional2.PNG", 
          description: ""
        },
        { 
          title: 'Reparto Proporcional Directo:', 
          src: "../../../assets/aritmetica/RespartoProporcionalDirecto.PNG", 
          description: "Primer Caso: Repartir 1200 en partes D.P. a 3; 4 y 5. Determinar cada una de las partes. Solución: Sean a, b  y  c las tres partes, entonces:"
        },
        { 
          title: 'Reparto Proporcional Inverso:', 
          src: "../../../assets/aritmetica/RespartoProporcionalInverso.PNG", 
          description: "Ejemplo: Repartir 780 en tres partes que sean inversamente proporcionales a los números 6; 9 y 12. Determinar cada una de las partes. Solución: Sean a, b y  c  las tres partes que son I.P. a 6; 9 y 12 respectivamente; entonces se cumple que a; y c son  D.P. a 1/ 6; 1/ 9 y 1/ 12, respectivamente. Por lo que  volvemos al caso anterior: MCM (6; 9; 12) =36 y luego:"
        },
        { 
          title: 'Magnitudes Inversamente Proporcionales', 
          src: "../../../assets/aritmetica/RespartoProporcionalCompuesto.PNG", 
          description: "Ejemplo: Repartir 1500 en dos partes que sean D.P. a los números 2/ 3 y 5/ 6, e inversamente proporcional a los números 7/ 6 y  5/ 3 respectivamente."
        },
      ] 
    },
    { 
      title: 'REGLAS DE TRES', 
      data: [
        { 
          title: 'Regla de Tres Simple Directa:', 
          src: "../../../assets/aritmetica/ReglaTresSimpleDirecta.PNG", 
          description: "La regla de tres simple directa resulta de comparar dos magnitudes directamente proporcionales, por lo tanto el producto en aspa de sus valores son iguales. Ejemplo: Si 40 obreros hacen 100 m. de carretera por día, cuántos metros por  día harán 70 obreros."
        },
        { 
          title: 'Regla de Tres Simple Inversa:', 
          src: "../../../assets/aritmetica/ReglaTresSimpleInversa.PNG", 
          description: "Resulta de comparar dos magnitudes inversamente proporcionales, por lo tanto, el producto en línea de sus valores son iguales. Ejemplo: Si 45 obreros pueden hacer un edificio en 20 días; en cuánto tiempo harán 60 obreros la misma obra."
        },
        { 
          title: 'Regla de Tres Compuesta (Aplicación del Método:)', 
          src: "../../../assets/aritmetica/AplicacionMetodo.PNG", 
          description: "Se igualan los dos productos que resultan de multiplicar todos los valores que siguen a una misma raya."
        },
        { 
          title: 'Ejemplo: Sabiendo que 20 obreros, trabajando 6 horas diarias pueden hacer una obra en 10 días; determinar en cuántos días, 30 obreros doblemente hábiles, trabajando 8 horas diarias pueden hacer una obra cuya dificultad es dos veces la anterior.', 
          src: "../../../assets/aritmetica/AplicacionMetodo3.PNG", 
          description: ""
        },
        { 
          title: 'Luego, multiplicamos todos los valores que encontremos al seguir una raya y lo igualamos al resultado de la  multiplicación de todos los valores que se encuentren al seguir otra de las rayas; así:', 
          src: "../../../assets/aritmetica/AplicacionMetodo4.PNG", 
          description: ""
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

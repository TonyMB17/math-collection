import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { AlgebraPage } from '../algebra/algebra.page'
import { GeometriaPage } from '../geometria/geometria.page';
import { TrigonometriaPage } from '../trigonometria/trigonometria.page';
import { AritmeticaPage } from '../aritmetica/aritmetica.page';
import { EstadisticaPage } from '../estadistica/estadistica.page';
import { FisicaPage } from '../fisica/fisica.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public searchQuery = ''; 

  public formulas: any = [];

  filteredObjects!: any[];
  
  constructor(
    private modalCtrl: ModalController, 
    private formulasAlgebra: AlgebraPage,
    private formulasAritmetica: AritmeticaPage,
    private formulasGeometria: GeometriaPage,
    private formulasTrigonometria: TrigonometriaPage,
    private formulasEstadistica: EstadisticaPage,
    private formulasFisica: FisicaPage,
    ) { }

  ngOnInit() {     
    console.log(Object.keys(this.form).length)
    console.log(this.f_Algebra)
  } 

  public f_Algebra = this.formulasAlgebra.getFormula();
  public f_Aritmetica = this.formulasAritmetica.getFormula();
  public f_Fisica = this.formulasFisica.getFormula();
  public f_Estadistica = this.formulasEstadistica.getFormula();
  public f_Geometria = this.formulasGeometria.getFormula();
  public f_Trigonometria = this.formulasTrigonometria.getFormula(); 
  

  addFormulas(){
    this.formulas.push(this.formulasAlgebra.getFormula());
    this.formulas.push(this.formulasAritmetica.getFormula());
    this.formulas.push(this.formulasFisica.getFormula());
    this.formulas.push(this.formulasEstadistica.getFormula());
    this.formulas.push(this.formulasGeometria.getFormula());
    this.formulas.push(this.formulasTrigonometria.getFormula());

    return this.formulas;
  }

  public form = this.addFormulas();

  //mis categorias de cursos
  
  categoriasFormulas: any = {
    'Aritmetica': this.f_Aritmetica.slice(0, 4),
    'Algebra': this.f_Algebra.slice(0, 4),
    'Geometria': this.f_Geometria.slice(0, 4),
    'Estadistica': this.f_Estadistica.slice(0, 4),
    'Trigonometria': this.f_Trigonometria.slice(0, 4),
    'Fisica': this.f_Fisica.slice(0, 4),
    // Otras categorías con sus respectivas fórmulas
  };

  
  async openModal(title: string, index: number) {
    this.playClickSound();

    // Buscar la fórmula por su título en el objeto formulas
    for(let i = 0;i<Object.keys(this.form).length;i++) {       
    
    const formula = this.form[i].find((f: any) => f.title === title);
  
    // Si se encontró la fórmula, abrir el modal
    if (formula) {
      const modal = await this.modalCtrl.create({
        component: ModalComponent,
        componentProps: {
          'titulo': formula.title,
          'datos': formula.data,
        },
      });
      return await modal.present();
    }  
  }
  }

 //Método para filtrar fórmulas según el término de búsqueda
 get filteredFormulas() {
  if (!this.searchQuery) {
    // Si no hay término de búsqueda, mostrar todas las fórmulas
    return this.formulas;
  } else {
    // Si hay un término de búsqueda, filtrar las fórmulas que coincidan con el término
    const normalizedQuery = this.searchQuery.trim().toLowerCase();
    const filteredFormulas: any[] = [];

    for (let i = 0; i < this.formulas.length; i++) {
      const formulasForCategory = this.formulas[i];
      const filteredCategory: any[] = formulasForCategory.filter((formula: any) =>
        formula.title.toLowerCase().includes(normalizedQuery)
      );

      if (filteredCategory.length > 0) {
        // Solo agregar la categoría si tiene fórmulas después de aplicar el filtro
        filteredFormulas.push({
          category: Object.keys(this.categoriasFormulas)[i],
          formulas: filteredCategory,
        });
      }
    }

    return filteredFormulas;
  }
}

  // Función para reproducir el sonido cuando se hace clic en el botón
  playClickSound(): void {
    const audio = new Audio();
    audio.src = '../../../assets/sounds/Click.mp3'; // Asegúrate de ajustar la ruta del archivo de audio según su ubicación en tu proyecto
    audio.load();
    audio.play();
  }

  
}

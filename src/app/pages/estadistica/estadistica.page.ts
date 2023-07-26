import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.page.html',
  styleUrls: ['./estadistica.page.scss'],
})
export class EstadisticaPage implements OnInit {

  public formulas = [
    { 
      title: 'Nombre del tema 1', 
      data: [
        { 
          title: 'Nombre de la formula 1.1', 
          src: "https://economipedia.com/wp-content/uploads/image-463.png", 
          description: "descripcion de la fornula 1"
        },
        { 
          title: 'Nombre de la formula 1.2', 
          src: "https://economipedia.com/wp-content/uploads/image-463.png", 
          description: "descripcion de la fornula 1"
        },
        { 
          title: 'Nombre de la formula 1.3', 
          src: "https://economipedia.com/wp-content/uploads/image-463.png", 
          description: "descripcion de la fornula 1"
        },
      ] 
    },
    { 
      title: 'Nombre del tema 2', 
      data: [
        { 
          title: 'Nombre de la formula 2.1', 
          src: "https://economipedia.com/wp-content/uploads/image-463.png", 
          description: "descripcion de la fornula 1"
        },
        { 
          title: 'Nombre de la formula 2.2', 
          src: "https://economipedia.com/wp-content/uploads/image-463.png", 
          description: "descripcion de la fornula 1"
        },
        { 
          title: 'Nombre de la formula 2.3', 
          src: "https://economipedia.com/wp-content/uploads/image-463.png", 
          description: "descripcion de la fornula 1"
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

}

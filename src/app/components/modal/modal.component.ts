import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {
  
  @Input()  titulo!: string;
  @Input()  datos!: any; 

  data = {};

  constructor(
    private modalCtrl: ModalController,
    public navController: NavController
    
  ) { }

  cancel() {
    this.playClickSound();
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  ngOnInit() {    
    this.data = this.datos;
  }

    // Función para reproducir el sonido cuando se hace clic en el botón
    playClickSound(): void {
      const audio = new Audio();
      audio.src = '../../../assets/sounds/ClickClose.mp3'; // Asegúrate de ajustar la ruta del archivo de audio según su ubicación en tu proyecto
      audio.load();
      audio.play();
    }

}

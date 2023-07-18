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
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  ngOnInit() {    
    this.data = this.datos;
  }

}

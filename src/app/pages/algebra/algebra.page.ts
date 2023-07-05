import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-algebra',
  templateUrl: './algebra.page.html',
  styleUrls: ['./algebra.page.scss'],
})
export class AlgebraPage implements OnInit {

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  pageTitle!: string;

  public formulas = [
    { title: 'Propiedad de exponentes', url: 'home', icon: 'home' },
    { title: 'Prop. de radicales', url: 'algebra', icon: 'calculator' },
    { title: 'Polinomios', url: '/folder/inbox', icon: 'mail' },
    { title: 'Productos', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Factorizacion', url: '/folder/favorites', icon: 'heart' },
    { title: 'Teorema del binomio', url: '/folder/archived', icon: 'archive' },
    { title: 'Fracciones algebraicas', url: '/folder/trash', icon: 'trash' },
    { title: 'Ecuaciones lineales', url: '/folder/spam', icon: 'warning' },    
  ];

  constructor() { }

  ngOnInit() {
    this.pageTitle = 'Algebra';
  }
  
}

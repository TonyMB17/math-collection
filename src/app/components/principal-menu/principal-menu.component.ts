import { Component, OnInit } from '@angular/core';
//import { MenuModel } from 'src/app/model/menu.model';

@Component({
  selector: 'app-principal-menu',
  templateUrl: './principal-menu.component.html',
  styleUrls: ['./principal-menu.component.scss'],
})

export class PrincipalMenuComponent  implements OnInit {

  public appPages = [
    { title: 'HOME', url: 'home', icon: 'home' },
    { title: 'Algebra', url: 'algebra', icon: 'calculator' },
    { title: 'Aritmetica', url: 'aritmetica', icon: 'calculator' },
    { title: 'Estadistica', url: 'estadistica', icon: 'calculator' },
    { title: 'Fisica', url: 'fisica', icon: 'calculator' },
    { title: 'Geometria', url: 'geometria', icon: 'calculator' },
    { title: 'Trigonometria', url: 'trigonometria', icon: 'calculator' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  
  constructor() { }

  ngOnInit() 
  {

  }  

}

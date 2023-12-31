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
    { title: 'Aritmetica', url: 'aritmetica', icon: 'add' },
    { title: 'Estadistica', url: 'estadistica', icon: 'analytics' },
    { title: 'Fisica', url: 'fisica', icon: 'magnet' },
    { title: 'Geometria', url: 'geometria', icon: 'diamond' },
    { title: 'Trigonometria', url: 'trigonometria', icon: 'chevron-back' },
    { title: 'Acerca de', url: 'extra', icon: 'bookmarks' },
    //{ title: 'Acerca de', url: 'extra', icon: 'bookmarks' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  
  constructor() { }

  ngOnInit() 
  {

  }  

}

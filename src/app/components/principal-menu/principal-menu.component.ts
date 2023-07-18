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
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },    
  ];
  
  constructor() { }

  ngOnInit() 
  {

  }  

}

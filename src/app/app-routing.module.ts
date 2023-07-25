import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },  {
    path: 'algebra',
    loadChildren: () => import('./pages/algebra/algebra.module').then( m => m.AlgebraPageModule)
  },
  {
    path: 'aritmetica',
    loadChildren: () => import('./pages/aritmetica/aritmetica.module').then( m => m.AritmeticaPageModule)
  },
  {
    path: 'trigonometria',
    loadChildren: () => import('./pages/trigonometria/trigonometria.module').then( m => m.TrigonometriaPageModule)
  },
  {
    path: 'geometria',
    loadChildren: () => import('./pages/geometria/geometria.module').then( m => m.GeometriaPageModule)
  },
  {
    path: 'estadistica',
    loadChildren: () => import('./pages/estadistica/estadistica.module').then( m => m.EstadisticaPageModule)
  },
  {
    path: 'fisica',
    loadChildren: () => import('./pages/fisica/fisica.module').then( m => m.FisicaPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

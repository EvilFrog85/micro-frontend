import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'page2',
    loadChildren: () => import('./page2/page2.module').then(m => m.Page2Module),
    data: { title: 'FE - MicroServices page 2' }
  },
  {
    path: 'page3',
    loadChildren: () => import('./page3/page3.module').then(m => m.Page3Module),
    data: { title: 'FE - MicroServices page 3' }
  },
  {
    path: 'signup',
    loadChildren: () => import('mfe-signup-form/Module').then(m => m.RegisterFormModule)
  },
  {
    path: '',
    loadChildren: () => import('./page1/page1.module').then(m => m.Page1Module),
    data: { title: 'FE - MicroServices Start' }
  },
  {
    path: '**',
    loadChildren: () => import('./page1/page1.module').then(m => m.Page1Module),
    data: { title: 'FE - MicroServices Start' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

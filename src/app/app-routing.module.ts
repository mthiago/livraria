import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ListaComponent } from './lista/lista.component';
import { GerenciadorComponent } from './gerenciador/gerenciador.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'lista', component: ListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

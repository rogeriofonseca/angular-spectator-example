import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCepComponent } from './list-cep/list-cep.component';

const routes: Routes = [
  {
  path: 'list-cep',
  component: ListCepComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

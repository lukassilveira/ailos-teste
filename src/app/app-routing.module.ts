import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpfConsultingComponent } from './cpf-consulting/cpf-consulting.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CpfConsultingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

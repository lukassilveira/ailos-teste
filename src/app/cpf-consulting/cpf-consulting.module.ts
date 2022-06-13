import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpfConsultingRoutingModule } from './cpf-consulting-routing.module';
import { CpfConsultingComponent } from './cpf-consulting.component';


@NgModule({
  declarations: [
    CpfConsultingComponent
  ],
  imports: [
    CommonModule,
    CpfConsultingRoutingModule
  ]
})
export class CpfConsultingModule { }

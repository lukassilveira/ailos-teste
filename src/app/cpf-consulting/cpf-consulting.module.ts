import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpfConsultingRoutingModule } from './cpf-consulting-routing.module';
import { CpfConsultingComponent } from './cpf-consulting.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CpfConsultingComponent
  ],
  imports: [
    CommonModule,
    CpfConsultingRoutingModule,
    FormsModule
  ]
})
export class CpfConsultingModule { }

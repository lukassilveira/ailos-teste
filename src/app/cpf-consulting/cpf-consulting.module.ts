import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpfConsultingRoutingModule } from './cpf-consulting-routing.module';
import { CpfConsultingComponent } from './cpf-consulting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { CpfSituationCardComponent } from '../cpf-situation-card/cpf-situation-card.component';


@NgModule({
  declarations: [
    CpfConsultingComponent,
    CpfSituationCardComponent
  ],
  imports: [
    CommonModule,
    CpfConsultingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class CpfConsultingModule { }

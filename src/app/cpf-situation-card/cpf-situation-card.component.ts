import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cpf-situation-card',
  templateUrl: './cpf-situation-card.component.html',
  styleUrls: ['./cpf-situation-card.component.css']
})
export class CpfSituationCardComponent implements OnInit {

  constructor() { }

  /**
   * Customer received by the request of @memberof CpfConsultingComponent
   */
  @Input() currentCustomer: any;

  /**
   * Data that is received by @Input currentCustomer
   */
  public name: string = '';
  public situation: string = '';

  /**
   * Setting the values received by @Input currentCustomer
   */
  ngOnInit(): void {
    this.name = this.currentCustomer.name;
    this.situation = this.currentCustomer.situation;
  }
}

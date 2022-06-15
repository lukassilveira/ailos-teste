import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cpf-situation-card',
  templateUrl: './cpf-situation-card.component.html',
  styleUrls: ['./cpf-situation-card.component.css']
})
export class CpfSituationCardComponent implements OnInit {

  constructor() { }

  @Input() currentCustomer: any;

  public name: string = '';
  public situation: string = '';

  ngOnInit(): void {
    this.name = this.currentCustomer.name;
    this.situation = this.currentCustomer.situation;
  }

}

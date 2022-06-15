import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent implements OnInit {

  constructor() { }

  @Input() account: any;

  public type: string = '';
  public number: string = '';

  ngOnInit(): void {
    this.type = this.account.type;
    this.number = this.account.number;
  }

}

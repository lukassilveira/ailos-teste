import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent implements OnInit {

  constructor() { }

  @Input() account: any;

  @Output() duplicateAccount = new EventEmitter<any>();

  public type: string = '';
  public number: string = '';

  ngOnInit(): void {
    this.type = this.account.type;
    this.number = this.account.number;
  }

  duplicateAccountEvent() {
    this.duplicateAccount.emit(this.account);
    console.log(this.account);
    
  }
}

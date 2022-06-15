import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent implements OnInit {

  constructor() { }

  /**
   * Account data that is received by @Customer
   */
  @Input() account: any;

  /**
   * Output event that triggers the @memberof CpfConsultingComponent receiveDuplicateAccountEvent function
   */
  @Output() duplicateAccount = new EventEmitter<any>();

  /**
   * Data that is received by @Input account
   */
  public type: string = '';
  public number: string = '';

  /**
   * Setting the values received by @Input account
   */
  ngOnInit(): void {
    this.type = this.account.type;
    this.number = this.account.number;
  }

  /**
   * Function that passes the account data through the EventEmitter
   */
  duplicateAccountEvent() {
    this.duplicateAccount.emit(this.account);
  }
}

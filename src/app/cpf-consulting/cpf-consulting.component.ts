import { Component } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cpf-consulting',
  templateUrl: './cpf-consulting.component.html',
  styleUrls: ['./cpf-consulting.component.css']
})
export class CpfConsultingComponent {

  /**
   * Placeholder Customer to simulate the data received from backend
   * @private
   */
  private placeholderCustomers = [
    {
      name: 'Mariane Sousa de Oliveira', cpf: '11122233344', situation: 'Regular', accounts: [
        { type: 'aplicação', number: '557932-4' },
        { type: 'corrente', number: '778461-8' }
      ]
    }
  ]

  /**
   * Placeholder Observable to simulate a request to backend
   * @private
   */
  private placeholderObservable = new Observable(object => {
    object.next(this.placeholderCustomers);
    object.complete();
  })

  /**
   * Customer that has the data manipulated to the view
   */
  public currentCustomer: any = null;

  /**
   * Boolean that controls the *ngIf of the error message
   * @type {boolean}
   */
  public notFoundCostumerMessage: boolean = false;

  /**
   * The form group that contains the input for CPF search
   * It contains a validators for the length and required
   * @type {FormGroup}
   */
  public formCPF: FormGroup = this.fb.group({
    cpf: [null, Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  /**
   * Function that runs on formCPF submit
   * Will search for the CPF on database based on the CPF on the form's input
   */
  onSubmitCPF() {
    let cpfToBeSearched = this.formCPF.get('cpf')?.value;
    this.placeholderObservable.subscribe((data: any) => {
      this.currentCustomer = data.find((customer: any) => customer.cpf == cpfToBeSearched);
      this.notFoundCostumerMessage = this.currentCustomer ? false : true;
    })
  }

  /**
   * Function that is triggered by the @Output event of @memberof AccountCardComponent
   * It receives the account and pushes itself to the array of accounts
   * @param {*} accountToReceive The account that is triggering the function
   */
  receiveDuplicateAccountEvent(accountToReceive: any) {
    this.currentCustomer.accounts.push(accountToReceive);
  }

  /**
   * Function that is used by 'Iniciar nova admissão' button
   * It resets the form and sets currentCustomer to null
   */
  resetCustomer() {
    this.currentCustomer = null;
    this.formCPF.reset();
  }

  /**
   * Getter to control many *ngIf of the html
   * @readonly
   * @type {boolean}
   */
  get hasCurrentCustomer(): boolean {
    return this.currentCustomer ? true : false;
  }
}

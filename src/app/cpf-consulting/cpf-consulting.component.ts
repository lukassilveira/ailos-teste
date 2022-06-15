import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cpf-consulting',
  templateUrl: './cpf-consulting.component.html',
  styleUrls: ['./cpf-consulting.component.css']
})
export class CpfConsultingComponent implements OnInit {

  private placeholderCustomers = [
    {
      name: 'Mariane Sousa de Oliveira', cpf: '11122233344', situation: 'Regular', accounts: [
        { type: 'aplicação', number: '557932-4' },
        { type: 'corrente', number: '778461-8' }
      ]
    }
  ]

  private placeholderObservable = new Observable(object => {
    object.next(this.placeholderCustomers);
    object.complete();
  })

  public currentCustomer: any = {};
  public notFoundCostumerMessage: boolean = false;

  public formCPF: FormGroup = this.fb.group({
    cpf: [null, Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  /**
   * Delete after!
   *
   * @memberof CpfConsultingComponent
   */
  ngOnInit(): void {
    this.currentCustomer = this.placeholderCustomers[0];
  }

  onSubmitCPF() {
    let cpfToBeSearched = this.formCPF.get('cpf')?.value;
    this.placeholderObservable.subscribe((data: any) => {
      this.currentCustomer = data.find((customer: any) => customer.cpf == cpfToBeSearched);
      if (this.currentCustomer) {

      } else {
        this.notFoundCostumerMessage = true;
      }
    })
  }
}

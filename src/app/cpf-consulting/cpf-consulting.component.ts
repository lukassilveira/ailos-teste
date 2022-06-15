import { Component } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cpf-consulting',
  templateUrl: './cpf-consulting.component.html',
  styleUrls: ['./cpf-consulting.component.css']
})
export class CpfConsultingComponent {

  private placeholderCustomers = [
    { name: 'Mariane Sousa de Oliveira', cpf: '11122233344' }
  ]
  
  private placeholderObservable = new Observable(object => {
    object.next(this.placeholderCustomers);
    object.complete();
  })

  private currentCustomer = {};

  public formCPF: FormGroup = this.fb.group({
    cpf: [null, Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  onSubmitCPF() {
    let cpfToBeSearched = this.formCPF.get('cpf')?.value;
    this.placeholderObservable.subscribe((data: any) => {
      this.currentCustomer = data.find((customer: any) => customer.cpf == cpfToBeSearched);
      if (this.currentCustomer) {
        
      } else {
        console.log('no customer found!'); 
      }
    })
  }
}

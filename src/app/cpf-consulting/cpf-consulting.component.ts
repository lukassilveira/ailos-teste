import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cpf-consulting',
  templateUrl: './cpf-consulting.component.html',
  styleUrls: ['./cpf-consulting.component.css']
})
export class CpfConsultingComponent implements OnInit {

  formCPF: FormGroup = this.fb.group({
    cpf: [null, Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])]
  });

  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
  }

  onSubmitCPF() {
    console.log(this.formCPF.value);

  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}

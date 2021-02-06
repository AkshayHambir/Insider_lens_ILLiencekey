import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  form: FormGroup = new FormGroup({   
    clientName: new FormControl('', [Validators.required,Validators.minLength(1),Validators.maxLength(100)]),
    cinNo: new FormControl('', [Validators.required,Validators.minLength(1),Validators.maxLength(50)]),
    address: new FormControl(''),
    coContactno: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(20),Validators.pattern("^[+0-9]*$")]),
    coemail: new FormControl('',[Validators.required,Validators.email,Validators.minLength(1),Validators.maxLength(50)]),
    itContactno: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(20),Validators.pattern("^[+0-9]*$")]),
    itemail: new FormControl('',[Validators.required,Validators.email,Validators.minLength(1),Validators.maxLength(50)]),
   
  });

  initializeFormGroup() {
    this.form.setValue({
      clientName: '',
      cinNo: '',
      address: '' ,
      coContactno: '',
      coemail: '',
      itContactno: '',
      itemail: '' 
    });
  }
}

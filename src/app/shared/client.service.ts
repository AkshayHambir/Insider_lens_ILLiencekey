import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    clientName: new FormControl('', [Validators.required,Validators.minLength(1),Validators.maxLength(100)]),
    cinNo: new FormControl('', [Validators.required,Validators.minLength(1),Validators.maxLength(50)]),
    address: new FormControl(''),
    coContactno: new FormControl('',[Validators.minLength(1),Validators.maxLength(20),Validators.pattern("^[+0-9]*$")]),
    coemail: new FormControl('',[Validators.required,Validators.email,Validators.minLength(1),Validators.maxLength(50)]),
    itContactno: new FormControl('',[Validators.minLength(1),Validators.maxLength(20),Validators.pattern("^[+0-9]*$")]),
    itemail: new FormControl('',[Validators.required,Validators.email,Validators.minLength(1),Validators.maxLength(50)]),
    noActiveDP: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
    subPlan: new FormControl('1',[Validators.required]),
    fromDate: new FormControl('',[Validators.required]),
    toDate: new FormControl('',[Validators.required])
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      clientName: '',
      cinNo: '',
      address: '' ,
      coContactno: '',
      coemail: '',
      itContactno: '',
      itemail: '' ,
      noActiveDP: '0' ,
      subPlan: '1',
      fromDate: '' ,
      toDate: ''
    });
  }



}

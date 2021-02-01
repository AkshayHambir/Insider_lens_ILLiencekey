import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../../shared/notification.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {throwError} from 'rxjs';
import {ApiServiceService} from '../../shared/api-service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(public service: ClientService,
    public dialogRef: MatDialogRef<ClientComponent>,
    private notificationService: NotificationService,
    private http: HttpClient,
    private apiser:ApiServiceService) { }

  ngOnInit(): void {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    
  }

  onSubmit(form: NgForm) {
    
    const clientName =form.value.clientName;
    console.log(clientName);

    const cinNo =form.value.cinNo;
    console.log(cinNo);
    const coContactno =form.value.coContactno;
    console.log(coContactno);
    const itContactno =form.value.itContactno;
    console.log(itContactno);
    const address =form.value.address;
    console.log(address);
    const coemail =form.value.coemail;
    console.log(coemail);
    const itemail =form.value.itemail;
    console.log(itemail);
    const createdby = sessionStorage.getItem('id');
    console.log(createdby);
    const currentdate = new Date();
    console.log(currentdate)
     
    const subform = {
      "cmName": clientName,
      "cmCin": cinNo,
      "cmAddress": address,
      "cmCocontactNo": coContactno,
      "cmCoemailId": coemail,
      "cmItcontactNo": itContactno,
      "cmItemailId": itemail,
      "cmCreatedBy": createdby,
      "cmCreatedOn": currentdate
     }
     console.log(subform);
      this.apiser.ClientPostUser(subform).subscribe(responseData =>{
        console.log(responseData);
        this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success();
      this.onClose();
      },
    (error)=>{
      console.log(error);
    })
      
    
  }
  
  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}

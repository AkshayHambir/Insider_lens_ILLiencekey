import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../../shared/notification.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {throwError} from 'rxjs';
import {ApiServiceService} from '../../shared/api-service.service';
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

  onSubmit(data) {
    if(this.service.form.valid == false) {
      this.apiser.ClientPostUser(data).subscribe(responseData =>{
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
  }
  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}

import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../../shared/notification.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(public service: ClientService,
    public dialogRef: MatDialogRef<ClientComponent>,
    private notificationService: NotificationService,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    
  }

  onSubmit(data) {
    if(this.service.form.valid == false) {
      this.http.post('http://demo.boardeye.com/ILLicenseKeyAPI/api/Client/SaveClientDetails',data)
      .subscribe((result)=>{
        console.log("result",result)
      })
      console.log(data);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success();
      this.onClose();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}

import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(public service: ClientService,
    public dialogRef: MatDialogRef<ClientComponent>,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    
  }

  onSubmit() {
    if(this.service.form.valid == false) {
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(":: Submitted Successfully");
      this.onClose();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}

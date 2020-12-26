import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../app/shared/subscription.service';
import { NotificationService } from '../../app/shared/notification.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor(public service: SubscriptionService,
    private notificationService: NotificationService) { }

  clientsName = [
      { id: 1, value: 'Client 1'},
      { id: 2, value: 'Client 2'},
      { id: 3, value: 'Client 3'},
  ]
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
    }
  }
}

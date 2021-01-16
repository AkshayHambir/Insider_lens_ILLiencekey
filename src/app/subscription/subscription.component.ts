import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SubscriptionService } from '../../app/shared/subscription.service';
import { NotificationService } from '../../app/shared/notification.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  @ViewChild('ingre_qty') ingre_qty : ElementRef;
  @ViewChild('in_qty') in_qty : ElementRef;
  @ViewChild('i_qty') i_qty : ElementRef;
  constructor(public service: SubscriptionService,
    private notificationService: NotificationService) { }

  clientsName = [
      { id: 'Client-1', value: 'Client 1'},
      { id: 'Client-2', value: 'Client 2'},
      { id: 'Client-3', value: 'Client 3'},
  ]
  createdby = [
    { id: 1, value: 'C1'},
    { id: 2, value: 'C2'},
    { id: 3, value: 'C3'},
]
  ngOnInit(): void {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    
  }
  onsubmit(form:NgForm){
    const qty = this.ingre_qty.nativeElement.value;
    console.log(qty)

    const activeDP = form.value.activeDP;
    console.log(activeDP)

    const in_qty = this.in_qty.nativeElement.value;
    console.log(in_qty)

    const fromDate = form.value.fromDate;
    console.log(fromDate)

    const toDate = form.value.toDate;
    console.log(toDate)

    const i_qty = this.i_qty.nativeElement.value;
    console.log(i_qty)

    const createdate = form.value.createdate;
    console.log(createdate)
  }

  // onSubmit() {
  //   if(this.service.form.valid == false) {
  //     this.service.form.reset();
  //     this.service.initializeFormGroup();
  //     this.notificationService.success(":: Submitted Successfully");
  //   }
  // }
}

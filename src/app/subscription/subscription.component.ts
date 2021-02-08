import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SubscriptionService } from '../../app/shared/subscription.service';
import { NotificationService } from '../../app/shared/notification.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { stringify } from '@angular/compiler/src/util';
import { ApiServiceService } from '../shared/api-service.service';
import { ClientListService } from '../shared/allclient.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  @ViewChild('ingre_qty') ingre_qty: ElementRef;
  @ViewChild('in_qty') in_qty: ElementRef;
  constructor(public service: SubscriptionService,
    private notificationService: NotificationService, private http: HttpClient,
    private apiser: ApiServiceService,
    private clientservice: ClientListService) { }

  clientsName: any = []
  ngOnInit(): void {
    this.clientservice.getClientList().subscribe(responseData => {
      this.clientsName = responseData;
      console.log(this.clientsName)
    })
  }

  onsubmit(form: NgForm) {

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

    const currentdate = new Date();
    console.log(currentdate)
    
    const createdby = sessionStorage.getItem('id');
    console.log(createdby)

    const subclientform = {
      "CIN_No.": qty,
      "Active_DP": activeDP,
      "Subscription_Plan": in_qty,
      "From_Date": fromDate,
      "To_Date": toDate,
      "Created_By": createdby,
      "Created_On": currentdate
    }

    const subform = {
      "smCmIdPkFk": qty,
      "smActiveDpcount": activeDP,
      "smSubscriptionPlan": in_qty,
      "smFromDate": fromDate,
      "smToDate": toDate,
      "smCreatedBy": createdby,
      "smCreatedOn": currentdate
    }
    console.log(subform);

    this.apiser.SubscriptionUser(subform).subscribe(responseData => {
      console.log(responseData);
      Swal.fire(
        'Success!',
        'Subscrption Added Successfully!',
        'success'
      )
    },
      (error) => {
        console.log(error);
      })
  }


}


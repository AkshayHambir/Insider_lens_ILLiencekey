import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SubscriptionService } from '../../app/shared/subscription.service';
import { NotificationService } from '../../app/shared/notification.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  @ViewChild('ingre_qty') ingre_qty : ElementRef;
  @ViewChild('in_qty') in_qty : ElementRef;
  constructor(public service: SubscriptionService,
    private notificationService: NotificationService, private http:HttpClient) { }

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

    const currentdate = new Date().toISOString();
    console.log(currentdate)

    const createdby = sessionStorage.getItem('id');
    console.log(createdby)

    const subform = {
        "smCmIdPkFk": qty,
        "smActiveDpcount": activeDP,
        "smSubscriptionPlan": in_qty,
        "smFromDate": fromDate,
        "smToDate": toDate,
        "smCreatedBy": createdby,
        "smCreatedOn": currentdate
    }
    this.http .post('http://demo.boardeye.com/ILLicenseKeyAPI/api/Subscription/PostSubscriptionDetails',subform).subscribe(responseData => {
        console.log(responseData);
        Swal.fire(
          'Sumbited Successfully',
          'New Subcription Added',
          'success'
        )
      });
  }

  

  // onSubmit() {
  //   if(this.service.form.valid == false) {
  //     this.service.form.reset();
  //     this.service.initializeFormGroup();
  //     this.notificationService.success(":: Submitted Successfully");
  //   }
  // }
}


// URL- http://demo.boardeye.com/ILLicenseKeyAPI/api/Subscription/PostSubscriptionDetails (POST)
// Parameters- {
       
//         "smCmIdPkFk": 1,
//         "smActiveDpcount": 1,
//         "smSubscriptionPlan": "test",
//         "smFromDate": "2019-03-04T12:58:35.653",
//         "smToDate": "2019-03-04T12:58:35.653",
//         "smCreatedBy": 1,
//         "smCreatedOn": "2019-03-04T12:58:35.653"
       
//     }
// Response-True
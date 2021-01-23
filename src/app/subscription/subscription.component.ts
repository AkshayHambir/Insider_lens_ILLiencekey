import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SubscriptionService } from '../../app/shared/subscription.service';
import { NotificationService } from '../../app/shared/notification.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  @ViewChild('ingre_qty') ingre_qty: ElementRef;
  @ViewChild('in_qty') in_qty: ElementRef;
  constructor(public service: SubscriptionService,
    private notificationService: NotificationService, private http: HttpClient) { }

  clientsName = [
    { id: 1, value: 'Client 1' },
    { id: 2, value: 'Client 2' },
    { id: 3, value: 'Client 3' },
  ]
  ngOnInit(): void {
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

    const timedate = currentdate.toLocaleDateString() + 'T' + currentdate.toLocaleTimeString();
    console.log(timedate)

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
    this.http.post('http://demo.boardeye.com/ILLicenseKeyAPI/api/Subscription/SaveSubscriptionDetails', subform).subscribe(responseData => {
      console.log(responseData);

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: 'Download?',
        text: "Text File Will Be Downloaded!",
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Yes, download it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          sessionStorage.setItem('subclient', JSON.stringify(subclientform));

          var sub_form = sessionStorage.getItem('subclient');
          var filename = 'Subcription-Form.txt';

          var element = document.createElement('a');

          element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(sub_form));

          element.setAttribute('download', filename);

          element.style.display = "none";

          document.body.appendChild(element);

          element.click();

          document.body.removeChild(element);

          swalWithBootstrapButtons.fire(
            'Yes',
            'Your file has been downloaded.',
            'success'
          )
          form.reset();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'No',
            'Your file has not been downloaded.',
            'error'
          )
          form.reset();
        }
      })

      
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
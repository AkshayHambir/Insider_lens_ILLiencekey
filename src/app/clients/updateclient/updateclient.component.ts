import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../shared/api-service.service'; 
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})
export class UpdateclientComponent implements OnInit {

  constructor( private http: HttpClient,
    private apiser:ApiServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  id2 : any;

  ngOnInit(): void {
    this.id2 = this.route.snapshot.paramMap.get('id');

  }

  onsubmit(form: NgForm) {

    const cmName = form.value.cmName;
    console.log(cmName)

    const cmCin = form.value.cmCin;
    console.log(cmCin)

    const cmAddress = form.value.cmAddress;
    console.log(cmAddress)

    const cmCocontactNo = form.value.cmCocontactNo;
    console.log(cmCocontactNo)

    const cmItcontactNo = form.value.cmItcontactNo;
    console.log(cmItcontactNo)

    const cmCoemailId = form.value.cmCoemailId;
    console.log(cmCoemailId)

    const cmItemailId = form.value.cmItemailId;
    console.log(cmItemailId)

    const currentdate = new Date();
    console.log(currentdate)
    
    const createdby = sessionStorage.getItem('id');
    console.log(createdby)

    const updateForm = {
      "CmIdPk":this.id2,
      "cmName": cmName,
      "cmCin": cmCin,
      "cmAddress": cmAddress,
      "cmCocontactNo": cmCocontactNo,
      "cmCoemailId": cmCoemailId,
      "cmItcontactNo": cmItcontactNo,
      "cmItemailId": cmItemailId,
      "cmCreatedBy": createdby,
      "cmCreatedOn": currentdate
    }
    console.log(updateForm);

    this.apiser.ClientUpdateUser(updateForm).subscribe(responsedata => {
      console.log(responsedata);
      Swal.fire(
        'Updated!',
        'You Have Updated Client Detalis!',
        'success'
      )
      form.reset();
    },
    (error) => {
      console.log(error);
      Swal.fire(
        'Something Went Wrong',
        'Client Detalis Could Not Be Updated',
        'warning'
      )
    }
    )
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClientComponent } from '../clients/client/client.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private route: ActivatedRoute, 
                private router: Router,
                private dialog: MatDialog) { }
 username = sessionStorage.getItem('user');
  ngOnInit(): void {
     
  }

   openNav = () =>{
    document.getElementById("sidebar").style.width = "350px";
}

 closeNav = () =>{
    document.getElementById("sidebar").style.width = "0px";
}

 openUser = () =>{
    document.getElementById("userInformation").style.width = "300px";

}

 closeUser = () =>{
    document.getElementById("userInformation").style.width = "0px";
}

 show_user_management = () =>{
   
   const x = document.querySelector('#user_management_show');
    // document.getElementById("user_management_show").classList.toggle("show");
    x.classList.toggle("show");
    // console.log("clicked");
   document.getElementById("show_user_management").classList.toggle("select");
}

 show_data_definition = () =>{
    document.getElementById("data_definition_show").classList.toggle("show");
    document.getElementById("show_data_definition").classList.toggle("select");
}

 show_designated_person = () =>{
    document.getElementById("designated_person_show").classList.toggle("show");
    document.getElementById("show_designated_person").classList.toggle("select");
}

 show_connected_person = () =>{
    document.getElementById("connected_person_show").classList.toggle("show");
    document.getElementById("show_connected_person").classList.toggle("select");
}

 show_holdings_disclosure = () =>{
    document.getElementById("holdings_disclosure_show").classList.toggle("show");
    document.getElementById("show_holdings_disclosure").classList.toggle("select");
}

 show_preclearance_request = () =>{
    document.getElementById("preclearance_request_show").classList.toggle("show");
    document.getElementById("show_preclearance_request").classList.toggle("select");
}

 show_pledge_holding_details = () =>{
    document.getElementById("pledge_holding_details_show").classList.toggle("show");
    document.getElementById("show_pledge_holding_details").classList.toggle("select");
}

 show_reports = () =>{
    document.getElementById("reports_show").classList.toggle("show");
    document.getElementById("show_reports").classList.toggle("select");
}

 show_intimation_of_trades = () =>{
    document.getElementById("intimation_of_trades_show").classList.toggle("show");
    document.getElementById("show_intimation_of_trades").classList.toggle("select");
}

 show_upload_bepons = () =>{
    document.getElementById("upload_bepons_show").classList.toggle("show");
    document.getElementById("show_upload_bepons").classList.toggle("select");
}

 show_upsi_shared_details = () =>{
    document.getElementById("upsi_shared_details_show").classList.toggle("show");
    document.getElementById("show_upsi_shared_details").classList.toggle("select");
}

 show_trading_window_closures = () =>{
    document.getElementById("trading_window_closures_show").classList.toggle("show");
    document.getElementById("show_trading_window_closures").classList.toggle("select");
}

 show_reference_documents = () =>{
    document.getElementById("reference_documents_show").classList.toggle("show");
    document.getElementById("show_reference_documents").classList.toggle("select");
}

 show_sent_mails = () =>{
    document.getElementById("sent_mails_show").classList.toggle("show");
    document.getElementById("show_sent_mails").classList.toggle("select");
}



 show_id_info = () =>{
    var x = document.getElementById("id_info_show");
    if(x.style.display !== "block"){
        x.style.display = "block";
    }else {
        x.style.display = "none";
    }
    document.getElementById("show_id_info").classList.toggle("select");
}

 show_security_details = () =>{
    var x = document.getElementById("security_details_show");
    if(x.style.display !== "block"){
        x.style.display = "block";
    }else {
        x.style.display = "none";
    }
    document.getElementById("show_security_details").classList.toggle("select");
}

 show_upsi_category = () =>{
    var x = document.getElementById("upsi_category_show");
    if(x.style.display !== "block"){
        x.style.display = "block";
    }else {
        x.style.display = "none";
    }
    document.getElementById("show_upsi_category").classList.toggle("select");
}

 show_deviation_reports = () =>{
    var x = document.getElementById("deviation_reports_show");
    if(x.style.display !== "block"){
        x.style.display = "block";
    }else {
        x.style.display = "none";
    }
    document.getElementById("show_deviation_reports").classList.toggle("select");
}

logout_confirm = () =>{
    
}

logout_clicked=()=>{
   let des = confirm("This action will cause you to logout and will take you to the login page again");
    if(des==true){
    sessionStorage.clear();
    this.router.navigateByUrl("/");
    }
}

button_subscription=()=>{
    this.router.navigateByUrl("/subscription");
}

onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ClientComponent,dialogConfig);
  }
}

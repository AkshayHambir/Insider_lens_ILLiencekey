import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { generateKeyPair } from 'crypto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClientSubList } from '../api-model/dashboardclientsub.model';
import { ClientSubListService } from '../shared/dashboardclientsub.service'
// const SubDeatils: SubForm[] = [];
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mainclientsub',
  templateUrl: './mainclientsub.component.html',
  styleUrls: ['./mainclientsub.component.css']
})
export class MainclientsubComponent implements OnInit {

  subscription: any;
  ELEMENT_DATA: ClientSubList[]=[];
  constructor(private http: HttpClient,
    public allclientsubService: ClientSubListService) { }
  
  listData = new MatTableDataSource(this.ELEMENT_DATA);
  displayedColumns: string[] = ['smCIN', 'smClientName', 'smActiveDpcount', 'smSubscriptionPlan','smCreatedByName','smCreatedOnstr', 'smFromDatestr', 'smToDatestr', 'smIdPk'];
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  searchKey: string;
  ngOnInit() {
    this.listData.paginator = this.paginator;
    this.listData.sort=this.sort;
    this.getAllReports();
    console.log(this.listData);
  }
  public getAllReports() {
    let resp = this.allclientsubService.getClientSubList();
    resp.subscribe(report=>this.listData.data=report as ClientSubList[])
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  download(sub_d) {
    const user = JSON.parse(sessionStorage.getItem('user'));
        console.log(user); 
        var HeadaersForSubAPI = new HttpHeaders().set("Authorization", "Bearer " + user.token);
        HeadaersForSubAPI.append('Content-Type', 'application/json'); 
        
        this.http.get(`http://demo.boardeye.com/ILLicenseKeyAPI/api/Subscription/GetSubscriptionDetailsById/${sub_d}`, {headers: HeadaersForSubAPI}).subscribe(
          (Response) => {
            this.subscription = Response;
            console.log(this.subscription);

            const subclientform = {
              "CIN_No.": this.subscription.smCIN,
              "Comapny_Name": this.subscription.smClientName,
              "Active_DP": this.subscription.smActiveDpcount,
              "Subscription_Plan": this.subscription.smSubscriptionPlan,
              "From_Date": this.subscription.smFromDatestr,
              "To_Date": this.subscription.smToDatestr,
              "Created_By": this.subscription.smCreatedBy,
              "Created_On": this.subscription.smCreatedOnstr,
            }
            console.log(subclientform)
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

              Swal.fire(
                'Downloaded!',
                'File Has Been Downloaded!',
                'info'
              )
          }
        );
        
  }

}

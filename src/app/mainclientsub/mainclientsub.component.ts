import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { generateKeyPair } from 'crypto';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  cinNo: string;
  clientName: string;
  noActiveDP: string;
  subPlan: string;
  fromDate: string;
  toDate: string;
}

// export interface SubForm {
//   smActiveDpcount: number;
//   smCmIdPkFk: number;
//   smCmIdPkFkNavigation: number;
//   smCreatedBy: number;
//   smCreatedOn: string;
//   smFromDate: string
//   smIdPk: number
//   smSubscriptionPlan: string
//   smToDate: string
// }

const ELEMENT_DATA: PeriodicElement[] = [
  { cinNo: '1', clientName: 'Hydrogen', noActiveDP: '1', subPlan: 'Basic', fromDate: '12/01/2020', toDate: '3/07/2020' },
  { cinNo: '2', clientName: 'Helium', noActiveDP: '4', subPlan: 'Premium', fromDate: '25/04/2020', toDate: '3/07/2020' },

];

// const SubDeatils: SubForm[] = [];

@Component({
  selector: 'app-mainclientsub',
  templateUrl: './mainclientsub.component.html',
  styleUrls: ['./mainclientsub.component.css']
})
export class MainclientsubComponent implements OnInit {

  SubDeatils:any = [];
  constructor(private http: HttpClient) { }

  listData = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = ['cinNo', 'clientName', 'noActiveDP', 'subPlan', 'fromDate', 'toDate'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchKey!: string;
  ngOnInit(): void {
    this.listData;
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;

    this.http.get("http://demo.boardeye.com/ILLicenseKeyAPI/api/Subscription/GetAllSubscriptionDetails").subscribe(posts => {
      console.log(posts);

      this.SubDeatils = posts;
      console.log(this.SubDeatils);
    });


  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }



}
// Response- {

//   "smCmIdPkFk": 1,
//   "smActiveDpcount": 1,
//   "smSubscriptionPlan": "test",
//   "smFromDate": "2019-03-04T12:58:35.653",
//   "smToDate": "2019-03-04T12:58:35.653",
//   "smCreatedBy": 1,
//   "smCreatedOn": "2019-03-04T12:58:35.653"

// }, n number of rows

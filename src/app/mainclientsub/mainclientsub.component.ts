import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  cinNo: string;
  clientName: string;
  noActiveDP: string;
  subPlan: string;
  fromDate: string;
  toDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {cinNo: '1', clientName: 'Hydrogen', noActiveDP: '1',subPlan:'Basic',fromDate:'12/01/2020',toDate:'3/07/2020'},
  {cinNo: '2', clientName: 'Helium', noActiveDP: '4',subPlan:'Premium',fromDate:'25/04/2020',toDate:'3/07/2020'  },
  
];

@Component({
  selector: 'app-mainclientsub',
  templateUrl: './mainclientsub.component.html',
  styleUrls: ['./mainclientsub.component.css']
})
export class MainclientsubComponent implements OnInit {

  constructor() { }

  listData = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = ['cinNo','clientName','noActiveDP','subPlan','fromDate','toDate'];
  @ViewChild(MatSort) sort!: MatSort ;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchKey!: string;
  ngOnInit(): void {
    this.listData;
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
}

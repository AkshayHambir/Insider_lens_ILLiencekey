import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { generateKeyPair } from 'crypto';
import { HttpClient } from '@angular/common/http';
import { ClientSubList } from '../api-model/dashboardclientsub.model';
import { ClientSubListService } from '../shared/dashboardclientsub.service'
// const SubDeatils: SubForm[] = [];

@Component({
  selector: 'app-mainclientsub',
  templateUrl: './mainclientsub.component.html',
  styleUrls: ['./mainclientsub.component.css']
})
export class MainclientsubComponent implements OnInit {

  ELEMENT_DATA: ClientSubList[]=[];
  constructor(private http: HttpClient,
    public allclientsubService: ClientSubListService) { }
  
  listData = new MatTableDataSource(this.ELEMENT_DATA);
  displayedColumns: string[] = ['smCIN', 'smClientName', 'smActiveDpcount', 'smSubscriptionPlan','smCreatedByName','smCreatedOnstr', 'smFromDatestr', 'smToDatestr'];
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



}

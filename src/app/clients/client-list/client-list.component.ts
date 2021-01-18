import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { ClientComponent } from '../client/client.component';
import { ClientService } from '../../shared/client.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { ClientList } from '../../api-model/allclient.model';
import { ClientListService } from '../../shared/allclient.service';
import { report } from 'process';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})

export class ClientListComponent implements OnInit {
 
  
  constructor(private dialog: MatDialog,
    private service: ClientService,
    private notificationService: NotificationService,
    public allclientService: ClientListService) { }
    ELEMENT_DATA: ClientList[]=[];
    displayedColumns: string[] = ['cmCin','cmName','cmAddress','cmCocontactNo','cmCoemailId','cmItcontactNo','cmItemailId','cmCreatedBy','cmCreatedOn','actions'];
    listData = new MatTableDataSource<ClientList>(this.ELEMENT_DATA);
    @ViewChild(MatSort,{static: true}) sort: MatSort ;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    searchKey: string;
  ngOnInit() {
    this.listData.paginator = this.paginator;
    this.listData.sort=this.sort;
    this.getAllReports();
    console.log(this.listData);
  }
  public getAllReports() {
    let resp = this.allclientService.getClientList();
    resp.subscribe(report=>this.listData.data=report as ClientList[])
  }
    

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ClientComponent,dialogConfig);
  }

  onEdit(){
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ClientComponent,dialogConfig);
  }

  onDelete(){
    if(confirm('Are you sure to delete the record?'))
    {
      //code to delete data field
      this.notificationService.warn('! Deleted Successfully');
    }
  }

  
}

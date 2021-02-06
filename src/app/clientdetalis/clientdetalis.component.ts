import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-clientdetalis',
  templateUrl: './clientdetalis.component.html',
  styleUrls: ['./clientdetalis.component.css']
})
export class ClientdetalisComponent implements OnInit {
  user : any;
  client : any = [];
  ELEMENT_DATA: any[]=[];
  constructor(private http:HttpClient,
    private route: ActivatedRoute,
    private router: Router ) { }
  //url: string = "http://demo.boardeye.com/ILLicenseKeyAPI/api/Client/GetClientDetailsById/id";
  listData = new MatTableDataSource(this.ELEMENT_DATA);
  displayedColumns: string[] = ['smSubscriptionPlan', 'smActiveDpcount', 'smFromDatestr', 'smToDatestr','smCreatedOnstr'];
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  searchKey: string;
    
  ngOnInit(): void {
    this.listData.paginator = this.paginator;
    this.listData.sort=this.sort;
    console.log(this.listData);

    let id2 = this.route.snapshot.paramMap.get('id');
    const url =`http://demo.boardeye.com/ILLicenseKeyAPI/api/Client/GetClientDetailsById/${id2}`;
    const user = JSON.parse(sessionStorage.getItem('user'));
        console.log(user); 
        var HeadersForClientAPI = new HttpHeaders().set("Authorization", "Bearer " + user.token);
        HeadersForClientAPI.append('Content-Type', 'application/json'); 
        //console.log(this.apiser.AccessToken);
        this.http.get(url, {headers: HeadersForClientAPI})
        .subscribe(response =>{this.user = response;
        console.log(response)});
      
    const url1 =`http://demo.boardeye.com/ILLicenseKeyAPI/api/Subscription/GetSubscriptionDetailsListById/${id2}`;    
    this.http.get(url1, {headers: HeadersForClientAPI})
        .subscribe(response =>{this.listData.data = response as any[];
        console.log(response)});
        
  }

  //getClientList(){
   // return this.http.get(this.url);
//}
}

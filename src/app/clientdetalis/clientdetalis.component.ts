import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-clientdetalis',
  templateUrl: './clientdetalis.component.html',
  styleUrls: ['./clientdetalis.component.css']
})
export class ClientdetalisComponent implements OnInit {
  user : any;
  constructor(private http:HttpClient,
    private route: ActivatedRoute,
    private router: Router ) { }
  //url: string = "http://demo.boardeye.com/ILLicenseKeyAPI/api/Client/GetClientDetailsById/id";
    
    
  ngOnInit(): void {
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
        
  }

  //getClientList(){
   // return this.http.get(this.url);
//}
}

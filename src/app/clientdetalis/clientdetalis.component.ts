import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-clientdetalis',
  templateUrl: './clientdetalis.component.html',
  styleUrls: ['./clientdetalis.component.css']
})
export class ClientdetalisComponent implements OnInit {

  constructor(private http:HttpClient) { }
  url: string = "http://demo.boardeye.com/ILLicenseKeyAPI/api/Client/GetClientDetailsById/id";
    
    
  ngOnInit(): void {
  }

  getClientList(){
    return this.http.get(this.url);
}
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClientSubList } from '../api-model/dashboardclientsub.model';
import {ApiServiceService} from '../shared/api-service.service';
@Injectable({
    providedIn: 'root'
})

export class ClientSubListService {
    constructor(private http: HttpClient, private apiser:ApiServiceService) { }
    
    url: string = "http://demo.boardeye.com/ILLicenseKeyAPI/api/Subscription/GetAllSubscriptionDetails";
    
    getClientSubList(){
        const user = JSON.parse(sessionStorage.getItem('user'));
        console.log(user); 
        var HeadaersForSubAPI = new HttpHeaders().set("Authorization", "Bearer " + user.token);
        HeadaersForSubAPI.append('Content-Type', 'application/json'); 
        console.log(this.apiser.AccessToken);
        return this.http.get(this.url,  {headers: HeadaersForSubAPI});
    }
}

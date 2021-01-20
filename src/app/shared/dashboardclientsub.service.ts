import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientSubList } from '../api-model/dashboardclientsub.model';

@Injectable({
    providedIn: 'root'
})

export class ClientSubListService {
    constructor(private http: HttpClient) { }
    
    url: string = "http://demo.boardeye.com/ILLicenseKeyAPI/api/Subscription/GetAllSubscriptionDetails";
    
    getClientSubList(){
        return this.http.get(this.url);
    }
}

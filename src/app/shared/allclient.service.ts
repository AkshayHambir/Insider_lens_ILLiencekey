import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClientList } from '../api-model/allclient.model';
import {ApiServiceService} from '../shared/api-service.service';
@Injectable({
    providedIn: 'root'
})

export class ClientListService {
    constructor(private http: HttpClient, private apiser:ApiServiceService) { }
    
    url: string = "http://demo.boardeye.com/ILLicenseKeyAPI/api/Client/GetAllClientDetails";
    
    getClientList(){
        const user = JSON.parse(sessionStorage.getItem('user'));
        console.log(user); 
        var HeadersForClientAPI = new HttpHeaders().set("Authorization", "Bearer " + user.token);
        HeadersForClientAPI.append('Content-Type', 'application/json'); 
        console.log(this.apiser.AccessToken);
        // if(user.token) {
        //         HeadaersForClientAPI.append('Authorization', 'Bearer' + user.token);
        // }

        return this.http.get(this.url, {headers: HeadersForClientAPI});
    }
}

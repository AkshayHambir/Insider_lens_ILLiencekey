import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientList } from '../api-model/allclient.model';

@Injectable({
    providedIn: 'root'
})

export class ClientListService {
    constructor(private http: HttpClient) { }
    
    url: string = "http://demo.boardeye.com/ILLicenseKeyAPI/api/Client/GetAllClientDetails";
    
    getClientList(){
        return this.http.get(this.url);
    }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
// import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  AccessToken:string = "";
  constructor(private http:HttpClient) { 

  }
  loginUser(data):Observable<any>{
    return this.http.post(`http://demo.boardeye.com/ILLicenseKeyAPI/api/Users/LoginUser`,data)
              .pipe(catchError(this.handleError));
  }

  handleError(error){
      return throwError("login failed!!");
  }
  
  SubscriptionUser(data):Observable<any>{
    var HeadaersForSubAPI = new HttpHeaders(); 
    console.log(this.AccessToken);
    if(this.AccessToken) {
            HeadaersForSubAPI.append('Authorization', 'Auth_Token');
            
            HeadaersForSubAPI.append('RequestToken', this.AccessToken); 
    }
    // let options = new HttpRequest({ HeadaersForSubAPI: HeadaersForSubAPI });
    return this.http.post(`http://demo.boardeye.com/ILLicenseKeyAPI/api/Subscription/SaveSubscriptionDetails`,data,{headers: HeadaersForSubAPI}) 
            .pipe(catchError(this.subError));
  }

  subError(error){
    return throwError("Subscription failed!!");
}
  ClientPostUser(data):Observable<any>{
  return this.http.post(`http://demo.boardeye.com/ILLicenseKeyAPI/api/Client/SaveClientDetails`,data)
            .pipe(catchError(this.clientError));
}
clientError(error){
  return throwError("Client failed!!");
}
}

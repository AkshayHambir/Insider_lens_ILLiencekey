import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

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
    return this.http.post(`http://demo.boardeye.com/ILLicenseKeyAPI/api/Subscription/SaveSubscriptionDetails`,data)
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

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

}

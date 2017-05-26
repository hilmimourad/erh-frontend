import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { ConfigurationService } from "../../commons/configuration/services/configuration.service";
import { Observable } from "rxjs/Observable";

import { AuthenticationResponse, User, SecurityConstants } from './../models/security.models';

@Injectable()
export class SecurityService {

  constructor(private http: Http, private config: ConfigurationService) { }

  private doAuthenticate(email: string, password: string): Observable<AuthenticationResponse> {
    return this.http.post(this.config.getBackEndUrl() + "/security/authenticate"
      , { "email": email, "password": password }).map((response: Response) => response.json())
      .catch(this.handleError);
  }

  authenticate(email: string, password: string, callback : (data:any,err:any)=>any) {
    this.doAuthenticate(email,password)
          .subscribe(
            (data:AuthenticationResponse) => this.onAuthenticationSuccess(data,callback),
            (error:any) => this.onAuthenticationFail(error,callback),
            () => console.log('authentication finished')
          );
  }

  private onAuthenticationSuccess(data:AuthenticationResponse,callback:any){
      if(data.token == null || data.token == '') callback(null,SecurityConstants.Errors.WRONG_USER_PASSWORD);
      else {
        sessionStorage.setItem('user',JSON.stringify(data));
        callback(data.user,null);
      }
  }

  private onAuthenticationFail(error,callback:any){
    console.error("Error==",error);
  }
  
  getUser():User {
    return sessionStorage.getItem('user') != null ? JSON.parse(sessionStorage.getItem('user')) : null;
  }

  private handleError(error: any, data: Observable<any>): Observable<any> {
    console.log("Error in SecurityService:", error, "caught:", data);
    if (error instanceof Response) {
      let errMessage = '';
      try {
        errMessage = error.json().error;
      } catch (err) {
        errMessage = error.statusText;
      }
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'server error');
  }
}

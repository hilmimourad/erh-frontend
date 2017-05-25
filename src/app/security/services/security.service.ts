import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { ConfigurationService } from "../../commons/configuration/services/configuration.service";
import { Observable } from "rxjs/Observable";

import { AuthenticationResponse } from './../models/security.models';

@Injectable()
export class SecurityService {

  constructor(private http: Http, private config: ConfigurationService) { }

  authenticate(email: string, password: string): Observable<AuthenticationResponse> {
    return this.http.post(this.config.getBackEndUrl() + "/security/authenticate"
      , { "email": email, "password": password }).map((response: Response) => response.json())
      .catch(this.handleError);
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
    return Observable.throw(error || 'Server error');
  }
}

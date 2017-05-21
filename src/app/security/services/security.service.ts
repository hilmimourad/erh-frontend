import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {ConfigurationService} from "../../commons/configuration/services/configuration.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SecurityService {

  constructor(private http:Http,private config:ConfigurationService) { }

  authenticate(email:string,password:string){
    return this.http.post(this.config.getBackEndUrl()+"/security/authenticate"
      ,{"email":email,"password":password}).map((response:Response)=>response.json())
  }
}

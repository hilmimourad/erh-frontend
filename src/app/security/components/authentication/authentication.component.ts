import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {SecurityService} from "../../services/security.service";

import {AuthenticationResponse} from './../../models/security.models';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  message : string;

  constructor(private securityService:SecurityService) { }

  ngOnInit() {
  }

  onAuthenticate(form:NgForm){
    this.securityService.authenticate(form.value.email,form.value.password)
      .subscribe(
        (data:AuthenticationResponse) => this.onAuthenticationSuccess(data),
        (error:any) => this.onAuthenticationFail(error),
        () => console.log('authentication finished')
      );
  }

  onAuthenticationSuccess(data){
      this.message = JSON.stringify(data);
  }

  onAuthenticationFail(error){
    console.error("Error",error);
  }
}

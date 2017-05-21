///<reference path="../../../../../../node_modules/@angular/forms/src/directives/abstract_control_directive.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {SecurityService} from "../../../services/security.service";

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
        data => this.onAuthenticationSuccess(data),
        error => this.onAuthenticationFail(error)
      );
  }

  onAuthenticationSuccess(data){
      this.message = JSON.stringify(data);
  }

  onAuthenticationFail(error){
    console.error("Error",error);
  }
}

import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from '@angular/router';

import {SecurityService} from "../../services/security.service";

import {AuthenticationResponse} from './../../models/security.models';
import { Messages } from './../../../commons/configuration/constants/messages.constants';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  message : string;

  busy : boolean;

  constructor(private securityService:SecurityService,private router:Router) { }

  ngOnInit() {
  }

  onAuthenticate(form:NgForm){
    this.busy = true;
    this.securityService.authenticate(form.value.email,form.value.password,(data:any,err:any)=>{
      this.busy = false;
      if(err!=null){
        this.onAuthenticationFail(err);
      }else {
        this.onAuthenticationSuccess(data);
      }
    });
  }

  onAuthenticationSuccess(data){
      this.router.navigate(['/home']);
  }

  onAuthenticationFail(error){
    this.message = Messages.AuthenticationMessages.getMessage(error);
  }
}

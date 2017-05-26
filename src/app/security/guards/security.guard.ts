import { CanActivate,Router } from '@angular/router';
import { Injectable } from '@angular/core';  
import { SecurityService } from './../services/security.service';

@Injectable()
export class SecurityGuard implements CanActivate {

    constructor(private router : Router,private securityService :  SecurityService){}

    canActivate(): boolean  {
        if(this.securityService.getUser() != null) return true;
        this.router.navigate(['/authenticate']);
        return false;
    }

}
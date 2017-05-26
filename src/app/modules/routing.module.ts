import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes,RouterModule} from '@angular/router';

import { HomeComponent } from './../routing/components/home.component';
import { AuthenticationComponent } from './../security/components/authentication/authentication.component';
import { SecurityGuard } from './../security/guards/security.guard';

const routes:Routes = [
    {   path:'',pathMatch:'full',redirectTo:'home'  },
    {   path:'home',component:HomeComponent,canActivate:[SecurityGuard] },
    {   path:'authenticate',component:AuthenticationComponent }
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports:[RouterModule],
    providers:[SecurityGuard]
})
export class AppRoutingModule{
}

export const routingComponents = [HomeComponent]
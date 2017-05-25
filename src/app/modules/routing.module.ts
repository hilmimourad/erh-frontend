import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes,RouterModule} from '@angular/router';

import {HomeComponent} from './../routing/components/home.component';

const routes:Routes = [
    {   path:'',pathMatch:'full',redirectTo:'home'  },
    {   path:'home',component:HomeComponent }
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{
}

export const routingComponents = [HomeComponent]
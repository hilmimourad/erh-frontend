import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './security/components/authentication/authentication/authentication.component';
import {ServicesModule} from "./modules/services/services.module";
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      JsonpModule,
      ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

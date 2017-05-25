import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

import { ServicesModule } from "./modules/services.module";
import { AppRoutingModule , routingComponents } from './modules/routing.module';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './security/components/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    routingComponents
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      JsonpModule,
      ServicesModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

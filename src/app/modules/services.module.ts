import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SecurityService} from "../security/services/security.service";
import {ConfigurationService} from "../commons/configuration/services/configuration.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[SecurityService,ConfigurationService]
})
export class ServicesModule {
}

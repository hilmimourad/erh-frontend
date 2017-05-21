import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {

  constructor() { }

  getBackEndUrl(){
    return 'http://localhost:8080'
  }
}

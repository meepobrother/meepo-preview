import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
declare const require: any;

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
const FastClick = require('fastclick');
FastClick.attach(document.body);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

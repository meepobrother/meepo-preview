import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DesignModule } from './design/design.module';

import { ApiService, SysinfoService } from './services';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DesignModule
  ],
  providers: [
    ApiService,
    SysinfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

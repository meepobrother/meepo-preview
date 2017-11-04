import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DesignModule } from './design/design.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService, SysinfoService, FormDataService } from './services';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DesignModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    SysinfoService,
    FormDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

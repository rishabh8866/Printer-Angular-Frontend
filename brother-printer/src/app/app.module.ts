import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ScanToEmailComponent } from './scan-to-email/scan-to-email.component';
import {HttpService} from "./service/http.service";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
const config: SocketIoConfig = { url: 'http://localhost:8101', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ScanToEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

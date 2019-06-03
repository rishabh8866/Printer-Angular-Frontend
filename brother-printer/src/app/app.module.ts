import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ScanToEmailComponent } from './scan-to-email/scan-to-email.component';
import {HttpService} from "./service/http.service";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
<<<<<<< HEAD
import { MultiSelectionComponent } from './multi-selection/multi-selection.component';
import { PasswordComponent } from './password/password.component';
import { RequestResponseComponent } from './request-response/request-response.component';
=======
>>>>>>> 5557f1c2aa33c202c447440927d91926e3623754
const config: SocketIoConfig = { url: 'http://localhost:8101', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ScanToEmailComponent,
    MultiSelectionComponent,
    PasswordComponent,
    RequestResponseComponent
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

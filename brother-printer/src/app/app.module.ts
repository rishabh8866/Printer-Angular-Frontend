import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ScanToEmailComponent } from './scan-to-email/scan-to-email.component';
import {HttpService} from './service/http.service';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import { MultiSelectionComponent } from './multi-selection/multi-selection.component';
import { PasswordComponent } from './password/password.component';
import { RequestResponseComponent } from './request-response/request-response.component';
import { ScanToFtpComponent } from './scan-to-ftp/scan-to-ftp.component';
import { PrintComponent } from './print/print.component';
import { FileSelectDirective, FileUploadModule } from 'ng2-file-upload';
import { SendXmlComponent } from './send-xml/send-xml.component';
import { ParamaterGroupComponent } from './paramater-group/paramater-group.component';
const config: SocketIoConfig = { url: 'http://localhost:8101', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ScanToEmailComponent,
    MultiSelectionComponent,
    PasswordComponent,
    RequestResponseComponent,
    ScanToFtpComponent,
    PrintComponent,
    SendXmlComponent,
    ParamaterGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    FileUploadModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

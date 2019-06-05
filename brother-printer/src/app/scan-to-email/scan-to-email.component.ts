import { Component } from '@angular/core';
import {HttpService} from '../service/http.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-scan-to-email',
  templateUrl: './scan-to-email.component.html',
  styleUrls: ['./scan-to-email.component.scss']
})
export class ScanToEmailComponent {
public scanToEmailData = {
  Destination: '',
  ScanTray: 'ADF',
  ColorMode: 'Color',
  Resolution: 'Normal',
  FileType: 'PDF'
};
public scanTrayList = ['FB', 'ADF', 'Auto'];
public colorModeList = ['Color', 'Gray', 'Mono', 'Auto'];
public resolutionList = ['Normal', 'Low', 'High', '600', '400', '300', '200', '150', '100', '200x100', 'Auto'];
public fileTypeList = ['PDF', 'JPEG', 'HighCompressedPDF', 'PDFA', 'SecurePDF', 'SignedPDF', 'XPS', 'TIFF'];
public isMultiple = false;
public canMultiSelect = false;
public multiEmail = [];
public email = '';
public password = '';
public message = '';
public noOfEmial = 1;
  public result = '';
  public messageRequest = {message: ''};
  public closeRequest = {close: false};
  constructor(private http: HttpService, private socket: Socket) {
    this.socket.on('getXml', (data) => {
      console.log(data);
      this.result = data.s === 1 ? data.data : this.result;
    });
  }
  send(multiEmail) {
    if (!multiEmail) {
      this.http.post('/file/commandxml/add', {ScanToEmail: this.scanToEmailData}).subscribe(() => {
        // this.scanToEmailData = {
        //   Destination: "",
        //   ScanTray: "ADF",
        //   ColorMode: "Color",
        //   Resolution: "Normal",
        //   FileType: "PDF"
        // }
      });
    } else {
      const data = {
        Destination: this.multiEmail.filter(function(e) {return e; }),
        ScanTray: this.scanToEmailData.ScanTray,
        ColorMode: this.scanToEmailData.ColorMode,
        Resolution: this.scanToEmailData.Resolution,
        FileType: this.scanToEmailData.FileType
      };
      this.http.post('/file/commandxml/createMulti/' + this.canMultiSelect, {'multi-select': data.Destination}).subscribe(() => {
        this.scanToEmailData = {
          Destination: '',
          ScanTray: 'ADF',
          ColorMode: 'Color',
          Resolution: 'Normal',
          FileType: 'PDF'
        };
        this.multiEmail = [];
        this.noOfEmial = 1;
      });
    }
  }
  applyPassword() {
    this.http.post('/file/commandxml/password', {password: this.password}).subscribe(() => {
      this.password = '';
    });
  }

  addEmail() {
    this.multiEmail.push(this.email);
    this.email = '';
  }

  numberReturn(length) {
    return Array.from({length}, (v, k) => k + 1);
  }

  public applyMessage() {
    this.messageRequest.message = this.message;
    this.http.post('/file/commandxml/message',  this.messageRequest).subscribe(() => {
      this.message = '';
    });
  }

  public close() {
    this.closeRequest.close = true;
    this.http.post('/file/commandxml/close', this.closeRequest).subscribe(() => {
    });
  }
}

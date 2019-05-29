import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../service/http.service";

@Component({
  selector: 'app-scan-to-email',
  templateUrl: './scan-to-email.component.html',
  styleUrls: ['./scan-to-email.component.scss']
})
export class ScanToEmailComponent {
public scanToEmailData = {
  Destination: "",
  ScanTray: "ADF",
  ColorMode: "Color",
  Resolution: "Normal",
  FileType: "PDF"
}
public scanTrayList = ['ADF'];
public colorModeList = ['Color', 'Gray', 'Mono'];
public resolutionList = ['Normal', 'Low', 'High'];
public fileTypeList = ['PDF', 'JPEG'];
public isMultiple = false;
public canMultiSelect = false;
public multiEmail = [];
public email = '';
public password = '';
public noOfEmial = 1;
  constructor(private http: HttpService) { }

  send(multiEmail) {
    if(!multiEmail) {
      this.http.post('/file/commandxml/add', {"ScanToEmail": this.scanToEmailData}).subscribe(() => {
        this.scanToEmailData = {
          Destination: "",
          ScanTray: "ADF",
          ColorMode: "Color",
          Resolution: "Normal",
          FileType: "PDF"
        }
      });
    } else {
      let data = {
        Destination: this.multiEmail.filter(function(e){return e}),
        ScanTray: this.scanToEmailData.ScanTray,
        ColorMode: this.scanToEmailData.ColorMode,
        Resolution: this.scanToEmailData.Resolution,
        FileType: this.scanToEmailData.FileType
      }
      this.http.post('/file/commandxml/add/' + this.canMultiSelect, {"ScanToEmail": data}).subscribe(() => {
        this.scanToEmailData = {
          Destination: "",
          ScanTray: "ADF",
          ColorMode: "Color",
          Resolution: "Normal",
          FileType: "PDF"
        }
        this.multiEmail = [];
        this.noOfEmial = 1;
      });
    }
  }
  applyPassword() {
    this.http.post('/file/commandxml/password', {"password": this.password}).subscribe(() => {
      this.password = '';
    });
  }

  addEmail() {
    this.multiEmail.push(this.email);
    this.email = '';
  }

  numberReturn(length){
    return Array.from({length: length}, (v, k) => k + 1);
  }

}

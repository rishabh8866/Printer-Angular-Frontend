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
  constructor(private http: HttpService) { }

  send() {
    this.http.post( '/file/commandxml/add', {"ScanToEmail": this.scanToEmailData}).subscribe(() => {
      this.scanToEmailData = {
        Destination: "",
        ScanTray: "ADF",
        ColorMode: "Color",
        Resolution: "Normal",
        FileType: "PDF"
      }
    });
  }

  checkHost() {

  }

}

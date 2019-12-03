import { Component, OnInit } from '@angular/core';
import {ScanToFTPDefault} from "../constant";

@Component({
  selector: 'app-scan-to-ftp',
  templateUrl: './scan-to-ftp.component.html',
  styleUrls: ['./scan-to-ftp.component.scss']
})
export class ScanToFtpComponent implements OnInit {

  public scanToEmailData = ScanToFTPDefault;
  public defaultScanToEmail = ScanToFTPDefault;
  public scanToEmailType = {
    TxProfiles: {
      Ftp: {
        FtpParams: {
          HostAddress: 'text',
          Host: 'text',
          StoreDir: 'text',
          FileName: 'text',
          User: 'text',
          Password: 'text',
          PassiveMode: 'checkbox',
          CertificationCheck: 'checkbox',
          PortNum: 'text',
          FTPSMode: 'text',
        }
      }
    },
//    FileNameFixed: 'checkbox',
//    ScanTray: 'select', 						// ScanTray
//    ColorMode: 'select', 						// ColorModeList
//    Resolution: 'select', 					// Resolution
//    DocSize: 'select', 						// DocSize
//    Density: 'select', 						// selectionList_1
//    Brightness: 'select', 					// selectionList_1
//    JpgQuality: 'select', 					// selectionList_2
//    FileType: 'select',						// FileType
//    SPdfPassword: 'text',
//    SinglePageFile: 'checkbox',
//    AdditionalAdfScan: 'checkbox',
//    ResumeAfterError: 'checkbox',
//    AutoDeskew: 'checkbox',
//    SkipBlankPage: 'checkbox',
//    SkipBlankPageSensitivity: 'select', 		// selectionList_1
//    RemoveBackground: 'select', 				// selectionList_2
//    DuplexScanEnable: 'checkbox',
//    ShortEdgeBinding: 'checkbox',
//    ColorDetectionAccuracyLevel: 'text',
//    GrayDetectionAccuracyLevel: 'text',
//    Margin: 'text',							// Margin
//    JobFinAckUrl: 'text'
  };
  constructor() { }

  ngOnInit() {
  }

}

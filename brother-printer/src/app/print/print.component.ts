import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import {Socket} from 'ngx-socket-io';
import { ColorModeList, FeedTrayList, PageSizeList } from '../constant';
import { FileItem, FileUploader, ParsedResponseHeaders } from 'ng2-file-upload';

const URL = 'http://localhost:8101/';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent {
  public result = '';
  public defaultPrintRequest = {
    Print: {
      FilePath: '',
      ColorMode: 'Color',
      PaperSize: 'letter',
      NumCopies: '1',
      FeedTray: 'Auto'
    },
    Authentication: {
      User: '',
      Password: ''
    }
  };
  public printRequest = {
    Print: {
      FilePath: '',
      ColorMode: 'Color',
      PaperSize: 'letter',
      NumCopies: '1',
      FeedTray: 'Auto'
    },
    Authentication: {
      User: '',
      Password: ''
    }
  };
  public colorModeList = ColorModeList;
  public feedTrayList = FeedTrayList;
  public pageSizeList = PageSizeList;
  public canUpload = false;
  public canAuthenticate = false;
  public uploader: FileUploader = new FileUploader({url: URL + 'upload'});
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;

  constructor(private http: HttpService, private socket: Socket) {
    this.socket.on('getJson', (data) => {
      console.log(data);
      this.result = data.s === 'Print' ? data.data : this.result;
    });
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    };
    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
  }

  onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    const data = JSON.parse(response); // success server response
    this.printRequest.Print.FilePath = URL + data[0].path;
  }

  send() {
    this.http.post('/file/commandjson/add', this.printRequest).subscribe(() => {
      // this.printRequest = this.defaultPrintRequest;
    });
  }
  reset() {
    this.printRequest = this.defaultPrintRequest;
  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
}

import { Component, OnInit } from '@angular/core';
import {HttpService} from "../service/http.service";
import {Socket} from "ngx-socket-io";

@Component({
  selector: 'app-send-xml',
  templateUrl: './send-xml.component.html',
  styleUrls: ['./send-xml.component.scss']
})
export class SendXmlComponent implements OnInit {
public xml = '';
public result = '';
  constructor(private http: HttpService, private socket: Socket) {
    this.socket.on('getJson', (data) => {
      console.log(data);
      this.result = data.data;
    });
  }

  ngOnInit() {
  }
  send() {
    this.http.post('/file/commandjson/add',{xml: this.xml}).subscribe(() => {
      this.xml = '';
    });
  }

  reset() {
    this.xml = '';
  }
}

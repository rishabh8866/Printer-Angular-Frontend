import { Component } from '@angular/core';
import {HttpService} from "../service/http.service";
import {Socket} from "ngx-socket-io";

@Component({
  selector: 'app-multi-selection',
  templateUrl: './multi-selection.component.html',
  styleUrls: ['./multi-selection.component.scss']
})
export class MultiSelectionComponent{
  public result = '';
  public canMultiSelect = false;
  public multiEmail = [];
  public noOfEmial = 1;
  public multiSelectionRequest = {"SelectionList":
      {"canMultiSelect": false,
        "Selection": []
      }};

  constructor(private http: HttpService, private socket: Socket) {
    this.socket.on('getXml', (data) => {
      console.log(data);
      this.result = data.s === 2 ? data.data : this.result;
    });
  }

  send() {
    this.multiSelectionRequest.SelectionList.Selection = this.multiEmail.filter(function(e){return e});
    this.multiSelectionRequest.SelectionList.canMultiSelect = this.canMultiSelect;
      this.http.post('/file/commandxml/add',
        this.multiSelectionRequest).subscribe(() => {
        this.multiEmail = [];
        this.noOfEmial = 1;
      });
  }

  numberReturn(length){
    return Array.from({length: length}, (v, k) => k + 1);
  }
}

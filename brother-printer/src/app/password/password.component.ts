import { Component } from '@angular/core';
import {HttpService} from "../service/http.service";
import {Socket} from "ngx-socket-io";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  public result = '';
  public password = '';
  public passwordRequest = {"PasswordRequest": {
      "PasswordToCheck": ''
    } };

  constructor(private http: HttpService, private socket: Socket) {
    this.socket.on('getXml', (data) => {
      console.log(data);
      this.result = data.s === 3 ? data.data : this.result;
    });
  }

  applyPassword() {
    this.passwordRequest.PasswordRequest.PasswordToCheck = this.password;
    this.http.post('/file/commandxml/add', this.passwordRequest).subscribe(() => {
      this.password = '';
    });
  }

}

import { Component } from '@angular/core';
import {HttpService} from "./service/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'brother-printer';
  public URL: string = '';
  public error: boolean = false;
  public success: boolean = false;
  constructor(private http: HttpService){}

  checkConnection() {
    this.http.setHost(this.URL);
    this.http.get('/check/available').subscribe(resp => {
      this.success = true;
      this.error = false;
    }, error => {
      this.error = true;
      this.success = false;
    })
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private host: string = '/';

  constructor(private http: HttpClient) { }

  public setHost(host: string) {
    this.host = host;
  }

  public post(url: string, data) {
    return this.http.post(this.host + url, data);
  }

  public get(url: string) {
    return this.http.get(this.host + url);
  }
}

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Socket } from 'ngx-socket-io';
import * as Constant from '../constant';

@Component({
  selector: 'app-paramater-group',
  templateUrl: './paramater-group.component.html',
  styleUrls: ['./paramater-group.component.scss']
})
export class ParamaterGroupComponent implements OnInit, OnChanges {
@Input() public displayRequestResponse = false;
@Input() public dataValue = {};
@Input() public defaultDataValue = {};
@Input() public dataValueType = {};
@Input() public title = '';
@Input() public key = '';
@Input() public displayData = [];
  public result = '';
  public constant = Constant;
  constructor(private http: HttpService, private socket: Socket) {
    this.getKeyValue();
    this.socket.on('getJson', (data) => {
      console.log(data);
      this.result = data.s === this.key ? data.data : this.result;
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.dataValue.currentValue) {
      this.getKeyValue();
    }

  }
  ngOnInit() {
  }

  getKeyValue() {
    this.displayData = [];
    const getObjectKeyValue = (obj, objValue) => {
      Object.keys(obj).forEach((key, index) => {
        typeof obj[key] === 'object' ? getObjectKeyValue(obj[key], objValue[key]) :
        this.displayData.push({label: key, value: objValue[key], type: obj[key]});
      });
    };
    Object.keys(this.dataValue).forEach((key, index) => {
      typeof this.dataValueType[key] === 'object' ? getObjectKeyValue(this.dataValueType[key], this.dataValue[key]) :
        this.displayData.push({label: key, value: this.dataValue[key], type: this.dataValueType[key]});
    });
  }

  checkbox(event, key) {
    this.dataValue[key] = event.target.value;
  }

  textbox(event, key) {
     this.dataValue[key] = event.target.value;
     this.getKeyValue();
  }

  validType(type) {
    return typeof type === 'object';
  }

  changeValue(changeKey) {
    if (this.dataValue[changeKey] !== undefined) {
      this.dataValue[changeKey] = this.displayData.find(data => data.label === changeKey).value;
    } else {
      const setValue = (obj, parentKey) => {
        Object.keys(obj).forEach((key, index) => {
          if (typeof obj[key] === 'object') {
            setValue(obj[key], key);
          } else {
            obj[changeKey] = this.displayData.find(data => data.label === changeKey).value;
            console.log(obj);
          }
        });
      }
      Object.keys(this.dataValue).forEach((key, index) => {
        if (typeof this.dataValue[key] === 'object') {
          setValue(this.dataValue[key], key);
        }
      });
    }
  }
  reset() {
    this.dataValue = Constant[this.key + 'Default'];
    this.getKeyValue();
  }
  send() {
    this.http.post('/file/commandjson/add', {[this.key]: this.dataValue}).subscribe(() => {
      const key = this.key + 'Default';
      this.dataValue = Constant[key];
      this.getKeyValue();
    });
  }
}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-request-response',
  templateUrl: './request-response.component.html',
  styleUrls: ['./request-response.component.scss']
})
export class RequestResponseComponent implements OnInit {
@Input() public request: any;
@Input() public response: any;
  constructor() { }

  ngOnInit() {
  }

}

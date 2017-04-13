import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html'
  // styleUrls: ['./date.component.scss']
})
export class MomentComponent implements OnInit {
  date: any;
  weekNb: number;
  dayNb: number;
  formatted: string;

  constructor() { }

  ngOnInit() {
    this.date = moment();
    this.weekNb = moment().week();
    this.dayNb = moment().dayOfYear();
    this.formatted = this.date.format('hh:mm:ss');
  }

}

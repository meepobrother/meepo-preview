import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weui-inline-calendar',
  templateUrl: './weui-inline-calendar.component.html',
  styleUrls: ['./weui-inline-calendar.component.less']
})
export class WeuiInlineCalendarComponent implements OnInit {
  @Input() widget: any;
  constructor() { }

  ngOnInit() {
  }

}

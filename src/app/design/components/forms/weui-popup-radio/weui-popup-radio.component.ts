import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weui-popup-radio',
  templateUrl: './weui-popup-radio.component.html',
  styleUrls: ['./weui-popup-radio.component.less']
})
export class WeuiPopupRadioComponent implements OnInit {
  @Input() widget: any;
  constructor() { }

  ngOnInit() {
  }

}

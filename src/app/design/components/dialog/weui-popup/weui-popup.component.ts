import { Component, OnInit, Input } from '@angular/core';
import { WeuiPopupDefault } from '../../../models';
@Component({
  selector: 'weui-popup',
  templateUrl: './weui-popup.component.html',
  styleUrls: ['./weui-popup.component.less']
})
export class WeuiPopupComponent implements OnInit {
  @Input() widget: WeuiPopupDefault = new WeuiPopupDefault();
  constructor() { }

  ngOnInit() {
  }

}


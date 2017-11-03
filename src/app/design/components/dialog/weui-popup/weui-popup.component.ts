import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weui-popup',
  templateUrl: './weui-popup.component.html',
  styleUrls: ['./weui-popup.component.less']
})
export class WeuiPopupComponent implements OnInit {
  @Input() widget: any;
  constructor() { }

  ngOnInit() {
  }

}



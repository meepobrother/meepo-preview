import { Component, OnInit, Input } from '@angular/core';
import { WeuiTextDefault } from '../../../models/other/weui-text';

@Component({
  selector: 'weui-text',
  templateUrl: './weui-text.component.html',
  styleUrls: ['./weui-text.component.scss']
})
export class WeuiTextComponent implements OnInit {
  @Input() widget: WeuiTextDefault = new WeuiTextDefault();
  constructor() {

  }

  ngOnInit() { }

}


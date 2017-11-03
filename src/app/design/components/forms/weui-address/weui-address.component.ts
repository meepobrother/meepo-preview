import { Component, OnInit, Input } from '@angular/core';
import { WeuiAddressDefault } from '../../../models';
@Component({
  selector: 'weui-address',
  templateUrl: './weui-address.component.html',
  styleUrls: ['./weui-address.component.scss']
})
export class WeuiAddressComponent implements OnInit {
  @Input() widget: WeuiAddressDefault = new WeuiAddressDefault();
  constructor() { }

  ngOnInit() {
    this.widget = this.widget || new WeuiAddressDefault();
  }

}


import { Component, OnInit, Input } from '@angular/core';
import { WeuiToastDefault } from '../../../models';

@Component({
  selector: 'weui-toast',
  templateUrl: './weui-toast.component.html',
  styleUrls: ['./weui-toast.component.scss']
})
export class WeuiToastComponent implements OnInit {
  @Input() widget: WeuiToastDefault = new WeuiToastDefault();
  constructor() { }

  ngOnInit() {
  }

}



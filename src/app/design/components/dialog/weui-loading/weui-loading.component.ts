import { Component, OnInit, Input } from '@angular/core';
import { WeuiLoadingDefault } from '../../../models';

@Component({
  selector: 'weui-loading',
  templateUrl: './weui-loading.component.html',
  styleUrls: ['./weui-loading.component.scss']
})
export class WeuiLoadingComponent implements OnInit {
  @Input() widget: WeuiLoadingDefault = new WeuiLoadingDefault();
  constructor() { }

  ngOnInit() {
  }

}


import { Component, OnInit, Input } from '@angular/core';
import { WeuiCellDefault } from '../../../models/other/weui-cell';

@Component({
  selector: 'weui-cell',
  templateUrl: './weui-cell.component.html',
  styleUrls: ['./weui-cell.component.scss']
})
export class WeuiCellComponent implements OnInit {
  @Input() widget: WeuiCellDefault = new WeuiCellDefault();
  constructor() { }

  ngOnInit() { }

  onClick() {

  }

}


import { Component, OnInit, Input } from '@angular/core';
import { WeuiBtnDefault } from '../../../models';

@Component({
  selector: 'weui-btn',
  templateUrl: './weui-btn.component.html',
  styleUrls: ['./weui-btn.component.scss']
})
export class WeuiBtnComponent implements OnInit {
  @Input() widget: any;
  constructor() { }

  ngOnInit() {
  }

}

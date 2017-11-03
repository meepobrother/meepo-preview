import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weui-selector',
  templateUrl: './weui-selector.component.html',
  styleUrls: ['./weui-selector.component.scss']
})
export class WeuiSelectorComponent implements OnInit {
  @Input() widget: any;
  constructor() { }

  ngOnInit() {
  }

}

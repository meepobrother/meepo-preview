import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weui-action-sheet',
  templateUrl: './weui-action-sheet.component.html',
  styleUrls: ['./weui-action-sheet.component.scss']
})
export class WeuiActionSheetComponent implements OnInit {
  @Input() widget: any;
  constructor() { }

  ngOnInit() {
  }

}

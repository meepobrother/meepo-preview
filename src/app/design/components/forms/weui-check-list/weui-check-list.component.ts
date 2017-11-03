import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weui-check-list',
  templateUrl: './weui-check-list.component.html',
  styleUrls: ['./weui-check-list.component.scss']
})
export class WeuiCheckListComponent implements OnInit {
  @Input() widget: any;
  constructor() { }

  ngOnInit() {
  }

}

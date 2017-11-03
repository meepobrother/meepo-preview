import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weui-checker',
  templateUrl: './weui-checker.component.html',
  styleUrls: ['./weui-checker.component.scss']
})
export class WeuiCheckerComponent implements OnInit {
  @Input() widget: any;
  constructor() { }

  ngOnInit() {
  }

}

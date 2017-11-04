import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weui-confirm',
  templateUrl: './weui-confirm.component.html',
  styleUrls: ['./weui-confirm.component.scss']
})
export class WeuiConfirmComponent implements OnInit {
  @Input() widget: any;
  constructor() { }

  ngOnInit() {
  }

}

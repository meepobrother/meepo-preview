import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weui-input',
  templateUrl: './weui-input.component.html',
  styleUrls: ['./weui-input.component.scss']
})
export class WeuiInputComponent implements OnInit {
  @Input() widget: any;
  constructor() { }

  ngOnInit() {
  }

}

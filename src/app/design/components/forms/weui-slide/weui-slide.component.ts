import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weui-slide',
  templateUrl: './weui-slide.component.html',
  styleUrls: ['./weui-slide.component.scss']
})
export class WeuiSlideComponent implements OnInit {
  @Input() widget: any;
  constructor() { }

  ngOnInit() {
  }

}

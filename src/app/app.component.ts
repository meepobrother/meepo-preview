import { Component, OnInit } from '@angular/core';
declare const Swiper: any;
import * as _ from 'underscore';

import { MODELS } from './design/models';
import { VIEWSCOMPONENTS } from './design/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '杭州米波网络科技有限公司，合作邮箱： 1037483576@qq.com, 杨明明，合作电话： 13140415408';

  widgets: any[] = [];
  ngOnInit() {
    console.log(this.title);
    this.widgets = [];
    _.each(MODELS, (item, key) => {
      this.widgets.push(new item());
    });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { WeuiBtnDefault } from '../../../models';
import { ApiService, FormDataService } from '../../../../services';
@Component({
  selector: 'weui-btn',
  templateUrl: './weui-btn.component.html',
  styleUrls: ['./weui-btn.component.scss']
})
export class WeuiBtnComponent implements OnInit {
  @Input() widget: any;
  constructor(
    public api: ApiService,
    public form: FormDataService
  ) { }

  ngOnInit() {
  }

  _post() {
    this.api.mpost(this.widget.__do, this.form.getFormData()).subscribe((res: any) => {
      
      console.log(res);
    });
  }

}

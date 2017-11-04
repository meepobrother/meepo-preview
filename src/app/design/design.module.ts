import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Components } from './components';
import { FreeWidgetComponent } from './layouts';
import { WeuiTextComponent } from './components/other/weui-text/weui-text.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...Components,
    FreeWidgetComponent,
    WeuiTextComponent
  ],
  exports: [
    ...Components,
    FreeWidgetComponent
  ],
  entryComponents: [
    ...Components
  ]
})
export class DesignModule { }

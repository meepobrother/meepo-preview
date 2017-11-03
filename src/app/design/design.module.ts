import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Components } from './components';
import { FreeWidgetComponent } from './layouts';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...Components,
    FreeWidgetComponent
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

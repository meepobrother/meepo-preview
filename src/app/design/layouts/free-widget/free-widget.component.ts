import {
  Component, OnInit, ViewChild,
  ViewContainerRef, Input, ComponentFactoryResolver,
  AfterViewInit, OnDestroy, OnChanges
} from '@angular/core';
import { VIEWSCOMPONENTS } from '../../components';
@Component({
  selector: 'free-widget, div.free-widget',
  templateUrl: './free-widget.component.html',
  styleUrls: ['./free-widget.component.scss']
})
export class FreeWidgetComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  @ViewChild('placeholder', { read: ViewContainerRef }) placeholder: ViewContainerRef;
  @Input() widget: any;

  compRef: any;
  parentForm: any;
  constructor(
    public compFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() { }

  renderWidgetContainer() {
    if (this.compRef) {
      this.compRef.destroy();
    }
    if (this.widget) {
      const component = VIEWSCOMPONENTS[this.widget.type];
      if (component) {
        const compFactory = this.compFactoryResolver.resolveComponentFactory(component);
        this.compRef = this.placeholder.createComponent(compFactory);
        this.widget.parentForm = this.parentForm;
        this.compRef.instance.widget = this.widget;
      }
    }
  }

  ngAfterViewInit() { }


  ngOnDestroy() {
    if (this.compRef) {
      this.compRef.destroy();
    }
  }

  ngOnChanges() {
    this.renderWidgetContainer();
  }


}

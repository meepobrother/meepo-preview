import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiColorPickerComponent } from './weui-color-picker.component';

describe('WeuiColorPickerComponent', () => {
  let component: WeuiColorPickerComponent;
  let fixture: ComponentFixture<WeuiColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiColorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

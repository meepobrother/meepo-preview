import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiAlertComponent } from './weui-alert.component';

describe('WeuiAlertComponent', () => {
  let component: WeuiAlertComponent;
  let fixture: ComponentFixture<WeuiAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

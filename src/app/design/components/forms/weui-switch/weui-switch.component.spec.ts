import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiSwitchComponent } from './weui-switch.component';

describe('WeuiSwitchComponent', () => {
  let component: WeuiSwitchComponent;
  let fixture: ComponentFixture<WeuiSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiCountDownComponent } from './weui-count-down.component';

describe('WeuiCountDownComponent', () => {
  let component: WeuiCountDownComponent;
  let fixture: ComponentFixture<WeuiCountDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiCountDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiCountDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

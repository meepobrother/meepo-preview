import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiScrollerComponent } from './weui-scroller.component';

describe('WeuiScrollerComponent', () => {
  let component: WeuiScrollerComponent;
  let fixture: ComponentFixture<WeuiScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiScrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

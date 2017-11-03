import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiStickyComponent } from './weui-sticky.component';

describe('WeuiStickyComponent', () => {
  let component: WeuiStickyComponent;
  let fixture: ComponentFixture<WeuiStickyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiStickyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

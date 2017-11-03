import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiMarqueeComponent } from './weui-marquee.component';

describe('WeuiMarqueeComponent', () => {
  let component: WeuiMarqueeComponent;
  let fixture: ComponentFixture<WeuiMarqueeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiMarqueeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

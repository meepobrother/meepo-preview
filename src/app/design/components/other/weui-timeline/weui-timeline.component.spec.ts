import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiTimelineComponent } from './weui-timeline.component';

describe('WeuiTimelineComponent', () => {
  let component: WeuiTimelineComponent;
  let fixture: ComponentFixture<WeuiTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

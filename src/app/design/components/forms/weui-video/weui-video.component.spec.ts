import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiVideoComponent } from './weui-video.component';

describe('WeuiVideoComponent', () => {
  let component: WeuiVideoComponent;
  let fixture: ComponentFixture<WeuiVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

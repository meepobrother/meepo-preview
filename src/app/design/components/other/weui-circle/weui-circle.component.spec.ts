import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiCircleComponent } from './weui-circle.component';

describe('WeuiCircleComponent', () => {
  let component: WeuiCircleComponent;
  let fixture: ComponentFixture<WeuiCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiFlowComponent } from './weui-flow.component';

describe('WeuiFlowComponent', () => {
  let component: WeuiFlowComponent;
  let fixture: ComponentFixture<WeuiFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiCountUpComponent } from './weui-count-up.component';

describe('WeuiCountUpComponent', () => {
  let component: WeuiCountUpComponent;
  let fixture: ComponentFixture<WeuiCountUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiCountUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiCountUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

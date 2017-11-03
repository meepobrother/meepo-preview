import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiToastComponent } from './weui-toast.component';

describe('WeuiToastComponent', () => {
  let component: WeuiToastComponent;
  let fixture: ComponentFixture<WeuiToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

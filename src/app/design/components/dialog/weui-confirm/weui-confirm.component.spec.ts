import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiConfirmComponent } from './weui-confirm.component';

describe('WeuiConfirmComponent', () => {
  let component: WeuiConfirmComponent;
  let fixture: ComponentFixture<WeuiConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

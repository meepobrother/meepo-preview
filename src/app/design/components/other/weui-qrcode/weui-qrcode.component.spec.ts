import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiQrcodeComponent } from './weui-qrcode.component';

describe('WeuiQrcodeComponent', () => {
  let component: WeuiQrcodeComponent;
  let fixture: ComponentFixture<WeuiQrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiQrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

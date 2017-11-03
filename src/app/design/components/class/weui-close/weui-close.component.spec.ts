import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiCloseComponent } from './weui-close.component';

describe('WeuiCloseComponent', () => {
  let component: WeuiCloseComponent;
  let fixture: ComponentFixture<WeuiCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiCloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

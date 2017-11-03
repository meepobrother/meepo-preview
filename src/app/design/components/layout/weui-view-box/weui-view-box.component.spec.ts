import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiViewBoxComponent } from './weui-view-box.component';

describe('WeuiViewBoxComponent', () => {
  let component: WeuiViewBoxComponent;
  let fixture: ComponentFixture<WeuiViewBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiViewBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiViewBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

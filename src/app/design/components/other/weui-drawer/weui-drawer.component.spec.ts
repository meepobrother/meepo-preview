import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiDrawerComponent } from './weui-drawer.component';

describe('WeuiDrawerComponent', () => {
  let component: WeuiDrawerComponent;
  let fixture: ComponentFixture<WeuiDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

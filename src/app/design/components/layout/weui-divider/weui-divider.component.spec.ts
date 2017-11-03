import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiDividerComponent } from './weui-divider.component';

describe('WeuiDividerComponent', () => {
  let component: WeuiDividerComponent;
  let fixture: ComponentFixture<WeuiDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

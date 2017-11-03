import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiGridComponent } from './weui-grid.component';

describe('WeuiGridComponent', () => {
  let component: WeuiGridComponent;
  let fixture: ComponentFixture<WeuiGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

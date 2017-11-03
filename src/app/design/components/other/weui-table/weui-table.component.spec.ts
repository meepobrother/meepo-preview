import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiTableComponent } from './weui-table.component';

describe('WeuiTableComponent', () => {
  let component: WeuiTableComponent;
  let fixture: ComponentFixture<WeuiTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiCellComponent } from './weui-cell.component';

describe('WeuiCellComponent', () => {
  let component: WeuiCellComponent;
  let fixture: ComponentFixture<WeuiCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiActionSheetComponent } from './weui-action-sheet.component';

describe('WeuiActionSheetComponent', () => {
  let component: WeuiActionSheetComponent;
  let fixture: ComponentFixture<WeuiActionSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiActionSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiActionSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

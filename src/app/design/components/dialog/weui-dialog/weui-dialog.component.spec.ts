import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiDialogComponent } from './weui-dialog.component';

describe('WeuiDialogComponent', () => {
  let component: WeuiDialogComponent;
  let fixture: ComponentFixture<WeuiDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

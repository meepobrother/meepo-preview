import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiHeaderComponent } from './weui-header.component';

describe('WeuiHeaderComponent', () => {
  let component: WeuiHeaderComponent;
  let fixture: ComponentFixture<WeuiHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiButtonTabComponent } from './weui-button-tab.component';

describe('WeuiButtonTabComponent', () => {
  let component: WeuiButtonTabComponent;
  let fixture: ComponentFixture<WeuiButtonTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiButtonTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiButtonTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

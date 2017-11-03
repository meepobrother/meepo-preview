import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiSteperComponent } from './weui-steper.component';

describe('WeuiSteperComponent', () => {
  let component: WeuiSteperComponent;
  let fixture: ComponentFixture<WeuiSteperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiSteperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiSteperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

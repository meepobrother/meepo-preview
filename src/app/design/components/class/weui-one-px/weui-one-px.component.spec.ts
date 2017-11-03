import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiOnePxComponent } from './weui-one-px.component';

describe('WeuiOnePxComponent', () => {
  let component: WeuiOnePxComponent;
  let fixture: ComponentFixture<WeuiOnePxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiOnePxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiOnePxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

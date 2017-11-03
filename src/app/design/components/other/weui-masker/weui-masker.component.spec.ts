import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiMaskerComponent } from './weui-masker.component';

describe('WeuiMaskerComponent', () => {
  let component: WeuiMaskerComponent;
  let fixture: ComponentFixture<WeuiMaskerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiMaskerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiMaskerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiCardComponent } from './weui-card.component';

describe('WeuiCardComponent', () => {
  let component: WeuiCardComponent;
  let fixture: ComponentFixture<WeuiCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

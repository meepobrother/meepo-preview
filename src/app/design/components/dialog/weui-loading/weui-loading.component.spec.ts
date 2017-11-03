import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiLoadingComponent } from './weui-loading.component';

describe('WeuiLoadingComponent', () => {
  let component: WeuiLoadingComponent;
  let fixture: ComponentFixture<WeuiLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

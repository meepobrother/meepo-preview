import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiInlineLoadingComponent } from './weui-inline-loading.component';

describe('WeuiInlineLoadingComponent', () => {
  let component: WeuiInlineLoadingComponent;
  let fixture: ComponentFixture<WeuiInlineLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiInlineLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiInlineLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

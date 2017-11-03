import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiImageComponent } from './weui-image.component';

describe('WeuiImageComponent', () => {
  let component: WeuiImageComponent;
  let fixture: ComponentFixture<WeuiImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

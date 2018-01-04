import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fragment4Component } from './fragment4.component';

describe('Fragment4Component', () => {
  let component: Fragment4Component;
  let fixture: ComponentFixture<Fragment4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fragment4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fragment4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

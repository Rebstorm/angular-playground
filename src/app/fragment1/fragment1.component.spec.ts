import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fragment1Component } from './fragment1.component';

describe('Fragment1Component', () => {
  let component: Fragment1Component;
  let fixture: ComponentFixture<Fragment1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fragment1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fragment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

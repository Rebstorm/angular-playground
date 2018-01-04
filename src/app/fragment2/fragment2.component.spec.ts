import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fragment2Component } from './fragment2.component';

describe('Fragment2Component', () => {
  let component: Fragment2Component;
  let fixture: ComponentFixture<Fragment2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fragment2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fragment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

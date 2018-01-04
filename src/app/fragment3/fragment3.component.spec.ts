import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fragment3Component } from './fragment3.component';

describe('Fragment3Component', () => {
  let component: Fragment3Component;
  let fixture: ComponentFixture<Fragment3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fragment3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fragment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextMenuComponent } from './next-menu.component';

describe('NextMenuComponent', () => {
  let component: NextMenuComponent;
  let fixture: ComponentFixture<NextMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

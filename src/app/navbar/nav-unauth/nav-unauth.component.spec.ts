/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavUnauthComponent } from './nav-unauth.component';

describe('NavUnauthComponent', () => {
  let component: NavUnauthComponent;
  let fixture: ComponentFixture<NavUnauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavUnauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavUnauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

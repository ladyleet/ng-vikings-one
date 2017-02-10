/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MooComponent } from './moo.component';

describe('MooComponent', () => {
  let component: MooComponent;
  let fixture: ComponentFixture<MooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

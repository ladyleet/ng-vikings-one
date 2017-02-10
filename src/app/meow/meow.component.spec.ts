/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MeowComponent } from './meow.component';

describe('MeowComponent', () => {
  let component: MeowComponent;
  let fixture: ComponentFixture<MeowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

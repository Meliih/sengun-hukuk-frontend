/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IcraComponent } from './icra.component';

describe('IcraComponent', () => {
  let component: IcraComponent;
  let fixture: ComponentFixture<IcraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

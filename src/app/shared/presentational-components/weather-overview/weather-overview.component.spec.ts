/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WeatherOverviewComponent } from './weather-overview.component';

describe('Presentational Component: WeatherOverviewComponent', () => {
  let component: WeatherOverviewComponent;
  let fixture: ComponentFixture<WeatherOverviewComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

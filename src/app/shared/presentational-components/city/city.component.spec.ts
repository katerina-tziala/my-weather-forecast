/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CityComponent } from './city.component';
import { CityModule } from './city.module';

fdescribe('Presentational Component: CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;
  let el: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CityModule],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(CityComponent);
          component = fixture.componentInstance;
          el = fixture.debugElement;
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});

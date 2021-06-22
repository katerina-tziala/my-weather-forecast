/* tslint:disable:no-unused-variable */
import {
  ComponentFixture,
  TestBed,
  async,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WeatherOverviewComponent } from './weather-overview.component';
import { WeatherOverviewModule } from './weather-overview.module';
import { findWeatherForCityByName } from '../../shared-services/weather-forecast/mock-data';

describe('Presentational Component: WeatherOverviewComponent', () => {
  let component: WeatherOverviewComponent;
  let fixture: ComponentFixture<WeatherOverviewComponent>;
  let el: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [WeatherOverviewModule],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(WeatherOverviewComponent);
          component = fixture.componentInstance;
          el = fixture.debugElement;
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the weather overview, when weatherOverview defined', () => {
    component.weatherOverview = findWeatherForCityByName('Amsterdam');
    fixture.detectChanges();

    const temperature = el.query(By.css('.weather-temperature'));
    const description = el.query(By.css('.weather-description'));
    const wind = el.query(By.css('.weather-wind'));

    expect(temperature).toBeTruthy('Could not find temperature component');
    expect(description).toBeTruthy('Could not find description component');
    expect(wind).toBeTruthy('Could not find wind component');
  });

  it('should NOT display the weather overview, when weatherOverview NOT defined', () => {
    component.weatherOverview = null;
    fixture.detectChanges();

    const temperature = el.query(By.css('.weather-temperature'));
    const description = el.query(By.css('.weather-description'));
    const wind = el.query(By.css('.weather-wind'));

    expect(temperature).toBeNull('Wrong temperature component');
    expect(description).toBeNull('Wrong description component');
    expect(wind).toBeNull('Wrong wind component');
  });
});

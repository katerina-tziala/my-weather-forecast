import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WeatherTemperatureComponent } from './weather-temperature.component';
import { WeatherTemperatureModule } from './weather-temperature.module';
import { getWeatherSample } from '../../shared-services/weather-forecast/mock-data';

describe('Presentational Component: WeatherTemperatureComponent', () => {
  let component: WeatherTemperatureComponent;
  let fixture: ComponentFixture<WeatherTemperatureComponent>;
  let el: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [WeatherTemperatureModule],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(WeatherTemperatureComponent);
          component = fixture.componentInstance;
          el = fixture.debugElement;
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT display weather temperature, when weather NOT defined', () => {
    component.weather = null;
    fixture.detectChanges();

    const currentTemperature = el.query(By.css('.weather-current-temparature'));
    expect(currentTemperature).toBeNull();
  });

  it('should NOT display current weather temperature, when weather defined', () => {
    component.weather = getWeatherSample();
    fixture.detectChanges();

    const currentTemperature = el.query(By.css('.weather-current-temparature'));
    expect(currentTemperature).toBeTruthy(
      'Could not find the current temperature element'
    );
  });

  it('should display weather temperature range, when range required', () => {
    component.weather = getWeatherSample();
    component.includeRange = true;
    fixture.detectChanges();

    const currentTemperature = el.query(By.css('.weather-temparature-range'));
    expect(currentTemperature).toBeTruthy(
      'Could not find the weather temparature range element'
    );
  });

  it('should not display weather temperature range, when range NOT required', () => {
    component.weather = getWeatherSample();
    component.includeRange = false;
    fixture.detectChanges();

    const currentTemperature = el.query(By.css('.weather-temparature-range'));
    expect(currentTemperature).toBeNull();
  });
});

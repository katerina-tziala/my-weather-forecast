import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CitiesWeatherListComponent } from './cities-weather-list.component';
import { CitiesWeatherListModule } from './cities-weather-list.module';
import { getSampleCitiesList } from 'src/app/shared/shared-services/weather-forecast/mock-data';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('Presentational Component: CitiesWeatherListComponent', () => {
  let component: CitiesWeatherListComponent;
  let fixture: ComponentFixture<CitiesWeatherListComponent>;
  let el: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CitiesWeatherListModule, RouterTestingModule.withRoutes([])],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(CitiesWeatherListComponent);
          component = fixture.componentInstance;
          el = fixture.debugElement;
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display message when no cities provided', () => {
    component.citiesWeather = [];
    fixture.detectChanges();

    const message = el.query(By.css('.empty-cities-list'));
    expect(message).toBeTruthy('No message provided when no data to display');
  });

  it('should display the cities list', () => {
    component.citiesWeather = getSampleCitiesList();
    fixture.detectChanges();

    const listItems = el.queryAll(By.css('.city-weather-list-item'));

    expect(listItems).toBeTruthy('Could not find cities list items');
    expect(listItems.length).toEqual(component.citiesWeather.length);
  });

  it('should display the first city correctly', () => {
    component.citiesWeather = getSampleCitiesList();
    fixture.detectChanges();

    const cityWeather = component.citiesWeather[0];

    const listItem = el.query(By.css('.city-weather-list-item:first-child')),
      link = listItem.query(By.css('.city-weather-link-wrapper')),
      city = listItem.query(By.css('.city-weather-location')),
      weather = listItem.query(By.css('.city-weather-overview'));

    expect(listItem).toBeTruthy('Could not find course city list item');
    expect(link).toBeTruthy('Could not find city link wrapper');
    expect(link.properties['href']).toEqual(
      `/city/${cityWeather.name}`,
      'Router link is not correct'
    );

    expect(city).toBeTruthy('Could not find city component');
    expect(weather).toBeTruthy('Could not find weather component');
  });
});

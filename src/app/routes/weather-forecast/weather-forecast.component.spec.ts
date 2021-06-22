import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { WeatherForecastComponent } from './weather-forecast.component';
import { WeatherForecastService } from 'src/app/shared/shared-services/weather-forecast/weather-forecast.service';
import { WeatherForecastModule } from './weather-forecast.module';
import { getSampleCitiesList } from 'src/app/shared/shared-services/weather-forecast/mock-data';
import { RouterTestingModule } from '@angular/router/testing';
import { CitiesWeatherListComponent } from './cities-weather-list/cities-weather-list.component';

describe('WeatherForecastComponent', () => {
  let fixture: ComponentFixture<WeatherForecastComponent>;
  let component: WeatherForecastComponent;
  let el: DebugElement;
  let weatherService: any;

  beforeEach(
    waitForAsync(() => {
      const weatherServiceSpy = jasmine.createSpyObj('WeatherForecastService', [
        'getWeatherForCities',
      ]);

      TestBed.configureTestingModule({
        imports: [WeatherForecastModule, RouterTestingModule.withRoutes([])],
        providers: [
          { provide: WeatherForecastService, useValue: weatherServiceSpy },
        ],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(WeatherForecastComponent);
          component = fixture.componentInstance;
          el = fixture.debugElement;
          weatherService = TestBed.inject(WeatherForecastService);
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the weather list component', () => {
    const sampleData = getSampleCitiesList();
    weatherService.getWeatherForCities.and.returnValue(of(sampleData));

    fixture.detectChanges();

    const listComponent = fixture.debugElement.query(
      By.directive(CitiesWeatherListComponent)
    );
    const listItems = listComponent.queryAll(By.css('.city-weather-list-item'));

    expect(listComponent).toBeTruthy(
      'Cities weather list component not loaded'
    );

    expect(listItems.length).toEqual(
      sampleData.length,
      'Cities weather list did not load the items correctly'
    );
  });

  it('should display the no data message', () => {
    weatherService.getWeatherForCities.and.returnValue(of([]));

    fixture.detectChanges();

    const listComponent = el.query(By.directive(CitiesWeatherListComponent));
    const noDataMessage = listComponent.queryAll(By.css('.empty-cities-list'));
    const listItems = listComponent.queryAll(By.css('.city-weather-list-item'));

    expect(listComponent).toBeTruthy(
      'Cities weather list component not loaded'
    );
    expect(listItems.length).toEqual(0, 'Cities weather list has loaded items');
    expect(noDataMessage).toBeTruthy();
  });

});

import {
  ComponentFixture,
  fakeAsync,
  flush,
  flushMicrotasks,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { WeatherForecastService } from 'src/app/shared/shared-services/weather-forecast/weather-forecast.service';

import {
  findCityForecastByName,
  getSampleCitiesList,
} from 'src/app/shared/shared-services/weather-forecast/mock-data';
import { RouterTestingModule } from '@angular/router/testing';
import { CitiesWeatherListComponent } from '../weather-forecast/cities-weather-list/cities-weather-list.component';
import { CityForecastComponent } from './city-forecast.component';
import { CityForecastModule } from './city-forecast.module';
import { ActivatedRoute, Data } from '@angular/router';

xdescribe('CityForecastComponent', () => {
  let fixture: ComponentFixture<CityForecastComponent>;
  let component: CityForecastComponent;
  let el: DebugElement;
  let weatherService: any;
  let activatedRoute: ActivatedRoute;

  beforeEach(
    waitForAsync(() => {
      const weatherServiceSpy = jasmine.createSpyObj('WeatherForecastService', [
        'getWeatherForecastForCity',
      ]);
      weatherService.getWeatherForecastForCity.and.returnValue(of(findCityForecastByName('Amsterdam')));
      TestBed.configureTestingModule({
        imports: [
          CityForecastModule,
          RouterTestingModule,
          RouterTestingModule.withRoutes([]),
        ],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: {
                params: {
                  property: 'name',
                  name: 'Amsterdam',
                }
              },
            },
          },
          { provide: WeatherForecastService, useValue: weatherServiceSpy },
        ],
      })
        .compileComponents()
        .then(() => {
          activatedRoute = TestBed.inject(ActivatedRoute);
          weatherService = TestBed.inject(WeatherForecastService);

          fixture = TestBed.createComponent(CityForecastComponent);
          component = fixture.componentInstance;
          el = fixture.debugElement;



        });

    })
  );

  it('should create the component', () => {

    //fixture.detectChanges();
    expect(component).toBeTruthy();
  });


});

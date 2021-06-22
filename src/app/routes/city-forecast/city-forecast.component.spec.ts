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

describe('CityForecastComponent', () => {
  let fixture: ComponentFixture<CityForecastComponent>;
  let component: CityForecastComponent;
  let el: DebugElement;
  let weatherService: any;
  let activatedRoute: ActivatedRoute;

  beforeEach(
    waitForAsync(() => {
      const weatherServiceSpy = jasmine.createSpyObj('WeatherForecastService', [
        'getWeatherFoecastForCity',
      ]);

      TestBed.configureTestingModule({
        imports: [
          CityForecastModule,
          RouterTestingModule,
          RouterTestingModule.withRoutes([]),
        ],
        providers: [
          // {
          //   provide: ActivatedRoute,
          //   useValue: {
          //     snapshot: {
          //       params: {
          //         property: 'name',
          //         name: 'Amsterdam',
          //       }
          //       //,
          //       // data: {
          //       //   yourResolvedValue: { data: mockResolvedData() }
          //       // }
          //     },
          //   },
          // },
          { provide: WeatherForecastService, useValue: weatherServiceSpy },
        ],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(CityForecastComponent);
          component = fixture.componentInstance;
          el = fixture.debugElement;

          weatherService = TestBed.inject(WeatherForecastService);
          activatedRoute = TestBed.inject(ActivatedRoute);
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


});

import { CityForecast, LocationWeather } from './location-weather.interface';
import { TestBed } from '@angular/core/testing';
import { WeatherForecastService } from './weather-forecast.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { findCityForecastByName, findWeatherForCities } from './mock-data';
import { HttpErrorResponse } from '@angular/common/http';
import { EMPTY } from 'rxjs';

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'f566b6ca9f9485d189793e74e946268e';
const UNITS = 'metric';

function getURL(route: string): string {
  return `${API_BASE_URL}${route}`;
}

function checkRequestParams(req: TestRequest, method = 'GET'): void {
  expect(req.request.method).toEqual(method);
  expect(req.request.params.get('units')).toEqual(UNITS);
  expect(req.request.params.get('appid')).toEqual(API_KEY);
}

describe('Service: WeatherForecast', () => {
  let weatherForecastService: WeatherForecastService,
    httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherForecastService],
    });

    weatherForecastService = TestBed.inject(WeatherForecastService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should retrieve the weather forecast by city ids', () => {
    const citiesIds = [2759794, 8133841, 2761369, 2267057, 6542283];

    weatherForecastService
      .getWeatherForCities(citiesIds)
      .subscribe((citiesList: LocationWeather[]) => {
        expect(citiesList).toBeTruthy('No cities returned');
        expect(citiesList.length).toBe(
          citiesIds.length,
          'incorrect number of cities returned'
        );
      });

    const req = httpTestingController.expectOne(
      (req) => req.url == getURL(`/group`)
    );
    checkRequestParams(req);
    expect(req.request.params.get('id')).toEqual(citiesIds.join(','));

    req.flush({ list: findWeatherForCities(citiesIds) });
  });

  it('should return an empty array if request the weather forecast by city ids fails', () => {
    const citiesIds = [0];

    weatherForecastService.getWeatherForCities(citiesIds).subscribe(
      (citiesList: LocationWeather[]) => {
        expect(citiesList).toBeDefined([]);
        expect(citiesList.length).toBe(
          0,
          'incorrect number of cities returned'
        );
      },
      (error: HttpErrorResponse) => {
        expect(error.status).toBe(404);
      }
    );

    const req = httpTestingController.expectOne(
      (req) => req.url == getURL(`/group`)
    );
    checkRequestParams(req);
    expect(req.request.params.get('id')).toEqual(citiesIds.join(','));

    req.flush('request failed', { status: 404, statusText: 'No data' });
  });

  it('should retrieve the weather forecast by city name (Amsterdam)', () => {
    const cityName = 'Amsterdam';

    weatherForecastService
      .getWeatherFoecastForCity(cityName)
      .subscribe((cityForecast: CityForecast) => {
        expect(cityForecast).toBeTruthy();
        expect(cityForecast.city.name).toBe(cityName);
        expect(cityForecast.weatherForecast).toBeDefined();
      });

    const req = httpTestingController.expectOne(
      (req) => req.url == getURL(`/forecast`)
    );
    checkRequestParams(req);
    expect(req.request.params.get('q')).toEqual(cityName);
    req.flush({ ...findCityForecastByName(cityName) });
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});

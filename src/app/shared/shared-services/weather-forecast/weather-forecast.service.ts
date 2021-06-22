import { environment as Env } from 'src/environments/environment';
import { environment as ProdEnv } from 'src/environments/environment.prod';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpParams,
  HttpParamsOptions,
} from '@angular/common/http';
import { map, pluck } from 'rxjs/operators';
import {
  CityForecast,
  CityListItemForecast,
  DailyForecast,
  LocationWeather,
} from './location-weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService {
  private API = 'https://api.openweathermap.org/data/2.5';
  private API_KEY = 'e';
  // TODO: allow the user to select the preferable units of measurement  for the weather data
  // (units=imperial --> Fahrenheit, units=metric --> Celsius, units=standard --> Kelvin)
  private units = 'metric';

  constructor(private http: HttpClient) {
    this.API_KEY = Env.WEATHER_API_KEY || ProdEnv.WEATHER_API_KEY;
  }

  private getURL(route: string): string {
    return `${this.API}${route}`;
  }

  private fetchWeatherData<T>(
    route: string,
    options: HttpParamsOptions
  ): Observable<T> {
    const url = this.getURL(route);
    const params = new HttpParams(options)
      .set('units', this.units)
      .set('appid', this.API_KEY);
    return this.http.get<T>(url, { params });
  }

  private mapForecastPerDay(list: CityListItemForecast[]): DailyForecast[] {
    const forecastPerDay = this.getForecastPerDayMap(list);
    const grouppedByDay = [];

    for (const [day, forecast] of forecastPerDay) {
      const date = new Date(day);
      grouppedByDay.push({ date, forecast });
    }

    return grouppedByDay;
  }

  private getForecastPerDayMap(
    list: CityListItemForecast[]
  ): Map<string, CityListItemForecast[]> {
    const forecastPerDay: Map<string, CityListItemForecast[]> = new Map();

    list.forEach((forecast) => {
      const [date, time] = forecast.dt_txt.split(' ');
      const day = new Date(date).toISOString();
      forecast.time = time.split(':').slice(0, 2).join(':');
      const forecastInDay = forecastPerDay.get(day) || [];
      forecastInDay.push(forecast);
      forecastPerDay.set(day, forecastInDay);
    });
    return forecastPerDay;
  }

  public getWeatherForecastForCity(cityName: string): Observable<CityForecast> {
    const route = '/forecast';
    const params: HttpParamsOptions = { fromObject: { q: cityName } };

    return this.fetchWeatherData<CityForecast>(route, params).pipe(
      map((results: CityForecast) => {
        const { city, list } = results;
        const weatherForecast = this.mapForecastPerDay(list || []);
        const cityForecast: CityForecast = { city, weatherForecast };
        return cityForecast;
      })
    );
  }

  public getWeatherForCities(
    citiesIds: number[]
  ): Observable<LocationWeather[]> {
    const route = '/group';
    const id = citiesIds.join(',');
    const params: HttpParamsOptions = { fromObject: { id } };
    return this.fetchWeatherData(route, params).pipe(pluck('list'));
  }
}

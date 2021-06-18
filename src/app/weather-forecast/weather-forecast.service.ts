import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
import { CityForecast, LocationWeather } from './location-weather.interface';
@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService {
  private API_BASE = 'http://api.openweathermap.org/data/2.5/';
  private API_KEY = '&appid=f566b6ca9f9485d189793e74e946268e';
  private WEATHER_UNITS = '&units=metric';

  constructor(private http: HttpClient) {}

  private getURL(queryParams: string): string {
    return `${this.API_BASE}${queryParams}${this.WEATHER_UNITS}${this.API_KEY}`;
  }

  getWeatherForCities(citiesIds: string[]): Observable<LocationWeather[]> {
    const ids = citiesIds.join(',');
    const queryParams = `group?id=${ids}`;
    const url = this.getURL(queryParams);
    return this.http.get(url).pipe(pluck('list'));
  }

  getWeatherFoecastrCity(cityName: string): Observable<CityForecast> {
    const queryParams = `forecast?q=${cityName}`;
    const url = this.getURL(queryParams);
    return this.http.get<CityForecast>(url);
  }
}

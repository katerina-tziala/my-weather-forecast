import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<CityForecast>(url).pipe(
      map((results: CityForecast) => {
        const { city, list } = results;
         const weatherForecast = this.mapForecastPerDay(list || []);
         const cityForecast: CityForecast = { city, weatherForecast };
         return cityForecast;
      })
    );
  }

  private mapForecastPerDay(list: CityListItemForecast[]): DailyForecast[] {
    const forecastPerDay = this.getForecastPerDayMap(list);
    const grouppedByDay = [];

    for (const [day, forecast] of forecastPerDay) {
      const date = new Date(day);
      grouppedByDay.push({ date, forecast });
    }

    return grouppedByDay.slice(0, 4);
  }

  private getForecastPerDayMap(
    list: CityListItemForecast[]
  ): Map<string, CityListItemForecast[]> {
    const forecastPerDay: Map<string, CityListItemForecast[]> = new Map();

    list.forEach((forecast) => {
      const [date, time] = forecast.dt_txt.split(' ');
      const day = new Date(date).toISOString();
      forecast.time = time.split(":").slice(0, 2).join(":");
      const forecastInDay = forecastPerDay.get(day) || [];
      forecastInDay.push(forecast);
      forecastPerDay.set(day, forecastInDay);
    });
    return forecastPerDay;
  }
}

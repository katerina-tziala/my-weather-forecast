import { WeatherForecastService } from './../weather-forecast/weather-forecast.service';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LocationWeather } from '../weather-forecast/location-weather.interface';
import { catchError, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cities-forecast-list',
  templateUrl: './cities-forecast-list.component.html',
  styleUrls: ['./cities-forecast-list.component.scss'],
})
export class CitiesForecastListComponent {
  //TODO: allow user to select the cities
  private selectedCities$: BehaviorSubject<string[]> = new BehaviorSubject([
    '2759794',
    '8133841',
    '2761369',
    '2267057',
    '6542283',
  ]);

  public citiesForecast$: Observable<LocationWeather[]>;

  constructor(private weatherForecast: WeatherForecastService) {
    this.citiesForecast$ = this.selectedCities$.pipe(
      switchMap((selectedCities) =>
        this.weatherForecast.getWeatherForCities(selectedCities)
      ),
      catchError((_) => of([]))
    );
  }
}

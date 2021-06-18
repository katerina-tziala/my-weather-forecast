import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CityForecast } from '../weather-forecast/location-weather.interface';
import { WeatherForecastService } from '../weather-forecast/weather-forecast.service';

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss'],
})
export class CityForecastComponent {
  public cityForecast$: Observable<CityForecast>;

  constructor(
    private route: ActivatedRoute,
    private weatherForecast: WeatherForecastService
  ) {
    // TODO: ERROR HANDLING
    this.cityForecast$ = this.route.queryParams.pipe(
      switchMap(({ name }) => this.weatherForecast.getWeatherFoecastrCity(name))
    );
  }
}

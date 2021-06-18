import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
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
    private router: Router,
    private route: ActivatedRoute,
    private weatherForecast: WeatherForecastService
  ) {
    this.cityForecast$ = this.route.queryParams.pipe(
      switchMap(({ name }) => {
        if (name) {
          return this.weatherForecast.getWeatherFoecastrCity(name);
        }
        this.router.navigateByUrl('/weather-forecast');
        return EMPTY;
      }),
      catchError((_) => EMPTY)
    );
  }
}

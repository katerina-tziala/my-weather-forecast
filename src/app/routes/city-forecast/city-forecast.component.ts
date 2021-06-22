import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CityForecast } from 'src/app/shared/shared-services/weather-forecast/location-weather.interface';
import { WeatherForecastService } from 'src/app/shared/shared-services/weather-forecast/weather-forecast.service';

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss'],
})
export class CityForecastComponent {
  public cityForecast$: Observable<CityForecast>;

  constructor(
    private route: ActivatedRoute,
    private weatherForecastService: WeatherForecastService
  ) {
    const { name } = this.route.snapshot.params;
    this.cityForecast$ = this.weatherForecastService
      .getWeatherForecastForCity(name)
      .pipe(
        catchError((_) => EMPTY)
      );
  }
}

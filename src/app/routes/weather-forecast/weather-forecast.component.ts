import { Component } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, catchError, startWith } from 'rxjs/operators';
import { LocationWeather } from 'src/app/shared/shared-services/weather-forecast/location-weather.interface';
import { WeatherForecastService } from 'src/app/shared/shared-services/weather-forecast/weather-forecast.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent {
  // TODO: allow user to select the cities and pass their ids
  private selectedCities$: BehaviorSubject<number[]> = new BehaviorSubject([
    2759794,
    8133841,
    2761369,
    2267057,
    6542283,
  ]);

  public citiesForecast$: Observable<LocationWeather[]>;

  constructor(private weatherForecast: WeatherForecastService) {
    this.citiesForecast$ = this.selectedCities$.pipe(
      switchMap((selectedCities: number[]) =>
        this.weatherForecast.getWeatherForCities(selectedCities)
      ),
      catchError((_) => of([]))
    );
  }

}

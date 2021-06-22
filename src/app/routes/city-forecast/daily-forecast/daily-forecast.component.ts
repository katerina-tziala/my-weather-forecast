import { Component, Input } from '@angular/core';
import { DailyForecast } from 'src/app/shared/shared-services/weather-forecast/location-weather.interface';

@Component({
  selector: 'app-daily-prediction',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss']
})
export class DailyForecastComponent {
  @Input() public dailyForecast: DailyForecast | null = null;
}

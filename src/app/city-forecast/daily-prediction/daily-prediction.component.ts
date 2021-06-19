import { Component, Input } from '@angular/core';
import { DailyForecast } from 'src/app/shared/shared-services/weather-forecast/location-weather.interface';

@Component({
  selector: 'app-daily-prediction',
  templateUrl: './daily-prediction.component.html',
  styleUrls: ['./daily-prediction.component.scss']
})
export class DailyPredictionComponent {
  @Input() public dailyForecast: DailyForecast | null = null;
}

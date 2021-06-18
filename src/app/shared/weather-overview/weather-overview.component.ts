import { Input } from '@angular/core';
import { Component } from '@angular/core';
import {
  CityListItemForecast,
  WeatherForecast,
} from 'src/app/weather-forecast/location-weather.interface';

@Component({
  selector: 'app-weather-overview',
  templateUrl: './weather-overview.component.html',
  styleUrls: ['./weather-overview.component.scss'],
})
export class WeatherOverviewComponent {
  @Input() public weatherOverview:
    | WeatherForecast
    | CityListItemForecast
    | null = null;
  @Input() public includeRange = false;
}

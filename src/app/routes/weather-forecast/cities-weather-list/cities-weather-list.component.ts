import { Component, Input } from '@angular/core';
import { LocationWeather } from 'src/app/shared/shared-services/weather-forecast/location-weather.interface';

@Component({
  selector: 'app-cities-weather-list',
  templateUrl: './cities-weather-list.component.html',
  styleUrls: ['./cities-weather-list.component.scss']
})
export class CitiesWeatherListComponent {
  @Input() public citiesWeather: LocationWeather[] = [];
}

import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Weather } from 'src/app/weather-forecast/location-weather.interface';

@Component({
  selector: 'app-weather-temperature',
  templateUrl: './weather-temperature.component.html',
  styleUrls: ['./weather-temperature.component.scss'],
})
export class WeatherTemperatureComponent {
  @Input() public weather: Weather | null = null;
  @Input() public includeRange = false;
}

import { Component, Input } from '@angular/core';
import { WeatherDescription } from 'src/app/shared/shared-services/weather-forecast/location-weather.interface';
@Component({
  selector: 'app-weather-description',
  templateUrl: './weather-description.component.html',
  styleUrls: ['./weather-description.component.scss'],
})
export class WeatherDescriptionComponent {
  @Input() public weatherDescription: WeatherDescription | null = null;
  private iconSize = '@4x';
  public iconExtension = this.iconSize + '.png';
  public iconSource = 'https://openweathermap.org/img/wn/';
}

import { Component, Input } from '@angular/core';
import { Wind } from 'src/app/weather-forecast/location-weather.interface';

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.scss']
})
export class WindComponent {
  @Input() public wind: Wind | null = null;
}

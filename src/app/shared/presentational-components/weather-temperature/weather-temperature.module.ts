import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherTemperatureComponent } from './weather-temperature.component';
import { TemperatureComponent } from '../temperature/temperature.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WeatherTemperatureComponent, TemperatureComponent],
  exports: [WeatherTemperatureComponent],
})
export class WeatherTemperatureModule {}

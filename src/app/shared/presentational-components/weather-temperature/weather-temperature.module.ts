import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherTemperatureComponent } from './weather-temperature.component';
import { TemperatureModule } from '../temperature/temperature.module';

@NgModule({
  imports: [CommonModule, TemperatureModule],
  declarations: [WeatherTemperatureComponent],
  exports: [WeatherTemperatureComponent],
})
export class WeatherTemperatureModule {}

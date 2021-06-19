import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherTemperatureComponent } from './weather-temperature.component';
import { TemperatureComponentModule } from '../temperature/temperature.module';

@NgModule({
  imports: [CommonModule, TemperatureComponentModule],
  declarations: [WeatherTemperatureComponent],
  exports: [WeatherTemperatureComponent],
})
export class WeatherTemperatureModule {}

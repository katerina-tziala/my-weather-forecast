import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherOverviewComponent } from './weather-overview.component';
import { WindModule } from '../wind/wind.module';
import { WeatherTemperatureModule } from '../weather-temperature/weather-temperature.module';
import { WeatherDescriptionModule } from '../weather-description/weather-description.module';

@NgModule({
  declarations: [WeatherOverviewComponent],
  imports: [
    CommonModule,
    WindModule,
    WeatherTemperatureModule,
    WeatherDescriptionModule
  ],
  exports: [WeatherOverviewComponent]
})
export class WeatherOverviewModule { }

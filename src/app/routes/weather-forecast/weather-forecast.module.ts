import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherForecastComponent } from './weather-forecast.component';
import { WeatherForecastRouterModule } from './weather-forecast-routing.module';
import { CitiesWeatherListModule } from './cities-weather-list/cities-weather-list.module';

@NgModule({
  imports: [CommonModule, WeatherForecastRouterModule, CitiesWeatherListModule],
  declarations: [WeatherForecastComponent],
  exports: [WeatherForecastComponent],
})
export class WeatherForecastModule {}

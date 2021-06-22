import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesWeatherListComponent } from './cities-weather-list.component';
import { CityModule } from 'src/app/shared/presentational-components/city/city.module';
import { WeatherOverviewModule } from 'src/app/shared/presentational-components/weather-overview/weather-overview.module';
import { WeatherForecastRouterModule } from '../weather-forecast-routing.module';

@NgModule({
  imports: [CommonModule, CityModule, WeatherOverviewModule, WeatherForecastRouterModule],
  declarations: [CitiesWeatherListComponent],
  exports: [CitiesWeatherListComponent]
})
export class CitiesWeatherListModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherOverviewModule } from '../shared/presentational-components/weather-overview/weather-overview.module';
import { CityModule } from '../shared/presentational-components/city/city.module';
import { CitiesForecastListComponent } from './cities-forecast-list.component';
import { CityForecastListRouterModule } from './city-forecast-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CityForecastListRouterModule,
    CityModule,
    WeatherOverviewModule,
  ],
  declarations: [CitiesForecastListComponent],
  exports: [CitiesForecastListComponent],
})
export class CitiesForecastListModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityModule } from 'src/app/shared/presentational-components/city/city.module';
import { WeatherOverviewModule } from 'src/app/shared/presentational-components/weather-overview/weather-overview.module';
import { DailyForecastComponent } from './daily-forecast/daily-forecast.component';
import { CityForecastRouterModule } from './city-forecast-routing.module';
import { CityForecastComponent } from './city-forecast.component';

@NgModule({
  imports: [
    CommonModule,
    CityModule,
    WeatherOverviewModule,
    CityForecastRouterModule,
  ],
  declarations: [CityForecastComponent, DailyForecastComponent],
  exports: [CityForecastComponent],
})
export class CityForecastModule { }

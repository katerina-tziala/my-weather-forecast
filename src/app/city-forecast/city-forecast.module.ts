import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityForecastComponent } from './city-forecast.component';
import { WeatherOverviewModule } from '../shared/presentational-components/weather-overview/weather-overview.module';
import { CityModule } from '../shared/presentational-components/city/city.module';
import { CityForecastRouterModule } from './city-forecast-routing.module';
import { DailyPredictionComponent } from './daily-prediction/daily-prediction.component';

@NgModule({
  imports: [
    CommonModule,
    CityModule,
    WeatherOverviewModule,
    CityForecastRouterModule,
  ],
  declarations: [CityForecastComponent, DailyPredictionComponent],
  exports: [CityForecastComponent],
})
export class CityForecastModule {}

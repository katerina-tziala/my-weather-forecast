import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityForecastComponent } from './city-forecast/city-forecast.component';
import { CitiesForecastListComponent } from './cities-forecast-list/cities-forecast-list.component';
import { CityComponent } from './shared/presentational-components/city/city.component';
import { WindComponent } from './shared/presentational-components/wind/wind.component';
import { TemperatureComponent } from './shared/presentational-components/temperature/temperature.component';
import { WeatherDescriptionComponent } from './shared/presentational-components/weather-description/weather-description.component';
import { WeatherTemperatureComponent } from './shared/presentational-components/weather-temperature/weather-temperature.component';
import { WeatherOverviewComponent } from './shared/presentational-components/weather-overview/weather-overview.component';

@NgModule({
  declarations: [
    AppComponent,
      CityForecastComponent,
      CitiesForecastListComponent,
      WeatherDescriptionComponent,
      CityComponent,
      WindComponent,
      TemperatureComponent,
      WeatherTemperatureComponent,
      WeatherOverviewComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

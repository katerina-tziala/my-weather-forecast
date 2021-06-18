import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityForecastComponent } from './city-forecast/city-forecast.component';
import { CitiesForecastListComponent } from './cities-forecast-list/cities-forecast-list.component';
import { CityComponent } from './shared/city/city.component';
import { WindComponent } from './shared/wind/wind.component';
import { TemperatureComponent } from './shared/temperature/temperature.component';
import { WeatherDescriptionComponent } from './shared/weather-description/weather-description.component';
import { WeatherTemperatureComponent } from './shared/weather-temperature/weather-temperature.component';
import { WeatherOverviewComponent } from './shared/weather-overview/weather-overview.component';

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

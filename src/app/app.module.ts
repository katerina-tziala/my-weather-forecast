import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityForecastComponent } from './city-forecast/city-forecast.component';
import { CitiesForecastListComponent } from './cities-forecast-list/cities-forecast-list.component';

@NgModule({
  declarations: [
    AppComponent,
      CityForecastComponent,
      CitiesForecastListComponent
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

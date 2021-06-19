import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDescriptionComponent } from './weather-description.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WeatherDescriptionComponent],
  exports: [WeatherDescriptionComponent]
})
export class WeatherDescriptionModule { }

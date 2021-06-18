import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesForecastListComponent } from './cities-forecast-list/cities-forecast-list.component';
import { CityForecastComponent } from './city-forecast/city-forecast.component';

const routes: Routes = [
  { path: 'city', component: CityForecastComponent },
  { path: 'weather-forecast', component: CitiesForecastListComponent },
  { path: '', redirectTo: 'weather-forecast', pathMatch: 'full' }, // redirect to
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

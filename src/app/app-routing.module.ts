import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'weather-forecast', pathMatch: 'full' }, // redirect to
  { path: 'weather-forecast',  loadChildren: () =>
  import('./cities-forecast-list/cities-forecast-list.module').then(
    (m) => m.CitiesForecastListModule
  ), },
  {
    path: 'weather-forecast/city',
    loadChildren: () =>
      import('./city-forecast/city-forecast.module').then(
        (m) => m.CityForecastModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CitiesForecastListComponent } from './cities-forecast-list/cities-forecast-list.component';
// import { CityForecastComponent } from './city-forecast/city-forecast.component';

const routes: Routes = [
  // { path: 'weather-forecast/city', component: CityForecastComponent },
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
  },
  // { path: 'weather-forecast', component: CitiesForecastListComponent },
  // { path: '', redirectTo: 'weather-forecast', pathMatch: 'full' }, // redirect to
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

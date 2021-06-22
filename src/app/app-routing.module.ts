import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'weather-forecast', pathMatch: 'full' }, // redirect to
  {
    path: 'weather-forecast',
    loadChildren: () =>
      import('./routes/weather-forecast/weather-forecast.module').then(
        (m) => m.WeatherForecastModule
      ),
  },
  {
    path: 'weather-forecast/city/:name',
    loadChildren: () =>
      import('./routes/city-forecast/city-forecast.module').then(
        (m) => m.CityForecastModule
      ),
  },
  { path: '**', redirectTo: 'weather-forecast' }, // redirect to
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

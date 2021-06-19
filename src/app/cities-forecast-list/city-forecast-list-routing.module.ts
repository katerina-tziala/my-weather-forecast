import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesForecastListComponent } from './cities-forecast-list.component';

const routes: Routes = [{ path: '', component: CitiesForecastListComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityForecastListRouterModule {}

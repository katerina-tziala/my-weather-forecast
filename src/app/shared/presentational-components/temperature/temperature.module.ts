import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperatureComponent } from './temperature.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TemperatureComponent],
  exports: [TemperatureComponent],
})
export class TemperatureModule {}

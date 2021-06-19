import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindComponent } from './wind.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WindComponent],
  exports: [WindComponent],
})
export class WindModule {}
